const fs = require('fs');
const path = require('path');

const REG_DIR = path.join(__dirname, '..', 'src', 'data', 'regulatory');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const mappingsPath = path.join(REG_DIR, 'regulatory-mappings.json');
const sourcesPath = path.join(REG_DIR, 'regulatory-sources.json');
const landscapePath = path.join(DATA_DIR, 'raia-landscape-0.1.0.json');

if (!fs.existsSync(mappingsPath) || !fs.existsSync(sourcesPath) || !fs.existsSync(landscapePath)) {
  console.error('One of the required data files for mapping validation is missing.');
  process.exit(1);
}

const mappings = JSON.parse(fs.readFileSync(mappingsPath, 'utf8'));
const sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));

const sourceIds = new Set(sources.map(s => s.id));
const serviceDomainIds = new Set(landscape.serviceDomains.map(sd => sd.id));
let errors = [];

mappings.forEach(map => {
  // Rule 1: Source exists
  if (!sourceIds.has(map.regulatorySourceId)) {
    errors.push(`Mapping ${map.id} references non-existent source: ${map.regulatorySourceId}`);
  }

  // Rule 2: Service Domain exists
  if (!serviceDomainIds.has(map.serviceDomainId)) {
    errors.push(`Mapping ${map.id} references non-existent Service Domain: ${map.serviceDomainId}`);
  }

  // Rule 3: Article is mandatory for direct mappings
  if (map.applicability === 'direct' && !map.article && !map.section) {
    errors.push(`Mapping ${map.id} has direct applicability but lacks 'article' or 'section'.`);
  }

  // Rule 4: Interpretation is mandatory
  if (!map.architecturalInterpretation || map.architecturalInterpretation.trim() === '') {
    errors.push(`Mapping ${map.id} is missing 'architecturalInterpretation'.`);
  }
});

console.log('\n--- Mappings Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully validated ${mappings.length} regulatory mappings.`);
  process.exit(0);
}
