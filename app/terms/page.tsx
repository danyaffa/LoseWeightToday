import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for Lose Weight Today, operated by Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne, Australia.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/terms" },
  openGraph: {
    title: "Terms of Use – Lose Weight Today",
    description:
      "Terms of use for Lose Weight Today, operated by Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne, Australia.",
    url: "https://www.loseweighttoday.com.au/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold">Terms of Use</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-sm text-gray-500 mb-8">Last Updated: October 31, 2026</p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">About This Website</h2>
          <p className="text-gray-600 mb-4">
            loseweighttoday.com.au is operated by Leffler International Investments Pty Ltd
            (ABN: 90124089345), trading as Lose Weight Today. The site is run by Jaffa and Dan
            Leffler, Herbalife Independent Members based at 23 Salisbury St, Caulfield North,
            Melbourne VIC 3161, Australia. By using this website, you agree to these terms of use.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Not an Official Herbalife Website</h2>
          <p className="text-gray-600 mb-4">
            This is not an official Herbalife website. Orders are completed through the official
            GoHerbalife platform. Herbalife products are intended to support balanced nutrition and
            are not intended to diagnose, treat, cure, or prevent any disease.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Use of This Website</h2>
          <p className="text-gray-600 mb-4">
            This website provides information about Herbalife products and services offered by Jaffa
            and Dan Leffler, Herbalife Independent Members. It is provided for general informational
            purposes and does not constitute medical, financial or professional advice. Speak with a
            qualified healthcare professional before changing your diet, especially if you have a
            medical condition or take any medication.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Orders and Purchases</h2>
          <p className="text-gray-600 mb-4">
            Product orders, payment, shipping and fulfilment are handled through the official
            GoHerbalife platform, not directly by this website. Results vary depending on individual
            circumstances, diet and activity.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            The content on this website, excluding Herbalife trademarks and product imagery owned by
            Herbalife International, is owned by Leffler International Investments Pty Ltd. Herbalife
            and related trademarks are the property of Herbalife International, Inc. and are used with
            permission as part of an approved Herbalife Independent Member website.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            To the extent permitted by Australian law, Leffler International Investments Pty Ltd is
            not liable for any loss or damage arising from your use of this website or reliance on its
            content. Nothing in these terms excludes any consumer guarantee under the Australian
            Consumer Law that cannot lawfully be excluded.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Privacy</h2>
          <p className="text-gray-600 mb-4">
            Your use of this website is also governed by our{" "}
            <a href="/privacy-policy" className="text-herbalife-green hover:underline">
              Privacy Policy
            </a>
            , which explains how we collect, use and protect your personal information.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Changes to These Terms</h2>
          <p className="text-gray-600 mb-4">
            We may update these terms of use from time to time. Changes will be posted on this page.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you have any questions about these terms, please contact us:</p>
          <ul className="text-gray-600 mb-4 list-disc pl-6">
            <li>
              Email:{" "}
              <a href="mailto:leffleryd@gmail.com" className="text-herbalife-green hover:underline">
                leffleryd@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+61478965828" className="text-herbalife-green hover:underline">
                +61 478 965 828
              </a>
            </li>
            <li>Address: 23 Salisbury St, Caulfield North VIC 3161, Australia</li>
          </ul>
        </div>
      </section>
    </>
  );
}
