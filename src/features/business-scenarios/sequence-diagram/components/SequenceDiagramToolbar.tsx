import React from 'react';
import { ZoomIn, ZoomOut, Scan, RotateCcw, Maximize2, Minimize2, Download, Info } from "lucide-react";

interface Props {
  zoomIn: () => void;
  zoomOut: () => void;
  fitDiagramToViewport: () => void;
  resetZoom: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  exportPng?: () => void;
  exportSvg?: () => void;
  toggleLegend?: () => void;
}

export function SequenceDiagramToolbar({
  zoomIn,
  zoomOut,
  fitDiagramToViewport,
  resetZoom,
  isFullscreen,
  toggleFullscreen,
  exportPng,
  exportSvg,
  toggleLegend
}: Props) {
  
  return (
    <div 
      className="absolute top-4 right-4 z-10 flex gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm"
      role="toolbar" 
      aria-label="Controles del diagrama de secuencia"
    >
      <ToolbarButton onClick={zoomIn} icon={<ZoomIn size={18} />} title="Acercar (+)" />
      <ToolbarButton onClick={zoomOut} icon={<ZoomOut size={18} />} title="Alejar (-)" />
      <div className="w-px h-6 bg-slate-200 mx-1 self-center" />
      <ToolbarButton onClick={fitDiagramToViewport} icon={<Scan size={18} />} title="Ajustar al contenido (0)" />
      <ToolbarButton onClick={resetZoom} icon={<RotateCcw size={18} />} title="Restablecer vista (1)" />
      <div className="w-px h-6 bg-slate-200 mx-1 self-center" />
      {toggleLegend && <ToolbarButton onClick={toggleLegend} icon={<Info size={18} />} title="Mostrar u ocultar leyenda" />}
      {exportSvg && <ToolbarButton onClick={exportSvg} icon={<Download size={18} />} title="Exportar SVG" />}
      <div className="w-px h-6 bg-slate-200 mx-1 self-center" />
      <ToolbarButton 
        onClick={toggleFullscreen} 
        icon={isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />} 
        title={isFullscreen ? "Salir de pantalla completa (F o Esc)" : "Visualizar a pantalla completa (F)"} 
        ariaPressed={isFullscreen}
      />
    </div>
  );
}

function ToolbarButton({ onClick, icon, title, ariaPressed }: { onClick: () => void, icon: React.ReactNode, title: string, ariaPressed?: boolean }) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-raia-turquoise"
      title={title}
      aria-label={title}
      aria-pressed={ariaPressed}
    >
      {icon}
    </button>
  );
}
