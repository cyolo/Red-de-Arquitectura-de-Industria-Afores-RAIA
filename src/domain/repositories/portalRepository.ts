import { z } from "zod";
import { PortalModule, PortalRelease, ArchitectureArtifact } from "../types";
import { PortalModuleSchema, PortalReleaseSchema, ArchitectureArtifactSchema } from "../schemas";
import {
  getBusinessAreas,
  getBusinessDomains,
  getServiceDomains,
  getRelations,
  getScenarios,
} from "./landscapeRepository";
import {
  getRegulatorySources,
  getRegulatoryMappings,
  getRegulatoryGaps,
} from "./regulatoryRepository";
import { getCanonicalBusinessObjects } from "./informationArchitectureRepository";

import modulesData from "../../data/portal-modules.json";
import releasesData from "../../data/releases.json";
import artifactsData from "../../data/architecture-artifacts.json";
import baselineData from "../../data/regulatory/regulatory-baseline.json";

// Validate all static portal data files upon loading
const validatedModules = z.array(PortalModuleSchema).parse(modulesData);
const validatedReleases = z.array(PortalReleaseSchema).parse(releasesData);
const validatedArtifacts = z.array(ArchitectureArtifactSchema).parse(artifactsData);

export const getPortalModules = (): PortalModule[] => {
  return validatedModules as unknown as PortalModule[];
};

export const getPortalReleases = (): PortalRelease[] => {
  return validatedReleases as unknown as PortalRelease[];
};

export const getArchitectureArtifacts = (): ArchitectureArtifact[] => {
  return validatedArtifacts as unknown as ArchitectureArtifact[];
};

export const getPortalModuleBySlug = (slug: string): PortalModule | undefined => {
  return getPortalModules().find((m) => m.slug === slug);
};

