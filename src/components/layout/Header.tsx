"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { getButtonClasses } from "@/components/ui/Button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'entreprise", href: "/a-propos" },
  { name: "Prestations", href: "/prestations" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Zone d'intervention", href: "/zone-intervention" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary-900 text-xl font-semibold">
            Iron<span className="text-accent-500">Steel</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary-600 hover:text-accent-600 text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+33000000000"
            className="text-primary-600 hover:text-accent-600 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>03 00 00 00 00</span>
          </a>
          <Link href="/contact" className={getButtonClasses("primary", "sm")}>
            Devis gratuit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-primary-700 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "border-primary-100 bg-white lg:hidden",
          mobileMenuOpen ? "block border-t" : "hidden"
        )}
      >
        <div className="container-custom space-y-1 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary-700 hover:bg-primary-50 hover:text-accent-600 block rounded-lg px-4 py-3 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-primary-100 mt-4 border-t pt-4">
            <a
              href="tel:+33000000000"
              className="text-primary-600 flex items-center gap-2 px-4 py-3 text-base font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>03 00 00 00 00</span>
            </a>
            <div className="px-4 pt-2">
              <Link
                href="/contact"
                className={getButtonClasses("primary", "md", "w-full")}
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
