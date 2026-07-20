import { create } from "zustand";
import { ReferenceArtifactRef } from "../../../domain/types/referenceModelTypes";

export type RMTabType = "resumen" | "viewpoints" | "map" | "traceability" | "impact" | "coverage" | "gaps";

interface ReferenceModelStoreState {
  activeTab: RMTabType;
  selectedViewpointId: string | null;
  selectedArtifactRef: ReferenceArtifactRef | null;
  activeLayers: string[];
  detailLevel: "executive" | "domain" | "service" | "detailed";
  depth: number;
  searchQuery: string;
  fullscreen: boolean;

  setActiveTab: (tab: RMTabType) => void;
  setSelectedViewpointId: (id: string | null) => void;
  setSelectedArtifactRef: (ref: ReferenceArtifactRef | null) => void;
  setActiveLayers: (layers: string[]) => void;
  setDetailLevel: (level: "executive" | "domain" | "service" | "detailed") => void;
  setDepth: (depth: number) => void;
  setSearchQuery: (query: string) => void;
  setFullscreen: (fullscreen: boolean) => void;
  resetSelections: () => void;
}

export const useReferenceModelStore = create<ReferenceModelStoreState>((set) => ({
  activeTab: "resumen",
  selectedViewpointId: "RAIA-RMV-002",
  selectedArtifactRef: { artifactType: "business-object", artifactId: "RAIA-BO-0005" },
  activeLayers: ["ecosystem", "value-stream", "service-landscape", "information", "control-state", "regulation-control"],
  detailLevel: "service",
  depth: 2,
  searchQuery: "",
  fullscreen: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedViewpointId: (id) => set({ selectedViewpointId: id }),
  setSelectedArtifactRef: (ref) => set({ selectedArtifactRef: ref }),
  setActiveLayers: (layers) => set({ activeLayers: layers }),
  setDetailLevel: (level) => set({ detailLevel: level }),
  setDepth: (depth) => set({ depth }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFullscreen: (fullscreen) => set({ fullscreen }),

  resetSelections: () =>
    set({
      selectedViewpointId: "RAIA-RMV-002",
      selectedArtifactRef: { artifactType: "business-object", artifactId: "RAIA-BO-0005" },
      activeLayers: ["ecosystem", "value-stream", "service-landscape", "information", "control-state", "regulation-control"],
      detailLevel: "service",
      depth: 2,
      searchQuery: "",
      fullscreen: false
    })
}));
