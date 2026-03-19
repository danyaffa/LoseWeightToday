import type { Metadata } from "next";
import Image from "next/image";
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

const images = [
  "site-image-2.webp",
  "site-image-3.gif",
  "site-image-4.webp",
  "site-image-5.webp",
  "site-image-6.webp",
  "site-image-7.webp",
  "site-image-8.webp",
  "site-image-9.webp",
  "site-image-10.webp",
  "site-image-11.webp",
  "site-image-12.webp",
  "site-image-13.webp",
  "site-image-14.webp",
];

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

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={`/before-after/${img}`}
                    alt={`Client transformation result ${i + 1}`}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
