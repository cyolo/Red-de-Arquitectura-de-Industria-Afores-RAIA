import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Network, ShieldCheck, ArrowRight } from "lucide-react";
import { getBusinessDomainBySlug, getBusinessAreaById, getServiceDomains } from "../../../domain/repositories/landscapeRepository";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BusinessDomainPage({ params }: Props) {
  const { slug } = await params;
  const domain = getBusinessDomainBySlug(slug);

  if (!domain) {
    notFound();
  }

  const area = getBusinessAreaById(domain.businessAreaId);
  const allServiceDomains = getServiceDomains();
  const serviceDomainsInDomain = allServiceDomains.filter((sd) => sd.businessDomainId === domain.id);

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
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-raia-turquoise flex items-center justify-center border border-teal-100">
                <Network size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">{domain.id}</span>
                  <span className="px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200 text-[9px] font-bold uppercase">
                    {domain.status}
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mt-1">{domain.nameEs}</h1>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 space-y-6">
            {area && (
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Área de Negocio Relacionada</h3>
                <Link
                  href={`/business-areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-raia-blue-inst hover:text-blue-700 mt-1 transition-colors"
                >
                  {area.nameEs} ({area.id})
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Descripción</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{domain.description}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Propósito</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{domain.purpose}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Actores Involucrados</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {domain.actors.map((actor, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-medium">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Value Streams</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {domain.valueStreams.map((vs, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-medium">
                      {vs}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Domains list */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck size={18} className="text-raia-green-inst" />
              Service Domains Incluidos ({serviceDomainsInDomain.length})
            </h2>
            <div className="grid grid-cols-1 gap-3 mt-6">
              {serviceDomainsInDomain.map((sd) => (
                <Link
                  key={sd.id}
                  href={`/service-domains/${sd.slug}`}
                  className="p-4 rounded-lg border border-slate-200 hover:border-raia-green-inst bg-slate-50 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400">{sd.id}</span>
                      <span className="text-[9px] font-medium px-1 rounded bg-slate-200 text-slate-600 uppercase">
                        {sd.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs mt-0.5 group-hover:text-raia-green-inst transition-colors">
                      {sd.nameEs}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-1 leading-normal">
                      {sd.summary}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-raia-green-inst shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
