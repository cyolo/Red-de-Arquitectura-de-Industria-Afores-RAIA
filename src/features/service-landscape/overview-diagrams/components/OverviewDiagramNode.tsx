import React from "react";
import { Handle, Position } from "@xyflow/react";
import {
  Layers,
  Users,
  Shield,
  Briefcase,
  FileText,
  AlertCircle,
  HelpCircle,
  Cpu,
  Bookmark
} from "lucide-react";
import { OverviewNodeType } from "../../../../domain/types/overviewDiagramTypes";

interface NodeData {
  nodeType: OverviewNodeType;
  label: string;
  description?: string;
  status: "normal" | "highlighted" | "warning" | "gap";
  isSelected?: boolean;
}

export function OverviewDiagramNode({ data }: { data: NodeData }) {
  const { nodeType, label, status, isSelected } = data;

  // Icon selector based on nodeType
  const getIcon = () => {
    switch (nodeType) {
      case "business-area":
        return <Layers className="w-4 h-4 text-blue-600" />;
      case "business-domain":
        return <Bookmark className="w-4 h-4 text-teal-600" />;
      case "service-domain":
        return <Cpu className="w-4 h-4 text-slate-600" />;
      case "actor":
      case "organization":
        return <Users className="w-4 h-4 text-amber-700" />;
      case "authority":
        return <Shield className="w-4 h-4 text-indigo-700" />;
      case "control":
        return <Shield className="w-4 h-4 text-orange-600" />;
      case "information-asset":
      case "business-object":
        return <FileText className="w-4 h-4 text-yellow-600" />;
      case "decision":
        return <HelpCircle className="w-4 h-4 text-purple-600" />;
      case "phase":
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case "event":
        return <AlertCircle className="w-4 h-4 text-rose-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-500" />;
    }
  };

  // Color classes mapping
  const getColorClasses = () => {
    if (isSelected) {
      return "bg-slate-90 border-slate-900 border-2 shadow-md ring-2 ring-slate-800 ring-offset-1";
    }

    if (status === "gap") {
      return "bg-rose-50 border-rose-300 text-rose-900 shadow-sm border-2 animate-pulse";
    }
    if (status === "warning") {
      return "bg-amber-50 border-amber-300 text-amber-900 shadow-sm border-2";
    }

    switch (nodeType) {
      case "business-area":
        return "bg-blue-50 border-blue-200 text-blue-950";
      case "business-domain":
        return "bg-teal-50 border-teal-200 text-teal-950";
      case "service-domain":
        return "bg-white border-slate-200 text-slate-800";
      case "actor":
      case "organization":
        return "bg-amber-50/50 border-amber-200 text-amber-900";
      case "authority":
        return "bg-indigo-50 border-indigo-200 text-indigo-950";
      case "control":
        return "bg-orange-50 border-orange-200 text-orange-950";
      case "information-asset":
      case "business-object":
        return "bg-yellow-50/80 border-yellow-200 text-yellow-950";
      case "phase":
        return "bg-emerald-50 border-emerald-200 text-emerald-950 font-semibold";
      default:
        return "bg-slate-50 border-slate-200 text-slate-800";
    }
  };

  return (
    <div
      className={`px-3 py-2.5 rounded-lg border text-left min-w-[140px] max-w-[200px] hover:scale-102 transition-transform select-none ${getColorClasses()}`}
      style={{ fontSize: "10.5px" }}
    >
      <Handle type="target" position={Position.Left} className="w-1.5 h-1.5 bg-slate-400" />
      
      <div className="flex items-center gap-2">
        <span className="flex-shrink-0">{getIcon()}</span>
        <div className="flex-1 font-medium leading-tight break-words">{label}</div>
      </div>

      <Handle type="source" position={Position.Right} className="w-1.5 h-1.5 bg-slate-400" />
    </div>
  );
}
export default OverviewDiagramNode;
