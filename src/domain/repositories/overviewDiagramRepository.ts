import { OverviewDiagram } from "../types/overviewDiagramTypes";
import manifestData from "../../data/service-landscape/overview-diagrams/overview-diagram-manifest.json";
import ovd001 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-001.json";
import ovd002 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-002.json";
import ovd003 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-003.json";
import ovd004 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-004.json";
import ovd005 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-005.json";
import ovd006 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-006.json";
import ovd007 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-007.json";
import ovd008 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-008.json";
import ovd009 from "../../data/service-landscape/overview-diagrams/RAIA-OVD-009.json";

const diagrams: OverviewDiagram[] = [
  ovd001 as unknown as OverviewDiagram,
  ovd002 as unknown as OverviewDiagram,
  ovd003 as unknown as OverviewDiagram,
  ovd004 as unknown as OverviewDiagram,
  ovd005 as unknown as OverviewDiagram,
  ovd006 as unknown as OverviewDiagram,
  ovd007 as unknown as OverviewDiagram,
  ovd008 as unknown as OverviewDiagram,
  ovd009 as unknown as OverviewDiagram
];

export const getOverviewDiagramsManifest = () => {
  return manifestData;
};

export const getOverviewDiagrams = (): OverviewDiagram[] => {
  return diagrams;
};

export const getOverviewDiagramById = (id: string): OverviewDiagram | undefined => {
  return diagrams.find((d) => d.id === id);
};

export const getOverviewDiagramBySlug = (slug: string): OverviewDiagram | undefined => {
  return diagrams.find((d) => d.slug === slug);
};

export const getOverviewDiagramsByTheme = (theme: string): OverviewDiagram[] => {
  return diagrams.filter((d) => d.theme === theme);
};

export const getOverviewDiagramsForServiceDomain = (sdId: string): OverviewDiagram[] => {
  return diagrams.filter((d) =>
    d.nodes.some((n) => n.nodeType === "service-domain" && n.referenceId === sdId)
  );
};

export const getOverviewDiagramsForScenario = (scenarioId: string): OverviewDiagram[] => {
  // Checks manifest manifestData scenarioIds list
  const manifestMatch = manifestData.filter((m) => m.scenarioIds.includes(scenarioId));
  const ids = manifestMatch.map((m) => m.id);
  return diagrams.filter((d) => ids.includes(d.id));
};
