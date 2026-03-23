# Portfolio Site

A modern personal portfolio built with Next.js to showcase projects, background, and contact information.

## Overview
This project is a clean, recruiter-friendly portfolio site with:
- a hero section and personal intro
- featured and secondary project cards
- about and contact sections
- resume link support
- easy-to-edit project data

## Tech stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Features
- responsive single-page portfolio layout
- project cards driven by `src/data/projects.ts`
- profile image support
- resume download/link via `public/resume.pdf`
- GitHub and LinkedIn contact links

## Getting started
```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Production
```bash
npm run build
npm run start
```

## Useful scripts
- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production build
- `npm run lint` - run ESLint

## Key files
- `src/app/page.tsx` - main landing page content
- `src/data/projects.ts` - featured and additional projects
- `public/images/profile.jpg` - profile image
- `public/resume.pdf` - resume file

## Customize
### Update project cards
Edit:
- `src/data/projects.ts`

### Update personal copy and links
Edit:
- `src/app/page.tsx`

### Update photo
Replace:
- `public/images/profile.jpg`

### Update resume
Add or replace:
- `public/resume.pdf`

## Deployment
### Vercel
1. Push to GitHub
2. Import the repo into Vercel
3. Deploy

## Why this repo matters
This is a strong candidate for your public GitHub profile because it quickly shows:
- your current frontend stack
- your project presentation skills
- your ability to ship polished UI
