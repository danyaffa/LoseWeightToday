---
name: marketing-ad-intelligence
description: Discover actual customer competitors, monitor new and changed ads, rank public signals and identify original creative opportunities.
---

# Competitor Ad Intelligence

Read [shared policy](references/core-policy.md) first. Use [sources](references/sources.md) for current-source checks and boundaries.

1. Identify 5–10 relevant direct and adjacent customer rivals from category, offer, geography and audience. Verify official domains and advertiser/page IDs; resolve lookalikes. Discover additional international examples when useful. Capture why each belongs on the watchlist.
2. Query Konvert's discovered read tools and permitted public ad libraries. Save source URL, stable ad ID, advertiser ID, platform, country, format, niche, active status, offer, hook, landing page, retrieved_at, source_updated_at and available public metrics. Record pagination, filters and coverage. No results from a failed query is not 'no competitors advertising'. For video ads, transcribe the first 3 seconds (spoken words and on-screen text) when a transcript tool is connected; otherwise describe the opening frame.
3. Compare snapshots per brand and query. Flag new ads and explicit status/creative/offer/landing-page changes. Ads absent from partial pages are NOT confirmed stopped. Use runtime/mm.py snapshot for validated local JSON observations; it does not fetch ads itself.
4. Shortlist candidates using comparable runtime and variant signals, labeled public-signal candidates. The included score-ads helper uses an explicit, uncalibrated heuristic, never a probability of sales. Exclude stale observations from ranking and disclose unknown provider freshness. Keep platform/country/niche/format groups separate. Do not manufacture CPA, spend or ROAS for rival ads.
   Winner signals, strongest first, each recorded with its evidence link: (a) still active and delivering, using impression ranges or EU/UK reach where the library shows them; (b) longevity: the median ad lives only weeks, so 30+ days live is a candidate and 90+ days a strong candidate; (c) replication: the same message rebuilt as several new creatives or relaunched; (d) test survival: still running after the ads launched with it in the same batch stopped; (e) landing-page concentration: the page most of a rival's ads point to is likely its best-selling offer. Meta's 'multiple versions' label can mean dynamic creative, not separate tests. Call an ad 'clearly a winner' only when (a) plus at least two of (b)–(e) hold, and still label it a public-signal candidate.
5. Break down each selected ad: first-second hook, customer job, objection, promise, proof, format, CTA and offer. Identify saturation and gaps. Distinguish observed creative facts from hypotheses about why it may work. Add each breakdown to the brand's hook and angle library (hook type, angle, format, source link, first seen, signals) so patterns build up across days instead of being rediscovered.
6. Produce three original briefs grounded in the customer's verified offer and assets. Record the source pattern and explain what changes for this brand. Do not copy wording, testimonials, logos, faces or creative files without appropriate rights.
7. When a rival ad becomes 'clearly a winner', run the winner → recreate → send loop in the master-marketing skill's monitoring reference (references/monitoring.md of master-marketing): hand the ad's structure to marketing-creative as the reference, produce the brand's own version and deliver it to the owner for approval.

Output a dated evidence board with links, new/changed counts, coverage/freshness, missing data, proxy ranking and a testable hypothesis for each idea. Reserve 'verified winner' for comparable, sufficiently evidenced first-party results.
