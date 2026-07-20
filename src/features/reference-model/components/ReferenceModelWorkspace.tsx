import React from "react";
import { useReferenceModelStore, RMTabType } from "../store/useReferenceModelStore";
import { useReferenceModelUrlState } from "../hooks/useReferenceModelUrlState";
import { getIndustryReferenceModel, getReferenceModelViewpoints } from "../../../domain/repositories/referenceModelRepository";

// Import tabs
import ReferenceModelSummary from "./ReferenceModelSummary";
import ReferenceViewpointCatalog from "./ReferenceViewpointCatalog";
import ReferenceModelCanvas from "./ReferenceModelCanvas";
import ReferenceTraceabilityExplorer from "./ReferenceTraceabilityExplorer";
import ReferenceImpactPanel from "./ReferenceImpactPanel";
import ReferenceModelGapPanel from "./ReferenceModelGapPanel";
import ReferenceArtifactPanel from "./ReferenceArtifactPanel";

import { Activity, LayoutGrid, Network, Compass, AlertTriangle, ShieldCheck, HelpCircle, Layers, Settings, Eye, Search } from "lucide-react";

export default function ReferenceModelWorkspace() {
  // Synchronize store selections with URL queries
  useReferenceModelUrlState();

  const { activeTab, setActiveTab, searchQuery, setSearchQuery, selectedViewpointId, setSelectedViewpointId } = useReferenceModelStore();

  const model = getIndustryReferenceModel();
  const viewpoints = getReferenceModelViewpoints();

  const tabsList: Array<{ id: RMTabType; label: string; icon: any }> = [
    { id: "resumen", label: "Resumen", icon: Activity },
    { id: "viewpoints", label: "Viewpoints", icon: LayoutGrid },
    { id: "map", label: "Mapa integral", icon: Network },
    { id: "traceability", label: "Trazabilidad", icon: Compass },
    { id: "impact", label: "Impacto", icon: AlertTriangle },
    { id: "gaps", label: "Gaps", icon: HelpCircle }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 relative overflow-hidden" data-testid="rm-workspace">
      
      {/* 1. Header Metrics Strip */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
            {model.id}
          </span>
          <h1 className="text-md font-bold text-slate-800 leading-none mt-1">
            {model.name}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {model.description}
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Estado de Validación</span>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100/60 px-1.5 py-0.2 rounded uppercase">
              {model.validationStatus}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Selection and Tab Switches drop-down controls bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Active viewpoint selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Viewpoint:</span>
            <select
              value={selectedViewpointId || ""}
              onChange={(e) => setSelectedViewpointId(e.target.value)}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-850 focus:outline-none"
            >
              {viewpoints.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.id} - {v.nameEs}
                </option>
              ))}
            </select>
          </div>

          {/* Navigation tabs */}
          <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200" role="tablist">
            {tabsList.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={12} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input bar */}
        <div className="relative w-44 sm:w-56 shrink-0">
          <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
            <Search size={12} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en el modelo..."
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-slate-400 rounded px-2.5 py-1 pl-7.5 text-xs text-slate-700 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. Tab panels wrapper content */}
      <div className="flex-1 overflow-y-auto min-h-0 relative bg-slate-50">
        {activeTab === "resumen" && <ReferenceModelSummary />}
        {activeTab === "viewpoints" && <ReferenceViewpointCatalog />}
        {activeTab === "map" && <ReferenceModelCanvas />}
        {activeTab === "traceability" && <ReferenceTraceabilityExplorer />}
        {activeTab === "impact" && <ReferenceImpactPanel />}
        {activeTab === "gaps" && <ReferenceModelGapPanel />}
      </div>

      {/* 4. Drawer detail panel */}
      <ReferenceArtifactPanel />
    </div>
  );
}
