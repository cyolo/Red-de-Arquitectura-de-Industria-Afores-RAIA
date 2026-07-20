import { describe, test, expect } from "vitest";
import { calculateMatrix } from "../domain/matrixEngine";
import { MatrixConfiguration } from "../domain/matrixTypes";

describe("Matrix Engine Unit Tests", () => {
  const config: MatrixConfiguration = {
    rowDimension: "business-area",
    columnDimension: "regulatory-coverage",
    measure: "service-domain-count",
    filters: {},
    normalize: false,
    includeEmptyRows: true,
    includeEmptyColumns: true
  };

  test("Calculate basic counts matrix successfully", () => {
    const result = calculateMatrix(config);

    expect(result.rowHeaders.length).toBeGreaterThan(0);
    expect(result.columnHeaders.length).toBe(5); // unmapped, partial, mapped, reviewed, not-applicable
    expect(result.cells.length).toBe(result.rowHeaders.length * result.columnHeaders.length);

    // Sum of cell domain counts might be greater than or equal to total domains due to multi-valued domains,
    // but grandTotal is evaluated uniquely.
    expect(result.totals.grandTotal).toBe(273); // Total domains in RAIA baseline
    expect(result.maximumValue).toBeGreaterThan(0);
    expect(result.executionTimeMs).toBeLessThan(1000);
  });

  test("Filters are correctly applied to calculations", () => {
    const filteredConfig: MatrixConfiguration = {
      ...config,
      filters: {
        area: "RAIA-BA-008" // Front-Office y Experiencia
      }
    };

    const result = calculateMatrix(filteredConfig);

    // All active rows/columns should belong to BA-008
    expect(result.totals.grandTotal).toBeLessThan(273);

    const activeRows = result.rowHeaders;
    // Check if only BA-008 is mapped or returned if includeEmptyRows is false
    const compactConfig: MatrixConfiguration = {
      ...filteredConfig,
      includeEmptyRows: false
    };

    const compactResult = calculateMatrix(compactConfig);
    expect(compactResult.rowHeaders.length).toBe(1);
    expect(compactResult.rowHeaders[0].id).toBe("RAIA-BA-008");
  });

  test("Alternative measures calculate properly", () => {
    const mappingConfig: MatrixConfiguration = {
      ...config,
      measure: "regulatory-mapping-count"
    };

    const result = calculateMatrix(mappingConfig);
    expect(result.totals.grandTotal).toBeGreaterThan(0);

    const averageMaturityConfig: MatrixConfiguration = {
      ...config,
      measure: "average-maturity-score"
    };

    const avgResult = calculateMatrix(averageMaturityConfig);
    expect(avgResult.totals.grandTotal).toBeGreaterThan(0);
    expect(avgResult.totals.grandTotal).toBeLessThanOrEqual(4); // max maturity score is 4 (adopted)
  });
});
