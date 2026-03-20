import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delicious & Nutritious Recipes – Protein Shakes, Snacks & More",
  description:
    "Simple, protein-packed Herbalife recipes to fuel your wellness journey — from refreshing shakes to satisfying snacks and soups. Easy to make, delicious to enjoy.",
  alternates: { canonical: "https://www.loseweighttoday.com.au/recipes" },
  openGraph: {
    title: "Delicious & Nutritious Recipes – Protein Shakes, Snacks & More",
    description:
      "Simple, protein-packed recipes to fuel your wellness journey — from refreshing shakes to satisfying snacks.",
    url: "https://www.loseweighttoday.com.au/recipes",
  },
};

type Recipe = {
  title: string;
  category: "Shake" | "Snack" | "Soup";
  time: string;
  servings: number;
  protein: string;
  description: string;
  ingredients: string[];
  instructions: string[];
};

const recipes: Recipe[] = [
  {
    title: "Cristiano Ronaldo's Signature Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "22.9g",
    description:
      "A championship-level shake featuring Herbalife24 Formula 1 Sport blended with fresh fruit for a powerful protein boost.",
    ingredients: [
      "2 scoops Herbalife24 Formula 1 Sport (Vanilla)",
      "250ml cold water or milk",
      "1/2 banana",
      "5 strawberries",
      "Handful of ice",
    ],
    instructions: [
      "Add liquid to blender first.",
      "Add Formula 1 Sport, banana, strawberries, and ice.",
      "Blend until smooth and creamy.",
    ],
  },
  {
    title: "Cake Batter Shake",
    category: "Shake",
    time: "5 min",
    servings: 1,
    protein: "22g",
    description:
      "A dessert-inspired shake combining vanilla shake mixes with ricotta cheese and extract flavourings for a guilt-free treat.",
    ingredients: [
      "2 scoops Formula 1 (French Vanilla)",
      "1 scoop Protein Drink Mix (Vanilla)",
      "2 tbsp low-fat ricotta cheese",
      "1/2 tsp butter extract",
      "1/2 tsp vanilla extract",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Combine all ingredients in a blender.",
      "Blend on high for 30 seconds until thick and creamy.",
      "Serve immediately for best taste.",
    ],
  },
  {
    title: "Berry Blast Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "26g",
    description:
      "A vibrant, antioxidant-rich shake featuring goji berries and fruity flavours for a refreshing energy boost.",
    ingredients: [
      "2 scoops Formula 1 (Wild Berry)",
      "1 scoop Protein Drink Mix (Vanilla)",
      "1 tbsp goji berries",
      "1/2 cup mixed berries (fresh or frozen)",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water and ice to blender.",
      "Add Formula 1, Protein Drink Mix, goji berries, and mixed berries.",
      "Blend until smooth.",
    ],
  },
  {
    title: "Vanilla Blueberry Protein Shake",
    category: "Shake",
    time: "10 min",
    servings: 1,
    protein: "20g",
    description:
      "A creamy, antioxidant-packed shake made with fresh blueberries and vanilla Formula 1 for a delicious morning boost.",
    ingredients: [
      "2 scoops Formula 1 (French Vanilla)",
      "1/2 cup fresh blueberries",
      "1/2 banana",
      "250ml cold milk or almond milk",
      "Ice",
    ],
    instructions: [
      "Add milk to blender.",
      "Add Formula 1, blueberries, banana, and ice.",
      "Blend for 45 seconds until smooth and creamy.",
    ],
  },
  {
    title: "Apple Caramel Protein Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "19g",
    description:
      "A warm-flavoured caramel apple shake with fibre, perfect for satisfying sweet cravings while staying on track.",
    ingredients: [
      "2 scoops Formula 1 (Dulce de Leche or Vanilla)",
      "1/2 apple, chopped",
      "1 tsp cinnamon",
      "1 tbsp Herbalife Active Fibre Complex",
      "250ml cold water or milk",
      "Ice",
    ],
    instructions: [
      "Add liquid and apple to blender.",
      "Add Formula 1, cinnamon, and fibre complex.",
      "Blend until smooth. Enjoy the autumn-inspired flavour!",
    ],
  },
  {
    title: "Mocha Energy Boost Protein Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "22g",
    description:
      "A rich mocha-flavoured shake with energy-boosting ingredients — the perfect pick-me-up to start your day.",
    ingredients: [
      "2 scoops Formula 1 (Dutch Chocolate)",
      "1 tsp instant coffee",
      "1 scoop Protein Drink Mix (Vanilla)",
      "250ml cold water or milk",
      "Ice",
    ],
    instructions: [
      "Add liquid to blender.",
      "Add Formula 1, instant coffee, Protein Drink Mix, and ice.",
      "Blend until frothy and smooth.",
    ],
  },
  {
    title: "Matcha and Red Bean Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "23g",
    description:
      "A unique Japanese-inspired shake blending sweet red beans with earthy matcha for a flavour experience unlike any other.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 tsp matcha powder",
      "2 tbsp sweet red bean paste",
      "250ml cold milk",
      "Ice",
    ],
    instructions: [
      "Add milk and ice to blender.",
      "Add Formula 1, matcha powder, and red bean paste.",
      "Blend until smooth and enjoy this unique fusion shake!",
    ],
  },
  {
    title: "Passion Fruit Protein Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "27.6g",
    description:
      "A tropical, high-protein shake with fibre and aloe, bursting with passion fruit flavour.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "Pulp of 2 passion fruits",
      "1 tbsp Herbal Aloe Concentrate",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water and ice to blender.",
      "Add Formula 1, Protein Drink Mix, passion fruit pulp, and aloe.",
      "Blend until combined. Strain seeds if preferred.",
    ],
  },
  {
    title: "Pineapple Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "26g",
    description:
      "A tropical pineapple shake that supports digestion and delivers a sunny burst of flavour.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "1/2 cup fresh or frozen pineapple chunks",
      "250ml cold water or coconut water",
      "Ice",
    ],
    instructions: [
      "Add liquid to blender.",
      "Add Formula 1, Protein Drink Mix, and pineapple.",
      "Blend until smooth. Garnish with a pineapple wedge.",
    ],
  },
  {
    title: "Tropical Twist Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "21g",
    description:
      "A papaya-based tropical shake with digestive support benefits — like a holiday in a glass.",
    ingredients: [
      "2 scoops Formula 1 (Tropical Fruit)",
      "1/2 cup papaya chunks",
      "1/4 cup mango chunks",
      "250ml cold coconut water",
      "Ice",
    ],
    instructions: [
      "Add coconut water and ice to blender.",
      "Add Formula 1, papaya, and mango.",
      "Blend until smooth and tropical!",
    ],
  },
  {
    title: "Green Apple Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "26g",
    description:
      "A crisp and refreshing shake with probiotics and essential nutrients for gut health.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "1/2 green apple, chopped",
      "1 tbsp probiotic powder (optional)",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water, ice, and apple to blender.",
      "Add Formula 1, Protein Drink Mix, and probiotic powder.",
      "Blend until smooth and refreshing.",
    ],
  },
  {
    title: "Glowing Skin Collagen Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "15g",
    description:
      "A beauty-boosting shake with Herbal Aloe Concentrate and Greek yogurt for radiant skin from the inside out.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "2 tbsp Greek yogurt",
      "1 tbsp Herbal Aloe Concentrate",
      "1/2 cup mixed berries",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water to blender.",
      "Add Formula 1, yogurt, aloe concentrate, and berries.",
      "Blend until smooth and creamy.",
    ],
  },
  {
    title: "Mango Tango Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "19.5g",
    description:
      "A fresh mango shake with French Vanilla flavour — sweet, creamy, and utterly tropical.",
    ingredients: [
      "2 scoops Formula 1 (French Vanilla)",
      "1/2 cup fresh mango chunks",
      "1/4 cup orange juice",
      "200ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water, orange juice, and ice to blender.",
      "Add Formula 1 and mango chunks.",
      "Blend until smooth and velvety.",
    ],
  },
  {
    title: "Cherry Cheesecake Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "26g",
    description:
      "A luscious, creamy shake that tastes like a delectable cheesecake dessert — without the guilt.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "1/4 cup frozen cherries",
      "2 tbsp cream cheese (light)",
      "250ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water and ice to blender.",
      "Add Formula 1, Protein Drink Mix, cherries, and cream cheese.",
      "Blend until thick and creamy.",
    ],
  },
  {
    title: "Mango Yogurt Shake",
    category: "Shake",
    time: "2 min",
    servings: 1,
    protein: "25.2g",
    description:
      "A tropical twist combining fresh mango with a yogurt base for a probiotic-rich, creamy treat.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "1/2 cup mango chunks",
      "3 tbsp natural yogurt",
      "200ml cold water",
      "Ice",
    ],
    instructions: [
      "Add water, yogurt, and ice to blender.",
      "Add Formula 1, Protein Drink Mix, and mango.",
      "Blend until smooth and creamy.",
    ],
  },
  {
    title: "Chocolate Protein Cookies",
    category: "Snack",
    time: "25 min",
    servings: 5,
    protein: "12g",
    description:
      "Protein-rich cookies featuring Formula 1 Dutch Chocolate — a nutritious snack that satisfies your chocolate cravings.",
    ingredients: [
      "2 scoops Formula 1 (Dutch Chocolate)",
      "1 cup oat flour",
      "1/4 cup almond butter",
      "1/4 cup honey or maple syrup",
      "1 egg",
      "1/4 cup dark chocolate chips",
      "1/2 tsp baking powder",
      "Pinch of salt",
    ],
    instructions: [
      "Preheat oven to 175°C (350°F).",
      "Mix dry ingredients: Formula 1, oat flour, baking powder, and salt.",
      "In a separate bowl, combine almond butter, honey, and egg.",
      "Mix wet and dry ingredients together, fold in chocolate chips.",
      "Scoop tablespoon-sized portions onto a lined baking tray.",
      "Bake for 12-15 minutes until edges are golden.",
      "Cool for 5 minutes before serving.",
    ],
  },
  {
    title: "Creamy Mushroom Protein Soup",
    category: "Soup",
    time: "10 min",
    servings: 1,
    protein: "23.1g",
    description:
      "Earthy with a hint of vanilla, this warm protein soup provides a delicious meal full of the nutrients you need.",
    ingredients: [
      "2 scoops Formula 1 (Vanilla)",
      "1 scoop Protein Drink Mix",
      "1/2 cup sliced mushrooms (sautéed)",
      "1 tbsp olive oil",
      "1 clove garlic, minced",
      "250ml warm water or vegetable broth",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Sauté mushrooms and garlic in olive oil for 3-4 minutes.",
      "Add warm broth and bring to a gentle simmer.",
      "Remove from heat and let cool for 1 minute.",
      "Stir in Formula 1 and Protein Drink Mix until smooth.",
      "Season with salt and pepper. Serve warm.",
    ],
  },
];

