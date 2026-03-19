import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight-Loss Programs – Personalised Coaching & Proven Plans",
  description:
    "Explore Herbalife weight management programs including Quickstart, Advanced, and Ultimate programs. Personalised coaching and proven nutrition plans in Melbourne.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/herbalife-programs" },
  openGraph: {
    title: "Weight-Loss Programs – Personalised Coaching & Proven Plans",
    description: "Explore Herbalife weight management programs. Personalised coaching and proven plans.",
    url: "https://www.loseweighttoday.com.au/herbalife-programs",
  },
};

const programs = [
  {
    name: "Quickstart Program",
    description: "The perfect entry point for your weight management journey. Includes Formula 1 shake, Herbal Tea Concentrate, and personalised meal plan.",
    features: ["Formula 1 Shake", "Herbal Tea Concentrate", "Personalised Meal Plan", "Coaching Support"],
    tag: "Most Popular",
  },
  {
    name: "Advanced Program",
    description: "Step up your results with enhanced nutrition support. Includes everything in Quickstart plus targeted supplements for better results.",
    features: ["Everything in Quickstart", "Cell-U-Loss Tablets", "Personalised Protein Powder", "Enhanced Coaching"],
    tag: "Better Results",
  },
  {
    name: "Ultimate Program",
    description: "Our most comprehensive weight management program for maximum results. Full nutrition support with premium product selection.",
    features: ["Everything in Advanced", "Total Control Tablets", "Snack Defence", "Premium Coaching Package"],
    tag: "Best Value",
  },
];

const flavours = ["French Vanilla", "Dutch Chocolate", "Cookies N' Cream", "Berry", "Mint Chocolate"];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Weight-Loss Programs
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Personalised coaching &amp; proven plans for sustainable weight management
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.name} className="bg-white rounded-xl border-2 border-gray-100 hover:border-herbalife-green transition-colors overflow-hidden">
                <div className="bg-herbalife-green text-white text-center py-2 text-sm font-semibold">
                  {program.tag}
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-bold text-xl text-gray-900 mb-3">{program.name}</h2>
                  <p className="text-gray-600 text-sm mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-herbalife-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-herbalife-green hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Flavours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Available Flavours</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {flavours.map((f) => (
              <span key={f} className="bg-white px-5 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get Personalised Advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
