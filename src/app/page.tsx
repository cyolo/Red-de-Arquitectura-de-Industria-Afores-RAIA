import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Network, ShieldCheck, HelpCircle, History, Sparkles, Scale, AlertTriangle } from "lucide-react";
import * as Icons from "lucide-react";

import { getPortalModules, getPortalReleases, getArchitectureMetrics } from "../domain/repositories/portalRepository";
import GlobalSearchTrigger from "../components/portal/GlobalSearchTrigger";

export const metadata = {
  title: "RAIA Architecture Overview Portal",
  description: "Portal de arquitectura de referencia para explorar capacidades, dominios, escenarios, objetos y regulación de la industria mexicana de ahorro para el retiro.",
};

export default function HomePage() {
  const modules = getPortalModules();
  const releases = getPortalReleases();
  const metrics = getArchitectureMetrics();

  // Group modules by category
  const categories = [
    {
      title: "Sección 2 — Arquitectura de Referencia",
      description: "Modelos semánticos, objetos conceptuales y el metamodelo unificado del SAR.",
      modules: modules.filter((m) => m.category === "reference-architecture"),
    },
    {
      title: "Sección 3 — Service Landscape",
      description: "Panoramas funcionales, matrices operativas y flujos visuales interactivos.",
      modules: modules.filter((m) => m.category === "service-landscape"),
    },
    {
      title: "Sección 4 — Escenarios y Capacidades",
      description: "Mapeo de interacciones complejas, secuencias y capacidades de negocio sectoriales.",
      modules: modules.filter((m) => m.category === "business-scenarios" || m.category === "capabilities"),
    },
    {
      title: "Sección 5 — Regulación y Gobierno",
      description: "Trazabilidad normativa, salud del repositorio y guías de contribución para la industria.",
      modules: modules.filter((m) => m.category === "regulation" || m.category === "governance"),
    },
  ];

  // Helper component to render module status badge
  const renderStatusBadge = (status: string) => {
    const config = {
      available: "bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold uppercase",
      "in-development": "bg-amber-50 text-amber-700 border-amber-200 text-[10px] font-bold uppercase",
      planned: "bg-blue-50 text-blue-700 border-blue-200 text-[10px] font-bold uppercase",
      deprecated: "bg-slate-100 text-slate-700 border-slate-300 text-[10px] font-bold uppercase",
    }[status] || "bg-slate-50 text-slate-600";

    const label = {
      available: "Disponible",
      "in-development": "En Desarrollo",
      planned: "Planeado",
      deprecated: "Deprecado",
    }[status] || status;

    return (
      <span className={`px-2 py-0.5 rounded border ${config}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Banner Hero Card */}
        <div className="bg-slate-900 rounded-3xl text-white p-8 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 opacity-10 pointer-events-none hidden md:block">
            <Network size={400} className="text-white -mr-20 -mb-20" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-950 text-blue-300 border border-blue-800 uppercase tracking-wider">
                RAIA Release 0.1.0
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-teal-950 text-teal-300 border border-teal-800 uppercase tracking-wider">
                Regulatory Baseline: 12 July 2026
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
                Reference Architecture
              </span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                RAIA Architecture Overview Portal
              </h1>
              <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mt-1.5">
                Arquitectura de referencia para la industria mexicana de ahorro para el retiro
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              Explore las capacidades, dominios, objetos, escenarios, regulaciones e interacciones que conforman el ecosistema del Sistema de Ahorro para el Retiro.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/service-landscape/value-chain"
                className="inline-flex items-center gap-2 bg-raia-blue-inst hover:bg-blue-600 text-white font-bold text-xs px-5 py-3 rounded-lg transition-colors shadow-lg shadow-blue-950/50"
              >
                Explorar Service Landscape
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/metamodel"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs px-4 py-3 rounded-lg border border-slate-700 transition-colors"
              >
                Conocer Metodología
                <BookOpen size={14} />
              </Link>
              <Link
                href="/releases"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs px-4 py-3 rounded-lg border border-slate-700 transition-colors"
              >
                Consultar Releases
                <History size={14} />
              </Link>
            </div>

            {/* Global Search Component */}
            <div className="pt-4 border-t border-slate-800/60 max-w-md">
              <GlobalSearchTrigger />
            </div>
          </div>
        </div>

        {/* Repositorio Statistics Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-raia-blue-inst">
              <Layers size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800 block">{metrics.businessAreas}</span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Áreas</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-raia-turquoise">
              <Network size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800 block">{metrics.businessDomains}</span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Dominios</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-raia-green-inst">
              <ShieldCheck size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800 block">{metrics.serviceDomains}</span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Servicios</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Icons.GitCommit size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800 block">{metrics.relations}</span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Relaciones</span>
            </div>
          </div>
        </div>

        {/* Categorized Modules Grid */}
        <div className="space-y-10">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div>
                <h2 className="text-md font-extrabold text-slate-800 tracking-tight">
                  {cat.title}
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.modules.map((mod) => {
                  const Icon = (Icons as any)[mod.icon] || HelpCircle;

                  return (
                    <Link
                      key={mod.id}
                      href={mod.route}
                      data-testid="portal-module-card"
                      data-module-id={mod.id}
                      data-module-route={mod.route}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                            <Icon size={20} />
                          </div>
                          <span className="text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                            v{mod.version || "0.1.0"}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-extrabold text-slate-800 leading-tight">
                            {mod.name}
                          </h3>
                          <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5">
                            {mod.id}
                          </span>
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                            {mod.description}
                          </p>

                          {/* Metadata Fields for P1-10 */}
                          <div className="mt-4 pt-3 border-t border-slate-100/80 space-y-1.5 text-[10px] text-slate-500 font-medium">
                            {mod.ownerRole && (
                              <div className="flex justify-between">
                                <span className="text-slate-400">Owner:</span>
                                <span className="font-semibold text-slate-700">{mod.ownerRole}</span>
                              </div>
                            )}
                            {mod.validationStatus && (
                              <div className="flex justify-between">
                                <span className="text-slate-400">Estado Valid.:</span>
                                <span className="font-semibold text-amber-700 bg-amber-50 border border-amber-100/60 px-1.5 py-0.5 rounded">{mod.validationStatus}</span>
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
                                <span className="font-semibold text-slate-600 line-clamp-1 truncate">{mod.roadmap.join(" → ")}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-4">
                        {renderStatusBadge(mod.status)}
                        <span className="text-[10px] font-bold text-raia-blue-inst flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Explorar
                          <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Changes Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <History size={18} className="text-slate-700" />
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              Cambios Recientes (Release 0.1.0)
            </h3>
          </div>
          <ul className="space-y-2">
            {releases[0]?.added.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-raia-turquoise shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/releases"
            className="text-xs font-bold text-raia-blue-inst hover:underline block"
          >
            Ver historial completo de cambios &rarr;
          </Link>
        </div>

        {/* Disclaimer Warning Section */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 flex gap-4">
          <AlertTriangle size={24} className="text-raia-gold shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block">
              Aviso de Neutralidad y Propósito
            </span>
            <p className="text-xs text-amber-700 leading-relaxed">
              RAIA es una arquitectura de referencia propuesta. No sustituye leyes, reglamentos, disposiciones, criterios, manuales, publicaciones oficiales ni asesoría legal, actuarial, financiera, operativa o regulatoria especializada.
            </p>
            <p className="text-[10px] text-amber-600/80 leading-normal italic mt-1.5">
              Inspirado en patrones de navegación y clasificación de BIAN Service Landscape 14.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
