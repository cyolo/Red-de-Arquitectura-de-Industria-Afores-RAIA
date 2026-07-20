import React, { useState } from "react";
import { getCanonicalBusinessObjects, getInformationDomainById, getOwnershipAssignments } from "../../../domain/repositories/informationArchitectureRepository";
import { useInformationArchitectureStore } from "../store/useInformationArchitectureStore";

export default function ObjetosTab() {
  const { searchQuery, setSelectedId } = useInformationArchitectureStore();
  const objects = getCanonicalBusinessObjects();
  const assignments = getOwnershipAssignments();

  const [sortField, setSortField] = useState<"id" | "nameEs" | "objectType">("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredObjects = objects.filter((o) => {
    const q = searchQuery.toLowerCase();
    return o.nameEs.toLowerCase().includes(q) || o.description.toLowerCase().includes(q);
  });

  const sortedObjects = [...filteredObjects].sort((a, b) => {
    let comparison = 0;
    if (sortField === "id") comparison = a.id.localeCompare(b.id);
    else if (sortField === "nameEs") comparison = a.nameEs.localeCompare(b.nameEs);
    else if (sortField === "objectType") comparison = a.objectType.localeCompare(b.objectType);

    return sortOrder === "asc" ? comparison : -comparison;
  });

  const toggleSort = (field: "id" | "nameEs" | "objectType") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="objetos-tab-content">
      <div className="border-b border-slate-200 pb-3 flex items-center justify-between shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Catálogo Canónico de Objetos de Negocio ({sortedObjects.length})
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th onClick={() => toggleSort("id")} className="p-3 font-bold text-slate-600 w-28 cursor-pointer hover:bg-slate-100">ID</th>
                <th onClick={() => toggleSort("nameEs")} className="p-3 font-bold text-slate-600 w-60 cursor-pointer hover:bg-slate-100">Nombre del Objeto</th>
                <th onClick={() => toggleSort("objectType")} className="p-3 font-bold text-slate-600 w-32 cursor-pointer hover:bg-slate-100">Tipo</th>
                <th className="p-3 font-bold text-slate-600 w-36">Dominio</th>
                <th className="p-3 font-bold text-slate-600">Custodio / Steward</th>
                <th className="p-3 font-bold text-slate-600 w-28">Estatus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sortedObjects.map((o) => {
                const dom = getInformationDomainById(o.informationDomainId);
                const steward = assignments.find((a) => a.targetId === o.id && a.governanceRole === "data-steward");
                return (
                  <tr key={o.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                    <td className="p-3 font-mono font-bold text-slate-400">{o.id}</td>
                    <td className="p-3 font-bold text-slate-800">
                      <button onClick={() => setSelectedId(o.id)} className="hover:text-sky-600 text-left font-bold transition-colors">
                        {o.nameEs}
                      </button>
                    </td>
                    <td className="p-3 uppercase">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {o.objectType}
                      </span>
                    </td>
                    <td className="p-3 font-semibold text-slate-700">{dom?.nameEs || o.informationDomainId}</td>
                    <td className="p-3 font-mono text-slate-600">
                      {steward?.serviceDomainId || steward?.roleId || <span className="text-red-500 font-bold">SIN CUSTODIO</span>}
                    </td>
                    <td className="p-3">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        o.status === "validated" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
