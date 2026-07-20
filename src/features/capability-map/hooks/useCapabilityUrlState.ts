import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCapabilityMapStore, CapabilityTab, CapabilityOverlay, CapabilityFilters } from "../store/useCapabilityMapStore";
import { parseUrlParams, serializeUrlParams } from "../domain/capabilityUrlState";

export function useCapabilityUrlState() {
  const router = useRouter();
  const pathname = usePathname();

  const {
    selectedCapabilityId,
    activeTab,
    activeOverlay,
    filters,
    isFullscreen,
    setSelectedCapabilityId,
    setActiveTab,
    setActiveOverlay,
    setFilters,
    setIsFullscreen
  } = useCapabilityMapStore();

  const isInitialSync = useRef(true);

  // Sync from URL to Store on mount & query changes
  useEffect(() => {
    const searchString = typeof window !== "undefined" ? window.location.search : "";
    const parsed = parseUrlParams(searchString);

    if (isInitialSync.current) {
      if (parsed.selectedCapabilityId) setSelectedCapabilityId(parsed.selectedCapabilityId);
      if (parsed.tab) setActiveTab(parsed.tab);
      if (parsed.overlay) setActiveOverlay(parsed.overlay);
      if (parsed.isFullscreen) setIsFullscreen(parsed.isFullscreen);
      setFilters(parsed.filters);
      isInitialSync.current = false;
    }
  }, [setSelectedCapabilityId, setActiveTab, setActiveOverlay, setIsFullscreen, setFilters]);

  // Sync from Store to URL
  useEffect(() => {
    if (isInitialSync.current) return;

    const newQuery = serializeUrlParams(activeTab, activeOverlay, selectedCapabilityId, isFullscreen, filters);
    const currentQuery = typeof window !== "undefined" ? window.location.search : "";

    if (newQuery !== currentQuery) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
    }
  }, [activeTab, activeOverlay, selectedCapabilityId, isFullscreen, filters, pathname, router]);
}
