import React from "react";
import { getInformationConcepts, getInformationDomainById } from "../../../domain/repositories/informationArchitectureRepository";
import { useInformationArchitectureStore } from "../store/useInformationArchitectureStore";

export default function ConceptosTab() {
  const { searchQuery, setSelectedId } = useInformationArchitectureStore();
  const concepts = getInformationConcepts();

  const filteredConcepts = concepts.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.nameEs.toLowerCase().includes(q) ||
      c.definition.toLowerCase().includes(q) ||
      c.aliases.some((alias) => alias.toLowerCase().includes(q))
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="conceptos-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Glosario Semántico de Conceptos ({filteredConcepts.length})
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600 w-52">Nombre Canónico</th>
                <th className="p-3 font-bold text-slate-600 w-44">Aliases / Sinónimos</th>
                <th className="p-3 font-bold text-slate-600">Definición Semántica</th>
                <th className="p-3 font-bold text-slate-600 w-36">Dominio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredConcepts.map((c) => {
                const dom = getInformationDomainById(c.informationDomainId);
                return (
                  <tr key={c.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                    <td className="p-3 font-mono font-bold text-slate-400">{c.id}</td>
                    <td className="p-3 font-bold text-slate-800">
                      <button onClick={() => setSelectedId(c.id)} className="hover:text-sky-600 text-left font-bold transition-colors">
                        {c.nameEs}
                      </button>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {c.aliases.map((alias) => (
                          <span key={alias} className="text-[9px] font-bold text-slate-550 bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded">
                            {alias}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-slate-600 leading-normal font-medium">{c.definition}</td>
                    <td className="p-3 font-semibold text-slate-700">{dom?.nameEs || c.informationDomainId}</td>
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
