import React from "react";
import { useControlRecordStore } from "../store/useControlRecordStore";
import { getControlRecordById } from "../../../domain/repositories/controlRecordRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";

export default function OperacionesTab() {
  const { selectedControlRecordId } = useControlRecordStore();

  const record = getControlRecordById(selectedControlRecordId || "");
  const sdData = record ? getServiceDomainById(record.serviceDomainId) : null;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="operaciones-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Mapeo de Service Operations & Business Events
        </h3>
      </div>

      {sdData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Operations List */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Service Operations Disponibles</h4>
            <div className="space-y-2.5">
              {sdData.serviceOperations?.map((op) => (
                <div key={op.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] font-bold text-slate-500 bg-slate-200/50 px-1 rounded">
                      {op.id}
                    </span>
                    <span className="text-[8px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1 rounded uppercase">
                      {op.operationType}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-800 mt-1">{op.name}</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{op.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Business Events Producidos</h4>
            <div className="space-y-2.5">
              {sdData.businessEvents?.map((ev) => (
                <div key={ev.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] font-bold text-slate-500 bg-slate-200/50 px-1 rounded">
                      {ev.id}
                    </span>
                    <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-250 px-1 rounded uppercase">
                      {ev.direction}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-800 mt-1">{ev.name}</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{ev.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
