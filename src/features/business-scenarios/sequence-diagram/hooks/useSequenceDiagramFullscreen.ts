import { useCallback, useEffect, useState } from "react";

export interface UseSequenceDiagramFullscreenResult {
  isFullscreen: boolean;
  isFullscreenSupported: boolean;
  enterFullscreen: () => Promise<void>;
  exitFullscreen: () => Promise<void>;
  toggleFullscreen: () => Promise<void>;
}

export function useSequenceDiagramFullscreen(
  containerRef: React.RefObject<HTMLElement | null>,
  onFullscreenChange?: () => void
): UseSequenceDiagramFullscreenResult {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isFullscreenSupported =
    typeof document !== "undefined" && Boolean(document.fullscreenEnabled);

  const enterFullscreen = useCallback(async () => {
    const element = containerRef.current;
    if (!element) return;

    if (element.requestFullscreen) {
      await element.requestFullscreen();
    }
  }, [containerRef]);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [enterFullscreen, exitFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = document.fullscreenElement === containerRef.current;
      setIsFullscreen(active);
      onFullscreenChange?.();
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [containerRef, onFullscreenChange]);

  return {
    isFullscreen,
    isFullscreenSupported,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen
  };
}
