# Design System — Iron Steel

Site vitrine pour une entreprise de métallerie artisanale en Alsace.

---

## Identité Visuelle

- **Style**: Artisanal élégant
- **Ambiance**: Chaleureux, textures subtiles, accent sur le savoir-faire
- **Mode**: Light uniquement

---

## Palette de Couleurs

### Primary (Gris Métal)

```css
--primary-50: #f7f7f7; /* Backgrounds légers */
--primary-100: #e8e8e8;
--primary-200: #d1d1d1;
--primary-300: #b0b0b0;
--primary-400: #888888;
--primary-500: #4a4a4a; /* Couleur principale */
--primary-600: #3d3d3d;
--primary-700: #2f2f2f;
--primary-800: #1f1f1f;
--primary-900: #0f0f0f; /* Texte principal */
```

### Accent (Doré)

```css
--accent-50: #fdf8f0;
--accent-100: #f9edd9;
--accent-200: #f0d9a8;
--accent-300: #e4c170;
--accent-400: #d4a84a;
--accent-500: #b8860b; /* Couleur principale */
--accent-600: #9a7009;
--accent-700: #7a5807;
--accent-800: #5c4205;
--accent-900: #3d2c04;
```

### Semantic

```css
--success: #059669; /* Vert */
--warning: #d97706; /* Orange */
--error: #dc2626; /* Rouge */
--info: #2563eb; /* Bleu */
```

### Backgrounds

```css
--bg-primary: #ffffff; /* Fond principal */
--bg-secondary: #f7f7f7; /* Sections alternées */
--bg-accent: #fdf8f0; /* Mise en avant doré */
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

**Primary (Doré)**

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
  box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.1);
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

- Utiliser le doré pour les CTA et éléments d'action principaux
- Maintenir une hiérarchie visuelle claire avec les tailles de police
- Laisser respirer le contenu avec des marges généreuses
- Utiliser des images de qualité pour valoriser le travail artisanal
- Garder une cohérence dans les espacements (multiples de 4px)

### ❌ Don'ts

- Ne pas surcharger avec trop d'éléments dorés
- Ne pas utiliser de couleurs saturées en dehors de la palette
- Ne pas réduire les espacements en mobile
- Ne pas utiliser des photos de mauvaise qualité
- Ne pas mélanger plusieurs styles de border-radius
