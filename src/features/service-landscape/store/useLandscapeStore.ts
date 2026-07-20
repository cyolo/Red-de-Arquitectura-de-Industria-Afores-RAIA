import { create } from "zustand";

export interface LandscapeFilters {
  area?: string;
  domain?: string;
  actor?: string;
  status?: string;
  maturity?: string;
  tag?: string;
  valueStream?: string;
  controlType?: string;
  authority?: string;
  regulation?: string;
  layer?: string;
  coverage?: string;
  criticality?: string;
  regime?: string;
}

interface LandscapeState {
  selectedId: string | null;
  activeFilters: LandscapeFilters;
  searchQuery: string;
  showRelated: boolean;
  isSidebarOpen: boolean;
  zoomLevel: number;
  isSearchOpen: boolean;
  
  setSelectedId: (id: string | null) => void;
  setFilter: (key: keyof LandscapeFilters, value: string | undefined) => void;
  setFilters: (filters: LandscapeFilters) => void;
  clearFilters: () => void;
  setSearchQuery: (query: string) => void;
  setShowRelated: (show: boolean) => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setZoomLevel: (zoom: number) => void;
  setSearchOpen: (isOpen: boolean) => void;
  resetAll: () => void;
}

export const useLandscapeStore = create<LandscapeState>((set) => ({
  selectedId: null,
  activeFilters: {},
  searchQuery: "",
  showRelated: false,
  isSidebarOpen: false,
  zoomLevel: 1,
  isSearchOpen: false,

  setSelectedId: (id) => set({ selectedId: id, isSidebarOpen: !!id }),
  setFilter: (key, value) =>
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [key]: value === "" ? undefined : value,
      },
    })),
  setFilters: (filters) => set({ activeFilters: filters }),
  clearFilters: () => set({ activeFilters: {} }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setShowRelated: (show) => set({ showRelated: show }),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  setZoomLevel: (zoom) => set({ zoomLevel: zoom }),
  setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  resetAll: () =>
    set({
      selectedId: null,
      activeFilters: {},
      searchQuery: "",
      showRelated: false,
      isSidebarOpen: false,
      zoomLevel: 1,
      isSearchOpen: false,
    }),
}));
