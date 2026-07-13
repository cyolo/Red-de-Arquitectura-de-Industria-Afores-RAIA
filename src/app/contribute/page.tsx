import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, CheckCircle, GitPullRequest, Code, FileText, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contribuir a RAIA - Gobierno de Contenidos",
  description: "Guía de gobernanza, estados editoriales y proceso de contribución a RAIA.",
};

export default function ContributePage() {
  const editorialStates = [
    { state: "Draft (Borrador)", description: "Elemento inicial en modelado. Puede tener datos parciales, dependencias incompletas o esquemas sin validar." },
    { state: "Proposed (Propuesto)", description: "Sometido a revisión formal por el Comité de Arquitectura de Industria. Cumple con la estructura del metamodelo." },
    { state: "Validated (Validado)", description: "Ha superado las pruebas de consistencia técnica y alineación legal con la base regulatoria vigente." },
    { state: "Active (Activo)", description: "Publicado en el release oficial y adoptado como recomendación de referencia para la industria." },
    { state: "Deprecated (Deprecado)", description: "Preservado por trazabilidad histórica, pero superado por nuevas versiones o reformas regulatorias." },
  ];

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
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Users size={24} className="text-raia-blue-inst" />
            <h1 className="text-2xl font-bold text-slate-800">Contribuir a RAIA y Gobierno de Contenidos</h1>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            La Red de Arquitectura de Industria Afores (RAIA) es un esfuerzo colaborativo y neutral para estandarizar el mapa de capacidades operativas del SAR. Cualquier arquitecto, ingeniero o especialista de la industria previsional mexicana puede proponer adiciones, correcciones o actualizaciones al repositorio.
          </p>

          {/* Types of contribution */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4">¿Cómo contribuir?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg border border-slate-100 bg-slate-50 space-y-2">
                <FileText className="text-raia-blue-inst" size={20} />
                <h3 className="text-xs font-bold text-slate-800">Modelar un Dominio</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Proponer fichas técnicas de Service Domains faltantes en formato JSON estructurado, respetando el metamodelo.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-100 bg-slate-50 space-y-2">
                <GitPullRequest className="text-raia-turquoise" size={20} />
                <h3 className="text-xs font-bold text-slate-800">Reportar Cambios</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Crear Issues o Pull Requests ante reformas regulatorias del IMSS, ISSSTE, CONSAR o la Empresa Operadora.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-100 bg-slate-50 space-y-2">
                <Code className="text-raia-green-inst" size={20} />
                <h3 className="text-xs font-bold text-slate-800">Evolución del Portal</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Contribuir al código del portal Next.js agregando visualizadores interactivos, diagramas o filtros avanzados.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Lifecycle */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Ciclo de Vida Editorial de Contenidos</h2>
            <p className="text-xs text-slate-400 font-medium mb-4 leading-relaxed">
              Los elementos arquitectónicos avanzan por fases desde su propuesta inicial hasta su adopción plena.
            </p>
            <div className="space-y-4">
              {editorialStates.map((s, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                  <div className="w-5 h-5 rounded-full bg-raia-blue-inst/10 text-raia-blue-inst flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{s.state}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Governance */}
          <div className="pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Lineamientos y Licencia</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600 leading-relaxed">
              <li><strong>Neutralidad Obligatoria:</strong> Toda contribución debe abstenerse de incluir marcas comerciales o nombres de participantes específicos, a menos que se trate del rol oficial asignado (ej. Empresa Operadora de la Base de Datos Nacional SAR).</li>
              <li><strong>Consistencia del Metamodelo:</strong> Ningún Service Domain puede proponerse si sus identificadores de Area o Dominio padre no existen en el catálogo maestro.</li>
              <li><strong>Licencia:</strong> Los modelos y contenidos se publican bajo un esquema abierto y de uso libre para la industria mexicana de ahorro para el retiro.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
