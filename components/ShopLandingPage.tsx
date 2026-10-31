import Link from "next/link";
import { TrackedExternalLink, TrackedInternalLink } from "@/components/TrackedLink";
import type { Faq } from "@/lib/landingSchema";

export const GOHERBALIFE_SHOP_URL =
  "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/699";

export const defaultFaqs: Faq[] = [
  {
    question: "Do you deliver across Australia?",
    answer:
      "Orders, payment and shipping are handled through the official GoHerbalife platform. Visit the delivery page or contact us for help before ordering.",
  },
  {
    question: "Are you Herbalife Independent Members?",
    answer:
      "Yes. Jaffa and Dan Leffler are Herbalife Independent Members based in Melbourne, Australia.",
  },
  {
    question: "Can I see current offers?",
    answer:
      "Current member offers and pricing are available after you log in to or create a GoHerbalife account.",
  },
];

export function ShopCta({
  ctaLabel = "Shop Herbalife Products",
  trackingLabel,
  variant = "solid",
}: {
  ctaLabel?: string;
  trackingLabel: string;
  variant?: "solid" | "outline";
}) {
  const className =
    variant === "solid"
      ? "inline-block bg-herbalife-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
      : "inline-block border-2 border-white hover:bg-white hover:text-herbalife-green text-white px-8 py-3 rounded-full font-semibold transition-colors";
  return (
    <TrackedExternalLink href={GOHERBALIFE_SHOP_URL} trackingLabel={trackingLabel} className={className}>
      {ctaLabel}
    </TrackedExternalLink>
  );
}

export default function ShopLandingPage({
  breadcrumbLabel,
  h1,
  intro,
  faqs = defaultFaqs,
  trackingPrefix,
  children,
}: {
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  faqs?: Faq[];
  trackingPrefix: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-green-100 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&rsaquo;</span>
            <span>{breadcrumbLabel}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-5">{h1}</h1>
          <p className="text-green-100 text-lg max-w-3xl mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ShopCta trackingLabel={`${trackingPrefix}_shop_herbalife_products`} variant="outline" />
            <TrackedInternalLink
              href="/contact"
              trackingLabel={`${trackingPrefix}_get_product_guidance`}
              className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get Product Guidance
            </TrackedInternalLink>
          </div>
        </div>
      </section>

      {children}

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6">How ordering works</h2>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>Browse the relevant Herbalife products or programs.</li>
            <li>Choose the products that suit your preferences and routine.</li>
            <li>Continue to the official GoHerbalife catalogue to view current availability and complete your order.</li>
            <li>Contact Jaffa or Dan if you would like personalised guidance.</li>
          </ol>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-herbalife-green text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Need help choosing?</h2>
          <p className="text-green-100 mb-6">
            Contact Jaffa or Dan for a complimentary wellness evaluation or product guidance.
          </p>
          <TrackedInternalLink
            href="/wellness-evaluation"
            trackingLabel={`${trackingPrefix}_book_wellness_evaluation`}
            className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Book a Free Wellness Evaluation
          </TrackedInternalLink>
        </div>
      </section>
    </>
  );
}
