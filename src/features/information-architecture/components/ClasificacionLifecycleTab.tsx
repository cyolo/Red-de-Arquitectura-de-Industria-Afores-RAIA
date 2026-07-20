import React from "react";
import { getInformationClassifications, getRetentionPolicies, getCanonicalBusinessObjectById } from "../../../domain/repositories/informationArchitectureRepository";

export default function ClasificacionLifecycleTab() {
  const classifications = getInformationClassifications();
  const retentions = getRetentionPolicies();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="clasificacion-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Clasificación de Seguridad & Ciclo de Vida (Retención)
        </h3>
      </div>

      {/* Classifications */}
      <div className="space-y-4 shrink-0">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Categorías de Confidencialidad</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {classifications.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1 rounded">{c.id}</span>
                  <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200 uppercase">
                    Level {c.level}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-slate-800 mt-2">{c.name}</h5>
                <p className="text-[10px] text-slate-550 mt-1">{c.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">REQUISITOS DE MANEJO</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {c.handlingRequirements.map((req) => (
                    <span key={req} className="text-[8px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.2 rounded">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retention Policies Table */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Políticas de Retención de Datos</h4>
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
              <thead className="bg-slate-50 sticky top-0">
                <tr className="divide-x divide-slate-150">
                  <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                  <th className="p-3 font-bold text-slate-600 w-52">Objeto Regulado</th>
                  <th className="p-3 font-bold text-slate-600 w-32">Periodo</th>
                  <th className="p-3 font-bold text-slate-600">Disparador de Retención (Trigger)</th>
                  <th className="p-3 font-bold text-slate-600 w-28">Disposición</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {retentions.map((r) => {
                  const targetName = getCanonicalBusinessObjectById(r.targetId)?.nameEs || r.targetId;
                  return (
                    <tr key={r.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                      <td className="p-3 font-mono font-bold text-slate-400">{r.id}</td>
                      <td className="p-3 font-bold text-slate-800">{targetName}</td>
                      <td className="p-3 font-semibold text-slate-700">{r.retentionPeriod || "N/A"}</td>
                      <td className="p-3 text-slate-600 leading-normal font-medium">{r.retentionTrigger}</td>
                      <td className="p-3 uppercase">
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {r.disposition}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
