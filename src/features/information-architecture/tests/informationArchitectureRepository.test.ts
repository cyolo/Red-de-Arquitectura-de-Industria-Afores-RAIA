import { describe, it, expect } from "vitest";
import {
  getInformationDomains,
  getInformationDomainById,
  getCanonicalBusinessObjects,
  getCanonicalBusinessObjectById,
  getBusinessObjectsForServiceDomain,
  getServiceDomainsForBusinessObject,
  getLineageForBusinessObject
} from "../../../domain/repositories/informationArchitectureRepository";

describe("Information Architecture Repository Tests", () => {
  it("should retrieve all information domains", () => {
    const domains = getInformationDomains();
    expect(domains.length).toBeGreaterThan(0);
    expect(domains[0]).toHaveProperty("id");
    expect(domains[0]).toHaveProperty("nameEs");
  });

  it("should look up a domain by ID", () => {
    const domain = getInformationDomainById("RAIA-IDOM-001");
    expect(domain).toBeDefined();
    expect(domain?.slug).toBe("personas-e-identidad");
  });

  it("should return undefined for non-existent domain ID", () => {
    const domain = getInformationDomainById("RAIA-IDOM-999");
    expect(domain).toBeUndefined();
  });

  it("should retrieve all canonical business objects", () => {
    const objects = getCanonicalBusinessObjects();
    expect(objects.length).toBeGreaterThan(0);
  });

  it("should look up business objects by service domain association", () => {
    // RAIA-SD-020 is producer for RAIA-BO-001 (Registro de Trabajador)
    const objectsForSd = getBusinessObjectsForServiceDomain("RAIA-SD-020");
    expect(objectsForSd.length).toBeGreaterThan(0);
    expect(objectsForSd.some((o) => o.id === "RAIA-BO-001")).toBe(true);
  });

  it("should look up service domains for a business object", () => {
    const sds = getServiceDomainsForBusinessObject("RAIA-BO-001");
    expect(sds.producers).toContain("RAIA-SD-020");
  });

  it("should filter lineage edges for a business object", () => {
    const lineage = getLineageForBusinessObject("RAIA-BO-001");
    expect(lineage.length).toBeGreaterThan(0);
    expect(lineage[0].businessObjectIds).toContain("RAIA-BO-001");
  });
});
