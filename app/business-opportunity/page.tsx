"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const signUpUrl =
  "https://accounts.myherbalife.com/Account/Create?appId=1&locale=en-AU&redirect=https://www.myherbalife.com/en-AU/";

const benefits = [
  {
    title: "Discounted Products",
    description: "Purchase Herbalife products at discounted prices for your own personal use.",
  },
  {
    title: "Retail Profit",
    description: "Earn retail profit by selling Herbalife products directly to your customers.",
  },
  {
    title: "Commission & Bonuses",
    description: "Earn commission and bonuses by building your team and helping others succeed.",
  },
  {
    title: "No Minimum Orders",
    description: "No minimum spending requirements. Purchase products only when you want to.",
  },
  {
    title: "Mentorship & Training",
    description: "Receive full mentorship and training from experienced distributors Dan & Jaffa.",
  },
  {
    title: "90-Day Money Back",
    description: "90-day money-back guarantee on your membership if you change your mind.",
  },
];

export default function BusinessOpportunityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <BusinessOpportunityContent />
    </Suspense>
  );
}

function BusinessOpportunityContent() {
  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [registrationType, setRegistrationType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "preferred" || type === "member") {
      setRegistrationType(type);
    }
  }, [searchParams]);

  const getTypeLabel = () => {
    return registrationType === "member"
      ? "Independent Herbalife Member"
      : "Preferred Customer";
  };

  const getRegistrationUrl = () => signUpUrl;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setShowPopup(true);
        form.reset();
      } else {
        setSubmitError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setSubmitError("Network error. Please try again or email us directly at leffleryd@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Business Opportunity
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            {registrationType
              ? `You're one step away from becoming a ${getTypeLabel()}!`
              : "Become a Wellness & Nutrition Coach with Herbalife"}
          </p>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
            Why Reach Out? What to Expect?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            We&apos;re here to help you get started on your wellness journey with the right support and savings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Interested in becoming a Preferred Customer</h3>
              <p className="text-gray-500 text-sm">Save up to 25% on Herbalife products</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Curious about nutrition products</h3>
              <p className="text-gray-500 text-sm">Get personalised product recommendations</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading font-bold text-gray-900 mb-2">Looking for a business opportunity</h3>
              <p className="text-gray-500 text-sm">Flexible home-based wellness business</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Expect a personal reply within 24 hours, step-by-step registration instructions,
            and access to exclusive offers and wellness tips.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Why Become a Herbalife Member?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-herbalife-green mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Wellness Educators */}
      <section className="py-16 bg-herbalife-green text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Meet Our Wellness Educators</h2>
          <p className="text-green-100 text-lg mb-6">
            Get to know Jaffa &amp; Dan and discover how we help people transform their health through
            personalised nutrition coaching, wellness education, and community support.
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PLB3ZV-mBfQYyXcNczTG7oc9fffG9P97_P"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-herbalife-green hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Meet Our Wellness Educators
          </a>
        </div>
      </section>

      {/* Registration Heading */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-r from-herbalife-green to-green-700 rounded-2xl p-8 text-center text-white shadow-lg">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Registration Form
            </h2>
            <p className="text-green-100 text-lg">
              Become an Independent Herbalife Member
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <form className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value={registrationType === "member" ? "New Member Registration Enquiry – Lose Weight Today" : "New Preferred Customer Enquiry – Lose Weight Today"} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="type" value={registrationType === "member" ? "Independent Herbalife Member" : "Preferred Customer"} />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {registrationType && (
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 text-center text-sm">
                Registering as: <strong className="text-herbalife-green">{getTypeLabel()}</strong>
              </div>
            )}

            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-herbalife-green focus:border-transparent text-sm"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-herbalife-green focus:border-transparent text-sm"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={
                  registrationType === "preferred"
                    ? "I'd like to become a Preferred Customer and enjoy 25% discounts..."
                    : registrationType === "member"
                    ? "I'm interested in becoming an Independent Herbalife Member..."
                    : "Tell us about your wellness goals or questions..."
                }
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-herbalife-green focus:border-transparent text-sm resize-y"
              />
            </div>

            {submitError && (
              <p className="text-red-600 text-sm mb-4">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-herbalife-green hover:bg-green-700 text-white py-3 rounded-full font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </section>

      {/* Member Starter Pack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Herbalife Member Starter Pack
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Your membership pack includes a protein shake canister, shaker, spoon, and digital product catalogues
                to get you started on your journey.
              </p>
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-herbalife-green text-lg mb-3">What&apos;s Included:</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  {["Formula 1 Protein Shake Canister", "Herbalife Shaker & Spoon", "Digital Product Catalogues", "Full Mentorship & Training Support"].map((item) => (
                    <li key={item} className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Details Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2 text-center">Thank You!</h2>
            <p className="text-gray-600 text-sm text-center mb-6">
              Your message has been sent. You will need the following information
              to complete your {getTypeLabel()} registration:
            </p>
            <div className="bg-green-50 rounded-xl p-5 mb-6">
              <h3 className="font-heading font-semibold text-herbalife-green mb-3">Copy My Details</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Sponsor Name:</strong> Jaffa Leffler</li>
                <li><strong>Sponsor ID:</strong> 05458162C</li>
                <li><strong>Last Name (3 letters):</strong> LEF</li>
                <li><strong>Purchased Herbalife Member Pack from Sponsor?</strong> NO</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="w-full border-2 border-herbalife-green text-herbalife-green hover:bg-herbalife-green hover:text-white py-3 rounded-full font-semibold transition-colors text-sm"
                onClick={() => {
                  const text =
                    "Sponsor Details for Herbalife Registration\n" +
                    "==========================================\n\n" +
                    "Sponsor Name: Jaffa Leffler\n" +
                    "Sponsor ID: 05458162C\n" +
                    "Last Name (3 letters): LEF\n" +
                    "Purchased Herbalife Member Pack from Sponsor? NO\n";
                  const blob = new Blob([text], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "sponsor-details.txt";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                Download These Details
              </button>
              <a
                href={getRegistrationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-herbalife-green hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors text-center text-sm"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
