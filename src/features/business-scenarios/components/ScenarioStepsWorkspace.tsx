import React, { useMemo, useState, useEffect, useRef } from "react";
import { DetailedSequence, SequenceMessage, SequenceParticipant } from "../sequence-diagram/components/RaiaSequenceDiagram";
import { ScenarioStepNarrative } from "../../../domain/types/scenarioNarrativeTypes";
import ScenarioStepList from "./ScenarioStepList";
import ScenarioStepAnalysisPanel from "./ScenarioStepAnalysisPanel";
import ScenarioStepAnalysisDrawer from "./ScenarioStepAnalysisDrawer";

interface ScenarioStepsWorkspaceProps {
  sequence?: DetailedSequence;
  stepNarratives: ScenarioStepNarrative[];
  activeStep: number;
  onStepChange: (sequence: number) => void;
}

export default function ScenarioStepsWorkspace({
  sequence,
  stepNarratives,
  activeStep,
  onStepChange
}: ScenarioStepsWorkspaceProps) {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [panelOffset, setPanelOffset] = useState(0);

  // Sorting and setup
  const messages = useMemo(() => {
    return [...(sequence?.messages ?? [])].sort((a, b) => a.sequence - b.sequence);
  }, [sequence?.messages]);

  const participantsById = useMemo(() => {
    return new Map((sequence?.participants ?? []).map(p => [p.instanceId, p]));
  }, [sequence?.participants]);

  // Handle active state
  const currentIndex = useMemo(() => {
    return messages.findIndex(m => m.sequence === activeStep);
  }, [messages, activeStep]);

  const selectedMessage = currentIndex >= 0 ? messages[currentIndex] : undefined;
  
  const selectedStepNarrative = useMemo(() => {
    if (!selectedMessage) return undefined;
    
    // 1. Trazabilidad rigurosa por messageId (Prioridad Máxima)
    const exactMatch = stepNarratives.find(step => step.messageId === selectedMessage.id);
    if (exactMatch) return exactMatch;
    
    // 2. Fallback por número de secuencia (Legacy)
    return stepNarratives.find(step => step.sequence === activeStep);
  }, [selectedMessage, stepNarratives, activeStep]);

  const source = selectedMessage ? participantsById.get(selectedMessage.sourceParticipantInstanceId) : undefined;
  const target = selectedMessage ? participantsById.get(selectedMessage.targetParticipantInstanceId) : undefined;

  // Navigation handlers
  const handlePrevious = currentIndex > 0 
    ? () => {
        onStepChange(messages[currentIndex - 1].sequence);
      }
    : undefined;

  const handleNext = currentIndex < messages.length - 1 && currentIndex >= 0
    ? () => {
        onStepChange(messages[currentIndex + 1].sequence);
      }
    : undefined;

  // Drawer lifecycle control
  const handleStepClick = (seq: number) => {
    onStepChange(seq);
    // On mobile, opening the drawer
    if (window.innerWidth < 1280) { // xl breakpoint
      setIsDrawerOpen(true);
    }
  };

  // If activeStep changes from outside (e.g. SVG diagram), open drawer automatically in mobile
  useEffect(() => {
    if (activeStep > 0 && window.innerWidth < 1280) {
      setIsDrawerOpen(true);
    }
  }, [activeStep]);

  // Reset drawer when scenario changes (if activeStep goes back to 1 or 0 and it's a new context)
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [sequence?.scenarioId]);

  // Synchronize sidebar height to match the selected step
  useEffect(() => {
    if (!workspaceRef.current) return;

    // Use a slight timeout to ensure DOM reconciliation (especially when navigating very fast)
    const timer = setTimeout(() => {
      const activeCard = workspaceRef.current?.querySelector('[aria-current="step"]');
      const listContainer = workspaceRef.current?.querySelector('[data-testid="scenario-step-list"]');
      
      if (activeCard && listContainer && activeCard instanceof HTMLElement && listContainer instanceof HTMLElement) {
        const cardRect = activeCard.getBoundingClientRect();
        const listRect = listContainer.getBoundingClientRect();
        const offset = cardRect.top - listRect.top;
        setPanelOffset(Math.max(0, offset));
      } else {
        setPanelOffset(0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [activeStep, messages]);

  return (
    <section
      id="structured-steps"
      data-testid="scenario-steps-workspace"
      aria-labelledby="structured-steps-title"
      className="mt-16 pt-16 border-t border-slate-200"
    >
      <header className="mb-8">
        <h2 id="structured-steps-title" className="text-3xl font-black text-slate-900 tracking-tight">
          Pasos estructurados del escenario
        </h2>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-slate-500 font-medium max-w-2xl">
            Secuencia cronológica de interacciones arquitectónicas, flujos de control y transferencias de información.
          </p>
          <span className="hidden sm:inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-bold text-slate-600">
            {messages.length} pasos
          </span>
        </div>
      </header>

      <div 
        ref={workspaceRef}
        className="grid grid-cols-1 xl:grid-cols-[minmax(320px,0.8fr)_minmax(400px,1.2fr)] gap-8 items-start relative"
      >
        {/* Left Column: Compact Step List */}
        <ScenarioStepList 
          messages={messages}
          participantsById={participantsById}
          activeStep={activeStep}
          onStepChange={handleStepClick}
        />

        {/* Right Column: Sticky Analysis Panel (Desktop Only) */}
        <div className="hidden xl:block relative h-full">
          <div 
            className="transition-all duration-500 ease-in-out"
            style={{ marginTop: `${panelOffset}px` }}
          >
            <div className="sticky top-24 h-[calc(100vh-120px)]">
              <ScenarioStepAnalysisPanel 
                message={selectedMessage}
                narrative={selectedStepNarrative}
                source={source}
                target={target}
                currentIndex={currentIndex >= 0 ? currentIndex : 0}
                totalSteps={messages.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <ScenarioStepAnalysisDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        message={selectedMessage}
        narrative={selectedStepNarrative}
        source={source}
        target={target}
        currentIndex={currentIndex >= 0 ? currentIndex : 0}
        totalSteps={messages.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}
