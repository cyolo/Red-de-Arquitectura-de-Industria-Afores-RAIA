import React, { useState, useRef, useEffect } from "react";
import { SequenceMessage, SequenceParticipant } from "../sequence-diagram/components/RaiaSequenceDiagram";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const comboRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (comboRef.current && !comboRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (messages.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-sm text-slate-600">
          Este escenario todavía no contiene pasos estructurados.
        </p>
      </div>
    );
  }

  const activeMessage = messages.find(m => m.sequence === activeStep) || messages[0];

  const renderStepCard = (message: SequenceMessage, isSelected: boolean, onClick?: () => void, isDropdownItem: boolean = false) => {
    const source = participantsById.get(message.sourceParticipantInstanceId);
    const target = participantsById.get(message.targetParticipantInstanceId);
    const badgeProps = getBadgeProps(message.messageType);

    return (
      <div
        role={isDropdownItem ? "option" : "button"}
        aria-selected={isDropdownItem ? isSelected : undefined}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
        data-testid="scenario-structured-step"
        data-step-sequence={message.sequence}
        data-message-id={message.id}
        className={[
          "w-full border p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-raia-turquoise focus-visible:z-10 relative",
          isDropdownItem 
            ? (isSelected 
                ? "border-b-slate-100 bg-teal-50/50" 
                : "border-b-slate-100 bg-white hover:bg-slate-50 cursor-pointer")
            : (isOpen 
                ? "border-raia-turquoise bg-white ring-1 ring-raia-turquoise shadow-sm cursor-pointer rounded-xl" 
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm cursor-pointer rounded-xl")
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={[
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                isSelected && !isDropdownItem
                  ? "bg-raia-turquoise text-white"
                  : "bg-slate-100 text-slate-600"
              ].join(" ")}
            >
              {message.sequence}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className={["text-sm font-extrabold leading-tight mb-1 line-clamp-2", isSelected && !isDropdownItem ? "text-slate-900" : "text-slate-700"].join(" ")}>
                {message.label || `Paso ${message.sequence}`}
              </h3>
              <p className="text-[12px] font-semibold text-slate-500 mb-2 truncate">
                {source?.label ?? message.sourceParticipantInstanceId}
                <span className="mx-1 text-slate-300">→</span>
                {target?.label ?? message.targetParticipantInstanceId}
              </p>
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeProps.colorClass}`}>
                {badgeProps.label}
              </span>
            </div>
          </div>
          
          {/* Chevron for the main combo box trigger */}
          {!isDropdownItem && (
            <div className="flex-shrink-0 text-slate-400 self-center">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative" ref={comboRef} data-testid="scenario-step-list-combo">
      {/* Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {renderStepCard(activeMessage, true, undefined, false)}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute z-50 mt-2 w-full max-h-[450px] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-2xl custom-scrollbar overflow-hidden"
          role="listbox"
        >
          {messages.map(message => (
            <React.Fragment key={message.id || message.sequence}>
              {renderStepCard(
                message, 
                message.sequence === activeStep, 
                () => {
                  onStepChange(message.sequence);
                  setIsOpen(false);
                },
                true
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
