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
    if (window.innerWidth < 768) { // md breakpoint
      setIsDrawerOpen(true);
    }
  };

  // If activeStep changes from outside (e.g. SVG diagram), open drawer automatically in mobile
  useEffect(() => {
    if (activeStep > 0 && window.innerWidth < 768) {
      setIsDrawerOpen(true);
    }
  }, [activeStep]);

  // Reset drawer when scenario changes (if activeStep goes back to 1 or 0 and it's a new context)
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [sequence?.scenarioId]);

  return (
    <section
      id="structured-steps"
      data-testid="scenario-steps-workspace"
      aria-labelledby="structured-steps-title"
      className="p-4"
    >
      <header className="mb-4">
        <h2 id="structured-steps-title" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
          Flujo y Pasos Estructurados ({messages.length})
        </h2>
      </header>

      <div 
        ref={workspaceRef}
        className="flex flex-col gap-4"
      >
        {/* Top: Compact Step List */}
        <ScenarioStepList 
          messages={messages}
          participantsById={participantsById}
          activeStep={activeStep}
          onStepChange={handleStepClick}
        />

        {/* Bottom: Analysis Panel (Desktop/Tablet Only) */}
        <div className="hidden md:block" data-testid="scenario-step-analysis-panel">
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

      {/* Mobile Drawer */}
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
