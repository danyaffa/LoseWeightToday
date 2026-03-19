import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lose Weight Today (Leffler International Investments Pty Ltd). Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/privacy-policy" },
  openGraph: {
    title: "Privacy Policy – Lose Weight Today",
    description: "Privacy Policy for Lose Weight Today. Learn how we handle your personal information.",
    url: "https://www.loseweighttoday.com.au/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-sm text-gray-500 mb-8">Last Updated: September 4, 2023</p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Leffler International Investments Pty Ltd, located at 23 Salisbury St, Caulfield North VIC, Australia 3161, operates the website loseweighttoday.com.au. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We may collect personally identifiable information including email addresses, names, phone numbers, and addresses when you voluntarily provide this information to us. We also automatically gather usage data through cookies and tracking technologies, including browser activity and device information.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Use of Cookies</h2>
          <p className="text-gray-600 mb-4">
            Our website uses session and persistent cookies for essential services, policy acceptance, and functionality purposes. These help us provide a better browsing experience and understand how visitors use our site.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for purposes including service provision, account management, contract performance, customer contact, promotional communications, and business analytics.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Data Sharing</h2>
          <p className="text-gray-600 mb-4">
            Personal data may be shared with service providers, business partners, affiliates, and in connection with business transfers. User consent applies for other disclosures. We will never sell your personal information to third parties.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
          <p className="text-gray-600 mb-4">
            Personal data is retained only as long as necessary for the stated purposes or as required by legal obligations. Usage data has shorter retention periods unless needed for security improvements or legal requirements.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to request deletion or correction of your personal data. You can manage your information through your account settings or by contacting us directly.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600 mb-4">
            Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Security</h2>
          <p className="text-gray-600 mb-4">
            We take reasonable measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this privacy policy from time to time. Changes will be posted on this page and we will notify you via email where possible.
          </p>

          <h2 className="font-heading text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this privacy policy, please contact us:
          </p>
          <ul className="text-gray-600 mb-4 list-disc pl-6">
            <li>Email: <a href="mailto:leffleryd@gmail.com" className="text-herbalife-green hover:underline">leffleryd@gmail.com</a></li>
            <li>Phone: <a href="tel:+61478965828" className="text-herbalife-green hover:underline">+61 478 965 828</a></li>
            <li>Address: 23 Salisbury St, Caulfield North VIC 3161, Australia</li>
          </ul>
        </div>
      </section>
    </>
  );
}
