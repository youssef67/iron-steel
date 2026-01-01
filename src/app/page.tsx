import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-primary-900 mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl">
          Iron Steel
        </h1>
        <p className="text-primary-500 mb-4 text-xl md:text-2xl">
          Métallerie Artisanale en Alsace
        </p>
        <p className="text-primary-400 mx-auto mb-8 max-w-xl">
          Plus de 30 ans de savoir-faire familial au service de vos projets.
          Garde-corps, escaliers, portails, pergolas et plus encore.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="bg-accent-500 hover:bg-accent-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white shadow-md transition-colors hover:shadow-lg"
        >
          Demander un devis gratuit
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-surface rounded-xl p-6 text-center">
          <div className="bg-accent-100 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
            <span className="text-accent-600 text-2xl">30+</span>
          </div>
          <h3 className="text-primary-800 mb-2 font-semibold">
            Années d&apos;expertise
          </h3>
          <p className="text-primary-500 text-sm">
            Entreprise familiale depuis plus de trois décennies
          </p>
        </div>

        <div className="bg-surface rounded-xl p-6 text-center">
          <div className="bg-accent-100 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
            <span className="text-accent-600 text-xl">FR</span>
          </div>
          <h3 className="text-primary-800 mb-2 font-semibold">
            Fabrication française
          </h3>
          <p className="text-primary-500 text-sm">
            Qualité artisanale, proximité et réactivité
          </p>
        </div>

        <div className="bg-surface rounded-xl p-6 text-center">
          <div className="bg-accent-100 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
            <span className="text-accent-600 text-xl">10</span>
          </div>
          <h3 className="text-primary-800 mb-2 font-semibold">
            Garantie décennale
          </h3>
          <p className="text-primary-500 text-sm">
            Travail certifié et assuré pour votre tranquillité
          </p>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-primary-300 mt-16 text-sm">
        Site en construction — Bientôt disponible
      </p>
    </main>
  );
}
