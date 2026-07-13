import React from "react";
import { getPortalModuleBySlug } from "../../../domain/repositories/portalRepository";
import PlannedModulePage from "../../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Service Landscape Matrix - Planned",
  description: "Vista matricial bidimensional configurable de los dominios de servicio.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("matrix");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
