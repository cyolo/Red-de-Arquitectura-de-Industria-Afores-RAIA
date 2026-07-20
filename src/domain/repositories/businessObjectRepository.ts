import objectsData from "../../data/business-object-model/business-objects.json";
import attributesData from "../../data/business-object-model/attributes.json";
import identifiersData from "../../data/business-object-model/identifiers.json";
import relationshipsData from "../../data/business-object-model/relationships.json";
import invariantsData from "../../data/business-object-model/invariants.json";
import codeListsData from "../../data/business-object-model/code-lists.json";
import sdsMappingsData from "../../data/business-object-model/service-domain-object-mappings.json";
import scenariosMappingsData from "../../data/business-object-model/scenario-object-mappings.json";
import controlRecordsMappingsData from "../../data/business-object-model/control-record-object-mappings.json";
import gapsData from "../../data/business-object-model/business-object-gaps.json";

import {
  CanonicalBusinessObject,
  BusinessObjectAttribute,
  BusinessObjectIdentifier,
  BusinessObjectRelationship,
  BusinessObjectInvariant,
  BusinessCodeList,
  ServiceDomainBusinessObjectMapping,
  ScenarioBusinessObjectMapping,
  ControlRecordBusinessObjectMapping,
  BusinessObjectGap
} from "../types/businessObjectTypes";

export function getBusinessObjects(): CanonicalBusinessObject[] {
  return objectsData as CanonicalBusinessObject[];
}

export function getBusinessObjectById(id: string): CanonicalBusinessObject | undefined {
  return getBusinessObjects().find((o) => o.id === id);
}

export function getBusinessObjectBySlug(slug: string): CanonicalBusinessObject | undefined {
  return getBusinessObjects().find((o) => o.slug === slug);
}

export function getBusinessObjectAttributes(): BusinessObjectAttribute[] {
  return attributesData as BusinessObjectAttribute[];
}

export function getAttributesForBusinessObject(boId: string): BusinessObjectAttribute[] {
  return getBusinessObjectAttributes().filter((a) => a.businessObjectId === boId);
}

export function getBusinessObjectIdentifiers(): BusinessObjectIdentifier[] {
  return identifiersData as BusinessObjectIdentifier[];
}

export function getIdentifiersForBusinessObject(boId: string): BusinessObjectIdentifier[] {
  return getBusinessObjectIdentifiers().filter((i) => i.businessObjectId === boId);
}

export function getBusinessObjectRelationships(): BusinessObjectRelationship[] {
  return relationshipsData as BusinessObjectRelationship[];
}

export function getRelationshipsForBusinessObject(boId: string): BusinessObjectRelationship[] {
  return getBusinessObjectRelationships().filter(
    (r) => r.sourceBusinessObjectId === boId || r.targetBusinessObjectId === boId
  );
}

export function getBusinessObjectInvariants(): BusinessObjectInvariant[] {
  return invariantsData as BusinessObjectInvariant[];
}

export function getInvariantsForBusinessObject(boId: string): BusinessObjectInvariant[] {
  return getBusinessObjectInvariants().filter((i) => i.businessObjectId === boId);
}

export function getCodeLists(): BusinessCodeList[] {
  return codeListsData as BusinessCodeList[];
}

export function getBusinessObjectsForServiceDomain(sdId: string): CanonicalBusinessObject[] {
  const objectIds = new Set<string>();
  (sdsMappingsData as ServiceDomainBusinessObjectMapping[]).forEach((m) => {
    if (m.serviceDomainId === sdId) objectIds.add(m.businessObjectId);
  });
  return getBusinessObjects().filter((o) => objectIds.has(o.id));
}

export function getBusinessObjectsForScenario(scenId: string): CanonicalBusinessObject[] {
  const objectIds = new Set<string>();
  (scenariosMappingsData as ScenarioBusinessObjectMapping[]).forEach((m) => {
    if (m.businessScenarioId === scenId) objectIds.add(m.businessObjectId);
  });
  return getBusinessObjects().filter((o) => objectIds.has(o.id));
}

export function getBusinessObjectsForControlRecord(crId: string): CanonicalBusinessObject[] {
  const objectIds = new Set<string>();
  (controlRecordsMappingsData as ControlRecordBusinessObjectMapping[]).forEach((m) => {
    if (m.controlRecordId === crId) objectIds.add(m.businessObjectId);
  });
  return getBusinessObjects().filter((o) => objectIds.has(o.id));
}

export function getServiceDomainsForBusinessObject(boId: string): ServiceDomainBusinessObjectMapping[] {
  return (sdsMappingsData as ServiceDomainBusinessObjectMapping[]).filter(
    (m) => m.businessObjectId === boId
  );
}

export function getScenariosForBusinessObject(boId: string): ScenarioBusinessObjectMapping[] {
  return (scenariosMappingsData as ScenarioBusinessObjectMapping[]).filter(
    (m) => m.businessObjectId === boId
  );
}

