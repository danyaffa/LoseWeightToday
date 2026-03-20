import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-herbalife-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-herbalife-green">Lose Weight Today</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Herbalife Independent Distributor
          </p>
          <p className="text-gray-300 text-sm mt-2">Dan &amp; Jaffa Leffler</p>
          <p className="text-gray-400 text-sm mt-1">Senior Executive Presidents - 15K</p>
          <p className="text-gray-400 text-sm mt-1">Serving customers since 1993</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/925764824480" className="text-gray-300 hover:text-herbalife-green transition-colors">Q&amp;A</Link></li>
            <li><Link href="/before-and-after-results" className="text-gray-300 hover:text-herbalife-green transition-colors">Before and After Results</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-herbalife-green transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-herbalife-green transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Products */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/699" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-herbalife-green transition-colors">Programs</a></li>
            <li><a href="https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3201" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-herbalife-green transition-colors">Daily Nutrition</a></li>
            <li><a href="https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3223" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-herbalife-green transition-colors">Weight Management</a></li>
            <li><a href="https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3325" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-herbalife-green transition-colors">Sports Nutrition</a></li>
            <li><a href="https://weight-loss-shakes.goherbalife.com/Catalog/Categories/ProductsList/en-AU/3222" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-herbalife-green transition-colors">Supplements</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-herbalife-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>23 Salisbury St, Caulfield North,<br />Melbourne 3161</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-herbalife-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0478965828" className="hover:text-herbalife-green transition-colors">0478 965 828</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-herbalife-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:leffleryd@gmail.com" className="hover:text-herbalife-green transition-colors">leffleryd@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-herbalife-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>9am – 8pm, 7 days</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/Leffler.Dan.Yaffa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-herbalife-green transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://t.me/YaffaDan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-herbalife-green transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Leffler International Investments Pty Ltd. All rights reserved.</p>
          <p className="mt-1 md:mt-0">ABN: 90124089345 | Independent Herbalife Nutrition Distributors</p>
        </div>
      </div>
    </footer>
  );
}
