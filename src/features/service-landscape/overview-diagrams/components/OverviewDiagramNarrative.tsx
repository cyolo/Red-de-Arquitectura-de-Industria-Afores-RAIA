"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { BookOpen, HelpCircle, Lightbulb, Timeline } from "lucide-react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import { getOverviewDiagramById } from "../../../../domain/repositories/overviewDiagramRepository";

export function OverviewDiagramNarrative() {
  const { selectedDiagramId } = useOverviewDiagramStore();

  const activeDiagram = useMemo(
    () => getOverviewDiagramById(selectedDiagramId),
    [selectedDiagramId]
  );

  if (!activeDiagram) return null;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg p-5 mt-4 space-y-5 select-none">
      {/* Purpose & Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Propósito del Diagrama
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {activeDiagram.purpose}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Alcance y Resumen
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {activeDiagram.description}
          </p>
        </div>
      </div>

      {/* Phases Timeline if present */}
      {activeDiagram.phases && activeDiagram.phases.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Fases Operativas
          </h3>
          <div className="relative border-l-2 border-slate-100 pl-4 space-y-3 ml-2">
            {activeDiagram.phases
              .sort((a, b) => a.order - b.order)
              .map((phase) => (
                <div key={phase.id} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white" />
                  <h4 className="text-[11.5px] font-bold text-slate-700">
                    {phase.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    {phase.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Assumptions & Unresolved Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            Supuestos de Arquitectura
          </h3>
          {activeDiagram.assumptions.length === 0 ? (
            <p className="text-[10px] text-slate-400 italic">No hay supuestos declarados.</p>
          ) : (
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
              {activeDiagram.assumptions.map((ass, idx) => (
                <li key={idx} className="leading-relaxed">
                  {ass}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
            Preguntas Pendientes
          </h3>
          {activeDiagram.unresolvedQuestions.length === 0 ? (
            <p className="text-[10px] text-slate-400 italic">No hay preguntas pendientes.</p>
          ) : (
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-650">
              {activeDiagram.unresolvedQuestions.map((q, idx) => (
                <li key={idx} className="leading-relaxed">
                  {q}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Connected Business Scenarios */}
      {activeDiagram.id && (
        <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-600" />
          <span className="text-[10.5px] font-bold text-slate-500">
            Este diagrama se detalla mediante:
          </span>
          <div className="flex items-center gap-1.5">
            {/* Get scenarioIds based on selected diagram */}
            {activeDiagram.id === "RAIA-OVD-001" && (
              <>
                <Link
                  href="/business-scenarios?selected=RAIA-BS-0001"
                  className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  RAIA-BS-0001
                </Link>
                <Link
                  href="/business-scenarios?selected=RAIA-BS-0002"
                  className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  RAIA-BS-0002
                </Link>
              </>
            )}
            {activeDiagram.id === "RAIA-OVD-002" && (
              <>
                <Link
                  href="/business-scenarios?selected=RAIA-BS-0001"
                  className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  RAIA-BS-0001
                </Link>
                <Link
                  href="/business-scenarios?selected=RAIA-BS-0003"
                  className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  RAIA-BS-0003
                </Link>
              </>
            )}
            {activeDiagram.id === "RAIA-OVD-003" && (
              <Link
                href="/business-scenarios?selected=RAIA-BS-0001"
                className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                RAIA-BS-0001
              </Link>
            )}
            {activeDiagram.id === "RAIA-OVD-004" && (
              <Link
                href="/business-scenarios?selected=RAIA-BS-0002"
                className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                RAIA-BS-0002
              </Link>
            )}
            {activeDiagram.id === "RAIA-OVD-006" && (
              <Link
                href="/business-scenarios?selected=RAIA-BS-0003"
                className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                RAIA-BS-0003
              </Link>
            )}
            {activeDiagram.id === "RAIA-OVD-008" && (
              <Link
                href="/business-scenarios?selected=RAIA-BS-0001"
                className="text-[9.5px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                RAIA-BS-0001
              </Link>
            )}
            {["RAIA-OVD-005", "RAIA-OVD-007", "RAIA-OVD-009"].includes(activeDiagram.id) && (
              <span className="text-[10px] text-slate-400 italic">Ningún escenario vinculado.</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default OverviewDiagramNarrative;
