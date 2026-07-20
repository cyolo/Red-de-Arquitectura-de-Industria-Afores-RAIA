import React from "react";
import { AlertCircle, FilterX, HelpCircle, RefreshCw } from "lucide-react";
import { useMatrixStore } from "../store/useMatrixStore";

interface MatrixEmptyStateProps {
  type: "no-results" | "high-cardinality" | "unsupported";
  message?: string;
  onConfirm?: () => void;
}

export default function MatrixEmptyState({ type, message, onConfirm }: MatrixEmptyStateProps) {
  const resetAll = useMatrixStore((state) => state.resetAll);

  if (type === "high-cardinality") {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
        <div className="max-w-md text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto">
            <AlertCircle size={22} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
              Combinación de Alta Cardinalidad
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              {message || "Has seleccionado dos dimensiones con un alto número de elementos. Renderizar la cuadrícula completa sin filtros activos puede ralentizar tu navegador."}
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Cargar de todos modos
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-lg border border-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Restablecer Valores
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (type === "unsupported") {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
        <div className="max-w-md text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mx-auto">
            <HelpCircle size={22} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
              Combinación sin Valor Analítico
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              {message || "La combinación cruzada seleccionada no aporta valor arquitectónico analítico. Intenta cambiar una de las dimensiones."}
            </p>
          </div>
          <button
            onClick={resetAll}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 inline-flex items-center gap-1.5"
          >
            <RefreshCw size={12} />
            Restablecer Valores
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
      <div className="max-w-md text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mx-auto">
          <FilterX size={22} />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
            Sin Resultados Encontrados
          </h3>
          <p className="text-xs text-slate-500 leading-normal">
            No hay ningún dominio de servicio que cumpla con los filtros y criterios de búsqueda activos para formar la matriz.
          </p>
        </div>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 inline-flex items-center gap-1.5"
        >
          <RefreshCw size={12} />
          Limpiar todos los filtros
        </button>
      </div>
    </div>
  );
}
