# Ed Corner Portfolio

Minimal video-first portfolio site for Ed Corner.

## Stack

- Next.js App Router
- Vercel-ready
- Tailwind CSS
- Data-driven video/project registry
- Cloudflare Stream-ready video fields

## Editing videos

Video cards are controlled from:

```txt
src/data/videos.ts
```

For each uploaded Cloudflare Stream video, add either:

```ts
streamUid: "YOUR_CLOUDFLARE_STREAM_UID"
```

or a full embed URL:

```ts
embedUrl: "https://iframe.videodelivery.net/YOUR_UID"
```

If `streamUid` or `embedUrl` is empty, the site shows a clean placeholder card.

## Editing site content

- Brands/stats/contact: `src/data/site.ts`
- Case studies/projects: `src/data/projects.ts`
- Main sections/components: `src/components/`

## Local dev

```bash
npm run dev
```

## Build

```bash
npm run build
```
