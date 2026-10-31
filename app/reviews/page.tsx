import type { Metadata } from "next";
import { TrackedExternalLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Client Reviews – What Our Customers Say",
  description:
    "Read genuine client reviews and testimonials from our Herbalife nutrition customers in Melbourne. See why our clients love working with Jaffa and Dan.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/reviews" },
  openGraph: {
    title: "Client Reviews – What Our Customers Say",
    description: "Read genuine client reviews and testimonials from our Herbalife nutrition customers.",
    url: "https://www.loseweighttoday.com.au/reviews",
  },
};

type Review = {
  name: string;
  rating: number;
  time: string;
  text: string;
  ownerResponse?: string;
};

const reviews: Review[] = [
  {
    name: "Harshal Surti",
    rating: 5,
    time: "2 years ago",
    text: "Yaffa and Dan are the best mentor we have met. In the beginning Yaffa explained me and my wife everything and she gave some really very good nutritional products in the beginning and started sharing new nutritional products on WhatsApp.…",
    ownerResponse:
      "Thank you Harshal so much for your kind words! We're thrilled to hear about your progress and glad we could support you and Nita on your journey. We'll always be here to guide you until you attain your goals…",
  },
  {
    name: "Nita Surti",
    rating: 5,
    time: "2 years ago",
    text: "Yaffa and Dan are the best mentor we have met. When we started our healthy life style journey In the beginning Yaffa explained me everything and she gave some really very good nutritional products in the beginning and started sharing new…",
    ownerResponse:
      "Thank you so much for your kind words, Nita! It has been an absolute pleasure walking with both of you on your journey towards healthier and happier lives. We'll always be here to guide you through the process till you attain your…",
  },
  {
    name: "Raman Trehan",
    rating: 5,
    time: "6 years ago",
    text: "Jaffa and Dan are very kind and been so helpful in my herbal life nutrition journey. Can reach out for any help anytime, very professional and product has been working amazing for me. Highly recommend to all.",
    ownerResponse:
      "Dear Raman, we are grateful for your excellent review. We are here to support you any time. Hugs from Jaffa & Dan 🌹💕",
  },
  {
    name: "Fatma",
    rating: 5,
    time: "6 years ago",
    text: "I'm a beginner to herballife and I've never been so healthy and happy 🥰 the support and guidance I get from the consultant is beyond amazing and so thankful for it. I feel like a whole new person full of energy especially with my 8 month baby…",
    ownerResponse:
      "Thank you so much Fatma, your experience on the Herbalife products are our reward. We are grateful for such a review.",
  },
  {
    name: "Leora Hazan",
    rating: 5,
    time: "7 years ago",
    text: "Both Danny and Yaffa Leffler have made my experience with Herbalife amazing. They have offered hassle free service and personalised follow up. Their knowledge of the products is beyond belief, they are always obliging and…",
    ownerResponse: "Thank you Leora for your kind words. So proud of you and your results. Hugs ❤️",
  },
  {
    name: "Gaurav Makhija",
    rating: 5,
    time: "2 years ago",
    text: "No words to explain how caring you guys are. I love all the videos and recipes that I receive from you which is making our being healthy journey so interesting. Love your support and passion. Gaurav and Preeti",
    ownerResponse: "Dear Gaurav and Preeti, thank you so much for your heartfelt review!",
  },
  {
    name: "Himanshi Garg",
    rating: 5,
    time: "5 years ago",
    text: "Herbal life is a great source of balanced nutrition in your journey towards loosing/gaining/maintaining weight.…",
    ownerResponse:
      "Dear Himanshi, it is a pleasure working with you towards achieving your goals. I will always be here to support and guide you through.",
  },
  {
    name: "Ramandeep Singh",
    rating: 5,
    time: "4 years ago",
    text: "Yaffa you have a great knowledge of all the nutrition product. Am very satisfied with your instructions and getting results as per expectations thanks for your help…",
    ownerResponse:
      "Thank you Ramandeep, it is a pleasure walking with you towards achieving your goals. I am so proud of you. 👍🏻✅👏🏼💚",
  },
  {
    name: "Sharon Goodhardt",
    rating: 5,
    time: "3 years ago",
    text: "Big thank you to Yaffa. She is really motivating me to stay on track. Such sensible advice.",
    ownerResponse: "Dear Sharon, thank you so much for your kind words. It's such a pleasure having you as our customer 🌹🍒",
  },
  {
    name: "Shobitha Prasad",
    rating: 5,
    time: "4 years ago",
    text: "Experience with Jaffa is always positive. She is always available whenever I reach out to her.",
    ownerResponse:
      "Thank you so much Shobitha, it is a pleasure working with you towards achieving your goals. Hugs 🌹",
  },
  {
    name: "Sri Wathsal",
    rating: 5,
    time: "2 years ago",
    text: "Yaffa mam is the best one I met. She guides very good, I lost weight because of her, thank you so much mam 🙏",
    ownerResponse:
      "Thank you so much dear Sri, you are so special. It is a pleasure to see your fantastic progress towards achieving your health & weight loss goals. 👏🏼👏🏼",
  },
  {
    name: "KEVINSH",
    rating: 5,
    time: "5 years ago",
    text: "It's really great products thanks to my distributor Yaffa, she really guided me through and helping me achieve my goals.",
    ownerResponse:
      "Thank you so much Kevin for your fantastic review. Your results are our reward. As you know we are here to support you till you have achieved your long term goals. Hugs 💕",
  },
  {
    name: "Vijay Sharma",
    rating: 5,
    time: "3 years ago",
    text: "Great people, best advice you will get about weight loss naturally.",
    ownerResponse:
      "Thank you Vijay for your kind words. Your great results are our best reward. It is a pleasure to support you 🌹",
  },
  {
    name: "Bridgette Baylis",
    rating: 5,
    time: "3 years ago",
    text: "Great support helping me reach my goals. Thank you 👍🏻😊",
    ownerResponse: "Thank you for your beautiful review. Your results are our reward. It is a pleasure servicing you 🌹🍎",
  },
  {
    name: "Sonchhatra Dipesh",
    rating: 5,
    time: "5 years ago",
    text: "She is friendly and gives response quickly when you have any question.",
    ownerResponse: "Hi Sonchhatra, thank you so much for your kind words, much appreciated.",
  },
  {
    name: "Muzammil",
    rating: 5,
    time: "7 years ago",
    text: "Good people and great experience.",
    ownerResponse:
      "It is our privilege to service you, assuring you will attain your goals. Please do not hesitate to contact us for more information. Have a great day. Hugs from Yaffa and Dan 💕",
  },
  {
    name: "Charni van der Linde",
    rating: 5,
    time: "7 years ago",
    text: "Friendly and efficient ☺️. Top service!!!!",
    ownerResponse:
      "Dear Charni, it was our privilege assisting you. Please do not hesitate to contact us for more information and future product orders. Hugs 💕",
  },
  {
    name: "Zoe Goodhardt",
    rating: 5,
    time: "3 years ago",
    text: "Great product!",
    ownerResponse: "Thank you so much Zoe, wishing you health and happiness. Hugs 💚❤️",
  },
  {
    name: "Laura Gil",
    rating: 5,
    time: "5 years ago",
    text: "Positive: Communication, Quality",
    ownerResponse: "Thank you dear Laura. It is an absolute pleasure to assist you to achieve your goals. 🌹",
  },
  {
    name: "Mohak Jakhar",
    rating: 5,
    time: "5 years ago",
    text: "Positive: Communication",
    ownerResponse:
      "Good morning Mohak, thank you so much for acknowledging our service. It is a pleasure working with you towards achieving your goals.",
  },
  {
    name: "Navdeep Kaur",
    rating: 5,
    time: "6 years ago",
    text: "Positive: Communication, Quality, Professionalism",
    ownerResponse: "Thank you so much Navdeep, appreciate your 5 star review. Hugs 🌹",
  },
  {
    name: "Nazir Ahmad Dar",
    rating: 5,
    time: "6 years ago",
    text: "Positive: Quality",
    ownerResponse:
      "Thank you so much Nazir. We do appreciate your 5 star review. We are here to support you with any questions you may have.",
  },
  {
    name: "Anthony",
    rating: 5,
    time: "a year ago",
    text: "",
    ownerResponse:
      "Thank you so much Anthony, your 5-star review means the world to us. We always strive to deliver the best, most caring service to our customers. Wishing you health and happiness 💚🌸",
  },
  {
    name: "Jinu S Mathew",
    rating: 5,
    time: "a year ago",
    text: "",
    ownerResponse: "Thank you so much Jinu, it is always a pleasure to service you. Hugs ❤️🎄",
  },
  {
    name: "Sunitha Allamsetti",
    rating: 5,
    time: "3 years ago",
    text: "",
    ownerResponse:
      "Thank you dear Sunitha, appreciate your 5 star review. It is a pleasure supporting you, assuring you will attain your goals. Have a great weekend 🌹",
  },
  {
    name: "Clara Moreno",
    rating: 5,
    time: "4 years ago",
    text: "",
    ownerResponse: "Thank you so much dear Clara, such a pleasure servicing you. Have a wonderful day. Hugs from Yaffa and Dan 💚❤️",
  },
  {
    name: "Ei Nan",
    rating: 5,
    time: "7 years ago",
    text: "",
    ownerResponse: "Thank you so much Nan, it is our pleasure assisting and servicing you. Hugs from Yaffa and Dan 💕💐",
  },
  {
    name: "Michelle van der Westhuizen",
    rating: 5,
    time: "7 years ago",
    text: "",
    ownerResponse:
      "Thank you Michelle, it is our pleasure and duty to offer you our ongoing support. Please do not hesitate to contact us for more information. Hugs from Yaffa and Dan ❤️👌🏻🤗",
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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.loseweighttoday.com.au/#organization",
  name: "Lose Weight Today - Jaffa and Dan Leffler, Herbalife Independent Members",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "29",
  },
  review: reviews
    .filter((r) => r.text)
    .map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
      reviewBody: r.text,
    })),
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
          <TrackedExternalLink
            href="https://www.google.com/maps/place/Herbalife+Nutrition+Independent+Distributor+Jaffa+%26+Dan+Leffler/@-37.8709498,145.0225114,17z/data=!4m8!3m7!1s0x6ad669d3de506b93:0x2ea907ad85c8d3d0!8m2!3d-37.8709498!4d145.0225114!9m1!1b1!16s%2Fg%2F11g10n9l3r"
            className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            trackingLabel="add_your_review"
          >
            Add Your Review
          </TrackedExternalLink>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-10">
            Real reviews from our Google Business Profile — 4.9 out of 5 from 29 reviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-400">{review.time}</span>
                </div>
                {review.text ? (
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                ) : (
                  <p className="text-gray-500 mb-4 text-sm italic">Left a 5-star review on Google.</p>
                )}
                <p className="font-heading font-semibold text-gray-900 mb-3">— {review.name}</p>
                {review.ownerResponse && (
                  <div className="mt-auto pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-herbalife-green mb-1">Response from Jaffa &amp; Dan</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{review.ownerResponse}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
