import { describe, it, expect } from "vitest";
import {
  getCapabilityDomains,
  getCapabilities,
  getCapabilityById,
  getCapabilityServiceDomainMappings,
  getCapabilityHierarchy,
  getCapabilityCoverage
} from "../../../src/domain/repositories/capabilityRepository";

describe("Business Capability Map Repository Tests", () => {
  it("should fetch all canonical capability domains", () => {
    const list = getCapabilityDomains();
    expect(list.length).toBeGreaterThan(0);
    expect(list[0].id).toBe("RAIA-CAPD-001");
  });

  it("should retrieve a single capability by ID", () => {
    const cap = getCapabilityById("RAIA-CAP-001-0001");
    expect(cap).toBeDefined();
    expect(cap?.nameEs).toBe("Definición de Política Sectorial");
  });

  it("should verify that L1 capability hierarchy compiles correctly", () => {
    const hierarchy = getCapabilityHierarchy();
    expect(hierarchy.length).toBeGreaterThan(0);
    const domainOne = hierarchy.find(h => h.id === "RAIA-CAPD-001");
    expect(domainOne).toBeDefined();
    expect(domainOne?.capabilities.length).toBeGreaterThan(0);
  });

  it("should calculate capability baseline coverage ratio", () => {
    const coverage = getCapabilityCoverage();
    expect(coverage.total).toBeGreaterThan(0);
    expect(coverage.percentage).toBeGreaterThan(0);
  });
});
