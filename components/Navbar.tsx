"use client";
import Link from "next/link";
import { useState } from "react";

const productLinks = [
  { href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/699", label: "Programs", external: true },
  { href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3201", label: "Daily Nutrition", external: true },
  { href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3223", label: "Weight Management", external: true },
  { href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3325", label: "Sports Nutrition", external: true },
  { href: "https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3222", label: "Supplements", external: true },
];

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/before-and-after-results", label: "Before and After Results" },
  { href: "/business-opportunity", label: "Business - Opportunity" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-herbalife-green text-white text-center text-sm py-1.5 px-4">
        <span>Herbalife Independent Distributor — Dan &amp; Jaffa Leffler | Call{" "}
          <a href="tel:0478965828" className="underline font-semibold">0478 965 828</a>
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-herbalife-green font-heading font-bold text-xl leading-tight">Lose Weight Today</span>
            <span className="text-xs text-gray-500">Herbalife AU</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-herbalife-green transition-colors rounded-md hover:bg-green-50"
            >
              {link.label}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-herbalife-green transition-colors rounded-md hover:bg-green-50 flex items-center gap-1">
              Products
              <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] border">
                {productLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-herbalife-green transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-herbalife-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Register to Shop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-herbalife-green hover:bg-green-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-herbalife-green hover:bg-green-50 rounded-md flex items-center justify-between"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products
              <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 space-y-1">
                {productLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-herbalife-green hover:bg-green-50 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <a
              href="https://weight-loss-shakes.goherbalife.com/Catalog/Home/Index/en-AU"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-herbalife-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors mt-2"
            >
              Register to Shop
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
