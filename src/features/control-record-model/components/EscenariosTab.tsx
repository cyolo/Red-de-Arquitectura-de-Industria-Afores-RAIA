import React from "react";
import { useControlRecordStore } from "../store/useControlRecordStore";
import { getControlRecordScenarioTraces, getScenarioConformance, getControlRecordTransitions } from "../../../domain/repositories/controlRecordRepository";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function EscenariosTab() {
  const { selectedControlRecordId } = useControlRecordStore();

  const traces = getControlRecordScenarioTraces().filter(
    (t) => t.controlRecordId === selectedControlRecordId
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="escenarios-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Trazas de Conformidad con Escenarios de Negocio
        </h3>
      </div>

      <div className="space-y-5">
        {traces.map((trace) => {
          const conformance = getScenarioConformance(trace.businessScenarioId || "");
          return (
            <div key={trace.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {trace.id}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 mt-1">{trace.traceName}</h4>
                  <p className="text-[10px] text-slate-500">{trace.description}</p>
                </div>

                <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded border ${
                  conformance.conforms
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}>
                  {conformance.conforms ? (
                    <>
                      <CheckCircle size={12} />
                      <span>CONFORME</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={12} />
                      <span>NO CONFORME</span>
                    </>
                  )}
                </div>
              </div>

              {/* Trace steps */}
              <div className="border-t border-slate-150 pt-3">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Pasos de la Secuencia
                </span>
                <div className="space-y-2">
                  {trace.steps.map((step) => {
                    const transName = getControlRecordTransitions().find(t => t.id === step.transitionId)?.name || step.transitionId;
                    return (
                      <div key={step.sequence} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                        <div>
                          <span className="font-mono text-[9px] font-bold text-slate-400 mr-2">Paso {step.sequence}</span>
                          <span className="font-semibold text-slate-850">{transName}</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1 rounded">
                          {step.expectedSourceStateId} &rarr; {step.expectedTargetStateId}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
