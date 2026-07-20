import React from "react";
import Link from "next/link";
import { BookOpen, Layers, Network, ShieldCheck, ArrowLeft, GitCommit } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/service-landscape/value-chain"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Volver al Mapa de Valor
        </Link>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <BookOpen size={24} className="text-raia-blue-inst" />
            <h1 className="text-2xl font-bold text-slate-800">Metodología RAIA</h1>
          </div>

          <p className="text-sm text-slate-600 mt-6 leading-relaxed">
            La **Red de Arquitectura de Industria Afores (RAIA)** está estructurada como un marco de capacidades empresariales normalizado. Este enfoque nos ayuda a catalogar y gobernar las funciones de negocio del Sistema de Ahorro para el Retiro (SAR) sin depender de organigramas o tecnologías cambiantes de una Afore específica.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-10">Jerarquía del Metamodelo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-raia-blue-inst">
                <Layers size={18} />
                <h3 className="font-semibold text-sm">Área de Negocio</h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Agrupación de mayor nivel que contribuye a una parte significativa de la cadena de valor de la industria previsional mexicana (ej. *Recaudación y Aportaciones*).
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-raia-turquoise">
                <Network size={18} />
                <h3 className="font-semibold text-sm">Dominio de Negocio</h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Agrupación intermedia y coherente de responsabilidades funcionales y capacidades de negocio directamente relacionadas (ej. *Ahorro Voluntario*).
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-raia-green-inst">
                <ShieldCheck size={18} />
                <h3 className="font-semibold text-sm">Service Domain</h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Unidad estable, versionada y evolutiva de responsabilidad funcional. Es independiente de organizaciones, tecnologías o implementaciones de software (ej. *Traspaso de Cuenta*).
              </p>
            </div>
          </div>

          {/* Golden Rule Callout */}
          <div className="mt-8 p-5 bg-amber-50 border-l-4 border-raia-gold rounded-r-lg">
            <h3 className="font-bold text-amber-800 text-sm">Regla Esencial</h3>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Un **Service Domain RAIA no equivale** a una aplicación de software, un microservicio de código, un módulo, o una estructura de equipo de desarrollo. Es una abstracción conceptual pura del negocio previsional para catalogar capacidades que luego son materializadas en la infraestructura técnica (como APIs o bases de datos).
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mt-10">Trazabilidad de Extremo a Extremo</h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            La arquitectura RAIA permite trazar cada decisión estratégica hasta su implementación operativa en la industria previsional mediante la siguiente cadena de valor:
          </p>

          <div className="mt-6 border border-slate-200 rounded-lg p-6 bg-slate-50">
            <div className="flex flex-col gap-3">
              {[
                { level: "Estrategia de Industria", desc: "Objetivos generales del SAR" },
                { level: "Área de Negocio", desc: "Macrosector de capacidades de negocio" },
                { level: "Dominio de Negocio", desc: "Agrupación lógica de responsabilidades" },
                { level: "Service Domain", desc: "Ficha funcional de responsabilidades puras" },
                { level: "Service Operation", desc: "Operaciones lógicas independientes de su mecanismo de implementación (initiate, register, retrieve, etc.)" },
                { level: "Business Object", desc: "Modelo de datos del negocio" },
                { level: "Evento de Negocio", desc: "Mensajería asíncrona reactiva (produces, consumes)" },
                { level: "Regulación Asociada", desc: "Leyes (Ley de los Sistemas de Ahorro para el Retiro, Circulares de la CONSAR)" },
                { level: "Control Arquitectónico", desc: "Mitigaciones preventivas/detectivas de seguridad" },
                { level: "Evidencia Digital", desc: "Registros documentales, acuses firmados y bitácoras" },
                { level: "Métrica (KPI)", desc: "Estadísticas e indicadores clave de desempeño (Tiempos, tasas)" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-raia-blue-inst text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    {index < 10 && <div className="w-0.5 h-8 bg-slate-300"></div>}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{item.level}</h4>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
