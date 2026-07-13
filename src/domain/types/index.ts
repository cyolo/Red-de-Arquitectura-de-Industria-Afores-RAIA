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
