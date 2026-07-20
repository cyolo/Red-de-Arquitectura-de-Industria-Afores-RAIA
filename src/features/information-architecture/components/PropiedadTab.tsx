import React from "react";
import { getCanonicalBusinessObjects, getOwnershipAssignments } from "../../../domain/repositories/informationArchitectureRepository";
import { AlertCircle } from "lucide-react";

export default function PropiedadTab() {
  const objects = getCanonicalBusinessObjects();
  const assignments = getOwnershipAssignments();

  const roles = [
    { key: "information-owner", label: "Information Owner" },
    { key: "data-steward", label: "Data Steward" },
    { key: "data-custodian", label: "Data Custodian" }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="propiedad-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Matriz de Propiedad y Stewardship (Gobernanza)
        </h3>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left border-collapse text-xs">
            <thead className="bg-slate-50 sticky top-0">
              <tr className="divide-x divide-slate-150">
                <th className="p-3 font-bold text-slate-600 w-60">Objeto de Negocio</th>
                {roles.map((r) => (
                  <th key={r.key} className="p-3 font-bold text-slate-600">{r.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {objects.map((o) => {
                return (
                  <tr key={o.id} className="divide-x divide-slate-150 hover:bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-1 rounded">{o.id}</span>
                        <span>{o.nameEs}</span>
                      </div>
                    </td>
                    {roles.map((r) => {
                      const assignment = assignments.find(
                        (a) => a.targetId === o.id && a.governanceRole === r.key
                      );
                      
                      return (
                        <td key={r.key} className="p-3">
                          {assignment ? (
                            <div className="text-slate-700">
                              <span className="font-semibold text-slate-800 block">
                                {assignment.serviceDomainId || assignment.roleId || assignment.participantId}
                              </span>
                              <span className="text-[10px] text-slate-400 leading-none">
                                {assignment.responsibility}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-150 w-fit">
                              <AlertCircle size={10} />
                              <span>SIN ASIGNACIÓN</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
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
