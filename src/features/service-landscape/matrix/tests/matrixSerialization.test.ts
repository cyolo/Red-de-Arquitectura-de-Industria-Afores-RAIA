import { describe, test, expect } from "vitest";
import { 
  serializeMatrixConfig, 
  deserializeMatrixParams 
} from "../domain/matrixSerialization";
import { MatrixConfiguration } from "../domain/matrixTypes";

describe("Matrix Serialization Unit Tests", () => {
  const baseConfig: MatrixConfiguration = {
    rowDimension: "business-area",
    columnDimension: "regulatory-coverage",
    measure: "service-domain-count",
    filters: {
      area: "RAIA-BA-001",
      domain: "RAIA-BD-002",
      actor: "afore",
      status: "active"
    },
    normalize: true,
    includeEmptyRows: false,
    includeEmptyColumns: true
  };

  test("Serialization to string works with all parameters", () => {
    const qStr = serializeMatrixConfig(baseConfig, "traspaso", { rowId: "RAIA-BA-001", columnId: "mapped" });
    const params = new URLSearchParams(qStr);

    expect(params.get("row")).toBe("business-area");
    expect(params.get("column")).toBe("regulatory-coverage");
    expect(params.get("measure")).toBe("service-domain-count");
    expect(params.get("normalize")).toBe("true");
    expect(params.get("includeEmptyColumns")).toBe("true");
    expect(params.get("includeEmptyRows")).toBeNull(); // false should omit or not be set as true
    expect(params.get("search")).toBe("traspaso");
    expect(params.get("area")).toBe("RAIA-BA-001");
    expect(params.get("domain")).toBe("RAIA-BD-002");
    expect(params.get("actor")).toBe("afore");
    expect(params.get("status")).toBe("active");
    expect(params.get("selectedCell")).toBe("RAIA-BA-001::mapped");
  });

  test("Deserialization reconstructs configurations", () => {
    const qStr = serializeMatrixConfig(baseConfig, "traspaso", { rowId: "RAIA-BA-001", columnId: "mapped" });
    const parsed = deserializeMatrixParams(new URLSearchParams(qStr));

    expect(parsed.config.rowDimension).toBe("business-area");
    expect(parsed.config.columnDimension).toBe("regulatory-coverage");
    expect(parsed.config.measure).toBe("service-domain-count");
    expect(parsed.config.normalize).toBe(true);
    expect(parsed.config.includeEmptyColumns).toBe(true);
    expect(parsed.config.includeEmptyRows).toBe(false);
    expect(parsed.searchQuery).toBe("traspaso");
    expect(parsed.config.filters?.area).toBe("RAIA-BA-001");
    expect(parsed.config.filters?.domain).toBe("RAIA-BD-002");
    expect(parsed.config.filters?.actor).toBe("afore");
    expect(parsed.config.filters?.status).toBe("active");
    expect(parsed.selectedCell).toEqual({ rowId: "RAIA-BA-001", columnId: "mapped" });
  });

  test("Deserialization handles empty/invalid parameters safely", () => {
    const parsed = deserializeMatrixParams(new URLSearchParams(""));

    expect(parsed.config.rowDimension).toBe("business-area");
    expect(parsed.config.columnDimension).toBe("regulatory-coverage");
    expect(parsed.config.measure).toBe("service-domain-count");
    expect(parsed.config.normalize).toBe(false);
    expect(parsed.searchQuery).toBe("");
    expect(parsed.selectedCell).toBeNull();
  });
});
