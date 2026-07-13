"use client";

import React, { useRef, useMemo } from "react";
import { SequenceDiagramCanvas } from "./SequenceDiagramCanvas";
import { SequenceDiagramToolbar } from "./SequenceDiagramToolbar";
import { calculateSequenceLayout } from "../layout/sequenceLayoutEngine";
import { defaultSequenceDiagramLayoutConfig } from "../styles/sequenceDiagramTokens";
import { useSequenceDiagramZoom } from "../hooks/useSequenceDiagramZoom";
import { useSequenceDiagramFullscreen } from "../hooks/useSequenceDiagramFullscreen";
import { useSequenceDiagramKeyboard } from "../hooks/useSequenceDiagramKeyboard";

export interface SequenceParticipant {
  instanceId: string;
  label: string;
  order: number;
}

export interface SequenceMessage {
  id: string;
  sequence: number;
  sourceParticipantInstanceId: string;
  targetParticipantInstanceId: string;
  label: string;
  description?: string;
  messageType: string;
  expectedOutcome?: string;
}

export interface ActivationSpan {
  id: string;
  participantInstanceId: string;
  startSequence: number;
  endSequence: number;
  depth: number;
  activationType: string;
}

export interface SequenceNote {
  id: string;
  participantInstanceIds: string[];
  placement: string;
  text: string;
  noteType: string;
  afterSequence?: number;
}

export interface SequenceFragmentBranch {
  id: string;
  label: string;
  startSequence: number;
  endSequence: number;
}

export interface SequenceFragment {
  id: string;
  fragmentType: string;
  label: string;
  startSequence: number;
  endSequence: number;
  branches?: SequenceFragmentBranch[];
}

export interface DetailedSequence {
  scenarioId: string;
  title: string;
  participants: SequenceParticipant[];
  messages: SequenceMessage[];
  activations?: ActivationSpan[];
  notes?: SequenceNote[];
  fragments?: SequenceFragment[];
}

interface Props {
  sequence: DetailedSequence;
  activeStep?: number;
  onStepClick?: (stepNumber: number) => void;
}

export default function RaiaSequenceDiagram({ sequence, activeStep, onStepClick }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 1. Calculate the entire deterministic mathematical layout
  const layout = useMemo(() => {
    return calculateSequenceLayout(sequence, defaultSequenceDiagramLayoutConfig);
  }, [sequence]);

  // 2. Fullscreen Lifecycle
  const { isFullscreen, toggleFullscreen, exitFullscreen } = useSequenceDiagramFullscreen(wrapperRef);

  // 3. Zooming and Panning Lifecycle
  const { zoomIn, zoomOut, fitDiagramToViewport, resetZoom } = useSequenceDiagramZoom({
    svgRef,
    wrapperRef,
    totalWidth: layout.width,
    totalHeight: layout.height,
    isFullscreen
  });

  // 4. Keyboard Navigation Shortcuts
  useSequenceDiagramKeyboard({
    svgRef,
    zoomIn,
    zoomOut,
    fitDiagramToViewport,
    resetZoom,
    toggleFullscreen,
    exitFullscreen,
    isFullscreen
  });

  if (!sequence) return null;

  return (
    <figure
      ref={wrapperRef}
      className={`
        relative w-full overflow-hidden bg-[#f8fafc] border border-slate-200 shadow-inner
        transition-all duration-300
        ${isFullscreen 
          ? "fixed inset-0 z-[100] m-0 rounded-none h-[100dvh]" 
          : "min-h-[720px] h-[clamp(720px,78vh,1040px)] rounded-2xl"
        }
      `}
      aria-labelledby={`sequence-title-${sequence.scenarioId}`}
      aria-describedby={`sequence-description-${sequence.scenarioId}`}
    >
      {/* Background elegant pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      {/* Control Panel */}
      <SequenceDiagramToolbar
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        fitDiagramToViewport={fitDiagramToViewport}
        resetZoom={resetZoom}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />

      {/* Main SVG Vector Canvas */}
      <div className="absolute inset-0 z-10 sequence-diagram-viewport">
        <SequenceDiagramCanvas
          svgRef={svgRef}
          layout={layout}
          sequenceId={sequence.scenarioId}
          sequenceTitle={sequence.title}
          activeStep={activeStep}
          onStepClick={onStepClick}
          config={defaultSequenceDiagramLayoutConfig}
        />
      </div>
    </figure>
  );
}
