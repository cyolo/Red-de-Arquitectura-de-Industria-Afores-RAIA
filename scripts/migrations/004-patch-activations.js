const fs = require('fs');
const path = require('path');

const sequencesDir = path.join(__dirname, '../../src/data/business-scenarios/sequences');
const bundlePath = path.join(__dirname, '../../src/data/business-scenarios/scenario-sequences.json');

// Re-read everything and map old -> new IDs by using the bundle to cross-reference or just matching the logic
const REPLACEMENTS = {
  "gesti n": "Gestión",
  "Gestión de iden": "Gestión de Identidad",
  "resoluci n": "Resolución",
  "asignaci n": "Asignación",
  "c lculo": "Cálculo",
  "comit ": "Comité",
  "cat logo": "Catálogo",
  "m tricas": "Métricas",
  "desinversi n": "Desinversión",
  "imss issste": "IMSS",
  "modalidad elegi": "Modalidad de Pensión",
  "valuaci n": "Valuación",
  "confirmaci n": "Confirmación",
  "construcci n": "Construcción",
  "ejecuci n": "Ejecución",
  "conciliaci n": "Conciliación",
  "determinaci n": "Determinación",
  "identificaci n": "Identificación",
  "supervisi n": "Supervisión",
  "instituci n fin": "Institución Financiera",
  "proyecci n": "Proyección",
  "autorizaci n": "Autorización"
};

function run() {
  const files = fs.readdirSync(sequencesDir).filter(f => f.endsWith('.json'));
  const bundleMap = {};
  
  files.forEach(file => {
    const filePath = path.join(sequencesDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // We already fixed participants. Let's just find the participant that matches the old activation if we can, 
    // or wait, we don't have the old-to-new map saved.
    // However, if we just look at the new participants, they might not map directly from the old string.
    // Wait, since we know `validateSequenceDiagrams` fails because of unknown participants, we can just delete activations
    // or map them if we can guess.
    // Since `activations` is purely a visual hint (startMessageId, endMessageId, participantId), it's safe to clear them or rebuild them.
    // In many sequence diagram engines, activations can just be empty `[]`.
    // But let's see if we can rebuild them from messages.
    // Actually, any participant that receives a message and sends a response later is active.
    // To be safe and compliant, we can just reset activations: [] for now, or let's see if we can map them.
    // Wait, the error is: `activation references unknown participant p-gesti-n-de-soli`.
    // If we just map the old ID to the new ID... we can't easily without the old names.
    // Wait, we DO know the message IDs they start and end on.
    
    if (data.activations && data.messages) {
       data.activations.forEach(act => {
          // If the participantId is not in data.participants, we need to fix it.
          const exists = data.participants.find(p => p.instanceId === act.participantId);
          if (!exists) {
             // Find the message that starts this activation
             const startMsg = data.messages.find(m => m.id === act.startMessageId);
             if (startMsg) {
                // The activation happens ON the target of the start message!
                act.participantId = startMsg.targetParticipantInstanceId;
             }
          }
       });
       
       // Filter out any that still don't match
       data.activations = data.activations.filter(act => 
          data.participants.some(p => p.instanceId === act.participantId)
       );
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    bundleMap[data.scenarioId] = data;
  });

  fs.writeFileSync(bundlePath, JSON.stringify(bundleMap, null, 2));
  console.log('Activations patched.');
}

run();
