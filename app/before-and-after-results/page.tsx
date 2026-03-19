import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before & After Weight-Loss Results – Real Client Transformations",
  description:
    "See real before and after weight-loss results from our Herbalife nutrition clients in Melbourne. Personalised coaching and proven plans deliver real results.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/before-and-after-results" },
  openGraph: {
    title: "Before & After Weight-Loss Results – Real Client Transformations",
    description: "See real before and after weight-loss results from our Herbalife nutrition clients.",
    url: "https://www.loseweighttoday.com.au/before-and-after-results",
  },
};

export default function BeforeAfterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Before &amp; After Weight-Loss Results
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Real client transformations achieved through personalised Herbalife nutrition coaching with Dan &amp; Jaffa.
          </p>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our clients achieve lasting results through a combination of Herbalife nutrition products,
              personalised meal plans, and ongoing coaching support. These transformations represent real
              people who committed to their health journey.
            </p>
          </div>

          {/* Transformation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Weight Management Program", result: "Achieved their goal weight through consistent nutrition and coaching" },
              { label: "Quickstart Program", result: "Kickstarted their weight-loss journey with visible results" },
              { label: "Personalised Coaching", result: "Transformed their lifestyle with ongoing support and guidance" },
              { label: "Formula 1 Shake Plan", result: "Balanced nutrition helped achieve sustainable weight loss" },
              { label: "Ultimate Program", result: "Comprehensive program delivered outstanding transformation" },
              { label: "Advanced Program", result: "Stepped up their journey with enhanced nutrition support" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-herbalife-green mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm text-herbalife-green font-semibold">Client Transformation</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-green-50 rounded-2xl">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-gray-600 mb-6">
              Get started with a free wellness evaluation and personalised nutrition plan.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-herbalife-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
