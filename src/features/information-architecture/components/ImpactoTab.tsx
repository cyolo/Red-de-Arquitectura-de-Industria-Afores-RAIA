import React, { useState } from "react";
import { getCanonicalBusinessObjects, getServiceDomainsForBusinessObject, getScenariosForBusinessObject, getRegulatoryMappingsForBusinessObject } from "../../../domain/repositories/informationArchitectureRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";
import { getScenarioById } from "../../../domain/repositories/landscapeRepository";
import { AlertCircle, HelpCircle } from "lucide-react";

export default function ImpactoTab() {
  const objects = getCanonicalBusinessObjects();
  const [selectedBoId, setSelectedBoId] = useState<string>(objects[0]?.id || "");

  const activeBo = objects.find(o => o.id === selectedBoId);
  const relations = activeBo ? getServiceDomainsForBusinessObject(activeBo.id) : { producers: [], consumers: [], authoritatives: [] };
  const scenarios = activeBo ? getScenariosForBusinessObject(activeBo.id) : [];
  const regulations = activeBo ? getRegulatoryMappingsForBusinessObject(activeBo.id) : [];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="impacto-tab-content">
      <div className="border-b border-slate-200 pb-3 flex items-center justify-between shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Análisis de Impacto Arquitectónico
        </h3>
        
        {/* Selector dropdown */}
        <select
          value={selectedBoId}
          onChange={(e) => setSelectedBoId(e.target.value)}
          className="bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-700 focus:outline-none focus:border-slate-400 font-bold"
        >
          {objects.map((o) => (
            <option key={o.id} value={o.id}>{o.id} - {o.nameEs}</option>
          ))}
        </select>
      </div>

      {activeBo && (
        <div className="space-y-6">
          {/* Summary metrics header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">SERVICE DOMAINS AFECTADOS</span>
              <span className="text-sm font-extrabold text-slate-800 font-mono mt-1 block">
                {Array.from(new Set([...relations.producers, ...relations.consumers, ...relations.authoritatives])).length}
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">ESCENARIOS DE NEGOCIO AFECTADOS</span>
              <span className="text-sm font-extrabold text-slate-800 font-mono mt-1 block">
                {scenarios.length}
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">REGULACIONES IMPACTADAS</span>
              <span className="text-sm font-extrabold text-slate-800 font-mono mt-1 block">
                {regulations.length}
              </span>
            </div>
          </div>

          {/* Detailed Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mapped Service Domains */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Service Domains Impactados</h4>
              
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {relations.producers.map((sdId) => (
                  <div key={sdId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-slate-400 mr-1">{sdId}</span>
                      <span className="font-semibold text-slate-800">{getServiceDomainById(sdId)?.nameEs || sdId}</span>
                    </div>
                    <span className="text-[8px] font-bold text-blue-700 bg-blue-50 px-1 rounded border border-blue-200">PRODUCTOR</span>
                  </div>
                ))}
                {relations.consumers.map((sdId) => (
                  <div key={sdId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-slate-400 mr-1">{sdId}</span>
                      <span className="font-semibold text-slate-800">{getServiceDomainById(sdId)?.nameEs || sdId}</span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-700 bg-slate-50 px-1 rounded border border-slate-200">CONSUMIDOR</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Scenarios */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Escenarios de Negocio Relacionados</h4>
              
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {scenarios.length > 0 ? (
                  scenarios.map((scenId) => {
                    const scenario = getScenarioById ? getScenarioById(scenId) : null;
                    return (
                      <div key={scenId} className="flex items-center justify-between text-xs p-2 bg-slate-50 border border-slate-100 rounded">
                        <div>
                          <span className="font-mono text-[9px] font-bold text-slate-400 mr-1">{scenId}</span>
                          <span className="font-semibold text-slate-800">{scenario?.name || scenId}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex items-center gap-1.5 p-3 text-xs text-slate-450 italic">
                    <HelpCircle size={14} />
                    <span>No hay escenarios mapeados para este objeto.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
