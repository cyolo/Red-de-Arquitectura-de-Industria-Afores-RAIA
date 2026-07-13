import React from "react";
import Link from "next/link";
import { Layers, BookOpen, Network, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../domain/repositories/landscapeRepository";

export default function HomePage() {
  const areas = getBusinessAreas();
  const domains = getBusinessDomains();
  const serviceDomains = getServiceDomains();

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Banner Card */}
        <div className="bg-slate-900 rounded-2xl text-white p-8 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 opacity-10 pointer-events-none hidden md:block">
            <Network size={400} className="text-white -mr-20 -mb-20" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800 uppercase tracking-wider">
              Arquitectura de Referencia de Industria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              RAIA Service Landscape
            </h1>
            <p className="text-slate-400 text-sm md:text-base mt-2 font-medium">
              Red de Arquitectura de Industria Afores &bull; Versión V14.0
            </p>
            <p className="text-slate-300 text-sm md:text-base mt-4 leading-relaxed">
              Arquitectura de referencia propuesta para modelar las capacidades, dominios e interacciones de la industria mexicana de ahorro para el retiro. Diseñada para estandarizar las integraciones tecnológicas y el gobierno de arquitectura del Sistema de Ahorro para el Retiro (SAR).
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/service-landscape/value-chain"
                className="inline-flex items-center gap-2 bg-raia-blue-inst hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors shadow-lg shadow-blue-950/50"
              >
                Explorar Cadena de Valor
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm px-5 py-3 rounded-lg border border-slate-700 transition-colors"
              >
                Conocer Metodología
                <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-raia-blue-inst">
              <Layers size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-800">{areas.length}</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Áreas de Negocio</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-raia-turquoise">
              <Network size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-800">{domains.length}</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dominios de Negocio</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-raia-green-inst">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-800">{serviceDomains.length}</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service Domains RAIA</p>
            </div>
          </div>
        </div>

        {/* Ecosistema Overview */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">
            ¿Qué es RAIA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-raia-green-inst" />
                Arquitectura Neutral y Extensible
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                RAIA no modela la implementación interna de una Afore en particular. En su lugar, define un marco conceptual estandarizado para toda la industria mexicana de pensiones, permitiendo mapear responsabilidades y flujos transaccionales de forma uniforme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-raia-green-inst" />
                Alineación Regulatoria y Operativa
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Cada Service Domain vincula sus capacidades funcionales directas con regulaciones aplicables del SAR (Comisión Nacional del Sistema de Ahorro para el Retiro, Empresa Operadora de la Base de Datos Nacional SAR, Ley de los Sistemas de Ahorro para el Retiro) y controles de arquitectura de seguridad, garantizando una trazabilidad regulatoria de extremo a extremo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
