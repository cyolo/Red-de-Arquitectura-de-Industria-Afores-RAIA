import modelData from "../../data/reference-model/reference-model.json";
import viewpointManifest from "../../data/reference-model/viewpoint-manifest.json";
import compositionRules from "../../data/reference-model/composition-rules.json";
import crossModelTraceability from "../../data/reference-model/cross-model-traceability.json";
import baselineData from "../../data/reference-model/reference-model-baseline.json";
import gapsData from "../../data/reference-model/reference-model-gaps.json";

// Import other repositories
import { getServiceDomainById, getBusinessDomainById, getBusinessAreaById, getScenarioById } from "./landscapeRepository";
import { getBusinessObjectById, getRelationshipsForBusinessObject } from "./businessObjectRepository";
import { getControlRecordById } from "./controlRecordRepository";
import { getRegulatorySourceById } from "./regulatoryRepository";
import { getInformationDomainById } from "./informationArchitectureRepository";
import { getIndustryParticipantById } from "./participantRepository";
import { getOverviewDiagramById } from "./overviewDiagramRepository";

import {
  IndustryReferenceModel,
  ReferenceModelViewpoint,
  ReferenceArtifactRef,
  CrossModelTraceabilityRelation,
  ReferenceCompositionRule,
  ReferenceModelGap
} from "../types/referenceModelTypes";

export function getIndustryReferenceModel(): IndustryReferenceModel {
  return modelData as IndustryReferenceModel;
}

export function getReferenceModelViewpoints(): ReferenceModelViewpoint[] {
  return viewpointManifest as ReferenceModelViewpoint[];
}

export function getReferenceModelViewpointById(id: string): ReferenceModelViewpoint | undefined {
  return getReferenceModelViewpoints().find((v) => v.id === id);
}

export function getReferenceModelViewpointBySlug(slug: string): ReferenceModelViewpoint | undefined {
  return getReferenceModelViewpoints().find((v) => v.slug === slug);
}

export function resolveArtifactReference(ref: ReferenceArtifactRef): { id: string; name: string; type: string } | undefined {
  const { artifactType, artifactId } = ref;

  switch (artifactType) {
    case "participant": {
      const p = getIndustryParticipantById(artifactId);
      return p ? { id: p.id, name: p.name, type: "participant" } : undefined;
    }
    case "business-area": {
      const ba = getBusinessAreaById(artifactId);
      return ba ? { id: ba.id, name: ba.nameEs, type: "business-area" } : undefined;
    }
    case "business-domain": {
      const bd = getBusinessDomainById(artifactId);
      return bd ? { id: bd.id, name: bd.nameEs, type: "business-domain" } : undefined;
    }
    case "service-domain": {
      const sd = getServiceDomainById(artifactId);
      return sd ? { id: sd.id, name: sd.nameEs, type: "service-domain" } : undefined;
    }
    case "business-object": {
      const bo = getBusinessObjectById(artifactId);
      return bo ? { id: bo.id, name: bo.nameEs, type: "business-object" } : undefined;
    }
    case "control-record": {
      const cr = getControlRecordById(artifactId);
      return cr ? { id: cr.id, name: cr.name, type: "control-record" } : undefined;
    }
    case "business-scenario": {
      const bs = getScenarioById(artifactId);
      return bs ? { id: bs.id, name: bs.nameEs, type: "business-scenario" } : undefined;
    }
    case "regulatory-source": {
      const r = getRegulatorySourceById(artifactId);
      return r ? { id: r.id, name: r.name, type: "regulatory-source" } : undefined;
    }
    case "information-domain": {
      const id = getInformationDomainById(artifactId);
      return id ? { id: id.id, name: id.nameEs, type: "information-domain" } : undefined;
    }
    case "overview-diagram": {
      const od = getOverviewDiagramById(artifactId);
      return od ? { id: od.id, name: od.name, type: "overview-diagram" } : undefined;
    }
    default:
      return { id: artifactId, name: `${artifactType}: ${artifactId}`, type: artifactType };
  }
}

export function resolveArtifactReferences(refs: ReferenceArtifactRef[]) {
  return refs.map(resolveArtifactReference).filter(Boolean) as Array<{ id: string; name: string; type: string }>;
}

export function getCrossModelRelations(): CrossModelTraceabilityRelation[] {
  return crossModelTraceability as CrossModelTraceabilityRelation[];
}

