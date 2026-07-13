import { z } from "zod";

export const ParticipantNarrativeSchema = z.object({
  participantInstanceId: z.string(),
  participantName: z.string(),
  structuralRole: z.string(),
  behavioralRole: z.string(),
  responsibility: z.string(),
  receivesFrom: z.array(z.string()),
  sendsTo: z.array(z.string()),
  businessObjectsManaged: z.array(z.string()),
  controlsApplied: z.array(z.string()),
});

export const ScenarioPhaseNarrativeSchema = z.object({
  id: z.string(),
  name: z.string(),
  order: z.number(),
  startSequence: z.number(),
  endSequence: z.number(),
  structuralContext: z.string(),
  behavioralDescription: z.string(),
  result: z.string(),
  participantInstanceIds: z.array(z.string()),
  messageIds: z.array(z.string()),
});

export const ScenarioStepNarrativeSchema = z.object({
  scenarioStepId: z.string(),
  messageId: z.string(),
  sequence: z.number(),
  title: z.string(),
  structuralContext: z.string(),
  behavior: z.string(),
  businessMeaning: z.string(),
  input: z.array(z.string()),
  output: z.array(z.string()),
  controlExplanation: z.string().optional(),
  evidenceExplanation: z.string().optional(),
  exceptionExplanation: z.string().optional(),
});

export const ScenarioArchitectureNarrativeSchema = z.object({
  scenarioId: z.string(),
  version: z.string(),
  executiveSummary: z.string(),
  structuralNarrative: z.string(),
  behavioralNarrative: z.string(),
  structureBehaviorBridge: z.string(),
  participantNarratives: z.array(ParticipantNarrativeSchema),
  phaseNarratives: z.array(ScenarioPhaseNarrativeSchema),
  stepNarratives: z.array(ScenarioStepNarrativeSchema),
  decisionNarrative: z.string(),
  exceptionNarrative: z.string(),
  controlNarrative: z.string(),
  evidenceNarrative: z.string(),
  outcomeNarrative: z.string(),
  architectureInsights: z.array(z.string()),
  assumptions: z.array(z.string()),
  validationNotes: z.array(z.string()),
  status: z.enum(["draft", "proposed", "validated", "active", "deprecated"]),
  regulatoryValidationStatus: z.enum(["pending", "partially-validated", "validated"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastReviewedAt: z.string().optional(),
});
