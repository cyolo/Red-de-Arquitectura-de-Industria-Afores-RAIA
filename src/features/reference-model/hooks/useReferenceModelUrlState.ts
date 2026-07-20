import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useReferenceModelStore, RMTabType } from "../store/useReferenceModelStore";

export function useReferenceModelUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    activeTab,
    selectedViewpointId,
    selectedArtifactRef,
    detailLevel,
    depth,
    fullscreen,
    setActiveTab,
    setSelectedViewpointId,
    setSelectedArtifactRef,
    setDetailLevel,
    setDepth,
    setFullscreen
  } = useReferenceModelStore();

  // 1. URL to Store sync
  useEffect(() => {
    const tab = searchParams.get("tab") as RMTabType | null;
    if (tab && tab !== activeTab) setActiveTab(tab);

    const viewpoint = searchParams.get("viewpoint");
    if (viewpoint && viewpoint !== selectedViewpointId) setSelectedViewpointId(viewpoint);

    const selected = searchParams.get("selected");
    if (selected) {
      const parts = selected.split(":");
      if (parts.length === 2) {
        const type = parts[0] as any;
        const id = parts[1];
        if (
          !selectedArtifactRef ||
          selectedArtifactRef.artifactType !== type ||
          selectedArtifactRef.artifactId !== id
        ) {
          setSelectedArtifactRef({
            artifactType: type,
            artifactId: id
          });
        }
      }
    }

    const level = searchParams.get("detailLevel") as any;
    if (level && level !== detailLevel) setDetailLevel(level);

    const dStr = searchParams.get("depth");
    if (dStr) {
      const val = parseInt(dStr, 10);
      if (val !== depth) setDepth(val);
    }

    const fs = searchParams.get("fullscreen") === "true";
    if (fs !== fullscreen) setFullscreen(fs);
  }, [searchParams]);

  // 2. Store to URL sync
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTab && activeTab !== "resumen") params.set("tab", activeTab);
    if (selectedViewpointId) params.set("viewpoint", selectedViewpointId);
    
    if (selectedArtifactRef) {
      params.set("selected", `${selectedArtifactRef.artifactType}:${selectedArtifactRef.artifactId}`);
    }

    if (detailLevel && detailLevel !== "service") params.set("detailLevel", detailLevel);
    if (depth !== 2) params.set("depth", depth.toString());
    if (fullscreen) params.set("fullscreen", "true");

    const queryString = params.toString();
    const currentQueryString = typeof window !== "undefined" ? window.location.search.substring(1) : "";

    if (queryString !== currentQueryString) {
      const targetUrl = queryString ? `/reference-model?${queryString}` : "/reference-model";
      router.replace(targetUrl);
    }
  }, [
    activeTab,
    selectedViewpointId,
    selectedArtifactRef,
    detailLevel,
    depth,
    fullscreen
  ]);
}
