# CLAUDE.md — Iron Steel

## Project Overview

Site vitrine pour une entreprise familiale de métallerie générale basée en Alsace.
Objectif principal: Générer des demandes de devis.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Resend |
| Hosting | Vercel |
| Package Manager | pnpm |

---

## Project Structure

```
iron-steel/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/
│   │   └── ui/           # Base UI components
│   ├── features/         # Feature modules
│   ├── lib/              # Utilities, configs
│   ├── hooks/            # Global hooks
│   ├── services/         # API calls
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
├── public/               # Static assets
├── context/              # Design references
│   ├── design-principles.md
│   ├── style-guide.md
│   ├── project-context.md
│   └── reference-screenshots/
├── docs/
│   └── design-system.md  # Design tokens
└── .claude/
    └── agents/           # Claude agents
```

---

## Design System

### Colors
- **Primary**: Gris métal `#4A4A4A`
- **Accent**: Doré `#B8860B`
- **Background**: `#FFFFFF`
- **Surface**: `#F7F7F7`

### Typography
- **Font**: Poppins (400, 500, 600, 700)
- **Headings**: 600 weight
- **Body**: 400 weight

### Style
- Border radius: Medium (8-12px)
- Shadows: Subtiles
- Mode: Light uniquement

Voir `/docs/design-system.md` pour les détails complets.

---

## Key Commands

```bash
# Development
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
pnpm tsc --noEmit # Check TypeScript
```

---

## Conventions

### Naming
- Components: PascalCase (`Button.tsx`)
- Hooks: camelCase with `use` prefix (`useContact.ts`)
- Utils: camelCase (`formatDate.ts`)
- Types: PascalCase with descriptive names (`ServiceType.ts`)

### Imports
- Use `@/` alias for src imports
- Group: external → internal → types → styles

### Components
- Functional components with TypeScript
- Props interface defined above component
- Export at bottom of file

### Commits
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- En français ou anglais, cohérent

---

## Pages Prévues

1. `/` — Accueil
2. `/a-propos` — L'entreprise
3. `/prestations` — Liste des services
   - `/prestations/garde-corps`
   - `/prestations/escaliers`
   - `/prestations/portails`
   - `/prestations/pergolas`
   - `/prestations/cuisines-inox`
   - `/prestations/tuyauterie`
   - `/prestations/structures`
4. `/realisations` — Portfolio
5. `/zone-intervention` — Couverture géographique
6. `/contact` — Formulaire de devis

---

## Do Not Touch

- `next.config.ts` — Configuration Next.js
- `tailwind.config.ts` — Sauf pour ajouts au design system
- `tsconfig.json` — Configuration TypeScript
- `/context/` — Design references (sauf ajouts)

---

## Reference Module

> TBD après le premier `/epct`

---

## Environment Variables

```env
# .env.local (example)
RESEND_API_KEY=re_xxx
```

---

## SEO

Chaque page doit avoir:
- Titre unique et descriptif
- Meta description (150-160 chars)
- Open Graph tags
- Structured data si applicable (LocalBusiness)

---

## Notes

- Site statique, contenu hardcodé
- Photos fournies par le client
- Zone: France entière + pays frontaliers
- Garantie décennale à mettre en avant
