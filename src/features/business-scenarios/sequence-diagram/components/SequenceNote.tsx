import React from 'react';
import { LayoutNote } from '../layout/sequenceLayoutEngine';
import { WrappedSvgText } from '../layout/wrapSvgText';

export function SequenceNote({ note }: { note: LayoutNote }) {
  const { x, y, width, height, textLayout, colors, noteType, text } = note;

  return (
    <g data-testid="sequence-note" transform={`translate(${x}, ${y})`}>
      {/* Note body */}
      <path 
        d={`M 0 0 L ${width - 10} 0 L ${width} 10 L ${width} ${height} L 0 ${height} Z`} 
        fill={colors.bg} 
        stroke={colors.stroke} 
        strokeWidth="1" 
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.06))' }}
      />
      {/* Folded corner */}
      <path 
        d={`M ${width - 10} 0 L ${width - 10} 10 L ${width} 10`} 
        fill="none" 
        stroke={colors.stroke} 
        strokeWidth="1" 
      />
      {/* Type badge */}
      <text 
        x="8" 
        y="16" 
        fontSize="9" 
        fontWeight="800" 
        fill={colors.stroke} 
        fontFamily="sans-serif" 
        style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {noteType}
      </text>
      {/* Wrapped Content */}
      <WrappedSvgText
        x={8}
        y={32}
        lines={textLayout.lines}
        lineHeight={textLayout.lineHeight}
        textAnchor="start"
        fontSize="11"
        fill="#334155"
        fontFamily="sans-serif"
      />
      <title>{noteType.toUpperCase()}\n{text}</title>
    </g>
  );
}
