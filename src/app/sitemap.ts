import type { MetadataRoute } from "next";
import { projectData } from "@/lib/projects-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre-mim"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projectData.map((project) => ({
    url: `${siteUrl}${project.href}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
