export type OverviewDiagramLevel =
  | "industry"
  | "value-stream"
  | "business-area"
  | "business-domain";

export type OverviewNodeType =
  | "phase"
  | "business-area"
  | "business-domain"
  | "service-domain"
  | "actor"
  | "organization"
  | "authority"
  | "industry-service"
  | "external-system"
  | "information-asset"
  | "business-object"
  | "decision"
  | "event"
  | "control";

export type OverviewEdgeType =
  | "value-flow"
  | "information-flow"
  | "business-event"
  | "validation"
  | "authorization"
  | "supervision"
  | "reporting"
  | "fund-transfer"
  | "dependency"
  | "governance"
  | "enabling";

export interface OverviewDiagramNode {
  id: string;
  diagramId: string;
  nodeType: OverviewNodeType;
  referenceId?: string; // e.g. serviceDomainId or participantId
  label: string;
  shortLabel?: string;
  description?: string;
  phaseId?: string;
  groupId?: string;
  order?: number;
  status: "normal" | "highlighted" | "warning" | "gap";
  manuallyPositioned?: boolean;
  position?: {
    x: number;
    y: number;
  };
}

export interface OverviewDiagramEdge {
  id: string;
  diagramId: string;
  sourceNodeId: string;
  targetNodeId: string;
  edgeType: OverviewEdgeType;
  label?: string;
  description: string;
  businessObjectIds: string[];
  businessEventIds: string[];
  regulatoryMappingIds: string[];
  status: "proposed" | "reviewed" | "validated";
  animated?: boolean;
}

export interface OverviewDiagramPhase {
  id: string;
  diagramId: string;
  name: string;
  description: string;
  order: number;
}

export interface OverviewDiagramGroup {
  id: string;
  diagramId: string;
  groupType: "phase" | "participant" | "landscape-layer" | "business-area" | "regime";
  label: string;
  referenceId?: string;
  order: number;
}

export interface OverviewDiagram {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  level: OverviewDiagramLevel;
  theme:
    | "industry-ecosystem"
    | "account-lifecycle"
    | "affiliation"
    | "contributions"
    | "investments"
    | "withdrawals-pensions"
    | "identity"
    | "regulatory-governance"
    | "industry-services"
    | "fondo-bienestar";
  orientation: "left-to-right" | "top-to-bottom";
  nodes: OverviewDiagramNode[];
  edges: OverviewDiagramEdge[];
  groups?: OverviewDiagramGroup[];
  phases?: OverviewDiagramPhase[];
  status: "draft" | "proposed" | "reviewed" | "validated" | "deprecated";
  confidence: "low" | "medium" | "high";
  assumptions: string[];
  unresolvedQuestions: string[];
  version: string;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}
