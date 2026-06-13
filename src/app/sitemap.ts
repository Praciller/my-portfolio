import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const baseUrl = "https://pakon-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/resume",
    "/contact",
    ...projects.map((project) => `/projects/${project.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-13"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
