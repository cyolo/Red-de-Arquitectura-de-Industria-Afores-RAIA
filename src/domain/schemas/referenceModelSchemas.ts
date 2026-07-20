import { z } from "zod";

export const referenceModelLayerIdSchema = z.enum([
  "ecosystem",
  "strategy-governance",
  "business-capability",
  "value-stream",
  "service-landscape",
  "business-behavior",
  "information",
  "control-state",
  "regulation-control",
  "evidence-measurement"
]);

export const referenceArtifactTypeSchema = z.enum([
  "participant",
  "business-area",
  "business-domain",
  "service-domain",
  "service-operation",
  "business-event",
  "business-scenario",
  "scenario-step",
  "information-domain",
  "information-concept",
  "business-object",
  "information-asset",
  "data-product",
  "control-record",
  "control-state",
  "control-transition",
  "regulatory-source",
  "regulatory-mapping",
  "control",
  "evidence",
  "kpi",
  "overview-diagram"
]);

export const referenceArtifactRefSchema = z.object({
  artifactType: referenceArtifactTypeSchema,
  artifactId: z.string()
});

export const crossModelRelationTypeSchema = z.enum([
  "contains",
  "groups",
  "realizes",
  "performs",
  "participates-in",
  "accountable-for",
  "creates",
  "reads",
  "updates",
  "validates",
  "manages-state-of",
  "transitions",
  "produces-event",
  "consumes-event",
  "constrained-by",
  "controlled-by",
  "evidenced-by",
  "measured-by",
  "depends-on",
  "enables",
  "traced-to"
]);

export const crossModelTraceabilityRelationSchema = z.object({
  id: z.string(),
  source: referenceArtifactRefSchema,
  target: referenceArtifactRefSchema,
  relationType: crossModelRelationTypeSchema,
  description: z.string(),
  sourceMappingId: z.string().optional(),
  provenance: z.enum(["canonical-mapping", "derived", "manual-reference"]),
  confidence: z.enum(["low", "medium", "high"]),
  status: z.enum(["proposed", "reviewed", "validated"])
});
