import React from "react";
import { useControlRecordStore } from "../store/useControlRecordStore";
import { getControlRecordById } from "../../../domain/repositories/controlRecordRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";
import { ShieldCheck, HelpCircle } from "lucide-react";

export default function ControlesTab() {
  const { selectedControlRecordId } = useControlRecordStore();

  const record = getControlRecordById(selectedControlRecordId || "");
  const sdData = record ? getServiceDomainById(record.serviceDomainId) : null;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="controles-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Mitigación, Aseguramiento & Evidencias
        </h3>
      </div>

      {sdData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controls List */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Controles Arquitectónicos</h4>
            <div className="space-y-2.5">
              {sdData.controls && sdData.controls.length > 0 ? (
                sdData.controls.map((c) => (
                  <div key={c.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] font-bold text-slate-500 bg-slate-200/50 px-1 rounded">
                        {c.id}
                      </span>
                      <span className="text-[8px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1 rounded uppercase">
                        {c.controlType}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-800 mt-1">{c.name}</h5>
                    <p className="text-[10px] text-slate-550 mt-0.5 leading-normal">{c.description}</p>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-1.5 p-3 text-xs text-slate-450 italic">
                  <ShieldCheck size={14} />
                  <span>No hay controles asignados en este baseline.</span>
                </div>
              )}
            </div>
          </div>

          {/* Evidence List */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Evidencias Requeridas</h4>
            <div className="space-y-2.5">
              {sdData.evidences && sdData.evidences.length > 0 ? (
                sdData.evidences.map((e, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 border border-slate-100 rounded text-xs font-semibold text-slate-700">
                    {e}
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-1.5 p-3 text-xs text-slate-450 italic">
                  <HelpCircle size={14} />
                  <span>No hay evidencias declaradas para el dominio.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