export function getControlRecordsForBusinessObject(boId: string): ControlRecordBusinessObjectMapping[] {
  return (controlRecordsMappingsData as ControlRecordBusinessObjectMapping[]).filter(
    (m) => m.businessObjectId === boId
  );
}

export function getBusinessObjectGaps(): BusinessObjectGap[] {
  return gapsData as BusinessObjectGap[];
}

// Graph analysis functions
export function getObjectDependencyGraph(boId: string): {
  nodes: Array<{ id: string; name: string }>;
  edges: Array<{ source: string; target: string; type: string }>;
} {
  const nodes: Array<{ id: string; name: string }> = [];
  const edges: Array<{ source: string; target: string; type: string }> = [];
  const visited = new Set<string>();

  function traverse(id: string) {
    if (visited.has(id)) return;
    visited.add(id);

    const bo = getBusinessObjectById(id);
    if (!bo) return;
    nodes.push({ id: bo.id, name: bo.nameEs });

    const relationships = getBusinessObjectRelationships().filter(
      (r) => r.sourceBusinessObjectId === id
    );

    relationships.forEach((r) => {
      edges.push({ source: r.sourceBusinessObjectId, target: r.targetBusinessObjectId, type: r.relationshipType });
      traverse(r.targetBusinessObjectId);
    });
  }

  traverse(boId);
  return { nodes, edges };
}

export function getUpstreamObjects(boId: string): string[] {
  // Returns list of IDs this object depends on (where target === boId)
  return getBusinessObjectRelationships()
    .filter((r) => r.targetBusinessObjectId === boId)
    .map((r) => r.sourceBusinessObjectId);
}

export function getDownstreamObjects(boId: string): string[] {
  // Returns list of IDs that depend on this object (where source === boId)
  return getBusinessObjectRelationships()
    .filter((r) => r.sourceBusinessObjectId === boId)
    .map((r) => r.targetBusinessObjectId);
}

export function getObjectImpactAnalysis(boId: string): {
  impactScore: "low" | "medium" | "high" | "systemic";
  impactedObjectIds: string[];
} {
  const downstream = new Set<string>();
  const queue = [boId];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const children = getDownstreamObjects(current);
    children.forEach((c) => {
      if (!downstream.has(c)) {
        downstream.add(c);
        queue.push(c);
      }
    });
  }

  const list = Array.from(downstream);
  let impactScore: "low" | "medium" | "high" | "systemic" = "low";
  if (list.length > 10) impactScore = "systemic";
  else if (list.length > 5) impactScore = "high";
  else if (list.length > 2) impactScore = "medium";

  return { impactScore, impactedObjectIds: list };
}

export function getDuplicateObjectCandidates(): Array<{ objectA: string; objectB: string; score: number }> {
  // Simple heuristic searching for alias matches or very similar name strings
  const objects = getBusinessObjects();
  const candidates: Array<{ objectA: string; objectB: string; score: number }> = [];

  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const a = objects[i];
      const b = objects[j];
      
      // If sharing any alias
      const sharedAliases = a.aliases.filter((alias) => b.aliases.includes(alias));
      if (sharedAliases.length > 0) {
        candidates.push({ objectA: a.id, objectB: b.id, score: 90 });
      } else if (a.nameEs.toLowerCase() === b.nameEs.toLowerCase()) {
        candidates.push({ objectA: a.id, objectB: b.id, score: 100 });
      }
    }
  }

  return candidates;
}

export function getAliasConflicts(): Array<{ alias: string; objectIds: string[] }> {
  // Alias assigned to two different objects
  const aliasMap = new Map<string, string[]>();
  getBusinessObjects().forEach((o) => {
    o.aliases.forEach((alias) => {
      const clean = alias.toLowerCase().trim();
      if (!aliasMap.has(clean)) aliasMap.set(clean, []);
      aliasMap.get(clean)!.push(o.id);
    });
  });

  const conflicts: Array<{ alias: string; objectIds: string[] }> = [];
  aliasMap.forEach((ids, alias) => {
    if (ids.length > 1) conflicts.push({ alias, objectIds: ids });
  });

  return conflicts;
}

export function getUnmappedBusinessObjects(): string[] {
  const mapped = new Set<string>();
  (sdsMappingsData as ServiceDomainBusinessObjectMapping[]).forEach((m) => mapped.add(m.businessObjectId));
  (scenariosMappingsData as ScenarioBusinessObjectMapping[]).forEach((m) => mapped.add(m.businessObjectId));
  (controlRecordsMappingsData as ControlRecordBusinessObjectMapping[]).forEach((m) => mapped.add(m.businessObjectId));
  
  return getBusinessObjects()
    .filter((o) => !mapped.has(o.id))
    .map((o) => o.id);
}
