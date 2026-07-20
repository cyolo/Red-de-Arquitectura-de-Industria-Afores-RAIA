import React from "react";
import { getPortalModuleBySlug } from "../../../domain/repositories/portalRepository";
import PlannedModulePage from "../../../components/layout/PlannedModulePage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Capability Views - Planned",
  description: "Proyecciones específicas de capacidades de negocio filtradas por participante o regulación.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("capability-views");
  if (!module) return notFound();
  return <PlannedModulePage module={module} />;
}
