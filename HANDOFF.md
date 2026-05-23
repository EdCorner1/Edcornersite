# Ed Corner Portfolio Handoff

## Current status

Local V1 scaffold is built and production build passes.

- App path: `/home/node/.openclaw/workspace/ed-corner-portfolio`
- Framework: Next.js App Router
- Styling: Tailwind CSS
- Video approach: data-driven registry, Cloudflare Stream-ready
- Deployment target: GitHub + Vercel

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Main edit points

```txt
src/data/videos.ts     # video cards + Cloudflare Stream IDs
src/data/projects.ts   # selected work/case studies
src/data/site.ts       # brands, stats, contact links
src/components/        # page sections
```

## Current sections

1. Header
2. Hero
3. Brand strip
4. Video wall
5. Services / what I do
6. Selected work
7. Stats
8. Process
9. Contact CTA
10. Footer

## Known next steps

1. Replace placeholder video slots with real Cloudflare Stream UIDs.
2. Confirm exact Calendly URL.
3. Confirm final stats — avoid inflated/fake numbers.
4. Add real logos/headshot if wanted. Current V1 works without them.
5. Initialise Git once Ed creates fresh GitHub project, or push to his chosen repo.
6. Connect Vercel to that repo.
7. Move domain/DNS after preview approval.

## Notes

- No fake testimonials included.
- No CMS/database included.
- No external deployment has been done yet.
- Keep this as a one-page site until there is a real reason to split pages.
