const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'regulatory');
const filePath = path.join(DATA_DIR, 'regulatory-sources.json');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const sources = JSON.parse(fs.readFileSync(filePath, 'utf8'));
let errors = [];

sources.forEach(src => {
  // Rule 1: officialUrl is mandatory
  if (!src.officialUrl) {
    errors.push(`Source ${src.id} misses 'officialUrl'.`);
  } else if (!src.officialUrl.startsWith('http://') && !src.officialUrl.startsWith('https://')) {
    errors.push(`Source ${src.id} has invalid URL format: ${src.officialUrl}`);
  }

  // Rule 2: source-verified needs officialUrl
  if (src.validationStatus === 'source-verified' && !src.officialUrl) {
    errors.push(`Source ${src.id} is marked 'source-verified' but has no URL.`);
  }

  // Rule 3: legally-reviewed needs reviewedBy
  if (src.validationStatus === 'legally-reviewed' && !src.reviewedBy) {
    errors.push(`Source ${src.id} is marked 'legally-reviewed' but has no 'reviewedBy' value.`);
  }

  // Rule 4: status consistency (cannot use abrogated as current)
  if (src.status === 'abrogated' && src.effectiveTo === undefined) {
    errors.push(`Source ${src.id} is marked 'abrogated' but misses 'effectiveTo' date.`);
  }
});

console.log('\n--- Sources Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully validated ${sources.length} regulatory sources.`);
  process.exit(0);
}
