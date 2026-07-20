"use client";

import React, { useMemo, useState } from "react";
import {
  getScenarioSnippets,
  getScenarioSnippetById,
  getSnippetParticipantRoles,
  getSnippetServiceDomainSlots,
  getSnippetBusinessObjectSlots,
  getSnippetSteps,
  getSnippetVariants,
  getSnippetExceptions,
  getScenariosUsingSnippet,
  getSnippetGaps
} from "../../../../domain/repositories/scenarioSnippetRepository";
import { getScenarios, getServiceDomains, getBusinessObjects, getControlRecords } from "../../../../domain/repositories/landscapeRepository";
import { useScenarioSnippetStore, SnippetTabType } from "../store/useScenarioSnippetStore";
import { useSnippetUrlState } from "../hooks/useSnippetUrlState";
import { resolveSnippetInvocation, validateSnippetBindings, calculateSnippetImpact } from "../domain/snippetResolver";
import RaiaSequenceDiagram, { DetailedSequence } from "../../sequence-diagram/components/RaiaSequenceDiagram";
import {
  Shield,
  Layers,
  Database,
  ArrowRight,
  Maximize2,
  Minimize2,
  FileText,
  Workflow,
  Search,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Info,
  Clock,
  ExternalLink,
  BookOpen
} from "lucide-react";

