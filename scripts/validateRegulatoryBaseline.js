const fs = require('fs');
const path = require('path');

const REG_DIR = path.join(__dirname, '..', 'src', 'data', 'regulatory');
const sourcesPath = path.join(REG_DIR, 'regulatory-sources.json');
const baselinePath = path.join(REG_DIR, 'regulatory-baseline.json');

if (!fs.existsSync(sourcesPath) || !fs.existsSync(baselinePath)) {
  console.error('Data files for baseline validation are missing.');
  process.exit(1);
}

const sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));

let errors = [];

const expectedDates = baseline.primaryBaselineReforms;

sources.forEach(src => {
  if (src.status === 'abrogated' || src.status === 'superseded') {
    return;
  }
  // Check if this source is in primary reforms list
  const key = src.shortName.split(' ')[0].toUpperCase();
  Object.keys(expectedDates).forEach(k => {
    if (src.id.includes(k)) {
      const actualReform = src.lastReformDate || src.publicationDate;
      const expected = expectedDates[k];
      if (actualReform < expected) {
        errors.push(`Primary source ${src.id} (${src.shortName}) reform date ${actualReform} is outdated. Baseline requires at least ${expected}.`);
      }
    }
  });
});

console.log('\n--- Regulatory Baseline Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully verified regulatory baseline.`);
  process.exit(0);
}
