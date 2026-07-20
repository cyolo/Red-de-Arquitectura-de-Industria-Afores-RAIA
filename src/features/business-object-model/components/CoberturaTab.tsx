import React from "react";
import { getBusinessObjects, getBusinessObjectAttributes, getBusinessObjectRelationships } from "../../../domain/repositories/businessObjectRepository";
import { CheckCircle } from "lucide-react";

export default function CoberturaTab() {
  const objects = getBusinessObjects();
  const attributes = getBusinessObjectAttributes();
  const relationships = getBusinessObjectRelationships();

  // Simple completeness calculations
  const withAttributes = objects.filter((o) => o.attributeIds.length > 0).length;
  const attributeCoveragePct = Math.round((withAttributes / (objects.length || 1)) * 100);

  const withRelationships = objects.filter((o) => o.relationshipIds.length > 0).length;
  const relationshipCoveragePct = Math.round((withRelationships / (objects.length || 1)) * 100);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="coverage-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Métricas de Cobertura y Calidad Semántica
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attribute completeness */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-800">
            <span>Objetos con Atributos Definidos</span>
            <span className="font-mono">{attributeCoveragePct}% ({withAttributes}/{objects.length})</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${attributeCoveragePct}%` }} />
          </div>
        </div>

        {/* Relationship completeness */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-800">
            <span>Objetos con Relaciones Definidas</span>
            <span className="font-mono">{relationshipCoveragePct}% ({withRelationships}/{objects.length})</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-teal-650 h-2 rounded-full" style={{ width: `${relationshipCoveragePct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
