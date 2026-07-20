import { getScenarioSnippetById, getSnippetParticipantRoles, getSnippetSteps, getSnippetInvocations, getSnippetUsageByScenario } from "../../../../domain/repositories/scenarioSnippetRepository";
import { getScenarioById, getServiceDomainById } from "../../../../domain/repositories/landscapeRepository";
import { ResolvedScenarioStep, ScenarioSnippetInvocation } from "../../../../domain/types";

export function resolveSnippetInvocation(invocation: ScenarioSnippetInvocation): ResolvedScenarioStep[] {
  const snippet = getScenarioSnippetById(invocation.snippetId);
  if (!snippet) return [];

  const roles = getSnippetParticipantRoles(invocation.snippetId);
  const steps = getSnippetSteps(invocation.snippetId);

  // Map roles to bound participants
  const roleToParticipant = new Map<string, string>();
  invocation.participantBindings.forEach((b) => {
    if (b.participantIds.length > 0) {
      roleToParticipant.set(b.roleId, b.participantIds[0]);
    }
  });

  // Map slots to bound Service Domains
  const slotToServiceDomain = new Map<string, string>();
  invocation.serviceDomainBindings.forEach((b) => {
    if (b.serviceDomainIds.length > 0) {
      slotToServiceDomain.set(b.slotId, b.serviceDomainIds[0]);
    }
  });

  // Map slots to bound Business Objects
  const slotToBusinessObject = new Map<string, string[]>();
  invocation.businessObjectBindings.forEach((b) => {
    slotToBusinessObject.set(b.slotId, b.businessObjectIds);
  });

  return steps.map((step, idx) => {
    const sourceParticipantId = roleToParticipant.get(step.sourceRoleId) || step.sourceRoleId;
    const targetParticipantId = roleToParticipant.get(step.targetRoleId) || step.targetRoleId;

    const sourceServiceDomainId = step.sourceServiceDomainSlotId
      ? slotToServiceDomain.get(step.sourceServiceDomainSlotId)
      : undefined;

    const targetServiceDomainId = step.targetServiceDomainSlotId
      ? slotToServiceDomain.get(step.targetServiceDomainSlotId)
      : undefined;

    const inputBusinessObjectIds = step.inputBusinessObjectSlotIds.flatMap(
      (slotId) => slotToBusinessObject.get(slotId) || []
    );

    const outputBusinessObjectIds = step.outputBusinessObjectSlotIds.flatMap(
      (slotId) => slotToBusinessObject.get(slotId) || []
    );

    return {
      id: `${invocation.id}-step-${step.order}`,
      scenarioId: invocation.businessScenarioId,
      sequence: invocation.order * 100 + step.order,
      name: step.name,
      description: step.description,
      sourceParticipantId,
      targetParticipantId,
      sourceServiceDomainId,
      targetServiceDomainId,
      inputBusinessObjectIds,
      outputBusinessObjectIds,
      serviceOperationId: step.serviceOperationSlotId,
      businessEventIds: step.businessEventSlotIds,
      controlIds: step.controlSlotIds,
      evidenceIds: step.evidenceSlotIds,
      origin: "snippet",
      snippetInvocationId: invocation.id,
      snippetId: snippet.id,
      snippetVersion: snippet.version,
      snippetStepId: step.id
    };
  });
}

export function resolveScenarioSequence(scenarioId: string): ResolvedScenarioStep[] {
  const scenario = getScenarioById(scenarioId);
  if (!scenario) return [];

  const resolvedSteps: ResolvedScenarioStep[] = [];

  // Get inline steps
  scenario.steps.forEach((step) => {
    resolvedSteps.push({
      id: `${scenarioId}-inline-${step.stepNumber}`,
      scenarioId,
      sequence: step.stepNumber,
      name: step.eventName || `Paso ${step.stepNumber}`,
      description: step.description,
      sourceParticipantId: step.sourceId,
      targetParticipantId: step.targetId,
      inputBusinessObjectIds: [],
      outputBusinessObjectIds: [],
      businessEventIds: [],
      controlIds: [],
      evidenceIds: [],
      origin: "inline"
    });
  });

  // Fetch and resolve snippet invocations
  const invocations = getSnippetUsageByScenario(scenarioId).sort((a, b) => a.order - b.order);
  invocations.forEach((inv) => {
    const steps = resolveSnippetInvocation(inv);
    resolvedSteps.push(...steps);
  });

  // Re-sort sequences dynamically
  return resolvedSteps.sort((a, b) => a.sequence - b.sequence);
}

export function validateSnippetBindings(invocation: ScenarioSnippetInvocation): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const snippet = getScenarioSnippetById(invocation.snippetId);
  if (!snippet) {
    return { valid: false, errors: ["Snippet no encontrado"] };
  }

  const roles = getSnippetParticipantRoles(invocation.snippetId);
  roles.forEach((r) => {
    const binding = invocation.participantBindings.find((b) => b.roleId === r.id);
    if (r.required && (!binding || binding.participantIds.length === 0)) {
      errors.push(`Rol obligatorio sin asignar: ${r.roleName}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

export function calculateSnippetImpact(snippetId: string): { affectedScenariosCount: number; affectedScenarioIds: string[] } {
  const invs = getSnippetInvocations().filter((i) => i.snippetId === snippetId);
  const ids = Array.from(new Set(invs.map((i) => i.businessScenarioId)));
  return {
    affectedScenariosCount: ids.length,
    affectedScenarioIds: ids
  };
}
