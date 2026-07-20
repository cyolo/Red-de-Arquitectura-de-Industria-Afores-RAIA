import fs from 'fs';
import path from 'path';

interface PlaywrightReport {
  suites: any[];
}

interface ClassifiedTestResult {
  testCaseId: string;
  title: string;
  module: string;
  executionStatus: "PASS" | "FAIL" | "ERROR" | "BLOCKED" | "SKIPPED";
  failureClassification?: "TEST_DEFECT" | "PRODUCT_DEFECT" | "DATA_DEFECT" | "ENVIRONMENT_DEFECT" | "REQUIREMENT_MISMATCH" | "BLOCKED";
  rootCauseId?: string;
  severity?: "P0" | "P1" | "P2" | "P3";
  expectedResult: string;
  actualResult: string;
  evidencePaths: string[];
  recommendation: string;
}

const REPORTS_DIR = path.join(__dirname, '..', 'test-results', 'reports');
const INPUT_FILE = path.join(REPORTS_DIR, 'results.json');
const OUTPUT_FILE = path.join(REPORTS_DIR, 'classified_results.json');

function parseTestCaseId(title: string): string {
  const match = title.match(/RAIA-[A-Z]+-\d+/i) || title.match(/RAIA-BS-E2E-\d+/i);
  return match ? match[0].toUpperCase() : 'UNKNOWN-TC';
}

function getModuleFromPath(file: string): string {
  if (file.includes('business-scenarios')) return 'Business Scenarios';
  if (file.includes('metamodel')) return 'Metamodel Overview';
  if (file.includes('value-chain')) return 'Service Landscape — Value Chain';
  if (file.includes('dashboard')) return 'Architecture Dashboard';
  if (file.includes('releases')) return 'RAIA Releases';
  if (file.includes('navigation')) return 'Global Navigation';
  if (file.includes('accessibility')) return 'Accessibility';
  if (file.includes('visual')) return 'Visual Regression';
  return 'Global';
}

function main() {
  console.log("Starting test failure classification...");
  
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Input file ${INPUT_FILE} not found. Running mock classification.`);
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    // Write an empty classification if results.json is not generated yet
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ results: [] }, null, 2));
    return;
  }

  const report: PlaywrightReport = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));
  const classifiedResults: ClassifiedTestResult[] = [];

  function traverseSuite(suite: any) {
    if (suite.specs) {
      for (const spec of suite.specs) {
        const file = spec.file || '';
        const moduleName = getModuleFromPath(file);
        
        for (const test of spec.tests) {
          const title = spec.title || '';
          const testCaseId = parseTestCaseId(title);
          
          const result = test.results && test.results[0];
          const status = result ? result.status : 'skipped';
          
          let execStatus: ClassifiedTestResult['executionStatus'] = 'PASS';
          if (status === 'expected' || status === 'passed') {
            execStatus = 'PASS';
          } else if (status === 'unexpected' || status === 'failed') {
            execStatus = 'FAIL';
          } else if (status === 'timedOut') {
            execStatus = 'ERROR';
          } else if (status === 'skipped') {
            execStatus = 'SKIPPED';
          }

          let failureClassification: ClassifiedTestResult['failureClassification'];
          let rootCauseId: string | undefined;
          let severity: ClassifiedTestResult['severity'];
          let expectedResult = 'Debe comportarse de acuerdo al diseño establecido.';
          let actualResult = 'Comportamiento correcto verificado.';
          let recommendation = 'No se requiere acción.';
          const evidencePaths: string[] = [];

          if (result && result.attachments) {
            for (const att of result.attachments) {
              if (att.path) {
                // convert to relative path
                const relPath = path.relative(path.join(__dirname, '..'), att.path).replace(/\\/g, '/');
                evidencePaths.push(relPath);
              }
            }
          }

          if (execStatus !== 'PASS') {
            const errorMsg = (result.error && result.error.message) || '';
            const errorStack = (result.error && result.error.stack) || '';
            actualResult = errorMsg.split('\n')[0] || 'Timeout o error de ejecución.';
            expectedResult = 'El elemento/componente debe coincidir con la expectativa o estar visible en el DOM.';

            // Simple pattern matching for classification
            if (errorMsg.includes('toBeVisible') && (errorMsg.includes('dashboard-metric') || errorMsg.includes('release-card') || errorMsg.includes('value-chain-page'))) {
              failureClassification = 'TEST_DEFECT';
              rootCauseId = 'RAIA-RC-0002'; // Selectors missing
              severity = 'P1';
              recommendation = 'Verificar si el componente tiene asignado el atributo data-testid correspondiente en el DOM.';
            } else if (errorMsg.includes('toContainText') && errorMsg.includes('Red de Arquitectura')) {
              failureClassification = 'TEST_DEFECT';
              rootCauseId = 'RAIA-RC-0003'; // Copy mismatch
              severity = 'P2';
              recommendation = 'Corregir la expectativa del test para coincidir con el h1 actual de Home.';
            } else if (errorMsg.includes('toHaveCount') && errorMsg.includes('scenario-card')) {
              failureClassification = 'TEST_DEFECT';
              rootCauseId = 'RAIA-RC-0001'; // Broken selector on cards
              severity = 'P1';
              recommendation = 'Corregir el selector en el test para buscar por data-testid="scenario-card" en vez de regex de texto.';
            } else if (errorMsg.includes('fixed') && errorMsg.includes('inset-0')) {
              failureClassification = 'TEST_DEFECT';
              rootCauseId = 'RAIA-RC-0004'; // Fullscreen native api conflict
              severity = 'P2';
              recommendation = 'Implementar comprobación de API Fullscreen nativa o fallback en el test.';
            } else {
              // Default to product defect for unclassified product issues
              failureClassification = 'PRODUCT_DEFECT';
              rootCauseId = 'RAIA-RC-9999';
              severity = 'P1';
              recommendation = 'Investigar el comportamiento en el componente del portal.';
            }
          }

          classifiedResults.push({
            testCaseId,
            title,
            module: moduleName,
            executionStatus: execStatus,
            failureClassification,
            rootCauseId,
            severity,
            expectedResult,
            actualResult,
            evidencePaths,
            recommendation
          });
        }
      }
    }

    if (suite.suites) {
      for (const subSuite of suite.suites) {
        traverseSuite(subSuite);
      }
    }
  }

  traverseSuite(report);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ results: classifiedResults }, null, 2));
  console.log(`Successfully classified ${classifiedResults.length} test executions and wrote to ${OUTPUT_FILE}`);
}

main();
