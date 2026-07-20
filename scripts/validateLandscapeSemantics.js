const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const landscapePath = path.join(DATA_DIR, 'raia-landscape-0.1.0.json');

if (!fs.existsSync(landscapePath)) {
  console.error(`Landscape file not found at: ${landscapePath}`);
  process.exit(1);
}

const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));
let errors = [];

const forbiddenPhrases = [
  /garantizar la correcta/i,
  /garantizar absolutamente/i,
  /maximizar rendimientos/i,
  /controlar todo el proceso/i,
  /realizar cualquier operación/i,
  /gestionar de forma integral/i,
  /siguiente paso/i
];

landscape.serviceDomains.forEach(sd => {
  forbiddenPhrases.forEach(regex => {
    if (regex.test(sd.summary)) {
      errors.push(`Service Domain ${sd.id} has forbidden phrase in 'summary': "${sd.summary.match(regex)[0]}"`);
    }
    if (regex.test(sd.definition)) {
      errors.push(`Service Domain ${sd.id} has forbidden phrase in 'definition': "${sd.definition.match(regex)[0]}"`);
    }
    if (regex.test(sd.purpose)) {
      errors.push(`Service Domain ${sd.id} has forbidden phrase in 'purpose': "${sd.purpose.match(regex)[0]}"`);
    }
  });
});

console.log('\n--- Semantics Validation Report ---');
if (errors.length > 0) {
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  process.exit(1);
} else {
  console.log(`Successfully validated semantic rules across service domains.`);
  process.exit(0);
}
