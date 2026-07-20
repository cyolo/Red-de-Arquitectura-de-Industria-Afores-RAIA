import React from "react";
import { getControlRecordGaps } from "../../../domain/repositories/controlRecordRepository";
import { AlertCircle } from "lucide-react";

export default function GapsTab() {
  const gaps = getControlRecordGaps();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="gaps-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Gaps y Contradicciones del Ciclo de Vida
        </h3>
      </div>

      <div className="space-y-4">
        {gaps.map((gap) => (
          <div
            key={gap.id}
            className={`border rounded-xl p-4 flex items-start gap-3.5 shadow-xs ${
              gap.severity === "P0"
                ? "bg-red-50/40 border-red-200"
                : gap.severity === "P1"
                ? "bg-amber-50/40 border-amber-200"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className={`p-2 rounded-lg shrink-0 ${
              gap.severity === "P0" ? "bg-red-100 text-red-700" : gap.severity === "P1" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-700"
            }`}>
              <AlertCircle size={16} />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1 rounded uppercase">
                  {gap.id}
                </span>
                <span className={`text-[8px] font-extrabold px-1.5 py-0.2 rounded border uppercase ${
                  gap.severity === "P0"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : gap.severity === "P1"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-slate-100 text-slate-700 border-slate-250"
                }`}>
                  Prioridad: {gap.severity}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug">{gap.title}</h4>
              <p className="text-xs text-slate-650 leading-relaxed">{gap.description}</p>
              
              <div className="pt-2 text-[9px] font-semibold text-slate-400">
                <span>Recomendación: </span>
                <span className="text-slate-600 font-medium">{gap.recommendation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
