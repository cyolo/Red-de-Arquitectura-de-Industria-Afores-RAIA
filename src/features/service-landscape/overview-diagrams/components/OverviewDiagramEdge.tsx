import { MarkerType } from "@xyflow/react";
import { OverviewDiagramEdge } from "../../../../domain/types/overviewDiagramTypes";

export const getStyledEdge = (
  edge: OverviewDiagramEdge,
  isSelected: boolean,
  showRelations: boolean
) => {
  const { edgeType, label, animated } = edge;

  // Style attributes based on edgeType
  let strokeColor = "#64748B"; // slate-500 default
  let strokeWidth = 1.5;
  let strokeDasharray = undefined;

  switch (edgeType) {
    case "value-flow":
      strokeColor = "#0284C7"; // sky-600
      strokeWidth = 2;
      break;
    case "fund-transfer":
      strokeColor = "#D97706"; // amber-600
      strokeWidth = 2.2;
      break;
    case "supervision":
      strokeColor = "#4F46E5"; // indigo-600
      strokeDasharray = "5,5";
      break;
    case "validation":
      strokeColor = "#059669"; // emerald-600
      strokeDasharray = "3,3";
      break;
    case "reporting":
      strokeColor = "#0D9488"; // teal-600
      break;
    case "governance":
      strokeColor = "#475569"; // slate-600
      strokeDasharray = "4,4";
      break;
    default:
      strokeColor = "#94A3B8"; // slate-400
  }

  // Highlight if selected
  if (isSelected) {
    strokeColor = "#0f172a"; // slate-900 focus
    strokeWidth += 1;
  }

  return {
    id: edge.id,
    source: edge.sourceNodeId,
    target: edge.targetNodeId,
    animated: animated || isSelected || edgeType === "value-flow" || edgeType === "fund-transfer",
    label: label,
    labelStyle: { fontSize: "8.5px", fill: isSelected ? "#0f172a" : "#475569", fontWeight: 650 },
    labelBgPadding: [3, 2],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFFFFF", fillOpacity: 0.9 },
    hidden: !showRelations,
    style: {
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      transition: "stroke 0.2s, stroke-width 0.2s"
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: strokeColor,
      width: 10,
      height: 10
    }
  };
};
