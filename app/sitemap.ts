import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://authenticgemlab.com";
  const routes = [
    "",
    "/about",
    "/verify",
    "/testing/gold",
    "/testing/silver",
    "/testing/diamond",
    "/testing/gemstones",
    "/testing/rudraksha",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