export const getArchitectureMetrics = () => {
  const areas = getBusinessAreas();
  const domains = getBusinessDomains();
  const sds = getServiceDomains();
  const relations = getRelations();
  const scenarios = getScenarios();

  const regSources = getRegulatorySources();
  const regMappings = getRegulatoryMappings();
  const regGaps = getRegulatoryGaps();

  // count controls
  const controlsCount = sds.reduce((acc: number, sd: any) => acc + (sd.controls?.length || 0), 0);

  // unique business objects count
  const boNames = new Set<string>();
  sds.forEach((sd: any) => {
    sd.businessObjects?.forEach((bo: any) => {
      if (bo.name) boNames.add(bo.name.toLowerCase().trim());
    });
  });
  const canonicalBos = getCanonicalBusinessObjects();
  const businessObjectsCount = Math.max(boNames.size, canonicalBos.length);

  // by status
  const byStatus: Record<string, number> = {
    draft: 0,
    proposed: 0,
    validated: 0,
    active: 0,
    deprecated: 0,
  };
  sds.forEach((sd: any) => {
    const status = sd.status || "draft";
    if (byStatus[status] !== undefined) {
      byStatus[status]++;
    }
  });

  // by maturity
  const byMaturity: Record<string, number> = {
    conceptual: 0,
    defined: 0,
    validated: 0,
    adopted: 0,
  };
  sds.forEach((sd: any) => {
    const maturity = sd.maturity || "conceptual";
    if (byMaturity[maturity] !== undefined) {
      byMaturity[maturity]++;
    }
  });

  // domains without regulation (regulated core domains without mappings)
  const requiresMappingList = sds.filter((sd: any) => {
    if (sd.regulatoryCoverage === "not-applicable") return false;
    if (sd.capabilityType === "raia-governance") return false;
    if (sd.landscapeLayer === "raia-governance-overlay") return false;
    if (sd.capabilityType === "enterprise-enabler" && sd.regulatoryNonApplicabilityReason) return false;
    return true;
  });

  const domainsWithoutRegulation = requiresMappingList.filter((sd: any) => {
    const hasRegulatoryMappings = sd.regulatoryMappingIds && sd.regulatoryMappingIds.length > 0;
    const hasCanonicalMappings = regMappings.some(m => m.serviceDomainId === sd.id);
    return !hasRegulatoryMappings && !hasCanonicalMappings;
  }).length;

  // domains without relations
  const relationIds = new Set<string>();
  relations.forEach((r: any) => {
    relationIds.add(r.sourceId);
    relationIds.add(r.targetId);
  });
  const domainsWithoutRelations = sds.filter((sd: any) => !relationIds.has(sd.id)).length;

  // domains pending validation (status not validated and not active)
  const domainsPendingValidation = sds.filter((sd: any) => sd.status !== "validated" && sd.status !== "active").length;

  // Real field completeness calculation (P0-02)
  const optionalFields = ["aliases", "controls", "evidences", "nfrs", "kpis", "upstreamServiceDomainIds", "downstreamServiceDomainIds"];
  let totalOptionalChecked = 0;
  let filledOptionalFields = 0;

  sds.forEach((sd: any) => {
    optionalFields.forEach((field) => {
      totalOptionalChecked++;
      if (sd[field] && Array.isArray(sd[field]) && sd[field].length > 0) {
        filledOptionalFields++;
      } else if (sd[field] && typeof sd[field] === "string" && sd[field].trim() !== "") {
        filledOptionalFields++;
      }
    });
  });

  const fieldCompleteness = totalOptionalChecked > 0 ? Math.round((filledOptionalFields / totalOptionalChecked) * 100) : 0;

  // New regulatory metrics
  const sourcesCount = regSources.length;
  const mappingsCount = regMappings.length;
  const mappedSdsCount = sds.filter((sd: any) => {
    const hasMappings = sd.regulatoryMappingIds && sd.regulatoryMappingIds.length > 0;
    const hasCanonical = regMappings.some(m => m.serviceDomainId === sd.id);
    return hasMappings || hasCanonical;
  }).length;

  const reviewedSdsCount = sds.filter((sd: any) => {
    return sd.regulatoryValidationStatus === "legally-reviewed" || 
           sd.regulatoryValidationStatus === "partially-reviewed" ||
           sd.regulatoryValidationStatus === "architecture-reviewed";
  }).length;

  const pendingSourcesCount = regSources.filter(s => s.status === "pending-verification" || s.validationStatus === "pending").length;
  const supersededSourcesCount = regSources.filter(s => s.status === "superseded" || s.status === "abrogated" || s.status === "partially-superseded").length;
  const pendingMappingsCount = regMappings.filter(m => m.validationStatus === "pending").length;

  // Coverage calculation
  const requiresMappingCount = requiresMappingList.length;
  const withValidMappingCount = requiresMappingList.filter((sd: any) => {
    const hasMappings = sd.regulatoryMappingIds && sd.regulatoryMappingIds.length > 0;
    const hasCanonical = regMappings.some(m => m.serviceDomainId === sd.id && m.validationStatus !== "pending");
    return hasMappings || hasCanonical;
  }).length;

  const mappingCoveragePct = requiresMappingCount > 0 ? Math.round((withValidMappingCount / requiresMappingCount) * 100) : 0;

  return {
    businessAreas: areas.length,
    businessDomains: domains.length,
    serviceDomains: sds.length,
    relations: relations.length,
    scenarios: scenarios.length,
    regulations: sourcesCount,
    controls: controlsCount,
    businessObjects: businessObjectsCount,
    byStatus,
    byMaturity,
    domainsWithoutRegulation,
    domainsWithoutRelations,
    domainsPendingValidation,
    fieldCompleteness,
    
    // Extended regulatory stats
    sourcesCount,
    mappingsCount,
    mappedSdsCount,
    reviewedSdsCount,
    pendingSourcesCount,
    supersededSourcesCount,
    pendingMappingsCount,
    requiresMappingCount,
    withValidMappingCount,
    mappingCoveragePct,

    lastUpdatedAt: baselineData.auditDate || "2026-07-20",
    baselineVersion: baselineData.baselineVersion || "0.2.0"
  };
};


