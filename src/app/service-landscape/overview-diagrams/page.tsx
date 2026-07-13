import React from "react";
import { getPortalModuleBySlug } from "../../../domain/repositories/portalRepository";
import PlannedModulePage from "../../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Service Landscape Diagrams - Planned",
  description: "Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("overview-diagrams");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
