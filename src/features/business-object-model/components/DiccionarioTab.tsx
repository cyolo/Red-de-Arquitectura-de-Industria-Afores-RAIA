import React from "react";
import { getBusinessObjectAttributes, getBusinessObjects } from "../../../domain/repositories/businessObjectRepository";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";

export default function DiccionarioTab() {
  const { searchQuery, setSelectedObjectId, setActiveTab } = useBusinessObjectStore();

  const attributes = getBusinessObjectAttributes();
  const objects = getBusinessObjects();

  const getObjectName = (boId: string) => {
    return objects.find((o) => o.id === boId)?.nameEs || boId;
  };

  const filteredAttributes = attributes.filter((a) => {
    const q = searchQuery.toLowerCase();
    return a.nameEs.toLowerCase().includes(q) || a.definition.toLowerCase().includes(q) || getObjectName(a.businessObjectId).toLowerCase().includes(q);
  });

  const handleSelectObject = (boId: string) => {
    setSelectedObjectId(boId);
    setActiveTab("catalogo");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="dictionary-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Diccionario de Atributos Lógicos ({filteredAttributes.length})
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600 w-44">Objeto Asociado</th>
                <th className="p-3 font-bold text-slate-600 w-44">Atributo</th>
                <th className="p-3 font-bold text-slate-600">Definición</th>
                <th className="p-3 font-bold text-slate-600 w-36">Tipo Lógico</th>
                <th className="p-3 font-bold text-slate-600 w-24">Obligatorio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredAttributes.map((a) => (
                <tr key={a.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{a.id}</td>
                  <td className="p-3 font-bold text-slate-800">
                    <button onClick={() => handleSelectObject(a.businessObjectId)} className="hover:text-sky-650 text-left font-bold transition-colors">
                      {getObjectName(a.businessObjectId)}
                    </button>
                  </td>
                  <td className="p-3 font-bold text-slate-800">{a.nameEs}</td>
                  <td className="p-3 text-slate-600 leading-normal">{a.definition}</td>
                  <td className="p-3 uppercase">
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                      {a.logicalDataType}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-slate-750">{a.required ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
