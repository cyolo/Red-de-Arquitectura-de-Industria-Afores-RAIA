import React from "react";
import { getControlRecordTransitions, getControlRecordStates } from "../../../domain/repositories/controlRecordRepository";
import { useControlRecordStore } from "../store/useControlRecordStore";

export default function TransicionesTab() {
  const { selectedControlRecordId, setSelectedTransitionId } = useControlRecordStore();

  const transitions = getControlRecordTransitions().filter(
    (t) => t.controlRecordId === selectedControlRecordId
  );
  const states = getControlRecordStates().filter(
    (s) => s.controlRecordId === selectedControlRecordId
  );

  const getStateName = (id: string) => {
    return states.find((s) => s.id === id)?.name || id;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="transiciones-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Flujo de Transiciones de Estado
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600 w-44">Transición</th>
                <th className="p-3 font-bold text-slate-600 w-36">Estado Origen</th>
                <th className="p-3 font-bold text-slate-600 w-36">Estado Destino</th>
                <th className="p-3 font-bold text-slate-600 w-28">Tipo</th>
                <th className="p-3 font-bold text-slate-600">Disparador (Trigger)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {transitions.map((t) => (
                <tr key={t.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{t.id}</td>
                  <td className="p-3 font-bold text-slate-800">
                    <button onClick={() => setSelectedTransitionId(t.id)} className="hover:text-sky-650 text-left font-bold transition-colors">
                      {t.name}
                    </button>
                  </td>
                  <td className="p-3 font-semibold text-slate-700">{getStateName(t.sourceStateId)}</td>
                  <td className="p-3 font-semibold text-slate-700">{getStateName(t.targetStateId)}</td>
                  <td className="p-3 uppercase">
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-550 text-white">
                      {t.transitionType}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-slate-600">{t.triggerId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
