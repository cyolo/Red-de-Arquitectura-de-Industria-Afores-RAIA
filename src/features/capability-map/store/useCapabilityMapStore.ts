import { create } from "zustand";

export type CapabilityTab =
  | "resumen"
  | "mapa"
  | "jerarquia"
  | "relaciones"
  | "trazabilidad"
  | "evaluacion"
  | "cobertura"
  | "impacto"
  | "gaps";

export type CapabilityOverlay =
  | "none"
  | "maturity"
  | "criticality"
  | "capabilityType"
  | "investmentPriority"
  | "performance"
  | "health"
  | "coverage";

export interface CapabilityFilters {
  status: string;
  level: string;
  capabilityType: string;
  criticality: string;
  regime: string;
  search: string;
  serviceDomainId: string;
  participantId: string;
  regulatorySource: string;
}

interface CapabilityMapState {
  selectedCapabilityId: string | null;
  activeTab: CapabilityTab;
  activeOverlay: CapabilityOverlay;
  filters: CapabilityFilters;
  isFullscreen: boolean;

  setSelectedCapabilityId: (id: string | null) => void;
  setActiveTab: (tab: CapabilityTab) => void;
  setActiveOverlay: (overlay: CapabilityOverlay) => void;
  setFilters: (filters: Partial<CapabilityFilters>) => void;
  setIsFullscreen: (val: boolean) => void;
  resetFilters: () => void;
}

const initialFilters: CapabilityFilters = {
  status: "",
  level: "",
  capabilityType: "",
  criticality: "",
  regime: "",
  search: "",
  serviceDomainId: "",
  participantId: "",
  regulatorySource: ""
};

export const useCapabilityMapStore = create<CapabilityMapState>((set) => ({
  selectedCapabilityId: null,
  activeTab: "resumen",
  activeOverlay: "none",
  filters: initialFilters,
  isFullscreen: false,

  setSelectedCapabilityId: (id) => set({ selectedCapabilityId: id }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setActiveOverlay: (overlay) => set({ activeOverlay: overlay }),
  setFilters: (newFilters) =>
    set((state) => ({ filters: { ...state.filters, ...newFilters } })),
  setIsFullscreen: (val) => set({ isFullscreen: val }),
  resetFilters: () => set({ filters: initialFilters })
}));
