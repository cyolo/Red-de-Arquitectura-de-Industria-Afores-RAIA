import React from "react";
import { getBusinessObjectRelationships, getBusinessObjects } from "../../../domain/repositories/businessObjectRepository";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";

export default function RelacionesTab() {
  const { selectedObjectId } = useBusinessObjectStore();

  const relationships = getBusinessObjectRelationships().filter(
    (r) => r.sourceBusinessObjectId === selectedObjectId || r.targetBusinessObjectId === selectedObjectId
  );
  const objects = getBusinessObjects();

  const getObjectName = (id: string) => {
    return objects.find((o) => o.id === id)?.nameEs || id;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="relationships-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Red de Relaciones del Objeto Seleccionado
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-28">ID</th>
                <th className="p-3 font-bold text-slate-600 w-44">Objeto Origen</th>
                <th className="p-3 font-bold text-slate-600 w-44">Objeto Destino</th>
                <th className="p-3 font-bold text-slate-600 w-36">Relación</th>
                <th className="p-3 font-bold text-slate-600">Descripción</th>
                <th className="p-3 font-bold text-slate-600 w-28">Tipo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {relationships.map((r) => (
                <tr key={r.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                  <td className="p-3 font-mono font-bold text-slate-400">{r.id}</td>
                  <td className="p-3 font-bold text-slate-800">{getObjectName(r.sourceBusinessObjectId)}</td>
                  <td className="p-3 font-bold text-slate-800">{getObjectName(r.targetBusinessObjectId)}</td>
                  <td className="p-3 font-bold text-slate-800">{r.name}</td>
                  <td className="p-3 text-slate-600 leading-normal">{r.description}</td>
                  <td className="p-3 uppercase font-mono text-[9px]">
                    <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      {r.relationshipType}
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
