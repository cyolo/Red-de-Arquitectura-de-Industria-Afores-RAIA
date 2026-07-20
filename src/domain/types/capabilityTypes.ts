export type CapabilityLevel = "L0" | "L1" | "L2" | "L3";

export interface CapabilityDomain {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  semanticBoundary: string;
  level: "L0" | "L1";
  parentCapabilityDomainId?: string;
  childCapabilityDomainIds: string[];
  capabilityIds: string[];
  capabilityType:
    | "industry-core"
    | "industry-shared"
    | "regulatory-governance"
    | "enterprise-enabler"
    | "raia-governance";
  businessAreaIds: string[];
  valueStreamIds: string[];
  accountableParticipantIds: string[];
  regulatoryMappingIds: string[];
  criticality: "low" | "medium" | "high" | "systemic";
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  confidence: "low" | "medium" | "high";
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface BusinessCapability {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  aliases: string[];
  description: string;
  purpose: string;
  outcomeStatement: string;
  semanticBoundary: string;
  level: "L1" | "L2" | "L3";
  parentCapabilityId?: string;
  childCapabilityIds: string[];
  capabilityDomainId: string;
  capabilityType:
    | "industry-core"
    | "industry-shared"
    | "regulatory-governance"
    | "enterprise-enabler"
    | "raia-governance";
  valueContribution: "foundational" | "mandatory" | "differentiating" | "supporting";
  serviceDomainMappingIds: string[];
  participantMappingIds: string[];
  businessObjectIds: string[];
  informationDomainIds: string[];
  controlRecordIds: string[];
  businessScenarioIds: string[];
  overviewDiagramIds: string[];
  regulatoryMappingIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  kpiIds: string[];
  applicableRegimeIds: string[];
  criticality: "low" | "medium" | "high" | "systemic";
  assessmentIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  confidence: "low" | "medium" | "high";
  replacementCapabilityId?: string;
  deprecationReason?: string;
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export type CapabilityRelationType =
  | "parent-of"
  | "depends-on"
  | "enables"
  | "supports"
  | "governs"
  | "shares-information-with"
  | "precedes-in-value-stream";

export interface CapabilityRelation {
  id: string;
  sourceCapabilityId: string;
  targetCapabilityId: string;
  relationType: CapabilityRelationType;
  description: string;
  businessObjectIds: string[];
  valueStreamIds: string[];
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export type CapabilityRealizationType =
  | "primary-realization"
  | "supporting-realization"
  | "governance"
  | "enabling"
  | "information-provider"
  | "control-provider";

export interface CapabilityServiceDomainMapping {
  id: string;
  capabilityId: string;
  serviceDomainId: string;
  realizationType: CapabilityRealizationType;
  serviceOperationIds: string[];
  businessEventIds: string[];
  businessObjectIds: string[];
  description: string;
  coverage: "full" | "partial" | "candidate" | "gap";
  confidence: "low" | "medium" | "high";
  status: "proposed" | "reviewed" | "validated";
}

export interface CapabilityParticipantMapping {
  id: string;
  capabilityId: string;
  participantId: string;
  role:
    | "accountable"
    | "responsible"
    | "participant"
    | "beneficiary"
    | "supervisor"
    | "information-provider"
    | "service-provider";
  applicability: "direct" | "indirect" | "conditional";
  applicableRegimeIds: string[];
  description: string;
  status: "proposed" | "reviewed" | "validated";
}

export type CapabilityMaturityLevel =
  | "not-assessed"
  | "initial"
  | "defined"
  | "managed"
  | "measured"
  | "optimized";

export interface CapabilityAssessment {
  id: string;
  capabilityId: string;
  assessmentScope: "industry-reference" | "participant-archetype" | "organization-private";
  participantId?: string;
  organizationReference?: string;
  currentMaturity: CapabilityMaturityLevel;
  targetMaturity?: CapabilityMaturityLevel;
  strategicImportance: "not-assessed" | "low" | "medium" | "high" | "critical";
  performance: "not-assessed" | "below-expectation" | "meets-expectation" | "above-expectation";
  health: "not-assessed" | "healthy" | "attention" | "at-risk" | "critical";
  investmentPriority: "not-assessed" | "maintain" | "improve" | "transform" | "retire";
  evidenceIds: string[];
  kpiIds: string[];
  rationale: string;
  limitations: string[];
  confidence: "low" | "medium" | "high";
  assessmentStatus: "draft" | "proposed" | "reviewed" | "approved";
  assessedBy?: string;
  assessedAt?: string;
}

export interface CapabilityScenarioMapping {
  id: string;
  capabilityId: string;
  businessScenarioId: string;
  mappingType: "exercises" | "initiates" | "supports" | "validates" | "completes";
  scenarioStepIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface CapabilityGap {
  id: string;
  gapType:
    | "missing-capability"
    | "missing-service-domain"
    | "unmapped-service-domain"
    | "capability-without-realization"
    | "overlapping-capability"
    | "duplicate-capability"
    | "ambiguous-boundary"
    | "missing-owner"
    | "missing-regulatory-mapping"
    | "missing-assessment"
    | "missing-scenario"
    | "missing-business-object";
  capabilityId?: string;
  serviceDomainId?: string;
  title: string;
  description: string;
  severity: "P0" | "P1" | "P2" | "P3";
  recommendation: string;
  status: "open" | "accepted" | "resolved" | "dismissed";
}
