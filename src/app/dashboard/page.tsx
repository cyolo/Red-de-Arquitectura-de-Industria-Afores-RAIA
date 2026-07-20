import React from "react";
import Link from "next/link";
import { ArrowLeft, BarChart3, AlertTriangle, ShieldCheck, CheckCircle2, Circle, AlertCircle, LayoutDashboard, Link2, Sparkles, BookOpen } from "lucide-react";
import { getArchitectureMetrics } from "../../domain/repositories/portalRepository";

export const metadata = {
  title: "RAIA Architecture Dashboard",
  description: "Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura.",
};

export default async function DashboardPage() {
  const metrics = getArchitectureMetrics();

  // Calculate completeness percentage based on active/validated status
  const totalDomains = metrics.serviceDomains;
  const validatedOrActive = (metrics.byStatus.active || 0) + (metrics.byStatus.validated || 0);
  const validationCoverage = totalDomains > 0 ? Math.round((validatedOrActive / totalDomains) * 100) : 0;

  // Calculate completeness percentage based on actual repository attributes
  const fieldCompleteness = metrics.fieldCompleteness;

  const primaryStats = [
    { id: "business-areas-total", label: "Áreas de Negocio", value: metrics.businessAreas, color: "text-blue-600 border-blue-100 bg-blue-50/50" },
    { id: "business-domains-total", label: "Dominios de Negocio", value: metrics.businessDomains, color: "text-teal-600 border-teal-100 bg-teal-50/50" },
    { id: "service-domains-total", label: "Service Domains", value: metrics.serviceDomains, color: "text-emerald-600 border-emerald-100 bg-emerald-50/50" },
    { id: "relations-total", label: "Relaciones Lógicas", value: metrics.relations, color: "text-indigo-600 border-indigo-100 bg-indigo-50/50" },
    { id: "scenarios-total", label: "Escenarios del SAR", value: metrics.scenarios, color: "text-purple-600 border-purple-100 bg-purple-50/50" },
    { id: "regulations-total", label: "Regulaciones Mapeadas", value: metrics.regulations, color: "text-amber-600 border-amber-100 bg-amber-50/50" },
    { id: "controls-total", label: "Controles Arquitectónicos", value: metrics.controls, color: "text-pink-600 border-pink-100 bg-pink-50/50" },
    { id: "business-objects-total", label: "Objetos de Negocio", value: metrics.businessObjects, color: "text-slate-700 border-slate-200 bg-slate-50/50" },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider mb-6"
        >
          <ArrowLeft size={14} />
          Volver al Portal Principal
        </Link>

        {/* Hero Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
              <BarChart3 size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                RAIA Architecture Dashboard
              </h1>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                Vigencia del Baseline Regulatorio: {metrics.lastUpdatedAt} &bull; Último Análisis: {metrics.lastUpdatedAt}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/service-landscape/value-chain"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-xs"
            >
              <Link2 size={12} />
              Ver Value Chain
            </Link>
            <Link
              href="/metamodel"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-xs"
            >
              <BookOpen size={12} />
              Ver Metamodelo
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {primaryStats.map((stat, idx) => (
            <div 
              key={idx} 
              data-testid="dashboard-metric"
              data-metric-id={stat.id}
              data-metric-value={stat.value}
              className={`p-5 rounded-xl border flex flex-col justify-between ${stat.color} shadow-xs`}
            >
              <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-75">
                {stat.label}
              </span>
              <span className="text-2xl md:text-3xl font-extrabold mt-2 tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Status Distribution */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Estado Editorial
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Active (Activo)", count: metrics.byStatus.active || 0, color: "bg-emerald-500" },
                  { label: "Validated (Validado)", count: metrics.byStatus.validated || 0, color: "bg-teal-500" },
                  { label: "Proposed (Propuesto)", count: metrics.byStatus.proposed || 0, color: "bg-blue-500" },
                  { label: "Draft (Borrador)", count: metrics.byStatus.draft || 0, color: "bg-amber-500" },
                  { label: "Deprecated (Deprecado)", count: metrics.byStatus.deprecated || 0, color: "bg-slate-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                      {item.label}
                    </div>
                    <span className="text-slate-800 font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                <span>Avance de Validación</span>
                <span className="text-slate-700 font-extrabold">{validationCoverage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: `${validationCoverage}%` }}></div>
              </div>
            </div>
          </div>

          {/* Maturity Level */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Madurez de los Dominios
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Adopted (Adoptado)", count: metrics.byMaturity.adopted || 0, color: "bg-indigo-600" },
                  { label: "Validated (Validado)", count: metrics.byMaturity.validated || 0, color: "bg-teal-500" },
                  { label: "Defined (Definido)", count: metrics.byMaturity.defined || 0, color: "bg-blue-400" },
                  { label: "Conceptual (Borrador)", count: metrics.byMaturity.conceptual || 0, color: "bg-slate-300" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className={`w-2.5 h-2.5 rounded-sm ${item.color}`} />
                      {item.label}
                    </div>
                    <span className="text-slate-800 font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                <span>Completitud de Atributos</span>
                <span className="text-slate-700 font-extrabold">{fieldCompleteness}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full" style={{ width: `${fieldCompleteness}%` }}></div>
              </div>
            </div>
          </div>

          {/* Repository Anomalies */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-amber-500" />
              Anomalías de Cobertura
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-100">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Dominios sin Regulación</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">
                    {metrics.domainsWithoutRegulation} dominios no tienen leyes o circulares de CONSAR/IMSS vinculadas.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-100">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Dominios sin Relaciones</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">
                    {metrics.domainsWithoutRelations} dominios se encuentran aislados (sin flujos entrantes o salientes).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100">
                <AlertCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Pendientes de Validación</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">
                    {metrics.domainsPendingValidation} dominios están clasificados en estado borrador o propuesto.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
