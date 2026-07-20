import React, { useEffect, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useReferenceModelStore } from "../store/useReferenceModelStore";
import { composeViewpoint } from "../../../domain/repositories/referenceModelRepository";

export default function ReferenceModelCanvas() {
  const { selectedViewpointId, selectedArtifactRef, setSelectedArtifactRef } = useReferenceModelStore();

  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    if (!selectedViewpointId) return;

    const viewpointGraph = composeViewpoint(selectedViewpointId);

    // Dynamic vertical lanes / layers offsets sorting based on layerId
    const layerOrder = [
      "ecosystem",
      "value-stream",
      "service-landscape",
      "information",
      "control-state",
      "regulation-control"
    ];

    const layerGroups = new Map<string, string[]>();
    viewpointGraph.nodes.forEach((n) => {
      if (!layerGroups.has(n.layerId)) layerGroups.set(n.layerId, []);
      layerGroups.get(n.layerId)!.push(n.id);
    });

    const flowNodes = viewpointGraph.nodes.map((n) => {
      const layerIndex = layerOrder.indexOf(n.layerId);
      const siblings = layerGroups.get(n.layerId) || [n.id];
      const siblingIndex = siblings.indexOf(n.id);
      const offset = (siblings.length - 1) / 2;

      const x = siblingIndex * 260 + 50;
      const y = (layerIndex >= 0 ? layerIndex : 0) * 160 + 50;

      // Class mappings based on type
      let colorClass = "border-slate-300 bg-white";
      if (n.type === "participant") colorClass = "border-amber-500 bg-amber-50 text-amber-900";
      else if (n.type === "service-domain") colorClass = "border-blue-500 bg-blue-50 text-blue-900";
      else if (n.type === "business-object") colorClass = "border-orange-500 bg-orange-50 text-orange-950";
      else if (n.type === "control-record") colorClass = "border-purple-500 bg-purple-50 text-purple-900";
      else if (n.type === "regulatory-source") colorClass = "border-emerald-500 bg-emerald-50 text-emerald-950";

      const isSelected = selectedArtifactRef?.artifactId === n.id;
      const ringClass = isSelected ? "ring-4 ring-slate-900 scale-105" : "";

      return {
        id: n.id,
        position: { x, y },
        data: {
          label: (
            <div className="text-left select-none">
              <span className="text-[7px] font-bold block uppercase opacity-65">{n.type}</span>
              <span className="text-[10px] font-bold block mt-0.5">{n.name}</span>
            </div>
          )
        },
        className: `p-3.5 rounded-xl border-2 shadow-xs transition-all cursor-pointer ${colorClass} ${ringClass} w-52`
      };
    });

    const flowEdges = viewpointGraph.edges.map((e, idx) => ({
      id: `edge-${idx}`,
      source: e.source,
      target: e.target,
      label: e.relationType,
      labelStyle: { fontSize: 7, fontWeight: "bold", fill: "#64748B" },
      style: { stroke: "#94A3B8", strokeWidth: 1.5 },
      animated: selectedArtifactRef?.artifactId === e.source || selectedArtifactRef?.artifactId === e.target
    }));

    setNodes(flowNodes);
    setEdges(flowEdges);
  }, [selectedViewpointId, selectedArtifactRef]);

  const handleNodeClick = (event: any, node: any) => {
    // Determine target type to construct ReferenceArtifactRef
    const viewpointGraph = composeViewpoint(selectedViewpointId || "");
    const matched = viewpointGraph.nodes.find((n) => n.id === node.id);
    if (matched) {
      setSelectedArtifactRef({
        artifactType: matched.type as any,
        artifactId: matched.id
      });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4" data-testid="map-tab-content">
      <div className="h-[480px] bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden shadow-inner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          proOptions={{ hideAttribution: true }}
          onNodeClick={handleNodeClick}
          nodesDraggable={true}
          nodesConnectable={false}
        >
          <Background color="#CAD3DA" gap={12} size={1} />
          <Controls showInteractive={false} className="scale-90 origin-bottom-left" />
        </ReactFlow>
      </div>

      {/* Layer labels indicator map */}
      <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex flex-wrap justify-center gap-4 text-[10px] font-bold text-slate-500 shadow-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-amber-50 border border-amber-500 rounded" />
          <span>Ecosystem</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-blue-50 border border-blue-500 rounded" />
          <span>Landscape</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-orange-50 border border-orange-400 rounded" />
          <span>Information (Objects)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-purple-50 border border-purple-500 rounded" />
          <span>Control Records</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-emerald-50 border border-emerald-500 rounded" />
          <span>Regulation</span>
        </div>
      </div>
    </div>
  );
}
