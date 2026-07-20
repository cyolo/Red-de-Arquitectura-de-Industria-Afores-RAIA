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

    if (isFullscreenSupported && element.requestFullscreen) {
      await element.requestFullscreen();
    } else {
      setIsFullscreen(true);
    }
  }, [containerRef, isFullscreenSupported]);

  const exitFullscreen = useCallback(async () => {
    if (isFullscreenSupported) {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } else {
      setIsFullscreen(false);
    }
  }, [isFullscreenSupported]);

  const toggleFullscreen = useCallback(async () => {
    if (isFullscreenSupported) {
      if (document.fullscreenElement) {
        await exitFullscreen();
      } else {
        await enterFullscreen();
      }
    } else {
      setIsFullscreen(prev => !prev);
    }
  }, [enterFullscreen, exitFullscreen, isFullscreenSupported]);

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
