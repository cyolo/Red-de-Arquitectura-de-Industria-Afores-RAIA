"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLandscapeStore } from "../../../features/service-landscape/store/useLandscapeStore";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../../../domain/repositories/landscapeRepository";
import LandscapeFiltersBar from "../../../features/service-landscape/components/LandscapeFiltersBar";
import DetailSidebar from "../../../components/layout/DetailSidebar";
import { ServiceDomain } from "../../../domain/types";
import { Network, Layers, ShieldCheck } from "lucide-react";

function ValueChainContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilters = useLandscapeStore((state) => state.activeFilters);
  const searchQuery = useLandscapeStore((state) => state.searchQuery);
  const selectedId = useLandscapeStore((state) => state.selectedId);
  const setSelectedId = useLandscapeStore((state) => state.setSelectedId);
  const setFilters = useLandscapeStore((state) => state.setFilters);
  const setSearchQuery = useLandscapeStore((state) => state.setSearchQuery);

  const isInitializedRef = React.useRef(false);

  // 1. Sync filters from URL on mount
  React.useEffect(() => {
    if (!isInitializedRef.current) {
      const area = searchParams.get("area") || undefined;
      const domain = searchParams.get("domain") || undefined;
      const actor = searchParams.get("actor") || undefined;
      const status = searchParams.get("status") || undefined;
      const maturity = searchParams.get("maturity") || undefined;
      const search = searchParams.get("search") || "";

      setFilters({ area, domain, actor, status, maturity });
      if (search) setSearchQuery(search);

      isInitializedRef.current = true;
    }
  }, [searchParams, setFilters, setSearchQuery]);

  // 2. Sync selectedId from URL reactively
  const urlSelectedId = searchParams.get("selected") || null;
  React.useEffect(() => {
    setSelectedId(urlSelectedId);
  }, [urlSelectedId, setSelectedId]);

  // 3. Sync filters to URL on state change
  React.useEffect(() => {
    if (!isInitializedRef.current) return;
    const params = new URLSearchParams(searchParams.toString());
    
    if (activeFilters.area) params.set("area", activeFilters.area);
    else params.delete("area");
    
    if (activeFilters.domain) params.set("domain", activeFilters.domain);
    else params.delete("domain");
    
    if (activeFilters.actor) params.set("actor", activeFilters.actor);
    else params.delete("actor");
    
    if (activeFilters.status) params.set("status", activeFilters.status);
    else params.delete("status");
    
    if (activeFilters.maturity) params.set("maturity", activeFilters.maturity);
    else params.delete("maturity");
    
    if (searchQuery) params.set("search", searchQuery);
    else params.delete("search");

    const newUrl = `/service-landscape/value-chain?${params.toString()}`;
    router.replace(newUrl);
  }, [activeFilters, searchQuery, router]);

  // Load static data
  const areas = useMemo(() => getBusinessAreas(), []);
  const domains = useMemo(() => getBusinessDomains(), []);
  const serviceDomains = useMemo(() => getServiceDomains(), []);

  // Filter Match Checker
  const matchesFilters = (sd: ServiceDomain) => {
    if (activeFilters.area && sd.businessAreaId !== activeFilters.area) return false;
    if (activeFilters.domain && sd.businessDomainId !== activeFilters.domain) return false;
    if (activeFilters.status && sd.status !== activeFilters.status) return false;
    if (activeFilters.maturity && sd.maturity !== activeFilters.maturity) return false;
    
    if (activeFilters.actor) {
      const hasActor =
        sd.accountableActors.includes(activeFilters.actor) ||
        sd.participatingActors.includes(activeFilters.actor);
      if (!hasActor) return false;
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        sd.id.toLowerCase().includes(q) ||
        sd.nameEs.toLowerCase().includes(q) ||
        (sd.nameEn && sd.nameEn.toLowerCase().includes(q)) ||
        sd.summary.toLowerCase().includes(q) ||
        sd.definition.toLowerCase().includes(q) ||
        sd.capabilities.some((c) => c.toLowerCase().includes(q)) ||
        sd.tags.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  };

  const isAnyFilterActive = Object.values(activeFilters).some((v) => v !== undefined) || !!searchQuery;

  // Compute stats
  const matchedServiceDomains = useMemo(() => {
    return serviceDomains.filter(matchesFilters);
  }, [serviceDomains, activeFilters, searchQuery]);

  const handleSelectServiceDomain = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("selected", id);
    router.replace(`/service-landscape/value-chain?${params.toString()}`);
  };

  // Helper to render a single Business Area
  const renderBusinessArea = (areaId: string) => {
    const area = areas.find((a) => a.id === areaId);
    if (!area) return null;

    const areaDomains = domains.filter((d) => d.businessAreaId === areaId);

    return (
      <div 
        key={area.id}
        className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full"
      >
        {/* BA Header */}
        <div 
          className="px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0"
          style={{ backgroundColor: area.colorToken }}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[10px] font-mono font-bold opacity-75 shrink-0">{area.id}</span>
            <h3 className="text-xs font-extrabold truncate uppercase tracking-wider">{area.nameEs}</h3>
          </div>
        </div>

        {/* BA Content: Business Domains */}
        <div className="p-3.5 flex-1 space-y-4 overflow-y-auto">
          {areaDomains.map((bd) => {
            const bdServiceDomains = serviceDomains.filter((sd) => sd.businessDomainId === bd.id);
            return (
              <div key={bd.id} className="space-y-1.5">
                {/* BD Title */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                  <span className="text-[9px] font-bold text-slate-800 tracking-wide uppercase truncate max-w-[80%]">
                    {bd.nameEs}
                  </span>
                  <span className="text-[8px] font-mono font-bold text-slate-400 shrink-0">
                    {bd.id}
                  </span>
                </div>

                {/* SD List inside BD */}
                <div className="flex flex-wrap gap-1.5">
                  {bdServiceDomains.map((sd) => {
                    const isMatched = matchesFilters(sd);
                    const isSelected = selectedId === sd.id;
                    const opacityClass = isAnyFilterActive && !isMatched ? "opacity-15" : "opacity-100";

                    return (
                      <button
                        key={sd.id}
                        onClick={() => handleSelectServiceDomain(sd.id)}
                        className={`text-left px-2 py-1 rounded text-[10px] font-semibold border transition-all duration-200 cursor-pointer flex items-center gap-1 ${opacityClass} ${
                          isSelected
                            ? "bg-raia-green-inst border-emerald-800 text-white shadow-sm ring-1 ring-emerald-600 scale-[1.02]"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                        title={`${sd.id}: ${sd.nameEs} - ${sd.summary}`}
                      >
                        <span className="font-mono text-[8px] opacity-60">
                          {sd.id.split("-")[2]}
                        </span>
                        <span className="truncate max-w-[150px]">{sd.nameEs}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 overflow-hidden">
      
      {/* Top filter bar */}
      <div className="p-4 md:px-6 shrink-0">
        <LandscapeFiltersBar 
          matchedCount={matchedServiceDomains.length} 
          totalCount={serviceDomains.length} 
        />
      </div>

      {/* Main Grid View Container */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-6 min-h-0">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Column 1: Front-Office */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <Network size={16} className="text-raia-blue-inst" />
              <h2 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Front-Office & Experiencia
              </h2>
            </div>
            <div className="flex-1">
              {renderBusinessArea("RAIA-BA-008")}
            </div>
          </div>

          {/* Column 2: Core-Office */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <Layers size={16} className="text-raia-green-inst" />
              <h2 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Operación y Procesos Core
              </h2>
            </div>
            
            <div className="space-y-4">
              {/* Top: Identidad */}
              {renderBusinessArea("RAIA-BA-003")}
              
              {/* Mid: Recaudación, Afiliación, Inversión (Row Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderBusinessArea("RAIA-BA-004")}
                {renderBusinessArea("RAIA-BA-005")}
                {renderBusinessArea("RAIA-BA-006")}
              </div>

              {/* Bottom: Pensiones */}
              {renderBusinessArea("RAIA-BA-007")}
            </div>
          </div>

          {/* Column 3: Back-Office & Support */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <ShieldCheck size={16} className="text-raia-gold" />
              <h2 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Gobierno, Soporte e Industria
              </h2>
            </div>

            <div className="space-y-4">
              {/* Top Row: Gobierno & Riesgo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderBusinessArea("RAIA-BA-001")}
                {renderBusinessArea("RAIA-BA-002")}
              </div>

              {/* Middle: Shared services */}
              {renderBusinessArea("RAIA-BA-009")}

              {/* Bottom Row: Tech & EA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderBusinessArea("RAIA-BA-010")}
                {renderBusinessArea("RAIA-BA-011")}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slide-out details drawer */}
      <Suspense fallback={null}>
        <DetailSidebar />
      </Suspense>
    </div>
  );
}

export default function ValueChainPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center bg-slate-50 text-slate-500 font-semibold text-sm">
          Cargando Service Landscape...
        </div>
      }
    >
      <ValueChainContent />
    </Suspense>
  );
}
