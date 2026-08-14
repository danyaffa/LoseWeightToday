import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.loseweighttoday.com.au";
const pageUrl = `${siteUrl}/herbalife-distributors-melbourne`;

export const metadata: Metadata = {
  title: "Herbalife Distributors Melbourne | Dan & Jaffa Leffler",
  description:
    "Find Herbalife Independent Distributors in Melbourne. Dan & Jaffa Leffler are based in Caulfield North and provide local assistance plus Australia-wide online ordering.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: pageUrl,
    title: "Herbalife Distributors Melbourne | Dan & Jaffa Leffler",
    description:
      "Melbourne Herbalife Independent Distributors based in Caulfield North, with local assistance and Australia-wide online ordering.",
  },
};

const faqs = [
  {
    question: "Where can I find a Herbalife distributor in Melbourne?",
    answer:
      "Dan and Jaffa Leffler are Herbalife Independent Distributors based at 23 Salisbury Street, Caulfield North, Melbourne, Victoria 3161.",
  },
  {
    question: "Can I order Herbalife products online in Australia?",
    answer:
      "Yes. This website links to Dan and Jaffa's official Herbalife online shop for Australia-wide ordering.",
  },
  {
    question: "Can I speak with a local distributor before ordering?",
    answer:
      "Yes. You can call 0478 965 828 or use the contact page to speak with Dan and Jaffa.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Lose Weight Today - Herbalife Independent Distributor Melbourne",
      alternateName: "Dan & Jaffa Leffler Herbalife Independent Distributors",
      url: siteUrl,
      telephone: "+61478965828",
      email: "leffleryd@gmail.com",
      image: `${siteUrl}/Logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "23 Salisbury Street",
        addressLocality: "Caulfield North",
        addressRegion: "VIC",
        postalCode: "3161",
        addressCountry: "AU",
      },
      areaServed: [
        { "@type": "City", name: "Melbourne" },
        { "@type": "Country", name: "Australia" },
      ],
      founder: [
        { "@type": "Person", name: "Dan Leffler" },
        { "@type": "Person", name: "Jaffa Leffler" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Herbalife Distributors Melbourne | Dan & Jaffa Leffler",
      about: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Herbalife Distributors Melbourne",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function HerbalifeDistributorsMelbournePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <p className="text-green-100 font-semibold mb-3">Caulfield North · Melbourne · Victoria</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Herbalife Distributors Melbourne
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Dan &amp; Jaffa Leffler are Herbalife Independent Distributors based in Caulfield North,
            Melbourne, with local contact and Australia-wide online ordering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Contact Dan &amp; Jaffa
            </Link>
            <a
              href="tel:+61478965828"
              className="border-2 border-white hover:bg-white hover:text-herbalife-green text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              Call 0478 965 828
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-5">
              Local Herbalife Independent Distributors in Melbourne
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              If you are searching for a Herbalife distributor in Melbourne, you can contact Dan
              and Jaffa directly from their Caulfield North location.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Local customers can speak with a distributor before ordering, while customers across
              Australia can use the official Herbalife online shop linked from this website.
            </p>
            <Link href="/" className="text-herbalife-green font-semibold hover:underline">
              View Herbalife product categories →
            </Link>
          </div>

          <aside className="bg-gray-50 rounded-2xl border border-gray-200 p-7">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-5">Melbourne location</h2>
            <address className="not-italic text-gray-700 space-y-3">
              <p><strong>Dan &amp; Jaffa Leffler</strong><br />Herbalife Independent Distributors</p>
              <p>23 Salisbury Street<br />Caulfield North VIC 3161<br />Melbourne, Australia</p>
              <p><a className="text-herbalife-green font-semibold hover:underline" href="tel:+61478965828">0478 965 828</a></p>
              <p>9am – 8pm, 7 days a week</p>
            </address>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Herbalife Melbourne FAQs
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-herbalife-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Looking for Herbalife in Melbourne?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Dan &amp; Jaffa Leffler in Caulfield North or use the online store links on Lose Weight Today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
