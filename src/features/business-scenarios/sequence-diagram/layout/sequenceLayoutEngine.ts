import { DetailedSequence, SequenceMessage, SequenceParticipant, SequenceNote, SequenceFragment, ActivationSpan } from '../components/RaiaSequenceDiagram';
import { SequenceDiagramLayoutConfig, defaultSequenceDiagramLayoutConfig } from '../styles/sequenceDiagramTokens';
import { measureAndWrapText, WrappedTextMeasurement } from './measureSequenceText';

export interface LayoutParticipant extends SequenceParticipant {
  x: number;
  width: number;
  textLayout: WrappedTextMeasurement;
}

export interface LayoutMessage extends SequenceMessage {
  y: number;
  rowHeight: number;
  sourceX: number;
  targetX: number;
  isSelf: boolean;
  textLayout: WrappedTextMeasurement;
}

export interface LayoutActivation extends ActivationSpan {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LayoutNote extends SequenceNote {
  x: number;
  y: number;
  width: number;
  height: number;
  textLayout: WrappedTextMeasurement;
  colors: { bg: string; stroke: string };
}

export interface LayoutFragment extends SequenceFragment {
  x: number;
  y: number;
  width: number;
  height: number;
  branchYPositions: number[];
}

export interface LayoutResult {
  width: number;
  height: number;
  participants: LayoutParticipant[];
  messages: LayoutMessage[];
  activations: LayoutActivation[];
  notes: LayoutNote[];
  fragments: LayoutFragment[];
}

export function calculateSequenceLayout(
  sequence: DetailedSequence,
  config: SequenceDiagramLayoutConfig = defaultSequenceDiagramLayoutConfig
): LayoutResult {
  const participantsList = [...(sequence.participants || [])].sort((a, b) => a.order - b.order);
  const messagesList = [...(sequence.messages || [])].sort((a, b) => a.sequence - b.sequence);
  const activationsList = [...(sequence.activations || [])];
  const notesList = [...(sequence.notes || [])];
  const fragmentsList = [...(sequence.fragments || [])];

  // 1. Calculate Participant Widths & X positions
  const layoutParticipants: LayoutParticipant[] = [];
  let currentX = config.canvasPaddingX;
  let maxHeaderHeight = config.participantMinHeaderHeight;

  participantsList.forEach((p) => {
    const textLayout = measureAndWrapText(p.label, {
      font: 'bold 12px sans-serif',
      maxWidth: config.participantMaxWidth - config.participantHorizontalPadding * 2,
      lineHeight: config.participantLineHeight,
      maxLines: 3
    });

    const reqWidth = Math.max(
      config.participantMinWidth,
      textLayout.width + config.participantHorizontalPadding * 2
    );

    const reqHeight = textLayout.height + 24; // padding top/bottom
    if (reqHeight > maxHeaderHeight) maxHeaderHeight = reqHeight;

    layoutParticipants.push({
      ...p,
      x: currentX,
      width: reqWidth,
      textLayout
    });

    currentX += reqWidth + config.participantGap;
  });

  const totalWidth = currentX - config.participantGap + config.canvasPaddingX;

  // 2. Calculate Message Y positions with dynamic row heights
  const layoutMessages: LayoutMessage[] = [];
  let currentY = config.canvasPaddingY + maxHeaderHeight + 30; // lifelines padding top

  messagesList.forEach((m) => {
    const sourcePart = layoutParticipants.find(p => p.instanceId === m.sourceParticipantInstanceId);
    const targetPart = layoutParticipants.find(p => p.instanceId === m.targetParticipantInstanceId);
    
    const sourceX = sourcePart ? sourcePart.x + sourcePart.width / 2 : 0;
    const targetX = targetPart ? targetPart.x + targetPart.width / 2 : 0;
    const isSelf = m.sourceParticipantInstanceId === m.targetParticipantInstanceId;

    // Check if there are notes matching this message sequence
    const attachedNotes = notesList.filter(n => (n.afterSequence || 1) === m.sequence);
    let maxNoteHeight = 0;
    
    const layoutNotesForMsg = attachedNotes.map(note => {
      const textLayout = measureAndWrapText(note.text, {
        font: '11px sans-serif',
        maxWidth: config.noteMaxWidth - 24,
        lineHeight: 14
      });
      const noteH = Math.max(40, textLayout.height + 30);
      if (noteH > maxNoteHeight) maxNoteHeight = noteH;
      return noteH;
    });

    const msgTextLayout = measureAndWrapText(m.label, {
      font: 'bold 12px sans-serif',
      maxWidth: isSelf ? 200 : Math.abs(targetX - sourceX) - 20,
      lineHeight: config.messageLineHeight,
      maxLines: 2
    });

    // Row height calculation
    let rowHeight = Math.max(config.messageMinRowHeight, msgTextLayout.height + 40);
    if (isSelf) rowHeight = Math.max(rowHeight, 60);
    if (maxNoteHeight > 0) rowHeight = Math.max(rowHeight, maxNoteHeight + 20);

    layoutMessages.push({
      ...m,
      y: currentY,
      rowHeight,
      sourceX,
      targetX,
      isSelf,
      textLayout: msgTextLayout
    });

    currentY += rowHeight;
  });

  // 3. Activations
  const layoutActivations: LayoutActivation[] = [];
  activationsList.forEach(act => {
    const participant = layoutParticipants.find(p => p.instanceId === act.participantInstanceId);
    const startMsg = layoutMessages.find(m => m.sequence === act.startSequence);
    const endMsg = layoutMessages.find(m => m.sequence === act.endSequence);
    
    if (participant && startMsg) {
      const startY = startMsg.y - 15;
      const endY = endMsg ? endMsg.y + 15 : startY + 30;
      
      layoutActivations.push({
        ...act,
        x: participant.x + participant.width / 2 - config.activationWidth / 2 + (act.depth * config.activationDepthOffset),
        y: startY,
        width: config.activationWidth,
        height: endY - startY
      });
    }
  });

  // 4. Notes layout
  const layoutNotes: LayoutNote[] = [];
  const colorMap: Record<string, {bg: string, stroke: string}> = {
    control: { bg: '#fef08a', stroke: '#ca8a04' },
    evidence: { bg: '#e0f2fe', stroke: '#0284c7' },
    information: { bg: '#f8fafc', stroke: '#cbd5e1' },
    regulation: { bg: '#fee2e2', stroke: '#ef4444' },
    exception: { bg: '#ffedd5', stroke: '#f97316' }
  };

  notesList.forEach(note => {
    const participant = layoutParticipants.find(p => p.instanceId === note.participantInstanceIds[0]);
    const targetMsg = layoutMessages.find(m => m.sequence === (note.afterSequence || 1));
    
    if (participant && targetMsg) {
      const textLayout = measureAndWrapText(note.text, {
        font: '11px sans-serif',
        maxWidth: config.noteMaxWidth - 24,
        lineHeight: 14
      });

      const noteW = Math.max(config.noteMinWidth, textLayout.width + 24);
      const noteH = Math.max(40, textLayout.height + 30);
      
      const isRight = note.placement === 'right';
      const x = participant.x + participant.width / 2 + (isRight ? 20 : -(noteW + 20));
      const y = targetMsg.y - 10; // aligned with message

      layoutNotes.push({
        ...note,
        x,
        y,
        width: noteW,
        height: noteH,
        textLayout,
        colors: colorMap[note.noteType] || colorMap.information
      });
    }
  });

  // 5. Fragments
  const layoutFragments: LayoutFragment[] = [];
  fragmentsList.forEach(frag => {
    const msgsInFrag = layoutMessages.filter(m => m.sequence >= frag.startSequence && m.sequence <= frag.endSequence);
    if (msgsInFrag.length === 0) return;

    const startMsg = msgsInFrag[0];
    const endMsg = msgsInFrag[msgsInFrag.length - 1];

    const allXs = msgsInFrag.flatMap(m => [m.sourceX, m.targetX]);
    const minX = Math.min(...allXs) - config.fragmentPaddingX;
    const maxX = Math.max(...allXs) + config.fragmentPaddingX;

    const startY = startMsg.y - config.fragmentPaddingY;
    const endY = endMsg.y + config.fragmentPaddingY + 20;

    const branchYPositions: number[] = [];
    if (frag.branches) {
      frag.branches.forEach(b => {
        const branchMsg = layoutMessages.find(m => m.sequence === b.startSequence);
        if (branchMsg) {
          branchYPositions.push(branchMsg.y - config.fragmentPaddingY / 2);
        }
      });
    }

    layoutFragments.push({
      ...frag,
      x: minX,
      y: startY,
      width: maxX - minX,
      height: endY - startY,
      branchYPositions
    });
  });

  const totalHeight = currentY + config.lifelineBottomPadding;

  return {
    width: totalWidth,
    height: totalHeight,
    participants: layoutParticipants,
    messages: layoutMessages,
    activations: layoutActivations,
    notes: layoutNotes,
    fragments: layoutFragments
  };
}
