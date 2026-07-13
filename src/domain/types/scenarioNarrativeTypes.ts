export interface ParticipantNarrative {
  participantInstanceId: string;
  participantName: string;
  structuralRole: string;
  behavioralRole: string;
  responsibility: string;
  receivesFrom: string[];
  sendsTo: string[];
  businessObjectsManaged: string[];
  controlsApplied: string[];
}

export interface ScenarioPhaseNarrative {
  id: string;
  name: string;
  order: number;
  startSequence: number;
  endSequence: number;
  structuralContext: string;
  behavioralDescription: string;
  result: string;
  participantInstanceIds: string[];
  messageIds: string[];
}

export interface ScenarioStepNarrative {
  scenarioStepId: string;
  messageId: string;
  sequence: number;
  title: string;
  structuralContext: string;
  behavior: string;
  businessMeaning: string;
  input: string[];
  output: string[];
  controlExplanation?: string;
  evidenceExplanation?: string;
  exceptionExplanation?: string;
}

export interface ScenarioArchitectureNarrative {
  scenarioId: string;
  version: string;
  executiveSummary: string;
  structuralNarrative: string;
  behavioralNarrative: string;
  structureBehaviorBridge: string;
  participantNarratives: ParticipantNarrative[];
  phaseNarratives: ScenarioPhaseNarrative[];
  stepNarratives: ScenarioStepNarrative[];
  decisionNarrative: string;
  exceptionNarrative: string;
  controlNarrative: string;
  evidenceNarrative: string;
  outcomeNarrative: string;
  architectureInsights: string[];
  assumptions: string[];
  validationNotes: string[];
  status: "draft" | "proposed" | "validated" | "active" | "deprecated";
  regulatoryValidationStatus: "pending" | "partially-validated" | "validated";
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}
