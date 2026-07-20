import { create } from "zustand";
import { MatrixDimensionId, MatrixMeasureId, SavedMatrixView, MatrixConfiguration } from "../domain/matrixTypes";
import { LandscapeFilters } from "../../store/useLandscapeStore";

interface MatrixState {
  rowDimension: MatrixDimensionId;
  columnDimension: MatrixDimensionId;
  measure: MatrixMeasureId;
  normalize: boolean;
  includeEmptyRows: boolean;
  includeEmptyColumns: boolean;
  filters: LandscapeFilters & {
    serviceDomain?: string;
    capabilityType?: string;
    authority?: string;
    regulation?: string;
    regulatoryValidationStatus?: string;
    control?: string;
  };
  searchQuery: string;
  selectedCell: { rowId: string; columnId: string } | null;
  savedViews: SavedMatrixView[];

  setDimensions: (row: MatrixDimensionId, col: MatrixDimensionId) => void;
  setMeasure: (measure: MatrixMeasureId) => void;
  setFilters: (filters: LandscapeFilters) => void;
  setFilter: (key: string, value: string | undefined) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCell: (cell: { rowId: string; columnId: string } | null) => void;
  setNormalize: (normalize: boolean) => void;
  setIncludeEmptyRows: (include: boolean) => void;
  setIncludeEmptyColumns: (include: boolean) => void;
  
  loadSavedViews: () => void;
  saveView: (name: string, description?: string) => void;
  deleteView: (id: string) => void;
  resetAll: () => void;
  loadConfig: (config: Partial<MatrixConfiguration>) => void;
}

export const useMatrixStore = create<MatrixState>((set, get) => ({
  rowDimension: "business-area",
  columnDimension: "regulatory-coverage",
  measure: "service-domain-count",
  normalize: false,
  includeEmptyRows: true,
  includeEmptyColumns: true,
  filters: {},
  searchQuery: "",
  selectedCell: null,
  savedViews: [],

  setDimensions: (row, col) => set({ rowDimension: row, columnDimension: col, selectedCell: null }),
  setMeasure: (measure) => set({ measure, selectedCell: null }),
  setFilters: (filters) => set({ filters }),
  setFilter: (key, value) => set((state) => ({
    filters: {
      ...state.filters,
      [key]: value === "" || value === undefined ? undefined : value
    },
    selectedCell: null
  })),
  setSearchQuery: (query) => set({ searchQuery: query, selectedCell: null }),
  setSelectedCell: (cell) => set({ selectedCell: cell }),
  setNormalize: (normalize) => set({ normalize }),
  setIncludeEmptyRows: (include) => set({ includeEmptyRows: include }),
  setIncludeEmptyColumns: (include) => set({ includeEmptyColumns: include }),

  loadSavedViews: () => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("raia-matrix-saved-views");
      if (stored) {
        set({ savedViews: JSON.parse(stored) });
      }
    } catch (e) {
      console.error("Could not load saved matrix views", e);
    }
  },

  saveView: (name, description) => {
    if (typeof window === "undefined") return;
    const { rowDimension, columnDimension, measure, normalize, includeEmptyRows, includeEmptyColumns, filters } = get();
    
    const newView: SavedMatrixView = {
      id: `view-${Date.now()}`,
      name,
      description,
      configuration: {
        rowDimension,
        columnDimension,
        measure,
        normalize,
        includeEmptyRows,
        includeEmptyColumns,
        filters
      },
      createdAt: new Date().toISOString()
    };

    set((state) => {
      const updated = [...state.savedViews, newView];
      try {
        localStorage.setItem("raia-matrix-saved-views", JSON.stringify(updated));
      } catch (e) {
        console.error("Could not save matrix views", e);
      }
      return { savedViews: updated };
    });
  },

  deleteView: (id) => {
    if (typeof window === "undefined") return;
    set((state) => {
      const updated = state.savedViews.filter(v => v.id !== id);
      try {
        localStorage.setItem("raia-matrix-saved-views", JSON.stringify(updated));
      } catch (e) {
        console.error("Could not delete matrix view", e);
      }
      return { savedViews: updated };
    });
  },

  resetAll: () => set({
    rowDimension: "business-area",
    columnDimension: "regulatory-coverage",
    measure: "service-domain-count",
    normalize: false,
    includeEmptyRows: true,
    includeEmptyColumns: true,
    filters: {},
    searchQuery: "",
    selectedCell: null
  }),

  loadConfig: (config) => set((state) => ({
    rowDimension: config.rowDimension || state.rowDimension,
    columnDimension: config.columnDimension || state.columnDimension,
    measure: config.measure || state.measure,
    normalize: config.normalize !== undefined ? config.normalize : state.normalize,
    includeEmptyRows: config.includeEmptyRows !== undefined ? config.includeEmptyRows : state.includeEmptyRows,
    includeEmptyColumns: config.includeEmptyColumns !== undefined ? config.includeEmptyColumns : state.includeEmptyColumns,
    filters: config.filters || state.filters,
    selectedCell: null
  }))
}));
