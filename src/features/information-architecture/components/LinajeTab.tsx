import React, { useEffect, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { getLineageEdges, getCanonicalBusinessObjectById } from "../../../domain/repositories/informationArchitectureRepository";
import { getServiceDomainById } from "../../../domain/repositories/landscapeRepository";

export default function LinajeTab() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    const rawEdges = getLineageEdges();
    
    // Extract all unique node IDs
    const nodeIds = new Set<string>();
    rawEdges.forEach((e) => {
      nodeIds.add(e.sourceId);
      nodeIds.add(e.targetId);
    });

    // Create node objects with coordinates
    const uniqueIds = Array.from(nodeIds);
    const flowNodes = uniqueIds.map((id, index) => {
      const isSd = id.startsWith("RAIA-SD-");
      const isBo = id.startsWith("RAIA-BO-");
      
      let label = id;
      let bgColor = "bg-white border-slate-300";
      let typeLabel = "Elemento";

      if (isSd) {
        label = getServiceDomainById(id)?.nameEs || id;
        bgColor = "bg-sky-50 border-sky-300 text-sky-900";
        typeLabel = "Service Domain";
      } else if (isBo) {
        label = getCanonicalBusinessObjectById(id)?.nameEs || id;
        bgColor = "bg-amber-50 border-amber-300 text-amber-900";
        typeLabel = "Business Object";
      }

      // Simple grid positioning for layout fallback
      const col = index % 3;
      const row = Math.floor(index / 3);

      return {
        id,
        position: { x: col * 300 + 50, y: row * 150 + 50 },
        data: {
          label: (
            <div className="text-left">
              <span className="text-[8px] font-bold block uppercase opacity-60">{typeLabel}</span>
              <span className="text-[10px] font-bold block">{label}</span>
            </div>
          )
        },
        className: `p-3 rounded-lg border-2 shadow-sm font-sans ${bgColor} w-56`
      };
    });

    const flowEdges = rawEdges.map((e) => ({
      id: e.id,
      source: e.sourceId,
      target: e.targetId,
      animated: true,
      label: e.action,
      labelStyle: { fontSize: 8, fontWeight: "bold", fill: "#475569" },
      style: { stroke: "#94A3B8", strokeWidth: 2 }
    }));

    setNodes(flowNodes);
    setEdges(flowEdges);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6" data-testid="linaje-tab-content">
      <div className="border-b border-slate-200 pb-3 shrink-0">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Visor de Linaje Lógico de Información
        </h3>
      </div>

      <div className="h-[480px] bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          proOptions={{ hideAttribution: true }}
          nodesDraggable={true}
          nodesConnectable={false}
        >
          <Background color="#CAD3DA" gap={12} size={1} />
          <Controls showInteractive={false} className="scale-90 origin-bottom-left" />
        </ReactFlow>
      </div>
    </div>
  );
}
