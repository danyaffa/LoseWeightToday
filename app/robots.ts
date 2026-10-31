import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "OAI-AdsBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "DuckAssistBot",
          "Amazonbot",
          "Meta-ExternalAgent",
          "cohere-ai",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.loseweighttoday.com.au/sitemap.xml",
    host: "https://www.loseweighttoday.com.au",
  };
}
