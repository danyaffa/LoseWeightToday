import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Nutrition – Energy, Performance & Recovery",
  description:
    "Herbalife24 sports nutrition range for energy, performance and recovery. CR7 Drive, Rebuild Strength, Achieve Protein Bars and more.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/herbalife-sports-nutrition" },
  openGraph: {
    title: "Sports Nutrition – Energy, Performance & Recovery",
    description: "Herbalife24 sports nutrition range for energy, performance and recovery.",
    url: "https://www.loseweighttoday.com.au/herbalife-sports-nutrition",
  },
};

const products = [
  {
    name: "Herbalife24 CR7 Drive – Acai Berry",
    size: "810g",
    description: "Hypotonic sports drink developed in partnership with Cristiano Ronaldo. Supports hydration and fuels performance during workouts.",
  },
  {
    name: "Herbalife24 Rebuild Strength – Chocolate",
    size: "1010g",
    description: "Post-workout recovery shake with protein to support muscle rebuilding and recovery after intense exercise.",
  },
  {
    name: "H24 Achieve Protein Bar – Chocolate Chip Cookie Dough",
    size: "6 Bars",
    description: "Convenient protein bar for on-the-go nutrition. Great for pre or post workout fuel.",
  },
  {
    name: "H24 Achieve Protein Bar – Dark Chocolate Brownie",
    size: "6 Bars",
    description: "Delicious dark chocolate brownie protein bar packed with quality protein for active lifestyles.",
  },
];

export default function SportsNutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Sports Nutrition
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Energy, performance &amp; recovery with Herbalife24
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
