import React from "react";
import { X, Layers, ShieldCheck, Clock, ExternalLink, Key, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useInformationArchitectureStore } from "../store/useInformationArchitectureStore";
import {
  getCanonicalBusinessObjectById,
  getInformationConceptById,
  getInformationDomainById,
  getOwnershipAssignments,
  getQualityRules
} from "../../../domain/repositories/informationArchitectureRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";
import { getIndustryParticipantById } from "../../../domain/repositories/participantRepository";

export default function InformationArchitectureDetailsPanel() {
  const { selectedId, setSelectedId } = useInformationArchitectureStore();

  if (!selectedId) return null;

  // Attempt to resolve entity
  const bo = getCanonicalBusinessObjectById(selectedId);
  const concept = getInformationConceptById(selectedId);
  const domain = getInformationDomainById(selectedId);

  const handleClose = () => setSelectedId(null);

  return (
    <aside
      className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full focus:outline-none"
      data-testid="ia-details-panel"
      role="dialog"
      aria-label="Detalle del Elemento Seleccionado"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
            {selectedId}
          </span>
          <span className="text-xs font-bold text-slate-300">
            {bo ? "Business Object" : concept ? "Concepto" : domain ? "Dominio de Información" : "Detalle"}
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Business Object Detail */}
        {bo && (
          <div className="space-y-5">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{bo.nameEs}</h2>
              <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded mt-1 uppercase">
                Type: {bo.objectType}
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descripción</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{bo.description}</p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Significado de Negocio</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{bo.businessMeaning}</p>
            </div>

            {/* Attributes List */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Atributos Lógicos ({bo.attributeIds.length})</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {bo.attributeIds.map((attr) => (
                  <span
                    key={attr}
                    className="text-[9px] font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Domains Relationships */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Relación de Service Domains</h4>
              <div className="space-y-2 mt-2">
                {bo.authoritativeServiceDomainIds.map((sdId) => (
                  <div key={sdId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-200 rounded">
                    <div>
                      <span className="font-mono text-[9px] font-bold bg-slate-200 text-slate-700 px-1 rounded mr-1.5">{sdId}</span>
                      <span className="font-semibold text-slate-800">{getServiceDomainById(sdId)?.nameEs || sdId}</span>
                    </div>
                    <span className="text-[8px] font-bold text-amber-700 bg-amber-50 px-1 rounded border border-amber-200">AUTORITATIVO</span>
                  </div>
                ))}
                {bo.producerServiceDomainIds
                  .filter((sdId) => !bo.authoritativeServiceDomainIds.includes(sdId))
                  .map((sdId) => (
                    <div key={sdId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-200 rounded">
                      <div>
                        <span className="font-mono text-[9px] font-bold bg-slate-200 text-slate-700 px-1 rounded mr-1.5">{sdId}</span>
                        <span className="font-semibold text-slate-800">{getServiceDomainById(sdId)?.nameEs || sdId}</span>
                      </div>
                      <span className="text-[8px] font-bold text-blue-700 bg-blue-50 px-1 rounded border border-blue-200">PRODUCTOR</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Actions Links */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href={`/service-landscape/value-chain?selected=${bo.producerServiceDomainIds[0] || ""}`}
                className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow"
              >
                Abrir en Service Landscape
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        )}

        {/* Concept Detail */}
        {concept && (
          <div className="space-y-5">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{concept.nameEs}</h2>
              <span className="inline-block text-[9px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded mt-1 uppercase">
                Status Semántico: {concept.semanticStatus}
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Definición</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{concept.definition}</p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Significado Operativo</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{concept.businessMeaning}</p>
            </div>

            {concept.aliases.length > 0 && (
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sinónimos / Aliases</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {concept.aliases.map((alias) => (
                    <span key={alias} className="text-[9px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      {alias}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Domain Detail */}
        {domain && (
          <div className="space-y-5">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{domain.nameEs}</h2>
              <span className="inline-block text-[9px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded mt-1 uppercase">
                Criticidad: {domain.criticality}
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Propósito</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{domain.purpose}</p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Frontera Semántica</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{domain.semanticBoundary}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
