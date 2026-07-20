"use client";

import React, { useEffect, useMemo } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { getServiceDomainById, getRelations } from "../../domain/repositories/landscapeRepository";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";

interface Props {
  selectedId: string;
  onSelect?: (id: string) => void;
}

export default function LocalRelationGraph({ selectedId, onSelect }: Props) {
  const setSelectedId = useLandscapeStore((state) => state.setSelectedId);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);

  const currentDomain = useMemo(() => getServiceDomainById(selectedId), [selectedId]);
  const allRelations = useMemo(() => getRelations(), []);

  useEffect(() => {
    if (!currentDomain) return;

    // Find direct relations
    const directRelations = allRelations.filter(
      (rel) => rel.sourceId === selectedId || rel.targetId === selectedId
    );

    const uniqueNodeIds = new Set<string>([selectedId]);
    directRelations.forEach((rel) => {
      uniqueNodeIds.add(rel.sourceId);
      uniqueNodeIds.add(rel.targetId);
    });

    const relatedDomains = Array.from(uniqueNodeIds)
      .map((id) => getServiceDomainById(id))
      .filter((d): d is NonNullable<typeof d> => !!d);

    // Calculate layout position
    const nodeWidth = 150;
    const nodeHeight = 60;
    const centerX = 200;
    const centerY = 120;

    // Separate into center, upstream (left), downstream (right)
    const centerNode = relatedDomains.find((d) => d.id === selectedId);
    const upstream = relatedDomains.filter((d) => 
      d.id !== selectedId && 
      directRelations.some((r) => r.sourceId === d.id && r.targetId === selectedId)
    );
    const downstream = relatedDomains.filter((d) => 
      d.id !== selectedId && 
      directRelations.some((r) => r.sourceId === selectedId && r.targetId === d.id)
    );
    
    // Any remaining nodes are general relations (placed below/above)
    const others = relatedDomains.filter((d) => 
      d.id !== selectedId && 
      !upstream.includes(d) && 
      !downstream.includes(d)
    );

    const newNodes: any[] = [];
    const newEdges: any[] = [];

    // Add Center Node
    if (centerNode) {
      newNodes.push({
        id: centerNode.id,
        position: { x: centerX, y: centerY },
        data: { label: centerNode.nameEs, isCenter: true, type: "service" },
        style: {
          background: "#3A7D5B", // Verde institucional
          color: "#fff",
          border: "2px solid #1B4D3E",
          borderRadius: "8px",
          padding: "8px",
          fontSize: "9px",
          fontWeight: "bold",
          width: nodeWidth,
          textAlign: "center",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        },
      });
    }

    // Add Upstream Nodes (Left Column)
    upstream.forEach((node, idx) => {
      const spacingY = 90;
      const startY = centerY - ((upstream.length - 1) * spacingY) / 2;
      newNodes.push({
        id: node.id,
        position: { x: centerX - 220, y: startY + idx * spacingY },
        data: { label: node.nameEs, type: "service" },
        style: {
          background: "#FFFFFF",
          color: "#18242E",
          border: "1.5px solid #CAD3DA",
          borderRadius: "6px",
          padding: "8px",
          fontSize: "9px",
          width: nodeWidth,
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        },
      });
    });

    // Add Downstream Nodes (Right Column)
    downstream.forEach((node, idx) => {
      const spacingY = 90;
      const startY = centerY - ((downstream.length - 1) * spacingY) / 2;
      newNodes.push({
        id: node.id,
        position: { x: centerX + 220, y: startY + idx * spacingY },
        data: { label: node.nameEs, type: "service" },
        style: {
          background: "#FFFFFF",
          color: "#18242E",
          border: "1.5px solid #CAD3DA",
          borderRadius: "6px",
          padding: "8px",
          fontSize: "9px",
          width: nodeWidth,
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        },
      });
    });

    // Add Other Relations (Bottom Column)
    others.forEach((node, idx) => {
      const spacingX = 180;
      const startX = centerX - ((others.length - 1) * spacingX) / 2;
      newNodes.push({
        id: node.id,
        position: { x: startX + idx * spacingX, y: centerY + 130 },
        data: { label: node.nameEs, type: "service" },
        style: {
          background: "#FFFFFF",
          color: "#18242E",
          border: "1.5px solid #CAD3DA",
          borderRadius: "6px",
          padding: "8px",
          fontSize: "9px",
          width: nodeWidth,
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        },
      });
    });

    // Create Edges
    directRelations.forEach((rel) => {
      const isUpstream = rel.targetId === selectedId;
      newEdges.push({
        id: rel.id,
        source: rel.sourceId,
        target: rel.targetId,
        animated: true,
        label: rel.label,
        labelStyle: { fontSize: "8px", fill: "#52616D", fontWeight: 600 },
        style: { stroke: isUpstream ? "#1F78B4" : "#C69A3B", strokeWidth: 1.5 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isUpstream ? "#1F78B4" : "#C69A3B",
          width: 12,
          height: 12,
        },
      });
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [selectedId, currentDomain, allRelations, setNodes, setEdges]);

  const onNodeClick = (_: any, node: any) => {
    if (node.id !== selectedId) {
      if (onSelect) {
        onSelect(node.id);
      } else {
        setSelectedId(node.id);
      }
    }
  };

  return (
    <div className="w-full h-56 bg-slate-50 border border-slate-200 rounded-lg relative overflow-hidden mt-3 shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        nodesDraggable={true}
        nodesConnectable={false}
        zoomOnScroll={true}
        zoomOnPinch={true}
        panOnScroll={false}
        panOnDrag={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#CAD3DA" gap={12} size={1} />
        <Controls showInteractive={false} className="scale-75 origin-bottom-left" />
      </ReactFlow>
    </div>
  );
}
