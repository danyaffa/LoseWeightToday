# Lose Weight Today — Herbalife AU

Official website for **Lose Weight Today**, a Herbalife Independent Distributor based in Caulfield North, Melbourne.

**Live site:** [www.loseweighttoday.com.au](https://www.loseweighttoday.com.au)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer (Gmail)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## Site Map

| Route | Page |
|-------|------|
| `/` | Home — hero, product categories, top sellers, why Herbalife, business CTA |
| `/before-and-after-results` | Before & After — real client transformation photos |
| `/business-opportunity` | Business Opportunity — membership benefits, registration form, starter pack |
| `/reviews` | Client Reviews — testimonials with star ratings |
| `/contact` | Contact — form, address, phone, opening hours |
| `/925764824480` | Q&A — frequently asked questions (FAQ schema) |
| `/privacy-policy` | Privacy Policy |

## Project Structure

```
app/
├── layout.tsx              # Root layout, global metadata, JSON-LD (LocalBusiness, BreadcrumbList)
├── page.tsx                # Home page
├── globals.css             # Tailwind + custom styles
├── icon.tsx                # Dynamic favicon
├── apple-icon.tsx          # Apple touch icon
├── opengraph-image.tsx     # Dynamic OG image (1200x630)
├── manifest.ts             # PWA web manifest
├── robots.ts               # Robots.txt config
├── sitemap.ts              # XML sitemap
├── 925764824480/page.tsx   # Q&A / FAQ page
├── before-and-after-results/page.tsx
├── business-opportunity/
│   ├── layout.tsx          # Metadata (client component workaround)
│   └── page.tsx            # Registration form + benefits
├── contact/page.tsx
├── privacy-policy/page.tsx
├── reviews/page.tsx        # Reviews + AggregateRating schema
└── api/contact/route.ts    # Contact form API (Nodemailer)

components/
├── Navbar.tsx
└── Footer.tsx

public/
├── Member-Pack.png
└── before-after/           # 13 transformation images
```

## SEO & Structured Data

- **LocalBusiness** JSON-LD with address, geo, hours, social profiles
- **FAQPage** schema on Q&A page
- **AggregateRating + Review** schema on reviews page
- **BreadcrumbList** for search navigation
- Open Graph + Twitter Card metadata on all pages
- Dynamic OG image generation
- XML sitemap + robots.txt
- Canonical URLs on every page

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deployed on Vercel with custom domain `www.loseweighttoday.com.au`. Pushes to `main` trigger automatic deployments.
