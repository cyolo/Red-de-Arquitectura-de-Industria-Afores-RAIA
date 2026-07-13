import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import PlannedModulePage from "../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Industry Reference Model - Planned",
  description: "Modelo integral de referencia de la arquitectura de la industria previsional.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("reference-model");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
