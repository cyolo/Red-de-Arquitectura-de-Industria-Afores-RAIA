import React, { useEffect, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useControlRecordStore } from "../store/useControlRecordStore";
import {
  getControlRecordStates,
  getControlRecordTransitions,
  getOutgoingTransitions
} from "../../../domain/repositories/controlRecordRepository";
import { Play, RotateCcw, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function StateMachineTab() {
  const {
    selectedControlRecordId,
    selectedStateId,
    setSelectedStateId,
    setSelectedTransitionId,
    simulationActive,
    setSimulationActive,
    currentSimulationStateId,
    setCurrentSimulationStateId
  } = useControlRecordStore();

  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    if (!selectedControlRecordId) return;

    const allStates = getControlRecordStates().filter((s) => s.controlRecordId === selectedControlRecordId);
    const allTransitions = getControlRecordTransitions().filter((t) => t.controlRecordId === selectedControlRecordId);

    // BFS ranking layout calculations
    const ranks = new Map<string, number>();
    const initialState = allStates.find((s) => s.isInitial);
    
    if (initialState) {
      ranks.set(initialState.id, 0);
      const queue: string[] = [initialState.id];
      const visited = new Set<string>([initialState.id]);

      while (queue.length > 0) {
        const currId = queue.shift()!;
        const currRank = ranks.get(currId) || 0;
        const outgoing = allTransitions.filter((t) => t.sourceStateId === currId);

        outgoing.forEach((t) => {
          const nextRank = Math.max(ranks.get(t.targetStateId) || 0, currRank + 1);
          if (!visited.has(t.targetStateId)) {
            ranks.set(t.targetStateId, nextRank);
            visited.add(t.targetStateId);
            queue.push(t.targetStateId);
          } else {
            if (nextRank > ranks.get(t.targetStateId)!) {
              ranks.set(t.targetStateId, nextRank);
            }
          }
        });
      }
    }

    // Ensure all states have rank coordinates
    allStates.forEach((s) => {
      if (!ranks.has(s.id)) ranks.set(s.id, 0);
    });

    // Group siblings by rank to apply Y offset
    const rankGroups = new Map<number, string[]>();
    ranks.forEach((rank, id) => {
      if (!rankGroups.has(rank)) rankGroups.set(rank, []);
      rankGroups.get(rank)!.push(id);
    });

    const flowNodes = allStates.map((s) => {
      const rank = ranks.get(s.id) || 0;
      const siblings = rankGroups.get(rank) || [s.id];
      const siblingIndex = siblings.indexOf(s.id);
      const offset = (siblings.length - 1) / 2;

      const x = rank * 280 + 80;
      const y = (siblingIndex - offset) * 140 + 160;

      // Color scheme based on stateKind
      let bgColor = "bg-white border-slate-300";
      if (s.isInitial) bgColor = "bg-slate-900 text-white border-slate-950";
      else if (s.isTerminal) bgColor = "bg-emerald-50 text-emerald-900 border-emerald-450 border-double border-4";
      else if (s.stateKind === "exception") bgColor = "bg-red-50 text-red-900 border-red-300";
      
      // Simulation active highlighting
      const isCurrentSim = simulationActive && currentSimulationStateId === s.id;
      const borderClass = isCurrentSim ? "ring-4 ring-emerald-500 scale-105" : "";

      return {
        id: s.id,
        position: { x, y },
        data: {
          label: (
            <div className="text-left select-none">
              <span className="text-[7px] font-bold block uppercase opacity-60">{s.stateKind}</span>
              <span className="text-[10.5px] font-bold block">{s.name}</span>
            </div>
          )
        },
        className: `p-3 rounded-lg border-2 shadow-xs font-sans transition-all cursor-pointer ${bgColor} ${borderClass} w-44`
      };
    });

    const flowEdges = allTransitions.map((t) => ({
      id: t.id,
      source: t.sourceStateId,
      target: t.targetStateId,
      animated: simulationActive && currentSimulationStateId === t.sourceStateId,
      label: t.name,
      labelStyle: { fontSize: 7.5, fontWeight: "bold", fill: "#475569" },
      style: { stroke: "#94A3B8", strokeWidth: 1.5 }
    }));

    setNodes(flowNodes);
    setEdges(flowEdges);
  }, [selectedControlRecordId, simulationActive, currentSimulationStateId]);

  // Simulation handlers
  const handleStartSimulation = () => {
    const allStates = getControlRecordStates().filter((s) => s.controlRecordId === selectedControlRecordId);
    const initial = allStates.find((s) => s.isInitial);
    if (initial) {
      setSimulationActive(true);
      setCurrentSimulationStateId(initial.id);
    }
  };

  const handleStopSimulation = () => {
    setSimulationActive(false);
    setCurrentSimulationStateId(null);
  };

  const availableTransitions = currentSimulationStateId ? getOutgoingTransitions(currentSimulationStateId) : [];

  const handleTriggerTransition = (transitionId: string, targetStateId: string) => {
    setCurrentSimulationStateId(targetStateId);
    setSelectedTransitionId(transitionId);
  };

  const handleNodeClick = (event: any, node: any) => {
    setSelectedStateId(node.id);
  };

  const handleEdgeClick = (event: any, edge: any) => {
    setSelectedTransitionId(edge.id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4" data-testid="state-machine-tab-content">
      {/* Simulation Controls toolbar */}
      <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-slate-500" />
          <span className="text-xs font-bold text-slate-800">Simulador de Transición Lógica</span>
        </div>
        
        <div className="flex items-center gap-2">
          {!simulationActive ? (
            <button
              onClick={handleStartSimulation}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-1.5 px-3 rounded flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Play size={12} />
              Iniciar Simulación
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                SIMULACIÓN ACTIVA
              </span>
              <button
                onClick={handleStopSimulation}
                className="bg-white border border-slate-250 hover:bg-slate-50 text-slate-700 font-bold text-xs py-1.5 px-3 rounded flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <RotateCcw size={12} />
                Reiniciar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Available Simulation Actions bar */}
      {simulationActive && availableTransitions.length > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl flex flex-wrap items-center gap-2 shadow-xs">
          <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
            Transiciones disponibles:
          </span>
          {availableTransitions.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTriggerTransition(t.id, t.targetStateId)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-1 px-3 rounded-md transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <span>{t.name}</span>
              <ArrowRight size={12} />
            </button>
          ))}
        </div>
      )}

      {/* React Flow canvas */}
      <div className="h-[460px] bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden shadow-inner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          proOptions={{ hideAttribution: true }}
          onNodeClick={handleNodeClick}
          onEdgeClick={handleEdgeClick}
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
