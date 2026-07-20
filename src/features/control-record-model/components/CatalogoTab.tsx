import React, { useState } from "react";
import { getControlRecords } from "../../../domain/repositories/controlRecordRepository";
import { useControlRecordStore } from "../store/useControlRecordStore";

export default function CatalogoTab() {
  const { searchQuery, setSelectedControlRecordId, setActiveTab } = useControlRecordStore();
  const records = getControlRecords();

  const [applicabilityFilter, setApplicabilityFilter] = useState<string>("all");

  const filteredRecords = records.filter((r) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = r.nameEs.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
    const matchesFilter = applicabilityFilter === "all" || r.applicability === applicabilityFilter;
    return matchesSearch && matchesFilter;
  });

  const handleSelect = (id: string) => {
    setSelectedControlRecordId(id);
    setActiveTab("state-machine");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="catalogo-tab-content">
      <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Inventario de Control Records ({filteredRecords.length})
        </h3>
        
        {/* Filters */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Aplicabilidad:</span>
          <select
            value={applicabilityFilter}
            onChange={(e) => setApplicabilityFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-700 focus:outline-none"
          >
            <option value="all">Todos</option>
            <option value="primary-control-record">Primary</option>
            <option value="supporting-control-record">Supporting</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600">Nombre del Control Record</th>
                <th className="p-3 font-bold text-slate-600 w-40">Service Domain</th>
                <th className="p-3 font-bold text-slate-600 w-44">Objeto Focal</th>
                <th className="p-3 font-bold text-slate-600 w-36">Aplicabilidad</th>
                <th className="p-3 font-bold text-slate-600 w-24">Estados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredRecords.map((r) => (
                <tr key={r.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{r.id}</td>
                  <td className="p-3 font-bold text-slate-800">
                    <button onClick={() => handleSelect(r.id)} className="hover:text-sky-650 text-left font-bold transition-colors">
                      {r.nameEs}
                    </button>
                  </td>
                  <td className="p-3 font-mono text-slate-600">{r.serviceDomainId}</td>
                  <td className="p-3 font-semibold text-slate-700">{r.focalBusinessObjectId}</td>
                  <td className="p-3 uppercase">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-750 border border-slate-200">
                      {r.applicability.replace("-control-record", "")}
                    </span>
                  </td>
                  <td className="p-3 font-mono font-bold text-slate-650">{r.stateIds.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
