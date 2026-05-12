# Venny — Portfolio

A multi-page portfolio for Venkata Anand Sai Kumar Narla — AI engineer at Everstage, focused on agentic AI and LLM infrastructure.

Design is built around a custom **Iris on Vellum** palette — cool ivory paper, deep navy ink, vibrant iris-violet accent. Headlines set in Fraunces, body in Inter.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v3** with the custom `paper` / `ink` / `iris` token scale
- **Framer Motion** for restrained fade-up reveals
- **next/font** loading Fraunces (headlines) and Inter (UI)
- **Lucide** for icons

## Routes

| Path | Purpose |
|---|---|
| `/` | Hero · Stat strip · Currently shipping · Selected experience · Recognition · CTA |
| `/about` | Long-form bio with portrait · Skills · Education · Leadership · Certifications |
| `/work` | Career rail + full experience timeline (Everstage, Diebold Nixdorf, MulticoreWare, IBM) |
| `/projects` | Featured GenAI projects + tooling grid (with GitHub repo OG cards) |
| `/posts` | Featured LinkedIn essay + recurring topics + aggregate engagement stats |
| `/research` | Earlier CV / SLAM chapter · IEEE publications · research-project grid |
| `/contact` | Email · socials · slow-medium card |

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Editing content

All copy and structured data live in **`src/data/info.ts`**. Components read from it — change facts there and every page updates.

- `profile` — name, title, tagline, avatar, about paragraphs (set `openToWork: true` to surface the badge again)
- `socials` — links shown in nav, footer, posts, and `/contact`
- `currentlyShipping` — three hero cards on the home page
- `experiences` — companies, grouped roles, bullets, skills, logos
- `projects` and `researchWork` — project cards (auto-pulled OG cards from `repo` field)
- `publications`, `education`, `certifications`, `leadership`, `awards`
- `skills` — primary chip cluster + secondary "also fluent" cluster
- `posts`, `postsAggregate`, `postTopics` — LinkedIn writing surfaced on `/posts`
- `heroStats` — the four-stat strip below the home hero
- `nav` — the global navigation entries

## Design tokens

Tailwind config (`tailwind.config.ts`) exposes the palette:

- `paper` — `#f5f3eb` vellum background; `paper-soft`, `paper-warm` for section tones; `paper-card` for elevated surfaces
- `ink` — navy text scale from `ink-50` to `ink-950` (`#0b1226`)
- `iris` — primary violet accent `#574ae0`; `iris-deep` `#3a2fa3`, `iris-soft`, `iris-wash`

Custom font sizes: `display`, `hero`, `h2` — all `clamp()`-based for fluid type.

## Deploy

Out-of-the-box ready for **Vercel** (zero config) or **Netlify** (build = `next build`). No environment variables required.

## Source of truth

Content sourced from the LinkedIn export at [`linkedin.md`](./linkedin.md) and structured data at [`src/data/info.ts`](./src/data/info.ts).
