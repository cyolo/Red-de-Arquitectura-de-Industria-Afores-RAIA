export type ParticipantType =
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

export interface IndustryParticipant {
  id: string;
  name: string;
  participantType: ParticipantType;
  organizationType?: string;
  authorityScope?: string[];
  status: "active" | "historical" | "generic-role";
  aliases: string[];
}
