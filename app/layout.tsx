import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lose Weight Today – Healthy Nutrition & Weight Management",
  description: "Herbalife Independent Distributor Melbourne. Walk-in orders 7 days 9-8pm. Online orders 24/7. Contact Jaffa 0478 965 828.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
