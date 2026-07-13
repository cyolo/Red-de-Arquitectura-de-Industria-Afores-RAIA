const fs = require('fs');
const path = require('path');

const markdownFile = path.join(__dirname, '../../Business Scenarios all diagramas');
const outDir = path.join(__dirname, '../../src/data/business-scenarios');
const seqDir = path.join(outDir, 'sequences');

// Ensure directories exist
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(seqDir)) fs.mkdirSync(seqDir, { recursive: true });

const text = fs.readFileSync(markdownFile, 'utf8');

const scenarioBlocks = text.split('# RAIA-BS-').slice(1);
const scenariosList = [];

function generateParticipantId(name) {
  // Simple deterministic hash for participant instance id
  return 'p-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 15);
}

scenarioBlocks.forEach(block => {
  const headerMatch = block.match(/^(\d{4})\s*—\s*([^\n]+)/);
  if (!headerMatch) return;
  
  const idNum = headerMatch[1];
  const id = `RAIA-BS-${idNum}`;
  const title = headerMatch[2].trim();
  
  // Extract Purpose or summary if available
  let description = title;
  
  // Extract Participants
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

  // Extract Messages
  const messages = [];
  const msgMatch = block.match(/## Mensajes\n\n([\s\S]*?)(?=\n## |\n---|$)/);
  if (msgMatch) {
    const lines = msgMatch[1].split('\n').filter(l => l.match(/^\d+\./));
    lines.forEach((l, idx) => {
      // 1. Trabajador -> Gestión de Solicitudes: Solicitar registro
      const regex = /^\d+\.\s*(.+?)\s*[→>]\s*(.+?):\s*(.+)$/;
      const match = l.match(regex);
      if (match) {
        const srcName = match[1].trim();
        const tgtName = match[2].trim();
        const label = match[3].trim();
        
        let msgType = "synchronous-command";
        if (label.toLowerCase().includes('confirmar') || label.toLowerCase().includes('informar') || label.toLowerCase().includes('entregar')) {
          msgType = "response";
        }
        
        messages.push({
          id: `msg-${idx+1}`,
          scenarioStepId: `step-${idx+1}`,
          sequence: idx + 1,
          sourceParticipantInstanceId: generateParticipantId(srcName),
          targetParticipantInstanceId: generateParticipantId(tgtName),
          label: label,
          messageType: msgType
        });
      } else {
        // Fallback for different syntax
        messages.push({
          id: `msg-${idx+1}`,
          scenarioStepId: `step-${idx+1}`,
          sequence: idx + 1,
          sourceParticipantInstanceId: participants[0]?.instanceId || 'unknown',
          targetParticipantInstanceId: participants[1]?.instanceId || 'unknown',
          label: l.replace(/^\d+\.\s*/, '').trim(),
          messageType: 'synchronous-command'
        });
      }
    });
  }

  // Extract Fragments
  const fragments = [];
  const fragMatch = block.match(/## Fragmento[s]?\n\n```text\n([\s\S]*?)\n```/);
  if (fragMatch) {
    const lines = fragMatch[1].split('\n').filter(l => l.trim().length > 0);
    const branches = [];
    lines.forEach((l, idx) => {
      const type = l.startsWith('alt ') ? 'alt' : (l.startsWith('opt ') ? 'opt' : 'else');
      const label = l.replace(/^(alt|opt|else)\s*/, '').trim();
      branches.push({ id: `branch-${idx}`, label, startSequence: messages.length, endSequence: messages.length });
    });
    
    if (branches.length > 0) {
      fragments.push({
        id: `frag-1`,
        fragmentType: branches[0].label.toLowerCase().includes('opt') ? 'opt' : 'alt',
        label: 'Alternativas',
        startSequence: Math.max(1, messages.length - 2), // dummy geometry
        endSequence: messages.length,
        branches: branches
      });
    }
  }

  const seqModel = {
    scenarioId: id,
    version: "0.2.0",
    title: title,
    description: description,
    participants: participants,
    messages: messages,
    activations: [], // Can be calculated or parsed later
    notes: [],
    fragments: fragments,
    status: "proposed",
    regulatoryValidationStatus: "pending"
  };

  fs.writeFileSync(path.join(seqDir, `${id}.json`), JSON.stringify(seqModel, null, 2));

  scenariosList.push({
    id,
    nameEs: title,
    summary: description,
    version: "0.2.0",
    status: "proposed"
  });
});

fs.writeFileSync(path.join(outDir, 'business-scenarios.json'), JSON.stringify(scenariosList, null, 2));
console.log(`Generated ${scenariosList.length} complex sequence models.`);
