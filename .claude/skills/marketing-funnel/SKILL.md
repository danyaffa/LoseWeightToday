---
name: marketing-funnel
description: Audit ad-to-landing-page consistency, lead capture, booking and checkout journeys while preserving existing app design and routes.
---

# Landing Pages and Conversion

Read [shared policy](references/core-policy.md) first. Use [sources](references/sources.md) for current-source checks and boundaries.

1. Follow the actual mobile and desktop customer path: ad message → destination → CTA → form/booking/cart → confirmation → lead/sale record → follow-up. Record every real URL and acceptance condition. Read live app files before any edits.
2. Check message match, truthful price/offer, usable CTA, mobile rendering, loading, accessibility, working images/links, validation, errors, duplicate submissions and recovery. Verify real form delivery and persisted records with permitted test data; do not claim E2E from a successful page load.
3. Ensure the minimum necessary fields, separate consent, clear privacy context, accessible labels and error messages, and a usable success page. Keep sensitive health details out of ad and analytics events. Match conversions to server-side outcomes where appropriate.
4. Inspect UTMs, referral continuity, redirects, attribution windows, payment/booking status and refresh/back-button duplication. Do not count failed payments, bots, repeat events or incomplete forms as sales.
5. Propose small evidence-backed improvements without redesign or route changes. Existing stack only. New APIs need the shared security controls; admin operations require existing role checks, tenant isolation and Firestore audit records.
6. For code changes, follow the repository's source-write gate, commit/push and unmerged-PR rules. Read-only audits can proceed while changes are gated. Verify the exact preview and production roles separately.

Deliver a severity-ranked defect list with reproduction steps, observed behavior, expected outcome, affected file/route and actual test evidence. Clearly separate proposed changes from implemented and deployed behavior.
