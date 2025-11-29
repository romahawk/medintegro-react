# Medintegro React — Monorepo

Rebuild of the MedIntegro website as a modern **Next.js + Strapi** stack, with a focus on **Integrated OR solutions**, digital surgery, and telemedicine.

## 🔧 Monorepo Layout

```
apps/
  web/        → Next.js 14 (App Router) + Tailwind + shadcn/ui  
  cms/        → Strapi v5 (SQLite local) + GraphQL  
packages/
  ui/         → Shared UI components (future design system)
```

---

## 🚀 Tech Stack

### **Frontend (`apps/web`)**
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom OKLCH theme)
- shadcn/ui component library
- React functional components
- Alias imports `@/`

### **Backend / CMS (`apps/cms`)**
- Strapi v5 CMS
- SQLite (local development)
- GraphQL plugin enabled
- Media library (S3 planned for production)

---

## 📁 Project Structure

```
apps/web/
 └─ src/
     ├─ app/            # Routing (e.g., /about, /services)
     ├─ components/
     │    ├─ sections/  # Page sections (HeroAbout, PartnersSection…)
     │    └─ ui/        # Reusable UI primitives
     ├─ styles/
     └─ public/

apps/cms/
 └─ (Strapi project files)
```

---

## ▶️ Local Development

### Install dependencies
```bash
npm install
```

### Run frontend
```bash
npm run dev:web
```

### Run Strapi CMS
```bash
npm run dev:cms
```

---

## 🔑 Environment Variables

### **Frontend**
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CMS_URL=
```

### **Strapi**
```
STRAPI_ADMIN_EMAIL=
STRAPI_ADMIN_PASSWORD=
DATABASE_FILENAME=strapi.db
```

---

## 📏 Coding Conventions

- All components use `.tsx`
- Use `@/` for imports
- Tailwind for all styling + shadcn for primitives
- Sections grouped per page inside `components/sections/`
- Dark mode fully supported

---

## 🗂 Roadmap (Sprints)

### **Sprint 1 — Discovery & Setup**
- Export sitemap + redirect map  
- Monorepo initialization  
- Next.js + Tailwind + shadcn installed  
- Strapi setup  
- GitHub + Vercel linking  

### **Sprint 2 — Foundation Build**
- Header & Footer
- Navigation structure
- Layout system  
- Base pages wired to Strapi models  

### **Sprint 3 — Content & UI Integration**
- All pages connected with CMS
- Dynamic content blocks
- Polished sections with animations

---

## ☁️ Deployment

### **Vercel** – frontend  
### **Render/Railway** – CMS  
Custom domain → Cloudflare → Vercel

---

## 📝 Notes

This monorepo is built with long‑term scalability in mind:  
shared UI library, headless CMS structure, and modular architecture.

