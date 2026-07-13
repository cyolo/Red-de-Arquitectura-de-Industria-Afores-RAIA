import React from "react";
import { getPortalModuleBySlug } from "../../../domain/repositories/portalRepository";
import PlannedModulePage from "../../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Scenario Snippets - Planned",
  description: "Fragmentos reutilizables de interacción y lógica de servicio común.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("snippets");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
