const fs = require('fs');
const path = require('path');

const REG_DIR = path.join(__dirname, '..', 'src', 'data', 'regulatory');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const landscapePath = path.join(DATA_DIR, 'raia-landscape-0.1.0.json');
const mappingsPath = path.join(REG_DIR, 'regulatory-mappings.json');

if (!fs.existsSync(landscapePath) || !fs.existsSync(mappingsPath)) {
  console.error('Data files for coverage validation are missing.');
  process.exit(1);
}

const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));
const mappings = JSON.parse(fs.readFileSync(mappingsPath, 'utf8'));

const mappedSdIds = new Set(mappings.map(m => m.serviceDomainId));
let errors = [];

landscape.serviceDomains.forEach(sd => {
  // If the service domain has high/systemic criticality, it MUST be mapped to a regulation
  if ((sd.regulatoryCriticality === 'high' || sd.regulatoryCriticality === 'systemic') && !mappedSdIds.has(sd.id)) {
    // If not mapped, check if there's any temporary regulation reference in the legacy field to see if it should fail
    if (!sd.regulations || sd.regulations.length === 0) {
      errors.push(`Critical Service Domain ${sd.id} (${sd.nameEs}) lacks any regulatory mapping.`);
    }
  }
});

console.log('\n--- Service Domain Coverage Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully verified regulatory coverage.`);
  process.exit(0);
}
