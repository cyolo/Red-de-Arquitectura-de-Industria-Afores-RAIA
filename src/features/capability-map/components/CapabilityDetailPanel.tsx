import React from "react";
import { BusinessCapability, CapabilityServiceDomainMapping } from "../../../domain/types/capabilityTypes";
import { X, ShieldAlert, Award, FileText, Settings, Layers, Briefcase, Link2 } from "lucide-react";
import Link from "next/link";

interface CapabilityDetailPanelProps {
  capability?: BusinessCapability;
  mappings: CapabilityServiceDomainMapping[];
  onClose: () => void;
}

export default function CapabilityDetailPanel({
  capability,
  mappings,
  onClose
}: CapabilityDetailPanelProps) {
  if (!capability) {
    return (
      <aside className="w-[400px] xl:w-[460px] bg-slate-50 border-l border-slate-200 shrink-0 flex flex-col items-center justify-center p-8 text-center">
        <Layers className="h-12 w-12 text-slate-300 mb-4" />
        <h3 className="text-slate-650 font-bold text-sm">Selecciona una capacidad</h3>
        <p className="text-slate-400 mt-2 text-xs max-w-xs leading-relaxed">
          Haz clic en cualquier celda o nodo del mapa de capacidades para consultar sus mappings y detalles de gobernanza.
        </p>
      </aside>
    );
  }

  return (
    <aside 
      data-testid="capability-detail-panel"
      className="w-[400px] xl:w-[460px] bg-white border-l border-slate-200 shrink-0 flex flex-col min-h-0 shadow-lg relative z-20"
    >
      {/* Detail Header */}
      <header className="p-6 border-b border-slate-100 bg-slate-50/50 shrink-0">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 border border-slate-200 rounded">
            ID: {capability.id}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar panel"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer focus:outline-none"
          >
            <X size={16} />
          </button>
        </div>

        <h3 className="text-lg font-black text-slate-900 mt-3 leading-tight">
          {capability.nameEs}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-800 px-2 py-0.2 rounded-full">
            {capability.capabilityType}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-800 px-2 py-0.2 rounded-full">
            {capability.level}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-50 border border-amber-100 text-amber-800 px-2 py-0.2 rounded-full">
            Criticidad: {capability.criticality}
          </span>
        </div>
      </header>

      {/* Detail Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white min-h-[300px]">
        {/* Definition */}
        <section>
          <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
            Definición y Propósito
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {capability.description}
          </p>
        </section>

        {/* Boundary & Outcome */}
        <section className="p-4 bg-slate-50/50 border border-slate-200 rounded-xl space-y-3">
          <div>
            <h5 className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
              Límite Semántico
            </h5>
            <p className="text-[11px] text-slate-700 mt-0.5 leading-relaxed">
              {capability.semanticBoundary}
            </p>
          </div>
          <div className="pt-3 border-t border-slate-200/50">
            <h5 className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
              Outcome Statement
            </h5>
            <p className="text-[11px] text-slate-800 mt-0.5 leading-relaxed font-bold">
              {capability.outcomeStatement}
            </p>
          </div>
        </section>

        {/* Service Domain Realizations */}
        <section className="pt-4 border-t border-slate-150">
          <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
            Service Domains Realizadores ({mappings.length})
          </h4>
          {mappings.length > 0 ? (
            <div className="space-y-2">
              {mappings.map((m) => (
                <div key={m.id} className="p-3 border border-slate-200 bg-white rounded-lg flex items-center justify-between gap-3 shadow-xs">
                  <div>
                    <span className="text-[9px] font-black text-slate-800 block">
                      {m.serviceDomainId}
                    </span>
                    <span className="text-[11.5px] font-medium text-slate-700">
                      {m.serviceDomainId === "RAIA-SD-001" ? "Resolución de Identidad" : "Gestión de Datos del Trabajador"}
                    </span>
                  </div>
                  <span className="text-[8px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-100 px-1.5 py-0.2 rounded uppercase tracking-wider">
                    {m.coverage}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-900 text-xs">
              <div className="flex gap-2">
                <ShieldAlert size={14} className="shrink-0" />
                <div>
                  <span className="font-extrabold block">Gap Detectado</span>
                  <p className="mt-0.5">Esta capacidad carece de Service Domains realizadores mapeados en el baseline.</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Related Scenarios */}
        {capability.businessScenarioIds.length > 0 && (
          <section className="pt-4 border-t border-slate-150">
            <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">
              Escenarios de Negocio Relacionados
            </h4>
            <div className="space-y-1.5">
              {capability.businessScenarioIds.map((scenId) => (
                <Link
                  key={scenId}
                  href={`/business-scenarios?scenario=${scenId}`}
                  className="flex items-center gap-2 p-2 border border-slate-200 hover:border-slate-350 bg-slate-50 hover:bg-white rounded-lg text-xs font-bold text-slate-750 transition-all"
                >
                  <Briefcase size={12} className="text-slate-400" />
                  <span>{scenId === "RAIA-BS-0002" ? "Registro de Cuenta Individual" : scenId}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Business Objects */}
        {capability.businessObjectIds.length > 0 && (
          <section className="pt-4 border-t border-slate-150">
            <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">
              Objetos de Negocio
            </h4>
            <div className="flex flex-wrap gap-1">
              {capability.businessObjectIds.map((objId) => (
                <span
                  key={objId}
                  className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700"
                >
                  <FileText size={10} />
                  {objId === "RAIA-BO-0002" ? "Cuenta Individual" : objId}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </aside>
  );
}
