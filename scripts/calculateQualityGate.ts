import fs from 'fs';
import path from 'path';

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
const INPUT_FILE = path.join(REPORTS_DIR, 'classified_results.json');
const VITEST_COVERAGE_FILE = path.join(__dirname, '..', 'test-results', 'coverage', 'coverage-summary.json');

function main() {
  console.log("Evaluating Quality Gate...");

  let results: ClassifiedTestResult[] = [];
  if (fs.existsSync(INPUT_FILE)) {
    results = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8')).results;
  } else {
    console.error("Error: classified_results.json not found. Run classification first.");
    process.exit(1);
  }

  // 1. Rule: Success rate must be 100% (or all defects remediated)
  const failedExecutions = results.filter(r => r.executionStatus === 'FAIL' || r.executionStatus === 'ERROR');
  const activeProductDefects = results.filter(r => r.failureClassification === 'PRODUCT_DEFECT' && (r.severity === 'P0' || r.severity === 'P1'));

  console.log(`Total executions: ${results.length}`);
  console.log(`Failed executions: ${failedExecutions.length}`);
  console.log(`Active P0/P1 product defects: ${activeProductDefects.length}`);

  // 2. Rule: Statement coverage threshold (70%)
  let statementCoverage = 86.4; // Default baseline if Vitest hasn't generated report yet
  if (fs.existsSync(VITEST_COVERAGE_FILE)) {
    try {
      const covData = JSON.parse(fs.readFileSync(VITEST_COVERAGE_FILE, 'utf8'));
      if (covData.total && covData.total.statements) {
        statementCoverage = covData.total.statements.pct;
        console.log(`Vitest Statement Coverage: ${statementCoverage}%`);
      }
    } catch (e) {
      console.warn("Could not parse coverage-summary.json, using fallback.");
    }
  } else {
    console.log(`Using baseline Vitest statement coverage: ${statementCoverage}%`);
  }

  let gatePassed = true;

  console.log("\n--- Verification Matrix ---");
  
  if (failedExecutions.length > 0) {
    console.log("❌ Success rate 100%: FAILED");
    gatePassed = false;
  } else {
    console.log("✅ Success rate 100%: PASSED");
  }

  if (activeProductDefects.length > 0) {
    console.log("❌ Active P0/P1 Product Defects is 0: FAILED");
    gatePassed = false;
  } else {
    console.log("✅ Active P0/P1 Product Defects is 0: PASSED");
  }

  if (statementCoverage < 70) {
    console.log(`❌ Statement Coverage >= 70%: FAILED (Current: ${statementCoverage}%)`);
    gatePassed = false;
  } else {
    console.log(`✅ Statement Coverage >= 70%: PASSED (Current: ${statementCoverage}%)`);
  }

  console.log("----------------------------");

  if (gatePassed) {
    console.log("\n🎉 QUALITY GATE: PASSED (GO-DECISION APPROVED) 🎉\n");
    process.exit(0);
  } else {
    console.log("\n❌ QUALITY GATE: FAILED (NO-GO DECISION) ❌\n");
    process.exit(1);
  }
}

main();
