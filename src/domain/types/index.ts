export type LifecycleStatus =
  | "draft"
  | "proposed"
  | "validated"
  | "active"
  | "deprecated";

export interface BusinessArea {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  shortName?: string;
  description: string;
  purpose: string;
  colorToken: string;
  order: number;
  layoutZone: string;
  version: string;
  status: LifecycleStatus;
  ownerRole?: string;
  businessDomainIds: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface BusinessDomain {
  id: string;
  slug: string;
  businessAreaId: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  order: number;
  serviceDomainIds: string[];
  actors: string[];
  valueStreams: string[];
  tags: string[];
  version: string;
  status: LifecycleStatus;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface ServiceOperation {
  id: string;
  name: string;
  description: string;
  operationType:
    | "initiate"
    | "register"
    | "update"
    | "retrieve"
    | "validate"
    | "execute"
    | "control"
    | "notify"
    | "reconcile"
    | "report";
}

export interface BusinessEvent {
  id: string;
  name: string;
  description: string;
  direction: "produces" | "consumes" | "both";
}

export interface BusinessObjectReference {
  id: string;
  name: string;
  role: "focus" | "input" | "output" | "reference";
}

export interface RegulationReference {
  id: string;
  name: string;
  authority: string;
  articleOrSection?: string;
  url?: string;
  mandatory: boolean;
  validationStatus:
    | "official"
    | "pending-validation"
    | "internal-reference";
}

export interface ArchitectureControl {
  id: string;
  name: string;
  description: string;
  controlType:
    | "preventive"
    | "detective"
    | "corrective"
    | "evidence";
}

export interface NonFunctionalRequirement {
  category: string;
  statement: string;
  target?: string;
}

export interface KPI {
  name: string;
  description: string;
  formula?: string;
  frequency?: string;
}

export type LandscapeLayer =
  | "sector-governance"
  | "industry-value-stream"
  | "industry-shared-service"
  | "enterprise-enabler"
  | "raia-governance-overlay";

export interface ServiceDomain {
  id: string;
  slug: string;
  businessAreaId: string;
  businessDomainId: string;

  nameEs: string;
  nameEn?: string;
  aliases?: string[];

  summary: string;
  definition: string;
  purpose: string;

  focusObject: {
    name: string;
    description: string;
  };

  capabilities: string[];
  serviceOperations: ServiceOperation[];
  businessEvents: BusinessEvent[];
  businessObjects: BusinessObjectReference[];

  accountableActors: string[];
  participatingActors: string[];

  regulations: RegulationReference[];
  controls: ArchitectureControl[];
  evidences: string[];

  nfrs: NonFunctionalRequirement[];
  kpis: KPI[];

  relatedServiceDomainIds: string[];
  upstreamServiceDomainIds?: string[];
  downstreamServiceDomainIds?: string[];

  valueStreams: string[];
  lifecycleStage?: string;

  sourceAuthority?: string;
  ownerRole?: string;
  stewardRole?: string;

  maturity?: "conceptual" | "defined" | "validated" | "adopted";
  version: string;
  status: LifecycleStatus;

  // Extended regulatory fields
  landscapeLayer?: LandscapeLayer;
  responsibilityStatement?: string;
  responsibilityBoundary?: string;
  participantIds?: string[];
  accountableParticipantIds?: string[];
  regulatoryMappingIds?: string[];
  regulatoryCoverage?: "unmapped" | "partial" | "mapped" | "reviewed";
  applicableRegimeIds?: string[];
  regulatoryCriticality?: "none" | "low" | "medium" | "high" | "systemic";
  capabilityType?: "regulated-core" | "industry-shared" | "enterprise-enabler" | "raia-governance";
  assumptions?: string[];
  unresolvedQuestions?: string[];
  operationalValidationStatus?: "pending" | "reviewed" | "validated";
  regulatoryValidationStatus?: "pending" | "partially-reviewed" | "legally-reviewed";
  lastRegulatoryReviewAt?: string;

  tags: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface LandscapeRelation {
  id: string;
  sourceId: string;
  targetId: string;
  type:
    | "depends-on"
    | "provides-to"
    | "validates"
    | "orchestrates"
    | "reports-to"
    | "transfers-to"
    | "shares-data-with"
    | "triggers";
  label?: string;
  description?: string;
  bidirectional?: boolean;
}

export interface BusinessScenarioStep {
  stepNumber: number;
  sourceId: string;
  targetId: string;
  description: string;
  eventName?: string;
}

export interface BusinessScenario {
  id: string;
  name: string;
  description: string;
  steps: BusinessScenarioStep[];
}

export type PortalModuleStatus =
  | "available"
  | "in-development"
  | "planned"
  | "deprecated";

export interface PortalModule {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  purpose: string;
  route: string;
  category:
    | "reference-architecture"
    | "service-landscape"
    | "business-scenarios"
    | "capabilities"
    | "regulation"
    | "governance";
  status: PortalModuleStatus;
  icon: string;
  order: number;
  version?: string;
  artifactType?: string;
  countSource?: string;
  dependencies?: string[];
  ownerRole?: string;
  validationStatus?: string;
  roadmap?: {
    title: string;
    status: "not-started" | "in-progress" | "completed" | "blocked";
    targetDate?: string;
    evidence?: string;
  }[];
  lastReviewedAt?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PortalRelease {
  version: string;
  name: string;
  releaseDate: string;
  status: "draft" | "published" | "deprecated";
  regulatoryBaselineDate: string;
  bianReferenceBaseline?: string;
  summary: string;
  added: string[];
  changed: string[];
  deprecated: string[];
  removed: string[];
  breakingChanges: string[];
}

export interface ArchitectureArtifact {
  id: string;
  name: string;
  description: string;
  type:
    | "view"
    | "model"
    | "catalog"
    | "diagram"
    | "scenario"
    | "reference"
    | "report";
  route: string;
  status: "draft" | "proposed" | "validated" | "active" | "deprecated";
  version: string;
  ownerRole?: string;
  sourceIds: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export * from "./regulatoryTypes";
export * from "./participantTypes";

