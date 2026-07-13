export interface SequenceDiagramLayoutConfig {
  canvasPaddingX: number;
  canvasPaddingY: number;

  participantMinWidth: number;
  participantMaxWidth: number;
  participantHorizontalPadding: number;
  participantGap: number;

  participantMinHeaderHeight: number;
  participantLineHeight: number;

  messageMinRowHeight: number;
  messageLineHeight: number;
  messageHorizontalPadding: number;

  lifelineBottomPadding: number;

  activationWidth: number;
  activationDepthOffset: number;

  noteMinWidth: number;
  noteMaxWidth: number;

  fragmentPaddingX: number;
  fragmentPaddingY: number;
}

export const defaultSequenceDiagramLayoutConfig: SequenceDiagramLayoutConfig = {
  canvasPaddingX: 80,
  canvasPaddingY: 48,

  participantMinWidth: 180,
  participantMaxWidth: 280,
  participantHorizontalPadding: 28,
  participantGap: 90,

  participantMinHeaderHeight: 68,
  participantLineHeight: 17,

  messageMinRowHeight: 74,
  messageLineHeight: 17,
  messageHorizontalPadding: 32,

  lifelineBottomPadding: 100,

  activationWidth: 16,
  activationDepthOffset: 5,

  noteMinWidth: 180,
  noteMaxWidth: 280,

  fragmentPaddingX: 28,
  fragmentPaddingY: 24
};
