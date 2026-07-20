import { z } from "zod";

export const CapabilityLevelSchema = z.enum(["L0", "L1", "L2", "L3"]);

export const CapabilityTypeSchema = z.enum([
  "industry-core",
  "industry-shared",
  "regulatory-governance",
  "enterprise-enabler",
  "raia-governance"
]);

export const CapabilityDomainSchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  semanticBoundary: z.string(),
  level: z.enum(["L0", "L1"]),
  parentCapabilityDomainId: z.string().optional(),
  childCapabilityDomainIds: z.array(z.string()),
  capabilityIds: z.array(z.string()),
  capabilityType: CapabilityTypeSchema,
  businessAreaIds: z.array(z.string()),
  valueStreamIds: z.array(z.string()),
  accountableParticipantIds: z.array(z.string()),
  regulatoryMappingIds: z.array(z.string()),
  criticality: z.enum(["low", "medium", "high", "systemic"]),
  status: z.enum(["draft", "proposed", "reviewed", "validated", "deprecated"]),
  confidence: z.enum(["low", "medium", "high"]),
  assumptions: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
  version: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional()
});

export const BusinessCapabilitySchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  aliases: z.array(z.string()),
  description: z.string(),
  purpose: z.string(),
  outcomeStatement: z.string(),
  semanticBoundary: z.string(),
  level: z.enum(["L1", "L2", "L3"]),
  parentCapabilityId: z.string().optional(),
  childCapabilityIds: z.array(z.string()),
  capabilityDomainId: z.string(),
  capabilityType: CapabilityTypeSchema,
  valueContribution: z.enum(["foundational", "mandatory", "differentiating", "supporting"]),
  serviceDomainMappingIds: z.array(z.string()),
  participantMappingIds: z.array(z.string()),
  businessObjectIds: z.array(z.string()),
  informationDomainIds: z.array(z.string()),
  controlRecordIds: z.array(z.string()),
  businessScenarioIds: z.array(z.string()),
  overviewDiagramIds: z.array(z.string()),
  regulatoryMappingIds: z.array(z.string()),
  controlIds: z.array(z.string()),
  evidenceIds: z.array(z.string()),
  kpiIds: z.array(z.string()),
  applicableRegimeIds: z.array(z.string()),
  criticality: z.enum(["low", "medium", "high", "systemic"]),
  assessmentIds: z.array(z.string()),
  status: z.enum(["draft", "proposed", "reviewed", "validated", "deprecated"]),
  confidence: z.enum(["low", "medium", "high"]),
  replacementCapabilityId: z.string().optional(),
  deprecationReason: z.string().optional(),
  assumptions: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
  version: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional()
});

export const CapabilityRelationTypeSchema = z.enum([
  "parent-of",
  "depends-on",
  "enables",
  "supports",
  "governs",
  "shares-information-with",
  "precedes-in-value-stream"
]);

export const CapabilityRelationSchema = z.object({
  id: z.string(),
  sourceCapabilityId: z.string(),
  targetCapabilityId: z.string(),
  relationType: CapabilityRelationTypeSchema,
  description: z.string(),
  businessObjectIds: z.array(z.string()),
  valueStreamIds: z.array(z.string()),
  regulatoryMappingIds: z.array(z.string()),
  status: z.enum(["proposed", "reviewed", "validated"])
});

export const CapabilityRealizationTypeSchema = z.enum([
  "primary-realization",
  "supporting-realization",
  "governance",
  "enabling",
  "information-provider",
  "control-provider"
]);

export const CapabilityServiceDomainMappingSchema = z.object({
  id: z.string(),
  capabilityId: z.string(),
  serviceDomainId: z.string(),
  realizationType: CapabilityRealizationTypeSchema,
  serviceOperationIds: z.array(z.string()),
  businessEventIds: z.array(z.string()),
  businessObjectIds: z.array(z.string()),
  description: z.string(),
  coverage: z.enum(["full", "partial", "candidate", "gap"]),
  confidence: z.enum(["low", "medium", "high"]),
  status: z.enum(["proposed", "reviewed", "validated"])
});

export const CapabilityParticipantMappingSchema = z.object({
  id: z.string(),
  capabilityId: z.string(),
  participantId: z.string(),
  role: z.enum([
    "accountable",
    "responsible",
    "participant",
    "beneficiary",
    "supervisor",
    "information-provider",
    "service-provider"
  ]),
  applicability: z.enum(["direct", "indirect", "conditional"]),
  applicableRegimeIds: z.array(z.string()),
  description: z.string(),
  status: z.enum(["proposed", "reviewed", "validated"])
});

export const CapabilityMaturityLevelSchema = z.enum([
  "not-assessed",
  "initial",
  "defined",
  "managed",
  "measured",
  "optimized"
]);

export const CapabilityAssessmentSchema = z.object({
  id: z.string(),
  capabilityId: z.string(),
  assessmentScope: z.enum(["industry-reference", "participant-archetype", "organization-private"]),
  participantId: z.string().optional(),
  organizationReference: z.string().optional(),
  currentMaturity: CapabilityMaturityLevelSchema,
  targetMaturity: CapabilityMaturityLevelSchema.optional(),
  strategicImportance: z.enum(["not-assessed", "low", "medium", "high", "critical"]),
  performance: z.enum(["not-assessed", "below-expectation", "meets-expectation", "above-expectation"]),
  health: z.enum(["not-assessed", "healthy", "attention", "at-risk", "critical"]),
  investmentPriority: z.enum(["not-assessed", "maintain", "improve", "transform", "retire"]),
  evidenceIds: z.array(z.string()),
  kpiIds: z.array(z.string()),
  rationale: z.string(),
  limitations: z.array(z.string()),
  confidence: z.enum(["low", "medium", "high"]),
  assessmentStatus: z.enum(["draft", "proposed", "reviewed", "approved"]),
  assessedBy: z.string().optional(),
  assessedAt: z.string().optional()
});

export const CapabilityScenarioMappingSchema = z.object({
  id: z.string(),
  capabilityId: z.string(),
  businessScenarioId: z.string(),
  mappingType: z.enum(["exercises", "initiates", "supports", "validates", "completes"]),
  scenarioStepIds: z.array(z.string()),
  status: z.enum(["proposed", "reviewed", "validated"])
});

export const CapabilityGapSchema = z.object({
  id: z.string(),
  gapType: z.enum([
    "missing-capability",
    "missing-service-domain",
    "unmapped-service-domain",
    "capability-without-realization",
    "overlapping-capability",
    "duplicate-capability",
    "ambiguous-boundary",
    "missing-owner",
    "missing-regulatory-mapping",
    "missing-assessment",
    "missing-scenario",
    "missing-business-object"
  ]),
  capabilityId: z.string().optional(),
  serviceDomainId: z.string().optional(),
  title: z.string(),
  description: z.string(),
  severity: z.enum(["P0", "P1", "P2", "P3"]),
  recommendation: z.string(),
  status: z.enum(["open", "accepted", "resolved", "dismissed"])
});
