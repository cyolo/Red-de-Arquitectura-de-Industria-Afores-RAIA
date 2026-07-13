import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import PlannedModulePage from "../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Regulatory Architecture - Planned",
  description: "Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("regulatory-architecture");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
