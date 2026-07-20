import React from "react";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";
import { getServiceDomainsForBusinessObject } from "../../../domain/repositories/businessObjectRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";

export default function ServiceDomainsTab() {
  const { selectedObjectId } = useBusinessObjectStore();

  const mappings = getServiceDomainsForBusinessObject(selectedObjectId || "");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="service-domains-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Mapeo de Afectación por Service Domains
        </h3>
      </div>

      <div className="space-y-4">
        {mappings.map((m) => {
          const sd = getServiceDomainById(m.serviceDomainId);
          return (
            <div key={m.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-1 rounded mr-2">
                  {m.serviceDomainId}
                </span>
                <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded uppercase">
                  Rol: {m.usageRole}
                </span>
                <h4 className="text-xs font-bold text-slate-800 mt-2">{sd?.nameEs || m.serviceDomainId}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
