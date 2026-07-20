import React from "react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";
import ControlRecordClientPage from "./ControlRecordClientPage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Control Record Model",
  description: "Definición del ciclo de vida y estado de los registros principales de control.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("control-record-model");
  if (!module) return notFound();
  return <ControlRecordClientPage />;
}
