import React, { useState } from "react";
import { getTraceabilityPath, resolveArtifactReference } from "../../../domain/repositories/referenceModelRepository";
import { useReferenceModelStore } from "../store/useReferenceModelStore";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function ReferenceTraceabilityExplorer() {
  const { selectedArtifactRef } = useReferenceModelStore();

  const [targetId, setTargetId] = useState<string>("RAIA-CRM-001");
  const [targetType, setTargetType] = useState<string>("control-record");

  const path = selectedArtifactRef
    ? getTraceabilityPath(selectedArtifactRef, {
        artifactType: targetType as any,
        artifactId: targetId
      })
    : [];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="traceability-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Explorador de Rutas de Trazabilidad Cruzada
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        {/* Source selection indicators */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="text-xs">
            <span className="text-slate-400 block font-semibold uppercase text-[9px] tracking-wider">Origen seleccionado:</span>
            <span className="font-extrabold text-slate-800">
              {selectedArtifactRef
                ? `${selectedArtifactRef.artifactId} (${selectedArtifactRef.artifactType})`
                : "Ninguno"}
            </span>
          </div>

          <div className="text-slate-300">
            <ArrowRight size={18} />
          </div>

          {/* Target inputs */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-400 font-semibold uppercase text-[9px] tracking-wider">Destino:</span>
              <div className="flex gap-2">
                <select
                  value={targetType}
                  onChange={(e) => setTargetType(e.target.value)}
                  className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2 py-1 text-xs text-slate-800 focus:outline-none"
                >
                  <option value="control-record">Control Record</option>
                  <option value="service-domain">Service Domain</option>
                  <option value="business-scenario">Business Scenario</option>
                </select>
                <input
                  type="text"
                  value={targetId}
                  onChange={(e) => setTargetId(e.target.value)}
                  placeholder="ID del artefacto..."
                  className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trail representation flow */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Ruta de Conexión</h4>
          {path.length === 0 ? (
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-50 p-4 border border-slate-200 rounded-lg">
              <HelpCircle size={14} />
              <span>No se ha podido resolver una ruta directa en este viewpoint para la combinación elegida.</span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              {path.map((step, idx) => {
                const srcRes = resolveArtifactReference(step.source);
                const tgtRes = resolveArtifactReference(step.target);
                return (
                  <React.Fragment key={step.id}>
                    <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded text-xs flex flex-col max-w-[200px]">
                      <span className="font-extrabold text-slate-800 truncate">{srcRes?.name}</span>
                      <span className="text-[8px] font-mono text-slate-400 mt-0.5 uppercase">{step.source.artifactType}</span>
                    </div>

                    <div className="text-slate-400 flex flex-col items-center">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-1 py-0.2 rounded border border-slate-200/60 mb-0.5">
                        {step.relationType}
                      </span>
                      <ArrowRight size={14} />
                    </div>

                    {idx === path.length - 1 && (
                      <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded text-xs flex flex-col max-w-[200px]">
                        <span className="font-extrabold text-slate-800 truncate">{tgtRes?.name}</span>
                        <span className="text-[8px] font-mono text-slate-400 mt-0.5 uppercase">{step.target.artifactType}</span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
