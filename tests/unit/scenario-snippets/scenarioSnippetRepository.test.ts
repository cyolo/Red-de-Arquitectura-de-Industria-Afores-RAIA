import { describe, it, expect } from "vitest";
import {
  getScenarioSnippets,
  getScenarioSnippetById,
  getSnippetParticipantRoles,
  getSnippetSteps
} from "../../../src/domain/repositories/scenarioSnippetRepository";
import {
  resolveScenarioSequence,
  validateSnippetBindings,
  calculateSnippetImpact
} from "../../../src/features/business-scenarios/snippets/domain/snippetResolver";

describe("Scenario Snippets Repository & Resolver Tests", () => {
  it("should fetch all canonical snippets", () => {
    const list = getScenarioSnippets();
    expect(list.length).toBeGreaterThan(0);
    expect(list[0].id).toBe("RAIA-SNP-0001");
  });

  it("should find snippet by ID", () => {
    const sn = getScenarioSnippetById("RAIA-SNP-0001");
    expect(sn).toBeDefined();
    expect(sn?.nameEs).toBe("Resolución de identidad");
  });

  it("should fetch participant roles for a snippet", () => {
    const roles = getSnippetParticipantRoles("RAIA-SNP-0001");
    expect(roles.length).toBe(2);
    expect(roles[0].roleName).toBe("requester");
  });

  it("should compile scenario sequences dynamically", () => {
    // RAIA-BS-0002 has snippet invocations mapped
    const steps = resolveScenarioSequence("RAIA-BS-0002");
    expect(steps.length).toBeGreaterThan(0);
    // Find resolved step from snippet
    const fromSnippet = steps.find((s) => s.origin === "snippet");
    expect(fromSnippet).toBeDefined();
    expect(fromSnippet?.snippetId).toBe("RAIA-SNP-0001");
  });

  it("should validate snippet bindings", () => {
    const sn = getScenarioSnippetById("RAIA-SNP-0001");
    expect(sn).toBeDefined();
    
    const mockInvocation = {
      id: "INV-001",
      businessScenarioId: "RAIA-BS-0002",
      snippetId: "RAIA-SNP-0001",
      snippetVersion: "0.1.0",
      order: 1,
      participantBindings: [
        { roleId: "ROL-PART-0001", participantIds: ["ACT-AFORE"] },
        { roleId: "ROL-PART-0002", participantIds: ["ACT-CONSAR"] }
      ],
      serviceDomainBindings: [],
      businessObjectBindings: [],
      controlBindings: [],
      evidenceBindings: [],
      parameterValues: {},
      status: "validated" as const
    };

    const res = validateSnippetBindings(mockInvocation);
    expect(res.valid).toBe(true);
  });

  it("should calculate snippet downstream impacts", () => {
    const impact = calculateSnippetImpact("RAIA-SNP-0001");
    expect(impact.affectedScenariosCount).toBe(1);
    expect(impact.affectedScenarioIds).toContain("RAIA-BS-0002");
  });
});
