# Google Ads suspension fix + free marketing plan — Lose Weight Today

Source skills: `.claude/skills/` (copied from private repo `danyaffa/Master_Marketing_Campaign` @ `799c9e9`).
Rules: no new ads, no new keywords, no spend. Herbalife Independent Distributor wording only.

## 1. Why the account was probably suspended

Google's banner ("doesn't comply with our Google Ads Terms and Conditions") does not name the policy.
The exact reason is in **Google Ads → Policy manager → Account suspensions** and in the suspension email.
Read it before appealing. The website risks found and fixed in this change:

| Risk | Where | Google policy it can trigger | Fix |
|---|---|---|---|
| Prescription weight-loss drug references ("weight loss drugs", "GLP-1") next to products for sale | Home, About, site schema | Healthcare & medicines (prescription drugs are not advertisable in AU); TGA Code bans promoting prescription-only medicines to the public | Removed; replaced with general protein/balanced-diet wording + "talk to your doctor" |
| "Clinical research shows…", "major 2025 clinical study", "proven", "science-backed", "metabolism-boosting" | Home, About, Before/After meta | Misrepresentation → unreliable/unsubstantiated health claims | Removed or softened |
| Self-published 5-star `AggregateRating` + review schema on our own business | Reviews page | Spammy structured data / misleading ratings | Schema removed (visible reviews kept) |
| "Lose Weight Today - Herbalife AU" naming | Navbar, site name, manifest, schema | Misrepresentation → can read as Herbalife's official Australian site | Changed to "Herbalife Independent Distributor" |
| Privacy policy did not disclose Google Ads/Analytics/OpenAI tracking | Privacy policy | Personalised advertising / conversion tracking disclosure | Added disclosure + opt-out links + OAIC |
| "Our track record speaks for itself — real results" | About | Unrealistic results claims | Now "Individual results vary" |

### Account-side items only the owner can check (not changeable from code)

1. **Business name mismatch.** The ad shows advertiser name **"Universal Lifestyle"**, the site says **Lose Weight Today**, the legal entity is **Leffler International Investments Pty Ltd**. Google's Misrepresentation policy requires a clear, consistent business identity. Make the ad business name and advertiser verification match the site footer.
2. **Reviews page testimonials** (Sarah M., Michael T., …). Keep them only if they are real customers who agreed to be quoted. If not, delete them — invented testimonials breach Google and ACCC rules.
3. **Before & After page.** Keep the "results not typical" notice. Do not use these photos in any ad.
4. **Herbalife Distributor Policies.** Confirm the current Herbalife AU rules on paid search with the Herbalife name before resuming.

### Appeal steps (after the fixes are live on loseweighttoday.com.au)

1. Google Ads → **Policy manager → Account suspensions → Appeal**.
2. Reason: "I've made changes to comply with the policy".
3. Short note: *"We are Herbalife Independent Distributors (Leffler International Investments Pty Ltd, ABN 90124089345). We removed references to prescription medicines and unsubstantiated health claims, removed self-published rating markup, clarified that we are independent distributors and not Herbalife, and updated our privacy policy for advertising cookies."*
4. Do not create a new Google Ads account while suspended — that is "circumventing systems" and causes permanent suspension.

## 2. Free marketing plan (no ad spend)

Ranked by evidence × effort × route to sale:

1. **Google Business Profile** (already verified, already ranks #A on the map). Weekly: one photo + one post (recipe from /recipes, opening hours, walk-in invite). Reply to every review within 24 h. Ask happy customers for a review using the "Add Your Review" link — never offer a reward for it.
2. **Recipes → short videos.** Each of the 7 "ways to consume Formula 1" becomes one 20-second Reel/Short/TikTok, linking to /recipes. One per week, same recipe adapted per platform.
3. **Melbourne local page** (`/herbalife-distributors-melbourne`). Link to it from GBP posts and the Facebook page; it targets "Herbalife distributor Melbourne" organically.
4. **AI-search visibility check (weekly, free).** Ask ChatGPT, Gemini, Perplexity and Google AI Overviews:
   - "Herbalife distributor Melbourne"
   - "Where can I buy Herbalife in Caulfield?"
   - "Herbalife Formula 1 recipes"
   - "Herbalife independent distributor near me"
   - "Herbalife business opportunity Australia"
   Record: are we mentioned, which competitors are, which sources are cited. Fill gaps with factual FAQ answers.
5. **Facebook + Telegram community.** Share each recipe post; invite followers to the free wellness evaluation (phone 0478 965 828).

### 4-week calendar

| Week | GBP post | Short video | Facebook | Goal / tracking |
|---|---|---|---|---|
| 1 | Walk-in hours 9–8, 7 days | Formula 1 pancakes | Recipe post → /recipes | GA4 `phone_click`, `form_submission` |
| 2 | Recipe photo | Shake bowl | Melbourne page link | GBP calls + direction requests |
| 3 | Meet Dan & Jaffa | Energy bites | About page | Contact form enquiries |
| 4 | Ask for reviews | Oats | Business opportunity | Member sign-ups |

### Health-claim guardrails for every post

- No mention of prescription medicines (GLP-1, Ozempic, Mounjaro, "weight loss drugs").
- No "clinically proven", "burns fat", "boosts metabolism", "guaranteed", "lose X kg in Y days".
- Before/after photos only with "Results not typical. Individual results vary."
- Always "Herbalife Independent Distributor", never "Herbalife AU".
