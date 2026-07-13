import { MetadataRoute } from "next";
import { getServiceDomains } from "../domain/repositories/landscapeRepository";
import { getPortalModules } from "../domain/repositories/portalRepository";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // Dynamic modules from portal-modules
  const modules = getPortalModules();
  const moduleRoutes = modules.map((mod) => ({
    url: `${baseUrl}${mod.route}`,
    lastModified: new Date(mod.updatedAt),
    changeFrequency: "weekly" as const,
    priority: mod.route === "/" ? 1.0 : 0.8,
  }));

  // Dynamic service domains
  const serviceDomains = getServiceDomains();
  const domainRoutes = serviceDomains.map((sd) => ({
    url: `${baseUrl}/service-domains/${sd.slug}`,
    lastModified: new Date(sd.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...moduleRoutes, ...domainRoutes];
}
