import React from "react";
import {
  getControlRecords,
  getControlRecordStates,
  getControlRecordTransitions,
  getControlRecordApplicabilityAssessment,
  getControlRecordGaps
} from "../../../domain/repositories/controlRecordRepository";

export default function ResumenTab() {
  const records = getControlRecords();
  const states = getControlRecordStates();
  const transitions = getControlRecordTransitions();
  const assessments = getControlRecordApplicabilityAssessment();
  const gaps = getControlRecordGaps();

  // Compute stats
  const totalSds = assessments.length || 1;
  const primaryCount = assessments.filter((a) => a.applicability === "primary-control-record").length;
  const supportingCount = assessments.filter((a) => a.applicability === "supporting-control-record").length;
  const statelessCount = assessments.filter((a) => a.applicability === "stateless-capability").length;
  const referenceCount = assessments.filter((a) => a.applicability === "reference-information").length;
  const analyticalCount = assessments.filter((a) => a.applicability === "analytical-capability").length;

  const assessmentCoveragePct = Math.round(((totalSds - assessments.filter((a) => a.applicability === "pending-review").length) / totalSds) * 100);

  const coverageItems = [
    { label: "Primary Control Records", count: primaryCount, color: "bg-emerald-600" },
    { label: "Supporting Control Records", count: supportingCount, color: "bg-blue-600" },
    { label: "Stateless Capabilities", count: statelessCount, color: "bg-slate-450" },
    { label: "Reference Information", count: referenceCount, color: "bg-amber-600" },
    { label: "Analytical Capabilities", count: analyticalCount, color: "bg-purple-600" }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="resumen-tab-content">
      {/* Overview Intro Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          Gobernanza del Ciclo de Vida de Responsabilidades
        </h2>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
          El modelo de registros de control (Control Record Model) define el comportamiento transaccional 
          de los objetos de negocio bajo la custodia lógica de los Service Domains, gobernando sus transacciones 
          y reglas de estado.
        </p>
      </div>

      {/* Grid statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Applicability Assessment Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Evaluación de Aplicabilidad
            </h3>
            <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
              Cobertura: {assessmentCoveragePct}% ({assessments.length - assessments.filter((a) => a.applicability === "pending-review").length}/{totalSds})
            </span>
          </div>

          <div className="space-y-3.5">
            {coverageItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span className="font-mono">{item.count}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${Math.max(2, Math.round((item.count / totalSds) * 100))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaps executive summary card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Resumen de Gaps en Ciclos de Vida
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Auditorías de reachability, estados terminales sin salida, transiciones contradictorias y conformidad de traces.
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
              <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
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
