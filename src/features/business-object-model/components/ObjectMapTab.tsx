import React, { useEffect, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";
import {
  getBusinessObjects,
  getBusinessObjectRelationships
} from "../../../domain/repositories/businessObjectRepository";
import { Network, HelpCircle, Layers } from "lucide-react";

export default function ObjectMapTab() {
  const { selectedObjectId, setSelectedObjectId, detailLevel, setDetailLevel } = useBusinessObjectStore();

  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    const allObjects = getBusinessObjects();
    const allRelationships = getBusinessObjectRelationships();

    // Simple BFS topological ranks layout calculation for relationships
    const ranks = new Map<string, number>();
    
    // Default initial rank propagation
    allObjects.forEach((bo) => {
      if (!ranks.has(bo.id)) ranks.set(bo.id, 0);
    });

    const queue: string[] = allObjects.map(o => o.id);
    const visited = new Set<string>();

    while (queue.length > 0) {
      const currId = queue.shift()!;
      if (visited.has(currId)) continue;
      visited.add(currId);

      const currRank = ranks.get(currId) || 0;
      const outgoing = allRelationships.filter((r) => r.sourceBusinessObjectId === currId);

      outgoing.forEach((r) => {
        const nextRank = Math.max(ranks.get(r.targetBusinessObjectId) || 0, currRank + 1);
        ranks.set(r.targetBusinessObjectId, nextRank);
        queue.push(r.targetBusinessObjectId);
      });
    }

    // Group siblings by rank for coordinate layout offsets
    const rankGroups = new Map<number, string[]>();
    ranks.forEach((rank, id) => {
      if (!rankGroups.has(rank)) rankGroups.set(rank, []);
      rankGroups.get(rank)!.push(id);
    });

    const flowNodes = allObjects.map((bo) => {
      const rank = ranks.get(bo.id) || 0;
      const siblings = rankGroups.get(rank) || [bo.id];
      const siblingIndex = siblings.indexOf(bo.id);
      const offset = (siblings.length - 1) / 2;

      const x = rank * 320 + 50;
      const y = (siblingIndex - offset) * 150 + 200;

      // Color scheme based on objectType
      let colorClass = "border-slate-350 bg-white";
      if (bo.objectType === "master") colorClass = "border-blue-500 bg-blue-50 text-blue-900";
      else if (bo.objectType === "transaction") colorClass = "border-teal-500 bg-teal-50 text-teal-900";
      else if (bo.objectType === "financial") colorClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
      else if (bo.objectType === "request") colorClass = "border-indigo-500 bg-indigo-50 text-indigo-900";
      else if (bo.objectType === "decision") colorClass = "border-purple-500 bg-purple-50 text-purple-900";
      
      if (bo.abstract) colorClass += " border-dashed border-3";

      const isSelected = selectedObjectId === bo.id;
      const ringClass = isSelected ? "ring-4 ring-slate-900 scale-105" : "";

      return {
        id: bo.id,
        position: { x, y },
        data: {
          label: (
            <div className="text-left select-none">
              <span className="text-[7px] font-bold block uppercase opacity-65">{bo.objectType}</span>
              <span className="text-[10px] font-bold block mt-0.5">{bo.nameEs}</span>
            </div>
          )
        },
        className: `p-3 rounded-xl border-2 shadow-xs transition-all cursor-pointer ${colorClass} ${ringClass} w-44`
      };
    });

    const flowEdges = allRelationships.map((r) => ({
      id: r.id,
      source: r.sourceBusinessObjectId,
      target: r.targetBusinessObjectId,
      label: r.name,
      labelStyle: { fontSize: 7, fontWeight: "bold", fill: "#64748B" },
      style: { stroke: "#94A3B8", strokeWidth: 1.5 },
      animated: selectedObjectId === r.sourceBusinessObjectId || selectedObjectId === r.targetBusinessObjectId
    }));

    setNodes(flowNodes);
    setEdges(flowEdges);
  }, [selectedObjectId, detailLevel]);

  const handleNodeClick = (event: any, node: any) => {
    setSelectedObjectId(node.id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4" data-testid="object-map-tab-content">
      {/* Map toolbar */}
      <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between shadow-xs flex-wrap gap-4 shrink-0">
        <div className="flex items-center gap-2">
          <Network size={16} className="text-slate-500" />
          <span className="text-xs font-bold text-slate-800">Mapa Visual de Objetos de Negocio</span>
        </div>

        {/* Level of detail switcher */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Detalle:</span>
          <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
            {["domain", "object", "attribute"].map((level) => (
              <button
                key={level}
                onClick={() => setDetailLevel(level as any)}
                className={`px-2.5 py-0.5 text-[10px] font-bold rounded cursor-pointer uppercase ${
                  detailLevel === level ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map React Flow canvas */}
      <div className="h-[460px] bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden shadow-inner">
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

      {/* Legend mapping details */}
      <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex flex-wrap justify-center gap-4 text-[10px] font-semibold text-slate-600 shadow-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-blue-50 border-2 border-blue-500 rounded" />
          <span>Master</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-teal-50 border-2 border-teal-500 rounded" />
          <span>Transaction</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-emerald-50 border-2 border-emerald-500 rounded" />
          <span>Financial</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-indigo-50 border-2 border-indigo-500 rounded" />
          <span>Request</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-purple-50 border-2 border-purple-500 rounded" />
          <span>Decision</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-white border-2 border-slate-350 border-dashed rounded" />
          <span>Abstract</span>
        </div>
      </div>
    </div>
  );
}
