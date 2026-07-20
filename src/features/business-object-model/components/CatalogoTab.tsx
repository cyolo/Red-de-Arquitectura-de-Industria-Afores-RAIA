import React, { useState } from "react";
import { getBusinessObjects } from "../../../domain/repositories/businessObjectRepository";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";

export default function CatalogoTab() {
  const { searchQuery, setSelectedObjectId, setActiveTab } = useBusinessObjectStore();
  const objects = getBusinessObjects();

  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredObjects = objects.filter((o) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = o.nameEs.toLowerCase().includes(q) || o.definition.toLowerCase().includes(q);
    const matchesFilter = typeFilter === "all" || o.objectType === typeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleSelect = (id: string) => {
    setSelectedObjectId(id);
    setActiveTab("object-map");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="catalogo-tab-content">
      <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Inventario de Objetos Canónicos ({filteredObjects.length})
        </h3>
        
        {/* Type filter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tipo de Objeto:</span>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none"
          >
            <option value="all">Todos</option>
            <option value="party">Party</option>
            <option value="master">Master</option>
            <option value="transaction">Transaction</option>
            <option value="position">Position</option>
            <option value="request">Request</option>
            <option value="decision">Decision</option>
            <option value="reference">Reference</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600">Nombre del Objeto</th>
                <th className="p-3 font-bold text-slate-600 w-36">Tipo</th>
                <th className="p-3 font-bold text-slate-600 w-24">Abstracto</th>
                <th className="p-3 font-bold text-slate-600 w-24">Atributos</th>
                <th className="p-3 font-bold text-slate-600 w-24">Criticidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredObjects.map((o) => (
                <tr key={o.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{o.id}</td>
                  <td className="p-3 font-bold text-slate-800">
                    <button onClick={() => handleSelect(o.id)} className="hover:text-sky-650 text-left font-bold transition-colors">
                      {o.nameEs}
                    </button>
                  </td>
                  <td className="p-3 uppercase">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-750 border border-slate-200">
                      {o.objectType}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-slate-600">{o.abstract ? "Sí" : "No"}</td>
                  <td className="p-3 font-mono font-bold text-slate-650">{o.attributeIds.length}</td>
                  <td className="p-3 uppercase">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      o.criticality === "systemic" ? "bg-red-50 text-red-700 border border-red-200" : "bg-slate-100 text-slate-700"
                    }`}>
                      {o.criticality}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
