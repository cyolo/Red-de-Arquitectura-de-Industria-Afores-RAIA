"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Send, Link2, Calendar, GitFork, ClipboardList, HelpCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { PortalModule } from "../../domain/types";

interface Props {
  module: PortalModule;
}

export default function PlannedModulePage({ module }: Props) {
  // Dynamically resolve icon from string
  const IconComponent = (Icons as any)[module.icon] || HelpCircle;

  // Determine status color token
  const statusColors = {
    available: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Disponible" },
    "in-development": { bg: "bg-amber-50 text-amber-700 border-amber-200", label: "En Desarrollo" },
    planned: { bg: "bg-blue-50 text-blue-700 border-blue-200", label: "Planeado" },
    deprecated: { bg: "bg-slate-100 text-slate-700 border-slate-300", label: "Deprecado" },
  }[module.status];

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

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                <IconComponent size={28} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {module.name}
                </h1>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  Código Módulo: {module.id} &bull; Versión Prevista: {module.version || "0.1.0"}
                </p>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors.bg}`}>
              {statusColors.label}
            </span>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Left/Middle Column - Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ClipboardList size={14} className="text-slate-400" />
                  Propósito del Activo
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {module.purpose}
                </p>
              </div>

              <div>
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle size={14} className="text-slate-400" />
                  Descripción y Alcance
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Roadmap */}
              <div>
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar size={14} className="text-slate-400" />
                  Roadmap de Evolución
                </h2>
                <div className="mt-3 space-y-3">
                  {module.roadmap && module.roadmap.length > 0 ? (
                    module.roadmap.map((item, idx) => {
                      const isCompleted = item.status === "completed";
                      const isInProgress = item.status === "in-progress";
                      const isBlocked = item.status === "blocked";

                      let badgeClass = "bg-slate-50 text-slate-400 border-slate-200";
                      let textClass = "text-slate-400";
                      let iconContent = (idx + 1).toString();

                      if (isCompleted) {
                        badgeClass = "bg-emerald-50 text-emerald-600 border-emerald-200";
                        textClass = "text-slate-700 font-semibold";
                        iconContent = "✓";
                      } else if (isInProgress) {
                        badgeClass = "bg-amber-50 text-amber-600 border-amber-200 animate-pulse";
                        textClass = "text-slate-700 font-medium";
                      } else if (isBlocked) {
                        badgeClass = "bg-red-50 text-red-600 border-red-200";
                        textClass = "text-red-500 font-medium";
                        iconContent = "!";
                      }

                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border text-[10px] font-bold shrink-0 ${badgeClass}`}>
                            {iconContent}
                          </div>
                          <div className="flex-1">
                            <span className={`text-xs ${textClass}`}>
                              {item.title}
                            </span>
                            {item.targetDate && (
                              <span className="text-[10px] text-slate-400 font-mono ml-2">
                                (Previsto: {item.targetDate})
                              </span>
                            )}
                            {item.evidence && (
                              <p className="text-[10px] text-slate-500 mt-0.5 italic">
                                Evidencia: {item.evidence}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-slate-400 italic">No hay pasos definidos en el roadmap.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar info */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 h-fit space-y-5">
              <div>
                <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <GitFork size={12} className="text-slate-400" />
                  Dependencias
                </h3>
                {module.dependencies && module.dependencies.length > 0 ? (
                  <ul className="mt-2 space-y-1.5">
                    {module.dependencies.map((dep, idx) => (
                      <li key={idx} className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <Link2 size={12} className="text-slate-400" />
                        {dep}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-400 italic mt-2">Ninguno (Módulo base)</p>
                )}
              </div>

              <div>
                <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Etiquetas
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {module.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-semibold text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contribute"
                  className="w-full inline-flex items-center justify-center gap-2 bg-raia-blue-inst hover:bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <Send size={12} />
                  Contribuir con Ideas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
