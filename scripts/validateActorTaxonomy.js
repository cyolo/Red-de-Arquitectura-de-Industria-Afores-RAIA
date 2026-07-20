const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const actorsPath = path.join(DATA_DIR, 'actors-0.2.0.json');
const landscapePath = path.join(DATA_DIR, 'raia-landscape-0.1.0.json');

if (!fs.existsSync(actorsPath) || !fs.existsSync(landscapePath)) {
  console.error('Data files for actor taxonomy validation are missing.');
  process.exit(1);
}

const actors = JSON.parse(fs.readFileSync(actorsPath, 'utf8'));
const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));

const actorIds = new Set(actors.map(a => a.id));
let errors = [];

landscape.serviceDomains.forEach(sd => {
  // Check accountable actors
  if (sd.accountableActors) {
    sd.accountableActors.forEach(act => {
      // Allow legacy ids or enforce catalog
      const canonId = act.toUpperCase().startsWith('ACT-') ? act : `ACT-${act.toUpperCase()}`;
      if (!actorIds.has(canonId) && !actorIds.has(act)) {
        errors.push(`Service Domain ${sd.id} references undefined accountable actor: ${act}`);
      }
    });
  }

  // Check participating actors
  if (sd.participatingActors) {
    sd.participatingActors.forEach(act => {
      const canonId = act.toUpperCase().startsWith('ACT-') ? act : `ACT-${act.toUpperCase()}`;
      if (!actorIds.has(canonId) && !actorIds.has(act)) {
        errors.push(`Service Domain ${sd.id} references undefined participating actor: ${act}`);
      }
    });
  }

  // Authority must not be a Service Domain ID
  if (sd.id === 'ACT-CONSAR' || sd.id === 'ACT-SHCP') {
    errors.push(`Authority ${sd.id} is incorrectly modeled as a Service Domain.`);
  }
});

console.log('\n--- Actor Taxonomy Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully validated actor taxonomy.`);
  process.exit(0);
}
