import React from "react";
import { Grid, EyeOff, Sparkles, Shield, AlertTriangle, Cpu } from "lucide-react";
import { MatrixResult } from "../domain/matrixTypes";

interface MatrixSummaryCardsProps {
  result: MatrixResult;
}

export default function MatrixSummaryCards({ result }: MatrixSummaryCardsProps) {
  const filledCells = result.cells.filter((c) => c.hasData).length;
  const emptyCells = result.cells.filter((c) => !c.hasData).length;

  // Calculate overall coverage percentage for all service domains in the matrix
  const totalDomains = result.rowHeaders.reduce((acc, row) => acc + (result.totals.rowTotals[row.id] || 0), 0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 shrink-0" data-testid="matrix-summary-cards">
      {/* 1. Filled cells */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Grid size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">{filledCells}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Celdas con datos</span>
        </div>
      </div>

      {/* 2. Empty cells */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-550 text-slate-500 flex items-center justify-center shrink-0">
          <EyeOff size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">{emptyCells}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Celdas vacías</span>
        </div>
      </div>

      {/* 3. Max value */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <Sparkles size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">{result.maximumValue}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Valor máximo</span>
        </div>
      </div>

      {/* 4. Total domains in scope */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
          <Shield size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">{result.totals.grandTotal}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Total Mapeado</span>
        </div>
      </div>

      {/* 5. Gaps */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <AlertTriangle size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">
            {result.cells.filter(c => c.severity === "critical" || c.severity === "high").length}
          </span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Áreas críticas</span>
        </div>
      </div>

      {/* 6. Execution Time */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
          <Cpu size={16} />
        </div>
        <div>
          <span className="text-base font-extrabold text-slate-800 block leading-none">{result.executionTimeMs} ms</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Tiempo de motor</span>
        </div>
      </div>
    </div>
  );
}
