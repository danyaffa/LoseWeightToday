import type { Metadata } from "next";
import { TrackPhoneLink, TrackSocialLink, TrackBecomeMemberLink } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us – Start Your Weight-Loss Journey Today",
  description:
    "Contact Dan & Jaffa Leffler, Herbalife Independent Distributors in Caulfield North, Melbourne. Walk-in 7 days 9am-8pm. Call 0478 965 828.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/contact" },
  openGraph: {
    title: "Contact Us – Start Your Weight-Loss Journey Today",
    description: "Contact Dan & Jaffa Leffler, Herbalife Independent Distributors in Melbourne.",
    url: "https://www.loseweighttoday.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Start your weight-loss journey today
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">23 Salisbury Street<br />Caulfield North, VIC 3161<br />Melbourne, Australia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Phone</h3>
                    <TrackPhoneLink className="text-herbalife-green hover:underline font-medium">0478 965 828</TrackPhoneLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:leffleryd@gmail.com" className="text-herbalife-green hover:underline font-medium">leffleryd@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">9am – 8pm, 7 days a week<br />Walk-in and online orders</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-heading font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <TrackSocialLink
                    href="https://www.facebook.com/Leffler.Dan.Yaffa"
                    platform="facebook"
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-herbalife-green hover:bg-herbalife-green hover:text-white transition-colors"
                    ariaLabel="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </TrackSocialLink>
                  <TrackSocialLink
                    href="https://t.me/YaffaDan"
                    platform="telegram"
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-herbalife-green hover:bg-herbalife-green hover:text-white transition-colors"
                    ariaLabel="Telegram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </TrackSocialLink>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <TrackBecomeMemberLink />
              </div>
            </div>

            {/* Map / Location */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
                <div className="aspect-[4/3] bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8!2d145.028!3d-37.882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s23+Salisbury+St+Caulfield+North+VIC+3161!5e0!3m2!1sen!2sau!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "0.5rem", minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lose Weight Today Location"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Walk-in orders welcome 7 days a week, 9am to 8pm. Online orders available 24/7 through our Herbalife shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
