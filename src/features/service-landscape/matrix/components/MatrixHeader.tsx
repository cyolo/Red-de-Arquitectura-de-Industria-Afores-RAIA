import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Network, ShieldCheck, Database, Calendar } from "lucide-react";
import { getServiceDomains, getBusinessAreas, getBusinessDomains } from "../../../../domain/repositories/landscapeRepository";
import { getPortalReleases } from "../../../../domain/repositories/portalRepository";
import { useMatrixStore } from "../store/useMatrixStore";
import { serializeMatrixConfig } from "../domain/matrixSerialization";

export default function MatrixHeader() {
  const rowDimension = useMatrixStore((state) => state.rowDimension);
  const columnDimension = useMatrixStore((state) => state.columnDimension);
  const measure = useMatrixStore((state) => state.measure);
  const normalize = useMatrixStore((state) => state.normalize);
  const includeEmptyRows = useMatrixStore((state) => state.includeEmptyRows);
  const includeEmptyColumns = useMatrixStore((state) => state.includeEmptyColumns);
  const filters = useMatrixStore((state) => state.filters);
  const searchQuery = useMatrixStore((state) => state.searchQuery);
  const selectedCell = useMatrixStore((state) => state.selectedCell);

  const totalSds = useMemo(() => getServiceDomains().length, []);
  const totalAreas = useMemo(() => getBusinessAreas().length, []);
  const totalDomains = useMemo(() => getBusinessDomains().length, []);
  
  const activeRelease = useMemo(() => {
    const releases = getPortalReleases();
    return releases.find(r => r.status === "published") || { version: "0.1.0", releaseDate: "2026-07-12" };
  }, []);

  const valueChainUrl = useMemo(() => {
    const config = {
      rowDimension,
      columnDimension,
      measure,
      filters,
      normalize,
      includeEmptyRows,
      includeEmptyColumns
    };
    const params = serializeMatrixConfig(config, searchQuery, null);
    // Bridging parameters to value-chain?view=matrix
    return `/service-landscape/value-chain?view=matrix&${params}`;
  }, [rowDimension, columnDimension, measure, filters, normalize, includeEmptyRows, includeEmptyColumns, searchQuery]);

  return (
    <header className="no-print bg-slate-900 text-white border-b border-slate-800 shadow-md relative z-30 shrink-0">
      <div className="max-w-[1920px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Title Block */}
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href={valueChainUrl}
            data-testid="matrix-back-button"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            title="Volver a la Cadena de Valor (Value Chain)"
          >
            <ArrowLeft size={16} />
          </Link>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2 leading-none">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                Módulo Arquitectónico
              </span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                RAIA-MOD-006
              </span>
            </div>
            <h1 className="text-sm md:text-base font-extrabold text-white mt-0.5 tracking-tight flex items-center gap-1.5">
              Service Landscape — Matrix
              <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                | Análisis matricial configurable
              </span>
            </h1>
          </div>
        </div>

        {/* Dynamic Badges Block */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/60 border border-slate-700/60 rounded-lg text-[10px] font-bold text-slate-300">
            <Database size={12} className="text-raia-blue-inst text-sky-400" />
            <span>{totalSds} SDs</span>
          </div>
          
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/60 border border-slate-700/60 rounded-lg text-[10px] font-bold text-slate-300">
            <Network size={12} className="text-emerald-400" />
            <span>{totalAreas} Áreas</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/60 border border-slate-700/60 rounded-lg text-[10px] font-bold text-slate-300">
            <ShieldCheck size={12} className="text-amber-400" />
            <span>{totalDomains} Dominios</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-950/40 border border-blue-900/60 rounded-lg text-[10px] font-bold text-blue-300">
            <Calendar size={12} className="text-blue-400" />
            <span>Baseline v{activeRelease.version} ({activeRelease.releaseDate})</span>
          </div>
        </div>
      </div>
    </header>
  );
}
