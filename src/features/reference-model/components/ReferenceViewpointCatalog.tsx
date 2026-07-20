import React, { useState } from "react";
import { getReferenceModelViewpoints } from "../../../domain/repositories/referenceModelRepository";
import { useReferenceModelStore } from "../store/useReferenceModelStore";

export default function ReferenceViewpointCatalog() {
  const { searchQuery, setSelectedViewpointId, setActiveTab } = useReferenceModelStore();
  const viewpoints = getReferenceModelViewpoints();

  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredViewpoints = viewpoints.filter((v) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = v.nameEs.toLowerCase().includes(q) || v.description.toLowerCase().includes(q);
    const matchesFilter = typeFilter === "all" || v.viewpointType === typeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleSelect = (id: string) => {
    setSelectedViewpointId(id);
    setActiveTab("map");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="viewpoints-tab-content">
      <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Viewpoints de Composición ({filteredViewpoints.length})
        </h3>

        {/* Viewpoint Type filter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Filtrar Tipo:</span>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-750 focus:outline-none"
          >
            <option value="all">Todos</option>
            <option value="ecosystem">Ecosistema</option>
            <option value="value-stream">Value Chain</option>
            <option value="lifecycle">Ciclo de Vida</option>
            <option value="layered">Layered</option>
            <option value="information">Información</option>
            <option value="control-behavior">Control</option>
            <option value="regulatory">Regulación</option>
            <option value="impact">Impacto</option>
          </select>
        </div>
      </div>

      {/* Grid List Viewpoints cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredViewpoints.map((v) => (
          <div
            key={v.id}
            className="bg-white border border-slate-200 hover:border-slate-350 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-200 px-1 rounded">
                  {v.id}
                </span>
                <span className="text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded uppercase">
                  {v.viewpointType}
                </span>
              </div>
              <h4 className="text-xs font-extrabold text-slate-850 leading-tight">{v.nameEs}</h4>
              <p className="text-xs text-slate-500 leading-normal line-clamp-3">{v.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <button
                onClick={() => handleSelect(v.id)}
                className="text-[10px] font-bold text-sky-650 hover:text-sky-750 transition-colors uppercase tracking-wider cursor-pointer"
              >
                Visualizar Mapa →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
