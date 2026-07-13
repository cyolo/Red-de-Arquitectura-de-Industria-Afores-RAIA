const fs = require('fs');
const path = require('path');

const sequencesDir = path.join(__dirname, '../../src/data/business-scenarios/sequences');
const bundlePath = path.join(__dirname, '../../src/data/business-scenarios/scenario-sequences.json');

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
  "imss issste": "IMSS", // The audit says IMSS and ISSSTE must be separated, we map this to IMSS to break the tie, and rule it as institute
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

// Map names to specific participant types and deterministic IDs
function normalizeParticipant(p) {
  let label = p.label || "";
  
  // Replace missing encoding
  for (const [bad, good] of Object.entries(REPLACEMENTS)) {
    if (label.toLowerCase().includes(bad.toLowerCase())) {
      // Retain case if it was somehow preserved, but mostly we overwrite
      label = label.replace(new RegExp(bad, "ig"), good);
    }
  }
  
  // Fix specific bad names
  if (label === "imss issste" || label === "IMSS ISSSTE") label = "IMSS";
  if (label === "bdnsar" || label === "BDNSAR") label = "BDNSAR";
  
  p.label = label;
  
  const text = label.toLowerCase();
  
  if (text.includes("trabajador") || text.includes("pensionado")) {
    p.participantType = "actor";
    p.instanceId = "actor-worker";
  } else if (text.includes("imss") || text.includes("issste") || text.includes("instituto")) {
    p.participantType = "social-security-institute";
    p.instanceId = text.includes("imss") ? "institute-imss" : "institute-issste";
  } else if (text.includes("consar") || text.includes("autoridad")) {
    p.participantType = "authority";
    p.instanceId = "authority-consar";
  } else if (text.includes("afore")) {
    p.participantType = "organization";
    p.instanceId = "org-afore";
  } else if (text.includes("bdnsar") || text.includes("registro maestro") || text.includes("catálogo")) {
    p.participantType = "information-asset";
    p.instanceId = "registry-bdnsar";
  } else if (text.includes("operadora") || text.includes("empresa")) {
    p.participantType = "industry-service-provider";
    p.instanceId = "industry-operator";
  } else if (text.includes("mercado") || text.includes("venue")) {
    p.participantType = "market-infrastructure";
    p.instanceId = "market-venue";
  } else if (text.includes("contraparte") || text.includes("institución financiera")) {
    p.participantType = "external-party";
    p.instanceId = "ext-counterparty";
  } else if (text.includes("custodio") || text.includes("depositario")) {
    p.participantType = "custodian";
    p.instanceId = "custodian-bank";
  } else if (text.includes("comité")) {
    p.participantType = "governance-body";
    p.instanceId = "gov-committee";
  } else if (text.includes("fondo")) {
    p.participantType = "public-trust";
    p.instanceId = "trust-fund";
  } else if (text.includes("aseguradora")) {
    p.participantType = "insurer";
    p.instanceId = "org-insurer";
  } else {
    p.participantType = "service-domain";
    // Clean string for ID
    const cleanStr = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    p.instanceId = `sd-${cleanStr.substring(0, 20)}`;
  }
  
  return p;
}

function fixMessages(messages, participantMap) {
  messages.forEach(m => {
    let label = m.label || "";
    for (const [bad, good] of Object.entries(REPLACEMENTS)) {
      if (label.toLowerCase().includes(bad.toLowerCase())) {
        label = label.replace(new RegExp(bad, "ig"), good);
      }
    }
    m.label = label;
    m.description = label; // Sync for now
    
    // Fix IDs pointing to old broken participants
    const src = participantMap[m.sourceParticipantInstanceId];
    if (src) m.sourceParticipantInstanceId = src.instanceId;
    
    const tgt = participantMap[m.targetParticipantInstanceId];
    if (tgt) m.targetParticipantInstanceId = tgt.instanceId;
  });
}

function run() {
  console.log('Remediando diccionarios JSON (P0-01 a P0-05)...');
  
  const files = fs.readdirSync(sequencesDir).filter(f => f.endsWith('.json'));
  const bundleMap = {};
  
  files.forEach(file => {
    const filePath = path.join(sequencesDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Fix Scenario Title and Description
    if (data.scenarioName) {
      for (const [bad, good] of Object.entries(REPLACEMENTS)) {
        if (data.scenarioName.toLowerCase().includes(bad.toLowerCase())) {
           data.scenarioName = data.scenarioName.replace(new RegExp(bad, "ig"), good);
        }
      }
    }
    
    // Fix Participants
    const oldToNewMap = {};
    const seenIds = new Set();
    const finalParticipants = [];
    
    if (data.participants) {
      data.participants.forEach(p => {
        const oldId = p.instanceId;
        const normalized = normalizeParticipant({...p});
        
        // Deduplicate
        if (!seenIds.has(normalized.instanceId)) {
          seenIds.add(normalized.instanceId);
          finalParticipants.push(normalized);
        }
        
        oldToNewMap[oldId] = normalized;
      });
      data.participants = finalParticipants;
    }
    
    // Fix Messages
    if (data.messages) {
      fixMessages(data.messages, oldToNewMap);
    }
    
    // Set audit modeling status
    data.modelingStatus = "partially-modeled";
    data.regulatoryValidationStatus = "pending";
    
    // Save to canonical
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    bundleMap[data.scenarioId] = data;
  });

  // Re-generate bundle
  fs.writeFileSync(bundlePath, JSON.stringify(bundleMap, null, 2));
  console.log(`Bundle generado en ${bundlePath} con ${Object.keys(bundleMap).length} escenarios.`);
}

run();
