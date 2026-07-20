import { describe, test, expect, vi, beforeEach } from 'vitest';
import * as landscapeRepo from '../../src/domain/repositories/landscapeRepository';
import { getArchitectureMetrics } from '../../src/domain/repositories/portalRepository';

// Mock landscapeRepository functions
vi.mock('../../src/domain/repositories/landscapeRepository', () => {
  return {
    getBusinessAreas: vi.fn(),
    getBusinessDomains: vi.fn(),
    getServiceDomains: vi.fn(),
    getRelations: vi.fn(),
    getRegulations: vi.fn(),
    getScenarios: vi.fn(),
  };
});

describe('Dashboard Metrics Calculations Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Calculate metrics with 0 Service Domains', () => {
    vi.mocked(landscapeRepo.getBusinessAreas).mockReturnValue([]);
    vi.mocked(landscapeRepo.getBusinessDomains).mockReturnValue([]);
    vi.mocked(landscapeRepo.getServiceDomains).mockReturnValue([]);
    vi.mocked(landscapeRepo.getRelations).mockReturnValue([]);
    vi.mocked(landscapeRepo.getRegulations).mockReturnValue([]);
    vi.mocked(landscapeRepo.getScenarios).mockReturnValue([]);

    const metrics = getArchitectureMetrics();

    expect(metrics.businessAreas).toBe(0);
    expect(metrics.businessDomains).toBe(0);
    expect(metrics.serviceDomains).toBe(0);
    expect(metrics.relations).toBe(0);
    expect(metrics.scenarios).toBe(0);
    expect(metrics.regulations).toBe(0);
    expect(metrics.controls).toBe(0);
    expect(metrics.businessObjects).toBe(0);
    expect(metrics.fieldCompleteness).toBe(0);
    expect(metrics.domainsWithoutRegulation).toBe(0);
    expect(metrics.domainsWithoutRelations).toBe(0);
    expect(metrics.domainsPendingValidation).toBe(0);
  });

  test('Calculate metrics with 100% active and complete Service Domains', () => {
    vi.mocked(landscapeRepo.getBusinessAreas).mockReturnValue([
      { id: 'RAIA-BA-001', nameEs: 'Area 1' } as any
    ]);
    vi.mocked(landscapeRepo.getBusinessDomains).mockReturnValue([
      { id: 'RAIA-BD-001', businessAreaId: 'RAIA-BA-001', nameEs: 'Domain 1' } as any
    ]);

    const mockSd = {
      id: 'RAIA-SD-001',
      businessAreaId: 'RAIA-BA-001',
      businessDomainId: 'RAIA-BD-001',
      nameEs: 'SD 1',
      status: 'active',
      maturity: 'adopted',
      focusObject: { name: 'Object A', description: 'Desc A' },
      businessObjects: [{ name: 'Object A', role: 'focus' }],
      controls: [{ id: 'CTL-1', name: 'Control 1', description: 'desc' }],
      regulations: [{ id: 'REG-1', name: 'Reg 1', authority: 'CONSAR', mandatory: true, validationStatus: 'official' }],
      evidences: ['Evidence 1'],
      aliases: ['Alias 1'],
      nfrs: [{ category: 'Perf', statement: 'fast' }],
      kpis: [{ name: 'KPI 1', description: 'kpi desc' }],
      upstreamServiceDomainIds: ['RAIA-SD-002'],
      downstreamServiceDomainIds: ['RAIA-SD-003'],
    };

    vi.mocked(landscapeRepo.getServiceDomains).mockReturnValue([mockSd] as any);
    vi.mocked(landscapeRepo.getRelations).mockReturnValue([
      { id: 'REL-1', sourceId: 'RAIA-SD-001', targetId: 'RAIA-SD-002', type: 'depends-on' }
    ] as any);
    vi.mocked(landscapeRepo.getRegulations).mockReturnValue([{ id: 'REG-1' }] as any);
    vi.mocked(landscapeRepo.getScenarios).mockReturnValue([] as any);

    const metrics = getArchitectureMetrics();

    expect(metrics.serviceDomains).toBe(1);
    expect(metrics.byStatus.active).toBe(1);
    expect(metrics.byMaturity.adopted).toBe(1);
    expect(metrics.fieldCompleteness).toBe(100);
    expect(metrics.domainsWithoutRegulation).toBe(0);
    expect(metrics.domainsWithoutRelations).toBe(0);
    expect(metrics.domainsPendingValidation).toBe(0);
  });

  test('Calculate metrics with missing optional fields, regulations and relations', () => {
    vi.mocked(landscapeRepo.getBusinessAreas).mockReturnValue([]);
    vi.mocked(landscapeRepo.getBusinessDomains).mockReturnValue([]);

    const mockSd = {
      id: 'RAIA-SD-001',
      businessAreaId: 'RAIA-BA-001',
      businessDomainId: 'RAIA-BD-001',
      nameEs: 'SD 1',
      status: 'draft',
      maturity: 'conceptual',
      focusObject: { name: 'Object A', description: 'Desc A' },
      businessObjects: [],
      controls: [],
      regulations: [],
      evidences: [],
      aliases: [],
      nfrs: [],
      kpis: [],
    };

    vi.mocked(landscapeRepo.getServiceDomains).mockReturnValue([mockSd] as any);
    vi.mocked(landscapeRepo.getRelations).mockReturnValue([]);
    vi.mocked(landscapeRepo.getRegulations).mockReturnValue([]);
    vi.mocked(landscapeRepo.getScenarios).mockReturnValue([]);

    const metrics = getArchitectureMetrics();

    expect(metrics.serviceDomains).toBe(1);
    expect(metrics.byStatus.draft).toBe(1);
    expect(metrics.byMaturity.conceptual).toBe(1);
    expect(metrics.fieldCompleteness).toBe(0);
    expect(metrics.domainsWithoutRegulation).toBe(1);
    expect(metrics.domainsWithoutRelations).toBe(1);
    expect(metrics.domainsPendingValidation).toBe(1);
  });
});
