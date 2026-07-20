import { z } from "zod";

export const RegulatorySourceTypeSchema = z.enum([
  "constitution",
  "law",
  "regulation",
  "general-provision",
  "circular",
  "operating-rule",
  "investment-rule",
  "official-criterion",
  "technical-annex",
  "official-guideline",
  "decree",
]);

export const RegulatorySourceStatusSchema = z.enum([
  "current",
  "partially-superseded",
  "superseded",
  "abrogated",
  "pending-verification",
]);

export const ValidationStatusSchema = z.enum([
  "pending",
  "source-verified",
  "legally-reviewed",
]);

const allowedDomains = [
  "diputados.gob.mx",
  "dof.gob.mx",
  "consar.gob.mx",
  "gob.mx",
  "imss.gob.mx",
  "issste.gob.mx",
  "infonavit.org.mx",
];

export const OfficialRegulatoryUrlSchema = z.string()
  .url("Official URL must be a valid URL")
  .refine(
    (val) => {
      try {
        const parsed = new URL(val);
        if (parsed.protocol !== "https:") return false;
        if (parsed.username || parsed.password) return false;
        if (parsed.port && parsed.port !== "" && parsed.port !== "443") return false;

        const hostname = parsed.hostname.toLowerCase();
        return allowedDomains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
      } catch (e) {
        return false;
      }
    },
    { message: "Official URL must use HTTPS and belong to an official government domain" }
  );

export const RegulatorySourceSchema = z.object({
  id: z.string(),
  officialTitle: z.string(),
  shortName: z.string(),
  sourceType: RegulatorySourceTypeSchema,
  issuingAuthorityId: z.string(),
  jurisdiction: z.literal("MX"),
  officialIdentifier: z.string().optional(),
  publicationDate: z.string(),
  lastReformDate: z.string().optional(),
  effectiveFrom: z.string(),
  effectiveTo: z.string().optional(),
  officialUrl: OfficialRegulatoryUrlSchema,
  consultedAt: z.string(),
  status: RegulatorySourceStatusSchema,
  supersedesIds: z.array(z.string()),
  supersededByIds: z.array(z.string()),
  applicableRegimeIds: z.array(z.string()),
  applicableParticipantTypeIds: z.array(z.string()),
  checksum: z.string().optional(),
  notes: z.array(z.string()),
  validationStatus: ValidationStatusSchema,
  reviewedBy: z.string().optional(),
  reviewedAt: z.string().optional(),
});

export const ObligationTypeSchema = z.enum([
  "obligation",
  "prohibition",
  "authorization",
  "supervisory-power",
  "reporting-duty",
  "control-requirement",
  "information-right",
  "retention-duty",
  "calculation-rule",
  "eligibility-rule",
  "governance-requirement",
]);

export const ApplicabilitySchema = z.enum([
  "direct",
  "indirect",
  "contextual",
  "enabling",
]);

export const MappingValidationStatusSchema = z.enum([
  "pending",
  "architecture-reviewed",
  "operationally-reviewed",
  "legally-reviewed",
]);

export const RegulatoryMappingSchema = z.object({
  id: z.string(),
  regulatorySourceId: z.string(),
  serviceDomainId: z.string(),
  serviceOperationIds: z.array(z.string()),
  businessEventIds: z.array(z.string()),
  businessObjectIds: z.array(z.string()),
  article: z.string().optional(),
  section: z.string().optional(),
  paragraph: z.string().optional(),
  fraction: z.string().optional(),
  annex: z.string().optional(),
  obligationType: ObligationTypeSchema,
  applicability: ApplicabilitySchema,
  applicableRegimeIds: z.array(z.string()),
  obligatedParticipantIds: z.array(z.string()),
  beneficiaryParticipantIds: z.array(z.string()),
  regulatoryRequirement: z.string(),
  architecturalInterpretation: z.string(),
  controlIds: z.array(z.string()),
  evidenceIds: z.array(z.string()),
  kpiIds: z.array(z.string()),
  confidence: z.enum(["low", "medium", "high"]),
  validationStatus: MappingValidationStatusSchema,
  reviewedBy: z.string().optional(),
  reviewedAt: z.string().optional(),
  assumptions: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
});

export const RegulatoryCapabilityGapSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  sourceIds: z.array(z.string()),
  articleReferences: z.array(z.string()),
  impactedBusinessAreaIds: z.array(z.string()),
  impactedBusinessDomainIds: z.array(z.string()),
  existingCandidateServiceDomainIds: z.array(z.string()),
  recommendation: z.enum([
    "extend-existing",
    "split-existing",
    "create-new",
    "model-as-control",
    "model-as-actor",
    "model-as-business-object",
    "no-action",
  ]),
  severity: z.enum(["P0", "P1", "P2", "P3"]),
  validationStatus: z.enum(["pending", "reviewed"]),
});
