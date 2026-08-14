import type { Metadata } from "next";
import Link from "next/link";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Herbalife Distributors Melbourne | Herbalife Products Australia",
  description:
    "Herbalife Independent Distributors in Melbourne. Contact Dan & Jaffa Leffler in Caulfield North, browse Herbalife products and order online Australia-wide.",
  alternates: { canonical: "https://www.loseweighttoday.com.au" },
  openGraph: {
    title: "Herbalife Distributors Melbourne | Lose Weight Today",
    description:
      "Melbourne Herbalife Independent Distributors based in Caulfield North, with local assistance and Australia-wide online ordering.",
    url: "https://www.loseweighttoday.com.au",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Herbalife Distributors Melbourne
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-5">
            Dan &amp; Jaffa Leffler are Herbalife Independent Distributors based in Caulfield North,
            Melbourne, with local contact and Australia-wide online ordering.
          </p>
          <Link
            href="/herbalife-distributors-melbourne"
            className="text-herbalife-green font-semibold hover:underline"
          >
            Herbalife Distributors Melbourne — location, contact &amp; FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
