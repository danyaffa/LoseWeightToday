import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/protein-powder-australia`;

export const metadata: Metadata = {
  title: "Protein Powder & Protein Shakes Australia | Herbalife Options",
  description:
    "Explore Herbalife protein products in Australia. Compare protein shakes and supplements for everyday nutrition, training and active lifestyles.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Protein Powder & Protein Shakes Australia | Herbalife Options",
    description:
      "Explore Herbalife protein products in Australia for everyday nutrition, training and active lifestyles.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/protein-powder-australia",
  pageName: "Protein Powder & Protein Shakes Australia | Herbalife Options",
  breadcrumbLabel: "Protein Powder & Protein Shakes Australia",
  faqs: defaultFaqs,
});

export default function ProteinPowderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Protein Powder & Protein Shakes Australia"
        h1="Protein Powder & Protein Shakes Australia"
        intro="Looking for protein powder or protein shakes in Australia? Herbalife offers protein products for people seeking convenient nutritional support alongside a balanced diet and active lifestyle. Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne, can help you compare available options and order through GoHerbalife."
        trackingPrefix="protein_powder_australia"
      />
    </>
  );
}
