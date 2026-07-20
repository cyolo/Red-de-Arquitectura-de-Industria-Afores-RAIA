import { BusinessArea, BusinessDomain, ServiceDomain, LandscapeRelation, BusinessScenario, RegulationReference } from "../types";
import { z } from "zod";
import { LandscapeDataSchema, LandscapeRelationSchema, RegulationReferenceSchema, BusinessScenarioSchema } from "../schemas";

import raiaData from "../../data/raia-landscape-0.1.0.json";
import relationsData from "../../data/relations-0.1.0.json";
import scenariosData from "../../data/scenarios-0.1.0.json";

// Validate all static data files upon loading
const validatedLandscape = LandscapeDataSchema.parse(raiaData);
const validatedRelations = z.array(LandscapeRelationSchema).parse(relationsData);
const validatedScenarios = z.array(BusinessScenarioSchema).parse(scenariosData);

export const getBusinessAreas = (): BusinessArea[] => {
  return validatedLandscape.businessAreas as unknown as BusinessArea[];
};

export const getBusinessDomains = (): BusinessDomain[] => {
  return validatedLandscape.businessDomains as unknown as BusinessDomain[];
};

export const getServiceDomains = (): ServiceDomain[] => {
  return validatedLandscape.serviceDomains as unknown as ServiceDomain[];
};

export const getRelations = (): LandscapeRelation[] => {
  return validatedRelations as unknown as LandscapeRelation[];
};

/**
 * @deprecated Use getRegulatorySources from regulatoryRepository instead
 */
export const getRegulations = (): RegulationReference[] => {
  return [];
};

export const getScenarios = (): BusinessScenario[] => {
  return validatedScenarios as unknown as BusinessScenario[];
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

export const getScenarioById = (id: string): BusinessScenario | undefined => {
  return getScenarios().find((s) => s.id === id);
};

export const getServiceOperationById = (id: string): any | undefined => {
  for (const sd of getServiceDomains()) {
    if (sd.serviceOperations) {
      const op = (sd.serviceOperations as any[]).find((o) => o.id === id);
      if (op) return op;
    }
  }
  return undefined;
};
