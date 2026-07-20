export type ScenarioParticipantType =
  | "actor"
  | "organization"
  | "organization-role"
  | "authority"
  | "social-security-institute"
  | "industry-service-provider"
  | "service-domain"
  | "market-infrastructure"
  | "external-party"
  | "custodian"
  | "insurer"
  | "governance-body"
  | "public-trust"
  | "fiduciary-role"
  | "information-asset";

export interface ScenarioParticipantInstance {
  instanceId: string;
  participantType: ScenarioParticipantType;
  label: string;
  shortLabel?: string;
  role?: string;
  
  actorId?: string;
  organizationId?: string;
  serviceDomainId?: string;
  externalReferenceId?: string;
  informationAssetId?: string;

  accountableFor: string[];
  managesBusinessObjectIds: string[];

  order: number;
}

export type ScenarioMessageType =
  | "command"
  | "query"
  | "response"
  | "business-event"
  | "notification"
  | "approval-request"
  | "approval-decision"
  | "rejection"
  | "file-transfer"
  | "fund-transfer-instruction"
  | "settlement-confirmation"
  | "manual-review"
  | "regulatory-report";

export interface ScenarioMessage {
  id: string;
  scenarioStepId: string;
  sequence: number;

  sourceParticipantInstanceId: string;
  targetParticipantInstanceId: string;

  label: string;
  description: string;
  businessMeaning: string;

  messageType: ScenarioMessageType;

  inputBusinessObjectIds: string[];
  outputBusinessObjectIds: string[];

  controlIds: string[];
  evidenceIds: string[];
  regulationTraceIds: string[];

  expectedOutcome: string;

  precedingMessageIds: string[];
  followingMessageIds: string[];
}

export interface ScenarioAlternativeBranch {
  id: string;
  condition: string;
  messageIds: string[];
  outcome: string;
  nextScenarioId?: string;
  terminatesScenario: boolean;
}

export interface BusinessScenario {
  id: string;
  slug: string;

  familyId: string;
  groupId: string;

  nameEs: string;
  nameEn?: string;
  aliases: string[];

  summary: string;
  purpose: string;
  businessOutcome: string;

  scenarioType:
    | "atomic"
    | "composite-overview";

  trigger: {
    id: string;
    name: string;
    description: string;
    type:
      | "request"
      | "business-event"
      | "scheduled-cycle"
      | "regulatory-cycle"
      | "exception"
      | "lifecycle-change";
  };

  primaryBusinessObjectId: string;
  businessObjectIds: string[];
  businessEventIds: string[];

  primaryActorId?: string;
  participatingActorIds: string[];

  regimeApplicability: Array<
    | "imss"
    | "issste"
    | "independent-worker"
    | "mixed-regime"
    | "all"
  >;

  preconditions: string[];
  postconditions: string[];

  sequenceId: string;
  narrativeId: string;
  regulatoryTraceId: string;

  relatedScenarioIds: string[];
  precedingScenarioIds: string[];
  followingScenarioIds: string[];

  serviceDomainIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  regulationIds: string[];

  criticality:
    | "low"
    | "medium"
    | "high"
    | "systemic";

  modelingStatus:
    | "cataloged"
    | "partially-modeled"
    | "modeled"
    | "reviewed"
    | "validated";

  operationalValidationStatus:
    | "pending"
    | "partially-validated"
    | "validated";

  regulatoryValidationStatus:
    | "pending"
    | "partially-validated"
    | "validated";

  status:
    | "draft"
    | "proposed"
    | "validated"
    | "active"
    | "deprecated";

  confidence:
    | "low"
    | "medium"
    | "high";

  version: string;

  assumptions: string[];
  unresolvedQuestions: string[];

  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface RegulatoryTrace {
  id: string;
  scenarioId: string;

  sourceType:
    | "law"
    | "regulation"
    | "general-provision"
    | "circular"
    | "operating-rule"
    | "official-guideline";

  sourceId: string;
  sourceName: string;
  authority: string;

  article?: string;
  section?: string;
  paragraph?: string;
  annex?: string;

  officialUrl: string;

  publicationDate?: string;
  lastReformDate?: string;
  consultedAt: string;

  interpretation: string;
  architecturalImplication: string;

  impactedParticipantIds: string[];
  impactedMessageIds: string[];
  impactedControlIds: string[];

  validationStatus:
    | "pending"
    | "verified"
    | "superseded";

  reviewedBy?: string;
  reviewedAt?: string;
}
