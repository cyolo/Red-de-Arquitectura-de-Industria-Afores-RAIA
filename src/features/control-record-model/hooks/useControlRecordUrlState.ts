import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useControlRecordStore, CRMTabType } from "../store/useControlRecordStore";

export function useControlRecordUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    activeTab,
    selectedControlRecordId,
    selectedStateId,
    selectedTransitionId,
    simulationActive,
    setActiveTab,
    setSelectedControlRecordId,
    setSelectedStateId,
    setSelectedTransitionId,
    setSimulationActive
  } = useControlRecordStore();

  // 1. URL to Store sync
  useEffect(() => {
    const tab = searchParams.get("tab") as CRMTabType | null;
    if (tab) setActiveTab(tab);

    const controlRecord = searchParams.get("controlRecord");
    if (controlRecord) setSelectedControlRecordId(controlRecord);

    const state = searchParams.get("state");
    if (state) setSelectedStateId(state);

    const transition = searchParams.get("transition");
    if (transition) setSelectedTransitionId(transition);

    const simulation = searchParams.get("simulation");
    if (simulation) setSimulationActive(simulation === "true");
  }, [searchParams]);

  // 2. Store to URL sync
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTab && activeTab !== "resumen") params.set("tab", activeTab);
    if (selectedControlRecordId) params.set("controlRecord", selectedControlRecordId);
    if (selectedStateId) params.set("state", selectedStateId);
    if (selectedTransitionId) params.set("transition", selectedTransitionId);
    if (simulationActive) params.set("simulation", "true");

    const queryString = params.toString();
    const targetUrl = queryString ? `/control-record-model?${queryString}` : "/control-record-model";

    router.replace(targetUrl);
  }, [
    activeTab,
    selectedControlRecordId,
    selectedStateId,
    selectedTransitionId,
    simulationActive
  ]);
}
