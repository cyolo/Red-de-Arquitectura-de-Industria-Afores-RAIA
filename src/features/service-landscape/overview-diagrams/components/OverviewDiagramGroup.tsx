import React from "react";

interface GroupData {
  label: string;
  groupType: string;
}

export function OverviewDiagramGroup({ data }: { data: GroupData }) {
  const { label, groupType } = data;

  const getGroupTypeLabel = () => {
    switch (groupType) {
      case "participant":
        return "Participante";
      case "landscape-layer":
        return "Capa Landscape";
      case "business-area":
        return "Área de Negocio";
      case "regime":
        return "Régimen";
      case "phase":
        return "Fase Operativa";
      default:
        return "Agrupador";
    }
  };

  return (
    <div className="w-full h-full min-h-[100px] border border-dashed border-slate-300 bg-slate-50/30 rounded-xl p-3 relative select-none">
      <div className="absolute top-2 left-3 flex items-center gap-1.5 pointer-events-none">
        <span className="text-[8px] font-bold tracking-wider uppercase text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
          {getGroupTypeLabel()}
        </span>
        <span className="text-[9.5px] font-bold text-slate-500">{label}</span>
      </div>
    </div>
  );
}
export default OverviewDiagramGroup;
