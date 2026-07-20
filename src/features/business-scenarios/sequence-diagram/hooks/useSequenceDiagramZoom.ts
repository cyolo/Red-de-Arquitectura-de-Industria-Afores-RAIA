import { useEffect, useRef, useCallback } from "react";
import * as d3 from "d3-zoom";
import { select } from "d3-selection";

interface UseSequenceDiagramZoomProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  totalWidth: number;
  totalHeight: number;
  isFullscreen: boolean;
}

export function useSequenceDiagramZoom({
  svgRef,
  wrapperRef,
  totalWidth,
  totalHeight,
  isFullscreen
}: UseSequenceDiagramZoomProps) {
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const safeWidth = Math.max(totalWidth, 1);
  const safeHeight = Math.max(totalHeight, 1);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = select(svgRef.current);
    const g = svg.select("g.zoom-layer");

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.05, 5])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    zoomRef.current = zoom;
    svg.call(zoom as any);

    return () => {
      svg.on(".zoom", null);
    };
  }, [svgRef]);

  const fitDiagramToViewport = useCallback(() => {
    if (!svgRef.current || !wrapperRef.current || !zoomRef.current) return;

    const wrapperWidth = wrapperRef.current.clientWidth;
    const wrapperHeight = wrapperRef.current.clientHeight;

    if (wrapperWidth <= 0 || wrapperHeight <= 0) return;

    const horizontalPadding = 24;
    const topPadding = 24;
    const bottomPadding = 24;

    const availableWidth = Math.max(wrapperWidth - horizontalPadding * 2, 1);
    const availableHeight = Math.max(wrapperHeight - topPadding - bottomPadding, 1);

    // Calculate scale ratio to fit both dimensions
    const rawScale = Math.min(
      availableWidth / safeWidth,
      availableHeight / safeHeight,
      1
    );
    
    // Support very wide/tall diagrams with scale bounds from 0.08
    const targetScale = Math.max(0.08, rawScale * 0.96);

    // Center horizontally and set Y to fixed top padding
    const targetX = Math.max(
      horizontalPadding,
      (wrapperWidth - safeWidth * targetScale) / 2
    );
    const targetY = topPadding;

    select(svgRef.current)
      .transition()
      .duration(400)
      .call(
        zoomRef.current.transform as any,
        d3.zoomIdentity.translate(targetX, targetY).scale(targetScale)
      );
  }, [svgRef, wrapperRef, safeWidth, safeHeight]);

  // Recalculate layout on mount and when dimensions or fullscreen mode changes
  useEffect(() => {
    let frameId1: number;
    let frameId2: number;
    
    frameId1 = requestAnimationFrame(() => {
      frameId2 = requestAnimationFrame(() => {
        fitDiagramToViewport();
      });
    });

    return () => {
      cancelAnimationFrame(frameId1);
      if (frameId2) cancelAnimationFrame(frameId2);
    };
  }, [fitDiagramToViewport, safeWidth, safeHeight, isFullscreen]);

  // ResizeObserver for container resizing
  useEffect(() => {
    if (!wrapperRef.current) return;
    
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        fitDiagramToViewport();
      });
    });

    observer.observe(wrapperRef.current);
    
    return () => observer.disconnect();
  }, [wrapperRef, fitDiagramToViewport]);

  const zoomIn = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy as any, 1.3);
    }
  }, [svgRef]);

  const zoomOut = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy as any, 0.7);
    }
  }, [svgRef]);

  const resetZoom = useCallback(() => {
    if (svgRef.current && zoomRef.current && wrapperRef.current) {
      const wrapperWidth = wrapperRef.current.clientWidth;
      const targetX = (wrapperWidth - safeWidth) / 2;
      select(svgRef.current)
        .transition()
        .duration(400)
        .call(
          zoomRef.current.transform as any,
          d3.zoomIdentity.translate(targetX, 24).scale(1)
        );
    }
  }, [svgRef, wrapperRef, safeWidth]);

  return {
    zoomIn,
    zoomOut,
    fitDiagramToViewport,
    resetZoom
  };
}
