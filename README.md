# Yasir Al-Shukaili — Professional Portfolio

Personal site and curriculum vitae of **Yasir Obaid Thani Al-Shukaili**, Head of the
Livestock Reproduction Research Section at Oman's Livestock Production Research
Centre, Ministry of Agriculture, Fisheries and Water Resources.

Fully bilingual (English / Arabic with real RTL), light and dark, and printable.

## Design

The visual language is scientific-editorial: warm paper, ink, and a single pine
green used only in structural roles — rules, section numerals, small-caps labels
and links. Type is one superfamily, IBM Plex, whose Latin and Arabic cuts are
drawn against the same skeleton, so the two language editions read as one
document rather than two translations.

Islamic geometry appears as watermarked paper rather than decoration. Three
genuine constructions are used, one per surface, each anchored to a corner and
falling away on the diagonal:

| Surface  | Motif       | Construction                                       |
| -------- | ----------- | -------------------------------------------------- |
| Home     | `khatim`    | Eight-pointed star — a square overlaid on itself at 45° |
| Footer   | `rosette12` | Twelve-pointed star — three squares stepped by 30° |
| CV       | `octagon`   | Truncated-square tiling — octagons with rotated squares between |

Each field breathes on a ~50-second cycle: a soft region drifts across the
watermark so areas brighten and recede. The drift bottoms out well above zero,
so nothing switches on or off, and it is disabled entirely under
`prefers-reduced-motion`.

## Stack

- **Next.js 15** (App Router, static export of every route)
- **React 19**
- **Tailwind CSS v4** — tokens declared in `src/app/globals.css`
- **TypeScript**
- No UI framework, no animation library, no icon package.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, JSON-LD Person schema, no-flash boot script
    page.tsx          the single-page site
    cv/page.tsx       the CV, which is also the print/PDF document
    globals.css       design tokens, editorial primitives, arabesque, print rules
    sitemap.ts robots.ts
  components/         one component per section, plus Arabesque, Nav, Toggles
  lib/
    content.ts        every fact on the site, each field bilingual
    i18n.tsx          language context + UI strings
    site.ts           canonical origin
public/
  cv/                 pre-rendered A4 PDFs, English and Arabic
  images/             portraits and field photography
scripts/
  make-cv-pdf.mjs     regenerates the PDFs from the live /cv route
```

All content lives in `src/lib/content.ts`. Every field carries both an `en` and
an `ar` value, so the language switch can never fall back to an untranslated
string. To update the CV, edit that file — the site, the `/cv` page and the
downloadable PDFs all read from it.

## Develop

```bash
npm install
npm run dev
```

## Regenerating the CV PDFs

The PDFs in `public/cv/` are rendered from the `/cv` route using its own print
stylesheet, so the download and the on-screen document cannot drift apart.
Puppeteer is not a project dependency — it is installed only for this task.

```bash
npm run build && npx next start -p 3222
```

```bash
npm i -D puppeteer && node scripts/make-cv-pdf.mjs http://localhost:3222 && npm uninstall puppeteer
```

## Deployment

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production origin so the
canonical URL, sitemap, robots and Open Graph tags resolve correctly.

---

© 2026 Yasir Obaid Thani Al-Shukaili.
