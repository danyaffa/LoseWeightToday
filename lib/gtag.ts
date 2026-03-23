export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function event({ action, category, label, value }: GTagEvent) {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Conversion-specific helpers
export function trackFormSubmission(formName: string) {
  event({
    action: "form_submission",
    category: "conversion",
    label: formName,
  });
}

export function trackCTAClick(ctaName: string, destination?: string) {
  event({
    action: "cta_click",
    category: "engagement",
    label: ctaName,
    ...(destination && { value: undefined }),
  });
  if (destination) {
    event({
      action: "outbound_click",
      category: "conversion",
      label: destination,
    });
  }
}

export function trackPhoneClick() {
  event({
    action: "phone_click",
    category: "conversion",
    label: "0478965828",
  });
}

export function trackExternalLink(url: string, linkName: string) {
  event({
    action: "external_link_click",
    category: "outbound",
    label: `${linkName} - ${url}`,
  });
}

export function trackSocialClick(platform: string) {
  event({
    action: "social_click",
    category: "engagement",
    label: platform,
  });
}

export function trackProductClick(productName: string) {
  event({
    action: "product_click",
    category: "ecommerce",
    label: productName,
  });
}

export function trackBusinessOpportunitySignup() {
  event({
    action: "signup_click",
    category: "conversion",
    label: "herbalife_member_registration",
  });
}

export function trackDownload(fileName: string) {
  event({
    action: "file_download",
    category: "engagement",
    label: fileName,
  });
}
