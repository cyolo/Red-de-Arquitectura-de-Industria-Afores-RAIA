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

  // Configuration
  const config = {
    paddingX: 60,
    paddingY: 40,
    headerHeight: 40,
    participantWidth: 160,
    participantGap: 60,
    messageMinHeight: 60,
    lifelineTopOffset: 10,
    lifelineBottomPadding: 60,
  };

  // 1. Participant layout
  const participants = useMemo(() => {
    return (sequence.participants || []).map((p, index) => {
      const x = config.paddingX + index * (config.participantWidth + config.participantGap);
      return { ...p, x };
    });
  }, [sequence.participants]);

  // 2. Message Layout (Y positions)
  const messages = useMemo(() => {
    const startY = config.paddingY + config.headerHeight + config.lifelineTopOffset + config.messageMinHeight;
    
    return (sequence.messages || []).map((msg, index) => {
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

  // 3. Fragment Layout
  const fragments = useMemo(() => {
    return (sequence.fragments || []).map((frag) => {
      const startMsg = messages.find(m => m.sequence === frag.startSequence);
      const endMsg = messages.find(m => m.sequence === frag.endSequence) || startMsg;
      
      if (!startMsg) return null;

      // Find boundaries to box all participants involved in this timeframe
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

  // Diagram dimensions
  const totalWidth = participants.length > 0 
    ? participants[participants.length - 1].x + config.participantWidth + config.paddingX
    : 800;
    
  const totalHeight = messages.length > 0
    ? messages[messages.length - 1].y + config.lifelineBottomPadding
    : 400;

  // D3 Zoom Setup
  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;
    
    const svg = select(svgRef.current);
    const g = svg.select("g.zoom-layer");
    
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });
      
    zoomRef.current = zoom;
    svg.call(zoom as any);
    
    const wrapperWidth = wrapperRef.current.clientWidth;
    const wrapperHeight = wrapperRef.current.clientHeight;
    
    const scaleX = wrapperWidth / totalWidth;
    const scaleY = wrapperHeight / totalHeight;
    const initialScale = Math.min(scaleX, scaleY, 1) * 0.95;
    
    const initialX = (wrapperWidth - totalWidth * initialScale) / 2;
    const initialY = (wrapperHeight - totalHeight * initialScale) / 2;
    
    svg.call(zoom.transform as any, d3.zoomIdentity.translate(initialX, Math.max(initialY, 20)).scale(initialScale));
  }, [totalWidth, totalHeight]);

  if (!sequence) return <div className="p-8 text-center text-slate-500">Cargando secuencia...</div>;

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

      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing">
        <defs>
          <marker id="arrow-filled" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0d9488" />
          </marker>
          <marker id="arrow-response" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8 z" fill="#64748b" />
          </marker>
        </defs>

        <g className="zoom-layer">
          <rect x={10} y={10} width={totalWidth - 20} height={totalHeight - 20} fill="none" stroke="#e2e8f0" strokeWidth="2" rx="8" />
          <path d={`M 10 40 L 250 40 L 260 55 L ${totalWidth - 10} 55`} fill="none" stroke="#e2e8f0" strokeWidth="2" />
          <text x={20} y={30} fontSize="12" fontWeight="bold" fill="#64748b" fontFamily="sans-serif">
            sd {sequence.scenarioId} — {sequence.title}
          </text>

          {participants.map((p) => (
            <line
              key={`lifeline-${p.instanceId}`}
              x1={p.x + config.participantWidth / 2}
              y1={config.paddingY + config.headerHeight}
              x2={p.x + config.participantWidth / 2}
              y2={totalHeight - config.lifelineBottomPadding}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6,6"
            />
          ))}

          {/* Render Fragments */}
          {fragments.map((frag: any, i) => (
            <g key={`frag-${i}`}>
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

          {/* Participant Headers */}
          {participants.map((p) => (
            <g key={`header-${p.instanceId}`} transform={`translate(${p.x}, ${config.paddingY})`}>
              <rect width={config.participantWidth} height={config.headerHeight} fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" rx="4" />
              <text x={config.participantWidth / 2} y={config.headerHeight / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#854d0e" fontFamily="sans-serif">
                :{p.label.length > 22 ? p.label.substring(0, 20) + "..." : p.label}
              </text>
            </g>
          ))}

          {/* Messages */}
          {messages.map((m) => {
            const isActive = m.sequence === activeStep;
            const isResponse = m.messageType === 'response';
            const strokeColor = isActive ? "#0d9488" : (isResponse ? "#64748b" : "#0f172a");
            const markerEnd = isActive ? "url(#arrow-active)" : (isResponse ? "url(#arrow-response)" : "url(#arrow-filled)");
            
            return (
              <g 
                key={`msg-${m.sequence}`} 
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
        </g>
      </svg>
    </div>
  );
}
