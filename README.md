# Saurabh Verma — Software Developer & Freelancer Portfolio

Modern personal portfolio built with React, Vite, Tailwind CSS, Framer Motion (`motion`), Lucide Icons, React Router DOM, and EmailJS.

## Features

- Dark luxury UI (`#080B14` / `#101827`) with sky-blue (`#38BDF8`) and indigo (`#6366F1`) accents
- Responsive sticky glassmorphism navigation bar & mobile drawer
- Interactive Hero with code/workflow tabs and studio portrait
- About Me section with editable career metrics (`src/data/portfolioData.ts`)
- Services asymmetric grid (Web, Full Stack, Android, WordPress, Shopify, SEO & AEO)
- Interactive Technical Skills filter tabs
- Filterable Projects showcase with case-study modal and editable Live Demo / GitHub URLs (`src/data/projects.ts`)
- **Certifications section with interactive Certificate View Popup modal** (`src/data/certifications.ts`)
- Experience timeline (Freelance Software Developer & Appmingle)
- EmailJS contact form with validation + direct contact links
- Resume preview & PDF print/download modal
- Custom 404 page

## Required npm Packages

- `react` & `react-dom`
- `react-router-dom`
- `motion` (Framer Motion)
- `lucide-react`
- `@emailjs/browser`
- `tailwindcss` & `@tailwindcss/vite`

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file from `.env.example` and add your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```
   Set:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

3. Start the development server on port 3000:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Customizing Content

- **Profile, Metrics, Experience & Contact Links:** `src/data/portfolioData.ts`
- **Projects & Live/GitHub URLs:** `src/data/projects.ts`
- **Certifications & Certificate Images:** `src/data/certifications.ts`
- **Services & Skills:** `src/data/services.ts`, `src/data/skills.ts`

## Deploy on Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the Framework Preset set to **Vite** (`Build Command: npm run build`, `Output Directory: dist`).
4. Add your `VITE_EMAILJS_*` environment variables in Vercel Project Settings → Environment Variables.
5. Add a `vercel.json` rewrite if you want SPA routing for custom paths (such as `/404` fallback):
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
6. Click **Deploy**.
