import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supplements – Targeted Nutrition & Wellness Support",
  description:
    "Herbalife supplements including Herbal Aloe Concentrate, Active Fibre Complex, and targeted nutrition products for wellness support.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/hebalife-supplements" },
  openGraph: {
    title: "Supplements – Targeted Nutrition & Wellness Support",
    description: "Herbalife supplements including Herbal Aloe Concentrate and targeted nutrition products.",
    url: "https://www.loseweighttoday.com.au/hebalife-supplements",
  },
};

const products = [
  {
    name: "Herbal Aloe Concentrate – Mango",
    size: "473ml",
    description: "Refreshing mango-flavoured aloe drink to support healthy digestion. Mix with water for a tasty daily beverage.",
  },
  {
    name: "Active Fibre Complex – Apple",
    size: "210g",
    description: "Apple-flavoured fibre supplement to support digestive health and help you meet your daily fibre needs.",
  },
];

export default function SupplementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Supplements
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Targeted nutrition &amp; wellness support
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
