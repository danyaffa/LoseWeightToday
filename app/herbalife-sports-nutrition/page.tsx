import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/herbalife-sports-nutrition`;

export const metadata: Metadata = {
  title: "Herbalife Sports Nutrition Australia | Energy, Hydration & Recovery",
  description:
    "Explore Herbalife sports nutrition products in Australia for training, hydration, energy and recovery support. Order through GoHerbalife with Melbourne Herbalife Independent Members.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Herbalife Sports Nutrition Australia | Energy, Hydration & Recovery",
    description:
      "Explore Herbalife sports nutrition products in Australia for training, hydration, energy and recovery support.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/herbalife-sports-nutrition",
  pageName: "Herbalife Sports Nutrition Australia | Energy, Hydration & Recovery",
  breadcrumbLabel: "Herbalife Sports Nutrition Australia",
  faqs: defaultFaqs,
});

export default function SportsNutritionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Herbalife Sports Nutrition Australia"
        h1="Herbalife Sports Nutrition Australia"
        intro="Herbalife sports nutrition products are designed for people with active lifestyles who want convenient nutritional support around training. Options may include hydration, energy and recovery-focused products. Lose Weight Today helps Australian customers choose suitable products and order through GoHerbalife."
        trackingPrefix="herbalife_sports_nutrition"
      />
    </>
  );
}
