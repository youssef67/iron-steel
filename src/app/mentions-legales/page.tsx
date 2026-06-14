import { Section } from "@/components/ui";

export const metadata = {
  title: "Mentions Légales | Iron & Steel",
  description: "Mentions légales du site Iron & Steel - Métallerie en Alsace",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Section size="lg" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-primary-900 mb-8 text-4xl font-semibold">
            Mentions Légales
          </h1>

          <div className="prose prose-primary max-w-none space-y-8">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                1. Éditeur du site
              </h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Raison sociale :</strong> Iron & Steel
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Forme juridique :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter : SARL, SAS, EI, etc.]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Capital social :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Siège social :</strong> 31 route de Strasbourg, 67610
                  La Wantzenau, France
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>SIRET :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>RCS :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter : RCS Strasbourg]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Numéro de TVA intracommunautaire :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Téléphone :</strong> 06.16.32.37.09
                </p>
                <p className="text-primary-700">
                  <strong>Email :</strong> contact@ironsteel.fr
                </p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                2. Directeur de la publication
              </h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Nom :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter : Nom du gérant]
                  </span>
                </p>
                <p className="text-primary-700">
                  <strong>Qualité :</strong> Gérant
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                3. Hébergement
              </h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina,
                  CA 91723, États-Unis
                </p>
                <p className="text-primary-700">
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-600"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                4. Propriété intellectuelle
              </h2>
              <p className="text-primary-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images,
                photographies, logos, vidéos, etc.) est la propriété exclusive
                d&apos;Iron & Steel ou de ses partenaires. Toute reproduction,
                représentation, modification, publication, adaptation de tout ou
                partie des éléments du site, quel que soit le moyen ou le
                procédé utilisé, est interdite, sauf autorisation écrite
                préalable d&apos;Iron & Steel.
              </p>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Toute exploitation non autorisée du site ou de l&apos;un
                quelconque des éléments qu&apos;il contient sera considérée
                comme constitutive d&apos;une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants
                du Code de Propriété Intellectuelle.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                5. Limitation de responsabilité
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Iron & Steel s&apos;efforce d&apos;assurer au mieux de ses
                possibilités l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Cependant, Iron & Steel ne
                peut garantir l&apos;exactitude, la précision ou
                l&apos;exhaustivité des informations mises à disposition sur ce
                site.
              </p>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Iron & Steel décline toute responsabilité pour toute
                imprécision, inexactitude ou omission portant sur des
                informations disponibles sur ce site, ainsi que pour tous
                dommages résultant d&apos;une intrusion frauduleuse d&apos;un
                tiers ayant entraîné une modification des informations mises à
                disposition sur ce site.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                6. Liens hypertextes
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Ce site peut contenir des liens vers d&apos;autres sites
                internet ou d&apos;autres sources internet. Dans la mesure où
                Iron & Steel ne peut contrôler ces sites et ces sources
                externes, Iron & Steel ne peut être tenu pour responsable de la
                mise à disposition de ces sites et sources externes, et ne peut
                supporter aucune responsabilité quant au contenu, publicités,
                produits, services ou tout autre matériel disponible sur ou à
                partir de ces sites ou sources externes.
              </p>
            </section>

            {/* Assurance */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                7. Assurance professionnelle
              </h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Garantie décennale souscrite auprès de :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter : Nom de l&apos;assureur]
                  </span>
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Numéro de contrat :</strong>{" "}
                  <span className="bg-accent-100 text-accent-700 rounded px-2 py-0.5 text-sm">
                    [À compléter]
                  </span>
                </p>
                <p className="text-primary-700">
                  <strong>Zone de couverture géographique :</strong> France
                  entière et pays frontaliers
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                8. Droit applicable
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="border-primary-200 border-t pt-8">
              <p className="text-primary-500 text-sm">
                Dernière mise à jour : Janvier 2026
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
