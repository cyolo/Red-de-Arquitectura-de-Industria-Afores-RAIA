import React from "react";
import { BusinessCapability } from "../../../domain/types/capabilityTypes";
import { CapabilityOverlay } from "../store/useCapabilityMapStore";
import { ShieldCheck, AlertTriangle, HelpCircle } from "lucide-react";

interface CapabilityTileProps {
  capability: BusinessCapability;
  overlay: CapabilityOverlay;
  isSelected: boolean;
  onClick: () => void;
}

export default function CapabilityTile({
  capability,
  overlay,
  isSelected,
  onClick
}: CapabilityTileProps) {
  
  // Dynamic color selection based on overlay
  const getOverlayClasses = () => {
    if (overlay === "criticality") {
      switch (capability.criticality) {
        case "low":
          return "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100/70";
        case "medium":
          return "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100/70";
        case "high":
          return "bg-orange-50 border-orange-200 text-orange-850 hover:bg-orange-100/70";
        case "systemic":
          return "bg-red-50 border-red-200 text-red-900 hover:bg-red-100/70";
        default:
          return "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100/70";
      }
    }

    if (overlay === "capabilityType") {
      switch (capability.capabilityType) {
        case "industry-core":
          return "bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100/70";
        case "industry-shared":
          return "bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100/70";
        case "regulatory-governance":
          return "bg-sky-50 border-sky-200 text-sky-905 hover:bg-sky-100/70";
        case "enterprise-enabler":
          return "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100/70";
        case "raia-governance":
          return "bg-teal-50 border-teal-200 text-teal-900 hover:bg-teal-100/70";
        default:
          return "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100/70";
      }
    }

    if (overlay === "maturity") {
      return "bg-indigo-50/50 border-indigo-200 text-indigo-950 hover:bg-indigo-100/50";
    }

    if (overlay === "health") {
      return "bg-emerald-50/60 border-emerald-200 text-emerald-950 hover:bg-emerald-100/50";
    }

    if (overlay === "investmentPriority") {
      return "bg-violet-50/60 border-violet-200 text-violet-950 hover:bg-violet-100/50";
    }

    // Default clean/premium style
    return isSelected
      ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
      : "bg-white border-slate-200 text-slate-800 hover:border-slate-350 hover:shadow-xs";
  };

  return (
    <button
      type="button"
      onClick={onClick}
      data-testid="capability-tile"
      data-capability-id={capability.id}
      data-capability-criticality={capability.criticality}
      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:z-10 relative cursor-pointer ${getOverlayClasses()}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-70">
          {capability.id}
        </span>
        <div className="flex items-center gap-1">
          {capability.criticality === "systemic" && (
            <AlertTriangle size={13} className="text-red-650" title="Criticidad Sistémica" />
          )}
          {capability.status === "validated" && (
            <ShieldCheck size={13} className="text-blue-650" title="Validado" />
          )}
        </div>
      </div>

      <h4 className="font-extrabold text-xs mt-2 leading-snug">
        {capability.nameEs}
      </h4>

      <p className="text-[10.5px] opacity-80 mt-1 line-clamp-2 leading-relaxed">
        {capability.description}
      </p>

      {/* Dynamic Overlay indicator labels */}
      {overlay !== "none" && (
        <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider opacity-85">
          <span>{overlay}:</span>
          <span className="font-extrabold">
            {overlay === "criticality" && capability.criticality}
            {overlay === "capabilityType" && capability.capabilityType}
            {overlay === "maturity" && "defined (L3)"}
            {overlay === "health" && "healthy"}
            {overlay === "investmentPriority" && "improve"}
          </span>
        </div>
      )}
    </button>
  );
}
