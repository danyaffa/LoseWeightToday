"use client";

import Link from "next/link";
import { trackCTAClick, trackPhoneClick, trackExternalLink } from "@/lib/gtag";

type TrackedLinkProps = {
  href: string;
  className?: string;
  trackingLabel: string;
  children: React.ReactNode;
};

export function TrackedInternalLink({ href, className, trackingLabel, children }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackCTAClick(trackingLabel, href)}
    >
      {children}
    </Link>
  );
}

export function TrackedExternalLink({ href, className, trackingLabel, children }: TrackedLinkProps & { target?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackExternalLink(href, trackingLabel)}
    >
      {children}
    </a>
  );
}

export function TrackedPhoneLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href="tel:0478965828"
      className={className}
      onClick={() => trackPhoneClick()}
    >
      {children}
    </a>
  );
}
