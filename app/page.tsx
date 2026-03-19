import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lose Weight Today – Healthy Nutrition & Weight Management | Melbourne",
  description:
    "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching, nutrition plans & Herbalife products. Walk-in 7 days 9am-8pm. Call Jaffa 0478 965 828.",
  alternates: { canonical: "https://www.loseweighttoday.com.au" },
  openGraph: {
    title: "Lose Weight Today – Healthy Nutrition & Weight Management",
    description:
      "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching & Herbalife products.",
    url: "https://www.loseweighttoday.com.au",
  },
};

const productCategories = [
  {
    title: "Daily Nutrition",
    description: "Formula 1 shakes, multivitamins & everyday nutrition essentials.",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3201",
    icon: "🥤",
  },
  {
    title: "Programs",
    description: "Quickstart, Advanced & Ultimate weight management programs.",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/699",
    icon: "📋",
  },
  {
    title: "Weight Management",
    description: "Herbal teas, protein powders & metabolism-boosting supplements.",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3223",
    icon: "⚖️",
  },
  {
    title: "Sports Nutrition",
    description: "Herbalife24 sports range for energy, performance & recovery.",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3325",
    icon: "🏃",
  },
  {
    title: "Supplements",
    description: "Aloe concentrate, fibre complex & targeted nutrition.",
    href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3222",
    icon: "💊",
  },
];

const topSellers = [
  { name: "Formula 1 French Vanilla", description: "Nutritional Shake Mix 560g" },
  { name: "Formula 1 Dutch Chocolate", description: "Nutritional Shake Mix 560g" },
  { name: "Quickstart Program", description: "Complete weight management starter kit" },
  { name: "Cell-U-Loss", description: "90 Tablets for water balance support" },
  { name: "Instant Herbal Beverage", description: "Low-calorie tea mix – Original" },
  { name: "Liftoff Energy", description: "Effervescent energy supplement" },
];

const whyHerbalife = [
  { title: "Global Leader", description: "Herbalife has been a global nutrition leader for over 40 years, operating in 90+ countries." },
  { title: "Science-Backed", description: "Products developed with input from leading scientists and nutrition experts worldwide." },
  { title: "4.8M Shakes Daily", description: "Over 4.8 million Herbalife shakes are consumed every day around the world." },
  { title: "Personalised Coaching", description: "Get a free wellness evaluation and personalised nutrition plan from your local distributor." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-herbalife-green to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <p className="text-herbalife-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Herbalife Independent Distributor – Melbourne
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Journey to a<br />
            <span className="text-herbalife-orange">Healthier You</span> Starts Here
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mb-8">
            Personalised weight-loss coaching, proven Herbalife nutrition products, and ongoing
            support from Dan &amp; Jaffa Leffler. Walk-in or shop online — 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Start Your Journey
            </Link>
            <a
              href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-herbalife-green text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Shop Products
            </a>
          </div>
        </div>
      </section>

      {/* Protein & Weight Loss Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12 border border-green-100">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-herbalife-green mb-4">
                Protein &amp; Weight Loss
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Consuming more protein may help protect against muscle loss during weight management.
                Our Herbalife protein nutrition products are designed to support healthy weight management
                while helping you maintain lean muscle mass.
              </p>
              <Link
                href="/herbalife-daily-nutrition"
                className="inline-block bg-herbalife-green hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Explore Nutrition Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality Herbalife nutrition products for every aspect of your health and wellness journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-herbalife-green transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm">{cat.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Top Sellers
            </h2>
            <p className="text-gray-600 text-lg">
              The most popular Herbalife products loved by our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSellers.map((product) => (
              <div
                key={product.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-herbalife-green transition-colors"
              >
                <div className="w-full h-40 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-herbalife-green font-heading font-bold text-sm text-center px-4">
                    {product.name}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </section>

      {/* Why Herbalife */}
      <section className="py-16 bg-herbalife-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Herbalife Nutrition?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHerbalife.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be Your Own Boss */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-herbalife-orange to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Be Your Own Boss
              </h2>
              <p className="text-lg text-orange-100 mb-6">
                Join us as a Herbalife Independent Distributor. Enjoy discounted products, earn retail
                profit, and build a flexible business around your lifestyle. 90-day money-back guarantee
                on membership.
              </p>
              <Link
                href="/business-opportunity"
                className="inline-block bg-white text-herbalife-orange hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Standard / Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Gold Standard Commitment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Low Startup Cost</h3>
              <p className="text-gray-600 text-sm">
                Start your Herbalife business with a low-cost membership pack. No large upfront investment required.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Full refund policy on products and a 90-day money-back guarantee on your membership if you change your mind.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Full Support</h3>
              <p className="text-gray-600 text-sm">
                Personalised plans, meal plans, training videos, and ongoing coaching from Dan &amp; Jaffa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today for a free wellness evaluation and personalised nutrition plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-herbalife-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:0478965828"
              className="border-2 border-herbalife-green text-herbalife-green hover:bg-herbalife-green hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Call 0478 965 828
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
