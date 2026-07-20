import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useInformationArchitectureStore, IATabType } from "../store/useInformationArchitectureStore";

export function useInformationArchitectureUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    activeTab,
    selectedDomainId,
    selectedConceptId,
    selectedObjectId,
    selectedAssetId,
    selectedDataProductId,
    selectedServiceDomainId,
    selectedScenarioId,
    selectedClassificationId,
    selectedOwnerId,
    selectedQualityDimension,
    selectedId,
    lineageDepth,
    setActiveTab,
    setSelectedDomainId,
    setSelectedConceptId,
    setSelectedObjectId,
    setSelectedAssetId,
    setSelectedDataProductId,
    setSelectedServiceDomainId,
    setSelectedScenarioId,
    setSelectedClassificationId,
    setSelectedOwnerId,
    setSelectedQualityDimension,
    setSelectedId,
    setLineageDepth
  } = useInformationArchitectureStore();

  // 1. Initial Sync from URL to Store
  useEffect(() => {
    const tab = searchParams.get("tab") as IATabType | null;
    if (tab) setActiveTab(tab);

    const domain = searchParams.get("domain");
    if (domain) setSelectedDomainId(domain);

    const concept = searchParams.get("concept");
    if (concept) setSelectedConceptId(concept);

    const object = searchParams.get("object");
    if (object) {
      setSelectedObjectId(object);
      setSelectedId(object);
    }

    const asset = searchParams.get("asset");
    if (asset) {
      setSelectedAssetId(asset);
      setSelectedId(asset);
    }

    const dataProduct = searchParams.get("dataProduct");
    if (dataProduct) {
      setSelectedDataProductId(dataProduct);
      setSelectedId(dataProduct);
    }

    const serviceDomain = searchParams.get("serviceDomain");
    if (serviceDomain) setSelectedServiceDomainId(serviceDomain);

    const scenario = searchParams.get("scenario");
    if (scenario) setSelectedScenarioId(scenario);

    const classification = searchParams.get("classification");
    if (classification) setSelectedClassificationId(classification);

    const owner = searchParams.get("owner");
    if (owner) setSelectedOwnerId(owner);

    const qDim = searchParams.get("qualityDimension");
    if (qDim) setSelectedQualityDimension(qDim);

    const sel = searchParams.get("selected");
    if (sel) setSelectedId(sel);

    const depth = searchParams.get("lineageDepth");
    if (depth) setLineageDepth(parseInt(depth, 10));
  }, [searchParams]);

  // 2. Sync from Store to URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTab && activeTab !== "resumen") params.set("tab", activeTab);
    if (selectedDomainId) params.set("domain", selectedDomainId);
    if (selectedConceptId) params.set("concept", selectedConceptId);
    if (selectedObjectId) params.set("object", selectedObjectId);
    if (selectedAssetId) params.set("asset", selectedAssetId);
    if (selectedDataProductId) params.set("dataProduct", selectedDataProductId);
    if (selectedServiceDomainId) params.set("serviceDomain", selectedServiceDomainId);
    if (selectedScenarioId) params.set("scenario", selectedScenarioId);
    if (selectedClassificationId) params.set("classification", selectedClassificationId);
    if (selectedOwnerId) params.set("owner", selectedOwnerId);
    if (selectedQualityDimension) params.set("qualityDimension", selectedQualityDimension);
    if (selectedId) params.set("selected", selectedId);
    if (lineageDepth !== 2) params.set("lineageDepth", lineageDepth.toString());

    const queryString = params.toString();
    const targetUrl = queryString ? `/information-architecture?${queryString}` : "/information-architecture";
    
    // Perform soft router replacement
    router.replace(targetUrl);
  }, [
    activeTab,
    selectedDomainId,
    selectedConceptId,
    selectedObjectId,
    selectedAssetId,
    selectedDataProductId,
    selectedServiceDomainId,
    selectedScenarioId,
    selectedClassificationId,
    selectedOwnerId,
    selectedQualityDimension,
    selectedId,
    lineageDepth
  ]);
}
