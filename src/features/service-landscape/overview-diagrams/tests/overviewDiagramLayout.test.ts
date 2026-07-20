import { describe, it, expect } from "vitest";
import { layoutOverviewDiagram } from "../layout/overviewDiagramElkLayout";
import { OverviewDiagramNode, OverviewDiagramEdge } from "../../../../domain/types/overviewDiagramTypes";

describe("OverviewDiagrams Auto-Layout Tests", () => {
  const mockNodes: OverviewDiagramNode[] = [
    {
      id: "node-1",
      diagramId: "RAIA-OVD-001",
      nodeType: "phase",
      label: "Fase 1",
      status: "normal"
    },
    {
      id: "node-2",
      diagramId: "RAIA-OVD-001",
      nodeType: "service-domain",
      referenceId: "RAIA-SD-020",
      label: "Service Domain 1",
      status: "normal"
    },
    {
      id: "node-3",
      diagramId: "RAIA-OVD-001",
      nodeType: "actor",
      referenceId: "ACT-WORKER",
      label: "Trabajador",
      status: "normal"
    }
  ];

  const mockEdges: OverviewDiagramEdge[] = [
    {
      id: "edge-1",
      diagramId: "RAIA-OVD-001",
      sourceNodeId: "node-1",
      targetNodeId: "node-2",
      edgeType: "value-flow",
      description: "Step 1",
      businessObjectIds: [],
      businessEventIds: [],
      regulatoryMappingIds: [],
      status: "proposed"
    },
    {
      id: "edge-2",
      diagramId: "RAIA-OVD-001",
      sourceNodeId: "node-2",
      targetNodeId: "node-3",
      edgeType: "information-flow",
      description: "Step 2",
      businessObjectIds: [],
      businessEventIds: [],
      regulatoryMappingIds: [],
      status: "proposed"
    }
  ];

  it("should calculate coordinate layouts for all nodes", async () => {
    const { nodes } = await layoutOverviewDiagram(mockNodes, mockEdges, "left-to-right", "service-domain");
    expect(nodes.length).toBe(3);
    nodes.forEach((n) => {
      expect(n.position).toBeDefined();
      expect(typeof n.position?.x).toBe("number");
      expect(typeof n.position?.y).toBe("number");
    });
  });

  it("should filter service domains when detail level is macro", async () => {
    const { nodes } = await layoutOverviewDiagram(mockNodes, mockEdges, "left-to-right", "macro");
    // macro level drops service-domain nodes, keeping phase and actor
    expect(nodes.length).toBe(2);
    expect(nodes.some((n) => n.nodeType === "service-domain")).toBe(false);
  });

  it("should preserve manual positions when manuallyPositioned is true", async () => {
    const customNodes = [
      {
        ...mockNodes[0],
        manuallyPositioned: true,
        position: { x: 999, y: 999 }
      }
    ];
    const { nodes } = await layoutOverviewDiagram(customNodes, [], "left-to-right", "service-domain");
    expect(nodes[0].position?.x).toBe(999);
    expect(nodes[0].position?.y).toBe(999);
  });

  it("should resolve and layout cyclic graphs without hanging", async () => {
    // A cyclic graph: node-1 -> node-2 -> node-3 -> node-1
    const cyclicEdges = [
      ...mockEdges,
      {
        id: "edge-cycle",
        diagramId: "RAIA-OVD-001",
        sourceNodeId: "node-3",
        targetNodeId: "node-1",
        edgeType: "value-flow" as const,
        description: "Back edge",
        businessObjectIds: [],
        businessEventIds: [],
        regulatoryMappingIds: [],
        status: "proposed" as const
      }
    ];

    const promise = layoutOverviewDiagram(mockNodes, cyclicEdges, "left-to-right", "service-domain");
    await expect(promise).resolves.toBeDefined();
    
    const { nodes } = await promise;
    expect(nodes.length).toBe(3);
  });
});
