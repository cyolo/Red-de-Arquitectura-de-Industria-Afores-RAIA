import domainsData from "../../data/information-architecture/information-domains.json";
import conceptsData from "../../data/information-architecture/information-concepts.json";
import businessObjectsData from "../../data/information-architecture/business-objects.json";
import attributesData from "../../data/information-architecture/information-attributes.json";
import assetsData from "../../data/information-architecture/information-assets.json";
import productsData from "../../data/information-architecture/data-products.json";
import assignmentsData from "../../data/information-architecture/ownership-assignments.json";
import lineageData from "../../data/information-architecture/lineage-edges.json";
import qualityRulesData from "../../data/information-architecture/quality-rules.json";
import classificationsData from "../../data/information-architecture/classifications.json";
import lifecyclePoliciesData from "../../data/information-architecture/lifecycle-policies.json";
import retentionPoliciesData from "../../data/information-architecture/retention-policies.json";
import gapsData from "../../data/information-architecture/information-architecture-gaps.json";

import {
  InformationDomain,
  InformationConcept,
  CanonicalBusinessObject,
  InformationAttribute,
  InformationAsset,
  DataProduct,
  InformationOwnershipAssignment,
  InformationLineageEdge,
  InformationQualityRule,
  InformationClassification,
  InformationLifecyclePolicy,
  InformationRetentionPolicy
} from "../types/informationArchitectureTypes";

export function getInformationDomains(): InformationDomain[] {
  return domainsData as InformationDomain[];
}

export function getInformationDomainById(id: string): InformationDomain | undefined {
  return getInformationDomains().find((d) => d.id === id);
}

export function getInformationConcepts(): InformationConcept[] {
  return conceptsData as InformationConcept[];
}

export function getInformationConceptById(id: string): InformationConcept | undefined {
  return getInformationConcepts().find((c) => c.id === id);
}

export function getCanonicalBusinessObjects(): CanonicalBusinessObject[] {
  return businessObjectsData as CanonicalBusinessObject[];
}

export function getCanonicalBusinessObjectById(id: string): CanonicalBusinessObject | undefined {
  return getCanonicalBusinessObjects().find((o) => o.id === id);
}

export function getInformationAttributes(): InformationAttribute[] {
  return attributesData as InformationAttribute[];
}

export function getInformationAssets(): InformationAsset[] {
  return assetsData as InformationAsset[];
}

export function getDataProducts(): DataProduct[] {
  return productsData as DataProduct[];
}

export function getOwnershipAssignments(): InformationOwnershipAssignment[] {
  return assignmentsData as InformationOwnershipAssignment[];
}

export function getLineageEdges(): InformationLineageEdge[] {
  return lineageData as InformationLineageEdge[];
}

export function getQualityRules(): InformationQualityRule[] {
  return qualityRulesData as InformationQualityRule[];
}

export function getInformationClassifications(): InformationClassification[] {
  return classificationsData as InformationClassification[];
}

export function getLifecyclePolicies(): InformationLifecyclePolicy[] {
  return lifecyclePoliciesData as InformationLifecyclePolicy[];
}

export function getRetentionPolicies(): InformationRetentionPolicy[] {
  return retentionPoliciesData as InformationRetentionPolicy[];
}

export function getInformationArchitectureGaps(): any[] {
  return gapsData;
}

// Navigation mapping helpers
export function getBusinessObjectsForServiceDomain(sdId: string): CanonicalBusinessObject[] {
  return getCanonicalBusinessObjects().filter(
    (o) =>
      o.producerServiceDomainIds.includes(sdId) ||
      o.consumerServiceDomainIds.includes(sdId) ||
      o.authoritativeServiceDomainIds.includes(sdId)
  );
}

export function getServiceDomainsForBusinessObject(boId: string): {
  producers: string[];
  consumers: string[];
  authoritatives: string[];
} {
  const bo = getCanonicalBusinessObjectById(boId);
  if (!bo) return { producers: [], consumers: [], authoritatives: [] };
  return {
    producers: bo.producerServiceDomainIds,
    consumers: bo.consumerServiceDomainIds,
    authoritatives: bo.authoritativeServiceDomainIds
  };
}

export function getLineageForBusinessObject(boId: string): InformationLineageEdge[] {
  return getLineageEdges().filter((e) => e.businessObjectIds.includes(boId));
}

export function getOwnersForInformationDomain(domainId: string): InformationOwnershipAssignment[] {
  return getOwnershipAssignments().filter(
    (a) => a.targetType === "information-domain" && a.targetId === domainId
  );
}

export function getScenariosForBusinessObject(boId: string): string[] {
  const bo = getCanonicalBusinessObjectById(boId);
  return bo ? bo.businessScenarioIds : [];
}

export function getRegulatoryMappingsForBusinessObject(boId: string): string[] {
  const bo = getCanonicalBusinessObjectById(boId);
  return bo ? bo.regulatoryMappingIds : [];
}
