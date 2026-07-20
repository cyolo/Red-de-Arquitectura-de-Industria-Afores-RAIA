import React from "react";
import Link from "next/link";
import { ArrowLeft, History, CheckCircle, Tag, AlertCircle } from "lucide-react";
import { getPortalReleases } from "../../domain/repositories/portalRepository";

export const metadata = {
  title: "RAIA Releases",
  description: "Historial de versiones de la arquitectura de referencia y notas de migración.",
};

export default async function ReleasesPage() {
  const releases = getPortalReleases();

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider mb-6"
        >
          <ArrowLeft size={14} />
          Volver al Portal Principal
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <History size={24} className="text-raia-blue-inst" />
            <h1 className="text-2xl font-bold text-slate-800">Historial de Releases de RAIA</h1>
          </div>

          <p className="text-sm text-slate-600 mt-6 leading-relaxed">
            Consulte la evolución histórica de la arquitectura de referencia propuesta para la industria previsional mexicana. Aquí se catalogan las incorporaciones de dominios, ajustes por cambios en las circulares de CONSAR y la Empresa Operadora de la Base de Datos Nacional SAR, y mejoras de modelado de capacidades.
          </p>
        </div>

        {/* Releases List */}
        <div className="space-y-8">
          {releases.map((rel, idx) => (
            <div 
              key={idx} 
              data-testid="release-card"
              data-release-version={rel.version}
              data-release-status={rel.status}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6"
            >
              {/* Release Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs">
                    v{rel.version}
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-800">{rel.name}</h2>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                      {rel.status === "draft" ? "Fecha prevista" : "Publicado"}: {rel.releaseDate} &bull; Baseline Regulatorio: {rel.regulatoryBaselineDate}
                    </p>
                  </div>
                </div>

                {rel.status === "published" && (
                  <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                    Publicado
                  </span>
                )}
                {rel.status === "draft" && (
                  <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                    Borrador
                  </span>
                )}
                {rel.status === "deprecated" && (
                  <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                    Deprecado
                  </span>
                )}
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Resumen del Release</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {rel.summary}
                </p>
              </div>

              {/* Details Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Added */}
                {rel.added.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                      <CheckCircle size={14} className="text-emerald-500" />
                      Agregado
                    </h4>
                    <ul className="space-y-2">
                      {rel.added.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Changed */}
                {rel.changed.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                      <Tag size={14} className="text-amber-500" />
                      Modificado
                    </h4>
                    <ul className="space-y-2">
                      {rel.changed.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deprecated / Removed */}
                {rel.deprecated.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                      <AlertCircle size={14} className="text-slate-400" />
                      Deprecado
                    </h4>
                    <ul className="space-y-2">
                      {rel.deprecated.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Breaking Changes */}
                {rel.breakingChanges.length > 0 && (
                  <div className="md:col-span-2 p-4 rounded-lg bg-red-50 border border-red-100 text-red-800 text-xs">
                    <span className="font-bold block mb-1">Cambios de Ruptura (Breaking Changes)</span>
                    <ul className="list-disc pl-4 space-y-1">
                      {rel.breakingChanges.map((item, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
