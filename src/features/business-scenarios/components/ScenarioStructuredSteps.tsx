"use client";

import React, { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { DetailedSequence } from "../sequence-diagram/components/RaiaSequenceDiagram";

interface ScenarioStructuredStepsProps {
  sequence?: DetailedSequence;
  activeStep: number;
  onStepChange: (sequence: number) => void;
}

export default function ScenarioStructuredSteps({
  sequence,
  activeStep,
  onStepChange
}: ScenarioStructuredStepsProps) {
  const messages = useMemo(
    () =>
      [...(sequence?.messages ?? [])].sort(
        (a, b) => a.sequence - b.sequence
      ),
    [sequence?.messages]
  );

  const participantsById = useMemo(
    () =>
      new Map(
        (sequence?.participants ?? []).map(
          participant => [
            participant.instanceId,
            participant
          ]
        )
      ),
    [sequence?.participants]
  );

  if (messages.length === 0) {
    return (
      <section
        className="mt-12 pt-10 border-t border-slate-200"
        aria-labelledby="structured-steps-title"
        data-testid="scenario-structured-steps"
      >
        <h2
          id="structured-steps-title"
          className="text-2xl font-black text-slate-900"
        >
          Pasos estructurados del escenario
        </h2>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-600">
            Este escenario todavía no contiene pasos estructurados.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="structured-steps"
      className="mt-12 pt-10 border-t border-slate-200"
      aria-labelledby="structured-steps-title"
      data-testid="scenario-structured-steps"
    >
      <header className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2
              id="structured-steps-title"
              className="text-2xl font-black text-slate-900"
            >
              Pasos estructurados del escenario
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Secuencia ordenada de interacciones entre los participantes
              y Service Domains del escenario.
            </p>
          </div>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
            {messages.length}{" "}
            {messages.length === 1
              ? "paso estructurado"
              : "pasos estructurados"}
          </span>
        </div>
      </header>

      <ol className="space-y-3">
        {messages.map(message => {
          const isActive = message.sequence === activeStep;
          const source = participantsById.get(message.sourceParticipantInstanceId);
          const target = participantsById.get(message.targetParticipantInstanceId);

          return (
            <li key={message.id ?? (message as any).scenarioStepId}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => onStepChange(message.sequence)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onStepChange(message.sequence);
                  }
                }}
                aria-current={isActive ? "step" : undefined}
                data-testid="scenario-structured-step"
                className={[
                  "w-full rounded-2xl border p-5 text-left",
                  "transition-colors focus:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-raia-turquoise",
                  "focus-visible:ring-offset-2",
                  isActive
                    ? "border-slate-800 bg-slate-900 text-white shadow-md cursor-default"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 cursor-pointer"
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={[
                      "flex h-8 w-8 shrink-0 items-center",
                      "justify-center rounded-full text-xs font-black",
                      isActive
                        ? "bg-raia-turquoise text-slate-900"
                        : "bg-slate-100 text-slate-700"
                    ].join(" ")}
                  >
                    {message.sequence}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3
                          className={[
                            "text-sm font-extrabold",
                            isActive ? "text-white" : "text-slate-900"
                          ].join(" ")}
                        >
                          {message.label || `Paso ${message.sequence}`}
                        </h3>

                        <p
                          className={[
                            "mt-1 text-xs font-semibold",
                            isActive ? "text-slate-300" : "text-slate-500"
                          ].join(" ")}
                        >
                          {source?.label ?? message.sourceParticipantInstanceId}
                          {" → "}
                          {target?.label ?? message.targetParticipantInstanceId}
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className={isActive ? "text-raia-turquoise" : "text-slate-400"}
                        aria-hidden="true"
                      />
                    </div>

                    {isActive && message.description && (
                      <p className="mt-4 border-t border-slate-700 pt-4 text-sm leading-relaxed text-slate-300">
                        {message.description}
                      </p>
                    )}

                    {isActive && (message as any).expectedOutcome && (
                      <div className="mt-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
                        <span className="block text-[10px] font-extrabold uppercase tracking-wider text-raia-turquoise">
                          Resultado esperado
                        </span>

                        <p className="mt-1 text-xs leading-relaxed text-slate-200">
                          {(message as any).expectedOutcome}
                        </p>
                      </div>
                    )}

                    {isActive && (
                      <div className="mt-4 flex justify-start">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById("active-step-narrative")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start"
                            });
                          }}
                          className="text-[11px] font-bold text-raia-turquoise hover:text-white transition-colors underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-raia-turquoise rounded-sm"
                        >
                          Ver análisis arquitectónico del paso
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
