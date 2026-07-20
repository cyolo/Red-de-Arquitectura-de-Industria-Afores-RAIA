import React from "react";
import { X, ArrowRight, ShieldCheck, User, Layers } from "lucide-react";
import { useReferenceModelStore } from "../store/useReferenceModelStore";
import { resolveArtifactReference, getRelationsForArtifact } from "../../../domain/repositories/referenceModelRepository";

export default function ReferenceArtifactPanel() {
  const { selectedArtifactRef, setSelectedArtifactRef } = useReferenceModelStore();

  if (!selectedArtifactRef) return null;

  const resolved = resolveArtifactReference(selectedArtifactRef);
  if (!resolved) return null;

  const relations = getRelationsForArtifact(selectedArtifactRef);

  return (
    <aside
      className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full focus:outline-none"
      role="dialog"
      aria-label="Detalle de Artefacto"
    >
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
            {resolved.id}
          </span>
          <span className="text-xs font-bold text-slate-300">
            Ficha de Artefacto
          </span>
        </div>
        <button
          onClick={() => setSelectedArtifactRef(null)}
          className="text-slate-400 hover:text-white rounded-md p-1 hover:bg-slate-800 transition-colors cursor-pointer"
          title="Cerrar panel"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{resolved.name}</h2>
          <span className="inline-block text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-250 px-1.5 py-0.5 rounded mt-1 uppercase">
            Capa: {resolved.type}
          </span>
        </div>

        {/* Mapped relations summary list */}
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Relaciones de Trazabilidad ({relations.length})</h4>
          {relations.length === 0 ? (
            <p className="text-xs text-slate-400 font-medium">Ninguna relación mapeada en este viewpoint.</p>
          ) : (
            <div className="space-y-2">
              {relations.map((r) => {
                const targetKey = r.source.artifactId === resolved.id ? r.target : r.source;
                const targetResolved = resolveArtifactReference(targetKey);
                return (
                  <div key={r.id} className="p-2 bg-slate-50 border border-slate-200 rounded text-xs">
                    <span className="font-bold text-slate-800 block">{r.relationType}</span>
                    <span className="text-slate-500 mt-0.5 block font-medium">
                      {targetResolved?.name || targetKey.artifactId}
                    </span>
                    <span className="text-[8px] font-mono text-slate-400 uppercase mt-0.5 block">
                      {targetKey.artifactType}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
