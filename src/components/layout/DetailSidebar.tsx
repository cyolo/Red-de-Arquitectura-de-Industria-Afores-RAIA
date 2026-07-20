"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ArrowRight, ShieldCheck, Network, Layers, BookOpen, UserCheck, Shield, Scale } from "lucide-react";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";
import { getServiceDomainById, getBusinessDomainById, getBusinessAreaById } from "../../domain/repositories/landscapeRepository";
import { getRegulatoryMappingsForServiceDomain, getRegulatorySourceById } from "../../domain/repositories/regulatoryRepository";
import { getIndustryParticipantById } from "../../domain/repositories/participantRepository";
import { getControlRecordForServiceDomain } from "../../domain/repositories/controlRecordRepository";
import LocalRelationGraph from "../diagram/LocalRelationGraph";

export default function DetailSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sidebarRef = useRef<HTMLElement>(null);

  const selectedId = useLandscapeStore((state) => state.selectedId);
  const setSelectedId = useLandscapeStore((state) => state.setSelectedId);
  const isSidebarOpen = useLandscapeStore((state) => state.isSidebarOpen);
  const setSidebarOpen = useLandscapeStore((state) => state.setSidebarOpen);

  const [activeTab, setActiveTab] = useState<"resumen" | "gobierno" | "regulacion" | "relaciones">("resumen");

  // Close sidebar handler
  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("selected");
    router.replace(`/service-landscape/value-chain?${params.toString()}`);
  };

  // Synchronize state with URL query param on mount/update
  const urlSelectedId = searchParams.get("selected");
  useEffect(() => {
    if (urlSelectedId !== selectedId) {
      setSelectedId(urlSelectedId);
    }
  }, [urlSelectedId, selectedId, setSelectedId]);

  // Focus and keyboard management
  useEffect(() => {
    if (isSidebarOpen && selectedId) {
      sidebarRef.current?.focus();
      setActiveTab("resumen");
    }
  }, [isSidebarOpen, selectedId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSidebarOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen, searchParams]);

  // Resolve entity data
  const sdData = useMemo(() => (selectedId?.startsWith("RAIA-SD-") ? getServiceDomainById(selectedId) : undefined), [selectedId]);
  const bdData = useMemo(() => (selectedId?.startsWith("RAIA-BD-") ? getBusinessDomainById(selectedId) : undefined), [selectedId]);
  const baData = useMemo(() => (selectedId?.startsWith("RAIA-BA-") ? getBusinessAreaById(selectedId) : undefined), [selectedId]);

  if (!isSidebarOpen || !selectedId) return null;

  return (
    <aside
      ref={sidebarRef}
      role="complementary"
      aria-label={`Detalles de ${sdData ? sdData.nameEs : bdData ? bdData.nameEs : baData ? baData.nameEs : 'elemento seleccionado'}`}
      tabIndex={-1}
      className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full transition-transform duration-300 transform translate-x-0 focus:outline-none" 
      data-testid="service-domain-detail-sidebar"
    >
      
      {/* Sidebar Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
            {selectedId}
          </span>
          <span className="text-xs font-bold text-slate-300">
            {sdData ? "Service Domain" : bdData ? "Business Domain" : "Business Area"}
          </span>
        </div>
        <button
          onClick={handleClose}
          data-testid="service-domain-detail-close"
          className="text-slate-400 hover:text-white rounded-md p-1 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer"
          title="Cerrar panel (Esc)"
          aria-label="Cerrar panel"
        >
          <X size={16} />
        </button>
      </div>

      {/* Sidebar Content wrapper */}
      <div className="flex-1 flex flex-col min-h-0">
        
        {/* Render for Service Domain */}
        {sdData && (
          <>
            {/* Service Domain Identity */}
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">
                {sdData.nameEs}
              </h2>
              {sdData.nameEn && (
                <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">
                  {sdData.nameEn}
                </p>
              )}
            </div>

            {/* Sidebar Tab Selector */}
            <div className="px-4 py-1.5 bg-slate-100/60 border-b border-slate-200 flex shrink-0">
              <div className="flex gap-1 w-full" role="tablist" aria-label="Secciones del Service Domain">
                <button
                  role="tab"
                  aria-selected={activeTab === "resumen"}
                  onClick={() => setActiveTab("resumen")}
                  className={`flex-1 py-1 text-[10px] font-bold rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTab === "resumen"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Resumen
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "gobierno"}
                  onClick={() => setActiveTab("gobierno")}
                  className={`flex-1 py-1 text-[10px] font-bold rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTab === "gobierno"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Gobierno
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "regulacion"}
                  onClick={() => setActiveTab("regulacion")}
                  className={`flex-1 py-1 text-[10px] font-bold rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTab === "regulacion"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Regulación
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "relaciones"}
                  onClick={() => setActiveTab("relaciones")}
                  className={`flex-1 py-1 text-[10px] font-bold rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTab === "relaciones"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Relaciones
                </button>
              </div>
            </div>

            {/* Scrollable Tab Panels */}
            <div className="flex-1 overflow-y-auto p-5 min-h-0">
              
              {/* TAB 1: Resumen */}
              <div 
                role="tabpanel"
                className={`space-y-5 ${activeTab === "resumen" ? "block" : "hidden"}`}
              >
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Definición</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {sdData.definition}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Objeto Foco</h4>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md mt-1">
                    <span className="text-xs font-bold text-slate-800">{sdData.focusObject.name}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{sdData.focusObject.description}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href={`/service-domains/${sdData.slug}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver Ficha Técnica Completa
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/service-landscape/overview-diagrams?selected=${sdData.id}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver en Overview Diagrams
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/information-architecture?serviceDomain=${sdData.id}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver información administrada
                    <ArrowRight size={14} />
                  </Link>
                  {getControlRecordForServiceDomain(sdData.id) && (
                    <Link
                      href={`/control-record-model?controlRecord=${getControlRecordForServiceDomain(sdData.id)?.id}`}
                      className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      Ver ciclo de vida de control
                      <ArrowRight size={14} />
                    </Link>
                  )}
                  <Link
                    href={`/business-object-model?serviceDomain=${sdData.id}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver en Business Object Model
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/reference-model?viewpoint=RAIA-RMV-002&selected=service-domain:${sdData.id}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver en Reference Model
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/capability-map?serviceDomain=${sdData.id}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Ver capacidades realizadas
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* TAB 2: Gobierno */}
              <div 
                role="tabpanel"
                className={`space-y-5 ${activeTab === "gobierno" ? "block" : "hidden"}`}
              >
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gobierno de Datos y Operación</h4>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-start gap-2">
                      <UserCheck size={14} className="text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-600 block">Responsable (Accountable):</span>
                        <span className="text-[10px] text-slate-600">
                          {sdData.accountableActors.map((id) => getIndustryParticipantById(id)?.name || id).join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield size={14} className="text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-600 block">Participantes:</span>
                        <span className="text-[10px] text-slate-600">
                          {sdData.participatingActors.map((id) => getIndustryParticipantById(id)?.name || id).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 3: Regulación */}
              <div 
                role="tabpanel"
                className={`space-y-5 ${activeTab === "regulacion" ? "block" : "hidden"}`}
              >
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Scale size={14} className="text-raia-turquoise" />
                    Trazabilidad Regulatoria
                  </h4>
                  
                  {/* Regulatory general metadata */}
                  <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-md">
                    <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-500 uppercase">
                      <span>Cobertura: <span className={`px-1 rounded ${
                        sdData.regulatoryCoverage === "reviewed" ? "bg-green-100 text-green-800" :
                        sdData.regulatoryCoverage === "mapped" ? "bg-blue-100 text-blue-800" :
                        sdData.regulatoryCoverage === "partial" ? "bg-amber-100 text-amber-800" :
                        "bg-red-100 text-red-800"
                      }`}>{sdData.regulatoryCoverage || "Sin Mapear"}</span></span>
                      <span>Criticidad: <span className="text-slate-800">{sdData.regulatoryCriticality || "Media"}</span></span>
                    </div>
                  </div>
                  
                  {/* Detailed mappings */}
                  {(() => {
                    const sdMappings = getRegulatoryMappingsForServiceDomain(sdData.id);
                    if (sdMappings.length === 0) {
                      return (
                        <p className="text-xs text-slate-400 mt-4 text-center font-medium italic">
                          No existen mapeos regulatorios vigentes consolidados para este dominio.
                        </p>
                      );
                    }

                    return (
                      <div className="mt-4 space-y-4">
                        {sdMappings.map((map) => {
                          const src = getRegulatorySourceById(map.regulatorySourceId);
                          return (
                            <div key={map.id} className="border border-slate-200 rounded-lg p-3 bg-white space-y-2 shadow-xs">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[9px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-1.5 rounded truncate max-w-[180px]">
                                  {src?.shortName || map.regulatorySourceId}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-250 px-1 rounded shrink-0">
                                  {map.article || "Disposición"}
                                </span>
                              </div>
                              
                              <p className="text-[11px] text-slate-850 font-medium leading-relaxed">
                                {map.regulatoryRequirement}
                              </p>
                              
                              <div className="text-[10px] text-slate-500 bg-slate-50 p-2 rounded border border-slate-100 leading-normal">
                                <span className="font-bold text-[9px] text-slate-400 block uppercase tracking-wider">Interpretación Arquitectónica</span>
                                {map.architecturalInterpretation}
                              </div>

                              {/* Controls & Evidences lists */}
                              {map.controlIds.length > 0 && (
                                <div className="text-[9px] text-slate-500 font-mono">
                                  <span className="font-bold block uppercase text-slate-400">Controles:</span>
                                  <span className="text-slate-600 block">{map.controlIds.join(", ")}</span>
                                </div>
                              )}
                              {map.evidenceIds.length > 0 && (
                                <div className="text-[9px] text-slate-500 font-mono">
                                  <span className="font-bold block uppercase text-slate-400">Evidencias:</span>
                                  <span className="text-slate-600 block">{map.evidenceIds.join(", ")}</span>
                                </div>
                              )}
                              
                              {src?.officialUrl && (
                                <a
                                  href={src.officialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[9px] font-bold text-sky-600 hover:text-sky-800 block underline pt-1 cursor-pointer"
                                >
                                  Ver publicación en DOF/Diario Oficial
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* TAB 4: Relaciones */}
              <div 
                role="tabpanel"
                className={`space-y-4 ${activeTab === "relaciones" ? "block" : "hidden"}`}
              >
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Network size={14} className="text-raia-turquoise" />
                    Relaciones de Extremo a Extremo
                  </h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-normal">
                    Visualiza el flujo de dependencias directo. Haz click en un nodo para seleccionarlo.
                  </p>
                  <LocalRelationGraph 
                    selectedId={sdData.id} 
                    onSelect={(id) => {
                      const params = new URLSearchParams(searchParams.toString());
                      params.set("selected", id);
                      router.replace(`/service-landscape/value-chain?${params.toString()}`);
                    }}
                  />
                </div>
              </div>

            </div>
          </>
        )}

        {/* Render for Business Domain */}
        {bdData && (
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">
                {bdData.nameEs}
              </h2>
              <span className="text-[10px] text-slate-400 uppercase mt-0.5 block">
                Dominio de Negocio
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descripción</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {bdData.description}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Propósito</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {bdData.purpose}
              </p>
            </div>

            <div>
              <Link
                href={`/business-domains/${bdData.slug}`}
                className="w-full flex items-center justify-center gap-1.5 bg-raia-blue-inst hover:bg-blue-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Ver Detalles del Dominio
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {/* Render for Business Area */}
        {baData && (
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">
                {baData.nameEs}
              </h2>
              <span className="text-[10px] text-slate-400 uppercase mt-0.5 block">
                Área de Negocio
              </span>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descripción</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {baData.description}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Propósito</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {baData.purpose}
              </p>
            </div>

            <div>
              <Link
                href={`/business-areas/${baData.slug}`}
                className="w-full flex items-center justify-center gap-1.5 bg-raia-blue-inst hover:bg-blue-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Ver Detalles de la Área
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
