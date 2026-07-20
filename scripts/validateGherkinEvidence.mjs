import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resultsBaseDir = path.resolve(__dirname, '../test-results/gherkin-execution');
const docsBaseDir = path.resolve(__dirname, '../docs/testing/gherkin-execution');

export function validateEvidence() {
  const runs = fs.readdirSync(resultsBaseDir).filter(f => fs.lstatSync(path.join(resultsBaseDir, f)).isDirectory());
  if (runs.length === 0) {
    console.error('No runs found.');
    return false;
  }
  runs.sort();
  const RUN_ID = runs[runs.length - 1];
  const resultsDir = path.join(resultsBaseDir, RUN_ID);
  const docsDir = path.join(docsBaseDir, RUN_ID);

  console.log(`Running evidence validation checks on run ID: ${RUN_ID}...`);

  let errors = [];

  // Check 17 features
  const featureDir = path.resolve(__dirname, '../tests/gherkin/modules');
  const features = fs.readdirSync(featureDir).filter(f => f.endsWith('.feature'));
  if (features.length !== 17) {
    errors.push(`Expected 17 feature files, found ${features.length}`);
  }

  // Check HTML, JSON, Manifests existence
  const htmlPath = path.join(resultsDir, 'reports/execution-summary.html');
  const jsonPath = path.join(resultsDir, 'reports/cucumber-report.json');
  const manifestPath = path.join(resultsDir, 'manifests/execution-manifest.json');
  const evidencePath = path.join(resultsDir, 'manifests/evidence-manifest.json');

  if (!fs.existsSync(htmlPath)) errors.push('HTML execution summary missing.');
  if (!fs.existsSync(jsonPath)) errors.push('Cucumber JSON report missing.');
  if (!fs.existsSync(manifestPath)) errors.push('Execution manifest missing.');
  if (!fs.existsSync(evidencePath)) errors.push('Evidence manifest missing.');

  if (errors.length > 0) {
    console.error('✗ Evidence validation failed:');
    errors.forEach(e => console.error(`  - ${e}`));
    return false;
  }

  // Read manifests
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));

  // Scenario checks
  const scenarioIds = new Set();
  evidence.forEach(e => {
    if (!e.scenarioId) errors.push(`Scenario name "${e.scenarioName}" is missing a valid scenarioId.`);
    if (!e.executionStatus) errors.push(`Scenario "${e.scenarioId}" is missing an executionStatus.`);
    
    // Check duplicates
    if (scenarioIds.has(e.runId)) {
      errors.push(`Duplicate run ID found: ${e.runId}`);
    }
    scenarioIds.add(e.runId);

    // Verify screenshots existence
    e.screenshots.forEach(sc => {
      const fullPath = path.resolve(__dirname, '..', sc.path);
      if (!fs.existsSync(fullPath)) {
        errors.push(`Screenshot not found at path: ${fullPath}`);
      }
    });
  });

  // Verify report screenshots
  const reportScreenshotDir = path.join(resultsDir, 'report-screenshots');
  if (fs.existsSync(reportScreenshotDir)) {
    const rScreenshots = fs.readdirSync(reportScreenshotDir);
    if (rScreenshots.length < 9) {
      errors.push(`Expected at least 9 report screenshots, found ${rScreenshots.length}`);
    }
  } else {
    errors.push('Report screenshots directory missing.');
  }

  // Final status report
  if (errors.length > 0) {
    console.error('✗ Evidence validation failed:');
    errors.forEach(e => console.error(`  - ${e}`));
    return false;
  }

  console.log('✓ Success: All Gherkin execution evidence is complete and structurally sound.');
  return true;
}

if (process.argv[1] && (process.argv[1].endsWith('validateGherkinEvidence.mjs') || process.argv[1].endsWith('validateGherkinEvidence.js'))) {
  const success = validateEvidence();
  process.exit(success ? 0 : 1);
}
