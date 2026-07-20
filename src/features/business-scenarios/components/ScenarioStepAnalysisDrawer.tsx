import React, { useEffect, useRef } from "react";
import ScenarioStepAnalysisPanel from "./ScenarioStepAnalysisPanel";
import { ScenarioStepNarrative } from "../../../domain/types/scenarioNarrativeTypes";
import { SequenceMessage, SequenceParticipant } from "../sequence-diagram/components/RaiaSequenceDiagram";

interface ScenarioStepAnalysisDrawerProps {
  isOpen: boolean;
  message?: SequenceMessage;
  narrative?: ScenarioStepNarrative;
  source?: SequenceParticipant;
  target?: SequenceParticipant;
  
  currentIndex: number;
  totalSteps: number;

  onPrevious?: () => void;
  onNext?: () => void;
  onClose: () => void;
}

export default function ScenarioStepAnalysisDrawer({
  isOpen,
  message,
  narrative,
  source,
  target,
  currentIndex,
  totalSteps,
  onPrevious,
  onNext,
  onClose
}: ScenarioStepAnalysisDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  
  // Handle Escape key & Focus return
  useEffect(() => {
    if (!isOpen) return;
    
    // Store previous focused element
    const previousFocus = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      
      // Return focus if possible
      if (previousFocus && typeof previousFocus.focus === 'function') {
        setTimeout(() => previousFocus.focus(), 10);
      }
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[1px] transition-opacity xl:hidden"
      onClick={handleBackdropClick}
      data-testid="scenario-step-analysis-drawer"
    >
      <div 
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="step-analysis-title"
        className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-[520px] bg-white shadow-2xl transition-transform duration-300 transform translate-x-0"
      >
        <div className="h-full w-full flex flex-col [&>aside]:border-0 [&>aside]:rounded-none">
          <ScenarioStepAnalysisPanel
            message={message}
            narrative={narrative}
            source={source}
            target={target}
            currentIndex={currentIndex}
            totalSteps={totalSteps}
            onPrevious={onPrevious}
            onNext={onNext}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
