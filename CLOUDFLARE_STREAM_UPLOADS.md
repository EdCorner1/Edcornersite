# Cloudflare Stream Upload Handoff

Use this when Ed moves the Google Drive videos into Cloudflare Stream.

## Recommended naming format

```txt
brand-category-short-title-platform-date.mp4
```

Examples:

```txt
airalo-travel-esim-problem-solution-tiktok-2026-02.mp4
pingo-language-ai-hook-demo-reel-2026-05.mp4
clawbite-ai-agent-business-launch-short-2026-05.mp4
detris-ai-productivity-demo-tiktok-2026-05.mp4
polymarket-tech-market-explainer-tiktok-2026-05.mp4
personal-brand-ai-building-in-public-reel-2026-05.mp4
```

## After uploading to Cloudflare Stream

For each video, copy the Stream UID. It usually appears in URLs like:

```txt
https://iframe.videodelivery.net/STREAM_UID_HERE
```

Then edit:

```txt
src/data/videos.ts
```

Add the UID:

```ts
streamUid: "STREAM_UID_HERE",
```

The site automatically builds the embed URL:

```txt
https://iframe.videodelivery.net/STREAM_UID_HERE
```

If you already have a full iframe URL, use:

```ts
embedUrl: "https://iframe.videodelivery.net/STREAM_UID_HERE",
```

## Current video slots

| ID | Brand | Current title | Suggested file name | Stream UID |
|---|---|---|---|---|
| `airalo-travel-esim-ugc` | Airalo | Travel eSIM UGC Concept | `airalo-travel-esim-ugc-tiktok-2026-02.mp4` | |
| `pingo-ai-language-learning` | Pingo AI | AI Language Learning Demo | `pingo-language-ai-demo-reel-2026-05.mp4` | |
| `clawbite-ai-operator` | Clawbite | AI Operator Product Story | `clawbite-ai-operator-product-story-linkedin-2026-05.mp4` | |
| `detris-ai-productivity-demo` | Detris AI | AI Productivity Demo | `detris-ai-productivity-demo-tiktok-2026-05.mp4` | |
| `personal-tech-creator-build` | My Content | Building With AI In Public | `personal-brand-ai-building-in-public-reel-2026-05.mp4` | |
| `polymarket-market-ugc` | Polymarket | Prediction Market Explainer | `polymarket-prediction-market-explainer-tiktok-2026-05.mp4` | |

## Keep it simple

Do not build a database for V1. The `videos.ts` file is the database. It is boring, visible, version-controlled, and almost impossible to break unless someone gets creative. So, naturally, don't get creative.
