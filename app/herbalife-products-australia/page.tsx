import type { Metadata } from "next";
import Link from "next/link";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema } from "@/lib/landingSchema";

const pageUrl = "https://www.loseweighttoday.com.au/herbalife-products-australia";

export const metadata: Metadata = {
  title: "Herbalife Products Australia | Buy Shakes, Protein & Vitamins",
  description:
    "Buy Herbalife products in Australia with Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne. Browse shakes, protein, vitamins and supplements.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Herbalife Products Australia | Buy Shakes, Protein & Vitamins",
    description:
      "Buy Herbalife products in Australia with Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne.",
    url: pageUrl,
  },
};

const categories = [
  {
    title: "Formula 1 Shakes",
    description: "Meal-replacement shakes available in a range of flavours.",
    href: "/herbalife-formula-1-shakes-australia",
  },
  {
    title: "Protein Products",
    description: "Protein shakes and supplements for everyday nutrition and active lifestyles.",
    href: "/protein-powder-australia",
  },
  {
    title: "Vitamins & Supplements",
    description: "Daily nutrition, fibre, herbal teas and targeted supplements.",
    href: "/vitamins-and-supplements-australia",
  },
  {
    title: "Weight Management",
    description: "Programs and products designed to support balanced nutrition goals.",
    href: "/herbalife-weight-management-programs",
  },
  {
    title: "Sports Nutrition",
    description: "Products for training, hydration, energy and recovery support.",
    href: "/herbalife-sports-nutrition",
  },
  {
    title: "Current Offers",
    description: "Log in or create a GoHerbalife account to view available member offers.",
    href: "/current-offers",
  },
];

const structuredData = buildLandingSchema({
  path: "/herbalife-products-australia",
  pageName: "Herbalife Products Australia | Buy Shakes, Protein & Vitamins",
  breadcrumbLabel: "Herbalife Products Australia",
  faqs: defaultFaqs,
});

export default function HerbalifeProductsAustraliaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Herbalife Products Australia"
        h1="Herbalife Products Australia"
        intro="Looking to buy Herbalife products in Australia? Lose Weight Today is operated by Jaffa and Dan Leffler, Herbalife Independent Members based in Melbourne. We help customers across Australia explore Herbalife shakes, protein products, vitamins, supplements and weight-management products through the official GoHerbalife platform."
        trackingPrefix="herbalife_products_australia"
      >
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shop by category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
                >
                  <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-herbalife-green transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ShopLandingPage>
    </>
  );
}
