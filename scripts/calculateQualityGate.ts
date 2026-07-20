import fs from 'fs';
import path from 'path';

export const THRESHOLD_STATEMENT_COVERAGE = 70;

export interface ClassifiedTestResult {
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

export interface QualityGateInput {
  resultsPath: string;
  coveragePath: string;
}

export function runQualityGate(input: QualityGateInput): { success: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // 1. Parse results
  if (!fs.existsSync(input.resultsPath)) {
    return { success: false, errors: [`classified_results.json not found at ${input.resultsPath}`] };
  }
  
  let results: ClassifiedTestResult[] = [];
  try {
    results = JSON.parse(fs.readFileSync(input.resultsPath, 'utf8')).results;
  } catch (e: any) {
    return { success: false, errors: [`Failed to parse classified_results.json: ${e.message}`] };
  }
  
  const failedExecutions = results.filter(r => r.executionStatus === 'FAIL' || r.executionStatus === 'ERROR');
  const activeProductDefects = results.filter(r => r.failureClassification === 'PRODUCT_DEFECT' && (r.severity === 'P0' || r.severity === 'P1'));
  
  if (failedExecutions.length > 0) {
    errors.push(`Success rate is not 100%: ${failedExecutions.length} failed executions.`);
  }
  if (activeProductDefects.length > 0) {
    errors.push(`Active P0/P1 product defects found: ${activeProductDefects.length}.`);
  }
  
  // 2. Parse coverage
  if (!fs.existsSync(input.coveragePath)) {
    return { success: false, errors: [...errors, `coverage-summary.json not found at ${input.coveragePath}`] };
  }
  
  let statementCoverage: number;
  try {
    const covData = JSON.parse(fs.readFileSync(input.coveragePath, 'utf8'));
    if (!covData || !covData.total || covData.total.statements === undefined || covData.total.statements.pct === undefined) {
      return { success: false, errors: [...errors, `coverage-summary.json missing total.statements.pct`] };
    }
    
    statementCoverage = covData.total.statements.pct;
    
    if (typeof statementCoverage !== 'number' || isNaN(statementCoverage)) {
      return { success: false, errors: [...errors, `coverage-summary.json statement coverage pct is not a number: ${statementCoverage}`] };
    }
    
    if (statementCoverage < 0 || statementCoverage > 100) {
      return { success: false, errors: [...errors, `coverage-summary.json statement coverage pct out of bounds (0-100): ${statementCoverage}`] };
    }
  } catch (e: any) {
    return { success: false, errors: [...errors, `Failed to parse coverage-summary.json: ${e.message}`] };
  }
  
  if (statementCoverage < THRESHOLD_STATEMENT_COVERAGE) {
    errors.push(`Statement Coverage is below threshold (${THRESHOLD_STATEMENT_COVERAGE}%). Current: ${statementCoverage}%`);
  }
  
  return {
    success: errors.length === 0,
    errors
  };
}

// standalone run guard
const isMain = typeof require !== 'undefined' && require.main === module;
const isMainArgv = process.argv[1] && (process.argv[1].endsWith('calculateQualityGate.ts') || process.argv[1].endsWith('calculateQualityGate.js'));

if (isMain || isMainArgv) {
  const REPORTS_DIR = path.join(__dirname, '..', 'test-results', 'reports');
  const INPUT_FILE = path.join(REPORTS_DIR, 'classified_results.json');
  const VITEST_COVERAGE_FILE = path.join(__dirname, '..', 'test-results', 'coverage', 'coverage-summary.json');

  console.log("Evaluating Quality Gate...");
  const outcome = runQualityGate({
    resultsPath: INPUT_FILE,
    coveragePath: VITEST_COVERAGE_FILE
  });
  
  console.log("\n--- Verification Matrix ---");
  if (outcome.success) {
    console.log("✅ Quality Gate check passed successfully.");
    console.log("🎉 QUALITY GATE: PASSED (GO-DECISION APPROVED) 🎉\n");
    process.exit(0);
  } else {
    console.error("❌ Quality Gate check failed:");
    outcome.errors.forEach(err => console.error(`  - ${err}`));
    console.log("\n❌ QUALITY GATE: FAILED (NO-GO DECISION) ❌\n");
    process.exit(1);
  }
}
