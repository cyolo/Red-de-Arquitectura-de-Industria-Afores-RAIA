import { describe, test, expect } from 'vitest';
import { scenarioRepository } from '../../src/domain/repositories/businessScenarioRepository';
import {
  getBusinessAreas,
  getBusinessDomains,
  getServiceDomains,
  getRelations,
  getRegulations,
  getScenarios,
  getServiceDomainById,
  getServiceDomainBySlug
} from '../../src/domain/repositories/landscapeRepository';
import {
  getPortalModules,
  getPortalReleases,
  getArchitectureArtifacts,
  getArchitectureMetrics
} from '../../src/domain/repositories/portalRepository';
import { scenarioNarrativeRepository } from '../../src/domain/repositories/scenarioNarrativeRepository';

describe('RAIA Repositories Unit Tests', () => {
  test('Landscape Repository basics', () => {
    const areas = getBusinessAreas();
    expect(areas.length).toBeGreaterThan(0);
    expect(areas[0].id).toBeDefined();

    const domains = getBusinessDomains();
    expect(domains.length).toBeGreaterThan(0);

    const sds = getServiceDomains();
    expect(sds.length).toBeGreaterThan(0);

    const relations = getRelations();
    expect(relations.length).toBeGreaterThan(0);

    const regulations = getRegulations();
    expect(regulations.length).toBeGreaterThan(0);

    const scenarios = getScenarios();
    expect(scenarios.length).toBeGreaterThan(0);
  });

  test('Landscape Repository find methods', () => {
    const sds = getServiceDomains();
    const first = sds[0];
    const foundById = getServiceDomainById(first.id);
    expect(foundById).toEqual(first);

    const foundBySlug = getServiceDomainBySlug(first.slug);
    expect(foundBySlug).toEqual(first);
  });

  test('Portal Repository basics', () => {
    const modules = getPortalModules();
    expect(modules.length).toBeGreaterThan(0);

    const releases = getPortalReleases();
    expect(releases.length).toBeGreaterThan(0);

    const artifacts = getArchitectureArtifacts();
    expect(artifacts.length).toBeGreaterThan(0);
  });

  test('Portal Repository metrics calculations', () => {
    const metrics = getArchitectureMetrics();
    expect(metrics.businessAreas).toBe(11);
    expect(metrics.businessDomains).toBe(34);
    expect(metrics.serviceDomains).toBe(273);
    expect(metrics.relations).toBe(41);
    expect(metrics.controls).toBeDefined();
    expect(metrics.byStatus).toBeDefined();
    expect(metrics.byMaturity).toBeDefined();
    expect(metrics.fieldCompleteness).toBeGreaterThan(0);
  });

  test('Scenario Narrative Repository basics', () => {
    const emptyAll = scenarioNarrativeRepository.getAll();
    expect(emptyAll.length).toBe(0);

    const mockBundle = {
      "RAIA-BS-0001": {
        scenarioId: "RAIA-BS-0001",
        title: "Mock Scenario",
        structuralOverview: "Mock structure",
        generalFlowDescription: "Mock flow",
        stepNarratives: [
          {
            sequence: 1,
            messageId: "msg-1",
            title: "Mock Step 1",
            businessMeaning: "Meaning 1",
            structuralContext: "Context 1",
            behavior: "Behavior 1"
          }
        ]
      }
    };
    scenarioNarrativeRepository.preloadData(mockBundle);
    const loaded = scenarioNarrativeRepository.getById("RAIA-BS-0001");
    expect(loaded).toBeDefined();
    expect((loaded as any)?.title).toBe("Mock Scenario");

    const all = scenarioNarrativeRepository.getAll();
    expect(all.length).toBe(1);
  });
});