export function getRelationsForArtifact(ref: ReferenceArtifactRef): CrossModelTraceabilityRelation[] {
  return getCrossModelRelations().filter(
    (r) =>
      (r.source.artifactId === ref.artifactId && r.source.artifactType === ref.artifactType) ||
      (r.target.artifactId === ref.artifactId && r.target.artifactType === ref.artifactType)
  );
}

export function getTraceabilityPath(source: ReferenceArtifactRef, target: ReferenceArtifactRef): CrossModelTraceabilityRelation[] {
  const relations = getCrossModelRelations();
  const path: CrossModelTraceabilityRelation[] = [];
  const visited = new Set<string>();

  function dfs(curr: ReferenceArtifactRef): boolean {
    const key = `${curr.artifactType}:${curr.artifactId}`;
    if (visited.has(key)) return false;
    visited.add(key);

    if (curr.artifactId === target.artifactId && curr.artifactType === target.artifactType) {
      return true;
    }

    const outgoing = relations.filter(
      (r) => r.source.artifactId === curr.artifactId && r.source.artifactType === curr.artifactType
    );

    for (const rel of outgoing) {
      path.push(rel);
      if (dfs(rel.target)) {
        return true;
      }
      path.pop();
    }

    return false;
  }

  dfs(source);
  return path;
}

export function getUpstreamTraceability(ref: ReferenceArtifactRef): ReferenceArtifactRef[] {
  return getCrossModelRelations()
    .filter((r) => r.target.artifactId === ref.artifactId && r.target.artifactType === ref.artifactType)
    .map((r) => r.source);
}

export function getDownstreamTraceability(ref: ReferenceArtifactRef): ReferenceArtifactRef[] {
  return getCrossModelRelations()
    .filter((r) => r.source.artifactId === ref.artifactId && r.source.artifactType === ref.artifactType)
    .map((r) => r.target);
}

export function getReferenceModelBaseline() {
  return baselineData;
}

export function getReferenceModelGaps(): ReferenceModelGap[] {
  return gapsData as ReferenceModelGap[];
}

// Composition functions
export function composeViewpoint(viewpointId: string): {
  nodes: Array<{ id: string; name: string; type: string; layerId: string }>;
  edges: Array<{ source: string; target: string; relationType: string }>;
} {
  const viewpoint = getReferenceModelViewpointById(viewpointId);
  if (!viewpoint) return { nodes: [], edges: [] };

  const nodes: Array<{ id: string; name: string; type: string; layerId: string }> = [];
  const edges: Array<{ source: string; target: string; relationType: string }> = [];

  const visitedRefs = new Set<string>();

  function addNodeAndRelations(ref: ReferenceArtifactRef) {
    const key = `${ref.artifactType}:${ref.artifactId}`;
    if (visitedRefs.has(key)) return;
    visitedRefs.add(key);

    const resolved = resolveArtifactReference(ref);
    if (!resolved) return;

    // Map artifactType to ReferenceModelLayerId
    let layerId = "ecosystem";
    if (ref.artifactType === "business-area" || ref.artifactType === "business-domain") layerId = "value-stream";
    else if (ref.artifactType === "service-domain") layerId = "service-landscape";
    else if (ref.artifactType === "business-object") layerId = "information";
    else if (ref.artifactType === "control-record") layerId = "control-state";
    else if (ref.artifactType === "business-scenario") layerId = "business-behavior";
    else if (ref.artifactType === "regulatory-source") layerId = "regulation-control";

    nodes.push({
      id: resolved.id,
      name: resolved.name,
      type: resolved.type,
      layerId
    });

    // Add relations
    const relations = getRelationsForArtifact(ref);
    relations.forEach((rel) => {
      edges.push({
        source: rel.source.artifactId,
        target: rel.target.artifactId,
        relationType: rel.relationType
      });
      // Recursively add target node if needed
      if (rel.source.artifactId === ref.artifactId) {
        addNodeAndRelations(rel.target);
      } else {
        addNodeAndRelations(rel.source);
      }
    });
  }

  viewpoint.rootArtifactRefs.forEach(addNodeAndRelations);

  return { nodes, edges };
}

export function composeLayeredView() {
  // Return all relations structured by layers
  return getCrossModelRelations();
}

export function composeImpactView(artifactId: string, changeType: string) {
  const downstreamRefs = getDownstreamTraceability({ artifactType: "business-object", artifactId });
  return {
    impactScore: downstreamRefs.length > 5 ? "high" : "medium",
    impactedCount: downstreamRefs.length,
    impactedRefs: downstreamRefs
  };
}
