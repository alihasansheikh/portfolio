# alihasansheikh.com — portfolio

Backend engineer portfolio. Next.js 15 · TypeScript · Tailwind CSS 4. The site itself is a work sample: clean components, typed data layer, semantic HTML, JSON-LD, reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit

| What | File |
|---|---|
| Case studies, metrics, stack lists | `data/projects.ts` |
| Email / WhatsApp / GitHub / LinkedIn links | top of `app/page.tsx` |
| Headline, about copy | `app/page.tsx` |
| Colors, fonts, chips | `app/globals.css` |
| SEO title/description, JSON-LD | `app/layout.tsx` |
| CV download | replace `public/cv.pdf` |

Note: contact email is set to `ali@alihasansheikh.com`. Until that mailbox exists (Spacemail), swap in your Gmail at the top of `app/page.tsx` so the button works.

Also update the BuilderConnect GitHub link in `data/projects.ts` to point at the actual repo (it currently points at your profile).

## Deploy (free)

1. Push this folder to a **public GitHub repo** (public = it doubles as a code sample):
   ```bash
   git init && git add -A && git commit -m "Portfolio v1"
   git remote add origin https://github.com/alihasansheikh/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com → sign in with GitHub → **Import** the repo → Deploy. No config needed; it detects Next.js.
3. In Vercel → Project → **Settings → Domains** → add `alihasansheikh.com` (and `www.alihasansheikh.com`).
4. Vercel shows you DNS records. In Spaceship → Domain Manager → Advanced DNS, add them:
   - `A` record, host `@`, value `76.76.21.21`
   - `CNAME` record, host `www`, value `cname.vercel-dns.com`
   (Use exactly what Vercel's Domains screen shows — it's authoritative if these ever change.)
5. Wait for DNS to propagate (minutes to a few hours). SSL is automatic.

Every `git push` after this redeploys the site.

## Email (after Spacemail is set up)

Add Spacemail's MX / SPF / DKIM / DMARC records in the same Spaceship Advanced DNS panel — they coexist fine with the Vercel records above (Vercel handles web, Spacemail handles mail).
