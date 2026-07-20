const fs = require('fs');
const path = require('path');

const sequencesDir = path.join(__dirname, '../src/data/business-scenarios/sequences');
const scenariosFile = path.join(__dirname, '../src/data/scenarios-0.1.0.json');

const BANNED_WORDS = [
  'gesti n', 'resoluci n', 'asignaci n', 'c lculo', 'comit ', 'cat logo',
  'm tricas', 'desinversi n', 'imss issste', 'modalidad elegi'
];

let hasErrors = false;

function checkEncoding(text, context) {
  if (!text) return;
  
  // Detect replacement characters
  if (text.includes('\uFFFD')) {
    console.error(`[ERROR] Carácter de reemplazo detectado en ${context}: "${text}"`);
    hasErrors = true;
  }
  
  // Detect missing accents pattern (like "gesti n")
  const lowercaseText = text.toLowerCase();
  for (const banned of BANNED_WORDS) {
    if (lowercaseText.includes(banned)) {
      console.error(`[ERROR] Palabra corrupta o prohibida "${banned}" detectada en ${context}: "${text}"`);
      hasErrors = true;
    }
  }

  // Detect accidental lowercase for roles
  if (text === lowercaseText && text.length > 5 && !text.includes('-')) {
    console.error(`[WARNING] Posible label en minúsculas accidentales en ${context}: "${text}"`);
  }
}

function run() {
  console.log('Iniciando validación de Encoding y Nomenclatura P0-04...');
  
  if (fs.existsSync(sequencesDir)) {
    const files = fs.readdirSync(sequencesDir).filter(f => f.endsWith('.json'));
    
    files.forEach(file => {
      const data = JSON.parse(fs.readFileSync(path.join(sequencesDir, file), 'utf8'));
      
      const participantsMap = new Set();

      if (data.participants) {
        data.participants.forEach(p => {
          checkEncoding(p.label, `Participante ID: ${p.instanceId} en ${file}`);
          
          if (p.instanceId && p.instanceId.length < 5) {
             console.error(`[ERROR] ID de participante sospechoso por truncamiento destructivo en ${file}: ${p.instanceId}`);
             hasErrors = true;
          }

          if (participantsMap.has(p.label.toLowerCase())) {
             console.error(`[ERROR] Participante semánticamente duplicado detectado en ${file}: "${p.label}"`);
             hasErrors = true;
          }
          participantsMap.add(p.label.toLowerCase());
        });
      }
      
      if (data.messages) {
        data.messages.forEach(m => {
          checkEncoding(m.label, `Mensaje ID: ${m.id} en ${file}`);
        });
      }
    });
  }

  if (fs.existsSync(scenariosFile)) {
    const data = JSON.parse(fs.readFileSync(scenariosFile, 'utf8'));
    data.forEach(s => {
      checkEncoding(s.name, `Escenario ID: ${s.id}`);
      checkEncoding(s.description, `Descripción Escenario ID: ${s.id}`);
    });
  }

  if (hasErrors) {
    console.error('\nValidación FALLIDA. Se requiere corregir la corrupción de caracteres y duplicados.\n');
    process.exit(1);
  } else {
    console.log('\nValidación EXITOSA. No se detectó corrupción de encoding.\n');
  }
}

run();
