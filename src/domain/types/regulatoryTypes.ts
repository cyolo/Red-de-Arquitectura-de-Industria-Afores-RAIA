export type RegulatorySourceType =
  | "constitution"
  | "law"
  | "regulation"
  | "general-provision"
  | "circular"
  | "operating-rule"
  | "investment-rule"
  | "official-criterion"
  | "technical-annex"
  | "official-guideline"
  | "decree";

export type RegulatorySourceStatus =
  | "current"
  | "partially-superseded"
  | "superseded"
  | "abrogated"
  | "pending-verification";

export type ValidationStatus =
  | "pending"
  | "source-verified"
  | "legally-reviewed";

export interface RegulatorySource {
  id: string;
  officialTitle: string;
  shortName: string;
  sourceType: RegulatorySourceType;
  issuingAuthorityId: string;
  jurisdiction: "MX";
  officialIdentifier?: string;
  publicationDate: string;
  lastReformDate?: string;
  effectiveFrom: string;
  effectiveTo?: string;
  officialUrl: string;
  consultedAt: string;
  status: RegulatorySourceStatus;
  supersedesIds: string[];
  supersededByIds: string[];
  applicableRegimeIds: string[];
  applicableParticipantTypeIds: string[];
  checksum?: string;
  notes: string[];
  validationStatus: ValidationStatus;
  reviewedBy?: string;
  reviewedAt?: string;
}

export type ObligedParticipantType =
  | "worker"
  | "beneficiary"
  | "employer"
  | "public-dependency"
  | "afore"
  | "public-pension-administrator"
  | "siefore"
  | "authority"
  | "social-security-institute"
  | "housing-institute"
  | "industry-operator"
  | "insurer"
  | "custodian"
  | "price-provider"
  | "market-infrastructure"
  | "fiduciary"
  | "external-service-provider"
  | "governance-body";

export type ObligationType =
  | "obligation"
  | "prohibition"
  | "authorization"
  | "supervisory-power"
  | "reporting-duty"
  | "control-requirement"
  | "information-right"
  | "retention-duty"
  | "calculation-rule"
  | "eligibility-rule"
  | "governance-requirement";

export type Applicability =
  | "direct"
  | "indirect"
  | "contextual"
  | "enabling";

export type MappingValidationStatus =
  | "pending"
  | "architecture-reviewed"
  | "operationally-reviewed"
  | "legally-reviewed";

export interface RegulatoryMapping {
  id: string;
  regulatorySourceId: string;
  serviceDomainId: string;
  serviceOperationIds: string[];
  businessEventIds: string[];
  businessObjectIds: string[];
  article?: string;
  section?: string;
  paragraph?: string;
  fraction?: string;
  annex?: string;
  obligationType: ObligationType;
  applicability: Applicability;
  applicableRegimeIds: string[];
  obligatedParticipantIds: string[];
  beneficiaryParticipantIds: string[];
  regulatoryRequirement: string;
  architecturalInterpretation: string;
  controlIds: string[];
  evidenceIds: string[];
  kpiIds: string[];
  confidence: "low" | "medium" | "high";
  validationStatus: MappingValidationStatus;
  reviewedBy?: string;
  reviewedAt?: string;
  assumptions: string[];
  unresolvedQuestions: string[];
}

export interface RegulatoryCapabilityGap {
  id: string;
  title: string;
  description: string;
  sourceIds: string[];
  articleReferences: string[];
  impactedBusinessAreaIds: string[];
  impactedBusinessDomainIds: string[];
  existingCandidateServiceDomainIds: string[];
  recommendation:
    | "extend-existing"
    | "split-existing"
    | "create-new"
    | "model-as-control"
    | "model-as-actor"
    | "model-as-business-object"
    | "no-action";
  severity: "P0" | "P1" | "P2" | "P3";
  validationStatus: "pending" | "reviewed";
}
