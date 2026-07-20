import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useScenarioSnippetStore, SnippetTabType } from "../store/useScenarioSnippetStore";

export function useSnippetUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    activeTab,
    selectedSnippetId,
    selectedVersion,
    selectedVariantId,
    fullscreen,
    setActiveTab,
    setSelectedSnippetId,
    setSelectedVersion,
    setSelectedVariantId,
    setFullscreen
  } = useScenarioSnippetStore();

  // 1. URL to Store sync
  useEffect(() => {
    const tab = searchParams.get("tab") as SnippetTabType | null;
    if (tab && tab !== activeTab) setActiveTab(tab);

    const snippet = searchParams.get("snippet");
    if (snippet && snippet !== selectedSnippetId) setSelectedSnippetId(snippet);

    const version = searchParams.get("version");
    if (version && version !== selectedVersion) setSelectedVersion(version);

    const variant = searchParams.get("variant");
    if (variant && variant !== selectedVariantId) setSelectedVariantId(variant);

    const fs = searchParams.get("fullscreen") === "true";
    if (fs !== fullscreen) setFullscreen(fs);
  }, [searchParams]);

  // 2. Store to URL sync
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTab && activeTab !== "resumen") params.set("tab", activeTab);
    if (selectedSnippetId) params.set("snippet", selectedSnippetId);
    if (selectedVersion && selectedVersion !== "0.1.0") params.set("version", selectedVersion);
    if (selectedVariantId) params.set("variant", selectedVariantId);
    if (fullscreen) params.set("fullscreen", "true");

    const queryString = params.toString();
    const currentQueryString = typeof window !== "undefined" ? window.location.search.substring(1) : "";

    if (queryString !== currentQueryString) {
      const targetUrl = queryString ? `/business-scenarios/snippets?${queryString}` : "/business-scenarios/snippets";
      router.replace(targetUrl);
    }
  }, [
    activeTab,
    selectedSnippetId,
    selectedVersion,
    selectedVariantId,
    fullscreen
  ]);
}
