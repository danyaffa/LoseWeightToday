import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Nutrition Products – Healthy Everyday Support",
  description:
    "Herbalife daily nutrition products including Formula 1 shake mixes, Formula 2 multivitamin, and everyday nutrition essentials. Shop online or visit us in Melbourne.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/herbalife-daily-nutrition" },
  openGraph: {
    title: "Daily Nutrition Products – Healthy Everyday Support",
    description: "Herbalife daily nutrition products including Formula 1 shake mixes and multivitamins.",
    url: "https://www.loseweighttoday.com.au/herbalife-daily-nutrition",
  },
};

const products = [
  {
    name: "Formula 1 Select Natural Vanilla",
    size: "750g",
    description: "Plant-based nutritional shake mix with essential vitamins, minerals, and fibre. Under 250 calories per serving.",
  },
  {
    name: "Formula 1 French Vanilla",
    size: "560g",
    description: "Classic Formula 1 nutritional shake mix in smooth French Vanilla flavour.",
  },
  {
    name: "Formula 1 Dutch Chocolate",
    size: "560g",
    description: "Rich and indulgent Dutch Chocolate Formula 1 nutritional shake mix.",
  },
  {
    name: "Formula 1 Mint Chocolate",
    size: "560g",
    description: "Refreshing Mint Chocolate Formula 1 nutritional shake mix.",
  },
  {
    name: "Formula 1 Cookies N' Cream",
    size: "560g",
    description: "Delicious Cookies N' Cream Formula 1 nutritional shake mix.",
  },
  {
    name: "Formula 1 Berry",
    size: "560g",
    description: "Fruity Berry-flavoured Formula 1 nutritional shake mix.",
  },
  {
    name: "Formula 2 Multivitamin Complex",
    size: "90 Tablets",
    description: "Daily multivitamin supplement with essential vitamins and minerals to support overall health.",
  },
];

export default function DailyNutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Daily Nutrition Products
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Healthy everyday support with Herbalife Formula 1 &amp; Formula 2
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-gray-100 hover:border-herbalife-green transition-colors overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-herbalife-green font-heading font-bold text-sm">{product.name}</span>
                    <p className="text-gray-500 text-xs mt-1">{product.size}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{product.size}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <a
                    href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-herbalife-green hover:bg-green-700 text-white py-2.5 rounded-full text-sm font-semibold transition-colors"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
