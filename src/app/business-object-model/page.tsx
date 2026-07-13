import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import PlannedModulePage from "../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Business Object Model - Planned",
  description: "Catálogo y diccionario de los objetos de negocio estructurados de la industria.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("business-object-model");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
