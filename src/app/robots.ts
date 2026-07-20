import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const isProduction = process.env.NODE_ENV === "production" && !baseUrl.includes("localhost");

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : "",
      disallow: isProduction ? ["/api/", "/_next/"] : ["/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
