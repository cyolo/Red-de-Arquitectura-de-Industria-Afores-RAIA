import { create } from "zustand";

export type CRMTabType =
  | "resumen"
  | "catalogo"
  | "state-machine"
  | "transitions"
  | "operations"
  | "controls"
  | "scenarios"
  | "coverage"
  | "gaps";

interface ControlRecordState {
  activeTab: CRMTabType;
  selectedControlRecordId: string | null;
  selectedStateId: string | null;
  selectedTransitionId: string | null;
  simulationActive: boolean;
  currentSimulationStateId: string | null;
  searchQuery: string;

  setActiveTab: (tab: CRMTabType) => void;
  setSelectedControlRecordId: (id: string | null) => void;
  setSelectedStateId: (id: string | null) => void;
  setSelectedTransitionId: (id: string | null) => void;
  setSimulationActive: (active: boolean) => void;
  setCurrentSimulationStateId: (stateId: string | null) => void;
  setSearchQuery: (query: string) => void;
  resetSelections: () => void;
}

export const useControlRecordStore = create<ControlRecordState>((set) => ({
  activeTab: "resumen",
  selectedControlRecordId: "RAIA-CRM-001",
  selectedStateId: null,
  selectedTransitionId: null,
  simulationActive: false,
  currentSimulationStateId: null,
  searchQuery: "",

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedControlRecordId: (id) =>
    set({
      selectedControlRecordId: id,
      selectedStateId: null,
      selectedTransitionId: null,
      simulationActive: false,
      currentSimulationStateId: null
    }),
  setSelectedStateId: (id) => set({ selectedStateId: id }),
  setSelectedTransitionId: (id) => set({ selectedTransitionId: id }),
  setSimulationActive: (active) => set({ simulationActive: active }),
  setCurrentSimulationStateId: (stateId) => set({ currentSimulationStateId: stateId }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  resetSelections: () =>
    set({
      selectedControlRecordId: "RAIA-CRM-001",
      selectedStateId: null,
      selectedTransitionId: null,
      simulationActive: false,
      currentSimulationStateId: null,
      searchQuery: ""
    })
}));
