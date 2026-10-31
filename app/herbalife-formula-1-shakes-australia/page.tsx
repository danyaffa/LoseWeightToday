import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs, GOHERBALIFE_SHOP_URL } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/herbalife-formula-1-shakes-australia`;

export const metadata: Metadata = {
  title: "Herbalife Formula 1 Shakes Australia | Lose Weight Today",
  description:
    "Learn about Herbalife Formula 1 shakes in Australia, including flavours, usage and how to order through GoHerbalife with Melbourne-based Herbalife Independent Members.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Herbalife Formula 1 Shakes Australia | Lose Weight Today",
    description:
      "Learn about Herbalife Formula 1 shakes in Australia and how to order through GoHerbalife with Melbourne-based Herbalife Independent Members.",
    url: pageUrl,
  },
};

const productSchema = {
  "@type": "Product",
  name: "Herbalife Formula 1 Nutritional Shake Mix",
  description:
    "Herbalife Formula 1 is a meal-replacement shake product designed to support balanced everyday nutrition.",
  brand: { "@type": "Brand", name: "Herbalife" },
  url: pageUrl,
  offers: {
    "@type": "Offer",
    url: GOHERBALIFE_SHOP_URL,
    availability: "https://schema.org/InStock",
    priceCurrency: "AUD",
  },
};

const structuredData = buildLandingSchema({
  path: "/herbalife-formula-1-shakes-australia",
  pageName: "Herbalife Formula 1 Shakes Australia | Lose Weight Today",
  breadcrumbLabel: "Herbalife Formula 1 Shakes Australia",
  faqs: defaultFaqs,
  productSchema,
});

export default function Formula1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Herbalife Formula 1 Shakes Australia"
        h1="Herbalife Formula 1 Shakes Australia"
        intro="Herbalife Formula 1 shakes are meal-replacement shake products designed to support balanced everyday nutrition. Lose Weight Today helps customers in Melbourne and across Australia explore available Formula 1 flavours and order through the official GoHerbalife catalogue."
        trackingPrefix="herbalife_formula_1_shakes_australia"
      />
    </>
  );
}
