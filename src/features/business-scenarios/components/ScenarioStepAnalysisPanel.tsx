import React from "react";
import { X, ShieldCheck, FileText, AlertTriangle, ArrowLeft, ArrowRight, Activity, Map } from "lucide-react";
import { ScenarioStepNarrative } from "../../../domain/types/scenarioNarrativeTypes";
import { SequenceMessage, SequenceParticipant } from "../sequence-diagram/components/RaiaSequenceDiagram";
import { getControlRecordTransitions } from "../../../domain/repositories/controlRecordRepository";
import Link from "next/link";

interface ScenarioStepAnalysisPanelProps {
  message?: SequenceMessage;
  narrative?: ScenarioStepNarrative;
  source?: SequenceParticipant;
  target?: SequenceParticipant;
  
  currentIndex: number;
  totalSteps: number;

  onPrevious?: () => void;
  onNext?: () => void;
  onClose?: () => void;
}

function getBadgeProps(messageType: string) {
  const typeMap: Record<string, { label: string; colorClass: string }> = {
    command: { label: "Comando", colorClass: "bg-blue-100 text-blue-800 border-blue-200" },
    query: { label: "Consulta", colorClass: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    response: { label: "Respuesta", colorClass: "bg-slate-100 text-slate-700 border-slate-200" },
    event: { label: "Evento", colorClass: "bg-amber-100 text-amber-800 border-amber-200" },
    notification: { label: "Notificación", colorClass: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    transfer: { label: "Transferencia", colorClass: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200" },
    review: { label: "Revisión manual", colorClass: "bg-orange-100 text-orange-800 border-orange-200" },
    approval: { label: "Aprobación", colorClass: "bg-teal-100 text-teal-800 border-teal-200" },
    rejection: { label: "Rechazo", colorClass: "bg-red-100 text-red-800 border-red-200" }
  };
  return typeMap[messageType] || { label: messageType.toUpperCase(), colorClass: "bg-slate-100 text-slate-700 border-slate-200" };
}

export default function ScenarioStepAnalysisPanel({
  message,
  narrative,
  source,
  target,
  currentIndex,
  totalSteps,
  onPrevious,
  onNext,
  onClose
}: ScenarioStepAnalysisPanelProps) {
  const matchingTransition = React.useMemo(() => {
    if (!message) return null;
    const allTransitions = getControlRecordTransitions();
    const lbl = (message.label || "").toLowerCase();
    return allTransitions.find((t) =>
      t.name.toLowerCase() === lbl ||
      t.id.toLowerCase() === lbl ||
      (t.serviceOperationId && message.label && t.serviceOperationId.toLowerCase() === message.label.toLowerCase())
    );
  }, [message]);
  
  if (!message) {
    return (
      <aside
        className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center"
        data-testid="scenario-step-analysis-panel"
      >
        <Map className="mx-auto h-12 w-12 text-slate-300 mb-4" />
        <h3 className="text-slate-500 font-semibold text-lg">Seleccione un paso</h3>
        <p className="text-slate-400 mt-2 text-sm max-w-[280px] mx-auto">
          Haga clic en una interacción del diagrama o de la lista para consultar su análisis arquitectónico.
        </p>
      </aside>
    );
  }

  const badgeProps = getBadgeProps(message.messageType);
  const displayTitle = narrative?.title || message.label || `Paso ${message.sequence}`;

  return (
    <aside
      id="scenario-step-analysis"
      aria-live="polite"
      aria-labelledby="step-analysis-title"
      data-testid="scenario-step-analysis-panel"
      className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-50/50 p-5 shrink-0">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-raia-blue-inst">
            Paso {currentIndex + 1} de {totalSteps}
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              data-testid="scenario-step-analysis-close"
              aria-label="Cerrar análisis del paso"
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-raia-turquoise"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <h3 id="step-analysis-title" className="mt-3 text-xl font-black text-slate-900 leading-tight">
          {displayTitle}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-slate-600 truncate">
            {source?.label || message.sourceParticipantInstanceId}
            <span className="mx-2 text-slate-400">→</span>
            {target?.label || message.targetParticipantInstanceId}
          </p>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${badgeProps.colorClass}`}>
            {badgeProps.label}
          </span>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white min-h-[300px]">

        {message.origin === "snippet" && (
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800 block">Scenario Snippet</span>
            <p className="text-xs text-teal-900 mt-1 leading-relaxed">
              Este paso proviene del snippet reutilizable <b>{message.snippetId}</b> (v{message.snippetVersion}).
            </p>
            <div className="mt-2.5">
              <Link
                href={`/business-scenarios/snippets?snippet=${message.snippetId}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 underline"
              >
                <span>Ver definición del snippet</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        )}
        
        {!narrative && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
              El paso está modelado en el diagrama de secuencia, pero todavía no cuenta con una narrativa arquitectónica profunda asociada.
            </p>
          </div>
        )}

        {/* 1. Significado de Negocio (Prioridad UX) */}
        {(narrative?.businessMeaning || message.description) && (
          <section>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <Activity size={14} className="text-raia-turquoise" />
              Propósito de Negocio
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed">
              {narrative?.businessMeaning || message.description}
            </p>
          </section>
        )}

        {/* 2. Contexto Estructural */}
        {narrative?.structuralContext && (
          <section className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Contexto Estructural
            </h4>
            <p className="text-[13px] text-slate-700 leading-relaxed">
              {narrative.structuralContext}
            </p>
          </section>
        )}

        {/* 3. Comportamiento */}
        {narrative?.behavior && (
          <section className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Comportamiento Sistémico
            </h4>
            <p className="text-[13px] text-slate-700 leading-relaxed">
              {narrative.behavior}
            </p>
          </section>
        )}

        {/* 4. Resultado (del mensaje directo) */}
        {message.expectedOutcome && (
          <section className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Entregable / Resultado
            </h4>
            <p className="text-[13px] font-medium text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
              {message.expectedOutcome}
            </p>
          </section>
        )}

        {/* 5. Controles, Evidencias, Excepciones */}
        {(narrative?.controlExplanation || narrative?.evidenceExplanation || narrative?.exceptionExplanation) && (
          <section className="pt-4 border-t border-slate-100 grid grid-cols-1 gap-3">
            {narrative.controlExplanation && (
              <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-3">
                <h5 className="font-bold text-[11px] uppercase tracking-wider text-amber-700 mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Control
                </h5>
                <p className="text-xs text-amber-900/80 leading-relaxed">{narrative.controlExplanation}</p>
              </div>
            )}
            
            {narrative.evidenceExplanation && (
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-3">
                <h5 className="font-bold text-[11px] uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                  <FileText size={14} /> Evidencia
                </h5>
                <p className="text-xs text-emerald-900/80 leading-relaxed">{narrative.evidenceExplanation}</p>
              </div>
            )}
            
            {narrative.exceptionExplanation && (
              <div className="bg-red-50/50 border border-red-200 rounded-lg p-3">
                <h5 className="font-bold text-[11px] uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1.5">
                  <AlertTriangle size={14} /> Excepción
                </h5>
                <p className="text-xs text-red-900/80 leading-relaxed">{narrative.exceptionExplanation}</p>
              </div>
            )}
          </section>
        )}

        {matchingTransition && (
          <section className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Ciclo de Vida de Control
            </h4>
            <Link
              href={`/control-record-model?controlRecord=${matchingTransition.controlRecordId}&transition=${matchingTransition.id}&tab=state-machine`}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[10px] py-1.5 px-3.5 rounded transition-colors shadow"
            >
              <span>Ver Transición de Control</span>
              <ArrowRight size={12} />
            </Link>
          </section>
        )}
      </div>

      {/* Footer Navigation */}
      <footer className="border-t border-slate-200 bg-slate-50 p-4 shrink-0 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!onPrevious}
          data-testid="scenario-step-previous"
          className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-600 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-raia-turquoise"
        >
          <ArrowLeft size={16} />
          <span>Anterior</span>
        </button>
        
        <span className="text-[11px] font-black text-slate-400 tracking-widest uppercase">
          {currentIndex + 1} / {totalSteps}
        </span>
        
        <button
          type="button"
          onClick={onNext}
          disabled={!onNext}
          data-testid="scenario-step-next"
          className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-600 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-raia-turquoise"
        >
          <span>Siguiente</span>
          <ArrowRight size={16} />
        </button>
      </footer>
    </aside>
  );
}
