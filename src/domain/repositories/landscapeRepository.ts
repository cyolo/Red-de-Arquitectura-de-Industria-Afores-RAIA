import { BusinessArea, BusinessDomain, ServiceDomain, LandscapeRelation, BusinessScenario, RegulationReference } from "../types";

import raiaData from "../../data/raia-v14.0.json";
import relationsData from "../../data/relations-v14.0.json";
import regulationsData from "../../data/regulations-v14.0.json";
import scenariosData from "../../data/scenarios-v14.0.json";

export const getBusinessAreas = (): BusinessArea[] => {
  return raiaData.businessAreas as unknown as BusinessArea[];
};

export const getBusinessDomains = (): BusinessDomain[] => {
  return raiaData.businessDomains as unknown as BusinessDomain[];
};

export const getServiceDomains = (): ServiceDomain[] => {
  return raiaData.serviceDomains as unknown as ServiceDomain[];
};

export const getRelations = (): LandscapeRelation[] => {
  return relationsData as LandscapeRelation[];
};

export const getRegulations = (): RegulationReference[] => {
  return regulationsData as unknown as RegulationReference[];
};

export const getScenarios = (): BusinessScenario[] => {
  return scenariosData as unknown as BusinessScenario[];
};

export const getServiceDomainById = (id: string): ServiceDomain | undefined => {
  return getServiceDomains().find((sd) => sd.id === id);
};

export const getServiceDomainBySlug = (slug: string): ServiceDomain | undefined => {
  return getServiceDomains().find((sd) => sd.slug === slug);
};

export const getBusinessDomainById = (id: string): BusinessDomain | undefined => {
  return getBusinessDomains().find((bd) => bd.id === id);
};

export const getBusinessDomainBySlug = (slug: string): BusinessDomain | undefined => {
  return getBusinessDomains().find((bd) => bd.slug === slug);
};

export const getBusinessAreaById = (id: string): BusinessArea | undefined => {
  return getBusinessAreas().find((ba) => ba.id === id);
};

export const getBusinessAreaBySlug = (slug: string): BusinessArea | undefined => {
  return getBusinessAreas().find((ba) => ba.slug === slug);
};
