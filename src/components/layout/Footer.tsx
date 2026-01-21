import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navigation = {
  realisations: [
    { name: "Garde-corps", href: "/realisations#garde-corps" },
    { name: "Escaliers", href: "/realisations#escaliers" },
    { name: "Portails", href: "/realisations#portails" },
    {
      name: "Charpente métallique",
      href: "/realisations#charpente-metallique",
    },
    {
      name: "Structures spécifiques",
      href: "/realisations#structures-specifiques",
    },
    {
      name: "Tuyauterie & Chaudronnerie",
      href: "/realisations#tuyauterie-chaudronnerie",
    },
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "L'entreprise", href: "/a-propos" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold">
                Iron<span className="text-accent-400">Steel</span>
              </span>
            </Link>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+33647480182"
                className="text-primary-300 hover:text-accent-400 flex items-center gap-3 text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>06 47 48 01 82</span>
              </a>
              <a
                href="mailto:contact@ironsteel.fr"
                className="text-primary-300 hover:text-accent-400 flex items-center gap-3 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@ironsteel.fr</span>
              </a>
              <p className="text-primary-300 flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  31 route de Strasbourg
                  <br />
                  67610 La Wantzenau
                </span>
              </p>
            </div>
          </div>

          {/* Réalisations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Nos Réalisations
            </h3>
            <ul className="space-y-3">
              {navigation.realisations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-300 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-300 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Garanties */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Nos Garanties
            </h3>
            <ul className="text-primary-300 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-accent-500 h-1.5 w-1.5 rounded-full" />
                Garantie décennale
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent-500 h-1.5 w-1.5 rounded-full" />
                Fabrication en Alsace
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent-500 h-1.5 w-1.5 rounded-full" />
                Devis gratuit
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent-500 h-1.5 w-1.5 rounded-full" />
                Normes françaises
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-primary-800 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-primary-400 text-sm">
            © {currentYear} Iron & Steel. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
