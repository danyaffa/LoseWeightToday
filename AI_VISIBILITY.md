# AI Visibility — Lose Weight Today

What's implemented in this repo, and what's left for a human to do manually.

## Implemented

1. **robots.ts** (`app/robots.ts`) — allows Googlebot, Bingbot, and the major AI crawlers: OAI-SearchBot, OAI-AdsBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot, Applebot-Extended, DuckAssistBot, Amazonbot, Meta-ExternalAgent, cohere-ai, CCBot. Only `/api/` is disallowed.
2. **llms.txt** (`public/llms.txt`) — AI-readable summary of the business, distributors, location, services, and key pages. Content matches visible site copy; no pricing, results, or guarantees are claimed.
3. **Structured data** (`app/layout.tsx`) — `LocalBusiness` (with `@id`), `WebSite`, two `Service` entries (coaching, business opportunity), and `BreadcrumbList`, all tied together via `@id`/`publisher`/`provider` references.
4. **sitemap.ts** (`app/sitemap.ts`) — already lists every live canonical page.

## Manual follow-ups (not possible from this session)

- Submit `https://www.loseweighttoday.com.au/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Run Google's URL Inspection tool on the homepage to confirm live rendering and that `/_next/static/` assets return HTTP 200.
- Validate the structured data with the Schema.org Validator and Google Rich Results Test after the next deploy.
- Periodically spot-check prompts in ChatGPT, Perplexity, Claude, and Gemini to see whether the business surfaces for "Herbalife distributor Melbourne" style queries. No AI placement, ranking, or citation is guaranteed by any of the above.
