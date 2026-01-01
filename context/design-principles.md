# Design Principles — Iron Steel

## 1. Mobile-First
- Design pour 375px d'abord, puis adapter pour desktop
- Targets tactiles : minimum 44x44px
- Navigation adaptée aux zones du pouce

## 2. Typographie
- H1: 48px desktop / 32px mobile
- Body: 16px minimum
- Line height: 1.6 pour la lisibilité
- Max largeur de ligne: 65-75 caractères

## 3. Espacements
- Système de grille 8px
- Padding cohérent: 16px mobile, 24px desktop
- Espacement sections: 64-96px

## 4. Couleurs
- Doré pour les CTA et actions principales
- Gris métal pour les textes et fonds
- Couleurs sémantiques pour le feedback (succès, erreur, warning)
- Contraste WCAG: 4.5:1 minimum pour le texte

## 5. Hiérarchie Visuelle
- La taille indique l'importance
- L'espace blanc crée le focus
- Révélation progressive pour la complexité

## 6. États Interactifs
- Chaque élément interactif a besoin de: default, hover, active, focus, disabled
- États de chargement pour les opérations asynchrones
- États vides avec guidance utile
- États d'erreur avec actions de récupération claires

## 7. Accessibilité
- Navigation au clavier
- Compatible lecteurs d'écran
- Contraste de couleur suffisant
- Indicateurs de focus visibles

## 8. Performance
- Images optimisées (WebP, lazy loading)
- Fonts optimisées (subsetting, preload)
- Animations légères (transform, opacity)

## 9. Cohérence
- Mêmes patterns pour les mêmes fonctions
- Vocabulaire visuel unifié
- Comportements prévisibles
