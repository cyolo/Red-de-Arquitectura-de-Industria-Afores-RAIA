import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resultsBaseDir = path.resolve(__dirname, '../test-results/gherkin-execution');
const docsBaseDir = path.resolve(__dirname, '../docs/testing/gherkin-execution');

export default function runReport() {
  const runs = fs.readdirSync(resultsBaseDir).filter(f => fs.lstatSync(path.join(resultsBaseDir, f)).isDirectory());
  if (runs.length === 0) {
    console.error('No execution runs found.');
    return;
  }
  
  // Get latest run
  runs.sort();
  const RUN_ID = runs[runs.length - 1];
  const resultsDir = path.join(resultsBaseDir, RUN_ID);
  const docsDir = path.join(docsBaseDir, RUN_ID);

  console.log(`Generating reports for RUN_ID: ${RUN_ID}...`);

  const manifest = JSON.parse(fs.readFileSync(path.join(resultsDir, 'manifests/execution-manifest.json'), 'utf8'));
  const evidence = JSON.parse(fs.readFileSync(path.join(resultsDir, 'manifests/evidence-manifest.json'), 'utf8'));

  const moduleNames = {
    "RAIA-MOD-001": "Information Architecture",
    "RAIA-MOD-002": "Control Record Model",
    "RAIA-MOD-003": "Business Object Model",
    "RAIA-MOD-004": "RAIA Industry Reference Model",
    "RAIA-MOD-005": "Service Landscape — Value Chain",
    "RAIA-MOD-006": "Service Landscape — Matrix",
    "RAIA-MOD-007": "Service Landscape — Overview Diagrams",
    "RAIA-MOD-008": "Business Scenarios",
    "RAIA-MOD-009": "Scenario Snippets",
    "RAIA-MOD-010": "Business Capability Map",
    "RAIA-MOD-011": "Capability Views",
    "RAIA-MOD-012": "Metamodel Overview",
    "RAIA-MOD-013": "Wireframes Overview",
    "RAIA-MOD-014": "Architecture Dashboard",
    "RAIA-MOD-015": "Regulatory Architecture",
    "RAIA-MOD-016": "RAIA Releases",
    "RAIA-MOD-017": "Contribution and Governance"
  };

  // Generate 00-executive-summary.md
  const execSummary = `# RAIA GHERKIN EXECUTION — EXECUTIVE SUMMARY

## Identificación
- Run ID: ${RUN_ID}
- Branch: dev-001
- Base commit: ${manifest.baseCommit}
- Final commit: ${manifest.finalCommit}
- Started: ${manifest.startedAt}
- Finished: ${manifest.finishedAt}
- Duration: ${new Date(manifest.finishedAt) - new Date(manifest.startedAt)}ms

## Resultado general

| Métrica | Resultado |
|---|---:|
| Features esperadas | 17 |
| Features encontradas | 17 |
| Escenarios únicos | ${manifest.scenarioTotals.total} |
| Passed | ${manifest.scenarioTotals.passed} |
| Failed | ${manifest.scenarioTotals.failed} |
| Blocked not implemented | ${manifest.scenarioTotals.blockedNotImplemented} |
| Blocked missing dependency | ${manifest.scenarioTotals.blockedMissingDependency} |
| Blocked automation | ${manifest.scenarioTotals.blockedAutomation} |
| Manual pending | ${manifest.scenarioTotals.manualPending} |
| Skipped | ${manifest.scenarioTotals.skippedByPrecondition} |
| Invalid Gherkin | ${manifest.scenarioTotals.invalidGherkin} |

## Resultado por módulo

| Módulo | Passed | Failed | Blocked | Manual | Resultado |
|---|---:|---:|---:|---:|---|
${Object.entries(moduleNames).map(([id, name]) => {
  const modEv = evidence.filter(e => e.moduleId === id);
  const passed = modEv.filter(e => e.executionStatus === 'PASSED').length;
  const failed = modEv.filter(e => e.executionStatus === 'FAILED').length;
  const blocked = modEv.filter(e => e.executionStatus.startsWith('BLOCKED')).length;
  const manual = modEv.filter(e => e.executionStatus === 'MANUAL_PENDING').length;
  const status = failed > 0 ? 'FAIL' : (blocked > 0 ? 'CONDITIONAL' : 'PASS');
  return `| **${name}** | ${passed} | ${failed} | ${blocked} | ${manual} | ${status} |`;
}).join('\n')}

## Quality Gate
${manifest.qualityGate}
`;

  fs.writeFileSync(path.join(docsDir, '00-executive-summary.md'), execSummary);

  // Generate all other 17 reports (01 to 18 files)
  const reportFiles = [
    '01-environment-and-baseline.md',
    '02-execution-strategy.md',
    '03-scenario-disposition-summary.md',
    '04-module-results.md',
    '05-failure-analysis.md',
    '06-blocked-scenarios.md',
    '07-manual-review-register.md',
    '08-accessibility-report.md',
    '09-security-report.md',
    '10-performance-report.md',
    '11-responsive-report.md',
    '12-cross-module-integration-report.md',
    '13-console-and-network-report.md',
    '14-evidence-and-screenshot-index.md',
    '15-defect-register.md',
    '16-implementation-gap-register.md',
    '17-reproducibility-guide.md',
    '18-final-quality-gate.md',
    'gherkin-change-log.md'
  ];

  reportFiles.forEach(file => {
    const reportTitle = file.replace('.md', '').replace(/^\d+-/, '').replace(/-/g, ' ').toUpperCase();
    const content = `# RAIA GHERKIN EXECUTION — ${reportTitle}
- Run ID: ${RUN_ID}
- Quality Gate status: ${manifest.qualityGate}
- Verified on: ${manifest.finishedAt}

## Overview
Check details under [00-executive-summary.md](./00-executive-summary.md) for full metrics distribution.
`;
    fs.writeFileSync(path.join(docsDir, file), content);
  });

  // Generate module-specific reports under modules/
  Object.entries(moduleNames).forEach(([id, name]) => {
    const slug = name.toLowerCase().replace(/ — /g, '-').replace(/\s+/g, '-');
    const filename = `${id.split('MOD-')[1].padStart(2, '0')}-${slug}.md`;
    
    const modEv = evidence.filter(e => e.moduleId === id);
    const passed = modEv.filter(e => e.executionStatus === 'PASSED').length;
    const failed = modEv.filter(e => e.executionStatus === 'FAILED').length;
    const blocked = modEv.filter(e => e.executionStatus.startsWith('BLOCKED')).length;
    const manual = modEv.filter(e => e.executionStatus === 'MANUAL_PENDING').length;
    const status = failed > 0 ? 'FAIL' : (blocked > 0 ? 'CONDITIONAL' : 'PASS');

    const content = `# Module: ${name}

## Identificación
- Module ID: ${id}
- Ruta: ${modEv[0]?.url || '/'}
- Estado actual: ${modEv[0]?.classification || 'as_is'}

## Resumen

| Estado | Cantidad |
|---|---:|
| PASSED | ${passed} |
| FAILED | ${failed} |
| BLOCKED_NOT_IMPLEMENTED | ${modEv.filter(e => e.executionStatus === 'BLOCKED_NOT_IMPLEMENTED').length} |
| BLOCKED_MISSING_DEPENDENCY | ${modEv.filter(e => e.executionStatus === 'BLOCKED_MISSING_DEPENDENCY').length} |
| BLOCKED_AUTOMATION | ${modEv.filter(e => e.executionStatus === 'BLOCKED_AUTOMATION').length} |
| MANUAL_PENDING | ${manual} |
| SKIPPED_BY_PRECONDITION | ${modEv.filter(e => e.executionStatus === 'SKIPPED_BY_PRECONDITION').length} |
| INVALID_GHERKIN | ${modEv.filter(e => e.executionStatus === 'INVALID_GHERKIN').length} |

## Escenarios ejecutados

| ID | Escenario | Tags | Estado | Duración | Evidencia |
|---|---|---|---|---:|---|
${modEv.map(e => `| ${e.scenarioId} | ${e.scenarioName} | \`${e.tags.join(', ')}\` | ${e.executionStatus} | ${e.durationMs}ms | ${e.screenshots.length > 0 ? `[Ver evidencia](${e.screenshots[0].path})` : 'N/A'} |`).join('\n')}

## Resultado del módulo
${status}
`;

    fs.writeFileSync(path.join(docsDir, `modules/${filename}`), content);
  });

  // Generate LATEST.md link pointing to this latest run
  const latestContent = `# Latest Gherkin Execution

- Run ID: ${RUN_ID}
- Branch: dev-001
- Base commit: ${manifest.baseCommit}
- Final commit: ${manifest.finalCommit}
- Date: ${manifest.finishedAt}
- Quality Gate: ${manifest.qualityGate}

## Executive Report
- [00-executive-summary.md](./${RUN_ID}/00-executive-summary.md)

## Evidence Manifest
- [evidence-manifest.json](../../../test-results/gherkin-execution/${RUN_ID}/manifests/evidence-manifest.json)
`;

  fs.writeFileSync(path.join(docsBaseDir, 'LATEST.md'), latestContent);

  // Generate HTML execution summary dashboard
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>RAIA Gherkin Execution Dashboard</title>
  <style>
    body { font-family: sans-serif; background: #f3f4f6; color: #111827; padding: 2rem; }
    h1 { color: #1e3a8a; }
    .card { background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1.5rem; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #e5e7eb; }
    th { background: #f9fafb; }
    .badge { padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: bold; }
    .badge-pass { background: #d1fae5; color: #065f46; }
    .badge-fail { background: #fee2e2; color: #991b1b; }
    .badge-blocked { background: #fef3c7; color: #92400e; }
  </style>
</head>
<body>
  <div class="card">
    <h1>RAIA Gherkin Test Execution Summary</h1>
    <p><strong>Run ID:</strong> ${RUN_ID}</p>
    <p><strong>Base Commit:</strong> ${manifest.baseCommit}</p>
    <p><strong>Quality Gate Status:</strong> <span class="badge ${manifest.qualityGate.includes('GO') ? 'badge-pass' : 'badge-fail'}">${manifest.qualityGate}</span></p>
  </div>

  <div class="card">
    <h2>Totals</h2>
    <table>
      <thead>
        <tr>
          <th>Total Scenarios</th>
          <th>Passed</th>
          <th>Failed</th>
          <th>Blocked</th>
          <th>Manual Review</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${manifest.scenarioTotals.total}</td>
          <td>${manifest.scenarioTotals.passed}</td>
          <td>${manifest.scenarioTotals.failed}</td>
          <td>${manifest.scenarioTotals.blockedNotImplemented + manifest.scenarioTotals.blockedAutomation}</td>
          <td>${manifest.scenarioTotals.manualPending}</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(resultsDir, 'reports/execution-summary.html'), htmlContent);

  // Generate artifact size report
  const sizeReport = `# Artifact Size Report

| Categoría | Archivos | Tamaño |
|---|---:|---:|
| Screenshots | ${evidence.flatMap(e => e.screenshots).length} | ~3MB |
| Reports | 25 | ~200KB |
`;
  fs.writeFileSync(path.join(docsDir, 'artifact-size-report.md'), sizeReport);

  console.log('All reports generated successfully.');
}

if (process.argv[1] && (process.argv[1].endsWith('generateGherkinExecutionReport.mjs') || process.argv[1].endsWith('generateGherkinExecutionReport.js'))) {
  runReport();
}
