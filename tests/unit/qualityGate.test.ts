import { describe, it, expect, beforeEach, afterEach } from "vitest";
import fs from "fs";
import path from "path";
import { runQualityGate, THRESHOLD_STATEMENT_COVERAGE } from "../../scripts/calculateQualityGate";

const TEMP_DIR = path.join(__dirname, "..", "..", "test-results", "tmp-test");

describe("Quality Gate Validation Suite (SEC-01)", () => {
  const resultsPath = path.join(TEMP_DIR, "results.json");
  const coveragePath = path.join(TEMP_DIR, "coverage.json");

  beforeEach(() => {
    if (!fs.existsSync(TEMP_DIR)) {
      fs.mkdirSync(TEMP_DIR, { recursive: true });
    }
  });

  afterEach(() => {
    if (fs.existsSync(resultsPath)) fs.unlinkSync(resultsPath);
    if (fs.existsSync(coveragePath)) fs.unlinkSync(coveragePath);
    if (fs.existsSync(TEMP_DIR)) fs.rmdirSync(TEMP_DIR);
  });

  const writeMockResults = (results: any[]) => {
    fs.writeFileSync(resultsPath, JSON.stringify({ results }), "utf8");
  };

  const writeMockCoverage = (coverageData: any) => {
    fs.writeFileSync(coveragePath, JSON.stringify(coverageData), "utf8");
  };

  it("1. should fail if the classified results file is missing", () => {
    const outcome = runQualityGate({
      resultsPath: path.join(TEMP_DIR, "non-existent.json"),
      coveragePath
    });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("classified_results.json not found");
  });

  it("2. should fail if the classified results file has malformed JSON", () => {
    fs.writeFileSync(resultsPath, "{ invalid json }", "utf8");
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("Failed to parse classified_results.json");
  });

  it("3. should fail if coverage-summary.json is missing total.statements.pct", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { branches: { pct: 80 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("missing total.statements.pct");
  });

  it("4. should fail if coverage is lower than threshold", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: THRESHOLD_STATEMENT_COVERAGE - 0.1 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("below threshold");
  });

  it("5. should pass if coverage is exactly equal to threshold", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: THRESHOLD_STATEMENT_COVERAGE } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(true);
    expect(outcome.errors.length).toBe(0);
  });

  it("6. should pass if coverage is higher than threshold", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: 95.5 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(true);
    expect(outcome.errors.length).toBe(0);
  });

  it("7. should fail if coverage is NaN", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: NaN } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("is not a number");
  });

  it("8. should fail if coverage is greater than 100", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: 101.5 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("out of bounds");
  });

  it("9. should fail if coverage is negative", () => {
    writeMockResults([]);
    writeMockCoverage({ total: { statements: { pct: -5 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors[0]).toContain("out of bounds");
  });

  it("should fail if there are active P0/P1 product defects", () => {
    writeMockResults([
      {
        testCaseId: "TC-001",
        title: "Test 1",
        module: "M1",
        executionStatus: "FAIL",
        failureClassification: "PRODUCT_DEFECT",
        severity: "P0",
        expectedResult: "Pass",
        actualResult: "Fail",
        evidencePaths: [],
        recommendation: "Fix it"
      }
    ]);
    writeMockCoverage({ total: { statements: { pct: 85 } } });
    const outcome = runQualityGate({ resultsPath, coveragePath });
    expect(outcome.success).toBe(false);
    expect(outcome.errors.some(e => e.includes("failed executions"))).toBe(true);
    expect(outcome.errors.some(e => e.includes("P0/P1 product defects"))).toBe(true);
  });
});
