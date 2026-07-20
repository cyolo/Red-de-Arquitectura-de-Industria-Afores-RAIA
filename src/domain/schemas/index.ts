import { z } from "zod";

export const LifecycleStatusSchema = z.enum([
  "draft",
  "proposed",
  "validated",
  "active",
  "deprecated",
]);

export const BusinessAreaSchema = z.object({
  id: z.string().regex(/^RAIA-BA-\d{3}$/),
  slug: z.string(),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  shortName: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  colorToken: z.string(),
  order: z.number(),
  layoutZone: z.string(),
  version: z.string(),
  status: LifecycleStatusSchema,
  ownerRole: z.string().optional(),
  businessDomainIds: z.array(z.string()),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional(),
});

export const BusinessDomainSchema = z.object({
  id: z.string().regex(/^RAIA-BD-\d{3}$/),
  slug: z.string(),
  businessAreaId: z.string().regex(/^RAIA-BA-\d{3}$/),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  order: z.number(),
  serviceDomainIds: z.array(z.string()),
  actors: z.array(z.string()),
  valueStreams: z.array(z.string()),
  tags: z.array(z.string()),
  version: z.string(),
  status: LifecycleStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional(),
});

export const ServiceOperationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  operationType: z.enum([
    "initiate",
    "register",
    "update",
    "retrieve",
    "validate",
    "execute",
    "control",
    "notify",
    "reconcile",
    "report",
  ]),
});

export const BusinessEventSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  direction: z.enum(["produces", "consumes", "both"]),
});

export const BusinessObjectReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(["focus", "input", "output", "reference"]),
});

export const RegulationReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
  authority: z.string(),
  articleOrSection: z.string().optional(),
  url: z.string().optional(),
  mandatory: z.boolean(),
  validationStatus: z.enum([
    "official",
    "pending-validation",
    "internal-reference",
  ]),
});

export const ArchitectureControlSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  controlType: z.enum(["preventive", "detective", "corrective", "evidence"]),
});

export const NonFunctionalRequirementSchema = z.object({
  category: z.string(),
  statement: z.string(),
  target: z.string().optional(),
});

export const KPISchema = z.object({
  name: z.string(),
  description: z.string(),
  formula: z.string().optional(),
  frequency: z.string().optional(),
});

export const LandscapeLayerSchema = z.enum([
  "sector-governance",
  "industry-value-stream",
  "industry-shared-service",
  "enterprise-enabler",
  "raia-governance-overlay",
]);

export const ServiceDomainSchema = z.object({
  id: z.string().regex(/^RAIA-SD-\d{3}$/),
  slug: z.string(),
  businessAreaId: z.string().regex(/^RAIA-BA-\d{3}$/),
  businessDomainId: z.string().regex(/^RAIA-BD-\d{3}$/),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  summary: z.string(),
  definition: z.string(),
  purpose: z.string(),
  focusObject: z.object({
    name: z.string(),
    description: z.string(),
  }),
  capabilities: z.array(z.string()),
  serviceOperations: z.array(ServiceOperationSchema),
  businessEvents: z.array(BusinessEventSchema),
  businessObjects: z.array(BusinessObjectReferenceSchema),
  accountableActors: z.array(z.string()),
  participatingActors: z.array(z.string()),
  regulations: z.array(RegulationReferenceSchema),
  controls: z.array(ArchitectureControlSchema),
  evidences: z.array(z.string()),
  nfrs: z.array(NonFunctionalRequirementSchema),
  kpis: z.array(KPISchema),
  relatedServiceDomainIds: z.array(z.string()),
  upstreamServiceDomainIds: z.array(z.string()).optional(),
  downstreamServiceDomainIds: z.array(z.string()).optional(),
  valueStreams: z.array(z.string()),
  lifecycleStage: z.string().optional(),
  sourceAuthority: z.string().optional(),
  ownerRole: z.string().optional(),
  stewardRole: z.string().optional(),
  maturity: z.enum(["conceptual", "defined", "validated", "adopted"]).optional(),
  version: z.string(),
  status: LifecycleStatusSchema,
  
  // Extended regulatory fields
  landscapeLayer: LandscapeLayerSchema.optional(),
  responsibilityStatement: z.string().optional(),
  responsibilityBoundary: z.string().optional(),
  participantIds: z.array(z.string()).optional(),
  accountableParticipantIds: z.array(z.string()).optional(),
  regulatoryMappingIds: z.array(z.string()).optional(),
  regulatoryCoverage: z.enum(["unmapped", "partial", "mapped", "reviewed"]).optional(),
  applicableRegimeIds: z.array(z.string()).optional(),
  regulatoryCriticality: z.enum(["none", "low", "medium", "high", "systemic"]).optional(),
  capabilityType: z.enum(["regulated-core", "industry-shared", "enterprise-enabler", "raia-governance"]).optional(),
  assumptions: z.array(z.string()).optional(),
  unresolvedQuestions: z.array(z.string()).optional(),
  operationalValidationStatus: z.enum(["pending", "reviewed", "validated"]).optional(),
  regulatoryValidationStatus: z.enum(["pending", "partially-reviewed", "legally-reviewed"]).optional(),
  lastRegulatoryReviewAt: z.string().optional(),

  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional(),
});

