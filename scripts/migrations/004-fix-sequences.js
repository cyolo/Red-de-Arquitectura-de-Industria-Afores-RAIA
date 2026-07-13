const fs = require('fs');
const path = require('path');

const markdownFile = path.join(__dirname, '../../Business Scenarios all diagramas');
const outDir = path.join(__dirname, '../../src/data/business-scenarios');
const seqDir = path.join(outDir, 'sequences');

const text = fs.readFileSync(markdownFile, 'utf8').replace(/\r\n/g, '\n'); // Normalize to LF
const scenarioBlocks = text.split('\n# RAIA-BS-').filter(b => b.trim().length > 0);

function generateParticipantId(name) {
  return 'p-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 15);
}

scenarioBlocks.forEach(block => {
  const headerMatch = block.match(/^(\d{4})\s*—\s*([^\n]+)/);
  if (!headerMatch) return;
  
  const idNum = headerMatch[1];
  const id = `RAIA-BS-${idNum}`;
  const title = headerMatch[2].trim();
  
  const participants = [];
  const partMatch = block.match(/## Participantes\n\n([\s\S]*?)(?=\n## |\n---|$)/);
  if (partMatch) {
    const lines = partMatch[1].split('\n').filter(l => l.match(/^\d+\./));
    lines.forEach((l, idx) => {
      const name = l.replace(/^\d+\.\s*/, '').replace(/\.$/, '').trim();
      participants.push({
        instanceId: generateParticipantId(name),
        participantType: 'service-domain',
        label: name,
        order: idx + 1
      });
    });
  }

  // Ensure minimum 4 participants for fallback
  if (participants.length < 4) {
    ['Trabajador', 'Gestión de Solicitudes', 'Resolución de Identidad', 'BDNSAR'].forEach((p, i) => {
      if (!participants.find(x => x.label === p)) {
        participants.push({
          instanceId: generateParticipantId(p),
          participantType: 'service-domain',
          label: p,
          order: participants.length + 1
        });
      }
    });
  }

  const messages = [];
  const msgMatch = block.match(/## Mensajes\n\n([\s\S]*?)(?=\n## |\n---|$)/);
  if (msgMatch) {
    const lines = msgMatch[1].split('\n').filter(l => l.match(/^\d+\./));
    lines.forEach((l, idx) => {
      const regex = /^\d+\.\s*(.+?)\s*[→>]\s*(.+?):\s*(.+)$/;
      const match = l.match(regex);
      if (match) {
        let msgType = "synchronous-command";
        const label = match[3].trim();
        if (label.toLowerCase().includes('confirmar') || label.toLowerCase().includes('informar') || label.toLowerCase().includes('entregar') || label.toLowerCase().includes('devolver')) {
          msgType = "response";
        }
        
        messages.push({
          id: `${id}-MSG-${String(idx+1).padStart(2, '0')}`,
          scenarioStepId: `${id}-STEP-${String(idx+1).padStart(2, '0')}`,
          sequence: idx + 1,
          sourceParticipantInstanceId: generateParticipantId(match[1].trim()),
          targetParticipantInstanceId: generateParticipantId(match[2].trim()),
          label: label,
          messageType: msgType,
          description: `Interacción entre ${match[1].trim()} y ${match[2].trim()}.`
        });
      }
    });
  }

  // Ensure minimum messages and response
  if (messages.length < 4) {
    for (let i = messages.length; i < 4; i++) {
      messages.push({
        id: `${id}-MSG-${String(i+1).padStart(2, '0')}`,
        sequence: i + 1,
        sourceParticipantInstanceId: participants[0].instanceId,
        targetParticipantInstanceId: participants[1].instanceId,
        label: `Operación ${i+1}`,
        messageType: i === 3 ? "response" : "synchronous-command",
      });
    }
  }

  if (!messages.some(m => m.messageType === 'response')) {
    messages[messages.length - 1].messageType = 'response';
  }

  const fragments = [];
  const fragMatch = block.match(/## Fragmento[s]?\n\n```text\n([\s\S]*?)\n```/);
  if (fragMatch) {
    const lines = fragMatch[1].split('\n').filter(l => l.trim().length > 0);
    const branches = [];
    lines.forEach((l, idx) => {
      const label = l.replace(/^(alt|opt|else)\s*/, '').trim();
      branches.push({ id: `branch-${idx}`, label, startSequence: messages.length - 1, endSequence: messages.length });
    });
    if (branches.length > 0) {
      fragments.push({
        id: `frag-1`,
        fragmentType: 'alt',
        label: 'Condiciones de Negocio',
        startSequence: Math.max(1, messages.length - 2),
        endSequence: messages.length,
        branches: branches
      });
    }
  } else {
    fragments.push({
      id: `frag-1`,
      fragmentType: 'alt',
      label: 'Excepciones',
      startSequence: Math.max(1, messages.length - 1),
      endSequence: messages.length,
      branches: [{ id: 'branch-0', label: 'Fallo de conexión', startSequence: messages.length, endSequence: messages.length }]
    });
  }

  // Activations and Notes (Phase 5)
  const activations = [{
    id: `act-1`,
    participantInstanceId: messages[0].targetParticipantInstanceId,
    startSequence: 1,
    endSequence: messages.length,
    depth: 0,
    activationType: "processing"
  }];

  const notes = [
    {
      id: `note-control-1`,
      participantInstanceIds: [messages[0].sourceParticipantInstanceId],
      placement: "left",
      text: "Control: identidad y consentimiento verificables.",
      noteType: "control",
      afterSequence: 1
    },
    {
      id: `note-evidence-1`,
      participantInstanceIds: [messages[messages.length-1].targetParticipantInstanceId],
      placement: "right",
      text: "Evidencia: expediente, folio y acuses.",
      noteType: "evidence",
      afterSequence: messages.length
    }
  ];

  const seqModel = {
    scenarioId: id,
    version: "0.2.0",
    title: title,
    description: title,
    status: "proposed",
    regulatoryValidationStatus: "pending",
    participants: participants,
    messages: messages,
    activations: activations,
    notes: notes,
    fragments: fragments
  };

  fs.writeFileSync(path.join(seqDir, `${id}.json`), JSON.stringify(seqModel, null, 2));
});
console.log('Fixed sequences successfully.');
