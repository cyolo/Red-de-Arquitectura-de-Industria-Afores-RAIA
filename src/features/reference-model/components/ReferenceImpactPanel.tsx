import React from "react";
import { useReferenceModelStore } from "../store/useReferenceModelStore";
import { composeImpactView, resolveArtifactReference } from "../../../domain/repositories/referenceModelRepository";
import { ShieldAlert, AlertTriangle } from "lucide-react";

export default function ReferenceImpactPanel() {
  const { selectedArtifactRef } = useReferenceModelStore();

  const impact = selectedArtifactRef
    ? composeImpactView(selectedArtifactRef.artifactId, "rename")
    : { impactScore: "low", impactedCount: 0, impactedRefs: [] };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="impact-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Simulador de Análisis de Impacto de Cambios
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Nivel de Impacto</span>
            <span className={`text-xl font-extrabold mt-1 block uppercase ${
              impact.impactScore === "high" ? "text-amber-600" : "text-slate-700"
            }`}>
              {impact.impactScore}
            </span>
          </div>
          <div className="text-slate-450 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <ShieldAlert size={20} />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wider">Artefactos Downstream Afectados ({impact.impactedCount})</h4>
          <div className="space-y-2">
            {impact.impactedRefs.map((ref) => {
              const res = resolveArtifactReference(ref);
              return (
                <div key={ref.artifactId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                  <span className="font-semibold text-slate-800">{res?.name}</span>
                  <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-1 rounded uppercase">
                    {ref.artifactType}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
