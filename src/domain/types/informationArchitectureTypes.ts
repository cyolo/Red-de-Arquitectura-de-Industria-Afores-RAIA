export interface InformationDomain {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  semanticBoundary: string;
  parentDomainId?: string;
  childDomainIds: string[];
  informationConceptIds: string[];
  businessObjectIds: string[];
  informationAssetIds: string[];
  dataProductIds: string[];
  accountableParticipantIds: string[];
  ownerRoleIds: string[];
  stewardRoleIds: string[];
  custodianRoleIds: string[];
  serviceDomainIds: string[];
  businessScenarioIds: string[];
  regulatoryMappingIds: string[];
  controlIds: string[];
  criticality: "low" | "medium" | "high" | "systemic";
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface InformationConcept {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  aliases: string[];
  definition: string;
  businessMeaning: string;
  informationDomainId: string;
  broaderConceptId?: string;
  narrowerConceptIds: string[];
  relatedConceptIds: string[];
  businessObjectIds: string[];
  accountableParticipantIds: string[];
  stewardRoleIds: string[];
  regulatoryMappingIds: string[];
  semanticStatus: "candidate" | "canonical" | "synonym" | "deprecated";
  replacementConceptId?: string;
  deprecationReason?: string;
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface CanonicalBusinessObject {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  aliases: string[];
  description: string;
  businessMeaning: string;
  informationDomainId: string;
  conceptIds: string[];
  objectType:
    | "master"
    | "transaction"
    | "reference"
    | "event"
    | "document"
    | "control"
    | "evidence"
    | "analytical";
  identifierAttributeIds: string[];
  attributeIds: string[];
  parentObjectId?: string;
  childObjectIds: string[];
  relatedObjectIds: string[];
  producerServiceDomainIds: string[];
  consumerServiceDomainIds: string[];
  authoritativeServiceDomainIds: string[];
  businessScenarioIds: string[];
  businessEventIds: string[];
  classificationIds: string[];
  qualityRuleIds: string[];
  lifecyclePolicyId?: string;
  retentionPolicyIds: string[];
  regulatoryMappingIds: string[];
  controlIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface InformationAttribute {
  id: string;
  businessObjectId: string;
  nameEs: string;
  nameEn?: string;
  definition: string;
  logicalDataType:
    | "string"
    | "integer"
    | "decimal"
    | "boolean"
    | "date"
    | "datetime"
    | "code"
    | "identifier"
    | "amount"
    | "percentage"
    | "document"
    | "structured-object";
  format?: string;
  unit?: string;
  required: boolean;
  repeatable: boolean;
  isIdentifier: boolean;
  isSensitive: boolean;
  isDerived: boolean;
  sourceAttributeIds: string[];
  derivationRule?: string;
  classificationIds: string[];
  qualityRuleIds: string[];
  regulatoryMappingIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
}

export type InformationGovernanceRole =
  | "information-owner"
  | "data-steward"
  | "data-custodian"
  | "data-producer"
  | "data-consumer"
  | "control-owner"
  | "privacy-owner";

export interface InformationOwnershipAssignment {
  id: string;
  targetType: "information-domain" | "information-concept" | "business-object" | "data-product";
  targetId: string;
  governanceRole: InformationGovernanceRole;
  participantId?: string;
  roleId?: string;
  serviceDomainId?: string;
  responsibility: string;
  status: "proposed" | "reviewed" | "validated";
  effectiveFrom?: string;
  effectiveTo?: string;
}

export type InformationLineageAction =
  | "creates"
  | "captures"
  | "reads"
  | "validates"
  | "updates"
  | "derives"
  | "reconciles"
  | "publishes"
  | "reports"
  | "archives"
  | "deletes";

export interface InformationLineageEdge {
  id: string;
  sourceType: "service-domain" | "business-object" | "information-asset" | "business-event" | "participant";
  sourceId: string;
  targetType: "service-domain" | "business-object" | "information-asset" | "business-event" | "participant";
  targetId: string;
  action: InformationLineageAction;
  businessObjectIds: string[];
  attributeIds: string[];
  businessScenarioIds: string[];
  regulatoryMappingIds: string[];
  transformationRule?: string;
  description: string;
  status: "proposed" | "reviewed" | "validated";
}

export type InformationQualityDimension =
  | "accuracy"
  | "completeness"
  | "consistency"
  | "timeliness"
  | "uniqueness"
  | "validity"
  | "integrity"
  | "traceability";

export interface InformationQualityRule {
  id: string;
  name: string;
  description: string;
  dimension: InformationQualityDimension;
  targetType: "business-object" | "attribute" | "information-domain";
  targetId: string;
  ruleStatement: string;
  measurementFormula?: string;
  threshold?: string;
  frequency?: string;
  controlIds: string[];
  evidenceIds: string[];
  regulatoryMappingIds: string[];
  ownerRoleId?: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface InformationClassification {
  id: string;
  name: string;
  description: string;
  category: "confidentiality" | "privacy" | "business-criticality" | "regulatory-evidence";
  level: number;
  handlingRequirements: string[];
  controlIds: string[];
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface InformationLifecyclePolicy {
  id: string;
  name: string;
  description: string;
  stages: Array<{
    id: string;
    name: "create" | "capture" | "validate" | "use" | "share" | "retain" | "archive" | "dispose";
    description: string;
    order: number;
  }>;
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
}

export interface InformationRetentionPolicy {
  id: string;
  targetType: "business-object" | "information-domain" | "information-record";
  targetId: string;
  retentionPeriod?: string;
  retentionTrigger: string;
  disposition: "archive" | "anonymize" | "delete" | "retain-indefinitely" | "pending-definition";
  regulatoryMappingIds: string[];
  legalHoldSupported: boolean;
  status: "pending" | "proposed" | "reviewed" | "validated";
}

export interface InformationAsset {
  id: string;
  slug: string;
  name: string;
  description: string;
  assetType:
    | "industry-registry"
    | "master-data-set"
    | "reference-data-set"
    | "transaction-history"
    | "regulatory-evidence-store"
    | "analytical-data-set";
  informationDomainIds: string[];
  businessObjectIds: string[];
  accountableParticipantIds: string[];
  stewardRoleIds: string[];
  producerServiceDomainIds: string[];
  consumerServiceDomainIds: string[];
  classificationIds: string[];
  qualityRuleIds: string[];
  retentionPolicyIds: string[];
  regulatoryMappingIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated";
}

export interface DataProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  purpose: string;
  informationDomainId: string;
  businessObjectIds: string[];
  attributeIds: string[];
  producerServiceDomainIds: string[];
  consumerServiceDomainIds: string[];
  ownerRoleIds: string[];
  stewardRoleIds: string[];
  qualityRuleIds: string[];
  classificationIds: string[];
  serviceLevelExpectations: string[];
  status: "candidate" | "proposed" | "reviewed" | "validated" | "deprecated";
}
