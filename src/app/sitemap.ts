import { MetadataRoute } from "next";
import { getServiceDomains } from "../domain/repositories/landscapeRepository";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raia.org.mx"; // Canonical domain placeholder
  const lastModified = new Date();

  // Static routes
  const staticRoutes = [
    "",
    "/metamodel",
    "/methodology",
    "/dashboard",
    "/releases",
    "/contribute",
    "/business-scenarios",
    "/service-landscape/value-chain",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service domains
  const serviceDomains = getServiceDomains();
  const dynamicRoutes = serviceDomains.map((sd) => ({
    url: `${baseUrl}/service-domains/${sd.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
