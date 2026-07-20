import { z } from "zod";

export const controlRecordApplicabilitySchema = z.enum([
  "primary-control-record",
  "supporting-control-record",
  "stateless-capability",
  "reference-information",
  "analytical-capability",
  "not-applicable",
  "pending-review"
]);

export const controlRecordModelSchema = z.object({
  id: z.string().regex(/^RAIA-CRM-\d{3}$/),
  slug: z.string(),
  nameEs: z.string(),
  nameEn: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  serviceDomainId: z.string().regex(/^RAIA-SD-\d{3}$/),
  applicability: controlRecordApplicabilitySchema,
  applicabilityRationale: z.string(),
  responsibilityStatement: z.string(),
  responsibilityBoundary: z.string(),
  focalBusinessObjectId: z.string().regex(/^RAIA-BO-\d{3}$/),
  supportingBusinessObjectIds: z.array(z.string().regex(/^RAIA-BO-\d{3}$/)),
  initialStateId: z.string().optional(),
  stateIds: z.array(z.string()),
  transitionIds: z.array(z.string()),
  serviceOperationIds: z.array(z.string()),
  businessEventIds: z.array(z.string()),
  participantIds: z.array(z.string()),
  businessScenarioIds: z.array(z.string()),
  controlIds: z.array(z.string()),
  evidenceIds: z.array(z.string()),
  regulatoryMappingIds: z.array(z.string()),
  invariantIds: z.array(z.string()),
  lifecyclePolicyIds: z.array(z.string()),
  criticality: z.enum(["low", "medium", "high", "systemic"]),
  status: z.enum(["draft", "proposed", "reviewed", "validated", "deprecated"]),
  modelingStatus: z.enum(["identified", "partially-modeled", "modeled", "reviewed", "validated"]),
  operationalValidationStatus: z.enum(["pending", "reviewed", "validated"]),
  regulatoryValidationStatus: z.enum(["pending", "partially-reviewed", "legally-reviewed"]),
  assumptions: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
  version: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
});
