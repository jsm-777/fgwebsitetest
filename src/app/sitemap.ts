import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://financialgroove.com";
  return allRoutes.map((route) => ({ url: `${base}/${route}`, lastModified: new Date("2026-10-21"), changeFrequency: route === "" ? "weekly" : route.startsWith("resources") ? "monthly" : "yearly", priority: route === "" ? 1 : route === "services" || route === "get-started" ? .9 : .7 }));
}
