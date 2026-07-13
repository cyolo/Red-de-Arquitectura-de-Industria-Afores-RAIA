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

  // Helper roadmap mock content based on the module's slug to provide "contexto útil"
  const getRoadmapForModule = (slug: string) => {
    switch (slug) {
      case "information-architecture":
        return [
          { step: "Fase 1: Definición de dominios de información y glosario canónico", completed: true },
          { step: "Fase 2: Mapeo de linaje y propiedad (ownership/stewardship) de datos", completed: false },
          { step: "Fase 3: Estándares de intercambio y calidad de datos", completed: false },
        ];
      case "control-record-model":
        return [
          { step: "Fase 1: Mapeo del Focus Object de cada Service Domain", completed: true },
          { step: "Fase 2: Modelado lógico de transiciones y estados (Control Record)", completed: false },
          { step: "Fase 3: Vinculación con evidencias digitales e historiales", completed: false },
        ];
      case "business-object-model":
        return [
          { step: "Fase 1: Identificación y catalogación de objetos iniciales (Trabajador, Cuenta, Aportación)", completed: true },
          { step: "Fase 2: Estructuración del esquema de datos JSON y validaciones Zod", completed: false },
          { step: "Fase 3: Publicación de esquemas JSON Schema para la industria", completed: false },
        ];
      case "reference-model":
        return [
          { step: "Fase 1: Estructuración de los pilares de la arquitectura previsional", completed: true },
          { step: "Fase 2: Integración de mapas de aplicaciones lógicas y redes", completed: false },
          { step: "Fase 3: Alineación de perfiles operativos de participantes", completed: false },
        ];
      case "matrix":
        return [
          { step: "Fase 1: Definición de dimensiones operativas (Área x Dominio)", completed: true },
          { step: "Fase 2: Implementación del renderizador matricial dinámico en React", completed: false },
          { step: "Fase 3: Exportación de matrices en formato CSV y PDF", completed: false },
        ];
      case "overview-diagrams":
        return [
          { step: "Fase 1: Diseño vectorial de diagramas clave (Ciclo de Vida de Cuenta)", completed: true },
          { step: "Fase 2: Integración de SVG interactivos vinculados a Service Domains", completed: false },
          { step: "Fase 3: Pruebas de accesibilidad y diagramas alternativos en texto", completed: false },
        ];
      case "business-scenarios":
        return [
          { step: "Fase 1: Definición de categorías transaccionales (Retiros, Inversión, etc.)", completed: true },
          { step: "Fase 2: Secuenciación de pasos y mapeo de dependencias de servicio", completed: false },
          { step: "Fase 3: Renderizado interactivo de diagramas de secuencia en el navegador", completed: false },
        ];
      case "snippets":
        return [
          { step: "Fase 1: Identificación de patrones comunes (firma digital, prueba de vida)", completed: true },
          { step: "Fase 2: Codificación de esquemas de interacción reutilizables", completed: false },
          { step: "Fase 3: Pruebas de integración de fragmentos en escenarios de negocio", completed: false },
        ];
      case "capability-map":
        return [
          { step: "Fase 1: Jerarquización del Mapa de Capacidades de Negocio (Nivel 1 y 2)", completed: true },
          { step: "Fase 2: Relación del Mapa de Capacidades con Service Domains", completed: false },
          { step: "Fase 3: Herramienta de análisis de brechas (Gap Analysis) sectoriales", completed: false },
        ];
      case "capability-views":
        return [
          { step: "Fase 1: Mapeo de vistas específicas por rol (AFORE, SIEFORE, IMSS)", completed: true },
          { step: "Fase 2: Filtros interactivos para proyectar capacidades reguladas", completed: false },
          { step: "Fase 3: Exportación de vistas de cumplimiento y auditoría", completed: false },
        ];
      case "wireframes":
        return [
          { step: "Fase 1: Creación de prototipos de baja fidelidad para el portal del trabajador", completed: true },
          { step: "Fase 2: Definición de patrones UX comunes de autogestión", completed: false },
          { step: "Fase 3: Pruebas de usabilidad e interactividad básicas", completed: false },
        ];
      case "regulatory-architecture":
        return [
          { step: "Fase 1: Catalogación de leyes y circulares SAR principales", completed: true },
          { step: "Fase 2: Vinculación fina de artículos con controles de Service Domains", completed: false },
          { step: "Fase 3: Trazabilidad completa CONSAR-Procesar-Afore", completed: false },
        ];
      default:
        return [
          { step: "Fase 1: Diseño preliminar del catálogo conceptual", completed: true },
          { step: "Fase 2: Recopilación de retroalimentación de la comunidad", completed: false },
          { step: "Fase 3: Publicación e integración en el portal", completed: false },
        ];
    }
  };

  const roadmap = getRoadmapForModule(module.slug);

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
                  {roadmap.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center border text-[9px] font-bold ${
                        item.completed 
                          ? "bg-raia-blue-inst/10 text-raia-blue-inst border-raia-blue-inst" 
                          : "bg-slate-50 text-slate-400 border-slate-200"
                      }`}>
                        {item.completed ? "✓" : idx + 1}
                      </div>
                      <span className={`text-xs ${item.completed ? "text-slate-700 font-semibold" : "text-slate-400"}`}>
                        {item.step}
                      </span>
                    </div>
                  ))}
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
