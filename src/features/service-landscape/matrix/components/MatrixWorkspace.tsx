"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Layers, ChevronDown, ChevronRight, AlertTriangle, Eye, Shield } from "lucide-react";
import { useMatrixStore } from "../store/useMatrixStore";
import { calculateMatrix } from "../domain/matrixEngine";
import { serializeMatrixConfig, deserializeMatrixParams } from "../domain/matrixSerialization";
import MatrixHeader from "./MatrixHeader";
import MatrixConfigurationBar from "./MatrixConfigurationBar";
import MatrixSummaryCards from "./MatrixSummaryCards";
import MatrixFiltersDrawer from "./MatrixFiltersDrawer";
import MatrixGrid from "./MatrixGrid";
import MatrixDrilldownPanel from "./MatrixDrilldownPanel";
import MatrixLegend from "./MatrixLegend";
import MatrixEmptyState from "./MatrixEmptyState";
import { matrixDimensionDefinitions } from "../domain/matrixDimensions";

export default function MatrixWorkspace() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Active matrix configuration and filters
  const rowDimension = useMatrixStore((state) => state.rowDimension);
  const columnDimension = useMatrixStore((state) => state.columnDimension);
  const measure = useMatrixStore((state) => state.measure);
  const normalize = useMatrixStore((state) => state.normalize);
  const includeEmptyRows = useMatrixStore((state) => state.includeEmptyRows);
  const includeEmptyColumns = useMatrixStore((state) => state.includeEmptyColumns);
  const filters = useMatrixStore((state) => state.filters);
  const searchQuery = useMatrixStore((state) => state.searchQuery);
  const selectedCell = useMatrixStore((state) => state.selectedCell);

  const loadConfig = useMatrixStore((state) => state.loadConfig);
  const setSearchQuery = useMatrixStore((state) => state.setSearchQuery);
  const setSelectedCell = useMatrixStore((state) => state.setSelectedCell);

  // Component UI States
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [forceLoadHighCardinality, setForceLoadHighCardinality] = useState(false);
  const [mobileScrollView, setMobileScrollView] = useState(false);
  const [expandedMobileRows, setExpandedMobileRows] = useState<string[]>([]);
  const isInitializedRef = useRef(false);

  // 1. Sync store state from URL parameters on mount
  useEffect(() => {
    if (!isInitializedRef.current) {
      const parsed = deserializeMatrixParams(new URLSearchParams(searchParams.toString()));
      loadConfig(parsed.config);
      if (parsed.searchQuery) setSearchQuery(parsed.searchQuery);
      if (parsed.selectedCell) setSelectedCell(parsed.selectedCell);
      isInitializedRef.current = true;
    }
  }, [searchParams, loadConfig, setSearchQuery, setSelectedCell]);

  // 2. Sync active settings back to URL dynamically
  useEffect(() => {
    if (!isInitializedRef.current) return;

    const config = {
      rowDimension,
      columnDimension,
      measure,
      filters,
      normalize,
      includeEmptyRows,
      includeEmptyColumns
    };
    const query = serializeMatrixConfig(config, searchQuery, selectedCell);
    const newUrl = `/service-landscape/matrix?${query}`;
    
    router.replace(newUrl);
  }, [
    rowDimension,
    columnDimension,
    measure,
    filters,
    normalize,
    includeEmptyRows,
    includeEmptyColumns,
    searchQuery,
    selectedCell,
    router
  ]);

  // 3. Configuration combination validations
  const validationResult = useMemo(() => {
    if (rowDimension === columnDimension) {
      return {
        valid: false,
        unsupported: true,
        message: "No se permite cruzar una dimensión analítica consigo misma. Por favor, selecciona dos dimensiones diferentes para los ejes Fila y Columna."
      };
    }

    const highCardinailityDims = ["service-domain", "business-object", "control", "regulatory-source"];
    if (highCardinailityDims.includes(rowDimension) && highCardinailityDims.includes(columnDimension)) {
      return {
        valid: false,
        warning: true,
        message: "Has seleccionado dos dimensiones con un alto número de elementos (como SD, Controles u Objetos de Negocio). Renderizar la cuadrícula cruzada puede degradar el rendimiento. Te sugerimos acotar con filtros."
      };
    }

    return { valid: true };
  }, [rowDimension, columnDimension]);

  // 4. Calculate matrix results dynamically using pure engine
  const matrixResult = useMemo(() => {
    if (!validationResult.valid && !validationResult.warning) {
      return null;
    }
    if (validationResult.warning && !forceLoadHighCardinality) {
      return null;
    }

    const config = {
      rowDimension,
      columnDimension,
      measure,
      filters,
      normalize,
      includeEmptyRows,
      includeEmptyColumns
    };
    return calculateMatrix(config);
  }, [
    rowDimension,
    columnDimension,
    measure,
    filters,
    normalize,
    includeEmptyRows,
    includeEmptyColumns,
    validationResult,
    forceLoadHighCardinality
  ]);

  // Toggle rows expanded in mobile view
  const toggleMobileRow = (rowId: string) => {
    setExpandedMobileRows((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
    );
  };

  const handleSelectCell = (rowId: string, colId: string) => {
    if (!rowId && !colId) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ rowId, columnId: colId });
    }
  };

  const renderMobileView = () => {
    if (!matrixResult) return null;

    return (
      <div className="md:hidden space-y-4" data-testid="matrix-mobile-accordions">
        {/* Scroll grid override button */}
        <div className="flex justify-end px-1">
          <button
            onClick={() => setMobileScrollView(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-sm cursor-pointer"
          >
            <Eye size={12} />
            <span>Ver tabla completa (scroll)</span>
          </button>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {matrixResult.rowHeaders.map((row) => {
            const isExpanded = expandedMobileRows.includes(row.id);
            const rowValTotal = matrixResult.totals.rowTotals[row.id] || 0;

            return (
              <div key={row.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                {/* Accordion header toggle */}
                <button
                  onClick={() => toggleMobileRow(row.id)}
                  className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {row.color && (
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                    )}
                    <span className="text-xs font-extrabold text-slate-800 truncate uppercase tracking-tight">
                      {row.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-mono">
                      Total: {rowValTotal}
                    </span>
                    {isExpanded ? <ChevronDown size={14} className="text-slate-550" /> : <ChevronRight size={14} className="text-slate-550" />}
                  </div>
                </button>

                {/* Accordion content cells */}
                {isExpanded && (
                  <div className="p-3 bg-slate-50/50 border-t border-slate-100 divide-y divide-slate-150">
                    {matrixResult.columnHeaders.map((col) => {
                      const cell = matrixResult.cells.find(c => c.rowId === row.id && c.columnId === col.id) || {
                        rowId: row.id,
                        columnId: col.id,
                        value: 0,
                        formattedValue: "-",
                        serviceDomainIds: [],
                        regulatoryMappingIds: [],
                        relationIds: [],
                        controlIds: [],
                        severity: "none" as const,
                        hasData: false
                      };

                      if (!cell.hasData || cell.value === 0) return null;

                      return (
                        <button
                          key={col.id}
                          onClick={() => handleSelectCell(row.id, col.id)}
                          className="w-full text-left py-2 flex items-center justify-between hover:bg-slate-100 transition-colors"
                        >
                          <div className="min-w-0 flex-1 pr-4">
                            <span className="text-[11px] font-bold text-slate-650 block leading-tight">
                              {col.label}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400 block mt-0.5 uppercase">
                              {cell.serviceDomainIds.length} dominios
                            </span>
                          </div>
                          <span className="text-xs font-extrabold text-slate-800 bg-slate-200 px-2 py-0.5 rounded-md font-mono shrink-0">
                            {cell.formattedValue}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-55 bg-slate-50 overflow-hidden" data-testid="matrix-page">
      <MatrixHeader />

      {/* Workspace panel layout */}
      <div className="flex-1 flex min-h-0 relative overflow-hidden">
        
        {/* Main analytical grid workspace */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 flex flex-col min-w-0">
          
          <MatrixConfigurationBar 
            result={matrixResult || { rowHeaders: [], columnHeaders: [], cells: [], totals: { rowTotals: {}, columnTotals: {}, grandTotal: 0 }, maximumValue: 0, minimumValue: 0, executionTimeMs: 0 }}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
          />

          {/* Filters drawer collapsible block */}
          {filtersOpen && <MatrixFiltersDrawer />}

          {/* Verification validation states */}
          {!validationResult.valid && validationResult.unsupported && (
            <MatrixEmptyState type="unsupported" message={validationResult.message} />
          )}

          {validationResult.warning && !forceLoadHighCardinality && (
            <MatrixEmptyState 
              type="high-cardinality" 
              message={validationResult.message} 
              onConfirm={() => setForceLoadHighCardinality(true)}
            />
          )}

          {matrixResult && (
            <>
              <MatrixSummaryCards result={matrixResult} />

              {/* Show result grid or empty state */}
              {matrixResult.cells.length > 0 ? (
                <>
                  {/* Desktop Grid or Mobile switch */}
                  <div className="flex-1 flex flex-col min-h-0">
                    {mobileScrollView ? (
                      <div className="flex justify-start pb-2 md:hidden">
                        <button
                          onClick={() => setMobileScrollView(false)}
                          className="px-2.5 py-1 bg-slate-200 text-slate-800 text-[10px] font-bold rounded-lg cursor-pointer"
                        >
                          Volver a vista acordeón
                        </button>
                      </div>
                    ) : null}

                    {mobileScrollView ? (
                      <MatrixGrid result={matrixResult} onSelectCell={handleSelectCell} />
                    ) : (
                      <>
                        <div className="hidden md:flex flex-col flex-1 min-h-0">
                          <MatrixGrid result={matrixResult} onSelectCell={handleSelectCell} />
                        </div>
                        {renderMobileView()}
                      </>
                    )}
                  </div>
                  
                  <MatrixLegend />
                </>
              ) : (
                <MatrixEmptyState type="no-results" />
              )}
            </>
          )}

        </main>

        {/* Drilldown slider right drawer panel */}
        {selectedCell && (
          <MatrixDrilldownPanel onClose={() => handleSelectCell("", "")} />
        )}
      </div>
    </div>
  );
}
