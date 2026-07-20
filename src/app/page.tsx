"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Network, ShieldCheck, HelpCircle, History, Sparkles, Scale, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import * as Icons from "lucide-react";

import { getPortalModules, getPortalReleases, getArchitectureMetrics } from "../domain/repositories/portalRepository";
import GlobalSearchTrigger from "../components/portal/GlobalSearchTrigger";

export default function HomePage() {
  const modules = getPortalModules();
  const releases = getPortalReleases();
  const metrics = getArchitectureMetrics();

  const [activeTab, setActiveTab] = useState<string>("all");
  const [releasesExpanded, setReleasesExpanded] = useState(false);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(false);

  const tabs = [
    { id: "all", label: "Todos", count: modules.length },
    { id: "reference-architecture", label: "Referencia", count: modules.filter((m) => m.category === "reference-architecture").length },
    { id: "service-landscape", label: "Landscape", count: modules.filter((m) => m.category === "service-landscape").length },
    { id: "business-scenarios", label: "Escenarios/Capacidades", count: modules.filter((m) => m.category === "business-scenarios" || m.category === "capabilities").length },
    { id: "regulation-governance", label: "Regulación/Gobierno", count: modules.filter((m) => m.category === "regulation" || m.category === "governance").length },
  ];

  const filteredModules = modules.filter((mod) => {
    if (activeTab === "all") return true;
    if (activeTab === "reference-architecture") return mod.category === "reference-architecture";
    if (activeTab === "service-landscape") return mod.category === "service-landscape";
    if (activeTab === "business-scenarios") return mod.category === "business-scenarios" || mod.category === "capabilities";
    if (activeTab === "regulation-governance") return mod.category === "regulation" || mod.category === "governance";
    return true;
  });

  const renderStatusBadge = (status: string) => {
    const config = {
      available: "bg-emerald-50 text-emerald-700 border-emerald-200 text-[9px] font-bold uppercase",
      "in-development": "bg-amber-50 text-amber-700 border-amber-200 text-[9px] font-bold uppercase",
      planned: "bg-blue-50 text-blue-700 border-blue-200 text-[9px] font-bold uppercase",
      deprecated: "bg-slate-100 text-slate-700 border-slate-300 text-[9px] font-bold uppercase",
    }[status] || "bg-slate-50 text-slate-600";

    const label = {
      available: "Disponible",
      "in-development": "En Desarrollo",
      planned: "Planeado",
      deprecated: "Deprecado",
    }[status] || status;

    return (
      <span className={`px-1.5 py-0.5 rounded border ${config}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Compact Hero Card (max 220px on desktop) */}
        <div className="bg-slate-900 rounded-2xl text-white p-6 shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 opacity-10 pointer-events-none hidden md:block">
            <Network size={280} className="text-white -mr-10 -mb-10" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-950 text-blue-300 border border-blue-800 uppercase tracking-wider">
                RAIA Release 0.1.0
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-teal-950 text-teal-300 border border-teal-800 uppercase tracking-wider">
                Regulatory Baseline: 12 July 2026
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
                Reference Architecture
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  RAIA Architecture Overview Portal
                </h1>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider leading-none">
                  Red de Arquitectura de Industria Afores
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/service-landscape/value-chain"
                  className="inline-flex items-center gap-1 bg-raia-blue-inst hover:bg-blue-600 text-white font-bold text-[10px] px-3.5 py-2 rounded-lg transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Value Landscape
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/metamodel"
                  className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-[10px] px-3 py-2 rounded-lg border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Metodología
                  <BookOpen size={12} />
                </Link>
                <Link
                  href="/releases"
                  className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-[10px] px-3 py-2 rounded-lg border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Releases
                  <History size={12} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-2 border-t border-slate-800/40">
              <p className="text-slate-300 text-xs leading-relaxed max-w-xl">
                Explore las capacidades, dominios, escenarios de negocio, objetos y regulaciones que definen la arquitectura de referencia del Sistema de Ahorro para el Retiro.
              </p>
              <div className="w-full max-w-sm justify-self-end">
                <React.Suspense fallback={<div className="h-8 bg-slate-800 animate-pulse rounded border border-slate-700 w-full" />}>
                  <GlobalSearchTrigger />
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Compact KPIs Strip (height 72px–96px) */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-raia-blue-inst shrink-0">
              <Layers size={16} />
            </div>
            <div>
              <span className="text-base font-bold text-slate-800 block leading-tight">{metrics.businessAreas}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Áreas de Negocio</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-raia-turquoise shrink-0">
              <Network size={16} />
            </div>
            <div>
              <span className="text-base font-bold text-slate-800 block leading-tight">{metrics.businessDomains}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Dominios</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-raia-green-inst shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <span className="text-base font-bold text-slate-800 block leading-tight">{metrics.serviceDomains}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Servicios (SD)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <Icons.GitCommit size={16} />
            </div>
            <div>
              <span className="text-base font-bold text-slate-800 block leading-tight">{metrics.relations}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Relaciones</span>
            </div>
          </div>
        </div>

        {/* Tab-based Module Explorer */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-2 gap-2">
            <h2 className="text-sm font-bold text-slate-800 tracking-tight uppercase">
              Módulos de Arquitectura
            </h2>
            
            {/* Tabs container */}
            <div className="flex flex-wrap gap-1" role="tablist" aria-label="Módulos de arquitectura">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 text-[11px] font-semibold rounded-md border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white border-slate-900 font-bold"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                  <span className="ml-1 px-1 py-0.2 text-[9px] rounded-full bg-slate-100 text-slate-500 group-aria-selected:bg-slate-800 group-aria-selected:text-white">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="portal-modules-grid">
            {filteredModules.map((mod) => {
              const Icon = (Icons as any)[mod.icon] || HelpCircle;

              return (
                <Link
                  key={mod.id}
                  href={mod.route}
                  data-testid="portal-module-card"
                  data-module-id={mod.id}
                  data-module-route={mod.route}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        <Icon size={16} />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60">
                        v{mod.version || "0.1.0"}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xs font-extrabold text-slate-800 leading-tight group-hover:text-raia-blue-inst transition-colors">
                        {mod.name}
                      </h3>
                      <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5">
                        {mod.id}
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                        {mod.description}
                      </p>

                      {/* Compact metadata details list */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1 text-[9px] text-slate-500 font-medium">
                        {mod.ownerRole && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">Owner:</span>
                            <span className="font-bold text-slate-700">{mod.ownerRole}</span>
                          </div>
                        )}
                        {mod.validationStatus && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">Validación:</span>
                            <span className="font-bold text-amber-700 bg-amber-50 border border-amber-100/60 px-1 py-0.2 rounded">{mod.validationStatus}</span>
                          </div>
                        )}
                        {mod.dependencies && mod.dependencies.length > 0 && (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-slate-400">Dependencias:</span>
                            <span className="font-semibold text-slate-600 truncate">{mod.dependencies.join(", ")}</span>
                          </div>
                        )}
                        {mod.roadmap && mod.roadmap.length > 0 && (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-slate-400">Roadmap:</span>
                            <span className="font-semibold text-slate-600 truncate">{mod.roadmap.join(" → ")}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between mt-3">
                    {renderStatusBadge(mod.status)}
                    <span className="text-[9px] font-bold text-raia-blue-inst flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Explorar
                      <ArrowRight size={8} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Collapsible Releases & Disclaimer bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Recent Changes Accordion Panel */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
            <button
              onClick={() => setReleasesExpanded(!releasesExpanded)}
              className="flex items-center justify-between w-full border-b border-slate-100 pb-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <History size={16} className="text-slate-700" />
                <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Cambios Recientes (Release 0.1.0)
                </h3>
              </div>
              {releasesExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            
            <div className={`space-y-3 transition-all duration-200 ${releasesExpanded ? "block" : "hidden md:block"}`}>
              <ul className="space-y-1.5">
                {releases[0]?.added.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-raia-turquoise shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/releases"
                className="text-[11px] font-bold text-raia-blue-inst hover:underline inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
              >
                Ver historial completo de cambios &rarr;
              </Link>
            </div>
            {!releasesExpanded && (
              <p className="text-[10px] text-slate-400 italic md:hidden">Toca para expandir historial.</p>
            )}
          </div>

          {/* Disclaimer Warning Section */}
          <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex gap-2">
              <AlertTriangle size={18} className="text-raia-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                  Aviso de Neutralidad y Propósito
                </span>
                <p className="text-[11px] text-amber-700 leading-relaxed line-clamp-2">
                  RAIA es una arquitectura de referencia propuesta. No sustituye leyes, reglamentos, disposiciones, criterios, manuales, publicaciones oficiales ni asesoría legal, actuarial, financiera, operativa o de gobierno sectorial.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setDisclaimerExpanded(!disclaimerExpanded)}
              className="text-[10px] text-amber-600 hover:text-amber-800 font-semibold mt-2 text-left underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 self-start cursor-pointer"
            >
              {disclaimerExpanded ? "Ocultar detalles" : "Ver aviso legal completo"}
            </button>

            {disclaimerExpanded && (
              <div className="text-[10px] text-amber-700 leading-normal space-y-1.5 mt-2 pt-2 border-t border-amber-200/50">
                <p>
                  RAIA es independiente de cualquier órgano supervisor oficial. Toda interpretación o decisión operativa tomada basándose en este portal de referencia técnica es exclusiva responsabilidad del lector.
                </p>
                <p className="italic">
                  Inspirado conceptualmente en los patrones de organización del BIAN Service Landscape 14.0.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