export const LandscapeRelationSchema = z.object({
  id: z.string(),
  sourceId: z.string(),
  targetId: z.string(),
  type: z.enum([
    "depends-on",
    "provides-to",
    "validates",
    "orchestrates",
    "reports-to",
    "transfers-to",
    "shares-data-with",
    "triggers",
  ]),
  label: z.string().optional(),
  description: z.string().optional(),
  bidirectional: z.boolean().optional(),
});

export const BusinessScenarioStepSchema = z.object({
  stepNumber: z.number(),
  sourceId: z.string(),
  targetId: z.string(),
  description: z.string(),
  eventName: z.string().optional(),
});

export const BusinessScenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  steps: z.array(BusinessScenarioStepSchema),
});

export const LandscapeDataSchema = z.object({
  businessAreas: z.array(BusinessAreaSchema),
  businessDomains: z.array(BusinessDomainSchema),
  serviceDomains: z.array(ServiceDomainSchema),
});

export const PortalModuleStatusSchema = z.enum([
  "available",
  "in-development",
  "planned",
  "deprecated",
]);

export const PortalModuleSchema = z.object({
  id: z.string().regex(/^RAIA-MOD-\d{3}$/),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  route: z.string(),
  category: z.enum([
    "reference-architecture",
    "service-landscape",
    "business-scenarios",
    "capabilities",
    "regulation",
    "governance",
  ]),
  status: PortalModuleStatusSchema,
  icon: z.string(),
  order: z.number(),
  version: z.string().optional(),
  artifactType: z.string().optional(),
  countSource: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  ownerRole: z.string().optional(),
  validationStatus: z.string().optional(),
  roadmap: z.array(z.object({
    title: z.string(),
    status: z.enum(["not-started", "in-progress", "completed", "blocked"]),
    targetDate: z.string().optional(),
    evidence: z.string().optional(),
  })).optional(),
  lastReviewedAt: z.string().optional(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const PortalReleaseSchema = z.object({
  version: z.string(),
  name: z.string(),
  releaseDate: z.string(),
  status: z.enum(["draft", "published", "deprecated"]),
  regulatoryBaselineDate: z.string(),
  bianReferenceBaseline: z.string().optional(),
  summary: z.string(),
  added: z.array(z.string()),
  changed: z.array(z.string()),
  deprecated: z.array(z.string()),
  removed: z.array(z.string()),
  breakingChanges: z.array(z.string()),
});

export const ArchitectureArtifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.enum([
    "view",
    "model",
    "catalog",
    "diagram",
    "scenario",
    "reference",
    "report",
  ]),
  route: z.string(),
  status: z.enum(["draft", "proposed", "validated", "active", "deprecated"]),
  version: z.string(),
  ownerRole: z.string().optional(),
  sourceIds: z.array(z.string()),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export * from "./regulatorySchemas";
export * from "./participantSchemas";

