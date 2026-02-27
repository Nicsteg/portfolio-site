# Portfolio Site (Next.js)

A clean, modern portfolio website for showcasing your apps and projects.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Build for production
```bash
npm run build
npm run start
```

## Files to customize
- `src/app/page.tsx`
  - Hero text
  - About section
  - Contact links/email
  - Resume button (`/resume.pdf`)
- `src/data/projects.ts`
  - Add/remove project cards
  - Update live + GitHub links

## Add your resume
Put your resume file here:
- `public/resume.pdf`

Then the navbar **Resume** button will work automatically.

## Deploy
### Vercel (recommended)
1. Push this folder to GitHub
2. Import repo in Vercel
3. Deploy

### Netlify
1. Push to GitHub
2. Import repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
