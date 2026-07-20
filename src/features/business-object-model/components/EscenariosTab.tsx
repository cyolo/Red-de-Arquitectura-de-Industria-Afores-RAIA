import React from "react";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";
import { getScenariosForBusinessObject } from "../../../domain/repositories/businessObjectRepository";
import { getScenarioById } from "../../../domain/repositories/landscapeRepository";

export default function EscenariosTab() {
  const { selectedObjectId } = useBusinessObjectStore();

  const mappings = getScenariosForBusinessObject(selectedObjectId || "");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="scenarios-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Mapeo de Intercambio en Business Scenarios
        </h3>
      </div>

      <div className="space-y-4">
        {mappings.map((m) => {
          const scen = getScenarioById(m.businessScenarioId);
          return (
            <div key={m.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-1 rounded mr-2">
                  {m.businessScenarioId}
                </span>
                <span className="text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded uppercase">
                  Uso: {m.usageRole}
                </span>
                <h4 className="text-xs font-bold text-slate-800 mt-2">{scen?.nameEs || m.businessScenarioId}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
