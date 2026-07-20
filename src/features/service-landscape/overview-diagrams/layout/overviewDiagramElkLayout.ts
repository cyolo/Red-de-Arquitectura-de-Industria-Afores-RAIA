import { OverviewDiagramNode, OverviewDiagramEdge } from "../../../../domain/types/overviewDiagramTypes";

/**
 * Computes topological layered layout (similar to ELK RIGHT/DOWN layout)
 * to assign X and Y coordinates to every node based on connections.
 */
export async function layoutOverviewDiagram(
  nodes: OverviewDiagramNode[],
  edges: OverviewDiagramEdge[],
  orientation: "left-to-right" | "top-to-bottom" = "left-to-right",
  detailLevel: "macro" | "domain" | "service-domain" = "service-domain"
): Promise<{ nodes: OverviewDiagramNode[] }> {
  // Filter nodes based on detail level
  const filteredNodes = nodes.filter((node) => {
    if (detailLevel === "macro") {
      // Only show phases, areas, and main actors
      return (
        node.nodeType === "phase" ||
        node.nodeType === "business-area" ||
        node.nodeType === "actor" ||
        node.nodeType === "authority"
      );
    } else if (detailLevel === "domain") {
      // Show macro + business domains
      return (
        node.nodeType !== "service-domain" &&
        node.nodeType !== "control" &&
        node.nodeType !== "business-object"
      );
    }
    return true; // "service-domain" shows everything
  });

  const nodeIds = new Set(filteredNodes.map((n) => n.id));
  const filteredEdges = edges.filter(
    (e) => nodeIds.has(e.sourceNodeId) && nodeIds.has(e.targetNodeId)
  );

  // Fallback layout algorithm using topological ranking
  const nodeMap = new Map<string, { node: OverviewDiagramNode; inDegree: number; outEdges: string[] }>();
  filteredNodes.forEach((n) => {
    nodeMap.set(n.id, { node: n, inDegree: 0, outEdges: [] });
  });

  filteredEdges.forEach((e) => {
    const src = nodeMap.get(e.sourceNodeId);
    const tgt = nodeMap.get(e.targetNodeId);
    if (src && tgt) {
      src.outEdges.push(e.targetNodeId);
      tgt.inDegree++;
    }
  });

  // Calculate ranks (layers)
  const ranks = new Map<string, number>();
  let queue: string[] = [];

  // Nodes with 0 in-degree start at rank 0
  filteredNodes.forEach((n) => {
    const entry = nodeMap.get(n.id);
    if (entry && entry.inDegree === 0) {
      ranks.set(n.id, 0);
      queue.push(n.id);
    }
  });

  // If there are cycles, assign default rank 0 to nodes with no rank
  if (queue.length === 0 && filteredNodes.length > 0) {
    ranks.set(filteredNodes[0].id, 0);
    queue.push(filteredNodes[0].id);
  }

  // BFS to propagate ranks with cycle protection
  while (queue.length > 0) {
    const currId = queue.shift()!;
    const currRank = ranks.get(currId) || 0;
    const entry = nodeMap.get(currId);
    if (entry) {
      entry.outEdges.forEach((tgtId) => {
        const nextRank = Math.max(ranks.get(tgtId) || 0, currRank + 1);
        if (!ranks.has(tgtId)) {
          ranks.set(tgtId, nextRank);
          queue.push(tgtId);
        } else {
          // If already visited, update rank to the longest path but do not re-queue
          if (nextRank > ranks.get(tgtId)!) {
            ranks.set(tgtId, nextRank);
          }
        }
      });
    }
  }

  // Ensure all nodes have a rank
  filteredNodes.forEach((n) => {
    if (!ranks.has(n.id)) {
      ranks.set(n.id, 0);
    }
  });

  // Group nodes by rank
  const rankGroups = new Map<number, string[]>();
  ranks.forEach((rank, id) => {
    if (!rankGroups.has(rank)) {
      rankGroups.set(rank, []);
    }
    rankGroups.get(rank)!.push(id);
  });

  // Spacing variables
  const xSpacing = orientation === "left-to-right" ? 220 : 180;
  const ySpacing = orientation === "left-to-right" ? 110 : 150;

  const positionedNodes = filteredNodes.map((n) => {
    const rank = ranks.get(n.id) || 0;
    const siblingIds = rankGroups.get(rank) || [n.id];
    const siblingIndex = siblingIds.indexOf(n.id);
    const offset = (siblingIds.length - 1) / 2;

    let x = 0;
    let y = 0;

    if (orientation === "left-to-right") {
      x = rank * xSpacing + 50;
      y = (siblingIndex - offset) * ySpacing + 200;
    } else {
      x = (siblingIndex - offset) * xSpacing + 400;
      y = rank * ySpacing + 50;
    }

    // Apply manual overrides if preset
    if (n.manuallyPositioned && n.position) {
      x = n.position.x;
      y = n.position.y;
    }

    return {
      ...n,
      position: { x, y }
    };
  });

  return { nodes: positionedNodes };
}
