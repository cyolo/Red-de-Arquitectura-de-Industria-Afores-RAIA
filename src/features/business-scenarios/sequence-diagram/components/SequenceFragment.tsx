import React from 'react';
import { LayoutFragment } from '../layout/sequenceLayoutEngine';

export function SequenceFragment({ fragment }: { fragment: LayoutFragment }) {
  const { x, y, width, height, fragmentType, label, branches, branchYPositions } = fragment;

  return (
    <g data-testid="sequence-fragment">
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill="#f8fafc" 
        fillOpacity="0.75" 
        stroke="#94a3b8" 
        strokeWidth="1.5" 
        rx="6" 
      />
      {/* Tab/Label area */}
      <path 
        d={`M ${x} ${y + 24} L ${x + 50} ${y + 24} L ${x + 60} ${y} L ${x + 6} ${y} Z`} 
        fill="#f1f5f9" 
        stroke="#94a3b8" 
        strokeWidth="1.5" 
      />
      <text 
        x={x + 8} 
        y={y + 16} 
        fontSize="11" 
        fontWeight="800" 
        fill="#334155" 
        fontFamily="monospace"
      >
        {fragmentType}
      </text>
      <text 
        x={x + 68} 
        y={y + 16} 
        fontSize="11" 
        fontWeight="600" 
        fill="#475569" 
        fontFamily="sans-serif"
      >
        [{label}]
      </text>

      {/* Branches (else, alt paths) */}
      {branches?.map((branch, bIdx) => {
        const branchY = branchYPositions[bIdx];
        if (!branchY) return null;
        
        return (
          <g key={`branch-${bIdx}`}>
            <line 
              x1={x} 
              y1={branchY} 
              x2={x + width} 
              y2={branchY} 
              stroke="#cbd5e1" 
              strokeDasharray="4,4" 
              strokeWidth="1.5" 
            />
            <text 
              x={x + 8} 
              y={branchY + 14} 
              fontSize="10" 
              fontWeight="bold" 
              fill="#64748b" 
              fontFamily="monospace"
            >
              [else {branch.label}]
            </text>
          </g>
        );
      })}
    </g>
  );
}
