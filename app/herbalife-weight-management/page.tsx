import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weight Management Products – Herbal Teas, Protein & Supplements",
  description:
    "Herbalife weight management products including Cell-U-Loss, Instant Herbal Beverage, Personalised Protein Powder, and more. Melbourne distributor.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/herbalife-weight-management" },
  openGraph: {
    title: "Weight Management Products – Herbal Teas, Protein & Supplements",
    description: "Herbalife weight management products including herbal teas and protein supplements.",
    url: "https://www.loseweighttoday.com.au/herbalife-weight-management",
  },
};

const products = [
  {
    name: "Cell-U-Loss",
    size: "90 Tablets",
    description: "Supports healthy elimination of water and promotes a healthy-looking skin appearance.",
  },
  {
    name: "Instant Herbal Beverage – Original",
    size: "102g",
    description: "Low-calorie herbal tea mix with green tea and black tea extracts for a refreshing energy boost.",
  },
  {
    name: "Instant Herbal Beverage – Peach",
    size: "102g",
    description: "Delicious peach-flavoured low-calorie herbal tea mix with natural tea extracts.",
  },
  {
    name: "Instant Herbal Beverage – Cinnamon",
    size: "102g",
    description: "Warming cinnamon-flavoured low-calorie herbal tea mix with natural tea extracts.",
  },
  {
    name: "Personalised Protein Powder",
    size: "360g",
    description: "Versatile protein powder that can be added to Formula 1 shakes or other foods to boost protein intake.",
  },
];

export default function WeightManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Weight Management Products
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Herbal teas, protein powders &amp; metabolism-boosting supplements
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
