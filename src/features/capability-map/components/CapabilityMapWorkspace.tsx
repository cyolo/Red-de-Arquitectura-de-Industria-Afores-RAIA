import React from "react";
import {
  getCapabilityDomains,
  getCapabilities,
  getCapabilityServiceDomainMappings,
  getCapabilityGaps,
  getCapabilityCoverage
} from "../../../domain/repositories/capabilityRepository";
import { useCapabilityMapStore, CapabilityTab, CapabilityOverlay } from "../store/useCapabilityMapStore";
import { useCapabilityUrlState } from "../hooks/useCapabilityUrlState";
import CapabilityTile from "./CapabilityTile";
import CapabilityDetailPanel from "./CapabilityDetailPanel";
import CapabilityHierarchyTree from "./CapabilityHierarchyTree";
import CapabilityImpactPanel from "./CapabilityImpactPanel";
import { Layers, Search, SlidersHorizontal, Maximize2, Minimize2, Download, AlertTriangle, ShieldCheck, CheckCircle } from "lucide-react";

export default function CapabilityMapWorkspace() {
  // Sync state with URL params
  useCapabilityUrlState();

  const {
    selectedCapabilityId,
    activeTab,
    activeOverlay,
    filters,
    isFullscreen,
    setSelectedCapabilityId,
    setActiveTab,
    setActiveOverlay,
    setFilters,
    setIsFullscreen,
    resetFilters
  } = useCapabilityMapStore();

  const domains = getCapabilityDomains();
  const capabilities = getCapabilities();
  const mappings = getCapabilityServiceDomainMappings();
  const gaps = getCapabilityGaps();
  const coverage = getCapabilityCoverage();

  // Filter capabilities dynamically
  const filteredCapabilities = React.useMemo(() => {
    return capabilities.filter((c) => {
      if (filters.search && !c.nameEs.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.criticality && c.criticality !== filters.criticality) return false;
      if (filters.capabilityType && c.capabilityType !== filters.capabilityType) return false;
      return true;
    });
  }, [capabilities, filters]);

  const selectedCapability = React.useMemo(() => {
    return capabilities.find(c => c.id === selectedCapabilityId);
  }, [capabilities, selectedCapabilityId]);

  const selectedCapabilityMappings = React.useMemo(() => {
    if (!selectedCapabilityId) return [];
    return mappings.filter(m => m.capabilityId === selectedCapabilityId);
  }, [mappings, selectedCapabilityId]);

  // Dashboard Stats calculation
  const stats = React.useMemo(() => {
    return {
      domainsCount: domains.length,
      l2Count: capabilities.length,
      coreCount: capabilities.filter(c => c.capabilityType === "industry-core").length,
      sharedCount: capabilities.filter(c => c.capabilityType === "industry-shared").length,
      gapsCount: gaps.length,
      coveragePercent: coverage.percentage
    };
  }, [domains, capabilities, gaps, coverage]);

  const handleExport = (format: "json" | "csv") => {
    alert(`Exportación en formato ${format.toUpperCase()} iniciada para el baseline v0.1.0.`);
  };

  return (
    <div className={`flex-1 flex flex-col min-h-0 bg-slate-50 overflow-hidden ${isFullscreen ? "fixed inset-0 z-50 bg-slate-50" : ""}`} data-testid="capability-map-workspace">
      
      {/* Workspace Header */}
      <header className="px-6 py-4 border-b border-slate-200 bg-white shrink-0 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="text-slate-900" size={18} />
            <h1 className="text-base font-extrabold text-slate-950 uppercase tracking-wider">
              Business Capability Map (RAIA-MOD-010)
            </h1>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
            Baseline de Capacidades SAR v0.1.0 &bull; 14 Capability Domains &bull; proposed
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-650 transition-colors cursor-pointer focus:outline-none"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => handleExport("json")}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer focus:outline-none shadow-sm"
            >
              <Download size={12} />
              Exportar
            </button>
          </div>
        </div>
      </header>

      {/* Tabs Menu Navigation */}
      <nav className="px-6 bg-white border-b border-slate-200 shrink-0">
        <div className="flex gap-1 overflow-x-auto pb-px" role="tablist">
          {([
            { id: "resumen", label: "Resumen" },
            { id: "mapa", label: "Mapa" },
            { id: "jerarquia", label: "Jerarquía" },
            { id: "impacto", label: "Simulador de Impacto" },
            { id: "gaps", label: "Gaps y Auditoría" }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer focus:outline-none whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Workspace Content Panels */}
      <div className="flex-1 flex min-h-0 relative overflow-hidden">
        
        {/* Main Tab Panels (Left/Center) */}
        <main className="flex-1 overflow-y-auto p-6 min-h-0 bg-slate-50">
          
          {/* Tab 1: Resumen Dashboard */}
          {activeTab === "resumen" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Dominios L1
                  </span>
                  <span className="text-2xl font-black text-slate-900 mt-2 block">
                    {stats.domainsCount}
                  </span>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Capacidades L2
                  </span>
                  <span className="text-2xl font-black text-slate-900 mt-2 block">
                    {stats.l2Count}
                  </span>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Mapeo de Cobertura
                  </span>
                  <span className="text-2xl font-black text-emerald-600 mt-2 block">
                    {stats.coveragePercent}%
                  </span>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Gaps Críticos
                  </span>
                  <span className={`text-2xl font-black mt-2 block ${stats.gapsCount > 0 ? "text-red-650" : "text-slate-900"}`}>
                    {stats.gapsCount}
                  </span>
                </div>
              </div>

              {/* Detail narrative blocks */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl">
                <h3 className="text-sm font-black text-slate-800 mb-2">Gobierno de Capacidades</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El Business Capability Map define de forma estable qué hace la industria previsional en México. Este modelo vincula el catálogo abstracto de capacidades con realizaciones en el Service Landscape, garantizando la trazabilidad cruzada y la eliminación de silos de diseño arquitectónico.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Grid Map layout */}
          {activeTab === "mapa" && (
            <div className="space-y-6">
              {/* Overlays and filter row */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 border border-slate-200 bg-white rounded-2xl shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600">Overlay Visual:</span>
                  <div className="flex gap-1.5">
                    {([
                      { id: "none", label: "Limpio" },
                      { id: "criticality", label: "Criticidad" },
                      { id: "capabilityType", label: "Tipo" }
                    ] as const).map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setActiveOverlay(o.id)}
                        className={`px-2.5 py-1 text-[10px] font-bold border rounded-lg transition-all cursor-pointer focus:outline-none ${
                          activeOverlay === o.id
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative w-full md:w-64">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => setFilters({ search: e.target.value })}
                    placeholder="Buscar capacidad..."
                    className="w-full text-xs border border-slate-250 hover:border-slate-350 bg-white rounded-lg pl-9 pr-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* Grid matrix of domains */}
              <div className="space-y-8">
                {domains.map((domain) => {
                  const domainCaps = filteredCapabilities.filter(c => c.capabilityDomainId === domain.id);
                  if (domainCaps.length === 0) return null;

                  return (
                    <section key={domain.id} className="space-y-3">
                      <header className="flex items-center justify-between border-b border-slate-250 pb-2">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-extrabold text-sm text-slate-900">
                            {domain.nameEs}
                          </h3>
                          <span className="text-[9.5px] font-bold text-slate-400 uppercase">
                            ({domainCaps.length} L2)
                          </span>
                        </div>
                      </header>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {domainCaps.map((cap) => (
                          <CapabilityTile
                            key={cap.id}
                            capability={cap}
                            overlay={activeOverlay}
                            isSelected={selectedCapabilityId === cap.id}
                            onClick={() => setSelectedCapabilityId(cap.id)}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Tree view */}
          {activeTab === "jerarquia" && <CapabilityHierarchyTree />}

          {/* Tab 4: Impact Simulator */}
          {activeTab === "impacto" && <CapabilityImpactPanel />}

          {/* Tab 5: Gaps list */}
          {activeTab === "gaps" && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl mx-auto">
              <h3 className="text-sm font-black text-slate-800 mb-4 pb-2 border-b border-slate-100">Gaps Arquitectónicos</h3>
              <div className="space-y-3">
                {gaps.map((gap) => (
                  <div key={gap.id} className="p-4 border border-red-200 bg-red-50/50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-650 shrink-0 mt-0.5" size={16} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-red-800 uppercase bg-red-100 border border-red-250 px-1.5 py-0.2 rounded">
                            {gap.severity}
                          </span>
                          <h4 className="font-bold text-xs text-red-950">{gap.title}</h4>
                        </div>
                        <p className="text-xs text-slate-650 mt-1.5 leading-relaxed">
                          {gap.description}
                        </p>
                        <div className="mt-3 text-[11px] font-bold text-slate-700">
                          Recomendación: <span className="font-extrabold text-slate-900">{gap.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        {/* Sidebar Context Details (Right Panel) */}
        {activeTab === "mapa" && (
          <CapabilityDetailPanel
            capability={selectedCapability}
            mappings={selectedCapabilityMappings}
            onClose={() => setSelectedCapabilityId(null)}
          />
        )}

      </div>
    </div>
  );
}
