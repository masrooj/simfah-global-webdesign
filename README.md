# Simfah Global — Web Design (Next.js)

**Product 2:** Landing page for local-business web design (restaurants, salons, clinics, etc.).

**Product 1 (separate):** [simfahglobal.com](https://simfahglobal.com) — enterprise site (AI, apps, ERP) in `../simfah-global-landing`.

Deploy this project on its **own** Vercel project and domain (e.g. `web.simfahglobal.com`), not the root domain, unless you intentionally replace the enterprise homepage.

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local — copy SMTP_* from simfah-global-landing/.env.local if you already use Hostinger mail
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables (`.env.local`)

| Variable | Purpose |
|----------|---------|
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Contact form email (same as enterprise site) |
| `SMTP_SECURE`, `SMTP_ENCRYPTION` | Usually `true` and `SSL` for Hostinger |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp links (`94777154524`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO / sitemap (e.g. `https://web.simfahglobal.com`) |

Contact form posts to **`/api/contact`** on this app (no cross-domain CORS).

## Content

Edit **`config/site.ts`** for copy, pricing, industries, contact display, social links.

## Images

```bash
bash scripts/download-images.sh
```

## Build & deploy

```bash
npm run build
npm start
```

On Vercel: add the same env vars as above. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

## Project structure

```
config/site.ts              ← marketing copy & pricing
.env.example                ← env template
src/app/api/contact/        ← nodemailer (like simfahglobal.com)
src/app/robots.ts           ← SEO
src/app/sitemap.ts          ← SEO
public/images/              ← page photos
public/simfah-logo.png      ← brand logo
```
