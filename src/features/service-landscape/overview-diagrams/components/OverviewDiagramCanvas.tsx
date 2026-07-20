"use client";

import React, { useEffect, useMemo } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  useReactFlow
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import { getOverviewDiagramById } from "../../../../domain/repositories/overviewDiagramRepository";
import { layoutOverviewDiagram } from "../layout/overviewDiagramElkLayout";
import OverviewDiagramNode from "./OverviewDiagramNode";
import OverviewDiagramGroup from "./OverviewDiagramGroup";
import { getStyledEdge } from "./OverviewDiagramEdge";
import { getServiceDomainById } from "../../../../domain/repositories/landscapeRepository";
import { getIndustryParticipantById } from "../../../../domain/repositories/participantRepository";

const nodeTypes = {
  customNode: OverviewDiagramNode,
  customGroup: OverviewDiagramGroup
};

export function OverviewDiagramCanvas() {
  const reactFlowInstance = useReactFlow();
  const {
    selectedDiagramId,
    selectedNodeId,
    selectedEdgeId,
    detailLevel,
    showRelations,
    setSelectedNodeId,
    setSelectedEdgeId
  } = useOverviewDiagramStore();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Load and layout diagram
  const activeDiagram = useMemo(
    () => getOverviewDiagramById(selectedDiagramId),
    [selectedDiagramId]
  );

  useEffect(() => {
    if (!activeDiagram) return;

    const computeLayout = async () => {
      // 1. Position all content nodes
      const { nodes: positionedNodes } = await layoutOverviewDiagram(
        activeDiagram.nodes,
        activeDiagram.edges,
        activeDiagram.orientation,
        detailLevel
      );

      const nodeIds = new Set(positionedNodes.map((n) => n.id));

      // 2. Compute bounding boxes for groups if present
      const groupNodes: any[] = [];
      if (activeDiagram.groups && activeDiagram.groups.length > 0) {
        activeDiagram.groups.forEach((group) => {
          const childNodes = positionedNodes.filter((n) => n.groupId === group.id);
          if (childNodes.length === 0) return;

          let minX = Infinity;
          let maxX = -Infinity;
          let minY = Infinity;
          let maxY = -Infinity;

          childNodes.forEach((child) => {
            if (child.position) {
              minX = Math.min(minX, child.position.x);
              maxX = Math.max(maxX, child.position.x);
              minY = Math.min(minY, child.position.y);
              maxY = Math.max(maxY, child.position.y);
            }
          });

          const padding = 45;
          const nodeWidth = 160;
          const nodeHeight = 50;

          const groupX = minX - padding;
          const groupY = minY - padding - 15;
          const groupW = maxX - minX + nodeWidth + padding * 2;
          const groupH = maxY - minY + nodeHeight + padding * 2 + 15;

          groupNodes.push({
            id: group.id,
            type: "customGroup",
            position: { x: groupX, y: groupY },
            style: { width: groupW, height: groupH, zIndex: -1 },
            draggable: false,
            selectable: false,
            data: {
              label: group.label,
              groupType: group.groupType
            }
          });
        });
      }

      // 3. Format normal nodes for React Flow with dynamic repository name fallbacks
      const flowNodes = positionedNodes.map((n) => {
        const resolvedLabel = n.label || (
          n.nodeType === "service-domain" && n.referenceId
            ? getServiceDomainById(n.referenceId)?.nameEs
            : n.referenceId
            ? getIndustryParticipantById(n.referenceId)?.name
            : ""
        ) || n.id;

        const resolvedDesc = n.description || (
          n.nodeType === "service-domain" && n.referenceId
            ? getServiceDomainById(n.referenceId)?.summary
            : n.referenceId
            ? getIndustryParticipantById(n.referenceId)?.description
            : ""
        ) || "";

        return {
          id: n.id,
          type: "customNode",
          position: n.position || { x: 0, y: 0 },
          data: {
            nodeType: n.nodeType,
            label: resolvedLabel,
            description: resolvedDesc,
            status: n.status,
            isSelected: n.id === selectedNodeId
          }
        };
      });

      // 4. Format edges for React Flow
      const flowEdges = activeDiagram.edges
        .filter((e) => nodeIds.has(e.sourceNodeId) && nodeIds.has(e.targetNodeId))
        .map((e) => getStyledEdge(e, e.id === selectedEdgeId, showRelations));

      setNodes([...groupNodes, ...flowNodes]);
      setEdges(flowEdges);

      // Auto-fit view with slight delay to ensure correct rendering bounds
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2, duration: 300 });
      }, 50);
    };

    computeLayout();
  }, [activeDiagram, detailLevel, selectedNodeId, selectedEdgeId, showRelations]);

  // Click handler
  const onNodeClick = (_: any, node: any) => {
    if (node.type === "customNode") {
      setSelectedNodeId(node.id);
    }
  };

  const onEdgeClick = (_: any, edge: any) => {
    setSelectedEdgeId(edge.id);
  };

  const onPaneClick = () => {
    setSelectedNodeId(null);
    setSelectedEdgeId(null);
  };

  return (
    <div className="w-full h-full min-h-[380px] bg-slate-50 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={true}
        nodesConnectable={false}
        zoomOnScroll={true}
        zoomOnPinch={true}
        panOnDrag={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#CAD3DA" gap={12} size={1} />
        <Controls showInteractive={false} className="scale-90 origin-bottom-left" />
      </ReactFlow>
    </div>
  );
}
export default OverviewDiagramCanvas;
