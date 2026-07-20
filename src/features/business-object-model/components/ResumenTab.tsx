import React from "react";
import {
  getBusinessObjects,
  getBusinessObjectAttributes,
  getBusinessObjectRelationships,
  getBusinessObjectGaps
} from "../../../domain/repositories/businessObjectRepository";

export default function ResumenTab() {
  const objects = getBusinessObjects();
  const attributes = getBusinessObjectAttributes();
  const relationships = getBusinessObjectRelationships();
  const gaps = getBusinessObjectGaps();

  // Compute metrics
  const totalCount = objects.length || 1;
  const masterCount = objects.filter((o) => o.objectType === "master").length;
  const transactionCount = objects.filter((o) => o.objectType === "transaction").length;
  const referenceCount = objects.filter((o) => o.objectType === "reference").length;
  const partyCount = objects.filter((o) => o.objectType === "party").length;
  const abstractCount = objects.filter((o) => o.abstract).length;

  const objectTypesList = [
    { label: "Master Objects", count: masterCount, color: "bg-blue-600" },
    { label: "Transaction Objects", count: transactionCount, color: "bg-teal-650" },
    { label: "Reference Objects", count: referenceCount, color: "bg-slate-500" },
    { label: "Party (Personas/Roles)", count: partyCount, color: "bg-amber-600" },
    { label: "Abstract Objects", count: abstractCount, color: "bg-purple-600" }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="resumen-tab-content">
      {/* Overview Intro Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          Modelo Canónico de Objetos de Negocio (BOM)
        </h2>
        <p className="text-xs text-slate-650 mt-2 leading-relaxed font-medium">
          El Business Object Model representa las estructuras informativas, relaciones lógicas y cardinalidades 
          estables de la industria previsional. Permite gobernar la semántica del dato, sus atributos y la trazabilidad 
          de afectación a través de los Service Domains y escenarios de negocio.
        </p>
      </div>

      {/* Grid statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Distribution Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-850 uppercase tracking-wider">
            Clasificación de Objetos Núcleo
          </h3>
          <div className="space-y-3.5">
            {objectTypesList.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span className="font-mono">{item.count}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${Math.max(2, Math.round((item.count / totalCount) * 100))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaps executive summary card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-850 uppercase tracking-wider">
              Análisis y Calidad del Diccionario
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Resumen de gaps semánticos detectados en el catálogo, aliases conflictivos o de duplicidad previsional.
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs p-2.5 bg-red-50 border border-red-100 rounded-lg">
                <span className="font-bold text-red-800">Prioridad P0 (Crítico)</span>
                <span className="font-mono font-extrabold text-red-700">{gaps.filter(g => g.severity === "P0").length}</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-amber-50 border border-amber-100 rounded-lg">
                <span className="font-bold text-amber-800">Prioridad P1 (Alta)</span>
                <span className="font-mono font-extrabold text-amber-700">{gaps.filter(g => g.severity === "P1").length}</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 border border-slate-250 rounded-lg">
                <span className="font-bold text-slate-800">Prioridad P2 / P3 (Media/Baja)</span>
                <span className="font-mono font-extrabold text-slate-700">{gaps.filter(g => g.severity === "P2" || g.severity === "P3").length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
