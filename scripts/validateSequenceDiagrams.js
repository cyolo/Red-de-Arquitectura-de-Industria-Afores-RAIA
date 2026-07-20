const fs = require('fs');
const path = require('path');

const seqDir = path.join(__dirname, '../src/data/business-scenarios/sequences');
const catalogPath = path.join(__dirname, '../src/data/scenarios-0.1.0.json');

console.log("Starting sequence diagrams strict validation checks...\n");

let errors = 0;
let warnings = 0;

if (!fs.existsSync(seqDir)) {
  console.error("ERROR: Sequences directory does not exist.");
  process.exit(1);
}

const files = fs.readdirSync(seqDir).filter(f => f.endsWith('.json'));
const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const catalogIds = catalogData.map(c => c.id);

let withParticipants = 0;
let withMessages = 0;
let emptyDiagrams = 0;
let orphanReferences = 0;

files.forEach(file => {
  const filePath = path.join(seqDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!catalogIds.includes(data.scenarioId)) {
    console.error(`ERROR: Sequence ${file} has no corresponding scenario in catalog.`);
    orphanReferences++;
    errors++;
  }

  if (!Array.isArray(data.participants) || data.participants.length === 0) {
    console.error(`ERROR: ${file} has NO participants.`);
    emptyDiagrams++;
    errors++;
  } else {
    withParticipants++;
    data.participants.forEach((p, idx) => {
      if (!p.instanceId) {
        console.error(`ERROR: ${file} participant at index ${idx} is missing instanceId.`);
        errors++;
      }
    });
  }

  if (!Array.isArray(data.messages) || data.messages.length === 0) {
    console.error(`ERROR: ${file} has NO messages.`);
    emptyDiagrams++;
    errors++;
  } else {
    withMessages++;
    let seqTracker = 1;
    data.messages.sort((a,b) => a.sequence - b.sequence).forEach((m, idx) => {
      if (!m.sourceParticipantInstanceId) {
        console.error(`ERROR: ${file} message ${m.id} missing source.`);
        errors++;
      }
      if (!m.targetParticipantInstanceId) {
        console.error(`ERROR: ${file} message ${m.id} missing target.`);
        errors++;
      }
      if (m.sequence !== seqTracker) {
        console.error(`ERROR: ${file} sequence jump/duplication. Expected ${seqTracker}, got ${m.sequence}`);
        errors++;
      }
      seqTracker++;
      
      const srcExists = data.participants.some(p => p.instanceId === m.sourceParticipantInstanceId);
      const tgtExists = data.participants.some(p => p.instanceId === m.targetParticipantInstanceId);
      
      if (!srcExists) {
        console.error(`ERROR: ${file} message source ${m.sourceParticipantInstanceId} does not exist in participants.`);
        errors++;
      }
      if (!tgtExists) {
        console.error(`ERROR: ${file} message target ${m.targetParticipantInstanceId} does not exist in participants.`);
        errors++;
      }
    });
  }
  
  if (data.activations) {
    data.activations.forEach(a => {
      if (!data.participants.some(p => p.instanceId === a.participantInstanceId)) {
        console.error(`ERROR: ${file} activation references unknown participant ${a.participantInstanceId}`);
        errors++;
      }
    });
  }
  
  if (data.notes) {
    data.notes.forEach(n => {
      if (!n.participantInstanceIds || n.participantInstanceIds.length === 0) {
        console.error(`ERROR: ${file} note has no participants.`);
        errors++;
      }
      if (!n.afterSequence) {
        console.error(`ERROR: ${file} note has no sequence attachment.`);
        errors++;
      }
    });
  }
});

console.log("Validation Report Summary:");
console.log(`- ${files.length} escenarios encontrados`);
console.log(`- ${withParticipants} diagramas con participantes`);
console.log(`- ${withMessages} diagramas con mensajes`);
console.log(`- ${emptyDiagrams} diagramas vacíos`);
console.log(`- ${orphanReferences} referencias huérfanas`);
console.log(`\nErrors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error("\nSequence Diagrams Validation FAILED.");
  process.exit(1);
} else {
  console.log("\nSequence Diagrams Validation PASSED.");
  process.exit(0);
}
