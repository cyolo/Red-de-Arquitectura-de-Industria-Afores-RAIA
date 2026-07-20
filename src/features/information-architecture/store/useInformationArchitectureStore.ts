import { create } from "zustand";

export type IATabType =
  | "resumen"
  | "dominios"
  | "conceptos"
  | "objetos"
  | "linaje"
  | "propiedad"
  | "calidad"
  | "clasificacion"
  | "impacto"
  | "gaps";

interface InformationArchitectureState {
  activeTab: IATabType;
  selectedDomainId: string | null;
  selectedConceptId: string | null;
  selectedObjectId: string | null;
  selectedAssetId: string | null;
  selectedDataProductId: string | null;
  selectedServiceDomainId: string | null;
  selectedScenarioId: string | null;
  selectedClassificationId: string | null;
  selectedOwnerId: string | null;
  selectedQualityDimension: string | null;
  selectedId: string | null; // Unified focus entity ID
  lineageDepth: number;
  searchQuery: string;

  setActiveTab: (tab: IATabType) => void;
  setSelectedDomainId: (id: string | null) => void;
  setSelectedConceptId: (id: string | null) => void;
  setSelectedObjectId: (id: string | null) => void;
  setSelectedAssetId: (id: string | null) => void;
  setSelectedDataProductId: (id: string | null) => void;
  setSelectedServiceDomainId: (id: string | null) => void;
  setSelectedScenarioId: (id: string | null) => void;
  setSelectedClassificationId: (id: string | null) => void;
  setSelectedOwnerId: (id: string | null) => void;
  setSelectedQualityDimension: (id: string | null) => void;
  setSelectedId: (id: string | null) => void;
  setLineageDepth: (depth: number) => void;
  setSearchQuery: (query: string) => void;
  resetSelections: () => void;
}

export const useInformationArchitectureStore = create<InformationArchitectureState>((set) => ({
  activeTab: "resumen",
  selectedDomainId: null,
  selectedConceptId: null,
  selectedObjectId: null,
  selectedAssetId: null,
  selectedDataProductId: null,
  selectedServiceDomainId: null,
  selectedScenarioId: null,
  selectedClassificationId: null,
  selectedOwnerId: null,
  selectedQualityDimension: null,
  selectedId: null,
  lineageDepth: 2,
  searchQuery: "",

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedDomainId: (id) => set({ selectedDomainId: id }),
  setSelectedConceptId: (id) => set({ selectedConceptId: id }),
  setSelectedObjectId: (id) => set({ selectedObjectId: id }),
  setSelectedAssetId: (id) => set({ selectedAssetId: id }),
  setSelectedDataProductId: (id) => set({ selectedDataProductId: id }),
  setSelectedServiceDomainId: (id) => set({ selectedServiceDomainId: id }),
  setSelectedScenarioId: (id) => set({ selectedScenarioId: id }),
  setSelectedClassificationId: (id) => set({ selectedClassificationId: id }),
  setSelectedOwnerId: (id) => set({ selectedOwnerId: id }),
  setSelectedQualityDimension: (id) => set({ selectedQualityDimension: id }),
  setSelectedId: (id) => set({ selectedId: id }),
  setLineageDepth: (depth) => set({ lineageDepth: depth }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  resetSelections: () => set({
    selectedDomainId: null,
    selectedConceptId: null,
    selectedObjectId: null,
    selectedAssetId: null,
    selectedDataProductId: null,
    selectedServiceDomainId: null,
    selectedScenarioId: null,
    selectedClassificationId: null,
    selectedOwnerId: null,
    selectedQualityDimension: null,
    selectedId: null,
    searchQuery: ""
  })
}));
