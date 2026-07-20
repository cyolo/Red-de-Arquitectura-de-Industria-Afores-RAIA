import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import InformationArchitectureClientPage from "./InformationArchitectureClientPage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Information Architecture",
  description: "Estructura semántica, linaje y propiedad de la información en el SAR.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("information-architecture");
  if (!module) return notFound();
  return <InformationArchitectureClientPage />;
}
