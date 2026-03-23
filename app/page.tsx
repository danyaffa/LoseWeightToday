import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Lose Weight Today – Healthy Nutrition & Weight Management | Melbourne",
  description:
    "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching, nutrition plans & Herbalife products. Walk-in 7 days 9am-8pm. Call Jaffa 0478 965 828.",
  alternates: { canonical: "https://www.loseweighttoday.com.au" },
  openGraph: {
    title: "Lose Weight Today – Healthy Nutrition & Weight Management",
    description:
      "Herbalife Independent Distributor Melbourne. Personalised weight-loss coaching & Herbalife products.",
    url: "https://www.loseweighttoday.com.au",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
