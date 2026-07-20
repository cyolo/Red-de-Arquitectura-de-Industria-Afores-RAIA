import React, { useMemo } from "react";
import { X, ArrowRight, ShieldCheck, Layers, Link as LinkIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useMatrixStore } from "../store/useMatrixStore";
import { getServiceDomainById } from "../../../../domain/repositories/landscapeRepository";
import { getDomainValuesForDimension, matrixDimensionDefinitions } from "../domain/matrixDimensions";
import { serializeMatrixConfig } from "../domain/matrixSerialization";
import { ServiceDomain } from "../../../../domain/types";

interface MatrixDrilldownPanelProps {
  onClose: () => void;
}

export default function MatrixDrilldownPanel({ onClose }: MatrixDrilldownPanelProps) {
  const selectedCell = useMatrixStore((state) => state.selectedCell);
  const rowDimension = useMatrixStore((state) => state.rowDimension);
  const columnDimension = useMatrixStore((state) => state.columnDimension);
  const measure = useMatrixStore((state) => state.measure);
  const normalize = useMatrixStore((state) => state.normalize);
  const includeEmptyRows = useMatrixStore((state) => state.includeEmptyRows);
  const includeEmptyColumns = useMatrixStore((state) => state.includeEmptyColumns);
  const filters = useMatrixStore((state) => state.filters);
  const searchQuery = useMatrixStore((state) => state.searchQuery);

  // Close drawer on Escape key press
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Resolve cell information
  const cellData = useMemo(() => {
    if (!selectedCell) return null;
    const { rowId, columnId } = selectedCell;

    // Get all domains
    const allSds = getServiceDomainById ? getServiceDomainById : null; // fallback or list
    const matchedSds: ServiceDomain[] = [];

    // Retrieve domains matching intersection
    const allServiceDomains = require("../../../../domain/repositories/landscapeRepository").getServiceDomains();
    
    // Filters match
    const filterFn = require("../domain/matrixFilters").matchesMatrixFilters;
    const filtered = allServiceDomains.filter((s: ServiceDomain) => 
      filterFn(s, filters, searchQuery)
    );

    filtered.forEach((sd: ServiceDomain) => {
      const rows = getDomainValuesForDimension(sd, rowDimension);
      const cols = getDomainValuesForDimension(sd, columnDimension);
      if (rows.includes(rowId) && cols.includes(columnId)) {
        matchedSds.push(sd);
      }
    });

    const rowLabel = matrixDimensionDefinitions[rowDimension].getValues().find(v => v.id === rowId)?.label || rowId;
    const colLabel = matrixDimensionDefinitions[columnDimension].getValues().find(v => v.id === columnId)?.label || columnId;

    return {
      rowId,
      columnId,
      rowLabel,
      colLabel,
      serviceDomains: matchedSds
    };
  }, [selectedCell, rowDimension, columnDimension, filters, searchQuery]);

  // Construct sharing parameters to keep filters active in Value Chain navigation
  const getDomainValueChainUrl = (sdId: string) => {
    const config = {
      rowDimension,
      columnDimension,
      measure,
      filters,
      normalize,
      includeEmptyRows,
      includeEmptyColumns
    };
    const params = serializeMatrixConfig(config, searchQuery, selectedCell);
    return `/service-landscape/value-chain?selected=${sdId}&view=explorer&${params}`;
  };

  if (!selectedCell || !cellData) return null;

  return (
    <div 
      className="w-full md:w-[480px] bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl relative z-40 shrink-0 no-print"
      data-testid="matrix-drilldown-panel"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de intersección entre ${cellData.rowLabel} y ${cellData.colLabel}`}
    >
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-150 bg-slate-900 text-white flex items-center justify-between shrink-0">
        <div className="min-w-0">
          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">
            Intersección Seleccionada
          </span>
          <h2 className="text-xs font-bold truncate mt-0.5" title={`${cellData.rowLabel} × ${cellData.colLabel}`}>
            {cellData.rowLabel} × {cellData.colLabel}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Cerrar panel de drill-down"
        >
          <X size={16} />
        </button>
      </div>

      {/* Summary metric banner */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Dominios en intersección
        </span>
        <span className="text-xs font-extrabold text-slate-800 bg-slate-200 px-2 py-0.5 rounded-full font-mono">
          {cellData.serviceDomains.length}
        </span>
      </div>

      {/* Service Domains List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cellData.serviceDomains.length > 0 ? (
          cellData.serviceDomains.map((sd) => {
            return (
              <div 
                key={sd.id} 
                className="border border-slate-200 rounded-xl p-4 hover:shadow-xs transition-all space-y-3.5 bg-white"
                data-testid="drilldown-service-domain-card"
              >
                {/* Domain Header */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200 uppercase">
                      {sd.id}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-bold">
                      {sd.status} · {sd.maturity || "conceptual"}
                    </span>
                  </div>
                  <h3 className="text-xs font-extrabold text-slate-800 mt-1">{sd.nameEs}</h3>
                  <p className="text-[11px] text-slate-550 text-slate-500 mt-1 leading-normal font-medium">
                    {sd.summary}
                  </p>
                </div>

                {/* Sub features / Regulations count */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-500 border-t border-b border-slate-100 py-2">
                  <div className="flex items-center gap-1.5">
                    <Layers size={12} className="text-slate-400" />
                    <span>{sd.capabilities.length} capacidades</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-slate-400" />
                    <span>{sd.regulations?.length || 0} regulaciones</span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2 pt-1.5">
                  {/* Link 1: Value Chain */}
                  <Link
                    href={getDomainValueChainUrl(sd.id)}
                    className="flex-1 text-center py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[10px] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Value Chain</span>
                    <ArrowRight size={10} />
                  </Link>

                  {/* Link 2: Technical Sheet */}
                  <Link
                    href={`/service-domains/${sd.slug}`}
                    className="flex-1 text-center py-1.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-[10px] rounded-lg border border-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <ExternalLink size={10} />
                    <span>Ficha</span>
                  </Link>

                  {/* Link 3: Overview Diagrams */}
                  <Link
                    href={`/service-landscape/overview-diagrams?selected=${sd.id}`}
                    className="flex-1 text-center py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] rounded-lg border border-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Flujo</span>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-xs text-slate-400 italic font-semibold">
            No hay dominios de servicio asociados a esta celda.
          </div>
        )}
      </div>
    </div>
  );
}
