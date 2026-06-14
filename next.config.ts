import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique : génère un dossier `out/` (HTML/CSS/JS) déployable
  // sur un hébergement mutualisé Apache (Hostinger).
  output: "export",

  // L'optimiseur d'images de Next nécessite un serveur Node : on le désactive
  // pour l'export statique (les images sont servies telles quelles).
  images: {
    unoptimized: true,
  },

  // Génère des dossiers `/contact/index.html` plutôt que `/contact.html`,
  // ce qui donne des URLs propres servies nativement par Apache.
  trailingSlash: true,
};

export default nextConfig;
