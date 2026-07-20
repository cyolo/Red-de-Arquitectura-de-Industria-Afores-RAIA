import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import PlannedModulePage from "../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Wireframes - Planned",
  description: "Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("wireframes");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
