"use client";

import React, { useMemo } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import { getOverviewDiagramsManifest } from "../../../../domain/repositories/overviewDiagramRepository";

export function OverviewDiagramCatalog() {
  const {
    selectedDiagramId,
    filterTheme,
    filterLevel,
    filterStatus,
    searchTerm,
    setSelectedDiagramId,
    setFilterTheme,
    setFilterLevel,
    setFilterStatus,
    setSearchTerm,
    resetFilters
  } = useOverviewDiagramStore();

  const manifest = useMemo(() => getOverviewDiagramsManifest(), []);

  // Compute unique filters for selects
  const themes = useMemo(() => Array.from(new Set(manifest.map((d) => d.theme))), [manifest]);
  const levels = useMemo(() => Array.from(new Set(manifest.map((d) => d.level))), [manifest]);
  const statuses = useMemo(() => Array.from(new Set(manifest.map((d) => d.status))), [manifest]);

  // Filtered manifest list
  const filteredManifest = useMemo(() => {
    return manifest.filter((d) => {
      const matchesSearch =
        d.nameEs.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTheme = !filterTheme || d.theme === filterTheme;
      const matchesLevel = !filterLevel || d.level === filterLevel;
      const matchesStatus = !filterStatus || d.status === filterStatus;

      return matchesSearch && matchesTheme && matchesLevel && matchesStatus;
    });
  }, [manifest, searchTerm, filterTheme, filterLevel, filterStatus]);

  const getThemeLabel = (theme: string) => {
    switch (theme) {
      case "industry-ecosystem":
        return "Ecosistema";
      case "account-lifecycle":
        return "Ciclo de Cuenta";
      case "affiliation":
        return "Afiliación y Traspasos";
      case "contributions":
        return "Recaudación";
      case "investments":
        return "Inversiones";
      case "withdrawals-pensions":
        return "Retiros";
      case "fondo-bienestar":
        return "Fondo Bienestar";
      case "identity":
        return "Identidad";
      case "regulatory-governance":
        return "Gobierno";
      default:
        return theme;
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "industry":
        return "Ecosistema";
      case "value-stream":
        return "Flujo Valor";
      case "business-area":
        return "Área Negocio";
      case "business-domain":
        return "Dominio";
      default:
        return level;
    }
  };

  return (
    <div className="w-full flex flex-col h-full bg-white border-r border-slate-200">
      {/* Search Input */}
      <div className="p-3 border-b border-slate-100 flex flex-col gap-2.5">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar diagrama..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-800 focus:border-slate-800 outline-none"
          />
        </div>

        {/* Filter Toolbar */}
        <div className="grid grid-cols-3 gap-1.5">
          <select
            value={filterTheme || ""}
            onChange={(e) => setFilterTheme(e.target.value || null)}
            className="text-[10px] py-1 px-1.5 border border-slate-200 rounded text-slate-600 outline-none bg-slate-50"
          >
            <option value="">Tema</option>
            {themes.map((t) => (
              <option key={t} value={t}>
                {getThemeLabel(t)}
              </option>
            ))}
          </select>

          <select
            value={filterLevel || ""}
            onChange={(e) => setFilterLevel(e.target.value || null)}
            className="text-[10px] py-1 px-1.5 border border-slate-200 rounded text-slate-600 outline-none bg-slate-50"
          >
            <option value="">Nivel</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {getLevelLabel(l)}
              </option>
            ))}
          </select>

          <select
            value={filterStatus || ""}
            onChange={(e) => setFilterStatus(e.target.value || null)}
            className="text-[10px] py-1 px-1.5 border border-slate-200 rounded text-slate-600 outline-none bg-slate-50"
          >
            <option value="">Estatus</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {(filterTheme || filterLevel || filterStatus || searchTerm) && (
          <button
            onClick={resetFilters}
            className="text-[10px] text-slate-500 hover:text-slate-800 font-semibold self-end transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Catalog List */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-100 max-h-[480px]">
        {filteredManifest.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            No se encontraron diagramas con los filtros activos.
          </div>
        ) : (
          filteredManifest.map((item) => {
            const isSelected = item.id === selectedDiagramId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedDiagramId(item.id)}
                className={`w-full text-left p-3.5 flex flex-col gap-1 transition-colors outline-none focus:bg-slate-50 ${
                  isSelected ? "bg-slate-50 border-l-2 border-slate-800" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10.5px] font-bold text-slate-500">{item.id}</span>
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                    {getLevelLabel(item.level)}
                  </span>
                </div>
                <h4 className="text-[11.5px] font-bold text-slate-800 leading-tight">
                  {item.nameEs}
                </h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[8px] font-bold bg-blue-50 text-blue-700 px-1.5 rounded">
                    {getThemeLabel(item.theme)}
                  </span>
                  <span className="text-[8px] font-bold bg-amber-50 text-amber-700 px-1.5 rounded uppercase">
                    {item.status}
                  </span>
                  {item.scenarioIds.length > 0 && (
                    <span className="text-[8px] text-slate-400 flex items-center gap-0.5">
                      <BookOpen className="w-2.5 h-2.5" /> {item.scenarioIds.length} Escenarios
                    </span>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
export default OverviewDiagramCatalog;
