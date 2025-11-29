# Content Import Plan — WordPress → Strapi → Next.js

High-level plan for moving content from the legacy WordPress site into Strapi,
and then consuming it from the new Next.js frontend.

---

## 1. Source Types (WordPress)

- **Pages** (e.g. Home, About, Services, Equipment, Contact)
- **Posts** (Blog articles / news)
- **Custom pages** (if any, e.g. Integrated OR landing)
- **Media** (images, PDFs, brochures)
- **Taxonomies** (Categories, Tags)

Use `urls.csv` + the Yoast sitemap to identify all items.

---

## 2. Target Types (Strapi)

See `docs/CONTENT_MODEL.md` for full field definitions.

- Single Types:
  - `home-page`
  - `about-page`
  - `global-settings`

- Collection Types:
  - `solution-category`
  - `solution`
  - `equipment-category`
  - `equipment-item`
  - `service`
  - `partner`
  - `blog-post`
  - `tag`
  - `case-study` (for selected reference projects)

---

## 3. Mapping Table (Example)

| WP Type | WP URL / Slug                                 | Strapi Type        | Strapi Fields / Notes                                            |
|---------|-----------------------------------------------|--------------------|------------------------------------------------------------------|
| page    | /pro-nas/                                    | about-page (single)| Map page content → hero, mission_text, sections                  |
| page    | /poslugy/                                    | service (collection)| One Strapi `service` entry per key service                       |
| page    | /obladnannja/                                | equipment-category | High-level equipment group                                       |
| post    | /blog/svitovi-strategii-cifrovoi-mediciny/   | blog-post          | Title, slug, excerpt, content, cover image, tags                 |
| post    | /blog/medichna-robototehnika/                | blog-post or solution | Decide if it's a blog article or a long-living Solution page  |

Extend this table for all important URLs before actual migration.

---

## 4. Import Workflow

1. **Export** content from WordPress (XML or via plugin).
2. **Normalize** into CSV/JSON using `urls.csv` as reference.
3. **Create content types** in Strapi following `CONTENT_MODEL.md`.
4. **Import** structured content into Strapi:
   - Manually for small volume (copy/paste)
   - Or via Strapi import plugin / custom script for larger volumes.
5. **Upload media** (images, brochures) into Strapi media library and re-link them in entries.
6. **Connect Next.js** to Strapi via REST/GraphQL and build pages:
   - `/about` from `about-page`
   - `/services` from `service`
   - `/equipment/*` from `equipment-category` + `equipment-item`
   - `/blog/*` from `blog-post`

---

## 5. Verification

- Check each old URL from `urls.csv`:
  - Has an equivalent in Strapi?
  - Has a redirect defined in `redirect_map.md`?
- Spot-check 10–20 important pages in the new Next.js site:
  - Content completeness
  - Media accuracy
  - SEO meta (title, description, canonical)

When both `redirect_map.md` and this import plan are complete and verified,
Sprint 1 (Discovery & Setup) can be fully closed from the content perspective.
