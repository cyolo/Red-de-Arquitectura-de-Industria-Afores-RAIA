import React from 'react';
import { LayoutResult } from '../layout/sequenceLayoutEngine';
import { SequenceParticipantHeader } from './SequenceParticipantHeader';
import { SequenceLifeline } from './SequenceLifeline';
import { SequenceFragment } from './SequenceFragment';
import { SequenceActivation } from './SequenceActivation';
import { SequenceMessage } from './SequenceMessage';
import { SequenceNote } from './SequenceNote';

interface Props {
  svgRef: React.RefObject<SVGSVGElement | null>;
  layout: LayoutResult;
  sequenceId: string;
  sequenceTitle: string;
  activeStep?: number;
  onStepClick?: (stepNumber: number) => void;
  config: any;
}

export function SequenceDiagramCanvas({
  svgRef,
  layout,
  sequenceId,
  sequenceTitle,
  activeStep,
  onStepClick,
  config
}: Props) {
  const markerPrefix = `seq-${sequenceId.toLowerCase()}`;
  
  const hasActiveStep = activeStep !== undefined;

  return (
    <svg 
      ref={svgRef} 
      width="100%"
      height="100%"
      role="img"
      aria-labelledby={`sequence-title-${sequenceId}`}
      aria-describedby={`sequence-description-${sequenceId}`}
      className="w-full h-full cursor-grab active:cursor-grabbing outline-none"
      tabIndex={0}
    >
      <title id={`sequence-title-${sequenceId}`}>{sequenceTitle}</title>
      <desc id={`sequence-description-${sequenceId}`}>
        Diagrama de secuencia vectorial con {layout.participants.length} participantes y {layout.messages.length} interacciones.
      </desc>

      <defs>
        <marker id={`${markerPrefix}-arrow-filled`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
        </marker>
        <marker id={`${markerPrefix}-arrow-active`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0d9488" />
        </marker>
        <marker id={`${markerPrefix}-arrow-response`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 2 L 10 5 L 0 8 z" fill="#64748b" />
        </marker>
        <marker id={`${markerPrefix}-arrow-error`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
      </defs>

      <g className="zoom-layer">
        {/* Background Canvas Layer */}
        <rect x={10} y={10} width={layout.width - 20} height={layout.height - 20} fill="none" stroke="#f1f5f9" strokeWidth="1" rx="12" />
        
        {/* Diagram title tab */}
        <path d={`M 10 40 L 250 40 L 260 55 L ${layout.width - 10} 55`} fill="none" stroke="#e2e8f0" strokeWidth="2" />
        <text x={24} y={30} fontSize="13" fontWeight="bold" fill="#64748b" fontFamily="sans-serif">
          sd {sequenceId}
        </text>

        {/* 1. Lifelines */}
        {layout.participants.map(p => (
          <SequenceLifeline 
            key={`lifeline-${p.instanceId}`} 
            participant={p} 
            config={config} 
            totalHeight={layout.height} 
          />
        ))}

        {/* 2. Fragments (Background) */}
        {layout.fragments.map((frag, i) => (
          <SequenceFragment key={`frag-${i}`} fragment={frag} />
        ))}

        {/* 3. Activations */}
        {layout.activations.map((act, i) => (
          <SequenceActivation key={`act-${i}`} activation={act} />
        ))}

        {/* 4. Participant Headers */}
        {layout.participants.map(p => {
          // Check if participant is involved in the active message
          let isSelected = false;
          if (hasActiveStep) {
            const activeMsg = layout.messages.find(m => m.sequence === activeStep);
            if (activeMsg && (activeMsg.sourceParticipantInstanceId === p.instanceId || activeMsg.targetParticipantInstanceId === p.instanceId)) {
              isSelected = true;
            }
          }
          return (
            <SequenceParticipantHeader 
              key={`header-${p.instanceId}`} 
              participant={p} 
              config={config} 
              isSelected={isSelected}
            />
          );
        })}

        {/* 5. Messages */}
        {layout.messages.map(m => {
          const isActive = m.sequence === activeStep;
          const isFaded = hasActiveStep && !isActive;
          return (
            <SequenceMessage 
              key={`msg-${m.sequence}`} 
              message={m} 
              isActive={isActive}
              isFaded={isFaded}
              markerPrefix={markerPrefix}
              onClick={() => onStepClick?.(m.sequence)}
            />
          );
        })}

        {/* 6. Notes (Foreground) */}
        {layout.notes.map((note, i) => (
          <SequenceNote key={`note-${i}`} note={note} />
        ))}
        
      </g>
    </svg>
  );
}
