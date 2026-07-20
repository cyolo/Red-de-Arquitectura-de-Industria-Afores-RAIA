import React from "react";
import { X, Play, ShieldAlert, FileText, CheckCircle } from "lucide-react";
import { useControlRecordStore } from "../store/useControlRecordStore";
import {
  getControlRecordStates,
  getControlRecordTransitions,
  getControlRecordTriggers,
  getControlRecordGuards,
  getControlRecordActions
} from "../../../domain/repositories/controlRecordRepository";
import { getServiceOperationById } from "../../../domain/repositories/landscapeRepository";

export default function ControlRecordDetailsPanel() {
  const { selectedStateId, selectedTransitionId, setSelectedStateId, setSelectedTransitionId } = useControlRecordStore();

  if (!selectedStateId && !selectedTransitionId) return null;

  const state = selectedStateId
    ? getControlRecordStates().find((s) => s.id === selectedStateId)
    : null;

  const transition = selectedTransitionId
    ? getControlRecordTransitions().find((t) => t.id === selectedTransitionId)
    : null;

  const handleClose = () => {
    setSelectedStateId(null);
    setSelectedTransitionId(null);
  };

  return (
    <aside
      className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full focus:outline-none"
      data-testid="ia-details-panel"
      role="dialog"
      aria-label="Detalle de la Máquina de Estados"
    >
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
            {selectedStateId || selectedTransitionId}
          </span>
          <span className="text-xs font-bold text-slate-300">
            {state ? "Estado" : "Transición"}
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-slate-400 hover:text-white rounded-md p-1 hover:bg-slate-800 transition-colors"
          title="Cerrar panel (Esc)"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {state && (
          <div className="space-y-5">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{state.name}</h2>
              <span className="inline-block text-[9px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded mt-1 uppercase">
                Tipo: {state.stateKind}
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descripción</h4>
              <p className="text-xs text-slate-650 leading-relaxed mt-1">{state.description}</p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Criterios de Entrada</h4>
              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1 mt-1.5">
                {state.entryCriteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Criterios de Salida</h4>
              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1 mt-1.5">
                {state.exitCriteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {transition && (
          <div className="space-y-5">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{transition.name}</h2>
              <span className="inline-block text-[9px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded mt-1 uppercase">
                Tipo: {transition.transitionType}
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descripción</h4>
              <p className="text-xs text-slate-650 leading-relaxed mt-1">{transition.description}</p>
            </div>

            {/* Service Operation */}
            {transition.serviceOperationId && (
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Operation Ejecutada</h4>
                <div className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-200 rounded mt-1.5">
                  <div>
                    <span className="font-mono text-[9px] font-bold bg-slate-200 text-slate-700 px-1 rounded mr-1.5">
                      {transition.serviceOperationId}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {getServiceOperationById ? getServiceOperationById(transition.serviceOperationId)?.name || transition.serviceOperationId : transition.serviceOperationId}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
