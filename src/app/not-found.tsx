"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { getButtonClasses } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-accent-500 mb-4 text-lg font-semibold">404</p>
        <h1 className="text-primary-900 mb-4 text-3xl font-semibold md:text-4xl">
          Page introuvable
        </h1>
        <p className="text-primary-500 mx-auto mb-8 max-w-md">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className={getButtonClasses("primary", "md")}>
            <Home className="mr-2 h-5 w-5" />
            Retour à l&apos;accueil
          </Link>
          <button
            onClick={() => history.back()}
            className={getButtonClasses("secondary", "md")}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Page précédente
          </button>
        </div>
      </div>
    </main>
  );
}
