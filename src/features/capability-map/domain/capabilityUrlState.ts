import { CapabilityFilters, CapabilityTab, CapabilityOverlay } from "../store/useCapabilityMapStore";

export function parseUrlParams(searchString: string) {
  const params = new URLSearchParams(searchString);
  const tab = (params.get("tab") || "resumen") as CapabilityTab;
  const overlay = (params.get("overlay") || "none") as CapabilityOverlay;
  const selectedCapabilityId = params.get("capability") || null;
  const isFullscreen = params.get("fullscreen") === "true";

  const filters: CapabilityFilters = {
    status: params.get("status") || "",
    level: params.get("level") || "",
    capabilityType: params.get("capabilityType") || "",
    criticality: params.get("criticality") || "",
    regime: params.get("regime") || "",
    search: params.get("search") || "",
    serviceDomainId: params.get("serviceDomain") || "",
    participantId: params.get("participant") || "",
    regulatorySource: params.get("regulatorySource") || ""
  };

  return { tab, overlay, selectedCapabilityId, isFullscreen, filters };
}

export function serializeUrlParams(
  tab: CapabilityTab,
  overlay: CapabilityOverlay,
  selectedCapabilityId: string | null,
  isFullscreen: boolean,
  filters: CapabilityFilters
): string {
  const params = new URLSearchParams();
  if (tab !== "resumen") params.set("tab", tab);
  if (overlay !== "none") params.set("overlay", overlay);
  if (selectedCapabilityId) params.set("capability", selectedCapabilityId);
  if (isFullscreen) params.set("fullscreen", "true");

  Object.entries(filters).forEach(([key, val]) => {
    if (val) {
      if (key === "serviceDomain") params.set("serviceDomain", val);
      else params.set(key, val);
    }
  });

  const query = params.toString();
  return query ? `?${query}` : "";
}
