import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import CapabilityMapClientPage from "./CapabilityMapClientPage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Business Capability Map",
  description: "Estructura jerárquica de capacidades de negocio de la industria previsional.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("capability-map");
  if (!module) return notFound();
  return <CapabilityMapClientPage />;
}