const categories = ["All", "Shake", "Snack", "Soup"] as const;

function CategoryIcon({ category }: { category: Recipe["category"] }) {
  if (category === "Shake") {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (category === "Snack") {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  );
}

export default function RecipesPage() {
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Herbalife Shake & Snack Recipes",
    description:
      "Simple, protein-packed recipes to fuel your wellness journey.",
    itemListElement: recipes.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Recipe",
        name: r.title,
        description: r.description,
        prepTime: `PT${parseInt(r.time)}M`,
        recipeYield: `${r.servings} serving${r.servings > 1 ? "s" : ""}`,
        recipeCategory: r.category,
        nutrition: {
          "@type": "NutritionInformation",
          proteinContent: r.protein,
        },
        recipeIngredient: r.ingredients,
        recipeInstructions: r.instructions.map((step) => ({
          "@type": "HowToStep",
          text: step,
        })),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-herbalife-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Delicious &amp; Nutritious Recipes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Simple, protein-packed recipes to fuel your wellness journey — from
            refreshing shakes to satisfying snacks.
          </p>
        </div>
      </section>

      {/* Category Legend */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold ${
                  cat === "All"
                    ? "bg-herbalife-green text-white"
                    : cat === "Shake"
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : cat === "Snack"
                    ? "bg-amber-100 text-amber-700 border border-amber-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {cat === "All"
                  ? `All Recipes (${recipes.length})`
                  : `${cat} (${recipes.filter((r) => r.category === cat).length})`}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.title}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-herbalife-green to-green-700 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        recipe.category === "Shake"
                          ? "bg-blue-100 text-blue-700"
                          : recipe.category === "Snack"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <CategoryIcon category={recipe.category} />
                      {recipe.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg leading-tight">
                    {recipe.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {recipe.servings} serving{recipe.servings > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1 text-herbalife-green font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {recipe.protein} protein
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <h4 className="font-heading font-semibold text-gray-900 text-sm mb-2">Ingredients</h4>
                    <ul className="space-y-1">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-herbalife-green mt-0.5">&#x2022;</span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 text-sm mb-2">Instructions</h4>
                    <ol className="space-y-1">
                      {recipe.instructions.map((step, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-herbalife-green font-bold mt-0.5">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-herbalife-green to-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Want Personalised Recipe Recommendations?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get in touch with us for customised recipes tailored to your goals
            and taste preferences. As Preferred Members, you&apos;ll enjoy
            exclusive savings on all Herbalife products.
          </p>
          <a
            href="/contact"
            className="inline-block bg-herbalife-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
