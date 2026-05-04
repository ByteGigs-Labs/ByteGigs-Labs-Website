# ByteGigs Labs — Website

Production-ready Next.js 14 website for ByteGigs Labs.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no Tailwind — clean, scoped styles)
- **Lucide React** (icons)
- **Google Places API** (server-side reviews fetch)
- **Vercel** (hosting)

---

## Setup Commands

Run these in order from your terminal:

```bash
# 1. Create the project folder and enter it
mkdir bytegigs-labs && cd bytegigs-labs

# 2. Initialize git
git init

# 3. Copy all project files into this folder
#    (paste the entire src/, public/, and config files here)

# 4. Install dependencies
npm install

# 5. Copy the env example and fill in your keys
cp .env.local.example .env.local
```

Open `.env.local` and add your keys:
```
GOOGLE_PLACES_KEY=AIzaSy...your_key_here
GOOGLE_PLACE_ID=CfTN0iFRgMalEAI
```

```bash
# 6. Add your logo
#    Copy my_logo1.png into the /public folder and rename it to logo.png

# 7. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

```bash
# 1. Install Vercel CLI globally (once)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy (first time — follow the prompts)
vercel

# 4. Set environment variables on Vercel dashboard:
#    Go to: Project → Settings → Environment Variables
#    Add: GOOGLE_PLACES_KEY  =  your_key
#    Add: GOOGLE_PLACE_ID    =  CfTN0iFRgMalEAI

# 5. Deploy to production
vercel --prod
```

Alternatively, push to GitHub and connect the repo in the Vercel dashboard — it will auto-deploy on every push to main.

---

## Project Structure

```
bytegigs-labs/
├── public/
│   └── logo.png              ← your logo goes here
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reviews/
│   │   │       └── route.ts  ← server-side Google Places fetch
│   │   ├── globals.css       ← CSS variables + resets
│   │   ├── layout.tsx        ← root layout + metadata
│   │   └── page.tsx          ← page assembly
│   ├── components/
│   │   ├── Navbar.tsx / .module.css
│   │   ├── Hero.tsx / .module.css
│   │   ├── Services.tsx / .module.css
│   │   ├── WhyUs.tsx / .module.css
│   │   ├── Reviews.tsx / .module.css
│   │   ├── Contact.tsx / .module.css
│   │   ├── Footer.tsx / .module.css
│   │   └── WhatsAppButton.tsx / .module.css
│   └── lib/
│       └── services.ts       ← services data
├── .env.local                ← your secrets (not committed)
├── .env.local.example        ← template
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Google Reviews Notes

- The API route `/api/reviews` fetches from Google Places server-side
- Results are **cached for 1 hour** (`revalidate: 3600`)
- If the API key is missing or the call fails, **8 realistic fallback reviews** are shown automatically — the site never looks empty
- Google Places API free tier returns the **5 most recent reviews**

---

## Customization

| What | Where |
|------|-------|
| Services list | `src/lib/services.ts` |
| Phone number | Search `254716738500` across components |
| Email | Search `info@bytegigslabs.com` |
| Colors | `src/app/globals.css` → `:root` variables |
| Stats numbers | `src/components/Hero.tsx` → `STATS` array |
