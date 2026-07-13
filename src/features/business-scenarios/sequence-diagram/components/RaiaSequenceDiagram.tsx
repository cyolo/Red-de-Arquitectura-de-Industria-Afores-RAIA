"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3-zoom";
import { select } from "d3-selection";
import { BusinessScenario, ServiceDomain } from "../../../../domain/types";

interface Props {
  scenario: BusinessScenario;
  serviceDomains: ServiceDomain[];
  activeStep?: number;
  onStepClick?: (stepNumber: number) => void;
}

export default function RaiaSequenceDiagram({ scenario, serviceDomains, activeStep, onStepClick }: Props) {
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
    lifelineBottomPadding: 40,
  };

  // 1. Extract participants (unique sourceId and targetId)
  const participants = useMemo(() => {
    const pSet = new Set<string>();
    scenario.steps.forEach((step) => {
      pSet.add(step.sourceId);
      pSet.add(step.targetId);
    });
    
    // Convert to array and calculate X positions
    return Array.from(pSet).map((id, index) => {
      const sd = serviceDomains.find(s => s.id === id);
      const name = sd ? sd.nameEs : id;
      const x = config.paddingX + index * (config.participantWidth + config.participantGap);
      return { id, name, x };
    });
  }, [scenario.steps, serviceDomains]);

  // 2. Calculate Message Layout (Y positions)
  const messages = useMemo(() => {
    const startY = config.paddingY + config.headerHeight + config.lifelineTopOffset + config.messageMinHeight;
    
    return scenario.steps.map((step, index) => {
      const source = participants.find(p => p.id === step.sourceId);
      const target = participants.find(p => p.id === step.targetId);
      
      const y = startY + index * config.messageMinHeight;
      const isSelf = source?.id === target?.id;
      
      return {
        ...step,
        sourceX: source ? source.x + config.participantWidth / 2 : 0,
        targetX: target ? target.x + config.participantWidth / 2 : 0,
        y,
        isSelf
      };
    });
  }, [scenario.steps, participants]);

  // 3. Diagram dimensions
  const totalWidth = participants.length > 0 
    ? participants[participants.length - 1].x + config.participantWidth + config.paddingX
    : 800;
    
  const totalHeight = messages.length > 0
    ? messages[messages.length - 1].y + config.lifelineBottomPadding
    : 400;

  // 4. Setup D3 Zoom
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
    
    // Initial center fit
    const wrapperWidth = wrapperRef.current.clientWidth;
    const wrapperHeight = wrapperRef.current.clientHeight;
    
    const scaleX = wrapperWidth / totalWidth;
    const scaleY = wrapperHeight / totalHeight;
    const initialScale = Math.min(scaleX, scaleY, 1) * 0.95; // 95% fit
    
    const initialX = (wrapperWidth - totalWidth * initialScale) / 2;
    const initialY = (wrapperHeight - totalHeight * initialScale) / 2;
    
    svg.call(zoom.transform as any, d3.zoomIdentity.translate(initialX, Math.max(initialY, 20)).scale(initialScale));
  }, [totalWidth, totalHeight]);

  return (
    <div ref={wrapperRef} className="w-full h-[600px] bg-white rounded-xl border border-slate-200 overflow-hidden relative shadow-inner">
      {/* Toolbar overlay */}
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
        {/* SVG Defs for markers */}
        <defs>
          <marker id="arrow-filled" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0d9488" />
          </marker>
        </defs>

        <g className="zoom-layer">
          {/* Frame & Header */}
          <rect x={10} y={10} width={totalWidth - 20} height={totalHeight - 20} fill="none" stroke="#e2e8f0" strokeWidth="2" rx="8" />
          <path d={`M 10 40 L 250 40 L 260 55 L ${totalWidth - 10} 55`} fill="none" stroke="#e2e8f0" strokeWidth="2" />
          <text x={20} y={30} fontSize="12" fontWeight="bold" fill="#64748b" fontFamily="sans-serif">
            sd {scenario.id} — {scenario.name}
          </text>

          {/* Lifelines */}
          {participants.map((p) => (
            <line
              key={`lifeline-${p.id}`}
              x1={p.x + config.participantWidth / 2}
              y1={config.paddingY + config.headerHeight}
              x2={p.x + config.participantWidth / 2}
              y2={totalHeight - config.lifelineBottomPadding}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6,6"
            />
          ))}

          {/* Participant Headers */}
          {participants.map((p) => (
            <g key={`header-${p.id}`} transform={`translate(${p.x}, ${config.paddingY})`}>
              <rect
                width={config.participantWidth}
                height={config.headerHeight}
                fill="#fef9c3"
                stroke="#ca8a04"
                strokeWidth="1.5"
                rx="4"
              />
              <text
                x={config.participantWidth / 2}
                y={config.headerHeight / 2 + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill="#854d0e"
                fontFamily="sans-serif"
              >
                :{p.name.length > 22 ? p.name.substring(0, 20) + "..." : p.name}
              </text>
            </g>
          ))}

          {/* Messages */}
          {messages.map((m) => {
            const isActive = m.stepNumber === activeStep;
            const strokeColor = isActive ? "#0d9488" : "#0f172a";
            const markerEnd = isActive ? "url(#arrow-active)" : "url(#arrow-filled)";
            
            return (
              <g 
                key={`msg-${m.stepNumber}`} 
                onClick={() => onStepClick?.(m.stepNumber)}
                className="cursor-pointer transition-opacity hover:opacity-80"
              >
                {/* Invisible larger hit area for clicking */}
                <rect 
                  x={Math.min(m.sourceX, m.targetX) - 10} 
                  y={m.y - 20} 
                  width={Math.abs(m.targetX - m.sourceX) + 20} 
                  height={40} 
                  fill="transparent" 
                />

                {m.isSelf ? (
                  // Self-message arc
                  <path
                    d={`M ${m.sourceX} ${m.y} L ${m.sourceX + 30} ${m.y} L ${m.sourceX + 30} ${m.y + 15} L ${m.sourceX} ${m.y + 15}`}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isActive ? "2.5" : "1.5"}
                    markerEnd={markerEnd}
                  />
                ) : (
                  // Horizontal message
                  <line
                    x1={m.sourceX}
                    y1={m.y}
                    x2={m.targetX}
                    y2={m.y}
                    stroke={strokeColor}
                    strokeWidth={isActive ? "2.5" : "1.5"}
                    markerEnd={markerEnd}
                  />
                )}

                {/* Message Label */}
                <text
                  x={m.isSelf ? m.sourceX + 35 : (m.sourceX + m.targetX) / 2}
                  y={m.y - 6}
                  textAnchor={m.isSelf ? "start" : "middle"}
                  fontSize="11"
                  fontWeight={isActive ? "bold" : "normal"}
                  fill={strokeColor}
                  fontFamily="sans-serif"
                >
                  [{m.stepNumber}] {m.eventName || 'Mensaje'}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
