import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews – What Our Customers Say",
  description:
    "Read genuine client reviews and testimonials from our Herbalife nutrition customers in Melbourne. See why our clients love working with Dan & Jaffa.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/reviews" },
  openGraph: {
    title: "Client Reviews – What Our Customers Say",
    description: "Read genuine client reviews and testimonials from our Herbalife nutrition customers.",
    url: "https://www.loseweighttoday.com.au/reviews",
  },
};

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dan and Jaffa are incredibly supportive. The personalised coaching has helped me achieve my weight-loss goals. I feel healthier and more energetic than ever!",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Great products and even better service. The Formula 1 shakes are delicious and convenient. Highly recommend for anyone looking to improve their nutrition.",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "I was sceptical at first but the results speak for themselves. Lost weight steadily with the Quickstart Program and the ongoing support kept me motivated.",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Professional, knowledgeable, and genuinely caring. Dan & Jaffa take the time to understand your goals and create a plan that works for your lifestyle.",
  },
  {
    name: "Emma R.",
    rating: 5,
    text: "The best decision I made for my health. The meal plans are easy to follow and the products taste great. Thank you for changing my life!",
  },
  {
    name: "James W.",
    rating: 5,
    text: "Outstanding service from start to finish. Walk-in consultations are convenient and the team is always available to answer questions.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lose Weight Today - Herbalife AU",
    url: "https://www.loseweighttoday.com.au",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating.toString(), bestRating: "5" },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            What our customers say about their experience with Lose Weight Today
          </p>
        </div>
      </section>

      {/* Add Review CTA */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a
            href="https://www.google.com/maps/place/Lose+Weight+Today/@-37.882,145.028,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Add Your Review
          </a>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <StarRating rating={review.rating} />
                <p className="text-gray-700 mt-4 mb-4 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <p className="font-heading font-semibold text-gray-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
