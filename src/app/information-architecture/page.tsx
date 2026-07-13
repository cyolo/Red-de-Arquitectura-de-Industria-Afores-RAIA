import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import PlannedModulePage from "../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Information Architecture - Planned",
  description: "Estructura semántica, linaje y propiedad de la información en el SAR.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("information-architecture");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
