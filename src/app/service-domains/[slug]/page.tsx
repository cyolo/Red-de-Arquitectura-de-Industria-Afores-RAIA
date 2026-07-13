"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Printer, Network, Layers, ExternalLink, Activity, Scale, ShieldAlert, Award } from "lucide-react";
import { getServiceDomainBySlug, getBusinessAreaById, getBusinessDomainById, getServiceDomainById } from "../../../domain/repositories/landscapeRepository";
import LocalRelationGraph from "../../../components/diagram/LocalRelationGraph";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ServiceDomainPage({ params }: Props) {
  const resolvedParams = use(params);
  const router = useRouter();
  const sd = getServiceDomainBySlug(resolvedParams.slug);

  if (!sd) {
    notFound();
  }

  const area = getBusinessAreaById(sd.businessAreaId);
  const domain = getBusinessDomainById(sd.businessDomainId);

  // Resolve related service domains
  const relatedDomains = sd.relatedServiceDomainIds
    .map((id) => getServiceDomainById(id))
    .filter((d): d is NonNullable<typeof d> => !!d);

  // Group operations by type
  const opsByType = sd.serviceOperations.reduce((acc, op) => {
    acc[op.operationType] = acc[op.operationType] || [];
    acc[op.operationType].push(op);
    return acc;
  }, {} as Record<string, typeof sd.serviceOperations>);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      <div className="max-w-5xl mx-auto print:max-w-full">
        {/* Navigation & Print Actions */}
        <div className="no-print flex items-center justify-between mb-6">
          <Link
            href="/service-landscape/value-chain"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al Mapa de Valor
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-300 rounded bg-white text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
          >
            <Printer size={14} />
            Imprimir / Exportar Ficha
          </button>
        </div>

        {/* Ficha Técnica Container */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-10 shadow-sm print:shadow-none print:border-none print:p-0">
          
          {/* Header Metadata */}
          <div className="border-b border-slate-100 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 uppercase">
                {sd.id}
              </span>
              {sd.maturity && (
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold uppercase">
                  Madurez: {sd.maturity}
                </span>
              )}
              <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-100 text-[9px] font-bold uppercase">
                Estado: {sd.status}
              </span>
              <span className="text-[9px] text-slate-400 ml-auto font-medium print:hidden">
                Versión {sd.version}
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-2">
              {sd.nameEs}
            </h1>
            {sd.nameEn && (
              <p className="text-xs font-medium text-slate-400 italic mt-0.5">
                {sd.nameEn}
              </p>
            )}

            {sd.aliases && sd.aliases.length > 0 && (
              <div className="flex items-center gap-1.5 mt-2.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Alias:</span>
                <div className="flex flex-wrap gap-1">
                  {sd.aliases.map((alias, idx) => (
                    <span key={idx} className="text-[10px] text-slate-600 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5">
                      {alias}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Parents Traceability Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200/60 print:bg-white print:p-2">
            {area && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-raia-blue-inst text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Layers size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Área de Negocio</h4>
                  <Link href={`/business-areas/${area.slug}`} className="text-xs font-bold text-slate-800 hover:text-raia-blue-inst transition-colors block">
                    {area.nameEs}
                  </Link>
                  <span className="text-[9px] font-mono text-slate-400">{area.id}</span>
                </div>
              </div>
            )}
            
            {domain && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-raia-turquoise text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Network size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Dominio de Negocio</h4>
                  <Link href={`/business-domains/${domain.slug}`} className="text-xs font-bold text-slate-800 hover:text-raia-turquoise transition-colors block">
                    {domain.nameEs}
                  </Link>
                  <span className="text-[9px] font-mono text-slate-400">{domain.id}</span>
                </div>
              </div>
            )}
          </div>

          {/* Section: Overview (Definition, Summary, Purpose) */}
          <div className="mt-8 space-y-6">
            <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
              1. Descripción General
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Definición Funcional</h4>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1 font-medium">{sd.definition}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Resumen</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{sd.summary}</p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-lg print:bg-white">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase">Propósito</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">{sd.purpose}</p>
              </div>
            </div>
          </div>

          {/* Section: Focus Object & Capabilities */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                2. Objeto de Negocio Foco
              </h2>
              <div className="mt-3 p-4 rounded-lg border border-slate-200 bg-slate-50 print:bg-white">
                <h3 className="text-xs font-bold text-slate-800">{sd.focusObject.name}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{sd.focusObject.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                3. Capacidades de Negocio ({sd.capabilities.length})
              </h2>
              <ul className="mt-3 space-y-1.5">
                {sd.capabilities.map((cap, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-raia-green-inst mt-1.5 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Service Operations */}
          <div className="mt-8">
            <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
              4. Operaciones de Servicio ({sd.serviceOperations.length})
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase">ID</th>
                    <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase">Nombre</th>
                    <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase">Tipo</th>
                    <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {sd.serviceOperations.map((op) => (
                    <tr key={op.id} className="text-xs">
                      <td className="px-4 py-2.5 font-mono font-semibold text-slate-500">{op.id}</td>
                      <td className="px-4 py-2.5 font-bold text-slate-800">{op.name}</td>
                      <td className="px-4 py-2.5">
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[9px] font-mono uppercase text-slate-600">
                          {op.operationType}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">{op.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Events & Objects */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide flex items-center gap-1.5">
                <Activity size={16} className="text-raia-blue-inst" />
                5. Eventos de Negocio
              </h2>
              <div className="mt-4 space-y-3">
                {sd.businessEvents.map((evt) => (
                  <div key={evt.id} className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">{evt.id}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                        evt.direction === "produces" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
                      }`}>
                        {evt.direction === "produces" ? "Produce" : "Consume"}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 mt-1">{evt.name}</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{evt.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide flex items-center gap-1.5">
                <Network size={16} className="text-raia-turquoise" />
                6. Objetos de Negocio Referenciados
              </h2>
              <div className="mt-4 space-y-2">
                {sd.businessObjects.map((obj) => (
                  <div key={obj.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg text-xs">
                    <div>
                      <h4 className="font-bold text-slate-800">{obj.name}</h4>
                      <span className="text-[9px] font-mono text-slate-400">{obj.id}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[9px] font-semibold border border-slate-200">
                      Rol: {obj.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Actors (Governance) */}
          <div className="mt-8">
            <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
              7. Gobierno y Actores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/50">
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">Actor Responsable (Accountable)</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {sd.accountableActors.map((actor, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold shadow-sm">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/50">
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">Actores Participantes</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {sd.participatingActors.map((actor, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Regulations and Architecture Controls */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide flex items-center gap-1.5">
                <Scale size={16} className="text-raia-gold" />
                8. Marco Regulatorio
              </h2>
              <div className="mt-4 space-y-3.5">
                {sd.regulations.map((reg) => (
                  <div key={reg.id} className="p-3 border border-slate-200 rounded-lg text-xs bg-slate-50/20">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-400">{reg.id}</span>
                      {reg.mandatory && (
                        <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-200 text-[8px] font-bold uppercase">
                          Obligatorio
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-800 mt-1 leading-normal">{reg.name}</h4>
                    <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-500 font-medium">
                      <span>Autoridad: {reg.authority}</span>
                      <span>Estatus: {reg.validationStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide flex items-center gap-1.5">
                <ShieldAlert size={16} className="text-raia-error" />
                9. Controles de Arquitectura
              </h2>
              <div className="mt-4 space-y-3">
                {sd.controls.map((ctrl) => (
                  <div key={ctrl.id} className="p-3 border border-slate-200 rounded-lg text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-400">{ctrl.id}</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[8px] font-bold uppercase border border-slate-200">
                        {ctrl.controlType}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 mt-1">{ctrl.name}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{ctrl.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Evidences & Value Streams */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                10. Evidencias Digitales Requeridas
              </h2>
              <ul className="mt-3.5 space-y-2">
                {sd.evidences.map((ev, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 border border-slate-200/50 p-2.5 rounded-md font-semibold">
                    <Award size={14} className="text-raia-blue-inst mt-0.5 shrink-0" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                11. Flujos de Valor (Value Streams)
              </h2>
              <ul className="mt-3.5 space-y-2">
                {sd.valueStreams.map((vs, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 border border-slate-200/50 p-2.5 rounded-md font-semibold">
                    <Network size={14} className="text-raia-turquoise mt-0.5 shrink-0" />
                    <span>{vs}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: NFRs and KPIs */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                12. Requerimientos No Funcionales (NFRs)
              </h2>
              <div className="mt-4 space-y-2.5">
                {sd.nfrs.map((nfr, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 rounded-lg text-xs bg-slate-50/50">
                    <span className="font-extrabold text-[9px] uppercase tracking-wide bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                      {nfr.category}
                    </span>
                    <p className="text-slate-700 mt-2 font-medium leading-relaxed">{nfr.statement}</p>
                    {nfr.target && (
                      <p className="text-[10px] text-slate-400 mt-1 font-bold">Meta: {nfr.target}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                13. Indicadores Clave de Desempeño (KPIs)
              </h2>
              <div className="mt-4 space-y-3">
                {sd.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 rounded-lg text-xs bg-slate-50/50">
                    <h4 className="font-bold text-slate-800">{kpi.name}</h4>
                    <p className="text-slate-600 mt-1 leading-normal">{kpi.description}</p>
                    {kpi.frequency && (
                      <span className="inline-block mt-2 text-[9px] font-mono bg-slate-100 text-slate-500 rounded px-1.5 py-0.5 border border-slate-200 uppercase font-bold">
                        Frecuencia: {kpi.frequency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: End-to-End Relations */}
          <div className="mt-8 border-t border-slate-100 pt-8 print:hidden">
            <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide flex items-center gap-1.5">
              <Network size={16} className="text-raia-turquoise" />
              14. Relaciones de Extremo a Extremo
            </h2>
            <p className="text-[11px] text-slate-500 mt-2 leading-normal">
              Visualiza el flujo de dependencias directo. Haz click en un nodo para navegar a su correspondiente ficha técnica.
            </p>
            <div className="mt-4">
              <LocalRelationGraph 
                selectedId={sd.id} 
                onSelect={(id) => {
                  const targetSd = getServiceDomainById(id);
                  if (targetSd) {
                    router.push(`/service-domains/${targetSd.slug}`);
                  }
                }}
              />
            </div>
          </div>

          {/* Section: Related Service Domains */}
          <div className="mt-8 border-t border-slate-100 pt-8 print:border-none">
            <h2 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
              15. Dominios de Servicio Relacionados ({relatedDomains.length})
            </h2>
            {relatedDomains.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 print:hidden">
                {relatedDomains.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/service-domains/${rel.slug}`}
                    className="p-3 border border-slate-200 hover:border-raia-green-inst rounded-lg bg-slate-50 hover:bg-white text-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 font-bold">{rel.id}</span>
                      <h4 className="font-bold text-slate-800 mt-0.5 leading-normal">{rel.nameEs}</h4>
                    </div>
                    <span className="text-[9px] text-slate-400 font-semibold uppercase mt-2">
                      {rel.status}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic mt-3">No hay relaciones registradas.</p>
            )}

            {/* Print list */}
            <div className="hidden print:block mt-4">
              <ul className="list-disc list-inside space-y-1 text-xs">
                {relatedDomains.map((rel) => (
                  <li key={rel.id}>
                    <span className="font-bold">{rel.id}:</span> {rel.nameEs}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
