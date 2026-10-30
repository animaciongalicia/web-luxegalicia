import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "Google-Extended", "CCBot", "anthropic-ai", "ClaudeBot", "PerplexityBot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
