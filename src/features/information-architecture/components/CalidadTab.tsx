import React from "react";
import { getQualityRules } from "../../../domain/repositories/informationArchitectureRepository";

export default function CalidadTab() {
  const rules = getQualityRules();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="calidad-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Reglas de Calidad y Validaciones de Información
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shrink-0">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Métricas por Dimensión</h4>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Validez (Validity)</span>
              <span className="font-mono">{rules.filter(r => r.dimension === "validity").length} reglas</span>
            </div>
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Completitud (Completeness)</span>
              <span className="font-mono">{rules.filter(r => r.dimension === "completeness").length} reglas</span>
            </div>
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Consistencia (Consistency)</span>
              <span className="font-mono">{rules.filter(r => r.dimension === "consistency").length} reglas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600 w-52">Nombre de la Regla</th>
                <th className="p-3 font-bold text-slate-600 w-32">Dimensión</th>
                <th className="p-3 font-bold text-slate-600">Declaración de Regla (Statement)</th>
                <th className="p-3 font-bold text-slate-600 w-32">Severidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rules.map((r) => (
                <tr key={r.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{r.id}</td>
                  <td className="p-3 font-bold text-slate-800">{r.name}</td>
                  <td className="p-3 uppercase font-semibold text-slate-550">{r.dimension}</td>
                  <td className="p-3 text-slate-600 font-mono">{r.ruleStatement}</td>
                  <td className="p-3 uppercase">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      r.severity === "critical" ? "bg-red-50 text-red-700 border border-red-200" : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}>
                      {r.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
