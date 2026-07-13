import React from "react";
import { SequenceMessage, SequenceParticipant } from "../sequence-diagram/components/RaiaSequenceDiagram";

interface ScenarioStepListProps {
  messages: SequenceMessage[];
  participantsById: Map<string, SequenceParticipant>;
  activeStep: number;
  onStepChange: (sequence: number) => void;
}

function getBadgeProps(messageType: string) {
  const typeMap: Record<string, { label: string; colorClass: string }> = {
    command: { label: "Comando", colorClass: "text-blue-700 bg-blue-50" },
    query: { label: "Consulta", colorClass: "text-emerald-700 bg-emerald-50" },
    response: { label: "Respuesta", colorClass: "text-slate-700 bg-slate-100" },
    event: { label: "Evento", colorClass: "text-amber-700 bg-amber-50" },
    notification: { label: "Notificación", colorClass: "text-indigo-700 bg-indigo-50" },
    transfer: { label: "Transferencia", colorClass: "text-fuchsia-700 bg-fuchsia-50" },
    review: { label: "Revisión manual", colorClass: "text-orange-700 bg-orange-50" },
    approval: { label: "Aprobación", colorClass: "text-teal-700 bg-teal-50" },
    rejection: { label: "Rechazo", colorClass: "text-red-700 bg-red-50" }
  };
  return typeMap[messageType] || { label: messageType.toUpperCase(), colorClass: "text-slate-700 bg-slate-100" };
}

export default function ScenarioStepList({
  messages,
  participantsById,
  activeStep,
  onStepChange
}: ScenarioStepListProps) {
  
  if (messages.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-sm text-slate-600">
          Este escenario todavía no contiene pasos estructurados.
        </p>
      </div>
    );
  }

  return (
    <ol className="space-y-3" data-testid="scenario-step-list">
      {messages.map(message => {
        const isActive = message.sequence === activeStep;
        const source = participantsById.get(message.sourceParticipantInstanceId);
        const target = participantsById.get(message.targetParticipantInstanceId);
        const badgeProps = getBadgeProps(message.messageType);

        return (
          <li key={message.id || message.sequence}>
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
              aria-controls="scenario-step-analysis"
              data-testid="scenario-structured-step"
              className={[
                "w-full rounded-xl border p-4 text-left",
                "transition-all duration-200 focus:outline-none",
                "focus-visible:ring-2 focus-visible:ring-raia-turquoise focus-visible:ring-offset-2",
                isActive
                  ? "border-raia-turquoise bg-teal-50/30 shadow-sm cursor-default ring-1 ring-raia-turquoise"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm cursor-pointer"
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <div
                  className={[
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                    isActive
                      ? "bg-raia-turquoise text-white"
                      : "bg-slate-100 text-slate-600"
                  ].join(" ")}
                >
                  {message.sequence}
                </div>

                <div className="min-w-0 flex-1">
                  {/* Title */}
                  <h3
                    className={[
                      "text-sm font-extrabold leading-tight mb-1 line-clamp-2",
                      isActive ? "text-slate-900" : "text-slate-700"
                    ].join(" ")}
                  >
                    {message.label || `Paso ${message.sequence}`}
                  </h3>

                  {/* Source -> Target */}
                  <p className="text-[12px] font-semibold text-slate-500 mb-2 truncate">
                    {source?.label ?? message.sourceParticipantInstanceId}
                    <span className="mx-1 text-slate-300">→</span>
                    {target?.label ?? message.targetParticipantInstanceId}
                  </p>

                  {/* Type Badge */}
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeProps.colorClass}`}>
                    {badgeProps.label}
                  </span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
