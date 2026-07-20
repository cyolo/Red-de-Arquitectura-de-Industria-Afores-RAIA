import React from "react";
import { useControlRecordStore } from "../store/useControlRecordStore";
import {
  getControlRecordById,
  getControlRecordStates,
  getReachableStates,
  getUnreachableStates,
  getDeadEndStates,
  getMissingTransitionCoverage
} from "../../../domain/repositories/controlRecordRepository";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export default function CoberturaTab() {
  const { selectedControlRecordId } = useControlRecordStore();

  const record = getControlRecordById(selectedControlRecordId || "");
  const allStates = getControlRecordStates().filter((s) => s.controlRecordId === selectedControlRecordId);

  const reachable = getReachableStates(selectedControlRecordId || "");
  const unreachable = getUnreachableStates(selectedControlRecordId || "");
  const deadEnds = getDeadEndStates(selectedControlRecordId || "");
  const coverageGaps = getMissingTransitionCoverage(selectedControlRecordId || "");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="cobertura-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Análisis de Cobertura y Reachability del Grafo
        </h3>
      </div>

      {record && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 shrink-0">
          {/* Reachable card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">ESTADOS ALCANZABLES</span>
              <span className="text-xl font-extrabold text-slate-800 mt-1 block">{reachable.length} / {allStates.length}</span>
            </div>
            <div className="text-emerald-500 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
              <CheckCircle size={20} />
            </div>
          </div>

          {/* Unreachable card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">ESTADOS NO ALCANZABLES</span>
              <span className="text-xl font-extrabold text-slate-800 mt-1 block">{unreachable.length}</span>
            </div>
            <div className={unreachable.length > 0 ? "text-red-500 bg-red-50 p-2 rounded-lg border border-red-100" : "text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-200"}>
              <XCircle size={20} />
            </div>
          </div>

          {/* Dead Ends card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">ESTADOS SIN SALIDA (DEAD END)</span>
              <span className="text-xl font-extrabold text-slate-800 mt-1 block">{deadEnds.length}</span>
            </div>
            <div className={deadEnds.length > 0 ? "text-amber-500 bg-amber-50 p-2 rounded-lg border border-amber-100" : "text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-200"}>
              <AlertTriangle size={20} />
            </div>
          </div>
        </div>
      )}

      {/* Warnings & Diagnostics list */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wider">Reporte de Diagnóstico</h4>
        
        {coverageGaps.length > 0 ? (
          <div className="space-y-2">
            {coverageGaps.map((gap, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 bg-red-50/40 border border-red-100 text-xs text-red-800 rounded-lg">
                <AlertTriangle size={14} className="shrink-0" />
                <span className="font-semibold">{gap}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 p-3 bg-emerald-50/40 border border-emerald-100 text-xs text-emerald-800 rounded-lg">
            <CheckCircle size={14} className="shrink-0" />
            <span className="font-bold">✓ El grafo de la máquina de estados está completamente cerrado, conectado y libre de dead-ends o estados no alcanzables.</span>
          </div>
        )}
      </div>
    </div>
  );
}
