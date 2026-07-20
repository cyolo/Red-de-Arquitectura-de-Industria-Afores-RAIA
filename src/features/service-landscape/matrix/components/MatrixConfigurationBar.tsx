import React from "react";
import { Filter, Eye, RefreshCw, Grid } from "lucide-react";
import { useMatrixStore } from "../store/useMatrixStore";
import { matrixDimensionDefinitions } from "../domain/matrixDimensions";
import { matrixMeasureDefinitions } from "../domain/matrixMeasures";
import MatrixExportMenu from "./MatrixExportMenu";
import MatrixSavedViews from "./MatrixSavedViews";
import { MatrixResult, MatrixConfiguration } from "../domain/matrixTypes";

interface MatrixConfigurationBarProps {
  result: MatrixResult;
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
}

export default function MatrixConfigurationBar({ result, filtersOpen, setFiltersOpen }: MatrixConfigurationBarProps) {
  const rowDimension = useMatrixStore((state) => state.rowDimension);
  const columnDimension = useMatrixStore((state) => state.columnDimension);
  const measure = useMatrixStore((state) => state.measure);
  const normalize = useMatrixStore((state) => state.normalize);
  const includeEmptyRows = useMatrixStore((state) => state.includeEmptyRows);
  const includeEmptyColumns = useMatrixStore((state) => state.includeEmptyColumns);
  const searchQuery = useMatrixStore((state) => state.searchQuery);
  const filters = useMatrixStore((state) => state.filters);

  const setDimensions = useMatrixStore((state) => state.setDimensions);
  const setMeasure = useMatrixStore((state) => state.setMeasure);
  const setNormalize = useMatrixStore((state) => state.setNormalize);
  const setIncludeEmptyRows = useMatrixStore((state) => state.setIncludeEmptyRows);
  const setIncludeEmptyColumns = useMatrixStore((state) => state.setIncludeEmptyColumns);
  const setSearchQuery = useMatrixStore((state) => state.setSearchQuery);
  const resetAll = useMatrixStore((state) => state.resetAll);

  // Group all dimension definitions
  const allDims = Object.values(matrixDimensionDefinitions);
  const rowOptions = allDims.filter(d => d.supportsRows);
  const colOptions = allDims.filter(d => d.supportsColumns);
  
  // Measures
  const measureOptions = Object.values(matrixMeasureDefinitions);

  const activeFiltersCount = Object.values(filters).filter(v => v !== undefined && v !== "").length;

  const currentConfig: MatrixConfiguration = {
    rowDimension,
    columnDimension,
    measure,
    filters,
    normalize,
    includeEmptyRows,
    includeEmptyColumns
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col gap-4 shrink-0 no-print" data-testid="matrix-config-bar">
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Selection selectors */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Row select */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Dimensión Fila (Eje Y)</span>
            <select
              value={rowDimension}
              onChange={(e) => setDimensions(e.target.value as any, columnDimension)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              {rowOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
            </select>
          </div>

          {/* Col select */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Dimensión Columna (Eje X)</span>
            <select
              value={columnDimension}
              onChange={(e) => setDimensions(rowDimension, e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              {colOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
            </select>
          </div>

          {/* Measure select */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Métrica de Análisis</span>
            <select
              value={measure}
              onChange={(e) => setMeasure(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              {measureOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
            </select>
          </div>
        </div>

        {/* Buttons / Tools */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por texto..."
              className="bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-lg px-3 py-1.5 text-xs text-slate-700 focus:outline-none w-44 sm:w-52"
            />
          </div>

          {/* Saved views dropdown */}
          <MatrixSavedViews />

          {/* Filters toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              filtersOpen || activeFiltersCount > 0
                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                : "bg-white border-slate-200 hover:border-slate-350 text-slate-700"
            }`}
          >
            <Filter size={12} />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="bg-emerald-600 text-white rounded-full w-4.5 h-4.5 flex items-center justify-center text-[9px] font-extrabold px-1 font-mono">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Export dropdown */}
          <MatrixExportMenu result={result} config={currentConfig} searchQuery={searchQuery} />

          {/* Reset button */}
          {(activeFiltersCount > 0 || searchQuery !== "" || normalize || !includeEmptyRows || !includeEmptyColumns) && (
            <button
              onClick={resetAll}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 rounded-lg transition-colors cursor-pointer"
              title="Restaurar valores de fábrica"
            >
              <RefreshCw size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Switches options inline */}
      <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-slate-100">
        <label className="flex items-center gap-2 text-[11px] font-bold text-slate-650 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={normalize}
            onChange={(e) => setNormalize(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
          />
          <span>Normalizar Heatmap (escala relativa de color)</span>
        </label>

        <label className="flex items-center gap-2 text-[11px] font-bold text-slate-650 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeEmptyRows}
            onChange={(e) => setIncludeEmptyRows(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
          />
          <span>Mostrar Filas Vacías</span>
        </label>

        <label className="flex items-center gap-2 text-[11px] font-bold text-slate-650 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeEmptyColumns}
            onChange={(e) => setIncludeEmptyColumns(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
          />
          <span>Mostrar Columnas Vacías</span>
        </label>
      </div>
    </div>
  );
}
