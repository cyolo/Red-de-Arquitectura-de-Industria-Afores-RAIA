import { z } from "zod";

export const ParticipantTypeSchema = z.enum([
  "worker",
  "beneficiary",
  "employer",
  "public-dependency",
  "afore",
  "public-pension-administrator",
  "siefore",
  "authority",
  "social-security-institute",
  "housing-institute",
  "industry-operator",
  "insurer",
  "custodian",
  "price-provider",
  "market-infrastructure",
  "fiduciary",
  "external-service-provider",
  "governance-body",
]);

export const IndustryParticipantSchema = z.object({
  id: z.string(),
  name: z.string(),
  participantType: ParticipantTypeSchema,
  organizationType: z.string().optional(),
  authorityScope: z.array(z.string()).optional(),
  status: z.enum(["active", "historical", "generic-role"]),
  aliases: z.array(z.string()),
});
