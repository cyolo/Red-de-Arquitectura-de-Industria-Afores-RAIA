import React from "react";
import { useInformationArchitectureStore, IATabType } from "../store/useInformationArchitectureStore";
import { useInformationArchitectureUrlState } from "../hooks/useInformationArchitectureUrlState";
import {
  getInformationDomains,
  getInformationConcepts,
  getCanonicalBusinessObjects,
  getInformationAttributes,
  getInformationAssets,
  getDataProducts,
  getInformationArchitectureGaps
} from "../../../domain/repositories/informationArchitectureRepository";

// Import tabs
import ResumenTab from "./ResumenTab";
import DominiosTab from "./DominiosTab";
import ConceptosTab from "./ConceptosTab";
import ObjetosTab from "./ObjetosTab";
import LinajeTab from "./LinajeTab";
import PropiedadTab from "./PropiedadTab";
import CalidadTab from "./CalidadTab";
import ClasificacionLifecycleTab from "./ClasificacionLifecycleTab";
import ImpactoTab from "./ImpactoTab";
import GapsTab from "./GapsTab";
import InformationArchitectureDetailsPanel from "./InformationArchitectureDetailsPanel";

import { Award, BookOpen, Layers, Library, ShieldCheck, Compass, GitMerge, FileSpreadsheet, Activity, Search } from "lucide-react";

export default function InformationArchitectureWorkspace() {
  // Sync state variables directly with browser URLs
  useInformationArchitectureUrlState();

  const { activeTab, setActiveTab, searchQuery, setSearchQuery } = useInformationArchitectureStore();

  // Load canonical metrics sizes
  const domains = getInformationDomains();
  const concepts = getInformationConcepts();
  const objects = getCanonicalBusinessObjects();
  const attributes = getInformationAttributes();
  const assets = getInformationAssets();
  const products = getDataProducts();
  const gaps = getInformationArchitectureGaps();

  const tabsList: Array<{ id: IATabType; label: string; icon: any }> = [
    { id: "resumen", label: "Resumen", icon: Activity },
    { id: "dominios", label: "Dominios", icon: Library },
    { id: "conceptos", label: "Conceptos", icon: BookOpen },
    { id: "objetos", label: "Objetos", icon: FileSpreadsheet },
    { id: "linaje", label: "Linaje", icon: GitMerge },
    { id: "propiedad", label: "Propiedad", icon: Award },
    { id: "calidad", label: "Calidad", icon: ShieldCheck },
    { id: "clasificacion", label: "Clasificación & Ciclo", icon: Compass },
    { id: "impacto", label: "Impacto", icon: Layers },
    { id: "gaps", label: "Gaps", icon: Layers }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 relative overflow-hidden" data-testid="ia-workspace">
      
      {/* 1. Header & Summary Stats */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
            RAIA-MOD-001
          </span>
          <h1 className="text-md font-bold text-slate-800 leading-none mt-1">
            Information Architecture
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Estructura semántica, linaje y propiedad de la información en el ecosistema previsional.
          </p>
        </div>

        {/* Stats Dashboard Grid */}
        <div className="flex items-center gap-3 overflow-x-auto max-w-full">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">DOMINIOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{domains.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">CONCEPTOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{concepts.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">BUSINESS OBJECTS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{objects.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">ATRIBUTOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{attributes.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">GAPS</span>
            <span className="text-xs font-bold text-red-600 font-mono">{gaps.length}</span>
          </div>
        </div>
      </header>

      {/* 2. Navigation Tab Bar and Search Filters */}
      <div className="bg-white border-b border-slate-200 px-6 py-2 flex flex-wrap items-center justify-between gap-4 shrink-0">
        {/* Tabs switcher */}
        <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200 shrink-0" role="tablist">
          {tabsList.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
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

        {/* Global Search Bar */}
        <div className="relative w-44 sm:w-56 shrink-0">
          <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
            <Search size={12} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en semántica..."
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-slate-400 rounded px-2.5 py-1 pl-7.5 text-xs text-slate-700 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. Tab Contents panels */}
      <div className="flex-1 overflow-y-auto min-h-0 relative">
        {activeTab === "resumen" && <ResumenTab />}
        {activeTab === "dominios" && <DominiosTab />}
        {activeTab === "conceptos" && <ConceptosTab />}
        {activeTab === "objetos" && <ObjetosTab />}
        {activeTab === "linaje" && <LinajeTab />}
        {activeTab === "propiedad" && <PropiedadTab />}
        {activeTab === "calidad" && <CalidadTab />}
        {activeTab === "clasificacion" && <ClasificacionLifecycleTab />}
        {activeTab === "impacto" && <ImpactoTab />}
        {activeTab === "gaps" && <GapsTab />}
      </div>

      {/* 4. Side Inspector Drawer Panel */}
      <InformationArchitectureDetailsPanel />
    </div>
  );
}
