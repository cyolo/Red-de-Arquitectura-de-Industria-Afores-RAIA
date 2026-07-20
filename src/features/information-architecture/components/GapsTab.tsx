import React from "react";
import { getInformationArchitectureGaps } from "../../../domain/repositories/informationArchitectureRepository";
import { AlertCircle } from "lucide-react";

export default function GapsTab() {
  const gaps = getInformationArchitectureGaps();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="gaps-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Registro General de Gaps Arquitectónicos
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {gaps.map((gap) => (
          <div
            key={gap.id}
            className={`border rounded-xl p-4 flex items-start gap-3.5 shadow-xs transition-all ${
              gap.severity === "high"
                ? "bg-red-50/40 border-red-200"
                : gap.severity === "medium"
                ? "bg-amber-50/40 border-amber-200"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className={`p-2 rounded-lg shrink-0 ${
              gap.severity === "high" ? "bg-red-100 text-red-700" : gap.severity === "medium" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-700"
            }`}>
              <AlertCircle size={16} />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1 rounded uppercase">
                  {gap.id}
                </span>
                <span className={`text-[8px] font-extrabold px-1.5 py-0.2 rounded border uppercase ${
                  gap.severity === "high"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : gap.severity === "medium"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-slate-100 text-slate-700 border-slate-200"
                }`}>
                  SEVERIDAD: {gap.severity}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug">{gap.name}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{gap.description}</p>
              
              <div className="pt-2 text-[9px] font-semibold text-slate-400">
                <span>Target: </span>
                <span className="font-mono text-slate-600 mr-2">{gap.targetId} ({gap.targetType})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
