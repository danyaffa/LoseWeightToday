import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loseweighttoday.com.au"),
  title: {
    default: "Lose Weight Today – Healthy Nutrition & Weight Management | Melbourne",
    template: "%s | Lose Weight Today",
  },
  description:
    "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching, nutrition plans & Herbalife products. Walk-in 7 days 9am-8pm. Call Jaffa 0478 965 828.",
  keywords: [
    "Herbalife",
    "weight loss",
    "Melbourne",
    "nutrition",
    "protein shakes",
    "weight management",
    "Herbalife distributor",
    "Caulfield North",
  ],
  authors: [{ name: "Dan & Jaffa Leffler" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.loseweighttoday.com.au",
    siteName: "Lose Weight Today - Herbalife AU",
    title: "Lose Weight Today – Healthy Nutrition & Weight Management",
    description:
      "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching & Herbalife products. Call 0478 965 828.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lose Weight Today – Healthy Nutrition & Weight Management",
    description:
      "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching & Herbalife products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.loseweighttoday.com.au",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lose Weight Today - Herbalife AU",
              description:
                "Herbalife Independent Distributor offering personalised weight-loss coaching and nutrition products in Melbourne.",
              url: "https://www.loseweighttoday.com.au",
              telephone: "+61478965828",
              email: "leffleryd@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "23 Salisbury Street",
                addressLocality: "Caulfield North",
                addressRegion: "VIC",
                postalCode: "3161",
                addressCountry: "AU",
              },
              openingHours: "Mo-Su 09:00-20:00",
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/Leffler.Dan.Yaffa",
                "https://t.me/YaffaDan",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
