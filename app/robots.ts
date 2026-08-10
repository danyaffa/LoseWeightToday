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
    ],
    sitemap: "https://www.loseweighttoday.com.au/sitemap.xml",
    host: "https://www.loseweighttoday.com.au",
  };
}
