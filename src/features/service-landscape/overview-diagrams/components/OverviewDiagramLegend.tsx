"use client";

import React from "react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";

export function OverviewDiagramLegend() {
  const { showLegend } = useOverviewDiagramStore();

  if (!showLegend) return null;

  const legends = [
    { label: "Área de Negocio", color: "bg-blue-50 border-blue-200" },
    { label: "Dominio de Negocio", color: "bg-teal-50 border-teal-200" },
    { label: "Dominio de Servicio", color: "bg-white border-slate-200" },
    { label: "Participante / Actor", color: "bg-amber-50 border-amber-200" },
    { label: "Autoridad", color: "bg-indigo-50 border-indigo-200" },
    { label: "Control", color: "bg-orange-50 border-orange-200" },
    { label: "Objeto de Negocio", color: "bg-yellow-50 border-yellow-200" },
    { label: "Brecha / Gap", color: "bg-rose-50 border-rose-300 animate-pulse border-2" }
  ];

  const edgeLegends = [
    { label: "Flujo de Valor", color: "bg-sky-600" },
    { label: "Transferencia de Fondos", color: "bg-amber-600" },
    { label: "Supervisión", color: "bg-indigo-600 border-dashed border-t-2" },
    { label: "Validación", color: "bg-emerald-600 border-dotted border-t-2" }
  ];

  return (
    <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col gap-2 select-none">
      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        Leyenda de Elementos
      </h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
        {legends.map((leg) => (
          <div key={leg.label} className="flex items-center gap-1.5 text-[9px] text-slate-600">
            <span className={`w-3.5 h-3.5 rounded border ${leg.color} flex-shrink-0`} />
            <span className="truncate">{leg.label}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-slate-100 my-1" />

      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        Leyenda de Relaciones
      </h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {edgeLegends.map((leg) => (
          <div key={leg.label} className="flex items-center gap-2 text-[9px] text-slate-600">
            <span className={`w-8 h-1 rounded ${leg.color} flex-shrink-0`} />
            <span>{leg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OverviewDiagramLegend;
