export const OPENAI_ADS_PIXEL_ID =
  process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID ?? "";

type OpenAIAdsContent = {
  id?: string;
  name?: string;
  content_type?: string;
};

type OpenAIAdsEventData =
  | {
      type: "contents";
      contents?: OpenAIAdsContent[];
    }
  | {
      type: "customer_action";
    };

function measure(eventName: string, data: OpenAIAdsEventData) {
  if (!OPENAI_ADS_PIXEL_ID || typeof window === "undefined") return;

  try {
    window.oaiq?.("measure", eventName, data);
  } catch {
    // Ad measurement must never interrupt the website's core user flow.
  }
}

export function trackOpenAIPageView(pathname: string) {
  measure("page_viewed", {
    type: "contents",
    contents: [
      {
        id: pathname === "/" ? "home" : pathname.replace(/^\/|\/$/g, ""),
        name: pathname === "/" ? "Home" : pathname,
        content_type: "page",
      },
    ],
  });
}

export function trackOpenAILeadCreated() {
  measure("lead_created", { type: "customer_action" });
}
