"use client";

import React from "react";
import { useReactFlow } from "@xyflow/react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Download,
  Printer,
  Eye,
  EyeOff,
  Sliders,
  Expand,
  Info
} from "lucide-react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";

export function OverviewDiagramToolbar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const {
    detailLevel,
    fullscreen,
    showRelations,
    showLegend,
    setDetailLevel,
    setFullscreen,
    setShowRelations,
    setShowLegend
  } = useOverviewDiagramStore();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-100 border-b border-slate-200 text-xs no-print select-none">
      {/* Zoom and Navigation controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => zoomIn({ duration: 200 })}
          className="p-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm"
          title="Acercar (Zoom In)"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => zoomOut({ duration: 200 })}
          className="p-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm"
          title="Alejar (Zoom Out)"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => fitView({ padding: 0.2, duration: 300 })}
          className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm font-medium text-[10px]"
          title="Ajustar al canvas"
        >
          Ajustar
        </button>
      </div>

      {/* Detail levels selectors */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider hidden sm:inline">
          Detalle:
        </span>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setDetailLevel("macro")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-l-md border transition-all ${
              detailLevel === "macro"
                ? "bg-slate-800 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Macro
          </button>
          <button
            onClick={() => setDetailLevel("domain")}
            className={`px-2.5 py-1 text-[10px] font-bold border-t border-b border-r transition-all ${
              detailLevel === "domain"
                ? "bg-slate-800 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Dominio
          </button>
          <button
            onClick={() => setDetailLevel("service-domain")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-r-md border transition-all ${
              detailLevel === "service-domain"
                ? "bg-slate-800 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Service Domains
          </button>
        </div>
      </div>

      {/* Toggle View Options */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowRelations(!showRelations)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded border text-[10px] font-bold transition-all shadow-sm ${
            showRelations
              ? "bg-slate-100 border-slate-350 text-slate-800"
              : "bg-white border-slate-200 text-slate-400"
          }`}
          title={showRelations ? "Ocultar relaciones" : "Mostrar relaciones"}
        >
          {showRelations ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
          Relaciones
        </button>

        <button
          onClick={() => setShowLegend(!showLegend)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded border text-[10px] font-bold transition-all shadow-sm ${
            showLegend
              ? "bg-slate-100 border-slate-350 text-slate-800"
              : "bg-white border-slate-200 text-slate-400"
          }`}
          title={showLegend ? "Ocultar Leyenda" : "Mostrar Leyenda"}
        >
          <Info className="w-3 h-3" />
          Leyenda
        </button>

        <button
          onClick={() => setFullscreen(!fullscreen)}
          className={`p-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm`}
          title={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {fullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={handlePrint}
          className="p-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm"
          title="Imprimir diagrama"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
export default OverviewDiagramToolbar;
