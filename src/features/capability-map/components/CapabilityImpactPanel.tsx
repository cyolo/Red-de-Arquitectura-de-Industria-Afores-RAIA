import React, { useState } from "react";
import { BusinessCapability } from "../../../domain/types/capabilityTypes";
import { getCapabilities, getCapabilityImpactAnalysis } from "../../../domain/repositories/capabilityRepository";
import { Activity, ShieldAlert, CheckCircle } from "lucide-react";

export default function CapabilityImpactPanel() {
  const allCapabilities = getCapabilities();
  const [selectedId, setSelectedId] = useState(allCapabilities[0]?.id || "");
  const [simulatedCriticality, setSimulatedCriticality] = useState("high");

  const impact = getCapabilityImpactAnalysis(selectedId);

  return (
    <div className="space-y-6" data-testid="capability-impact-panel">
      {/* Configuration Header */}
      <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
        <h3 className="text-sm font-black text-slate-800">Simulador de Impacto Cruzado</h3>
        <p className="text-[11px] text-slate-500 mt-1">
          Modifica los parámetros de una capacidad de negocio para evaluar el impacto en Service Domains y Escenarios.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Capacidad de Negocio
            </label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              {allCapabilities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.id} - {c.nameEs}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Simular Cambio de Criticidad
            </label>
            <select
              value={simulatedCriticality}
              onChange={(e) => setSimulatedCriticality(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="low">Baja (Low)</option>
              <option value="medium">Media (Medium)</option>
              <option value="high">Alta (High)</option>
              <option value="systemic">Sistémica (Systemic)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Simulator Results */}
      {impact && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Hierarchy Impact */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <h4 className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
              Impacto Jerárquico
            </h4>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-3xl font-black text-slate-900">
                {impact.affectedChildrenCount}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Capacidades Hijas</span>
            </div>
            <p className="text-[10.5px] text-slate-400 mt-2 leading-relaxed">
              Las modificaciones de esta capacidad L2 impactarán a sus ramificaciones y subcapacidades.
            </p>
          </div>

          {/* Card 2: Realization Impact */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <h4 className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
              Impacto Operativo
            </h4>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-3xl font-black text-slate-900">
                {impact.affectedServiceDomainsCount}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Service Domains</span>
            </div>
            <p className="text-[10.5px] text-slate-400 mt-2 leading-relaxed">
              Los Service Domains que materializan la capacidad requerirán reevaluación de coberturas.
            </p>
          </div>

          {/* Card 3: Downstream Risk */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <h4 className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
              Nivel de Riesgo
            </h4>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-sm font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                simulatedCriticality === "systemic" ? "bg-red-50 text-red-700 border border-red-200" :
                simulatedCriticality === "high" ? "bg-orange-50 text-orange-700 border border-orange-200" :
                "bg-slate-50 text-slate-700 border border-slate-200"
              }`}>
                {simulatedCriticality === "systemic" || simulatedCriticality === "high" ? "Crítico" : "Moderado"}
              </span>
              <Activity size={18} className="text-slate-400 animate-pulse" />
            </div>
            <p className="text-[10.5px] text-slate-400 mt-2 leading-relaxed">
              Criticidad recalculada para la cadena de valor previsional de la industria.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
