import React from "react";
import { HelpCircle } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

export function OverviewDiagramEmptyState({
  title = "No se encontraron diagramas",
  description = "Prueba cambiando los términos de búsqueda o eliminando los filtros activos."
}: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 border border-dashed border-slate-200 rounded-lg text-center select-none">
      <HelpCircle className="w-10 h-10 text-slate-350 mb-3" />
      <h3 className="text-sm font-bold text-slate-700 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 max-w-sm">{description}</p>
    </div>
  );
}
export default OverviewDiagramEmptyState;
