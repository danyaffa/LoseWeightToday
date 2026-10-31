import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/current-offers`;

export const metadata: Metadata = {
  title: "Current Herbalife Offers Australia | Lose Weight Today",
  description:
    "See current Herbalife offers available through Lose Weight Today. Log in or create a GoHerbalife account to view available member pricing and promotions.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Current Herbalife Offers Australia | Lose Weight Today",
    description:
      "See current Herbalife offers available through Lose Weight Today, operated by Jaffa and Dan Leffler, Herbalife Independent Members.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/current-offers",
  pageName: "Current Herbalife Offers Australia | Lose Weight Today",
  breadcrumbLabel: "Current Herbalife Offers Australia",
  faqs: defaultFaqs,
});

export default function CurrentOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Current Herbalife Offers Australia"
        h1="Current Herbalife Offers Australia"
        intro="Current Herbalife offers, member pricing and promotions are available through the official GoHerbalife platform. Create an account or log in to view the deals currently available to you. Lose Weight Today is operated by Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne."
        trackingPrefix="current_offers"
      />
    </>
  );
}
