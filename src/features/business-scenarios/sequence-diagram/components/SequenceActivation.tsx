import React from 'react';
import { LayoutActivation } from '../layout/sequenceLayoutEngine';

export function SequenceActivation({ activation }: { activation: LayoutActivation }) {
  const { x, y, width, height, activationType } = activation;

  let fill = "#ffffff";
  let stroke = "#94a3b8";

  if (activationType === 'manual') {
    fill = "#fef08a"; // yellow
    stroke = "#ca8a04";
  } else if (activationType === 'wait') {
    fill = "#f1f5f9"; // light slate
    stroke = "#cbd5e1";
  }

  return (
    <rect
      data-testid="sequence-activation"
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={1.5}
      rx="2"
      style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.1))' }}
    >
      <title>{activationType.toUpperCase()} PROCESS\nSequences: {activation.startSequence} - {activation.endSequence}</title>
    </rect>
  );
}
