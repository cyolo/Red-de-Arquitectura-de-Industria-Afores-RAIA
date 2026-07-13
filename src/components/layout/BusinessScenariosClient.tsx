"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ChevronRight } from "lucide-react";
import { getScenarios, getServiceDomains } from "../../domain/repositories/landscapeRepository";
import { BusinessScenario, ServiceDomain } from "../../domain/types";
import RaiaSequenceDiagram, { DetailedSequence } from "../../features/business-scenarios/sequence-diagram/components/RaiaSequenceDiagram";
import sequenceBundle from "../../data/business-scenarios/scenario-sequences.json";

export default function BusinessScenariosClient() {
  const [scenarios, setScenarios] = useState<BusinessScenario[]>([]);
  const [serviceDomains, setServiceDomains] = useState<ServiceDomain[]>([]);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    try {
      const scenData = getScenarios();
      const sdData = getServiceDomains();
      setScenarios(scenData);
      setServiceDomains(sdData);
      if (scenData.length > 0) {
        setSelectedScenarioId(scenData[0].id);
      }
    } catch (e) {
      console.error("Error loading scenarios or service domains", e);
    }
  }, []);

  const selectedScenario = scenarios.find((s) => s.id === selectedScenarioId);

  const getSdName = (id: string) => {
    const sd = serviceDomains.find((s) => s.id === id);
    return sd ? sd.nameEs : id;
  };

  const getSdSlug = (id: string) => {
    const sd = serviceDomains.find((s) => s.id === id);
    return sd ? sd.slug : "";
  };

  const detailedSequence = sequenceBundle[selectedScenarioId as keyof typeof sequenceBundle] as DetailedSequence | undefined;
  
  // Try to find the step in detailedSequence first, fallback to basic steps array
  const activeStepDetail = detailedSequence 
    ? detailedSequence.messages.find((m) => m.sequence === activeStep)
    : selectedScenario?.steps?.find((step) => step.stepNumber === activeStep);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={14} />
          Volver al Portal Principal
        </Link>

        {/* Hero Header */}
        <div className="bg-slate-900 rounded-3xl text-white p-8 md:p-10 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-raia-blue-inst/20 border border-raia-blue-inst/40 flex items-center justify-center text-raia-turquoise">
              <Compass size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                RAIA Business Scenarios
              </h1>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
                Catálogo e Interacción de Secuencias del SAR
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-4xl">
            Catálogo dinámico de escenarios lógicos de industria propuestos. A continuación puede visualizar y simular de extremo a extremo las interacciones ordenadas entre Service Domains necesarios para ejecutar trámites clave del Sistema de Ahorro para el Retiro.
          </p>
        </div>

        {/* Interactive Scenario Explorer */}
        {scenarios.length > 0 && selectedScenario && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar selector */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Escenarios Propuestos (0.1.0)
              </h2>
              <div className="space-y-2">
                {scenarios.map((scen) => (
                  <button
                    key={scen.id}
                    onClick={() => {
                      setSelectedScenarioId(scen.id);
                      setActiveStep(1);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col justify-between text-xs ${
                      selectedScenarioId === scen.id
                        ? "bg-slate-900 text-white border-slate-800 shadow-md"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <span className="font-bold text-xs leading-snug">{scen.name}</span>
                      <ChevronRight size={14} className={`shrink-0 ml-2 mt-0.5 ${selectedScenarioId === scen.id ? "text-raia-turquoise" : "text-slate-400"}`} />
                    </div>
                    <span className={`text-[10px] mt-2 block font-medium leading-relaxed ${selectedScenarioId === scen.id ? "text-slate-400" : "text-slate-500"}`}>
                      {scen.steps.length} pasos estructurados
                    </span>
                  </button>
                ))}
              </div>

              {/* Stepper Logic for Messages */}
              {(detailedSequence?.messages || []).map((msg, idx) => {
                const isActive = msg.sequence === activeStep;
                const sourceParticipant = detailedSequence?.participants.find(p => p.instanceId === msg.sourceParticipantInstanceId);
                const targetParticipant = detailedSequence?.participants.find(p => p.instanceId === msg.targetParticipantInstanceId);
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(msg.sequence)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col justify-between text-xs ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-800 shadow-md"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
                        isActive ? "bg-raia-turquoise text-slate-900" : "bg-slate-100 text-slate-600"
                      }`}>
                        {msg.sequence}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <span className={`text-[10px] font-bold block uppercase tracking-wider ${isActive ? "text-raia-turquoise" : "text-raia-blue-inst"}`}>
                          {msg.label || `Paso ${msg.sequence}`}
                        </span>
                        <span className="text-[11px] font-bold block truncate mt-0.5">
                          {sourceParticipant?.label || msg.sourceParticipantInstanceId} &rarr; {targetParticipant?.label || msg.targetParticipantInstanceId}
                        </span>
                      </div>
                    </div>

                    {isActive && msg.description && (
                      <p className="text-[11px] text-slate-300 mt-3 leading-relaxed border-t border-slate-800 pt-2 font-medium">
                        {msg.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stepper & Visual Sequence Diagram */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-extrabold text-raia-blue-inst uppercase tracking-wider bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                    ID: {selectedScenario.id}
                  </span>
                  <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-wider bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
                    Estado: Proposed
                  </span>
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    Validación: Pending
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-800 mt-2">
                  {selectedScenario.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {selectedScenario.description}
                </p>
              </div>

              {/* Graphical SVG Sequence Flow Engine */}
              <div className="mb-6">
                {detailedSequence ? (
                  <RaiaSequenceDiagram
                    sequence={detailedSequence}
                    activeStep={activeStep}
                    onStepClick={setActiveStep}
                  />
                ) : (
                  <div className="p-10 text-center text-slate-500 border border-slate-200 rounded-xl bg-slate-50">
                    Diagrama no disponible para este escenario.
                  </div>
                )}
              </div>

              {/* Detailed active step documentation */}
              {activeStepDetail && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-950 text-white text-[10px] font-bold flex items-center justify-center">
                        {activeStep}
                      </span>
                      <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Detalle Técnico del Flujo
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                      Evento: {(activeStepDetail as any).label || (activeStepDetail as any).eventName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase block">Origen</span>
                      <span className="text-[10px] text-slate-800 block font-bold">{(activeStepDetail as any).sourceParticipantInstanceId || (activeStepDetail as any).sourceId}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase block">Destino</span>
                      <span className="text-[10px] text-slate-800 block font-bold">{(activeStepDetail as any).targetParticipantInstanceId || (activeStepDetail as any).targetId}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                    <span className="font-bold text-slate-800 block mb-1">Descripción:</span>
                    {activeStepDetail.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
