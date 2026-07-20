export type ControlRecordApplicability =
  | "primary-control-record"
  | "supporting-control-record"
  | "stateless-capability"
  | "reference-information"
  | "analytical-capability"
  | "not-applicable"
  | "pending-review";

export interface ControlRecordModel {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  serviceDomainId: string;
  applicability: ControlRecordApplicability;
  applicabilityRationale: string;
  responsibilityStatement: string;
  responsibilityBoundary: string;
  focalBusinessObjectId: string;
  supportingBusinessObjectIds: string[];
  initialStateId?: string;
  stateIds: string[];
  transitionIds: string[];
  serviceOperationIds: string[];
  businessEventIds: string[];
  participantIds: string[];
  businessScenarioIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  regulatoryMappingIds: string[];
  invariantIds: string[];
  lifecyclePolicyIds: string[];
  criticality: "low" | "medium" | "high" | "systemic";
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  modelingStatus: "identified" | "partially-modeled" | "modeled" | "reviewed" | "validated";
  operationalValidationStatus: "pending" | "reviewed" | "validated";
  regulatoryValidationStatus: "pending" | "partially-reviewed" | "legally-reviewed";
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
  createdAt: string;
  updatedAt: string;
}

export type ControlStateKind =
  | "initial"
  | "active"
  | "waiting"
  | "pending-decision"
  | "pending-external-action"
  | "suspended"
  | "exception"
  | "rejected"
  | "cancelled"
  | "completed"
  | "closed"
  | "terminal";

export interface ControlRecordState {
  id: string;
  controlRecordId: string;
  name: string;
  description: string;
  stateKind: ControlStateKind;
  entryCriteria: string[];
  exitCriteria: string[];
  invariantIds: string[];
  allowedOperationIds: string[];
  prohibitedOperationIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  isInitial: boolean;
  isTerminal: boolean;
  order?: number;
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
}

export type ControlTransitionType =
  | "command"
  | "business-event"
  | "automatic"
  | "timer"
  | "manual-decision"
  | "external-decision"
  | "compensating"
  | "reopen"
  | "cancel";

export interface ControlRecordTransition {
  id: string;
  controlRecordId: string;
  name: string;
  description: string;
  sourceStateId: string;
  targetStateId: string;
  transitionType: ControlTransitionType;
  triggerId: string;
  guardIds: string[];
  actionIds: string[];
  serviceOperationId?: string;
  resultingBusinessEventIds: string[];
  participantIds: string[];
  inputBusinessObjectIds: string[];
  outputBusinessObjectIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  regulatoryMappingIds: string[];
  failureTargetStateId?: string;
  compensationTransitionId?: string;
  idempotencyRequired: boolean;
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
}

export type ControlRecordTriggerType =
  | "command"
  | "business-event"
  | "timer"
  | "regulatory-deadline"
  | "manual-request"
  | "manual-decision"
  | "external-notification"
  | "data-condition";

export interface ControlRecordTrigger {
  id: string;
  name: string;
  description: string;
  triggerType: ControlRecordTriggerType;
  commandName?: string;
  businessEventId?: string;
  originatingParticipantIds: string[];
  originatingServiceDomainIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface ControlRecordGuard {
  id: string;
  name: string;
  description: string;
  expressionLanguage: "business-rule" | "decision-table" | "natural-language";
  ruleExpression: string;
  businessObjectIds: string[];
  attributeIds: string[];
  regulatoryMappingIds: string[];
  controlIds: string[];
  failureReason: string;
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface ControlRecordAction {
  id: string;
  name: string;
  description: string;
  actionType:
    | "create"
    | "validate"
    | "calculate"
    | "update"
    | "authorize"
    | "reject"
    | "notify"
    | "transfer"
    | "reconcile"
    | "record-evidence"
    | "archive"
    | "compensate";
  serviceOperationId?: string;
  inputBusinessObjectIds: string[];
  outputBusinessObjectIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface ControlRecordInvariant {
  id: string;
  controlRecordId: string;
  name: string;
  description: string;
  invariantType:
    | "identity"
    | "consistency"
    | "uniqueness"
    | "authorization"
    | "financial-balance"
    | "state-integrity"
    | "regulatory"
    | "temporal";
  appliesToStateIds: string[];
  businessObjectIds: string[];
  attributeIds: string[];
  regulatoryMappingIds: string[];
  controlIds: string[];
  severity: "low" | "medium" | "high" | "critical";
  status: "proposed" | "reviewed" | "validated";
}

export interface ControlRecordHistoryEntryDefinition {
  stateId: string;
  transitionId?: string;
  expectedEvidenceIds: string[];
  expectedBusinessEventIds: string[];
  requiredParticipantIds: string[];
  requiredControlIds: string[];
}

export interface ControlRecordScenarioTrace {
  id: string;
  controlRecordId: string;
  businessScenarioId?: string;
  traceName: string;
  description: string;
  steps: Array<{
    sequence: number;
    transitionId: string;
    expectedSourceStateId: string;
    expectedTargetStateId: string;
    businessScenarioMessageId?: string;
  }>;
  expectedFinalStateId: string;
  status: "proposed" | "reviewed" | "validated";
}

export interface ScenarioTransitionMapping {
  id: string;
  businessScenarioId: string;
  messageId: string;
  controlRecordId: string;
  transitionId: string;
  mappingType:
    | "initiates"
    | "advances"
    | "completes"
    | "rejects"
    | "cancels"
    | "compensates"
    | "reads-state";
  status: "proposed" | "reviewed" | "validated";
}

export interface ControlRecordGap {
  id: string;
  gapType:
    | "missing-control-record"
    | "missing-business-object"
    | "missing-state"
    | "missing-transition"
    | "missing-trigger"
    | "missing-guard"
    | "missing-operation"
    | "missing-event"
    | "missing-control"
    | "missing-evidence"
    | "scenario-mismatch"
    | "regulatory-gap";
  serviceDomainId?: string;
  controlRecordId?: string;
  stateId?: string;
  transitionId?: string;
  businessScenarioId?: string;
  title: string;
  description: string;
  severity: "P0" | "P1" | "P2" | "P3";
  recommendation: string;
  status: "open" | "accepted" | "resolved" | "dismissed";
}
