import type { Metadata } from "next";
import ShopLandingPage, { defaultFaqs } from "@/components/ShopLandingPage";
import { buildLandingSchema, siteUrl } from "@/lib/landingSchema";

const pageUrl = `${siteUrl}/herbalife-delivery-australia`;

export const metadata: Metadata = {
  title: "Herbalife Delivery Australia | Order Online | Lose Weight Today",
  description:
    "Information about ordering Herbalife products online for delivery across Australia through GoHerbalife, with support from Melbourne Herbalife Independent Members.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Herbalife Delivery Australia | Order Online | Lose Weight Today",
    description:
      "Information about ordering Herbalife products online for delivery across Australia through GoHerbalife.",
    url: pageUrl,
  },
};

const structuredData = buildLandingSchema({
  path: "/herbalife-delivery-australia",
  pageName: "Herbalife Delivery Australia | Order Online | Lose Weight Today",
  breadcrumbLabel: "Herbalife Delivery Australia",
  faqs: defaultFaqs,
});

export default function DeliveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ShopLandingPage
        breadcrumbLabel="Herbalife Delivery Australia"
        h1="Herbalife Delivery Australia"
        intro="Customers across Australia can order Herbalife products online through the official GoHerbalife platform. Lose Weight Today provides product guidance and support, while orders, payment, shipping and fulfilment are handled through GoHerbalife."
        trackingPrefix="herbalife_delivery_australia"
      />
    </>
  );
}
