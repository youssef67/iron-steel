# Iron Steel

Site vitrine pour une entreprise familiale de métallerie artisanale basée en Alsace.

## Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend
- **Hosting**: Vercel

## Getting Started

### Prérequis

- Node.js 18+
- pnpm

### Installation

```bash
# Installer les dépendances
pnpm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement dans .env.local
```

### Développement

```bash
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts

| Commande         | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Serveur de développement (Turbopack) |
| `pnpm build`     | Build de production                  |
| `pnpm start`     | Serveur de production                |
| `pnpm lint`      | Linting ESLint                       |
| `pnpm lint:fix`  | Corriger les erreurs ESLint          |
| `pnpm format`    | Formater avec Prettier               |
| `pnpm typecheck` | Vérification TypeScript              |

## Structure du Projet

```
src/
├── app/              # Pages Next.js (App Router)
├── components/
│   ├── layout/       # Header, Footer
│   └── ui/           # Composants UI réutilisables
├── features/         # Modules fonctionnels
├── lib/              # Utilitaires
├── hooks/            # Hooks React globaux
├── services/         # Appels API
├── types/            # Types TypeScript
└── styles/           # Styles globaux
```

## Design System

Le design system est documenté dans:

- `docs/design-system.md` — Tokens et composants
- `context/design-principles.md` — Principes de design
- `context/style-guide.md` — Guide de style

### Couleurs

- **Primary**: Gris métal `#4A4A4A`
- **Accent**: Doré `#B8860B`

### Typographie

- **Font**: Poppins (400, 500, 600, 700)

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur `main`.

```bash
# Build de production
pnpm build

# Preview local
pnpm start
```

## Variables d'Environnement

| Variable         | Description                              |
| ---------------- | ---------------------------------------- |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails     |
| `CONTACT_EMAIL`  | Email de réception des demandes de devis |

## License

Propriétaire — Tous droits réservés.
