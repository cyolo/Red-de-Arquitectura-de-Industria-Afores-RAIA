const fs = require('fs');
const path = require('path');

const sequencesDir = path.join(__dirname, '../../src/data/business-scenarios/sequences');
const narrativesDir = path.join(__dirname, '../../src/data/business-scenarios/narratives');

function run() {
  const narrativeFiles = fs.readdirSync(narrativesDir).filter(f => f.endsWith('.json'));
  
  narrativeFiles.forEach(file => {
    const filePath = path.join(narrativesDir, file);
    const narrativeData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const seqData = JSON.parse(fs.readFileSync(path.join(sequencesDir, file), 'utf8'));
    
    if (narrativeData.participantNarratives) {
        const oldNarratives = narrativeData.participantNarratives;
        const newNarratives = [];
        
        seqData.participants.forEach(p => {
            let matchedOld = null;
            
            for (let old of oldNarratives) {
                const kBase = old.participantInstanceId.replace('p-', '').substring(0, 6);
                const pBase = p.instanceId.replace('sd-', '').replace('actor-', '').replace('org-', '').replace('institute-', '').replace('registry-', '').replace('industry-', '').replace('ext-', '').substring(0, 6);
                
                if (kBase === pBase || p.label.toLowerCase().includes(old.participantInstanceId.replace('p-', '').replace('-', ' ').substring(0, 5))) {
                    matchedOld = old;
                    break;
                }
            }
            
            if (matchedOld) {
                // clone and update id
                const updated = { ...matchedOld, participantInstanceId: p.instanceId };
                newNarratives.push(updated);
            } else {
                newNarratives.push({
                    participantInstanceId: p.instanceId,
                    roleNarrative: `Responsabilidad asignada a ${p.label}`,
                    expectedBehavior: `Comportamiento esperado para ${p.label}`
                });
            }
        });
        
        narrativeData.participantNarratives = newNarratives;
        fs.writeFileSync(filePath, JSON.stringify(narrativeData, null, 2));
    }
  });

  console.log('Narrativas emparejadas con éxito.');
}

run();
