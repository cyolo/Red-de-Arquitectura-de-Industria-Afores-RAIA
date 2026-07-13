import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Layers, Network } from "lucide-react";
import { getBusinessAreaBySlug, getBusinessDomains } from "../../../domain/repositories/landscapeRepository";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BusinessAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getBusinessAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const allDomains = getBusinessDomains();
  const domainsInArea = allDomains.filter((bd) => bd.businessAreaId === area.id);

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
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: area.colorToken }}
              >
                <Layers size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">{area.id}</span>
                  <span className="px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200 text-[9px] font-bold uppercase">
                    {area.status}
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mt-1">{area.nameEs}</h1>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Descripción</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{area.description}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Propósito</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{area.purpose}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Versión</h3>
                <p className="text-sm text-slate-700 font-medium mt-1">{area.version}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Última revisión</h3>
                <p className="text-sm text-slate-700 font-medium mt-1">{area.lastReviewedAt || "No definida"}</p>
              </div>
            </div>
          </div>

          {/* Domains list */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Network size={18} className="text-raia-blue-inst" />
              Dominios de Negocio Incluidos ({domainsInArea.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {domainsInArea.map((bd) => (
                <Link
                  key={bd.id}
                  href={`/business-domains/${bd.slug}`}
                  className="p-5 rounded-lg border border-slate-200 hover:border-raia-blue-inst bg-slate-50 hover:bg-white transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">{bd.id}</span>
                    <span className="text-[10px] font-medium text-slate-400 uppercase">{bd.status}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mt-1 group-hover:text-raia-blue-inst transition-colors">
                    {bd.nameEs}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {bd.description || `Módulo para la administración de ${bd.nameEs} en el ecosistema previsional.`}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
