import { describe, it, expect } from "vitest";
import {
  getControlRecords,
  getControlRecordById,
  getControlRecordStates,
  getControlRecordTransitions,
  getReachableStates,
  getUnreachableStates,
  getDeadEndStates,
  getScenarioConformance
} from "../../src/domain/repositories/controlRecordRepository";

describe("Control Record Repository Unit Tests", () => {
  it("should retrieve all control records", () => {
    const records = getControlRecords();
    expect(records.length).toBeGreaterThan(0);
    expect(records.some((r) => r.id === "RAIA-CRM-001")).toBe(true);
  });

  it("should retrieve control record by ID", () => {
    const record = getControlRecordById("RAIA-CRM-001");
    expect(record).toBeDefined();
    expect(record?.slug).toBe("cuenta-individual");
  });

  it("should calculate state reachability correctly", () => {
    const reachable = getReachableStates("RAIA-CRM-001");
    expect(reachable.length).toBeGreaterThan(0);
    expect(reachable).toContain("RAIA-CRS-001-01");
  });

  it("should detect unreachable states", () => {
    const unreachable = getUnreachableStates("RAIA-CRM-001");
    expect(Array.isArray(unreachable)).toBe(true);
  });

  it("should detect dead end states", () => {
    const deadEnds = getDeadEndStates("RAIA-CRM-001");
    expect(Array.isArray(deadEnds)).toBe(true);
  });

  it("should evaluate scenario conformance successfully", () => {
    const result = getScenarioConformance("RAIA-BS-0002");
    expect(result.conforms).toBe(true);
    expect(result.issues.length).toBe(0);
  });
});
