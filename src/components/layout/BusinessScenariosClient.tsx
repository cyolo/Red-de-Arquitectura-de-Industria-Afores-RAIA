"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ChevronRight } from "lucide-react";
import { getScenarios, getServiceDomains } from "../../domain/repositories/landscapeRepository";
import { BusinessScenario, ServiceDomain } from "../../domain/types";
import RaiaSequenceDiagram from "../../features/business-scenarios/sequence-diagram/components/RaiaSequenceDiagram";

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

  // Planned categories for V0.2.0
  const plannedCategories = [
    {
      title: "Afiliación y Cuenta",
      scenarios: ["Localización de cuenta individual", "Asignación automática de cuentas", "Reasignación por desempeño", "Unificación de cuentas duplicadas", "Separación de cuentas (IMSS/ISSSTE)"],
    },
    {
      title: "Inversión y SIEFORE",
      scenarios: ["Asignación automática a SIEFORE Generacional", "Construcción y rebalanceo de portafolio", "Ejecución y liquidación de operaciones", "Valuación de instrumentos financieros"],
    },
    {
      title: "Retiros y Pensiones",
      scenarios: ["Retiro por desempleo (IMSS/ISSSTE)", "Ayuda para gastos de matrimonio", "Elección de modalidad de pensión", "Transferencia de fondos para renta vitalicia"],
    },
    {
      title: "Fondo de Pensiones para el Bienestar",
      scenarios: ["Identificación de cuentas inactivas elegibles", "Transferencia de saldos no reclamados", "Cálculo del complemento de pensión"],
    },
  ];

  const activeStepDetail = selectedScenario?.steps.find((step) => step.stepNumber === activeStep);

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

              {/* Planned Scenarios Accordion */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  Próximos Escenarios (Roadmap V0.2.0)
                </h2>
                <div className="space-y-4">
                  {plannedCategories.map((cat, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 space-y-2">
                      <h3 className="text-[11px] font-extrabold text-slate-800 border-b border-slate-50 pb-1.5 uppercase tracking-wide">
                        {cat.title}
                      </h3>
                      <ul className="space-y-1">
                        {cat.scenarios.map((s, sIdx) => (
                          <li key={sIdx} className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
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
                <RaiaSequenceDiagram
                  scenario={selectedScenario}
                  serviceDomains={serviceDomains}
                  activeStep={activeStep}
                  onStepClick={setActiveStep}
                />
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
                      Evento: {activeStepDetail.eventName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase block">Origen</span>
                      <Link
                        href={`/service-domains/${getSdSlug(activeStepDetail.sourceId)}`}
                        className="text-xs font-bold text-raia-blue-inst hover:underline block truncate"
                      >
                        {getSdName(activeStepDetail.sourceId)}
                      </Link>
                      <span className="text-[10px] text-slate-400 block font-medium">{activeStepDetail.sourceId}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase block">Destino</span>
                      <Link
                        href={`/service-domains/${getSdSlug(activeStepDetail.targetId)}`}
                        className="text-xs font-bold text-raia-blue-inst hover:underline block truncate"
                      >
                        {getSdName(activeStepDetail.targetId)}
                      </Link>
                      <span className="text-[10px] text-slate-400 block font-medium">{activeStepDetail.targetId}</span>
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
