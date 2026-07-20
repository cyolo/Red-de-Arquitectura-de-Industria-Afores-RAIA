const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const relationsPath = path.join(DATA_DIR, 'relations-0.1.0.json');
const landscapePath = path.join(DATA_DIR, 'raia-landscape-0.1.0.json');

if (!fs.existsSync(relationsPath) || !fs.existsSync(landscapePath)) {
  console.error('Data files for relationship validation are missing.');
  process.exit(1);
}

const relations = JSON.parse(fs.readFileSync(relationsPath, 'utf8'));
const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));

const sdIds = new Set(landscape.serviceDomains.map(sd => sd.id));
let errors = [];

relations.forEach(rel => {
  // Check source exists
  if (!sdIds.has(rel.sourceId)) {
    errors.push(`Relation ${rel.id} has non-existent sourceId: ${rel.sourceId}`);
  }
  // Check target exists
  if (!sdIds.has(rel.targetId)) {
    errors.push(`Relation ${rel.id} has non-existent targetId: ${rel.targetId}`);
  }
  // Check relation type is not "Siguiente paso"
  if (rel.label && rel.label.toLowerCase() === 'siguiente paso') {
    errors.push(`Relation ${rel.id} uses prohibited label 'Siguiente paso'. Use structural dependencies.`);
  }
});

console.log('\n--- Relationship Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully validated ${relations.length} relationships.`);
  process.exit(0);
}
