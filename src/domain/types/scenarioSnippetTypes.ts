export type ScenarioSnippetCategory =
  | "identity"
  | "authentication"
  | "consent"
  | "signature"
  | "account-location"
  | "eligibility"
  | "validation"
  | "decision"
  | "evidence"
  | "notification"
  | "reconciliation"
  | "exception"
  | "manual-review"
  | "financial-confirmation"
  | "industry-query";

export interface ScenarioSnippet {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  category: ScenarioSnippetCategory;
  preconditions: string[];
  postconditions: string[];
  inputBusinessObjectSlotIds: string[];
  outputBusinessObjectSlotIds: string[];
  participantRoleIds: string[];
  serviceDomainSlotIds: string[];
  stepIds: string[];
  decisionIds: string[];
  exceptionIds: string[];
  controlSlotIds: string[];
  evidenceSlotIds: string[];
  regulatoryMappingIds: string[];
  variantIds: string[];
  applicableRegimeIds: string[];
  applicableScenarioTypeIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  validationStatus:
    | "pending-industry-review"
    | "architecture-reviewed"
    | "operationally-reviewed"
    | "legally-reviewed";
  confidence: "low" | "medium" | "high";
  compatibility: "backward-compatible" | "conditionally-compatible" | "breaking";
  version: string;
  replacementSnippetId?: string;
  deprecationReason?: string;
  assumptions: string[];
  unresolvedQuestions: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export interface ScenarioSnippetParticipantRole {
  id: string;
  snippetId: string;
  roleName: string;
  description: string;
  roleType:
    | "requester"
    | "provider"
    | "authority"
    | "validator"
    | "decision-maker"
    | "information-source"
    | "evidence-recorder"
    | "notified-party";
  allowedParticipantTypeIds: string[];
  required: boolean;
  minimumBindings: number;
  maximumBindings: number | "many";
}

export interface ScenarioSnippetServiceDomainSlot {
  id: string;
  snippetId: string;
  slotName: string;
  description: string;
  responsibilityRole:
    | "initiator"
    | "coordinator"
    | "validator"
    | "executor"
    | "decision-owner"
    | "evidence-owner"
    | "notifier";
  requiredCapabilityTypes: string[];
  requiredOperationTypes: string[];
  required: boolean;
  minimumBindings: number;
  maximumBindings: number | "many";
}

export interface ScenarioSnippetBusinessObjectSlot {
  id: string;
  snippetId: string;
  slotName: string;
  description: string;
  usageRole:
    | "input"
    | "output"
    | "reference"
    | "created"
    | "updated"
    | "validated"
    | "evidence";
  allowedBusinessObjectTypeIds: string[];
  required: boolean;
  minimumBindings: number;
  maximumBindings: number | "many";
}

export type ScenarioSnippetStepType =
  | "command"
  | "query"
  | "response"
  | "business-event"
  | "decision"
  | "notification"
  | "manual-action"
  | "timer"
  | "evidence-recording";

export interface ScenarioSnippetStep {
  id: string;
  snippetId: string;
  order: number;
  name: string;
  description: string;
  stepType: ScenarioSnippetStepType;
  sourceRoleId: string;
  targetRoleId: string;
  sourceServiceDomainSlotId?: string;
  targetServiceDomainSlotId?: string;
  serviceOperationSlotId?: string;
  businessEventSlotIds: string[];
  inputBusinessObjectSlotIds: string[];
  outputBusinessObjectSlotIds: string[];
  controlSlotIds: string[];
  evidenceSlotIds: string[];
  preconditions: string[];
  postconditions: string[];
  decisionId?: string;
  exceptionIds: string[];
  optional: boolean;
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface ScenarioSnippetDecision {
  id: string;
  snippetId: string;
  name: string;
  description: string;
  evaluatedBusinessObjectSlotIds: string[];
  branchIds: string[];
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface ScenarioSnippetVariant {
  id: string;
  snippetId: string;
  name: string;
  description: string;
  applicableRegimeIds: string[];
  applicableParticipantTypeIds: string[];
  includedStepIds: string[];
  excludedStepIds: string[];
  additionalPreconditions: string[];
  additionalPostconditions: string[];
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface ScenarioSnippetException {
  id: string;
  snippetId: string;
  name: string;
  description: string;
  triggeredAtStepIds: string[];
  exceptionType:
    | "business-rule"
    | "identity-conflict"
    | "missing-information"
    | "ineligible"
    | "external-unavailable"
    | "manual-review-required"
    | "reconciliation-difference"
    | "authorization-failure";
  resultingEventSlotIds: string[];
  recoveryStepIds: string[];
  controlSlotIds: string[];
  evidenceSlotIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface ScenarioSnippetInvocation {
  id: string;
  businessScenarioId: string;
  snippetId: string;
  snippetVersion: string;
  variantId?: string;
  order: number;
  participantBindings: Array<{
    roleId: string;
    participantIds: string[];
  }>;
  serviceDomainBindings: Array<{
    slotId: string;
    serviceDomainIds: string[];
  }>;
  businessObjectBindings: Array<{
    slotId: string;
    businessObjectIds: string[];
  }>;
  controlBindings: Array<{
    slotId: string;
    controlIds: string[];
  }>;
  evidenceBindings: Array<{
    slotId: string;
    evidenceIds: string[];
  }>;
  parameterValues: Record<string, string | number | boolean>;
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface InlineScenarioStep {
  itemType: "inline-step";
  id: string;
  order: number;
  messageId: string;
}

export interface ScenarioSnippetInvocationItem {
  itemType: "snippet-invocation";
  id: string;
  order: number;
  invocationId: string;
}

export type ScenarioSequenceItem = InlineScenarioStep | ScenarioSnippetInvocationItem;

export interface ResolvedScenarioStep {
  id: string;
  scenarioId: string;
  sequence: number;
  name: string;
  description: string;
  sourceParticipantId: string;
  targetParticipantId: string;
  sourceServiceDomainId?: string;
  targetServiceDomainId?: string;
  inputBusinessObjectIds: string[];
  outputBusinessObjectIds: string[];
  serviceOperationId?: string;
  businessEventIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  origin: "inline" | "snippet";
  snippetInvocationId?: string;
  snippetId?: string;
  snippetVersion?: string;
  snippetStepId?: string;
}

export interface ScenarioSnippetVersion {
  snippetId: string;
  version: string;
  changeType: "patch" | "minor" | "major";
  changeSummary: string[];
  breakingChanges: string[];
  previousVersion?: string;
  releasedAt: string;
  status: "draft" | "published" | "deprecated";
}

export interface SnippetCompatibilityResult {
  compatible: boolean;
  level: "compatible" | "warning" | "breaking";
  issues: Array<{
    code: string;
    description: string;
    impactedInvocationIds: string[];
  }>;
}

export interface SnippetCandidate {
  id: string;
  scenarioIds: string[];
  stepRanges: Array<{
    scenarioId: string;
    startSequence: number;
    endSequence: number;
  }>;
  normalizedSemanticSignature: string;
  similarityScore: number;
  participantCompatibility: number;
  serviceDomainCompatibility: number;
  businessObjectCompatibility: number;
  controlCompatibility: number;
  recommendation: "create-snippet" | "merge-with-existing" | "keep-inline" | "manual-review";
  rationale: string[];
}
