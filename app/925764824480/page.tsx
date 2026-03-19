import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Q&A – Frequently Asked Questions About Herbalife & Weight Loss",
  description:
    "Answers to common questions about Herbalife products, weight loss, safety, dietary requirements, pricing, and our personalised coaching services.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/925764824480" },
  openGraph: {
    title: "Q&A – Frequently Asked Questions",
    description: "Answers to common questions about Herbalife products, weight loss, safety, and coaching.",
    url: "https://www.loseweighttoday.com.au/925764824480",
  },
};

const faqs = [
  {
    question: "How much weight can I expect to lose?",
    answer:
      "When following our program with shakes, balanced meals, and regular exercise, most clients can expect to lose 0.5–1 kg per week. Results vary based on individual factors. We provide personalised coaching to help you stay consistent and achieve your goals.",
  },
  {
    question: "Are Herbalife products safe?",
    answer:
      "Yes. Herbalife products are tested for quality and purity, free from banned substances, and comply with TGA (Therapeutic Goods Administration) regulations in Australia. If you are pregnant, breastfeeding, or on medication, we recommend consulting your doctor before starting any new nutrition program.",
  },
  {
    question: "Is there scientific research behind Herbalife?",
    answer:
      "Yes. Herbalife Nutrition invests in research and has published peer-reviewed journal studies on meal replacement shakes and weight management. The Herbalife Nutrition Institute provides additional scientific information and resources.",
  },
  {
    question: "What is in a Formula 1 shake?",
    answer:
      "Formula 1 Nutritional Shake Mix contains plant-based protein, essential vitamins and minerals, and fibre. Each serving is under 250 calories when prepared with skim milk, making it a convenient and nutritious meal replacement option.",
  },
  {
    question: "Are your products suitable for vegetarians or dairy-free diets?",
    answer:
      "Many of our products are suitable for vegetarians. For dairy-free options, we recommend Formula 1 Select, which is plant-based and free from dairy, soy, and gluten.",
  },
  {
    question: "Do I need to follow a strict diet?",
    answer:
      "No. Our approach is non-restrictive. Typically, you replace 2 meals per day with Herbalife shakes and eat 1 balanced meal plus healthy snacks. We create a personalised plan that fits your lifestyle and preferences.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide a free wellness evaluation, personalised nutrition and meal plans, and ongoing follow-up coaching to ensure you stay on track and achieve your goals.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our programs are designed to be an affordable meal replacement alternative. When you compare the cost per meal to eating out or buying groceries, many clients find it comparable or even cheaper. Contact us for specific pricing.",
  },
  {
    question: "Am I locked into purchasing?",
    answer:
      "No. You are not locked into any purchases. You can buy products when you want, with no minimum spending requirements and no contracts.",
  },
  {
    question: "Can I use Herbalife if I have diabetes or other conditions?",
    answer:
      "We always recommend consulting with your doctor or healthcare provider before starting any new nutrition program, especially if you have diabetes, are pregnant, breastfeeding, or taking medications.",
  },
];

export default function QAPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Common questions about Herbalife products, weight loss, and our coaching services
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h2 className="font-heading font-bold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-green-50 rounded-2xl">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us directly and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-herbalife-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:0478965828"
                className="inline-block border-2 border-herbalife-green text-herbalife-green hover:bg-herbalife-green hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Call 0478 965 828
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
