import {
  CapabilityDomain,
  BusinessCapability,
  CapabilityRelation,
  CapabilityServiceDomainMapping,
  CapabilityParticipantMapping,
  CapabilityAssessment,
  CapabilityGap
} from '../types/capabilityTypes';

// Static JSON imports to ensure zero server-client mismatch and eliminate 'fs' dependencies in browser context
import domainsData from "../../data/capability-map/capability-domains.json";
import capabilitiesData from "../../data/capability-map/capabilities.json";
import relationsData from "../../data/capability-map/capability-relations.json";
import mappingsData from "../../data/capability-map/capability-service-domain-mappings.json";
import participantMappingsData from "../../data/capability-map/capability-participant-mappings.json";
import assessmentsData from "../../data/capability-map/capability-assessments.json";
import gapsData from "../../data/capability-map/capability-gaps.json";

export const getCapabilityDomains = (): CapabilityDomain[] => domainsData as CapabilityDomain[];
export const getCapabilityDomainById = (id: string) => getCapabilityDomains().find(d => d.id === id);

export const getCapabilities = (): BusinessCapability[] => capabilitiesData as BusinessCapability[];
export const getCapabilityById = (id: string) => getCapabilities().find(c => c.id === id);
export const getCapabilityBySlug = (slug: string) => getCapabilities().find(c => c.slug === slug);
export const getChildCapabilities = (parentId: string) => getCapabilities().filter(c => c.parentCapabilityId === parentId);

export const getCapabilityRelations = (): CapabilityRelation[] => relationsData as CapabilityRelation[];
export const getCapabilityRelationsForCapability = (id: string) =>
  getCapabilityRelations().filter(r => r.sourceCapabilityId === id || r.targetCapabilityId === id);

export const getCapabilityServiceDomainMappings = (): CapabilityServiceDomainMapping[] => mappingsData as CapabilityServiceDomainMapping[];
export const getCapabilitiesForServiceDomain = (sdId: string) => {
  const mapList = getCapabilityServiceDomainMappings().filter(m => m.serviceDomainId === sdId);
  return mapList.map(m => getCapabilityById(m.capabilityId)).filter(Boolean) as BusinessCapability[];
};
export const getServiceDomainsForCapability = (id: string) => {
  return getCapabilityServiceDomainMappings().filter(m => m.capabilityId === id);
};

export const getCapabilityParticipantMappings = (): CapabilityParticipantMapping[] => participantMappingsData as CapabilityParticipantMapping[];
export const getCapabilitiesForParticipant = (pId: string) => {
  const mapList = getCapabilityParticipantMappings().filter(m => m.participantId === pId);
  return mapList.map(m => getCapabilityById(m.capabilityId)).filter(Boolean) as BusinessCapability[];
};

export const getCapabilityAssessments = (): CapabilityAssessment[] => assessmentsData as CapabilityAssessment[];
export const getAssessmentForCapability = (id: string) => getCapabilityAssessments().find(a => a.capabilityId === id);

export const getCapabilityGaps = (): CapabilityGap[] => gapsData as CapabilityGap[];

// Analytical helpers
export const getCapabilityHierarchy = () => {
  const L1Domains = getCapabilityDomains().filter(d => d.level === "L1");
  const caps = getCapabilities();
  return L1Domains.map(d => ({
    ...d,
    capabilities: caps.filter(c => c.capabilityDomainId === d.id && c.level === "L2").map(c => ({
      ...c,
      children: caps.filter(child => child.parentCapabilityId === c.id)
    }))
  }));
};

export const getCapabilityCoverage = () => {
  const caps = getCapabilities();
  const maps = getCapabilityServiceDomainMappings();
  const covered = caps.filter(c => maps.some(m => m.capabilityId === c.id));
  return {
    total: caps.length,
    covered: covered.length,
    percentage: caps.length > 0 ? Math.round((covered.length / caps.length) * 100) : 0
  };
};

export const getCapabilityImpactAnalysis = (id: string) => {
  const cap = getCapabilityById(id);
  if (!cap) return null;

  const children = getCapabilities().filter(c => c.parentCapabilityId === id);
  const relations = getCapabilityRelationsForCapability(id);
  const serviceDomains = getServiceDomainsForCapability(id);

  return {
    capability: cap,
    affectedChildrenCount: children.length,
    affectedRelationsCount: relations.length,
    affectedServiceDomainsCount: serviceDomains.length
  };
};
