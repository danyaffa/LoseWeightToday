import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Lose Weight Today – Herbalife Products Australia | Independent Distributor Melbourne",
  description:
    "Herbalife Independent Distributor in Melbourne. Shop Herbalife products Australia-wide, get personalised weight-loss coaching, nutrition plans & protein support. Walk-in 7 days 9am-8pm. Call Jaffa 0478 965 828.",
  alternates: { canonical: "https://www.loseweighttoday.com.au" },
  openGraph: {
    title: "Lose Weight Today – Herbalife Products Australia | Independent Distributor Melbourne",
    description:
      "Herbalife Independent Distributor in Melbourne. Herbalife products Australia-wide, personalised weight-loss coaching & protein support.",
    url: "https://www.loseweighttoday.com.au",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
