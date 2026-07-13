import React from 'react';
import { LayoutParticipant } from '../layout/sequenceLayoutEngine';

interface Props {
  participant: LayoutParticipant;
  config: any;
  totalHeight: number;
}

export function SequenceLifeline({ participant, config, totalHeight }: Props) {
  const { x, width, textLayout } = participant;
  const headerHeight = Math.max(config.participantMinHeaderHeight, textLayout.height + 24);
  
  return (
    <line
      data-testid="sequence-lifeline"
      x1={x + width / 2}
      y1={config.canvasPaddingY + headerHeight}
      x2={x + width / 2}
      y2={totalHeight - config.lifelineBottomPadding + 40}
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeDasharray="4,4"
    />
  );
}
