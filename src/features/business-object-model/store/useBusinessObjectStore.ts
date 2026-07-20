import { create } from "zustand";

export type BOMTabType =
  | "resumen"
  | "catalogo"
  | "object-map"
  | "dictionary"
  | "relationships"
  | "service-domains"
  | "scenarios"
  | "impact"
  | "coverage"
  | "gaps";

interface BusinessObjectStoreState {
  activeTab: BOMTabType;
  selectedObjectId: string | null;
  selectedAttributeId: string | null;
  selectedRelationshipId: string | null;
  detailLevel: "domain" | "object" | "attribute";
  searchQuery: string;

  setActiveTab: (tab: BOMTabType) => void;
  setSelectedObjectId: (id: string | null) => void;
  setSelectedAttributeId: (id: string | null) => void;
  setSelectedRelationshipId: (id: string | null) => void;
  setDetailLevel: (level: "domain" | "object" | "attribute") => void;
  setSearchQuery: (query: string) => void;
  resetSelections: () => void;
}

export const useBusinessObjectStore = create<BusinessObjectStoreState>((set) => ({
  activeTab: "resumen",
  selectedObjectId: "RAIA-BO-0005",
  selectedAttributeId: null,
  selectedRelationshipId: null,
  detailLevel: "object",
  searchQuery: "",

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedObjectId: (id) =>
    set({
      selectedObjectId: id,
      selectedAttributeId: null,
      selectedRelationshipId: null
    }),
  setSelectedAttributeId: (id) => set({ selectedAttributeId: id }),
  setSelectedRelationshipId: (id) => set({ selectedRelationshipId: id }),
  setDetailLevel: (level) => set({ detailLevel: level }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  resetSelections: () =>
    set({
      selectedObjectId: "RAIA-BO-0005",
      selectedAttributeId: null,
      selectedRelationshipId: null,
      detailLevel: "object",
      searchQuery: ""
    })
}));
