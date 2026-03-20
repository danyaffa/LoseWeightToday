import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Opportunity – Become a Herbalife Independent Member",
  description:
    "Join Herbalife as an Independent Member. Enjoy discounted products, earn retail profit, and build a flexible wellness business with full mentorship from Dan & Jaffa in Melbourne.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/business-opportunity" },
  openGraph: {
    title: "Business Opportunity – Become a Herbalife Independent Member",
    description:
      "Join Herbalife as an Independent Member. Discounted products, retail profit, and a flexible wellness business with full mentorship.",
    url: "https://www.loseweighttoday.com.au/business-opportunity",
  },
};

export default function BusinessOpportunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
