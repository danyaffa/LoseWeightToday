import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/wellness-evaluation`;

export const metadata: Metadata = {
  title: "Free Wellness Evaluation Melbourne & Australia | Lose Weight Today",
  description:
    "Book a complimentary wellness evaluation with Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne. Get personalised product and nutrition guidance.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free Wellness Evaluation Melbourne & Australia | Lose Weight Today",
    description:
      "Book a complimentary wellness evaluation with Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne.",
    url: pageUrl,
  },
};

const faqs = [
  ...defaultFaqs,
  {
    question: "Is the wellness evaluation medical advice?",
    answer:
      "No. This is general wellness guidance, not medical advice. Speak with a qualified healthcare professional before changing your diet, especially if you have a medical condition or take any medication.",
  },
];

const structuredData = buildLandingSchema({
  path: "/wellness-evaluation",
  pageName: "Free Wellness Evaluation Melbourne & Australia | Lose Weight Today",
  breadcrumbLabel: "Free Wellness Evaluation",
  faqs,
});

export default function WellnessEvaluationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Free Wellness Evaluation"
        h1="Free Wellness Evaluation Melbourne & Australia"
        intro="Book a complimentary wellness evaluation with Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne. We discuss your current routine, nutrition preferences and goals, then suggest Herbalife products that may suit your needs. This is general wellness guidance, not medical advice."
        trackingPrefix="wellness_evaluation"
        faqs={faqs}
      />
    </>
  );
}
