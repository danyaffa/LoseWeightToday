import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/vitamins-and-supplements-australia`;

export const metadata: Metadata = {
  title: "Vitamins & Supplements Australia | Herbalife Nutrition Products",
  description:
    "Browse Herbalife vitamins, herbal teas, fibre and supplements in Australia with Herbalife Independent Members in Melbourne.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Vitamins & Supplements Australia | Herbalife Nutrition Products",
    description:
      "Browse Herbalife vitamins, herbal teas, fibre and supplements in Australia with Herbalife Independent Members in Melbourne.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/vitamins-and-supplements-australia",
  pageName: "Vitamins & Supplements Australia | Herbalife Nutrition Products",
  breadcrumbLabel: "Vitamins & Supplements Australia",
  faqs: defaultFaqs,
});

export default function VitaminsSupplementsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Vitamins & Supplements Australia"
        h1="Vitamins & Supplements Australia"
        intro="Herbalife vitamins and supplements can support a balanced daily nutrition routine. Lose Weight Today helps Australian customers explore Herbalife supplement options, including multivitamins, fibre products, herbal teas and targeted nutrition products, with ordering through the official GoHerbalife platform."
        trackingPrefix="vitamins_and_supplements_australia"
      />
    </>
  );
}
