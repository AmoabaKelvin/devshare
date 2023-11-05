import type { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) => `https://www.devshare.dev${path}`;

// TODO: Add blog posts to the sitemap

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/app",
    "/app/auth",
    "/app/profile",
    "/app/snippets",
    "/app/snippets/new",
  ].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  return [...routes];
}
