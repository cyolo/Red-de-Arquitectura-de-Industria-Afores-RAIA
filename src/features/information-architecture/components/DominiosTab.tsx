import React, { useState } from "react";
import { Grid, Network, TableProperties } from "lucide-react";
import { getInformationDomains } from "../../../domain/repositories/informationArchitectureRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";
import { useInformationArchitectureStore } from "../store/useInformationArchitectureStore";

export default function DominiosTab() {
  const [viewMode, setViewMode] = useState<"cards" | "tree" | "matrix">("cards");
  const domains = getInformationDomains();
  const { setSelectedId } = useInformationArchitectureStore();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="dominios-tab-content">
      {/* Selector view toolbar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Dominios de Información de Industria
        </h3>
        <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
          <button
            onClick={() => setViewMode("cards")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
              viewMode === "cards" ? "bg-white text-slate-800 shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Grid size={12} className="inline mr-1" />
            Tarjetas
          </button>
          <button
            onClick={() => setViewMode("tree")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
              viewMode === "tree" ? "bg-white text-slate-800 shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Network size={12} className="inline mr-1" />
            Jerarquía
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
              viewMode === "matrix" ? "bg-white text-slate-800 shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <TableProperties size={12} className="inline mr-1" />
            Matriz
          </button>
        </div>
      </div>

      {/* Render Cards Mode */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((dom) => (
            <button
              key={dom.id}
              onClick={() => setSelectedId(dom.id)}
              className="text-left bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shadow-xs transition-all hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                    {dom.id}
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                    dom.criticality === "systemic" ? "bg-red-50 text-red-700 border border-red-200" : "bg-slate-50 text-slate-700 border border-slate-200"
                  }`}>
                    {dom.criticality}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 mt-2">{dom.nameEs}</h4>
                <p className="text-[10px] text-slate-500 mt-1 leading-normal line-clamp-2">
                  {dom.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-600">
                <span>{dom.informationConceptIds.length} conceptos</span>
                <span>{dom.businessObjectIds.length} objetos</span>
                <span>{dom.serviceDomainIds.length} servicios</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Render Tree Mode */}
      {viewMode === "tree" && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <ul className="space-y-4">
            {domains.filter(d => !d.parentDomainId).map((parent) => (
              <li key={parent.id} className="border-l-2 border-slate-200 pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1 rounded">{parent.id}</span>
                  <button onClick={() => setSelectedId(parent.id)} className="text-xs font-bold text-slate-800 hover:text-sky-600 transition-colors">
                    {parent.nameEs}
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 max-w-xl">{parent.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render Matrix Mode */}
      {viewMode === "matrix" && (
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
              <thead className="bg-slate-50 sticky top-0">
                <tr className="divide-x divide-slate-150">
                  <th className="p-3 font-bold text-slate-600">Dominio de Información</th>
                  <th className="p-3 font-bold text-slate-600">Service Domains Relacionados</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {domains.map((dom) => (
                  <tr key={dom.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-800 min-w-[200px]">
                      <button onClick={() => setSelectedId(dom.id)} className="hover:text-sky-600 font-bold transition-colors">
                        {dom.nameEs}
                      </button>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {dom.serviceDomainIds.map((sdId) => (
                          <span
                            key={sdId}
                            className="text-[9px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded cursor-pointer hover:bg-slate-200"
                            title={getServiceDomainById(sdId)?.nameEs || sdId}
                          >
                            {sdId}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
