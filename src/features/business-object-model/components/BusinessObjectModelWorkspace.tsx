import React from "react";
import { useBusinessObjectStore, BOMTabType } from "../store/useBusinessObjectStore";
import { useBusinessObjectUrlState } from "../hooks/useBusinessObjectUrlState";
import {
  getBusinessObjects,
  getBusinessObjectAttributes,
  getBusinessObjectRelationships,
  getBusinessObjectGaps
} from "../../../domain/repositories/businessObjectRepository";

// Import tabs
import ResumenTab from "./ResumenTab";
import CatalogoTab from "./CatalogoTab";
import ObjectMapTab from "./ObjectMapTab";
import DiccionarioTab from "./DiccionarioTab";
import RelacionesTab from "./RelacionesTab";
import ServiceDomainsTab from "./ServiceDomainsTab";
import EscenariosTab from "./EscenariosTab";
import ImpactoTab from "./ImpactoTab";
import CoberturaTab from "./CoberturaTab";
import GapsTab from "./GapsTab";
import ObjectDetailsPanel from "./ObjectDetailsPanel";

import { Activity, LayoutGrid, Network, BookOpen, Settings, ShieldCheck, Layers, Eye, ShieldAlert, Search, GitFork } from "lucide-react";

export default function BusinessObjectModelWorkspace() {
  // Synchronize store state with browser URL queries
  useBusinessObjectUrlState();

  const { activeTab, setActiveTab, searchQuery, setSearchQuery, selectedObjectId, setSelectedObjectId } = useBusinessObjectStore();

  const objects = getBusinessObjects();
  const attributes = getBusinessObjectAttributes();
  const relationships = getBusinessObjectRelationships();
  const gaps = getBusinessObjectGaps();

  const tabsList: Array<{ id: BOMTabType; label: string; icon: any }> = [
    { id: "resumen", label: "Resumen", icon: Activity },
    { id: "catalogo", label: "Catálogo", icon: LayoutGrid },
    { id: "object-map", label: "Mapa de objetos", icon: Network },
    { id: "dictionary", label: "Diccionario", icon: BookOpen },
    { id: "relationships", label: "Relaciones", icon: GitFork },
    { id: "service-domains", label: "Service Domains", icon: Settings },
    { id: "scenarios", label: "Escenarios", icon: Eye },
    { id: "impact", label: "Impacto", icon: ShieldAlert },
    { id: "coverage", label: "Cobertura", icon: Layers },
    { id: "gaps", label: "Gaps", icon: ShieldAlert }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 relative overflow-hidden" data-testid="bom-workspace">
      
      {/* 1. Header Metrics Dashboard */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
            RAIA-MOD-003
          </span>
          <h1 className="text-md font-bold text-slate-800 leading-none mt-1">
            Business Object Model
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Diccionario canónico, relaciones de negocio, cardinalidades e impacto en el SAR previsional.
          </p>
        </div>

        {/* Dynamic metrics cards */}
        <div className="flex items-center gap-3 overflow-x-auto max-w-full">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">OBJETOS CANÓNICOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{objects.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">ATRIBUTOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{attributes.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 tracking-wider block">RELACIONES</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{relationships.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 tracking-wider block">GAPS P0</span>
            <span className="text-xs font-bold text-red-650 font-mono">
              {gaps.filter((g) => g.severity === "P0").length}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Controls and switcher dropdown bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Active object selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Objeto de Negocio:</span>
            <select
              value={selectedObjectId || ""}
              onChange={(e) => setSelectedObjectId(e.target.value)}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-850 focus:outline-none"
            >
              {objects.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.id} - {o.nameEs}
                </option>
              ))}
            </select>
          </div>

          {/* Navigation tab bar */}
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

        {/* Search */}
        <div className="relative w-44 sm:w-56 shrink-0">
          <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
            <Search size={12} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar objeto..."
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-slate-400 rounded px-2.5 py-1 pl-7.5 text-xs text-slate-700 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. Panel Container content */}
      <div className="flex-1 overflow-y-auto min-h-0 relative bg-slate-50">
        {activeTab === "resumen" && <ResumenTab />}
        {activeTab === "catalogo" && <CatalogoTab />}
        {activeTab === "object-map" && <ObjectMapTab />}
        {activeTab === "dictionary" && <DiccionarioTab />}
        {activeTab === "relationships" && <RelacionesTab />}
        {activeTab === "service-domains" && <ServiceDomainsTab />}
        {activeTab === "scenarios" && <EscenariosTab />}
        {activeTab === "impact" && <ImpactoTab />}
        {activeTab === "coverage" && <CoberturaTab />}
        {activeTab === "gaps" && <GapsTab />}
      </div>

      {/* 4. Details panel */}
      <ObjectDetailsPanel />
    </div>
  );
}
