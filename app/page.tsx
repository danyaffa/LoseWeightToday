"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/before-and-after-results">Before and After Results</Link>
      <Link href="/business-opportunity">Business Opportunity</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/herbalife-programs">Programs</Link>
      <Link href="/herbalife-daily-nutrition">Daily Nutrition</Link>
      <Link href="/herbalife-weight-management">Weight Management</Link>
      <Link href="/herbalife-sports-nutrition">Sports Nutrition</Link>
      <Link href="/hebalife-supplements">Supplements</Link>
      <Link href="/shop">Shop All</Link>
      <a href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU" target="_blank">Register to Shop</a>
    </nav>
  );
}
