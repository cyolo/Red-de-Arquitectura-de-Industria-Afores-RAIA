"use client";

import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ArrowRight, ShieldCheck, Network, Layers, BookOpen, UserCheck, Shield } from "lucide-react";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";
import { getServiceDomainById, getBusinessDomainById, getBusinessAreaById } from "../../domain/repositories/landscapeRepository";
import LocalRelationGraph from "../diagram/LocalRelationGraph";

export default function DetailSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedId = useLandscapeStore((state) => state.selectedId);
  const setSelectedId = useLandscapeStore((state) => state.setSelectedId);
  const isSidebarOpen = useLandscapeStore((state) => state.isSidebarOpen);
  const setSidebarOpen = useLandscapeStore((state) => state.setSidebarOpen);

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

  // Resolve entity data
  const sdData = useMemo(() => (selectedId?.startsWith("RAIA-SD-") ? getServiceDomainById(selectedId) : undefined), [selectedId]);
  const bdData = useMemo(() => (selectedId?.startsWith("RAIA-BD-") ? getBusinessDomainById(selectedId) : undefined), [selectedId]);
  const baData = useMemo(() => (selectedId?.startsWith("RAIA-BA-") ? getBusinessAreaById(selectedId) : undefined), [selectedId]);

  if (!isSidebarOpen || !selectedId) return null;

  return (
    <div className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full transition-transform duration-300 transform translate-x-0" data-testid="service-domain-detail-sidebar">
      
      {/* Sidebar Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
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
          className="text-slate-400 hover:text-white rounded-md p-1 hover:bg-slate-800 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        
        {/* Render for Service Domain */}
        {sdData && (
          <>
            <div>
              <h2 className="text-sm font-extrabold text-slate-800 leading-snug">
                {sdData.nameEs}
              </h2>
              {sdData.nameEn && (
                <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">
                  {sdData.nameEn}
                </p>
              )}
            </div>

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

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gobierno</h4>
              <div className="space-y-2 mt-1">
                <div className="flex items-start gap-2">
                  <UserCheck size={14} className="text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-600 block">Responsable (Accountable):</span>
                    <span className="text-[10px] text-slate-600">{sdData.accountableActors.join(", ")}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield size={14} className="text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-600 block">Participantes:</span>
                    <span className="text-[10px] text-slate-600">{sdData.participatingActors.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <Link
                href={`/service-domains/${sdData.slug}`}
                className="w-full flex items-center justify-center gap-1.5 bg-raia-blue-inst hover:bg-blue-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow"
              >
                Ver Ficha Técnica Completa
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Dynamic Relation Diagram */}
            <div className="border-t border-slate-100 pt-5">
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
          </>
        )}

        {/* Render for Business Domain */}
        {bdData && (
          <>
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
                className="w-full flex items-center justify-center gap-1.5 bg-raia-blue-inst hover:bg-blue-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow"
              >
                Ver Detalles del Dominio
                <ArrowRight size={14} />
              </Link>
            </div>
          </>
        )}

        {/* Render for Business Area */}
        {baData && (
          <>
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
                className="w-full flex items-center justify-center gap-1.5 bg-raia-blue-inst hover:bg-blue-800 text-white font-bold text-xs py-2 px-4 rounded transition-colors shadow"
              >
                Ver Detalles de la Área
                <ArrowRight size={14} />
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
