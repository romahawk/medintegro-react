# 📦 Strapi Content Model — Medintegro CMS
Blueprint for all content types used in **apps/cms (Strapi v5)**.  
This document defines the *structure*, *fields*, and *relationships* for the Medintegro CMS.

---

# 1️⃣ Single Types (Static Pages)

## 🏠 Home Page (`home-page`)
**Purpose:** main landing page, hero, sections, CTA.  
**Fields:**
- `hero_title` — text  
- `hero_subtitle` — rich text  
- `hero_image` — media  
- `integrated_or_highlights` — component list (Integrated OR features)  
- `partners_featured` — relation → `partner` (repeatable)  
- `cta_block` — component (CTA)

---

## 🧑‍⚕️ About Page (`about-page`)
**Fields:**
- `hero_title` — text  
- `hero_subtitle` — rich text  
- `mission_text` — rich text  
- `timeline` — component list  
- `integrated_or_highlights` — component list  
- `partners_section` — relation → `partner`  
- `cta_block` — component

---

## ⚙ Global Settings (`global-settings`)
**Fields:**
- `site_name` — text  
- `logo_light` — media  
- `logo_dark` — media  
- `contact_email` — text  
- `contact_phone` — text  
- `social_links` — component list (`social-link`)  
- `seo_default` — component (`seo`)

---

# 2️⃣ Collection Types (Dynamic)

## 🧩 Solution Category (`solution-category`)
**Fields:**
- `name` — text  
- `slug` — UID  
- `description` — rich text  
- `icon` — media  
- `seo` — component  

---

## 🧩 Solution (`solution`)
MedTech solutions like: Integrated OR, Digital Video Management, Medical Gas Integration.

**Fields:**
- `title` — text  
- `slug` — UID  
- `short_description` — text  
- `content` — rich text  
- `image_banner` — media  
- `gallery` — media (multiple)  
- `category` — relation → `solution-category`  
- `features` — component list (`feature`)  
- `specifications` — component list (`spec-item`)  
- `seo` — component

---

## 🏥 Equipment Category (`equipment-category`)
**Fields:**
- `name`  
- `slug`  
- `description`  
- `seo`

---

## 🏥 Equipment Item (`equipment-item`)
Equipment such as monitors, lights, consoles, recorders.

**Fields:**
- `title`  
- `slug`  
- `short_description`  
- `content` (rich)  
- `thumbnail` (media)  
- `gallery` (media multiple)  
- `vendor` (relation → `partner`)  
- `categories` (relation → many `equipment-category`)  
- `specifications` (component list)  
- `seo`

---

## 📄 Services (`service`)
**Fields:**
- `title`  
- `slug`  
- `description`  
- `icon` (media)  
- `steps` — component list  
- `seo`

---

## 🤝 Partners (`partner`)
Vendors like Surgiris, FSN, Telemis, ErgoMounts.

**Fields:**
- `name`  
- `logo` (media)  
- `website`  
- `description`  

---

## 📰 Blog Post (`blog-post`)
**Fields:**
- `title`  
- `slug`  
- `cover_image`  
- `content` (rich text or blocks)  
- `tags` — relation → `tag`  
- `seo`

---

## 🏷 Tags (`tag`)
**Fields:**
- `name`  
- `slug`

---

## 🏗 Case Study (`case-study`)
Implementations (e.g., 2025 OR renovation at city hospital).

**Fields:**
- `year` — number  
- `hospital_name` — text  
- `location` — text  
- `summary` — text  
- `content` — rich text  
- `cover_image` — media  
- `gallery` — media multiple  
- `related_solutions` — relation → `solution`  
- `seo`

---

# 3️⃣ Components (Reusable Blocks)

## SEO Component (`seo`)
- `meta_title`  
- `meta_description`  
- `share_image`

---

## Feature (`feature`)
Used in “Why Integrated OR?” lists.

- `title`  
- `description`  
- `icon` (media or shadcn icon name)

---

## Stat Item (`stat-item`)
- `label`  
- `value`

---

## CTA Block (`cta-block`)
- `title`  
- `subtitle`  
- `button_text`  
- `button_link`

---

## Social Link (`social-link`)
- `platform` (enum: linkedin, facebook, youtube)  
- `url`

---

## Spec Item (`spec-item`)
Technical parameter.

- `label`  
- `value`

---

# 4️⃣ Relationship Diagram (Simplified)

```
solution-category 1 --- n solution --- n partner
equipment-category 1 --- n equipment-item --- 1 partner
blog-post n --- n tag
case-study n --- n solution
home-page / about-page --- components / relations
```

---

# 5️⃣ Notes

- All slugs use Strapi UID field.  
- Media will use S3 in production.  
- Rich content blocks may later migrate to “Dynamic Zones”.  
- Fully multilingual support (UA/EN) planned as **Sprint 5**.

---

This file is used during **Sprint 1 (Define)** and **Sprint 2 (Implement)**.
