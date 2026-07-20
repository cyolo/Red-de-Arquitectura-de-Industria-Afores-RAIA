import { describe, it, expect } from "vitest";
import { ServiceDomainSchema } from "../../src/domain/schemas";

describe("RAIA Service Domain Zod Schema — Negative Tests", () => {
  // A base valid service domain object to clone
  const validBaseSD = {
    id: "RAIA-SD-999",
    slug: "domain-test",
    businessAreaId: "RAIA-BA-001",
    businessDomainId: "RAIA-BD-001",
    nameEs: "Dominio de Prueba",
    nameEn: "Test Domain",
    aliases: [],
    summary: "Resumen de prueba",
    definition: "Definicion de prueba",
    purpose: "Proposito de prueba",
    focusObject: {
      name: "Objeto Foco",
      description: "Descripcion"
    },
    capabilities: ["Capacidad"],
    serviceOperations: [],
    businessEvents: [],
    businessObjects: [],
    accountableActors: ["AFORE"],
    participatingActors: [],
    regulations: [],
    controls: [],
    evidences: [],
    nfrs: [],
    kpis: [],
    relatedServiceDomainIds: [],
    valueStreams: [],
    version: "1.0.0",
    status: "active",
    tags: ["test"],
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20"
  };

  describe("regulated-core validation constraints", () => {
    it("should fail validation if regulated-core is missing required fields", () => {
      const invalidSD = {
        ...validBaseSD,
        capabilityType: "regulated-core"
        // missing landscapeLayer, responsibilityStatement, responsibilityBoundary, participantIds, etc.
      };

      const result = ServiceDomainSchema.safeParse(invalidSD);
      expect(result.success).toBe(false);
      
      if (!result.success) {
        const paths = result.error.issues.map(issue => issue.path[0]);
        expect(paths).toContain("landscapeLayer");
        expect(paths).toContain("responsibilityStatement");
        expect(paths).toContain("responsibilityBoundary");
        expect(paths).toContain("participantIds");
        expect(paths).toContain("accountableParticipantIds");
        expect(paths).toContain("regulatoryCoverage");
        expect(paths).toContain("applicableRegimeIds");
        expect(paths).toContain("regulatoryCriticality");
        expect(paths).toContain("operationalValidationStatus");
        expect(paths).toContain("regulatoryValidationStatus");
      }
    });

    it("should pass validation if regulated-core has all required fields", () => {
      const validSD = {
        ...validBaseSD,
        capabilityType: "regulated-core",
        landscapeLayer: "sector-governance",
        responsibilityStatement: "Garantizar cumplimiento",
        responsibilityBoundary: "Todo el sector",
        participantIds: ["AFORE"],
        accountableParticipantIds: ["AFORE"],
        regulatoryCoverage: "reviewed",
        applicableRegimeIds: ["LSS97"],
        regulatoryCriticality: "high",
        operationalValidationStatus: "validated",
        regulatoryValidationStatus: "legally-reviewed"
      };

      const result = ServiceDomainSchema.safeParse(validSD);
      expect(result.success).toBe(true);
    });
  });

  describe("industry-shared validation constraints", () => {
    it("should fail validation if industry-shared is missing required fields", () => {
      const invalidSD = {
        ...validBaseSD,
        capabilityType: "industry-shared"
        // missing landscapeLayer, participantIds, responsibilityBoundary, operationalValidationStatus
      };

      const result = ServiceDomainSchema.safeParse(invalidSD);
      expect(result.success).toBe(false);

      if (!result.success) {
        const paths = result.error.issues.map(issue => issue.path[0]);
        expect(paths).toContain("landscapeLayer");
        expect(paths).toContain("participantIds");
        expect(paths).toContain("responsibilityBoundary");
        expect(paths).toContain("operationalValidationStatus");
      }
    });

    it("should pass validation if industry-shared has all required fields", () => {
      const validSD = {
        ...validBaseSD,
        capabilityType: "industry-shared",
        landscapeLayer: "industry-shared-service",
        participantIds: ["AFORE"],
        responsibilityBoundary: "Interconexión",
        operationalValidationStatus: "reviewed"
      };

      const result = ServiceDomainSchema.safeParse(validSD);
      expect(result.success).toBe(true);
    });
  });

  describe("enterprise-enabler validation constraints", () => {
    it("should fail validation if enterprise-enabler is not-applicable but misses justification", () => {
      const invalidSD = {
        ...validBaseSD,
        capabilityType: "enterprise-enabler",
        regulatoryCoverage: "not-applicable"
        // missing regulatoryNonApplicabilityReason
      };

      const result = ServiceDomainSchema.safeParse(invalidSD);
      expect(result.success).toBe(false);

      if (!result.success) {
        const paths = result.error.issues.map(issue => issue.path[0]);
        expect(paths).toContain("regulatoryNonApplicabilityReason");
      }
    });

    it("should pass validation if enterprise-enabler is not-applicable and has justification", () => {
      const validSD = {
        ...validBaseSD,
        capabilityType: "enterprise-enabler",
        regulatoryCoverage: "not-applicable",
        regulatoryNonApplicabilityReason: "Internal infrastructure not subject to direct CONSAR rules."
      };

      const result = ServiceDomainSchema.safeParse(validSD);
      expect(result.success).toBe(true);
    });
  });
});
