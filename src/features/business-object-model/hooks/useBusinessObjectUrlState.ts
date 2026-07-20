import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBusinessObjectStore, BOMTabType } from "../store/useBusinessObjectStore";

export function useBusinessObjectUrlState() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    activeTab,
    selectedObjectId,
    selectedAttributeId,
    selectedRelationshipId,
    detailLevel,
    setActiveTab,
    setSelectedObjectId,
    setSelectedAttributeId,
    setSelectedRelationshipId,
    setDetailLevel
  } = useBusinessObjectStore();

  // 1. URL to Store sync
  useEffect(() => {
    const tab = searchParams.get("tab") as BOMTabType | null;
    if (tab) setActiveTab(tab);

    const object = searchParams.get("object");
    if (object) setSelectedObjectId(object);

    const attribute = searchParams.get("attribute");
    if (attribute) setSelectedAttributeId(attribute);

    const relationship = searchParams.get("relationship");
    if (relationship) setSelectedRelationshipId(relationship);

    const level = searchParams.get("detailLevel") as "domain" | "object" | "attribute" | null;
    if (level) setDetailLevel(level);
  }, [searchParams]);

  // 2. Store to URL sync
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTab && activeTab !== "resumen") params.set("tab", activeTab);
    if (selectedObjectId) params.set("object", selectedObjectId);
    if (selectedAttributeId) params.set("attribute", selectedAttributeId);
    if (selectedRelationshipId) params.set("relationship", selectedRelationshipId);
    if (detailLevel && detailLevel !== "object") params.set("detailLevel", detailLevel);

    const queryString = params.toString();
    const targetUrl = queryString ? `/business-object-model?${queryString}` : "/business-object-model";

    router.replace(targetUrl);
  }, [
    activeTab,
    selectedObjectId,
    selectedAttributeId,
    selectedRelationshipId,
    detailLevel
  ]);
}
