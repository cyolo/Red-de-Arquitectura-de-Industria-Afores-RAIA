import React from "react";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";
import { getObjectImpactAnalysis, getBusinessObjects } from "../../../domain/repositories/businessObjectRepository";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export default function ImpactoTab() {
  const { selectedObjectId } = useBusinessObjectStore();

  const analysis = getObjectImpactAnalysis(selectedObjectId || "");
  const objects = getBusinessObjects();

  const getObjectName = (id: string) => {
    return objects.find((o) => o.id === id)?.nameEs || id;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="impact-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Análisis de Impacto en Cambios Semánticos
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Score indicator */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">SCORE DE IMPACTO</span>
            <span className={`text-xl font-extrabold mt-1 block uppercase ${
              analysis.impactScore === "systemic" ? "text-red-600" : analysis.impactScore === "high" ? "text-amber-600" : "text-slate-700"
            }`}>
              {analysis.impactScore}
            </span>
          </div>
          <div className="text-slate-450 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <ShieldAlert size={20} />
          </div>
        </div>

        {/* Downstream dependencies list */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wider">Objetos Afectados Downstream ({analysis.impactedObjectIds.length})</h4>
          <div className="space-y-2">
            {analysis.impactedObjectIds.map((id) => (
              <div key={id} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                <span className="font-semibold text-slate-800">{getObjectName(id)}</span>
                <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-1 rounded">{id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
