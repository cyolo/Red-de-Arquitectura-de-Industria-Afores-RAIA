import { describe, it, expect } from "vitest";
import {
  getBusinessObjects,
  getBusinessObjectById,
  getAttributesForBusinessObject,
  getRelationshipsForBusinessObject,
  getObjectImpactAnalysis,
  getAliasConflicts,
  getDuplicateObjectCandidates
} from "../../src/domain/repositories/businessObjectRepository";

describe("Business Object Repository Unit Tests", () => {
  it("should retrieve all 24 canonical business objects", () => {
    const objects = getBusinessObjects();
    expect(objects.length).toBeGreaterThan(0);
    expect(objects.some((o) => o.id === "RAIA-BO-0005")).toBe(true);
  });

  it("should retrieve business object by ID", () => {
    const bo = getBusinessObjectById("RAIA-BO-0005");
    expect(bo).toBeDefined();
    expect(bo?.slug).toBe("cuenta-individual");
  });

  it("should retrieve attributes for a business object", () => {
    const attrs = getAttributesForBusinessObject("RAIA-BO-0001");
    expect(attrs.length).toBeGreaterThan(0);
  });

  it("should retrieve relationships for a business object", () => {
    const rels = getRelationshipsForBusinessObject("RAIA-BO-0005");
    expect(rels.length).toBeGreaterThan(0);
  });

  it("should perform impact analysis correctly", () => {
    const analysis = getObjectImpactAnalysis("RAIA-BO-0005");
    expect(analysis.impactScore).toBeDefined();
    expect(Array.isArray(analysis.impactedObjectIds)).toBe(true);
  });

  it("should detect duplicate candidates and alias conflicts", () => {
    const duplicates = getDuplicateObjectCandidates();
    expect(Array.isArray(duplicates)).toBe(true);

    const conflicts = getAliasConflicts();
    expect(Array.isArray(conflicts)).toBe(true);
  });
});
