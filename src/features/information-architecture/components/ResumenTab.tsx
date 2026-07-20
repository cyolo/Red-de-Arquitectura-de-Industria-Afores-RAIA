import React from "react";
import {
  getCanonicalBusinessObjects,
  getOwnershipAssignments,
  getLineageEdges,
  getQualityRules,
  getInformationArchitectureGaps
} from "../../../domain/repositories/informationArchitectureRepository";

export default function ResumenTab() {
  const objects = getCanonicalBusinessObjects();
  const assignments = getOwnershipAssignments();
  const lineage = getLineageEdges();
  const quality = getQualityRules();
  const gaps = getInformationArchitectureGaps();

  // Compute coverage metrics
  const total = objects.length || 1;

  const withOwner = objects.filter((o) =>
    assignments.some((a) => a.targetId === o.id && a.governanceRole === "information-owner")
  ).length;

  const withSteward = objects.filter((o) =>
    assignments.some((a) => a.targetId === o.id && a.governanceRole === "data-steward")
  ).length;

  const withClassification = objects.filter((o) => o.classificationIds.length > 0).length;

  const withQuality = objects.filter((o) => o.qualityRuleIds.length > 0).length;

  const withLineage = objects.filter((o) =>
    lineage.some((e) => e.businessObjectIds.includes(o.id))
  ).length;

  const ownerPercent = Math.round((withOwner / total) * 100);
  const stewardPercent = Math.round((withSteward / total) * 100);
  const classPercent = Math.round((withClassification / total) * 100);
  const qualityPercent = Math.round((withQuality / total) * 100);
  const lineagePercent = Math.round((withLineage / total) * 100);

  const coverageItems = [
    { label: "Cobertura de Propietarios (Owner)", percent: ownerPercent, count: withOwner },
    { label: "Cobertura de Custodios (Steward)", percent: stewardPercent, count: withSteward },
    { label: "Cobertura de Clasificación", percent: classPercent, count: withClassification },
    { label: "Cobertura de Linaje Lógico", percent: lineagePercent, count: withLineage },
    { label: "Cobertura de Reglas de Calidad", percent: qualityPercent, count: withQuality }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="resumen-tab-content">
      {/* Introduction Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          Visión General de Gobernanza de Información
        </h2>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          El módulo de Arquitectura de Información cataloga los activos de datos canónicos, 
          sus definiciones semánticas oficiales, y las responsabilidades del Sistema de Ahorro para el Retiro.
        </p>
      </div>

      {/* Coverage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Coverage Metrics Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Métricas de Cobertura Lógica
          </h3>
          <div className="space-y-4">
            {coverageItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span className="font-mono">{item.percent}% ({item.count}/{total})</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-raia-blue-inst bg-sky-600 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Audit Summary */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Resumen de Auditoría Semántica
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Auditoría activa de discrepancias de linaje, falta de clasificación en campos sensibles, u omisión de stewardships.
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs p-2.5 bg-red-50 border border-red-100 rounded-lg">
                <span className="font-semibold text-red-800">Gaps de Severidad Alta</span>
                <span className="font-mono font-bold text-red-700">{gaps.filter(g => g.severity === "high").length}</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-amber-50 border border-amber-100 rounded-lg">
                <span className="font-semibold text-amber-800">Gaps de Severidad Media</span>
                <span className="font-mono font-bold text-amber-700">{gaps.filter(g => g.severity === "medium").length}</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-800">Gaps de Severidad Baja</span>
                <span className="font-mono font-bold text-slate-700">{gaps.filter(g => g.severity === "low").length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
