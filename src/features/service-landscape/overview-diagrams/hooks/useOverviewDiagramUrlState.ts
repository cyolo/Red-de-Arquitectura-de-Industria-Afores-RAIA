import { useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";

export function useOverviewDiagramUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const {
    selectedDiagramId,
    selectedNodeId,
    detailLevel,
    filterTheme,
    filterStatus,
    fullscreen,
    showRelations,
    showLegend,
    setSelectedDiagramId,
    setSelectedNodeId,
    setDetailLevel,
    setFilterTheme,
    setFilterStatus,
    setFullscreen,
    setShowRelations,
    setShowLegend,
  } = useOverviewDiagramStore();

  const isUpdatingRef = useRef(false);

  // Sync URL to Store on mount & searchParams changes
  useEffect(() => {
    if (isUpdatingRef.current) return;

    const diagram = searchParams.get("diagram");
    if (diagram && diagram !== selectedDiagramId) {
      setSelectedDiagramId(diagram);
    }

    const selected = searchParams.get("selected");
    if (selected !== selectedNodeId) {
      setSelectedNodeId(selected);
    }

    const dLevel = searchParams.get("detailLevel");
    if (dLevel && (dLevel === "macro" || dLevel === "domain" || dLevel === "service-domain")) {
      setDetailLevel(dLevel);
    }

    const theme = searchParams.get("theme");
    if (theme !== filterTheme) {
      setFilterTheme(theme || null);
    }

    const status = searchParams.get("status");
    if (status !== filterStatus) {
      setFilterStatus(status || null);
    }

    const fs = searchParams.get("fullscreen");
    if (fs !== null && (fs === "true") !== fullscreen) {
      setFullscreen(fs === "true");
    }

    const rels = searchParams.get("showRelations");
    if (rels !== null && (rels === "true") !== showRelations) {
      setShowRelations(rels === "true");
    }

    const legend = searchParams.get("showLegend");
    if (legend !== null && (legend === "true") !== showLegend) {
      setShowLegend(legend === "true");
    }
  }, [searchParams]);

  // Sync Store to URL on state changes
  useEffect(() => {
    isUpdatingRef.current = true;
    const params = new URLSearchParams(searchParams.toString());

    params.set("diagram", selectedDiagramId);

    if (selectedNodeId) {
      params.set("selected", selectedNodeId);
    } else {
      params.delete("selected");
    }

    params.set("detailLevel", detailLevel);

    if (filterTheme) {
      params.set("theme", filterTheme);
    } else {
      params.delete("theme");
    }

    if (filterStatus) {
      params.set("status", filterStatus);
    } else {
      params.delete("status");
    }

    if (fullscreen) {
      params.set("fullscreen", "true");
    } else {
      params.delete("fullscreen");
    }

    params.set("showRelations", showRelations ? "true" : "false");
    params.set("showLegend", showLegend ? "true" : "false");

    const newQuery = params.toString();
    router.replace(`${pathname}?${newQuery}`, { scroll: false });

    // Allow searchParams useEffect to trigger next tick
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 100);
  }, [
    selectedDiagramId,
    selectedNodeId,
    detailLevel,
    filterTheme,
    filterStatus,
    fullscreen,
    showRelations,
    showLegend,
  ]);
}
export default useOverviewDiagramUrlState;
