import type { MetadataRoute } from "next";
import { projectData } from "@/lib/projects-data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

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
