import React from "react";
import { useControlRecordStore, CRMTabType } from "../store/useControlRecordStore";
import { useControlRecordUrlState } from "../hooks/useControlRecordUrlState";
import {
  getControlRecords,
  getControlRecordStates,
  getControlRecordTransitions,
  getControlRecordGaps
} from "../../../domain/repositories/controlRecordRepository";

// Import tabs
import ResumenTab from "./ResumenTab";
import CatalogoTab from "./CatalogoTab";
import StateMachineTab from "./StateMachineTab";
import TransicionesTab from "./TransicionesTab";
import OperacionesTab from "./OperacionesTab";
import ControlesTab from "./ControlesTab";
import EscenariosTab from "./EscenariosTab";
import CoberturaTab from "./CoberturaTab";
import GapsTab from "./GapsTab";
import ControlRecordDetailsPanel from "./ControlRecordDetailsPanel";

import { Activity, LayoutGrid, Network, GitCommit, Settings, ShieldCheck, Layers, Eye, ShieldAlert, Search } from "lucide-react";

export default function ControlRecordWorkspace() {
  // Synchronize store state variables with URL query parameters
  useControlRecordUrlState();

  const { activeTab, setActiveTab, searchQuery, setSearchQuery, selectedControlRecordId, setSelectedControlRecordId } = useControlRecordStore();

  const records = getControlRecords();
  const states = getControlRecordStates();
  const transitions = getControlRecordTransitions();
  const gaps = getControlRecordGaps();

  // Load active Control Record nameEs
  const activeRecord = records.find((r) => r.id === selectedControlRecordId);

  const tabsList: Array<{ id: CRMTabType; label: string; icon: any }> = [
    { id: "resumen", label: "Resumen", icon: Activity },
    { id: "catalogo", label: "Catálogo", icon: LayoutGrid },
    { id: "state-machine", label: "Máquina de estados", icon: Network },
    { id: "transitions", label: "Transiciones", icon: GitCommit },
    { id: "operations", label: "Operaciones y eventos", icon: Settings },
    { id: "controls", label: "Controles y evidencias", icon: ShieldCheck },
    { id: "scenarios", label: "Escenarios", icon: Eye },
    { id: "coverage", label: "Cobertura", icon: Layers },
    { id: "gaps", label: "Gaps", icon: ShieldAlert }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 relative overflow-hidden" data-testid="crm-workspace">
      
      {/* 1. Header Metrics Dashboard */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
            RAIA-MOD-002
          </span>
          <h1 className="text-md font-bold text-slate-800 leading-none mt-1">
            Control Record Model
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Ciclos de vida lógicos, transiciones, invariantes, disparadores y conformidad de escenarios.
          </p>
        </div>

        {/* Dynamic metrics cards */}
        <div className="flex items-center gap-3 overflow-x-auto max-w-full">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">CONTROL RECORDS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{records.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">ESTADOS</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{states.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">TRANSICIONES</span>
            <span className="text-xs font-bold text-slate-800 font-mono">{transitions.length}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-center shrink-0">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">GAPS P0</span>
            <span className="text-xs font-bold text-red-600 font-mono">
              {gaps.filter((g) => g.severity === "P0").length}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Controls and active selector dropdown bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Active Control Record switcher dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Control Record:</span>
            <select
              value={selectedControlRecordId || ""}
              onChange={(e) => setSelectedControlRecordId(e.target.value)}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none"
            >
              {records.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.id} - {r.nameEs}
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
            placeholder="Buscar en el modelo..."
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-slate-400 rounded px-2.5 py-1 pl-7.5 text-xs text-slate-700 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. Panel Container content */}
      <div className="flex-1 overflow-y-auto min-h-0 relative">
        {activeTab === "resumen" && <ResumenTab />}
        {activeTab === "catalogo" && <CatalogoTab />}
        {activeTab === "state-machine" && <StateMachineTab />}
        {activeTab === "transitions" && <TransicionesTab />}
        {activeTab === "operations" && <OperacionesTab />}
        {activeTab === "controls" && <ControlesTab />}
        {activeTab === "scenarios" && <EscenariosTab />}
        {activeTab === "coverage" && <CoberturaTab />}
        {activeTab === "gaps" && <GapsTab />}
      </div>

      {/* 4. Side Inspector sidebar */}
      <ControlRecordDetailsPanel />
    </div>
  );
}
