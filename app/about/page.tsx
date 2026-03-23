import type { Metadata } from "next";
import { TrackedInternalLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "About Jaffa & Dan Leffler – Senior Executive Presidents 15K",
  description:
    "Meet Jaffa & Dan Leffler — Independent Herbalife Members since 1993, Senior Executive Presidents 15K. Passionate about helping people with health, energy, and lifestyle goals in Melbourne.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/about" },
  openGraph: {
    title: "About Jaffa & Dan Leffler – Senior Executive Presidents 15K",
    description:
      "Meet Jaffa & Dan Leffler — Independent Herbalife Members since 1993. Helping people achieve health, energy, and lifestyle goals.",
    url: "https://www.loseweighttoday.com.au/about",
  },
};

const milestones = [
  { year: "1993", text: "Became Independent Herbalife Members" },
  { year: "2000+", text: "Achieved Senior Executive Presidents 15K status" },
  { year: "30+", text: "Years of experience in wellness and nutrition" },
  { year: "1000s", text: "Of customers helped on their health journey" },
];

const services = [
  {
    title: "World-Class Nutrition",
    description:
      "Improve your wellness with Herbalife's science-backed nutrition products, personalised to your health goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "#1 Protein for GLP-1",
    description:
      "Add the #1 Protein Shakes in the world as support for your GLP-1 injections — designed to help maintain muscle and energy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Home-Based Business",
    description:
      "Build a rewarding home-based business with Herbalife — we guide and support you every step of the way.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Passion",
    description: "We are genuinely passionate about helping people look and feel their best.",
  },
  {
    title: "Experience",
    description: "Over 30 years of hands-on experience in wellness, nutrition, and coaching.",
  },
  {
    title: "Support",
    description: "We are here to guide and support you every step of the way on your journey.",
  },
  {
    title: "Results",
    description: "Our track record speaks for itself — real results for real people.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Jaffa &amp; Dan Leffler — Independent Herbalife Members since 1993,
            Senior Executive Presidents 15K
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are Jaffa &amp; Dan Leffler — Independent Herbalife Members
              since 1993 and Senior Executive Presidents 15K. For over three
              decades, we have been passionate about helping people achieve their
              health, energy, and lifestyle goals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Whether you want to improve your wellness with world-class
              nutrition, add the #1 Protein Shakes in the world as support for
              your GLP-1 injections, or build a rewarding home-based business,
              we are here to guide and support you every step of the way.
            </p>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="text-center bg-green-50 rounded-xl p-6 border border-green-100"
              >
                <div className="text-3xl font-heading font-bold text-herbalife-green mb-2">
                  {m.year}
                </div>
                <p className="text-gray-600 text-sm">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            How We Can Help You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-herbalife-green rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100"
              >
                <h3 className="font-heading font-bold text-lg text-herbalife-green mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-herbalife-green to-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Whether it&apos;s weight management, better nutrition, or a business
            opportunity — we&apos;re here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedInternalLink
              href="/contact"
              className="bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg"
              trackingLabel="about_contact_us"
            >
              Contact Us
            </TrackedInternalLink>
            <TrackedInternalLink
              href="/business-opportunity"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg border border-white/30"
              trackingLabel="about_explore_business"
            >
              Explore the Business
            </TrackedInternalLink>
          </div>
        </div>
      </section>
    </>
  );
}
