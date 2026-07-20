import { create } from "zustand";

export type SnippetTabType =
  | "resumen"
  | "catalog"
  | "diagram"
  | "steps"
  | "bindings"
  | "variants"
  | "usage"
  | "impact"
  | "coverage"
  | "gaps";

interface ScenarioSnippetStoreState {
  activeTab: SnippetTabType;
  selectedSnippetId: string | null;
  selectedVersion: string;
  selectedVariantId: string | null;
  selectedStepId: string | null;
  searchQuery: string;
  fullscreen: boolean;

  setActiveTab: (tab: SnippetTabType) => void;
  setSelectedSnippetId: (id: string | null) => void;
  setSelectedVersion: (version: string) => void;
  setSelectedVariantId: (id: string | null) => void;
  setSelectedStepId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setFullscreen: (fullscreen: boolean) => void;
  resetSelections: () => void;
}

export const useScenarioSnippetStore = create<ScenarioSnippetStoreState>((set) => ({
  activeTab: "resumen",
  selectedSnippetId: "RAIA-SNP-0001",
  selectedVersion: "0.1.0",
  selectedVariantId: null,
  selectedStepId: null,
  searchQuery: "",
  fullscreen: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedSnippetId: (id) => set({ selectedSnippetId: id }),
  setSelectedVersion: (version) => set({ selectedVersion: version }),
  setSelectedVariantId: (id) => set({ selectedVariantId: id }),
  setSelectedStepId: (id) => set({ selectedStepId: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFullscreen: (fullscreen) => set({ fullscreen }),

  resetSelections: () =>
    set({
      selectedSnippetId: "RAIA-SNP-0001",
      selectedVersion: "0.1.0",
      selectedVariantId: null,
      selectedStepId: null,
      searchQuery: "",
      fullscreen: false
    })
}));
