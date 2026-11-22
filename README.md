# Santhosh Kumar V: Portfolio

A fast, accessible, statically generated portfolio built with **Next.js (App Router)**, **React 19**,
**TypeScript** and **SCSS Modules**.

## Quick start

```bash
nvm use            # Node 22 (see .nvmrc); Node 20.9+ works
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the dev server                                 |
| `npm run build`     | Production build (fully static)                      |
| `npm run start`     | Serve the production build                           |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)  |
| `npm run typecheck` | `tsc --noEmit` with strict settings                  |
| `npm run test`      | Vitest + Testing Library                             |
| `npm run format`    | Prettier                                             |
| `npm run verify`    | Format check, lint, types, tests and build in one go |

## Updating content

All copy lives in **`src/content/profile.ts`** and is typed by `src/types/profile.ts`.
Components never hard-code text, so changing a role, metric or skill is a one-file edit.

- **Social profiles:** GitHub and LinkedIn live in `socials`. Add or change entries there and they update in
  the hero, the Contact section and the JSON-LD data automatically.
- **Replace the résumé:** overwrite `public/Santhosh-Kumar-V-Resume.pdf`.
- **Set the live URL:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`
  (used for canonical URLs, the sitemap and Open Graph).

## Project structure

```
src/
  app/                 Routes, metadata, sitemap, robots, icon
  components/
    layout/            Header, Footer, SkipLink
    sections/          Hero, About, Skills, Experience, Education, Contact
    ui/                Reusable primitives: Section, TagList, ButtonLink, ThemeToggle, CopyButton
    seo/               JSON-LD structured data
  content/             Typed profile data (+ content tests)
  hooks/               useActiveSection (scroll-spy for the nav)
  lib/                 Site config, theme bootstrap
  styles/
    abstracts/         Sass-only helpers (breakpoints, mixins); emit no CSS
    base/              Design tokens (CSS variables), reset, typography
  types/               Shared TypeScript interfaces
```

## Engineering decisions

- **Server Components by default.** Only the header, theme toggle and copy button are client
  components, so very little JavaScript ships.
- **Design tokens as CSS custom properties** (`styles/base/_tokens.scss`). Light and dark themes
  are a token swap; SCSS handles breakpoints and mixins.
- **No flash of wrong theme.** A tiny inline script sets `data-theme` before first paint, using the
  saved choice or the OS preference.
- **Self-hosted fonts** through Fontsource (Bricolage Grotesque, Instrument Sans, JetBrains Mono).
  No third-party font requests, no build-time network dependency, no layout shift from late swaps.
- **Accessibility:** semantic landmarks, skip link, labelled regions, visible focus, `aria-current`
  scroll-spy, live-region feedback on copy, reduced-motion support, AA colour contrast in both themes.
- **SEO:** Metadata API, canonical URL, Open Graph/Twitter tags, `sitemap.xml`, `robots.txt`,
  and `Person` JSON-LD.
- **Security headers** (nosniff, frame deny, referrer and permissions policies) in `next.config.ts`.
- **CI:** `.github/workflows/ci.yml` runs format check, lint, typecheck, tests and build on every push and PR.

## Deploying

The site is fully static, so any host works. On **Vercel**: import the repo, set
`NEXT_PUBLIC_SITE_URL`, deploy. For other hosts, run `npm run build` and serve with `npm run start`
(or add `output: 'export'` to `next.config.ts` for a pure static `out/` folder).

## Possible next steps

- Add a Content-Security-Policy (the inline theme script needs a nonce or hash).
- Add an `opengraph-image.tsx` for a branded social preview card.
- Add a Playwright smoke test and an axe accessibility check to CI.
