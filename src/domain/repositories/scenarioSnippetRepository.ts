import snippetsData from "../../data/business-scenarios/snippets/snippets.json";
import participantRolesData from "../../data/business-scenarios/snippets/participant-roles.json";
import serviceDomainSlotsData from "../../data/business-scenarios/snippets/service-domain-slots.json";
import businessObjectSlotsData from "../../data/business-scenarios/snippets/business-object-slots.json";
import stepsData from "../../data/business-scenarios/snippets/steps.json";
import variantsData from "../../data/business-scenarios/snippets/variants.json";
import exceptionsData from "../../data/business-scenarios/snippets/exceptions.json";
import invocationsData from "../../data/business-scenarios/snippets/invocations.json";
import gapsData from "../../data/business-scenarios/snippets/snippet-gaps.json";

import {
  ScenarioSnippet,
  ScenarioSnippetParticipantRole,
  ScenarioSnippetServiceDomainSlot,
  ScenarioSnippetBusinessObjectSlot,
  ScenarioSnippetStep,
  ScenarioSnippetVariant,
  ScenarioSnippetException,
  ScenarioSnippetInvocation,
  ReferenceModelGap
} from "../types";

export function getScenarioSnippets(): ScenarioSnippet[] {
  return snippetsData as ScenarioSnippet[];
}

export function getScenarioSnippetById(id: string): ScenarioSnippet | undefined {
  return getScenarioSnippets().find((s) => s.id === id);
}

export function getScenarioSnippetBySlug(slug: string): ScenarioSnippet | undefined {
  return getScenarioSnippets().find((s) => s.slug === slug);
}

export function getSnippetParticipantRoles(snippetId: string): ScenarioSnippetParticipantRole[] {
  return (participantRolesData as ScenarioSnippetParticipantRole[]).filter((r) => r.snippetId === snippetId);
}

export function getSnippetServiceDomainSlots(snippetId: string): ScenarioSnippetServiceDomainSlot[] {
  return (serviceDomainSlotsData as ScenarioSnippetServiceDomainSlot[]).filter((s) => s.snippetId === snippetId);
}

export function getSnippetBusinessObjectSlots(snippetId: string): ScenarioSnippetBusinessObjectSlot[] {
  return (businessObjectSlotsData as ScenarioSnippetBusinessObjectSlot[]).filter((s) => s.snippetId === snippetId);
}

export function getSnippetSteps(snippetId: string): ScenarioSnippetStep[] {
  return (stepsData as ScenarioSnippetStep[])
    .filter((s) => s.snippetId === snippetId)
    .sort((a, b) => a.order - b.order);
}

export function getSnippetVariants(snippetId: string): ScenarioSnippetVariant[] {
  return (variantsData as ScenarioSnippetVariant[]).filter((v) => v.snippetId === snippetId);
}

export function getSnippetExceptions(snippetId: string): ScenarioSnippetException[] {
  return (exceptionsData as ScenarioSnippetException[]).filter((e) => e.snippetId === snippetId);
}

export function getSnippetInvocations(): ScenarioSnippetInvocation[] {
  return invocationsData as ScenarioSnippetInvocation[];
}

export function getSnippetUsageByScenario(scenarioId: string): ScenarioSnippetInvocation[] {
  return getSnippetInvocations().filter((i) => i.businessScenarioId === scenarioId);
}

export function getScenariosUsingSnippet(snippetId: string): string[] {
  const invs = getSnippetInvocations().filter((i) => i.snippetId === snippetId);
  return Array.from(new Set(invs.map((i) => i.businessScenarioId)));
}

export function getSnippetGaps(): ReferenceModelGap[] {
  return gapsData as any[];
}
