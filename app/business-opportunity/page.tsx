import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Opportunity – Become a Wellness & Nutrition Coach",
  description:
    "Join Herbalife as an Independent Distributor. Earn income, enjoy discounted products, and build a flexible wellness business. 90-day money-back guarantee on membership.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/business-opportunity" },
  openGraph: {
    title: "Business Opportunity – Become a Wellness & Nutrition Coach",
    description: "Join Herbalife as an Independent Distributor. Build a flexible wellness business.",
    url: "https://www.loseweighttoday.com.au/business-opportunity",
  },
};

const benefits = [
  {
    title: "Discounted Products",
    description: "Purchase Herbalife products at discounted prices for your own personal use.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Retail Profit",
    description: "Earn retail profit by selling Herbalife products directly to your customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Commission & Bonuses",
    description: "Earn commission and bonuses by building your team and helping others succeed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "No Minimum Orders",
    description: "No minimum spending requirements. Purchase products only when you want to.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Mentorship & Training",
    description: "Receive full mentorship and training from experienced distributors Dan & Jaffa.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "90-Day Money Back",
    description: "90-day money-back guarantee on your membership if you change your mind.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function BusinessOpportunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Business Opportunity
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Become a Wellness &amp; Nutrition Coach with Herbalife
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Why Become a Herbalife Member?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of independent distributors worldwide and start building your own wellness business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-herbalife-green mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Pack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Herbalife Member Starter Pack
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Your membership pack includes a protein shake canister, shaker, spoon, and digital product catalogues
                to get you started on your journey.
              </p>
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-herbalife-green text-lg mb-3">What&apos;s Included:</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formula 1 Protein Shake Canister
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Herbalife Shaker &amp; Spoon
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital Product Catalogues
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full Mentorship &amp; Training Support
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Join Our Team Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
