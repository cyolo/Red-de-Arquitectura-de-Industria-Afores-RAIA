"use client";

import React, { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3-zoom";
import { select } from "d3-selection";

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
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const config = {
    paddingX: 60,
    paddingY: 40,
    headerHeight: 40,
    participantWidth: 160,
    participantGap: 60,
    messageMinHeight: 60,
    lifelineTopOffset: 10,
    lifelineBottomPadding: 80,
  };

  const markerPrefix = `seq-${sequence.scenarioId.toLowerCase()}`;

  // Phase 4 - Sorting
  const participants = useMemo(() => {
    return [...(sequence.participants ?? [])]
      .sort((a, b) => a.order - b.order)
      .map((participant, index) => {
        const x = config.paddingX + index * (config.participantWidth + config.participantGap);
        return { ...participant, x };
      });
  }, [sequence.participants]);

  const messages = useMemo(() => {
    const startY = config.paddingY + config.headerHeight + config.lifelineTopOffset + config.messageMinHeight;
    const sortedMessages = [...(sequence.messages ?? [])].sort((a, b) => a.sequence - b.sequence);
    
    return sortedMessages.map((msg, index) => {
      const source = participants.find(p => p.instanceId === msg.sourceParticipantInstanceId);
      const target = participants.find(p => p.instanceId === msg.targetParticipantInstanceId);
      
      const y = startY + index * config.messageMinHeight;
      const isSelf = source?.instanceId === target?.instanceId;
      
      return {
        ...msg,
        sourceX: source ? source.x + config.participantWidth / 2 : 0,
        targetX: target ? target.x + config.participantWidth / 2 : 0,
        y,
        isSelf
      };
    });
  }, [sequence.messages, participants]);

  const activations = useMemo(() => {
    return (sequence.activations ?? []).map(act => {
      const participant = participants.find(p => p.instanceId === act.participantInstanceId);
      const startMsg = messages.find(m => m.sequence === act.startSequence);
      const endMsg = messages.find(m => m.sequence === act.endSequence);
      
      if (!participant || !startMsg) return null;
      
      return {
        ...act,
        x: participant.x + config.participantWidth / 2 - 8,
        y: startMsg.y - 15,
        width: 16,
        height: (endMsg ? endMsg.y : startMsg.y) - startMsg.y + 30
      };
    }).filter(Boolean);
  }, [sequence.activations, messages, participants]);

  const notes = useMemo(() => {
    return (sequence.notes ?? []).map(note => {
      const participant = participants.find(p => p.instanceId === note.participantInstanceIds[0]);
      const targetMsg = messages.find(m => m.sequence === (note.afterSequence || 1));
      
      if (!participant || !targetMsg) return null;
      
      const isRight = note.placement === 'right';
      const x = participant.x + config.participantWidth / 2 + (isRight ? 20 : -140);
      const y = targetMsg.y + 15;
      
      const colorMap: any = {
        control: { bg: '#fef08a', stroke: '#ca8a04' },
        evidence: { bg: '#e0f2fe', stroke: '#0284c7' },
        information: { bg: '#f8fafc', stroke: '#cbd5e1' }
      };
      
      return {
        ...note,
        x,
        y,
        width: 120,
        height: 40,
        colors: colorMap[note.noteType] || colorMap.information
      };
    }).filter(Boolean);
  }, [sequence.notes, messages, participants]);

  const fragments = useMemo(() => {
    return (sequence.fragments || []).map((frag) => {
      const startMsg = messages.find(m => m.sequence === frag.startSequence);
      const endMsg = messages.find(m => m.sequence === frag.endSequence) || startMsg;
      
      if (!startMsg) return null;

      const allX = messages
        .filter(m => m.sequence >= frag.startSequence && m.sequence <= frag.endSequence)
        .flatMap(m => [m.sourceX, m.targetX]);
        
      const minX = Math.min(...allX, startMsg.sourceX) - 30;
      const maxX = Math.max(...allX, startMsg.sourceX) + 30;
      
      const startY = startMsg.y - 30;
      const endY = (endMsg ? endMsg.y : startY) + 30;

      return {
        ...frag,
        x: minX,
        y: startY,
        width: Math.max(maxX - minX, 150),
        height: endY - startY
      };
    }).filter(Boolean);
  }, [sequence.fragments, messages]);

  const rawWidth = participants.length > 0 
    ? participants[participants.length - 1].x + config.participantWidth + config.paddingX
    : 800;
  const safeTotalWidth = Number.isFinite(rawWidth) && rawWidth > 0 ? rawWidth : 800;
    
  const rawHeight = messages.length > 0
    ? messages[messages.length - 1].y + config.lifelineBottomPadding
    : 400;
  const safeTotalHeight = Number.isFinite(rawHeight) && rawHeight > 0 ? rawHeight : 400;

  // Fit Diagram Function (Phase 6 and 7)
  const fitDiagramToViewport = () => {
    if (!svgRef.current || !wrapperRef.current || !zoomRef.current) return;
    
    const wrapperWidth = wrapperRef.current.clientWidth;
    const wrapperHeight = wrapperRef.current.clientHeight;

    if (
      wrapperWidth <= 0 ||
      wrapperHeight <= 0 ||
      !Number.isFinite(wrapperWidth) ||
      !Number.isFinite(wrapperHeight)
    ) {
      return;
    }

    const initialScale = Math.max(
      0.3,
      Math.min(
        wrapperWidth / safeTotalWidth,
        wrapperHeight / safeTotalHeight,
        1
      ) * 0.95
    );

    const initialX = (wrapperWidth - safeTotalWidth * initialScale) / 2;
    const initialY = Math.max((wrapperHeight - safeTotalHeight * initialScale) / 2, 20);

    if (
      Number.isFinite(initialScale) &&
      Number.isFinite(initialX) &&
      Number.isFinite(initialY)
    ) {
      select(svgRef.current).call(
        zoomRef.current.transform as any,
        d3.zoomIdentity.translate(initialX, initialY).scale(initialScale)
      );
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = select(svgRef.current);
    const g = svg.select("g.zoom-layer");
    
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });
      
    zoomRef.current = zoom;
    svg.call(zoom as any);
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    fitDiagramToViewport();
    
    const observer = new ResizeObserver(() => {
      fitDiagramToViewport();
    });

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, [sequence.scenarioId, safeTotalWidth, safeTotalHeight]);

  if (!sequence) return null;

  return (
    <div ref={wrapperRef} className="w-full h-[600px] bg-white rounded-xl border border-slate-200 overflow-hidden relative shadow-inner">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button 
          onClick={() => {
            if (svgRef.current && zoomRef.current) {
              select(svgRef.current as any).transition().duration(300).call(zoomRef.current.scaleBy, 1.2);
            }
          }}
          className="bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 font-bold text-lg"
          title="Acercar"
        >
          +
        </button>
        <button 
          onClick={() => {
            if (svgRef.current && zoomRef.current) {
              select(svgRef.current as any).transition().duration(300).call(zoomRef.current.scaleBy, 0.8);
            }
          }}
          className="bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 font-bold text-lg"
          title="Alejar"
        >
          -
        </button>
      </div>

      <svg 
        ref={svgRef} 
        width="100%"
        height="100%"
        viewBox={`0 0 ${Math.max(safeTotalWidth, 1)} ${Math.max(safeTotalHeight, 1)}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby={`sequence-title-${sequence.scenarioId}`}
        aria-describedby={`sequence-description-${sequence.scenarioId}`}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <title id={`sequence-title-${sequence.scenarioId}`}>
          {sequence.title}
        </title>
        <desc id={`sequence-description-${sequence.scenarioId}`}>
          Diagrama de secuencia con {participants.length} participantes y {messages.length} interacciones.
        </desc>

        <defs>
          <marker id={`${markerPrefix}-arrow-filled`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
          </marker>
          <marker id={`${markerPrefix}-arrow-active`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0d9488" />
          </marker>
          <marker id={`${markerPrefix}-arrow-response`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8 z" fill="#64748b" />
          </marker>
        </defs>

        <g className="zoom-layer">
          <rect x={10} y={10} width={safeTotalWidth - 20} height={safeTotalHeight - 20} fill="none" stroke="#e2e8f0" strokeWidth="2" rx="8" />
          <path d={`M 10 40 L 250 40 L 260 55 L ${safeTotalWidth - 10} 55`} fill="none" stroke="#e2e8f0" strokeWidth="2" />
          <text x={20} y={30} fontSize="12" fontWeight="bold" fill="#64748b" fontFamily="sans-serif">
            sd {sequence.scenarioId} — {sequence.title}
          </text>

          {participants.map((p) => (
            <line
              key={`lifeline-${p.instanceId}`}
              data-testid="sequence-lifeline"
              x1={p.x + config.participantWidth / 2}
              y1={config.paddingY + config.headerHeight}
              x2={p.x + config.participantWidth / 2}
              y2={safeTotalHeight - config.lifelineBottomPadding}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6,6"
            />
          ))}

          {fragments.map((frag: any, i) => (
            <g key={`frag-${i}`} data-testid="sequence-fragment">
              <rect x={frag.x} y={frag.y} width={frag.width} height={frag.height} fill="#f8fafc" fillOpacity="0.7" stroke="#94a3b8" strokeWidth="1" rx="4" />
              <path d={`M ${frag.x} ${frag.y + 20} L ${frag.x + 40} ${frag.y + 20} L ${frag.x + 50} ${frag.y} L ${frag.x} ${frag.y} Z`} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
              <text x={frag.x + 5} y={frag.y + 14} fontSize="10" fontWeight="bold" fill="#334155" fontFamily="monospace">
                {frag.fragmentType}
              </text>
              <text x={frag.x + 60} y={frag.y + 14} fontSize="10" fill="#475569" fontFamily="sans-serif">
                [{frag.label}]
              </text>
              {frag.branches?.map((branch: any, bIdx: number) => {
                const branchMsg = messages.find(m => m.sequence === branch.startSequence);
                if (!branchMsg) return null;
                const branchY = branchMsg.y - 15;
                return (
                  <g key={`branch-${bIdx}`}>
                    <line x1={frag.x} y1={branchY} x2={frag.x + frag.width} y2={branchY} stroke="#cbd5e1" strokeDasharray="4,4" strokeWidth="1" />
                    <text x={frag.x + 5} y={branchY + 12} fontSize="9" fontWeight="bold" fill="#64748b" fontFamily="monospace">
                      [else {branch.label}]
                    </text>
                  </g>
                );
              })}
            </g>
          ))}

          {activations.map((act: any, i) => (
            <rect
              key={`act-${i}`}
              data-testid="sequence-activation"
              x={act.x}
              y={act.y}
              width={act.width}
              height={act.height}
              fill="#ffffff"
              stroke="#94a3b8"
              strokeWidth={1}
            />
          ))}

          {participants.map((p) => (
            <g key={`header-${p.instanceId}`} data-testid="sequence-participant" transform={`translate(${p.x}, ${config.paddingY})`}>
              <rect width={config.participantWidth} height={config.headerHeight} fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" rx="4" />
              <text x={config.participantWidth / 2} y={config.headerHeight / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#854d0e" fontFamily="sans-serif">
                :{p.label.length > 22 ? p.label.substring(0, 20) + "..." : p.label}
              </text>
            </g>
          ))}

          {messages.map((m) => {
            const isActive = m.sequence === activeStep;
            const isResponse = m.messageType === 'response';
            const strokeColor = isActive ? "#0d9488" : (isResponse ? "#64748b" : "#0f172a");
            const markerEnd = isActive ? `url(#${markerPrefix}-arrow-active)` : (isResponse ? `url(#${markerPrefix}-arrow-response)` : `url(#${markerPrefix}-arrow-filled)`);
            
            return (
              <g 
                key={`msg-${m.sequence}`} 
                data-testid="sequence-message"
                onClick={() => onStepClick?.(m.sequence)}
                className="cursor-pointer transition-opacity hover:opacity-80"
              >
                <rect x={Math.min(m.sourceX, m.targetX) - 10} y={m.y - 20} width={Math.abs(m.targetX - m.sourceX) + 20} height={40} fill="transparent" />

                {m.isSelf ? (
                  <path d={`M ${m.sourceX} ${m.y} L ${m.sourceX + 30} ${m.y} L ${m.sourceX + 30} ${m.y + 15} L ${m.sourceX} ${m.y + 15}`} fill="none" stroke={strokeColor} strokeWidth={isActive ? "2.5" : "1.5"} markerEnd={markerEnd} strokeDasharray={isResponse ? "4,4" : "0"} />
                ) : (
                  <line x1={m.sourceX} y1={m.y} x2={m.targetX} y2={m.y} stroke={strokeColor} strokeWidth={isActive ? "2.5" : "1.5"} markerEnd={markerEnd} strokeDasharray={isResponse ? "6,4" : "0"} />
                )}

                <text x={m.isSelf ? m.sourceX + 35 : (m.sourceX + m.targetX) / 2} y={m.y - 6} textAnchor={m.isSelf ? "start" : "middle"} fontSize="11" fontWeight={isActive ? "bold" : "normal"} fill={strokeColor} fontFamily="sans-serif">
                  [{m.sequence}] {m.label}
                </text>
              </g>
            );
          })}

          {notes.map((note: any, i) => (
            <g key={`note-${i}`} data-testid="sequence-note" transform={`translate(${note.x}, ${note.y})`}>
              <path d={`M 0 0 L ${note.width - 10} 0 L ${note.width} 10 L ${note.width} ${note.height} L 0 ${note.height} Z`} fill={note.colors.bg} stroke={note.colors.stroke} strokeWidth="1" />
              <path d={`M ${note.width - 10} 0 L ${note.width - 10} 10 L ${note.width} 10`} fill="none" stroke={note.colors.stroke} strokeWidth="1" />
              <text x="5" y="15" fontSize="9" fontWeight="bold" fill={note.colors.stroke} fontFamily="sans-serif" style={{textTransform: 'uppercase'}}>{note.noteType}</text>
              <foreignObject x="5" y="20" width={note.width - 10} height={note.height - 20}>
                <div style={{ fontSize: '9px', color: '#475569', lineHeight: '1.2' }}>
                  {note.text}
                </div>
              </foreignObject>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
