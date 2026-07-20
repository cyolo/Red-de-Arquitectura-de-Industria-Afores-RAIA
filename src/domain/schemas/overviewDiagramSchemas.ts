import { z } from "zod";

export const OverviewNodeTypeSchema = z.enum([
  "phase",
  "business-area",
  "business-domain",
  "service-domain",
  "actor",
  "organization",
  "authority",
  "industry-service",
  "external-system",
  "information-asset",
  "business-object",
  "decision",
  "event",
  "control"
]);

export const OverviewEdgeTypeSchema = z.enum([
  "value-flow",
  "information-flow",
  "business-event",
  "validation",
  "authorization",
  "supervision",
  "reporting",
  "fund-transfer",
  "dependency",
  "enabling",
  "governance"
]);

export const OverviewDiagramNodeSchema = z.object({
  id: z.string().regex(/^node-[a-zA-Z0-9\-_]+$/),
  diagramId: z.string().regex(/^RAIA-OVD-\d{3}$/),
  nodeType: OverviewNodeTypeSchema,
  referenceId: z.string().optional(),
  label: z.string().min(1),
  shortLabel: z.string().optional(),
  description: z.string().optional(),
  phaseId: z.string().optional(),
  groupId: z.string().optional(),
  order: z.number().optional(),
  status: z.enum(["normal", "highlighted", "warning", "gap"]),
  manuallyPositioned: z.boolean().optional(),
  position: z.object({
    x: z.number(),
    y: z.number()
  }).optional()
});

export const OverviewDiagramEdgeSchema = z.object({
  id: z.string().regex(/^edge-[a-zA-Z0-9\-_]+$/),
  diagramId: z.string().regex(/^RAIA-OVD-\d{3}$/),
  sourceNodeId: z.string().min(1),
  targetNodeId: z.string().min(1),
  edgeType: OverviewEdgeTypeSchema,
  label: z.string().optional(),
  description: z.string().min(1),
  businessObjectIds: z.array(z.string()),
  businessEventIds: z.array(z.string()),
  regulatoryMappingIds: z.array(z.string()),
  status: z.enum(["proposed", "reviewed", "validated"]),
  animated: z.boolean().optional()
});

export const OverviewDiagramPhaseSchema = z.object({
  id: z.string().regex(/^phase-[a-zA-Z0-9\-_]+$/),
  diagramId: z.string().regex(/^RAIA-OVD-\d{3}$/),
  name: z.string().min(1),
  description: z.string().min(1),
  order: z.number()
});

export const OverviewDiagramGroupSchema = z.object({
  id: z.string().regex(/^group-[a-zA-Z0-9\-_]+$/),
  diagramId: z.string().regex(/^RAIA-OVD-\d{3}$/),
  groupType: z.enum(["phase", "participant", "landscape-layer", "business-area", "regime"]),
  label: z.string().min(1),
  referenceId: z.string().optional(),
  order: z.number()
});

export const OverviewDiagramSchema = z.object({
  id: z.string().regex(/^RAIA-OVD-\d{3}$/),
  slug: z.string().regex(/^[a-z0-9\-]+$/),
  nameEs: z.string().min(1),
  nameEn: z.string().optional(),
  description: z.string().min(1),
  purpose: z.string().min(1),
  level: z.enum(["industry", "value-stream", "business-area", "business-domain"]),
  theme: z.enum([
    "industry-ecosystem",
    "account-lifecycle",
    "affiliation",
    "contributions",
    "investments",
    "withdrawals-pensions",
    "identity",
    "regulatory-governance",
    "industry-services",
    "fondo-bienestar"
  ]),
  orientation: z.enum(["left-to-right", "top-to-bottom"]),
  nodes: z.array(OverviewDiagramNodeSchema),
  edges: z.array(OverviewDiagramEdgeSchema),
  groups: z.array(OverviewDiagramGroupSchema).optional(),
  phases: z.array(OverviewDiagramPhaseSchema).optional(),
  status: z.enum(["draft", "proposed", "reviewed", "validated", "deprecated"]),
  confidence: z.enum(["low", "medium", "high"]),
  assumptions: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
  version: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional()
});
