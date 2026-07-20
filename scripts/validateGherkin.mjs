import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../tests/gherkin/modules');
const manifestPath = path.resolve(__dirname, '../tests/gherkin/gherkin-manifest.json');

const FORBIDDEN_PHRASES = [
  "funciona correctamente",
  "se muestra lo esperado",
  "todo está bien",
  "se procesa exitosamente",
  "la operación es correcta",
  "el sistema responde adecuadamente"
];

const VALID_KEYWORDS = [
  "Característica",
  "Regla",
  "Antecedentes",
  "Escenario",
  "Esquema del escenario",
  "Ejemplos",
  "Dado",
  "Cuando",
  "Entonces",
  "Y",
  "Pero"
];

function validate() {
  console.log('=== RUNNING AUTOMATED GHERKIN VALIDATION ===');

  if (!fs.existsSync(targetDir)) {
    console.error(`✗ Gherkin directory does not exist: ${targetDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.feature'));
  
  if (files.length !== 17) {
    console.error(`✗ Validation failed: Expected exactly 17 feature files, found ${files.length}`);
    process.exit(1);
  }

  const seenIds = new Set();
  const seenFeatures = new Set();
  let totalScenarios = 0;
  let errorsCount = 0;

  files.forEach(file => {
    const filePath = path.join(targetDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    console.log(`Analyzing: ${file}...`);

    let hasLanguageHeader = false;
    let currentFeature = '';
    let currentScenarioTags = [];

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();

      // Check language header
      if (lineNum === 1) {
        if (trimmed === '# language: es') {
          hasLanguageHeader = true;
        } else {
          console.error(`  [Line ${lineNum}] ✗ Missing or invalid language header: "${trimmed}". Expected "# language: es"`);
          errorsCount++;
        }
      }

      // Check for forbidden phrases
      FORBIDDEN_PHRASES.forEach(phrase => {
        if (trimmed.toLowerCase().includes(phrase)) {
          console.error(`  [Line ${lineNum}] ✗ Forbidden vague phrase found: "${phrase}"`);
          errorsCount++;
        }
      });

      // Capture tags
      if (trimmed.startsWith('@')) {
        currentScenarioTags = trimmed.split(/\s+/).map(t => t.trim());
        
        // Assert scenario tags uniqueness
        currentScenarioTags.forEach(tag => {
          if (tag.startsWith('@RAIA_') && !tag.endsWith('_001') && !tag.startsWith('@RAIA_MODULO_')) {
            if (seenIds.has(tag)) {
              console.error(`  [Line ${lineNum}] ✗ Duplicate Scenario ID: "${tag}"`);
              errorsCount++;
            }
            seenIds.add(tag);
          }
        });
      }

      // Check Feature
      if (trimmed.startsWith('Característica:')) {
        const featureName = trimmed.replace('Característica:', '').trim();
        if (seenFeatures.has(featureName)) {
          console.error(`  [Line ${lineNum}] ✗ Duplicate Feature Name: "${featureName}"`);
          errorsCount++;
        }
        seenFeatures.add(featureName);
        currentFeature = featureName;
      }

      // Check Scenario
      if (trimmed.startsWith('Escenario:') || trimmed.startsWith('Esquema del escenario:')) {
        totalScenarios++;
      }
    });
  });

  if (errorsCount > 0) {
    console.error(`\n✗ Gherkin Validation completed with ${errorsCount} errors.`);
    process.exit(1);
  }

  console.log(`\n✓ Success: All 17 feature files are valid. Checked ${totalScenarios} scenario runs. 0 duplicate IDs.`);
  process.exit(0);
}

validate();
