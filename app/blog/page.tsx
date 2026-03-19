import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Health, Nutrition & Weight-Loss Tips",
  description:
    "Read our latest articles on health, nutrition, weight management, and wellness tips from Herbalife Independent Distributors Dan & Jaffa Leffler.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/blog" },
  openGraph: {
    title: "Blog – Health, Nutrition & Weight-Loss Tips",
    description: "Read our latest articles on health, nutrition, weight management, and wellness tips.",
    url: "https://www.loseweighttoday.com.au/blog",
  },
};

const blogPosts = [
  {
    title: "Why Carbs Are King When You're Active",
    date: "1 August 2022",
    excerpt:
      "Understanding the role of carbohydrates in fuelling your active lifestyle. Learn how to balance your carb intake for optimal energy and performance.",
    categories: ["Articles", "Recipes", "Success Stories"],
  },
  {
    title: "How to Control Hunger and Fight Off the Comfort Food Cravings",
    date: "14 June 2022",
    excerpt:
      "Practical strategies to manage hunger pangs and resist comfort food cravings. Discover nutrition tips that help you stay on track with your wellness goals.",
    categories: ["Articles", "Recipes", "Success Stories"],
  },
  {
    title: "Ageless Beauty – How to Look Your Best at Every Age",
    date: "11 October 2021",
    excerpt:
      "Tips and insights on maintaining your health, vitality and appearance at every stage of life through proper nutrition and skincare.",
    categories: ["Articles", "Recipes", "Success Stories"],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Health, nutrition &amp; weight-loss tips from Dan &amp; Jaffa
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <svg className="w-16 h-16 text-herbalife-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((cat) => (
                      <span key={cat} className="text-xs bg-green-50 text-herbalife-green px-2 py-1 rounded-full font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h2 className="font-heading font-bold text-lg text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              More articles coming soon. Follow us on{" "}
              <a
                href="https://www.facebook.com/Leffler.Dan.Yaffa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-herbalife-green hover:underline font-semibold"
              >
                Facebook
              </a>{" "}
              for the latest updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
