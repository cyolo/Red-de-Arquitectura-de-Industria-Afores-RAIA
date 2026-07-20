import { z } from "zod";

export const SlugSchema = z.string()
  .min(1)
  .max(100)
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug must contain only lowercase alphanumeric characters and single hyphens, and cannot start or end with a hyphen");

export const InternalRouteSchema = z.string()
  .min(1)
  .max(100)
  .refine(
    (val) => {
      if (val.includes(":") || val.includes("..") || val.includes("\\") || val.includes("//") || val.includes("%")) {
        return false;
      }
      return val.startsWith("/") && !val.startsWith("//");
    },
    { message: "Route must start with / and not contain protocols, external hosts, traversal, or backslashes" }
  );

export function assertInternalRoute(route: string): string {
  const result = InternalRouteSchema.safeParse(route);
  if (!result.success) {
    console.error("Blocked insecure route navigation:", route, result.error.issues);
    return "/";
  }
  return route;
}

export const QueryParamsSchema = z.object({
  area: z.string().max(20).regex(/^RAIA-BA-\d{3}$/).optional().or(z.literal("")),
  domain: z.string().max(20).regex(/^RAIA-BD-\d{3}$/).optional().or(z.literal("")),
  selected: z.string().max(20).regex(/^RAIA-SD-\d{3}$/).optional().or(z.literal("")),
  actor: z.string().max(50).regex(/^[a-zA-Z0-9\-\s]*$/).optional().or(z.literal("")),
  status: z.enum(["draft", "proposed", "validated", "active", "deprecated"]).optional().or(z.literal("")),
  maturity: z.enum(["conceptual", "defined", "validated", "adopted"]).optional().or(z.literal("")),
  layer: z.enum(["sector-governance", "industry-value-stream", "industry-shared-service", "enterprise-enabler"]).optional().or(z.literal("")),
  coverage: z.enum(["reviewed", "partial", "unmapped", "not-applicable"]).optional().or(z.literal("")),
  criticality: z.enum(["low", "medium", "high", "systemic"]).optional().or(z.literal("")),
  regime: z.string().max(20).regex(/^[a-zA-Z0-9\-\s]*$/).optional().or(z.literal("")),
  search: z.string().max(100).regex(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\-\s]*$/).optional().or(z.literal("")),
  view: z.enum(["explorer", "overview", "matrix", "cobertura"]).optional().or(z.literal("")),
});

export const LifecycleStatusSchema = z.enum([
  "draft",
  "proposed",
  "validated",
  "active",
  "deprecated",
]);

export const BusinessAreaSchema = z.object({
  id: z.string().regex(/^RAIA-BA-\d{3}$/),
  slug: SlugSchema,
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
  slug: SlugSchema,
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
  slug: SlugSchema,
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
  regulatoryCoverage: z.enum(["unmapped", "partial", "mapped", "reviewed", "not-applicable"]).optional(),
  applicableRegimeIds: z.array(z.string()).optional(),
  regulatoryCriticality: z.enum(["none", "low", "medium", "high", "systemic"]).optional(),
  capabilityType: z.enum(["regulated-core", "industry-shared", "enterprise-enabler", "raia-governance"]).optional(),
  assumptions: z.array(z.string()).optional(),
  unresolvedQuestions: z.array(z.string()).optional(),
  operationalValidationStatus: z.enum(["pending", "reviewed", "validated"]).optional(),
  regulatoryValidationStatus: z.enum(["pending", "partially-reviewed", "legally-reviewed", "architecture-reviewed"]).optional(),
  lastRegulatoryReviewAt: z.string().optional(),
  regulatoryNonApplicabilityReason: z.string().optional(),

  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional(),
}).superRefine((val, ctx) => {
  const capabilityType = val.capabilityType;
  if (capabilityType === "regulated-core") {
    if (!val.landscapeLayer) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "landscapeLayer is required for regulated-core domains", path: ["landscapeLayer"] });
    }
    if (!val.responsibilityStatement) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "responsibilityStatement is required for regulated-core domains", path: ["responsibilityStatement"] });
    }
    if (!val.responsibilityBoundary) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "responsibilityBoundary is required for regulated-core domains", path: ["responsibilityBoundary"] });
    }
    if (!val.participantIds || val.participantIds.length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "participantIds is required and cannot be empty for regulated-core domains", path: ["participantIds"] });
    }
    if (!val.accountableParticipantIds || val.accountableParticipantIds.length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "accountableParticipantIds is required and cannot be empty for regulated-core domains", path: ["accountableParticipantIds"] });
    }
    if (!val.regulatoryCoverage) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "regulatoryCoverage is required for regulated-core domains", path: ["regulatoryCoverage"] });
    }
    if (!val.applicableRegimeIds || val.applicableRegimeIds.length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "applicableRegimeIds is required and cannot be empty for regulated-core domains", path: ["applicableRegimeIds"] });
    }
    if (!val.regulatoryCriticality) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "regulatoryCriticality is required for regulated-core domains", path: ["regulatoryCriticality"] });
    }
    if (!val.operationalValidationStatus) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "operationalValidationStatus is required for regulated-core domains", path: ["operationalValidationStatus"] });
    }
    if (!val.regulatoryValidationStatus) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "regulatoryValidationStatus is required for regulated-core domains", path: ["regulatoryValidationStatus"] });
    }
  } else if (capabilityType === "industry-shared") {
    if (!val.landscapeLayer) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "landscapeLayer is required for industry-shared domains", path: ["landscapeLayer"] });
    }
    if (!val.participantIds || val.participantIds.length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "participantIds is required and cannot be empty for industry-shared domains", path: ["participantIds"] });
    }
    if (!val.responsibilityBoundary) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "responsibilityBoundary is required for industry-shared domains", path: ["responsibilityBoundary"] });
    }
    if (!val.operationalValidationStatus) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "operationalValidationStatus is required for industry-shared domains", path: ["operationalValidationStatus"] });
    }
  } else if (capabilityType === "enterprise-enabler") {
    if (val.regulatoryCoverage === "not-applicable") {
      if (!val.regulatoryNonApplicabilityReason || val.regulatoryNonApplicabilityReason.trim() === "") {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "regulatoryNonApplicabilityReason is required when coverage is not-applicable", path: ["regulatoryNonApplicabilityReason"] });
      }
    }
  }
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
  label: z.string().min(1, "Relation label cannot be empty"),
  description: z.string().min(1, "Relation description cannot be empty"),
  bidirectional: z.boolean().optional(),
  businessObjectIds: z.array(z.string()).optional(),
  serviceOperationIds: z.array(z.string()).optional(),
  businessEventIds: z.array(z.string()).optional(),
  regulatoryMappingIds: z.array(z.string()).optional(),
  validationStatus: z.enum(["pending", "reviewed"]).optional(),
  assumptions: z.array(z.string()).optional(),
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
  slug: SlugSchema,
  name: z.string(),
  shortName: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  route: InternalRouteSchema,
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
  route: InternalRouteSchema,
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
export * from "./capabilitySchemas";

