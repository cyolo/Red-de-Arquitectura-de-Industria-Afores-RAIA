"use client";

import React from "react";
import { ScenarioArchitectureNarrative as NarrativeType } from "../../../../domain/types/scenarioNarrativeTypes";
import { CheckCircle, AlertTriangle, ShieldCheck, FileText, Activity, Map, Navigation } from "lucide-react";

interface Props {
  narrative: NarrativeType;
  activeSequenceId?: number;
}

export function ScenarioExecutiveSummary({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
        <Map className="w-5 h-5 text-raia-turquoise" />
        Resumen ejecutivo
      </h3>
      <p className="text-slate-600 text-lg leading-relaxed bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm">
        {narrative.executiveSummary}
      </p>
    </div>
  );
}

export function ScenarioStructuralNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-black text-slate-900 mb-3">Contexto estructural</h3>
      <p className="text-slate-700 leading-relaxed mb-6">{narrative.structuralNarrative}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {narrative.participantNarratives.map((p, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2 mb-3">
              {p.participantName}
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-slate-500 font-semibold block text-xs">Rol Estructural:</span>
                <span className="text-slate-700">{p.structuralRole}</span>
              </div>
              <div>
                <span className="text-slate-500 font-semibold block text-xs">Responsabilidad:</span>
                <span className="text-slate-700">{p.responsibility}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScenarioBehavioralNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
        <Activity className="w-5 h-5 text-raia-turquoise" />
        Comportamiento del escenario
      </h3>
      <p className="text-slate-700 leading-relaxed mb-6">{narrative.behavioralNarrative}</p>
    </div>
  );
}

export function StructureBehaviorBridge({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8 bg-slate-900 text-white p-8 rounded-xl shadow-md border border-slate-800">
      <h3 className="text-lg font-black text-white mb-3">Cómo colaboran las estructuras</h3>
      <p className="text-slate-300 leading-relaxed text-sm">{narrative.structureBehaviorBridge}</p>
    </div>
  );
}

export function ScenarioPhaseNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-black text-slate-900 mb-4">Fases del flujo de extremo a extremo</h3>
      <div className="space-y-4">
        {narrative.phaseNarratives.map((phase, idx) => (
          <div key={idx} className="flex gap-4 items-stretch border border-slate-200 rounded-lg p-5 bg-slate-50">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-raia-turquoise text-slate-900 rounded-full font-black text-lg">
              {phase.order}
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-lg">{phase.name}</h4>
              <p className="text-slate-600 text-sm mt-1">{phase.structuralContext}</p>
              <p className="text-slate-600 text-sm mt-1">{phase.behavioralDescription}</p>
              <div className="mt-3 inline-flex bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-500">
                Resultado: <span className="text-slate-800 ml-1">{phase.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScenarioStepNarrative({ step }: { step: NarrativeType['stepNarratives'][0] }) {
  return (
    <div className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
          {step.sequence}
        </div>
        <h4 className="text-lg font-black text-slate-900">{step.title}</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">Contexto Estructural</h5>
          <p className="text-sm text-slate-700">{step.structuralContext}</p>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">Comportamiento</h5>
          <p className="text-sm text-slate-700">{step.behavior}</p>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">Significado de Negocio</h5>
          <p className="text-sm text-slate-700">{step.businessMeaning}</p>
        </div>
      </div>

      {(step.controlExplanation || step.evidenceExplanation || step.exceptionExplanation) && (
        <div className="mt-6 pt-5 border-t border-blue-200/50 grid grid-cols-1 md:grid-cols-3 gap-4">
          {step.controlExplanation && (
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-yellow-600 mb-1 flex items-center gap-1"><ShieldCheck size={14}/> Control</h5>
              <p className="text-xs text-slate-600">{step.controlExplanation}</p>
            </div>
          )}
          {step.evidenceExplanation && (
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-green-600 mb-1 flex items-center gap-1"><FileText size={14}/> Evidencia</h5>
              <p className="text-xs text-slate-600">{step.evidenceExplanation}</p>
            </div>
          )}
          {step.exceptionExplanation && (
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-red-600 mb-1 flex items-center gap-1"><AlertTriangle size={14}/> Excepción</h5>
              <p className="text-xs text-slate-600">{step.exceptionExplanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ScenarioDecisionNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-raia-turquoise" />
        Decisiones y excepciones
      </h3>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
        <p className="text-slate-700 text-sm font-medium mb-3">Las siguientes condiciones de negocio modifican o bifurcan el flujo principal:</p>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          {narrative.decisionNarrative.split(';').map((d, i) => <li key={i}>{d.trim()}</li>)}
        </ul>
      </div>
      <p className="text-sm text-slate-600 border-l-4 border-red-400 pl-4 py-1 italic">
        {narrative.exceptionNarrative}
      </p>
    </div>
  );
}

export function ScenarioControlNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
        <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wider mb-2 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Controles
        </h3>
        <p className="text-sm text-yellow-900 leading-relaxed">{narrative.controlNarrative}</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-5">
        <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider mb-2 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Evidencias
        </h3>
        <p className="text-sm text-green-900 leading-relaxed">{narrative.evidenceNarrative}</p>
      </div>
    </div>
  );
}

export function ScenarioOutcomeNarrative({ narrative }: { narrative: NarrativeType }) {
  return (
    <div className="mb-8 bg-slate-100 border border-slate-300 rounded-lg p-6">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-raia-turquoise" />
        Resultado Arquitectónico
      </h3>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">{narrative.outcomeNarrative}</p>
      
      <div className="pt-4 border-t border-slate-200 mt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Supuestos Trazables</h4>
        <ul className="flex gap-2 flex-wrap">
          {narrative.assumptions.map((a, i) => (
            <li key={i} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[11px] font-bold text-slate-600">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ScenarioArchitectureNarrativeComponent({ narrative, activeSequenceId }: Props) {
  const activeStep = activeSequenceId 
    ? narrative.stepNarratives.find(s => s.sequence === activeSequenceId)
    : null;

  return (
    <div className="mt-16 pt-16 border-t border-slate-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Narrativa arquitectónica del escenario</h2>
        <p className="text-slate-500 mt-2 font-medium">Conectando la vista estructural con el comportamiento transaccional</p>
      </div>

      <ScenarioExecutiveSummary narrative={narrative} />
      
      {activeStep && (
        <div id="active-step-narrative">
          <h3 className="text-xl font-black text-slate-900 mb-4">Análisis del paso seleccionado</h3>
          <ScenarioStepNarrative step={activeStep} />
        </div>
      )}

      <StructureBehaviorBridge narrative={narrative} />
      <ScenarioStructuralNarrative narrative={narrative} />
      <ScenarioBehavioralNarrative narrative={narrative} />
      <ScenarioPhaseNarrative narrative={narrative} />
      <ScenarioDecisionNarrative narrative={narrative} />
      <ScenarioControlNarrative narrative={narrative} />
      <ScenarioOutcomeNarrative narrative={narrative} />
    </div>
  );
}
