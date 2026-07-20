import React from "react";
import { getIndustryReferenceModel, getReferenceModelViewpoints, getCrossModelRelations, getReferenceModelGaps } from "../../../domain/repositories/referenceModelRepository";

export default function ReferenceModelSummary() {
  const model = getIndustryReferenceModel();
  const viewpoints = getReferenceModelViewpoints();
  const relations = getCrossModelRelations();
  const gaps = getReferenceModelGaps();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="summary-tab-content">
      {/* Intro info box */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          {model.name} (v{model.version})
        </h2>
        <p className="text-xs text-slate-650 mt-2 leading-relaxed font-medium">
          El Industry Reference Model proporciona una vista holística, navegable y estructurada en 10 capas de la arquitectura 
          de referencia propuesta para la industria AFORE/SAR. Alinear y traza las regulaciones vigentes y participantes 
          operativos con los Service Domains, Business Objects y Control Records del repositorio.
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Viewpoints de Arquitectura</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Vistas de composición temáticas</p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-slate-800">{viewpoints.length}</span>
            <span className="text-xs text-slate-450 font-bold uppercase">Mapeados</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Relaciones Cruzadas</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Trazabilidad entre capas del modelo</p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-slate-800">{relations.length}</span>
            <span className="text-xs text-slate-450 font-bold uppercase">Conexiones</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Gaps de Integración</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Discrepancias críticas registradas</p>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-red-650">{gaps.length}</span>
            <span className="text-xs text-red-500 font-bold uppercase">Abiertos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
