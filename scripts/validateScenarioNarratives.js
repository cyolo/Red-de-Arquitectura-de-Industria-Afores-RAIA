const fs = require('fs');
const path = require('path');

const narrativeDir = path.join(__dirname, '../src/data/business-scenarios/narratives');
const sequenceDir = path.join(__dirname, '../src/data/business-scenarios/sequences');

console.log("Starting scenario narratives validation checks...\n");

let errors = 0;
let emptyTexts = 0;
let placeholders = 0;
let validNarratives = 0;

if (!fs.existsSync(narrativeDir)) {
  console.error("ERROR: Narratives directory does not exist.");
  process.exit(1);
}

const files = fs.readdirSync(narrativeDir).filter(f => f.endsWith('.json'));

const forbiddenPlaceholders = [
  "Lorem ipsum",
  "Descripción pendiente",
  "Texto de ejemplo",
  "Por definir",
  "TBD",
  "TODO"
];

function checkText(text, fieldName, file) {
  if (!text || text.trim() === '') {
    console.error(`ERROR: ${file} missing text for ${fieldName}`);
    emptyTexts++;
    errors++;
    return false;
  }
  for (const p of forbiddenPlaceholders) {
    if (text.includes(p)) {
      console.error(`ERROR: ${file} uses forbidden placeholder "${p}" in ${fieldName}`);
      placeholders++;
      errors++;
      return false;
    }
  }
  return true;
}

files.forEach(file => {
  const narrativePath = path.join(narrativeDir, file);
  const sequencePath = path.join(sequenceDir, file);
  
  if (!fs.existsSync(sequencePath)) {
    console.error(`ERROR: Narrative ${file} exists but sequence does not.`);
    errors++;
    return;
  }

  const narrative = JSON.parse(fs.readFileSync(narrativePath, 'utf8'));
  const sequence = JSON.parse(fs.readFileSync(sequencePath, 'utf8'));

  checkText(narrative.executiveSummary, "executiveSummary", file);
  checkText(narrative.structuralNarrative, "structuralNarrative", file);
  checkText(narrative.behavioralNarrative, "behavioralNarrative", file);
  checkText(narrative.structureBehaviorBridge, "structureBehaviorBridge", file);
  checkText(narrative.decisionNarrative, "decisionNarrative", file);
  checkText(narrative.exceptionNarrative, "exceptionNarrative", file);
  checkText(narrative.controlNarrative, "controlNarrative", file);
  checkText(narrative.evidenceNarrative, "evidenceNarrative", file);
  checkText(narrative.outcomeNarrative, "outcomeNarrative", file);

  if (narrative.status === "validated" && narrative.executiveSummary.includes("proposed")) {
    console.error(`ERROR: ${file} is presented as validated but contains proposed text.`);
    errors++;
  }

  // Cross-reference participants
  const seqPartIds = (sequence.participants || []).map(p => p.instanceId);
  const narPartIds = (narrative.participantNarratives || []).map(p => p.participantInstanceId);
  
  seqPartIds.forEach(id => {
    if (!narPartIds.includes(id)) {
      console.error(`ERROR: ${file} participant ${id} is missing from narrative.`);
      errors++;
    }
  });

  // Cross-reference messages
  const seqMsgIds = (sequence.messages || []).map(m => m.id);
  const narMsgIds = (narrative.stepNarratives || []).map(m => m.messageId);

  seqMsgIds.forEach(id => {
    if (!narMsgIds.includes(id)) {
      console.error(`ERROR: ${file} message ${id} is missing from narrative steps.`);
      errors++;
    }
  });

  // Validate phase ranges
  (narrative.phaseNarratives || []).forEach(phase => {
    if (phase.startSequence > phase.endSequence) {
      console.error(`ERROR: ${file} phase ${phase.id} has invalid sequence range.`);
      errors++;
    }
  });

  validNarratives++;
});

console.log("Narratives Validation Report Summary:");
console.log(`- ${files.length} narratives processed`);
console.log(`- ${validNarratives} valid narratives`);
console.log(`- ${emptyTexts} empty text fields`);
console.log(`- ${placeholders} forbidden placeholders found`);
console.log(`\nErrors: ${errors}`);

if (errors > 0) {
  console.error("\nScenario Narratives Validation FAILED.");
  process.exit(1);
} else {
  console.log("\nScenario Narratives Validation PASSED.");
  process.exit(0);
}
