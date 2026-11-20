const siteUrl = "https://www.loseweighttoday.com.au";

const LANDING_PAGES_LAST_UPDATED_ISO = "2026-10-31";
const LANDING_PAGES_LAST_UPDATED_DISPLAY = "October 31, 2026";

type Faq = { question: string; answer: string };

export function buildLandingSchema({
  path,
  pageName,
  breadcrumbLabel,
  faqs,
  productSchema,
  dateModified = LANDING_PAGES_LAST_UPDATED_ISO,
}: {
  path: string;
  pageName: string;
  breadcrumbLabel: string;
  faqs: Faq[];
  productSchema?: Record<string, unknown>;
  dateModified?: string;
}) {
  const pageUrl = `${siteUrl}${path}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageName,
      dateModified,
      about: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  if (productSchema) graph.push(productSchema);

  return { "@context": "https://schema.org", "@graph": graph };
}

export { siteUrl, LANDING_PAGES_LAST_UPDATED_ISO, LANDING_PAGES_LAST_UPDATED_DISPLAY };
export type { Faq };
