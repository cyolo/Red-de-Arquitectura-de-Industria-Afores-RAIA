export type BusinessObjectType =
  | "party"
  | "master"
  | "reference"
  | "transaction"
  | "case"
  | "request"
  | "decision"
  | "document"
  | "event"
  | "financial"
  | "position"
  | "instruction"
  | "report"
  | "evidence"
  | "analytical"
  | "abstract";

export interface CanonicalBusinessObject {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  shortName?: string;
  aliases: string[];
  definition: string;
  businessMeaning: string;
  purpose: string;
  objectType: BusinessObjectType;
  informationDomainId?: string;
  conceptIds: string[];
  abstract: boolean;
  specializationOfId?: string;
  specializationIds: string[];
  identifierAttributeIds: string[];
  attributeIds: string[];
  relationshipIds: string[];
  invariantIds: string[];
  producerServiceDomainIds: string[];
  authoritativeServiceDomainIds: string[];
  consumerServiceDomainIds: string[];
  validatingServiceDomainIds: string[];
  serviceOperationIds: string[];
  businessEventIds: string[];
  businessScenarioIds: string[];
  controlRecordIds: string[];
  accountableParticipantIds: string[];
  stewardRoleIds: string[];
  classificationIds: string[];
  qualityRuleIds: string[];
  lifecyclePolicyId?: string;
  retentionPolicyIds: string[];
  controlIds: string[];
  evidenceIds: string[];
  regulatoryMappingIds: string[];
  criticality: "low" | "medium" | "high" | "systemic";
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  confidence: "low" | "medium" | "high";
  replacementObjectId?: string;
  deprecationReason?: string;
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
  createdAt: string;
  updatedAt: string;
}

export type LogicalDataType =
  | "string"
  | "integer"
  | "decimal"
  | "boolean"
  | "date"
  | "datetime"
  | "identifier"
  | "code"
  | "amount"
  | "percentage"
  | "quantity"
  | "document"
  | "binary-reference"
  | "structured-object"
  | "collection";

export interface BusinessObjectAttribute {
  id: string;
  businessObjectId: string;
  nameEs: string;
  nameEn?: string;
  aliases: string[];
  definition: string;
  businessMeaning: string;
  logicalDataType: LogicalDataType;
  format?: string;
  unit?: string;
  codeListId?: string;
  referencedBusinessObjectId?: string;
  required: boolean;
  nullable: boolean;
  repeatable: boolean;
  minimumCardinality: number;
  maximumCardinality: number | "many";
  isIdentifier: boolean;
  isBusinessKey: boolean;
  isDerived: boolean;
  isSensitive: boolean;
  isImmutable: boolean;
  derivationRule?: string;
  defaultValue?: string;
  validationRuleIds: string[];
  classificationIds: string[];
  qualityRuleIds: string[];
  regulatoryMappingIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  version: string;
}

export interface BusinessObjectIdentifier {
  id: string;
  businessObjectId: string;
  name: string;
  description: string;
  identifierType:
    | "natural-key"
    | "surrogate-key"
    | "external-identifier"
    | "composite-key"
    | "correlation-id"
    | "folio";
  attributeIds: string[];
  authoritativeSourceId?: string;
  globallyUnique: boolean;
  immutable: boolean;
  scope: "industry" | "organization" | "service-domain" | "case";
  validationRuleIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export type BusinessObjectRelationshipType =
  | "association"
  | "composition"
  | "aggregation"
  | "specialization"
  | "reference"
  | "derived-from"
  | "evidenced-by"
  | "results-in"
  | "applies-to"
  | "contains"
  | "corresponds-to";

export interface BusinessObjectRelationship {
  id: string;
  sourceBusinessObjectId: string;
  targetBusinessObjectId: string;
  relationshipType: BusinessObjectRelationshipType;
  name: string;
  description: string;
  sourceRoleName?: string;
  targetRoleName?: string;
  sourceMinimumCardinality: number;
  sourceMaximumCardinality: number | "many";
  targetMinimumCardinality: number;
  targetMaximumCardinality: number | "many";
  bidirectional: boolean;
  lifecycleDependency: "independent" | "weak" | "strong" | "composition";
  regulatoryMappingIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
}

export interface BusinessObjectInvariant {
  id: string;
  businessObjectId: string;
  name: string;
  description: string;
  invariantType:
    | "identity"
    | "uniqueness"
    | "consistency"
    | "financial-balance"
    | "temporal"
    | "state"
    | "referential"
    | "regulatory";
  ruleExpression: string;
  attributeIds: string[];
  relatedBusinessObjectIds: string[];
  controlIds: string[];
  regulatoryMappingIds: string[];
  severity: "low" | "medium" | "high" | "critical";
  status: "proposed" | "reviewed" | "validated";
}

export interface BusinessCodeList {
  id: string;
  name: string;
  description: string;
  values: Array<{
    code: string;
    label: string;
    description?: string;
    effectiveFrom?: string;
    effectiveTo?: string;
    status: "active" | "deprecated";
  }>;
  authoritativeParticipantId?: string;
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export type BusinessObjectUsageRole =
  | "focus"
  | "input"
  | "output"
  | "reference"
  | "creates"
  | "updates"
  | "reads"
  | "validates"
  | "authoritative-source"
  | "publishes"
  | "reports";

export interface ServiceDomainBusinessObjectMapping {
  id: string;
  serviceDomainId: string;
  businessObjectId: string;
  usageRole: BusinessObjectUsageRole;
  serviceOperationIds: string[];
  businessEventIds: string[];
  description: string;
  status: "proposed" | "reviewed" | "validated";
}

export interface ScenarioBusinessObjectMapping {
  id: string;
  businessScenarioId: string;
  messageId?: string;
  scenarioStepId?: string;
  businessObjectId: string;
  usageRole:
    | "input"
    | "output"
    | "reference"
    | "created"
    | "updated"
    | "validated"
    | "reported"
    | "evidence";
  sourceServiceDomainId?: string;
  targetServiceDomainId?: string;
  status: "proposed" | "reviewed" | "validated";
}

export interface ControlRecordBusinessObjectMapping {
  id: string;
  controlRecordId: string;
  businessObjectId: string;
  role:
    | "focal"
    | "supporting"
    | "state-evidence"
    | "transition-input"
    | "transition-output";
  status: "proposed" | "reviewed" | "validated";
}

export interface BusinessObjectGap {
  id: string;
  gapType:
    | "missing-business-object"
    | "missing-attribute"
    | "missing-relationship"
    | "duplicate-object"
    | "alias-conflict"
    | "unmapped-object"
    | "regulatory-gap";
  businessObjectId?: string;
  title: string;
  description: string;
  severity: "P0" | "P1" | "P2" | "P3";
  recommendation: string;
  status: "open" | "accepted" | "resolved" | "dismissed";
}
