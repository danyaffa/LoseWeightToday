"use client";

import { trackCTAClick, trackPhoneClick, trackSocialClick, trackExternalLink } from "@/lib/gtag";

export function TrackPhoneLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a href="tel:0478965828" className={className} onClick={() => trackPhoneClick()}>
      {children}
    </a>
  );
}

export function TrackSocialLink({ href, platform, className, ariaLabel, children }: {
  href: string;
  platform: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackSocialClick(platform)}
    >
      {children}
    </a>
  );
}

export function TrackBecomeMemberLink() {
  return (
    <a
      href="/business-opportunity"
      className="block text-center bg-herbalife-green hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors"
      onClick={() => trackCTAClick("become_a_member", "/business-opportunity")}
    >
      Become a Member
    </a>
  );
}
