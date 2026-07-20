import React from 'react';
import { LayoutParticipant } from '../layout/sequenceLayoutEngine';
import { WrappedSvgText } from '../layout/wrapSvgText';

interface Props {
  participant: LayoutParticipant;
  config: any;
  isSelected?: boolean;
}

export function SequenceParticipantHeader({ participant, config, isSelected }: Props) {
  const { x, width, textLayout } = participant;
  const height = Math.max(config.participantMinHeaderHeight, textLayout.height + 24);
  const fill = isSelected ? '#fef08a' : '#fef9c3';
  
  return (
    <g data-testid="sequence-participant" transform={`translate(${x}, ${config.canvasPaddingY})`}>
      <rect 
        width={width} 
        height={height} 
        fill={fill} 
        stroke="#ca8a04" 
        strokeWidth={isSelected ? 2.5 : 1.5} 
        rx="6" 
        style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.05))' }}
      />
      <WrappedSvgText
        x={width / 2}
        y={(height - textLayout.height) / 2 + 10}
        lines={textLayout.lines}
        lineHeight={textLayout.lineHeight}
        fill="#854d0e"
        fontSize="12"
        fontWeight="bold"
        fontFamily="sans-serif"
      />
      <title>{participant.label}</title>
    </g>
  );
}
