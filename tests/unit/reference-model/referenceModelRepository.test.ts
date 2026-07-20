import { describe, it, expect } from "vitest";
import {
  getIndustryReferenceModel,
  getReferenceModelViewpoints,
  resolveArtifactReference,
  getCrossModelRelations,
  getTraceabilityPath,
  composeImpactView,
  composeViewpoint
} from "../../../src/domain/repositories/referenceModelRepository";

describe("Reference Model Repository & Composition", () => {
  it("should fetch reference model metadata", () => {
    const model = getIndustryReferenceModel();
    expect(model.id).toBe("RAIA-RM-001");
    expect(model.viewpointIds.length).toBeGreaterThan(0);
  });

  it("should fetch all viewpoints", () => {
    const viewpoints = getReferenceModelViewpoints();
    expect(viewpoints.length).toBe(10);
    expect(viewpoints[0].id).toBe("RAIA-RMV-001");
  });

  it("should resolve artifact references correctly", () => {
    const ref = { artifactType: "business-object", artifactId: "RAIA-BO-0005" };
    const resolved = resolveArtifactReference(ref as any);
    expect(resolved).toBeDefined();
    expect(resolved?.id).toBe("RAIA-BO-0005");
  });

  it("should fetch cross model relations", () => {
    const relations = getCrossModelRelations();
    expect(relations.length).toBeGreaterThan(0);
  });

  it("should resolve traceability paths", () => {
    const source = { artifactType: "participant", artifactId: "ACT-AFORE" };
    const target = { artifactType: "control-record", artifactId: "RAIA-CRM-001" };
    const path = getTraceabilityPath(source as any, target as any);
    expect(path.length).toBeGreaterThan(0);
  });

  it("should calculate downstream change impact", () => {
    const view = composeImpactView("RAIA-BO-0005", "rename");
    expect(view.impactedCount).toBeGreaterThanOrEqual(0);
  });

  it("should compose viewpoints layout structures", () => {
    const composed = composeViewpoint("RAIA-RMV-003");
    expect(composed.nodes.length).toBeGreaterThan(0);
    expect(composed.edges.length).toBeGreaterThan(0);
  });
});
