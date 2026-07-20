import React from "react";
import { useMatrixStore } from "../store/useMatrixStore";

export default function MatrixLegend() {
  const measure = useMatrixStore((state) => state.measure);

  const isCoverage = measure === "regulatory-coverage-percentage";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
      <div className="space-y-1">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
          Leyenda e Indicadores
        </span>
        <p className="text-[11px] text-slate-500 leading-normal">
          {isCoverage 
            ? "Muestra la cobertura semántica legal de los dominios incluidos en cada celda."
            : "Representa la densidad cuantitativa proporcional (valor relativo frente al valor máximo obtenido)."
          }
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {isCoverage ? (
          // Regulatory Coverage semantic legend
          <>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-500 border border-emerald-600 block shrink-0" />
              <span>Validado (reviewed)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-blue-500 border border-blue-600 block shrink-0" />
              <span>Mapeado (mapped)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-amber-500 border border-amber-600 block shrink-0" />
              <span>Parcial (partial)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-red-500 border border-red-600 block shrink-0" />
              <span>Sin Mapeo (unmapped)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-slate-250 bg-slate-300 border border-slate-400 block shrink-0" />
              <span>No Aplicable</span>
            </div>
          </>
        ) : (
          // Heatmap quantitative intensity legend
          <>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-slate-100 border border-slate-200 block shrink-0" />
              <span>Sin Datos (0)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-100 block shrink-0" />
              <span>Bajo (0% - 25%)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-200 block shrink-0" />
              <span>Medio (25% - 50%)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-600 border border-emerald-700 block shrink-0" />
              <span>Alto (50% - 75%)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-900 border border-emerald-950 block shrink-0" />
              <span>Crítico (75% - 100%)</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
