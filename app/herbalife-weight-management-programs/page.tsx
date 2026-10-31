import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/herbalife-weight-management-programs`;

export const metadata: Metadata = {
  title: "Herbalife Weight Management Programs Australia | Lose Weight Today",
  description:
    "Explore Herbalife weight-management programs in Australia with Herbalife Independent Members in Melbourne. Learn how programs work and order through GoHerbalife.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Herbalife Weight Management Programs Australia | Lose Weight Today",
    description:
      "Explore Herbalife weight-management programs in Australia with Herbalife Independent Members in Melbourne.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/herbalife-weight-management-programs",
  pageName: "Herbalife Weight Management Programs Australia | Lose Weight Today",
  breadcrumbLabel: "Herbalife Weight Management Programs Australia",
  faqs: defaultFaqs,
});

export default function WeightManagementProgramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Herbalife Weight Management Programs Australia"
        h1="Herbalife Weight Management Programs Australia"
        intro="Herbalife weight-management programs combine nutrition products with guidance to support balanced eating habits and personal wellness goals. Lose Weight Today provides product information and support for customers in Melbourne and across Australia. Results vary and depend on individual circumstances, diet and activity levels."
        trackingPrefix="herbalife_weight_management_programs"
      />
    </>
  );
}
