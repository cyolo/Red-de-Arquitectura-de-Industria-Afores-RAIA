import React, { useState } from "react";
import { getCapabilityHierarchy } from "../../../domain/repositories/capabilityRepository";
import { ChevronDown, ChevronRight, Folder, File, Award } from "lucide-react";

export default function CapabilityHierarchyTree() {
  const hierarchy = getCapabilityHierarchy();
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "RAIA-CAPD-001": true,
    "RAIA-CAPD-002": true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-3xl mx-auto" data-testid="capability-hierarchy-tree">
      <header className="mb-6 pb-4 border-b border-slate-100">
        <h3 className="text-sm font-black text-slate-800">Estructura Jerárquica del SAR (L0 a L3)</h3>
        <p className="text-[11.5px] text-slate-400 mt-1 leading-relaxed">
          Navega por la taxonomía canónica de capacidades. L1 define el Dominio, L2 la Capacidad y L3 la Subcapacidad.
        </p>
      </header>

      {/* Root Node L0 */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
          <Award size={16} className="text-blue-650" />
          <span>L0 — Administración del Ahorro para el Retiro (Ecosistema SAR)</span>
        </div>

        {/* L1 Domains */}
        <div className="pl-6 space-y-3 border-l-2 border-slate-100">
          {hierarchy.map((domain) => {
            const isExpanded = expandedIds[domain.id];
            return (
              <div key={domain.id} className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleExpand(domain.id)}
                  className="flex items-center gap-2 text-slate-700 hover:text-slate-950 font-bold text-xs cursor-pointer focus:outline-none"
                >
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  <Folder size={14} className="text-slate-400" />
                  <span>{domain.id} — {domain.nameEs} (L1)</span>
                </button>

                {/* L2 Capabilities */}
                {isExpanded && (
                  <div className="pl-6 space-y-2 border-l border-slate-200/60">
                    {domain.capabilities.map((cap) => (
                      <div key={cap.id} className="space-y-1">
                        <div className="flex items-start gap-2 text-slate-650 text-xs">
                          <File size={12} className="text-slate-400 mt-0.5 shrink-0" />
                          <div className="min-w-0">
                            <span className="font-semibold text-slate-900 block md:inline mr-2">
                              {cap.id}: {cap.nameEs} (L2)
                            </span>
                            <span className="text-[10px] text-slate-400 italic">
                              Outcome: {cap.outcomeStatement}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
