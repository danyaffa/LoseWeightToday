import type { MetadataRoute } from "next";
import { LANDING_PAGES_LAST_UPDATED_ISO } from "@/lib/landingSchema";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loseweighttoday.com.au";
  const landingPagesLastModified = LANDING_PAGES_LAST_UPDATED_ISO;

  return [
    { url: baseUrl, lastModified: "2026-10-31", changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/herbalife-distributors-melbourne`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/before-and-after-results`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/business-opportunity`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/recipes`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: "2026-11-20", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: "2026-10-17", changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: "2026-10-31", changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/925764824480`, lastModified: "2026-08-10", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/herbalife-products-australia`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/herbalife-formula-1-shakes-australia`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/protein-powder-australia`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vitamins-and-supplements-australia`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/herbalife-weight-management-programs`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/herbalife-sports-nutrition`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/current-offers`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/herbalife-delivery-australia`, lastModified: landingPagesLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/wellness-evaluation`, lastModified: landingPagesLastModified, changeFrequency: "monthly", priority: 0.85 },
  ];
}
