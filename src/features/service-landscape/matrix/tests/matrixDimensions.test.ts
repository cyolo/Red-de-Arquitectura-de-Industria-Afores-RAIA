import { describe, test, expect } from "vitest";
import { 
  matrixDimensionDefinitions, 
  getDomainValuesForDimension 
} from "../domain/matrixDimensions";
import { getServiceDomains } from "../../../../domain/repositories/landscapeRepository";
import { MatrixDimensionId } from "../domain/matrixTypes";

describe("Matrix Dimensions Unit Tests", () => {
  test("All dimensions are defined with metadata", () => {
    const dimensionIds: MatrixDimensionId[] = [
      "business-area", "business-domain", "service-domain", "landscape-layer", "capability-type",
      "lifecycle-status", "maturity", "accountable-participant", "participating-participant",
      "applicable-regime", "regulatory-coverage", "regulatory-criticality", "regulatory-validation-status",
      "regulatory-authority", "regulatory-source", "business-object", "focus-object",
      "control", "relation-type", "value-stream"
    ];

    dimensionIds.forEach(id => {
      const def = matrixDimensionDefinitions[id];
      expect(def).toBeDefined();
      expect(def.id).toBe(id);
      expect(def.label).toBeDefined();
      expect(def.shortLabel).toBeDefined();
      expect(def.description).toBeDefined();
      expect(def.category).toBeDefined();
      expect(typeof def.supportsRows).toBe("boolean");
      expect(typeof def.supportsColumns).toBe("boolean");
      
      const values = def.getValues();
      expect(Array.isArray(values)).toBe(true);
    });
  });

  test("Mapping service domain values maps correctly", () => {
    const sds = getServiceDomains();
    expect(sds.length).toBeGreaterThan(0);
    const sd = sds[0];

    const areaValues = getDomainValuesForDimension(sd, "business-area");
    expect(areaValues).toContain(sd.businessAreaId);

    const domainValues = getDomainValuesForDimension(sd, "business-domain");
    expect(domainValues).toContain(sd.businessDomainId);

    const sdValues = getDomainValuesForDimension(sd, "service-domain");
    expect(sdValues).toContain(sd.id);

    const statusValues = getDomainValuesForDimension(sd, "lifecycle-status");
    expect(statusValues).toContain(sd.status);
  });
});
