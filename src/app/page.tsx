import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-900 mb-6">
          Iron Steel
        </h1>
        <p className="text-xl md:text-2xl text-primary-500 mb-4">
          Métallerie Artisanale en Alsace
        </p>
        <p className="text-primary-400 mb-8 max-w-xl mx-auto">
          Plus de 30 ans de savoir-faire familial au service de vos projets.
          Garde-corps, escaliers, portails, pergolas et plus encore.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Demander un devis gratuit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        <div className="bg-surface p-6 rounded-xl text-center">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-accent-600 text-2xl">30+</span>
          </div>
          <h3 className="font-semibold text-primary-800 mb-2">
            Années d&apos;expertise
          </h3>
          <p className="text-primary-500 text-sm">
            Entreprise familiale depuis plus de trois décennies
          </p>
        </div>

        <div className="bg-surface p-6 rounded-xl text-center">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-accent-600 text-xl">FR</span>
          </div>
          <h3 className="font-semibold text-primary-800 mb-2">
            Fabrication française
          </h3>
          <p className="text-primary-500 text-sm">
            Qualité artisanale, proximité et réactivité
          </p>
        </div>

        <div className="bg-surface p-6 rounded-xl text-center">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-accent-600 text-xl">10</span>
          </div>
          <h3 className="font-semibold text-primary-800 mb-2">
            Garantie décennale
          </h3>
          <p className="text-primary-500 text-sm">
            Travail certifié et assuré pour votre tranquillité
          </p>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-primary-300 text-sm mt-16">
        Site en construction — Bientôt disponible
      </p>
    </main>
  );
}
