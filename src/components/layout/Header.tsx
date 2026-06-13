"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { getButtonClasses } from "@/components/ui/Button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'entreprise", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="container-custom flex h-32 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-iron-steel.svg"
            alt="Iron Steel"
            width={280}
            height={140}
            className="h-28 w-auto md:h-32"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-accent-500"
                    : "text-primary-600 hover:text-accent-600"
                )}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={cn(
                    "bg-accent-500 absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+33616323709"
            className="text-primary-600 hover:text-accent-600 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>06.16.32.37.09</span>
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
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-accent-50 text-accent-600 border-accent-500 border-l-4"
                    : "text-primary-700 hover:bg-primary-50 hover:text-accent-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="border-primary-100 mt-4 border-t pt-4">
            <a
              href="tel:+33616323709"
              className="text-primary-600 flex items-center gap-2 px-4 py-3 text-base font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>06.16.32.37.09</span>
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
