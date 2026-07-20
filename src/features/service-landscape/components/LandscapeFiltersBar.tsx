"use client";

import React, { useMemo } from "react";
import { Filter, X, Grid, Shield, AlertTriangle } from "lucide-react";
import { useLandscapeStore, LandscapeFilters } from "../store/useLandscapeStore";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../../../domain/repositories/landscapeRepository";

interface Props {
  matchedCount: number;
  totalCount: number;
}

export default function LandscapeFiltersBar({ matchedCount, totalCount }: Props) {
  const activeFilters = useLandscapeStore((state) => state.activeFilters);
  const setFilter = useLandscapeStore((state) => state.setFilter);
  const clearFilters = useLandscapeStore((state) => state.clearFilters);

  const areas = useMemo(() => getBusinessAreas(), []);
  const domains = useMemo(() => getBusinessDomains(), []);
  const serviceDomains = useMemo(() => getServiceDomains(), []);

  // Compile unique actor roles
  const actorsList = useMemo(() => {
    const actors = new Set<string>();
    serviceDomains.forEach((sd) => {
      sd.accountableActors.forEach((a) => actors.add(a));
      sd.participatingActors.forEach((a) => actors.add(a));
    });
    return Array.from(actors).sort();
  }, [serviceDomains]);

  // Compile unique tags
  const tagsList = useMemo(() => {
    const tags = new Set<string>();
    serviceDomains.forEach((sd) => {
      sd.tags.forEach((t) => tags.add(t));
    });
    return Array.from(tags).sort();
  }, [serviceDomains]);

  const hasActiveFilters = Object.values(activeFilters).some((v) => v !== undefined);

  return (
    <div className="no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4">
      {/* Header & Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-slate-500" />
          <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
            Filtros y Búsqueda
          </h2>
        </div>
        
        {/* Match counter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 font-semibold">
            Coincidencias:
          </span>
          <span data-testid="value-chain-result-count" className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
            {matchedCount} / {totalCount}
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              data-testid="value-chain-clear-filters"
              className="flex items-center gap-1 text-[10px] font-bold text-raia-error hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 px-2 py-0.5 rounded border border-red-200"
            >
              <X size={12} />
              Limpiar Filtros
            </button>
          )}
        </div>
      </div>

      {/* Selects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {/* Business Area Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
            Área de Negocio
          </label>
          <select
            value={activeFilters.area || ""}
            onChange={(e) => setFilter("area", e.target.value || undefined)}
            data-testid="value-chain-filter-area"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst"
          >
            <option value="">Todas las Áreas</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>
                {a.id} - {a.nameEs}
              </option>
            ))}
          </select>
        </div>

        {/* Business Domain Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
            Dominio de Negocio
          </label>
          <select
            value={activeFilters.domain || ""}
            onChange={(e) => setFilter("domain", e.target.value || undefined)}
            data-testid="value-chain-filter-domain"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst"
          >
            <option value="">Todos los Dominios</option>
            {domains
              .filter((d) => !activeFilters.area || d.businessAreaId === activeFilters.area)
              .map((d) => (
                <option key={d.id} value={d.id}>
                  {d.id} - {d.nameEs}
                </option>
              ))}
          </select>
        </div>

        {/* Actor Role Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
            Rol del Actor
          </label>
          <select
            value={activeFilters.actor || ""}
            onChange={(e) => setFilter("actor", e.target.value || undefined)}
            data-testid="value-chain-filter-actor"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst"
          >
            <option value="">Todos los Actores</option>
            {actorsList.map((a, idx) => (
              <option key={idx} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Lifecycle Status Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
            Estatus de Ciclo de Vida
          </label>
          <select
            value={activeFilters.status || ""}
            onChange={(e) => setFilter("status", e.target.value || undefined)}
            data-testid="value-chain-filter-status"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst"
          >
            <option value="">Todos los Estatus</option>
            <option value="draft">Draft</option>
            <option value="proposed">Proposed</option>
            <option value="validated">Validated</option>
            <option value="active">Active</option>
            <option value="deprecated">Deprecated</option>
          </select>
        </div>

        {/* Maturity Level Filter */}
        <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
            Nivel de Madurez
          </label>
          <select
            value={activeFilters.maturity || ""}
            onChange={(e) => setFilter("maturity", e.target.value || undefined)}
            data-testid="value-chain-filter-maturity"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst"
          >
            <option value="">Todas las Madureces</option>
            <option value="conceptual">Conceptual</option>
            <option value="defined">Defined</option>
            <option value="validated">Validated</option>
            <option value="adopted">Adopted</option>
          </select>
        </div>
      </div>
    </div>
  );
}
