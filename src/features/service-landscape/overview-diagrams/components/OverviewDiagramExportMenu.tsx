"use client";

import React, { useMemo, useState } from "react";
import { Download, Check, FileJson, FileText } from "lucide-react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import { getOverviewDiagramById } from "../../../../domain/repositories/overviewDiagramRepository";

export function OverviewDiagramExportMenu() {
  const { selectedDiagramId } = useOverviewDiagramStore();
  const [copied, setCopied] = useState(false);

  const activeDiagram = useMemo(
    () => getOverviewDiagramById(selectedDiagramId),
    [selectedDiagramId]
  );

  const handleExportJSON = () => {
    if (!activeDiagram) return;

    const exportData = {
      diagramId: activeDiagram.id,
      exportedAt: new Date().toISOString(),
      raiaVersion: activeDiagram.version,
      ...activeDiagram
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportData, null, 2));
    
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${activeDiagram.id}-export.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyJSON = () => {
    if (!activeDiagram) return;

    navigator.clipboard.writeText(JSON.stringify(activeDiagram, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!activeDiagram) return null;

  return (
    <div className="flex items-center gap-1.5 no-print select-none">
      <button
        onClick={handleExportJSON}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-[10px] transition-colors shadow-sm"
        title="Descargar especificaciones JSON"
      >
        <FileJson className="w-3 h-3" />
        Exportar JSON
      </button>

      <button
        onClick={handleCopyJSON}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-[10px] transition-colors shadow-sm"
        title="Copiar JSON al portapapeles"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-600" />
            <span>Copiado</span>
          </>
        ) : (
          <>
            <Download className="w-3 h-3" />
            <span>Copiar JSON</span>
          </>
        )}
      </button>
    </div>
  );
}
export default OverviewDiagramExportMenu;
