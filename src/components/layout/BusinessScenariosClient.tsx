"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ChevronRight, Menu, X, Info, Layers, BookOpen } from "lucide-react";
import { getScenarios, getServiceDomains } from "../../domain/repositories/landscapeRepository";
import { BusinessScenario, ServiceDomain } from "../../domain/types";
import RaiaSequenceDiagram, { DetailedSequence } from "../../features/business-scenarios/sequence-diagram/components/RaiaSequenceDiagram";
import sequenceBundle from "../../data/business-scenarios/scenario-sequences.json";
import { useScenarioNarrative } from "../../features/business-scenarios/narrative/hooks/useScenarioNarrative";
import ScenarioArchitectureNarrativeComponent from "../../features/business-scenarios/narrative/components/ScenarioArchitectureNarrative";
import { ScenarioStepNarrative } from "../../domain/types/scenarioNarrativeTypes";
import ScenarioStepsWorkspace from "../../features/business-scenarios/components/ScenarioStepsWorkspace";

export default function BusinessScenariosClient() {
  const [scenarios, setScenarios] = useState<BusinessScenario[]>([]);
  const [serviceDomains, setServiceDomains] = useState<ServiceDomain[]>([]);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeDetailTab, setActiveDetailTab] = useState<"narrative" | "steps">("steps");
  
  const { narrative, loading: narrativeLoading } = useScenarioNarrative(selectedScenarioId);

  useEffect(() => {
    try {
      const scenData = getScenarios();
      const sdData = getServiceDomains();
      setScenarios(scenData);
      setServiceDomains(sdData);
      if (scenData.length > 0) {
        selectScenario(scenData[0].id);
      }
    } catch (e) {
      console.error("Error loading scenarios or service domains", e);
    }
  }, []);

  function selectScenario(scenarioId: string) {
    setSelectedScenarioId(scenarioId);

    const scenarioSequence =
      sequenceBundle[
        scenarioId as keyof typeof sequenceBundle
      ] as DetailedSequence | undefined;

    const firstStep =
      [...(scenarioSequence?.messages ?? [])]
        .sort((a, b) => a.sequence - b.sequence)[0]
        ?.sequence ?? 1;

    setActiveStep(firstStep);
  }

  const selectedScenario = scenarios.find((s) => s.id === selectedScenarioId);

  const detailedSequence = sequenceBundle[selectedScenarioId as keyof typeof sequenceBundle] as DetailedSequence | undefined;
  
  const hasRenderableSequence =
    Boolean(detailedSequence) &&
    Array.isArray(detailedSequence?.participants) &&
    (detailedSequence?.participants.length ?? 0) > 0 &&
    Array.isArray(detailedSequence?.messages) &&
    (detailedSequence?.messages.length ?? 0) > 0;

  function getScenarioStepCount(scenario: BusinessScenario, sequence?: DetailedSequence): number {
    if (sequence?.messages?.length) {
      return sequence.messages.length;
    }
    return scenario.steps?.length ?? 0;
  }

  const handleDiagramStepSelect = (sequence: number) => {
    setActiveStep(sequence);
    // Automatically switch tab to steps to show step analysis details when clicked in the SVG
    setActiveDetailTab("steps");
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 overflow-hidden" data-testid="business-scenarios-page">
      
      {/* Workspace container */}
      {scenarios.length > 0 && selectedScenario && (
        <div className="flex-1 flex min-h-0 w-full relative overflow-hidden" data-testid="scenario-detail" data-selected-scenario-id={selectedScenario.id}>
          
          {/* Panel 1: Scenarios Catalog Sidebar (Left) */}
          <aside 
            data-testid="scenario-catalog"
            className={`${
              sidebarOpen ? "w-64 xl:w-72" : "w-0 overflow-hidden border-none"
            } border-r border-slate-200 bg-white flex flex-col shrink-0 min-h-0 transition-all duration-300 relative z-10`}
          >
            {/* Catalog Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-slate-700" />
                <h2 className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                  Escenarios (0.1.0)
                </h2>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                title="Colapsar panel"
                aria-label="Colapsar panel"
              >
                <X size={14} />
              </button>
            </div>

            {/* Catalog List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 bg-white">
              {scenarios.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => selectScenario(scen.id)}
                  data-testid="scenario-card"
                  data-scenario-id={scen.id}
                  aria-pressed={selectedScenarioId === scen.id}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col justify-between text-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    selectedScenarioId === scen.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <span className="font-extrabold text-xs leading-snug">{scen.name}</span>
                    <ChevronRight size={14} className={`shrink-0 ml-2 mt-0.5 ${selectedScenarioId === scen.id ? "text-raia-turquoise" : "text-slate-400"}`} />
                  </div>
                  <span className={`text-[9px] mt-1.5 block font-medium leading-none ${selectedScenarioId === scen.id ? "text-slate-400" : "text-slate-500"}`}>
                    {getScenarioStepCount(scen, sequenceBundle[scen.id as keyof typeof sequenceBundle] as DetailedSequence)} {getScenarioStepCount(scen, sequenceBundle[scen.id as keyof typeof sequenceBundle] as DetailedSequence) === 1 ? 'paso estructurado' : 'pasos estructurados'}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Catalog Sidebar Toggle trigger (visible when sidebar is closed) */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="absolute left-4 top-4 z-20 w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-md transition-all hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Mostrar catálogo"
              aria-label="Mostrar catálogo"
            >
              <Menu size={16} />
            </button>
          )}

          {/* Panel 2: Sequence Diagram (Center) */}
          <section className="flex-1 flex flex-col min-h-0 bg-slate-50 relative">
            
            {/* Header metadata bar */}
            <header className="px-6 py-3 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <Link
                  href="/"
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shrink-0"
                  title="Volver al Portal Principal"
                  aria-label="Volver al Portal Principal"
                >
                  <ArrowLeft size={16} />
                </Link>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] font-extrabold text-raia-blue-inst uppercase tracking-wider bg-blue-50 border border-blue-100 px-1.5 py-0.2 rounded">
                      ID: {selectedScenario.id}
                    </span>
                    <span className="text-[9px] font-extrabold text-amber-700 uppercase tracking-wider bg-amber-50 border border-amber-100 px-1.5 py-0.2 rounded">
                      Proposed
                    </span>
                    <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded">
                      Pending Validation
                    </span>
                  </div>
                  <h1 className="text-sm font-bold text-slate-800 leading-tight truncate mt-0.5">
                    {selectedScenario.name}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="hidden sm:inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                  {getScenarioStepCount(selectedScenario, detailedSequence)} pasos
                </span>
              </div>
            </header>

            {/* Diagram content wrapper */}
            <div className="flex-1 min-h-0 overflow-hidden p-3 flex items-stretch" data-testid="scenario-sequence-diagram">
              {hasRenderableSequence ? (
                <RaiaSequenceDiagram
                  sequence={detailedSequence!}
                  activeStep={activeStep}
                  onStepClick={handleDiagramStepSelect}
                />
              ) : (
                <div className="p-8 text-left text-slate-700 border border-slate-200 rounded-xl bg-white max-w-lg mx-auto shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">No fue posible generar el diagrama de secuencia.</h3>
                  <p className="text-xs mb-3">Errores encontrados:</p>
                  <ul className="list-disc pl-5 text-xs space-y-1 mb-4 text-red-600 font-medium">
                    {!detailedSequence?.participants?.length && <li>El escenario no contiene participantes.</li>}
                    {!detailedSequence?.messages?.length && <li>El escenario no contiene mensajes.</li>}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Panel 3: Details Pane (Right) */}
          <section className="w-[440px] xl:w-[500px] bg-white flex flex-col shrink-0 min-h-0 border-l border-slate-200 shadow-md">
            
            {/* Tabs Selector Header */}
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex gap-1" role="tablist" aria-label="Secciones del escenario">
                <button
                  role="tab"
                  aria-selected={activeDetailTab === "steps"}
                  onClick={() => setActiveDetailTab("steps")}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeDetailTab === "steps"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Pasos y Flujo
                </button>
                <button
                  role="tab"
                  aria-selected={activeDetailTab === "narrative"}
                  onClick={() => setActiveDetailTab("narrative")}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeDetailTab === "narrative"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Narrativa Arquitectónica
                </button>
              </div>
            </div>

            {/* Scrollable details body */}
            <div className="flex-1 overflow-y-auto min-h-0">
              
              {/* Scenario Description Banner */}
              <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex gap-2.5">
                <Info size={16} className="text-raia-blue-inst shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {selectedScenario.description}
                </p>
              </div>

              {/* TAB 1: Narrative (rendered inside DOM wrapper with display toggling to satisfy Playwright DOM selector comparisons) */}
              <div 
                data-testid="scenario-architecture-narrative"
                style={{ display: activeDetailTab === "narrative" ? "block" : "none" }}
                className="p-4 space-y-4"
              >
                {narrativeLoading ? (
                  <div className="animate-pulse space-y-3">
                    <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  </div>
                ) : (
                  narrative ? (
                    <ScenarioArchitectureNarrativeComponent
                      narrative={narrative as any}
                    />
                  ) : (
                    <div className="text-center text-xs text-slate-400 py-6">
                      No hay narrativa disponible para este escenario.
                    </div>
                  )
                )}
              </div>

              {/* TAB 2: Steps Workspace (rendered inside DOM wrapper with display toggling) */}
              <div 
                data-testid="scenario-steps-workspace"
                style={{ display: activeDetailTab === "steps" ? "block" : "none" }}
              >
                <ScenarioStepsWorkspace
                  sequence={detailedSequence}
                  stepNarratives={(narrative?.stepNarratives ?? []) as ScenarioStepNarrative[]}
                  activeStep={activeStep}
                  onStepChange={setActiveStep}
                />
              </div>

            </div>
          </section>

        </div>
      )}
    </div>
  );
}
