import ScenarioSnippetsClientPage from "./ScenarioSnippetsClientPage";
import { getPortalModuleBySlug } from "../../../domain/repositories/portalRepository";
import { notFound } from "next/navigation";

export const metadata = {
  title: "RAIA Scenario Snippets",
  description: "Fragmentos reutilizables de interacción y lógica de servicio común.",
};

export default async function Page() {
  const module = getPortalModuleBySlug("snippets");
  if (!module) return notFound();
  return <ScenarioSnippetsClientPage />;
}
