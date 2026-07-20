import { useEffect } from "react";

interface UseSequenceDiagramKeyboardProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  zoomIn: () => void;
  zoomOut: () => void;
  fitDiagramToViewport: () => void;
  resetZoom: () => void;
  toggleFullscreen: () => void;
  exitFullscreen: () => void;
  isFullscreen: boolean;
}

export function useSequenceDiagramKeyboard({
  svgRef,
  zoomIn,
  zoomOut,
  fitDiagramToViewport,
  resetZoom,
  toggleFullscreen,
  exitFullscreen,
  isFullscreen
}: UseSequenceDiagramKeyboardProps) {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not trigger if typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      // Check if focus is within our SVG wrapper or we are in fullscreen
      const isFocusedInside = svgRef.current?.parentElement?.contains(document.activeElement);
      
      if (!isFocusedInside && !isFullscreen) {
        return;
      }

      switch (e.key) {
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
        case "_":
          zoomOut();
          break;
        case "0":
          fitDiagramToViewport();
          break;
        case "1":
          resetZoom();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "Escape":
          if (isFullscreen) {
            exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [svgRef, zoomIn, zoomOut, fitDiagramToViewport, resetZoom, toggleFullscreen, exitFullscreen, isFullscreen]);

}
