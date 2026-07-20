import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import BusinessObjectClientPage from "./BusinessObjectClientPage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Business Object Model",
  description: "Catálogo y diccionario de los objetos de negocio estructurados de la industria.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("business-object-model");
  if (!module) return notFound();
  return <BusinessObjectClientPage />;
}