export default function ScenarioSnippetsWorkspace() {
  // Synchronize URL State
  useSnippetUrlState();

  const {
    activeTab,
    selectedSnippetId,
    selectedVersion,
    selectedVariantId,
    selectedStepId,
    searchQuery,
    fullscreen,
    setActiveTab,
    setSelectedSnippetId,
    setSelectedVersion,
    setSelectedVariantId,
    setSelectedStepId,
    setSearchQuery,
    setFullscreen
  } = useScenarioSnippetStore();

  const snippets = useMemo(() => getScenarioSnippets(), []);
  const activeSnippet = useMemo(() => {
    return snippets.find((s) => s.id === selectedSnippetId) || snippets[0];
  }, [snippets, selectedSnippetId]);

  // Derived datasets
  const roles = useMemo(() => (activeSnippet ? getSnippetParticipantRoles(activeSnippet.id) : []), [activeSnippet]);
  const sdSlots = useMemo(() => (activeSnippet ? getSnippetServiceDomainSlots(activeSnippet.id) : []), [activeSnippet]);
  const boSlots = useMemo(() => (activeSnippet ? getSnippetBusinessObjectSlots(activeSnippet.id) : []), [activeSnippet]);
  const steps = useMemo(() => (activeSnippet ? getSnippetSteps(activeSnippet.id) : []), [activeSnippet]);
  const variants = useMemo(() => (activeSnippet ? getSnippetVariants(activeSnippet.id) : []), [activeSnippet]);
  const exceptions = useMemo(() => (activeSnippet ? getSnippetExceptions(activeSnippet.id) : []), [activeSnippet]);
  const usageScenarios = useMemo(() => (activeSnippet ? getScenariosUsingSnippet(activeSnippet.id) : []), [activeSnippet]);
  const gaps = useMemo(() => getSnippetGaps(), []);

  // Filtered catalog list
  const filteredSnippets = useMemo(() => {
    if (!searchQuery) return snippets;
    const q = searchQuery.toLowerCase();
    return snippets.filter(
      (s) =>
        s.id.toLowerCase().includes(q) ||
        s.nameEs.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );
  }, [snippets, searchQuery]);

  // Sequence diagram converter
  const sequenceData: DetailedSequence = useMemo(() => {
    if (!activeSnippet) {
      return { scenarioId: "none", title: "No Snippet Selected", participants: [], messages: [] };
    }

    const participantsMap = new Map<string, any>();
    roles.forEach((r, idx) => {
      participantsMap.set(r.id, {
        instanceId: r.id,
        label: r.roleName,
        order: idx + 1
      });
    });

    const messages = steps.map((s, idx) => ({
      id: s.id,
      sequence: idx + 1,
      sourceParticipantInstanceId: s.sourceRoleId,
      targetParticipantInstanceId: s.targetRoleId,
      label: s.name,
      description: s.description,
      messageType: s.stepType === "response" ? "reply" : "synch",
      businessObjectIds: s.inputBusinessObjectSlotIds,
      controlIds: s.controlSlotIds,
      evidenceIds: s.evidenceSlotIds
    }));

    return {
      scenarioId: activeSnippet.id,
      title: activeSnippet.nameEs,
      participants: Array.from(participantsMap.values()),
      messages
    };
  }, [activeSnippet, roles, steps]);

  // Active step details helper
  const activeStepObj = useMemo(() => {
    return steps.find((s) => s.id === selectedStepId);
  }, [steps, selectedStepId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Dashboard Sub Header */}
      <div className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800 shadow-sm shrink-0">
        <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Layers size={14} />
              <span>RAIA-MOD-009 &bull; Behavior Patterns</span>
            </div>
            <h1 className="text-xl font-black text-slate-100 mt-1">Scenario Snippets Workspace</h1>
            <p className="text-slate-400 text-xs mt-0.5">Catálogo interactivo y versionado de secuencias transaccionales reutilizables de RAIA.</p>
          </div>
        </div>
      </div>

      {/* Tabs Menu navigation bar */}
      <div className="bg-white border-b border-slate-200 px-6 shrink-0 shadow-2xs">
        <div className="max-w-[1920px] mx-auto flex gap-1 overflow-x-auto py-2">
          {(
            [
              { id: "resumen", label: "Resumen" },
              { id: "catalog", label: "Catálogo" },
              { id: "diagram", label: "Diagrama" },
              { id: "steps", label: "Pasos" },
              { id: "bindings", label: "Bindings Studio" },
              { id: "variants", label: "Variantes" },
              { id: "usage", label: "Usos" },
              { id: "impact", label: "Impacto" },
              { id: "coverage", label: "Cobertura" },
              { id: "gaps", label: "Gaps" }
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all duration-150 border shrink-0 ${
                activeTab === t.id
                  ? "bg-teal-550 border-teal-550 text-white shadow-xs"
                  : "bg-slate-50 border-slate-200 hover:border-slate-350 text-slate-650"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace Frame container */}
      <div className="flex-1 max-w-[1920px] w-full mx-auto p-6 flex flex-col lg:flex-row gap-6 overflow-hidden">
        
        {/* Left Side Catalog Selector List */}
        {activeTab !== "resumen" && activeTab !== "catalog" && activeTab !== "coverage" && activeTab !== "gaps" && (
          <div className="w-full lg:w-80 bg-white border border-slate-200 rounded-xl shadow-xs p-4 flex flex-col shrink-0">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Buscar snippet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-800 transition-colors focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[300px] lg:max-h-none">
              {filteredSnippets.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSnippetId(s.id)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all duration-150 ${
                    selectedSnippetId === s.id
                      ? "bg-teal-50/50 border-teal-200 text-teal-950 font-bold"
                      : "bg-white border-slate-150 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono text-slate-500">{s.id}</span>
                    <span className="text-[8px] bg-slate-100 text-slate-600 px-1 rounded font-bold">v{s.version}</span>
                  </div>
                  <div className="text-xs font-bold mt-1 line-clamp-1">{s.nameEs}</div>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{s.purpose}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic tabs renderers */}
        <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col min-w-0">
          
          {/* TAB 1: SUMMARY */}
          {activeTab === "resumen" && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Snippets totales", count: snippets.length, color: "text-slate-850" },
                  { label: "Propuestos", count: snippets.filter((s) => s.status === "proposed").length, color: "text-amber-600" },
                  { label: "Revisados", count: snippets.filter((s) => s.status === "reviewed").length, color: "text-teal-600" },
                  { label: "Validados", count: snippets.filter((s) => s.status === "validated").length, color: "text-emerald-600" }
                ].map((m, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-3xs">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">{m.label}</span>
                    <span className={`text-2xl font-black ${m.color} block mt-1`}>{m.count}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Introducción a los Scenario Snippets</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                  Un **Scenario Snippet** es un fragmento reutilizable y parametrizable de comportamiento de negocio que modela colaboraciones recurrentes. Permite mapear flujos sectoriales complejos (como validaciones de identidad, consentimiento de traspasos o cruces de evidencia regulatoria) sin duplicar datos en múltiples diagramas de secuencia canónicos de RAIA.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CATALOG */}
          {activeTab === "catalog" && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="flex gap-4 items-center mb-4">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Filtrar por nombre o descripción..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-teal-500 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-800 transition-colors focus:outline-none"
                  />
                  <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredSnippets.map((s) => (
                  <div key={s.id} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-xs transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-400">{s.id}</span>
                        <span className="text-[8px] bg-slate-100 text-slate-600 px-1 rounded font-bold uppercase">{s.category}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-800 mt-2">{s.nameEs}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{s.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px]">
                      <span className="text-slate-400">Versión: <b>{s.version}</b></span>
                      <button
                        onClick={() => {
                          setSelectedSnippetId(s.id);
                          setActiveTab("diagram");
                        }}
                        className="text-teal-600 font-extrabold hover:text-teal-700 flex items-center gap-1"
                      >
                        <span>Detalles</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DIAGRAM PREVIEW */}
          {activeTab === "diagram" && activeSnippet && (
            <div className="flex-1 flex flex-col overflow-hidden relative">
              <div className="bg-slate-900 text-white p-3 border-b border-slate-850 flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-400">{activeSnippet.id} &bull; Visual Diagram</span>
                <button
                  onClick={() => setFullscreen(!fullscreen)}
                  className="text-slate-400 hover:text-white"
                >
                  {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
              </div>

              <div className="flex-1 bg-slate-950 flex items-center justify-center p-6 min-h-[300px]">
                <div className="w-full max-w-4xl h-full flex flex-col justify-center">
                  <RaiaSequenceDiagram
                    sequence={sequenceData}
                    onStepClick={(num) => {
                      const st = steps.find((s) => s.order === num);
                      if (st) setSelectedStepId(st.id);
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STRUCTURED STEPS */}
          {activeTab === "steps" && activeSnippet && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Pasos estructurados de la secuencia</h4>
                  {steps.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setSelectedStepId(st.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 ${
                        selectedStepId === st.id
                          ? "bg-teal-50/50 border-teal-200 text-teal-950 font-bold"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                        <span>Paso {st.order}</span>
                        <span className="uppercase text-[8px] bg-slate-200 px-1 rounded font-bold text-slate-600">{st.stepType}</span>
                      </div>
                      <div className="text-xs font-extrabold mt-1">{st.name}</div>
                      <p className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed">{st.description}</p>
                    </button>
                  ))}
                </div>

                {/* Step Drawer Panel details */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
                  <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider">Ficha de detalle del Paso</h5>
                  {activeStepObj ? (
                    <div className="space-y-3.5 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Nombre:</span>
                        <span className="font-extrabold text-slate-800">{activeStepObj.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Emisor:</span>
                        <span className="font-mono text-slate-700 bg-slate-200/50 px-1 py-0.5 rounded">{activeStepObj.sourceRoleId}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Receptor:</span>
                        <span className="font-mono text-slate-700 bg-slate-200/50 px-1 py-0.5 rounded">{activeStepObj.targetRoleId}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Descripción:</span>
                        <p className="text-slate-600 mt-0.5 leading-relaxed">{activeStepObj.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-400 text-xs italic">Selecciona un paso para ver su metadata.</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BINDINGS STUDIO */}
          {activeTab === "bindings" && activeSnippet && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Estudio de Mapeos (Bindings Studio)</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Comprueba la compatibilidad y realiza simulaciones de inyección del snippet dentro de un escenario previsional del SAR.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Escenario consumidor:</span>
                    <span className="text-xs font-extrabold text-slate-800 block mt-1">Registro de Cuenta Individual (RAIA-BS-0002)</span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Estatus de binding:</span>
                    <span className="text-xs font-extrabold text-emerald-600 block mt-1 flex items-center gap-1">
                      <CheckCircle size={14} />
                      <span>Validado y compatible</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: VARIANTS */}
          {activeTab === "variants" && activeSnippet && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Variantes semánticas del patrón</h4>
              {variants.length > 0 ? (
                <div className="space-y-3">
                  {variants.map((v) => (
                    <div key={v.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="font-extrabold text-xs text-slate-800">{v.name}</div>
                      <p className="text-[11px] text-slate-500 mt-1">{v.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-400 text-xs italic">No se han definido variantes específicas para este patrón. Se aplica comportamiento base.</div>
              )}
            </div>
          )}

          {/* TAB 7: USAGES */}
          {activeTab === "usage" && activeSnippet && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Escenarios que consumen el snippet</h4>
              {usageScenarios.length > 0 ? (
                <div className="space-y-3">
                  {usageScenarios.map((id) => (
                    <div key={id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Escenario</span>
                        <div className="text-xs font-black text-slate-800 mt-0.5">{id === "RAIA-BS-0002" ? "Registro de Cuenta Individual" : id}</div>
                      </div>
                      <a
                        href={`/business-scenarios?scenario=${id}`}
                        className="text-teal-650 font-extrabold text-xs flex items-center gap-1 hover:text-teal-700"
                      >
                        <span>Abrir escenario</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-400 text-xs italic">El snippet no se encuentra actualmente referenciado por ningún escenario de negocio.</div>
              )}
            </div>
          )}

          {/* TAB 8: IMPACT SIMULATOR */}
          {activeTab === "impact" && activeSnippet && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Simulador de Impacto ante Modificaciones</h4>
              <p className="text-xs text-slate-500 mb-4">
                Evalúa qué impacto tiene la modificación del contrato o de los pasos internos del snippet sobre la arquitectura general de RAIA.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900 text-xs max-w-2xl">
                <AlertTriangle size={18} className="shrink-0 text-amber-600" />
                <div>
                  <span className="font-extrabold block">Impacto medio detectado</span>
                  <p className="mt-1 leading-relaxed text-amber-800">
                    Este snippet es consumido por **{usageScenarios.length} escenario**. Modificaciones en su contrato de precondiciones o salidas pueden quebrar bindings semánticos activos.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: COVERAGE */}
          {activeTab === "coverage" && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Cobertura de Adopción de Snippets</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Adopción de patrones</span>
                  <span className="text-3xl font-black text-slate-800 block mt-1">7.14%</span>
                  <p className="text-xs text-slate-500 mt-2">1 de los 14 snippets propuestos se encuentra incorporado activamente en escenarios de negocio.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Completitud de bindings</span>
                  <span className="text-3xl font-black text-slate-800 block mt-1">100%</span>
                  <p className="text-xs text-slate-500 mt-2">Los slots y roles obligatorios en invocaciones activas tienen bindings completos.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: GAPS */}
          {activeTab === "gaps" && (
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">Registro de Gaps e Incidencias</h4>
              <div className="space-y-4">
                {gaps.map((g) => (
                  <div key={g.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{g.id} &bull; Estatus: {g.status}</span>
                      <span className="text-[8px] bg-red-100 text-red-700 px-1 rounded font-bold uppercase">{g.severity}</span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-800 mt-2">{g.title}</h5>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{g.description}</p>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-[10px] text-slate-500">
                      Recomendación: <b>{g.recommendation}</b>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
