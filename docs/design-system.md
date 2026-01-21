# Design System — Iron Steel

Site vitrine pour une entreprise de métallerie artisanale en Alsace.

---

## Identité Visuelle

- **Style**: Artisanal élégant
- **Ambiance**: Chaleureux, textures subtiles, accent sur le savoir-faire
- **Mode**: Light uniquement

---

## Palette de Couleurs

### Primary (Gris)

```css
--primary-50: #f8f8f8; /* Backgrounds légers */
--primary-100: #e8e8e8;
--primary-200: #d4d4d4;
--primary-300: #b3b3b3;
--primary-400: #8a8a8a;
--primary-500: #4b4b4b; /* Couleur principale */
--primary-600: #3e3e3e;
--primary-700: #303030;
--primary-800: #1f1f1f;
--primary-900: #000000; /* Texte principal - Noir pur */
```

### Accent (Bleu)

```css
--accent-50: #e9f6fb;
--accent-100: #d3eef8;
--accent-200: #a7ddf1;
--accent-300: #7bccea;
--accent-400: #4fbbe3;
--accent-500: #27a6d9; /* Couleur principale */
--accent-600: #1f8ab4;
--accent-700: #186e8f;
--accent-800: #12526a;
--accent-900: #0b3645;
```

### Semantic

```css
--success: #059669; /* Vert */
--warning: #d97706; /* Orange */
--error: #dc2626; /* Rouge */
--info: #27a6d9; /* Bleu (identique à accent) */
```

### Backgrounds

```css
--bg-primary: #ffffff; /* Fond principal */
--bg-secondary: #f8f8f8; /* Sections alternées */
--bg-accent: #e9f6fb; /* Mise en avant bleu */
```

---

## Typographie

### Font Family

```css
font-family: "Poppins", system-ui, sans-serif;
```

### Échelle Typographique

| Élément | Desktop         | Mobile          | Weight |
| ------- | --------------- | --------------- | ------ |
| H1      | 48px / 3rem     | 32px / 2rem     | 600    |
| H2      | 36px / 2.25rem  | 28px / 1.75rem  | 600    |
| H3      | 24px / 1.5rem   | 20px / 1.25rem  | 600    |
| H4      | 20px / 1.25rem  | 18px / 1.125rem | 500    |
| Body    | 16px / 1rem     | 16px / 1rem     | 400    |
| Small   | 14px / 0.875rem | 14px / 0.875rem | 400    |
| Caption | 12px / 0.75rem  | 12px / 0.75rem  | 400    |

### Line Height

- Headings: 1.2
- Body: 1.6
- UI Elements: 1.4

---

## Espacements

### Échelle (base 4px)

```css
--space-1: 4px; /* 0.25rem */
--space-2: 8px; /* 0.5rem */
--space-3: 12px; /* 0.75rem */
--space-4: 16px; /* 1rem */
--space-5: 20px; /* 1.25rem */
--space-6: 24px; /* 1.5rem */
--space-8: 32px; /* 2rem */
--space-10: 40px; /* 2.5rem */
--space-12: 48px; /* 3rem */
--space-16: 64px; /* 4rem */
--space-20: 80px; /* 5rem */
--space-24: 96px; /* 6rem */
```

### Sections

- Padding horizontal: 16px (mobile) / 24px (tablet) / 64px (desktop)
- Espacement sections: 64px (mobile) / 96px (desktop)

---

## Border Radius

```css
--radius-sm: 4px; /* Petits éléments */
--radius-md: 8px; /* Boutons, inputs */
--radius-lg: 12px; /* Cards */
--radius-xl: 16px; /* Modals, grandes cards */
--radius-full: 9999px; /* Pills, avatars */
```

---

## Ombres

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md:
  0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
--shadow-lg:
  0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
--shadow-xl:
  0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03);
```

---

## Composants

### Boutons

**Primary (Bleu)**

```css
.btn-primary {
  background: var(--accent-500);
  color: white;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: var(--accent-600);
  box-shadow: var(--shadow-md);
}
```

**Secondary (Outline)**

```css
.btn-secondary {
  background: transparent;
  color: var(--primary-700);
  border: 1.5px solid var(--primary-300);
  padding: 12px 24px;
  border-radius: var(--radius-md);
}
.btn-secondary:hover {
  border-color: var(--accent-500);
  color: var(--accent-600);
}
```

### Cards

```css
.card {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 24px;
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: var(--shadow-md);
}
```

### Inputs

```css
.input {
  border: 1.5px solid var(--primary-200);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}
.input:focus {
  border-color: var(--accent-500);
  outline: none;
  box-shadow: 0 0 0 3px rgba(39, 166, 217, 0.15);
}
```

---

## Transitions

```css
--transition-fast: 0.15s ease;
--transition-normal: 0.2s ease;
--transition-slow: 0.3s ease;
```

---

## Breakpoints

```css
--breakpoint-sm: 640px; /* Mobile paysage */
--breakpoint-md: 768px; /* Tablette */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

---

## Do's and Don'ts

### ✅ Do's

- Utiliser le bleu pour les CTA et éléments d'action principaux
- Maintenir une hiérarchie visuelle claire avec les tailles de police
- Laisser respirer le contenu avec des marges généreuses
- Utiliser des images de qualité pour valoriser le travail artisanal
- Garder une cohérence dans les espacements (multiples de 4px)

### ❌ Don'ts

- Ne pas surcharger avec trop d'éléments bleus
- Ne pas utiliser de couleurs saturées en dehors de la palette
- Ne pas réduire les espacements en mobile
- Ne pas utiliser des photos de mauvaise qualité
- Ne pas mélanger plusieurs styles de border-radius
