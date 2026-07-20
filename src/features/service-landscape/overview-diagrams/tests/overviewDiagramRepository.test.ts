import { describe, it, expect } from "vitest";
import {
  getOverviewDiagrams,
  getOverviewDiagramById,
  getOverviewDiagramBySlug,
  getOverviewDiagramsByTheme,
  getOverviewDiagramsForServiceDomain,
  getOverviewDiagramsForScenario
} from "../../../../domain/repositories/overviewDiagramRepository";

describe("OverviewDiagrams Repository Tests", () => {
  it("should retrieve all 9 canonical diagrams", () => {
    const list = getOverviewDiagrams();
    expect(list.length).toBe(9);
  });

  it("should lookup diagrams by ID and Slug", () => {
    const d1 = getOverviewDiagramById("RAIA-OVD-001");
    expect(d1).toBeDefined();
    expect(d1?.slug).toBe("ecosistema-sar");

    const d2 = getOverviewDiagramBySlug("ciclo-vida-cuenta");
    expect(d2).toBeDefined();
    expect(d2?.id).toBe("RAIA-OVD-002");
  });

  it("should filter diagrams by theme", () => {
    const list = getOverviewDiagramsByTheme("contributions");
    expect(list.length).toBe(1);
    expect(list[0].id).toBe("RAIA-OVD-004");
  });

  it("should match diagrams linked to a specific Service Domain", () => {
    // RAIA-SD-020 (Registro de Cuenta) is in OVD-001, OVD-002, OVD-003, OVD-008
    const list = getOverviewDiagramsForServiceDomain("RAIA-SD-020");
    expect(list.length).toBeGreaterThanOrEqual(2);
  });

  it("should match diagrams linked to a Scenario", () => {
    // RAIA-BS-0001 is mapped to OVD-001, OVD-002, OVD-003, OVD-008
    const list = getOverviewDiagramsForScenario("RAIA-BS-0001");
    expect(list.length).toBeGreaterThanOrEqual(1);
  });
});
