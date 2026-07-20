import { create } from "zustand";

interface OverviewDiagramState {
  selectedDiagramId: string;
  selectedNodeId: string | null;
  selectedEdgeId: string | null;
  detailLevel: "macro" | "domain" | "service-domain";
  fullscreen: boolean;
  showRelations: boolean;
  showLegend: boolean;
  filterTheme: string | null;
  filterLevel: string | null;
  filterStatus: string | null;
  searchTerm: string;

  setSelectedDiagramId: (id: string) => void;
  setSelectedNodeId: (id: string | null) => void;
  setSelectedEdgeId: (id: string | null) => void;
  setDetailLevel: (level: "macro" | "domain" | "service-domain") => void;
  setFullscreen: (fullscreen: boolean) => void;
  setShowRelations: (show: boolean) => void;
  setShowLegend: (show: boolean) => void;
  setFilterTheme: (theme: string | null) => void;
  setFilterLevel: (level: string | null) => void;
  setFilterStatus: (status: string | null) => void;
  setSearchTerm: (term: string) => void;
  resetFilters: () => void;
}

export const useOverviewDiagramStore = create<OverviewDiagramState>((set) => ({
  selectedDiagramId: "RAIA-OVD-001",
  selectedNodeId: null,
  selectedEdgeId: null,
  detailLevel: "service-domain",
  fullscreen: false,
  showRelations: true,
  showLegend: true,
  filterTheme: null,
  filterLevel: null,
  filterStatus: null,
  searchTerm: "",

  setSelectedDiagramId: (id) =>
    set({
      selectedDiagramId: id,
      selectedNodeId: null,
      selectedEdgeId: null
    }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id, selectedEdgeId: null }),
  setSelectedEdgeId: (id) => set({ selectedEdgeId: id, selectedNodeId: null }),
  setDetailLevel: (level) => set({ detailLevel: level }),
  setFullscreen: (fullscreen) => set({ fullscreen }),
  setShowRelations: (show) => set({ showRelations: show }),
  setShowLegend: (show) => set({ showLegend: show }),
  setFilterTheme: (theme) => set({ filterTheme: theme }),
  setFilterLevel: (level) => set({ filterLevel: level }),
  setFilterStatus: (status) => set({ filterStatus: status }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  resetFilters: () =>
    set({
      filterTheme: null,
      filterLevel: null,
      filterStatus: null,
      searchTerm: ""
    })
}));
