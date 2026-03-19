import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop All Herbalife Products – Nutrition, Weight Loss & Wellness",
  description:
    "Browse the full range of Herbalife nutrition products. Daily nutrition, weight management, sports nutrition, supplements, and outer nutrition. Melbourne distributor.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/shop" },
  openGraph: {
    title: "Shop All Herbalife Products – Nutrition, Weight Loss & Wellness",
    description: "Browse the full range of Herbalife nutrition products.",
    url: "https://www.loseweighttoday.com.au/shop",
  },
};

const categories = [
  {
    title: "Daily Nutrition",
    href: "/herbalife-daily-nutrition",
    description: "Formula 1 shakes, multivitamins & everyday nutrition essentials.",
    products: ["Formula 1 French Vanilla", "Formula 1 Dutch Chocolate", "Formula 1 Cookies N' Cream", "Formula 1 Mint Chocolate", "Formula 1 Berry", "Formula 2 Multivitamin"],
  },
  {
    title: "Weight Management",
    href: "/herbalife-weight-management",
    description: "Herbal teas, protein powders & metabolism-boosting supplements.",
    products: ["Cell-U-Loss 90 Tablets", "Instant Herbal Beverage – Original", "Instant Herbal Beverage – Peach", "Personalised Protein Powder"],
  },
  {
    title: "Programs",
    href: "/herbalife-programs",
    description: "Quickstart, Advanced & Ultimate weight management programs.",
    products: ["Quickstart Program", "Advanced Program", "Ultimate Program"],
  },
  {
    title: "Sports Nutrition",
    href: "/herbalife-sports-nutrition",
    description: "Herbalife24 sports range for energy, performance & recovery.",
    products: ["CR7 Drive Acai Berry", "Rebuild Strength Chocolate", "H24 Protein Bars"],
  },
  {
    title: "Supplements",
    href: "/hebalife-supplements",
    description: "Aloe concentrate, fibre complex & targeted nutrition.",
    products: ["Herbal Aloe Concentrate – Mango", "Active Fibre Complex – Apple"],
  },
  {
    title: "Outer Nutrition",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU",
    description: "Herbal Aloe skincare, cleansers, toners, serums & creams.",
    products: ["Herbal Aloe Body Wash", "SKIN Cleanser", "SKIN Toner", "SKIN Serum"],
    external: true,
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Shop All Products
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Browse our full range of Herbalife nutrition products
          </p>
          <a
            href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Register to Shop Online
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const Wrapper = cat.external ? "a" : Link;
              const wrapperProps = cat.external
                ? { href: cat.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: cat.href };
              return (
                <div key={cat.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-herbalife-green transition-colors">
                  <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">{cat.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                  <ul className="space-y-1 mb-4">
                    {cat.products.map((p) => (
                      <li key={p} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-herbalife-green rounded-full flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {cat.external ? (
                    <a
                      href={cat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-herbalife-green font-semibold text-sm hover:underline"
                    >
                      Browse {cat.title} &rarr;
                    </a>
                  ) : (
                    <Link href={cat.href} className="inline-block text-herbalife-green font-semibold text-sm hover:underline">
                      Browse {cat.title} &rarr;
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 p-8 bg-green-50 rounded-2xl">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us for a free wellness evaluation and personalised product recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-herbalife-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:0478965828"
                className="inline-block border-2 border-herbalife-green text-herbalife-green hover:bg-herbalife-green hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Call 0478 965 828
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
