export type ReferenceModelLayerId =
  | "ecosystem"
  | "strategy-governance"
  | "business-capability"
  | "value-stream"
  | "service-landscape"
  | "business-behavior"
  | "information"
  | "control-state"
  | "regulation-control"
  | "evidence-measurement";

export interface IndustryReferenceModel {
  id: string;
  name: string;
  description: string;
  purpose: string;
  version: string;
  baselineDate: string;
  viewpointIds: string[];
  layerIds: ReferenceModelLayerId[];
  moduleIds: string[];
  regulatoryBaselineId?: string;
  releaseId?: string;
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  validationStatus: "pending-industry-review" | "partially-reviewed" | "reviewed";
  assumptions: string[];
  unresolvedQuestions: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}

export type ReferenceViewpointType =
  | "ecosystem"
  | "layered"
  | "value-stream"
  | "lifecycle"
  | "traceability"
  | "regulatory"
  | "information"
  | "control-behavior"
  | "impact";

export type ReferenceArtifactType =
  | "participant"
  | "business-area"
  | "business-domain"
  | "service-domain"
  | "service-operation"
  | "business-event"
  | "business-scenario"
  | "scenario-step"
  | "information-domain"
  | "information-concept"
  | "business-object"
  | "information-asset"
  | "data-product"
  | "control-record"
  | "control-state"
  | "control-transition"
  | "regulatory-source"
  | "regulatory-mapping"
  | "control"
  | "evidence"
  | "kpi"
  | "overview-diagram";

export interface ReferenceArtifactRef {
  artifactType: ReferenceArtifactType;
  artifactId: string;
}

export interface ReferenceModelViewpoint {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  viewpointType: ReferenceViewpointType;
  layerIds: ReferenceModelLayerId[];
  rootArtifactRefs: ReferenceArtifactRef[];
  queryDefinitionId?: string;
  diagramConfigurationId: string;
  supportedDetailLevels: Array<"executive" | "domain" | "service" | "detailed">;
  defaultDetailLevel: "executive" | "domain" | "service" | "detailed";
  filterIds: string[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  confidence: "low" | "medium" | "high";
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
}

export type CrossModelRelationType =
  | "contains"
  | "groups"
  | "realizes"
  | "performs"
  | "participates-in"
  | "accountable-for"
  | "creates"
  | "reads"
  | "updates"
  | "validates"
  | "manages-state-of"
  | "transitions"
  | "produces-event"
  | "consumes-event"
  | "constrained-by"
  | "controlled-by"
  | "evidenced-by"
  | "measured-by"
  | "depends-on"
  | "enables"
  | "traced-to";

export interface CrossModelTraceabilityRelation {
  id: string;
  source: ReferenceArtifactRef;
  target: ReferenceArtifactRef;
  relationType: CrossModelRelationType;
  description: string;
  sourceMappingId?: string;
  provenance: "canonical-mapping" | "derived" | "manual-reference";
  confidence: "low" | "medium" | "high";
  status: "proposed" | "reviewed" | "validated";
}

export interface ReferenceCompositionRule {
  id: string;
  name: string;
  description: string;
  sourceArtifactType: ReferenceArtifactType;
  targetArtifactType: ReferenceArtifactType;
  relationType: CrossModelRelationType;
  repositoryFunction: string;
  maximumDepth: number;
  maximumResults: number;
  enabled: boolean;
}

export interface ReferenceModelGap {
  id: string;
  gapType:
    | "missing-artifact"
    | "missing-relation"
    | "missing-module"
    | "orphan-artifact"
    | "semantic-conflict"
    | "traceability-break"
    | "regulatory-gap"
    | "control-gap"
    | "evidence-gap"
    | "validation-gap";
  sourceArtifact?: ReferenceArtifactRef;
  expectedTargetType?: ReferenceArtifactType;
  title: string;
  description: string;
  severity: "P0" | "P1" | "P2" | "P3";
  recommendation: string;
  status: "open" | "accepted" | "resolved" | "dismissed";
}
