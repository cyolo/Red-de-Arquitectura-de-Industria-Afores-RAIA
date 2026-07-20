"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Layers, Cpu, Network } from "lucide-react";
import { getOverviewDiagrams, getOverviewDiagramsManifest } from "../../../../domain/repositories/overviewDiagramRepository";

export function OverviewDiagramHeader() {
  const diagrams = useMemo(() => getOverviewDiagrams(), []);
  const manifest = useMemo(() => getOverviewDiagramsManifest(), []);

  // Compute dynamic stats
  const stats = useMemo(() => {
    const serviceDomainIds = new Set<string>();
    const businessAreaIds = new Set<string>();
    const scenarioIds = new Set<string>();

    diagrams.forEach((d) => {
      d.nodes.forEach((n) => {
        if (n.nodeType === "service-domain" && n.referenceId) {
          serviceDomainIds.add(n.referenceId);
        }
        if (n.nodeType === "business-area" && n.referenceId) {
          businessAreaIds.add(n.referenceId);
        }
      });
    });

    manifest.forEach((m) => {
      m.scenarioIds.forEach((id) => scenarioIds.add(id));
    });

    return {
      diagramsCount: diagrams.length,
      sdCount: serviceDomainIds.size,
      baCount: businessAreaIds.size || 6, // default or calculated
      scenarioCount: scenarioIds.size
    };
  }, [diagrams, manifest]);

  return (
    <div className="w-full bg-slate-900 text-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <Link
          href="/service-landscape/value-chain"
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
          title="Volver a Value Chain"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
              RAIA-MOD-007
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-950/60 text-emerald-400 px-1.5 py-0.5 rounded">
              Estatus: Proposed
            </span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">Overview Diagrams</h1>
          <p className="text-[11px] text-slate-400">
            Vistas temáticas y mapas arquitectónicos de alto nivel del ecosistema del SAR.
          </p>
        </div>
      </div>

      {/* Dynamic Statistics */}
      <div className="flex flex-wrap items-center gap-3 md:gap-5">
        <div className="bg-slate-800/50 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <Network className="w-4 h-4 text-sky-400" />
          <div>
            <div className="text-xs font-bold leading-tight">{stats.diagramsCount}</div>
            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Diagramas</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <div>
            <div className="text-xs font-bold leading-tight">{stats.sdCount}</div>
            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">SD Mapeados</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <div>
            <div className="text-xs font-bold leading-tight">{stats.baCount}</div>
            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Áreas Cubiertas</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <div>
            <div className="text-xs font-bold leading-tight">{stats.scenarioCount}</div>
            <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Escenarios</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OverviewDiagramHeader;
