import { Section } from "@/components/ui";

export const metadata = {
  title: "Politique de Confidentialité | Iron & Steel",
  description:
    "Politique de confidentialité et protection des données personnelles - Iron & Steel",
};

export default function ConfidentialitePage() {
  return (
    <main>
      <Section size="lg" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-primary-900 mb-8 text-4xl font-semibold">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-primary max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-primary-600 leading-relaxed">
                Iron & Steel accorde une grande importance à la protection de
                vos données personnelles. Cette politique de confidentialité
                vous informe sur la manière dont nous collectons, utilisons et
                protégeons vos informations lorsque vous utilisez notre site
                web.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                1. Responsable du traitement
              </h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Iron & Steel</strong>
                </p>
                <p className="text-primary-700 mb-2">
                  31 route de Strasbourg, 67610 La Wantzenau, France
                </p>
                <p className="text-primary-700 mb-2">
                  Téléphone : 06.16.32.37.09
                </p>
                <p className="text-primary-700">Email : contact@ironsteel.fr</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                2. Données collectées
              </h2>
              <p className="text-primary-600 mb-4 leading-relaxed">
                Nous collectons les données personnelles suivantes uniquement
                lorsque vous nous les fournissez volontairement via notre
                formulaire de contact :
              </p>
              <ul className="text-primary-600 list-disc space-y-2 pl-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (si fournie)</li>
                <li>Description de votre projet</li>
              </ul>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                3. Finalités du traitement
              </h2>
              <p className="text-primary-600 mb-4 leading-relaxed">
                Vos données personnelles sont collectées et traitées pour les
                finalités suivantes :
              </p>
              <ul className="text-primary-600 list-disc space-y-2 pl-6">
                <li>Répondre à vos demandes de devis et d&apos;informations</li>
                <li>Vous recontacter dans le cadre de votre projet</li>
                <li>Établir un devis personnalisé</li>
                <li>Assurer le suivi de la relation commerciale</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                4. Base légale du traitement
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="text-primary-600 mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Votre consentement</strong> : lorsque vous remplissez
                  notre formulaire de contact
                </li>
                <li>
                  <strong>L&apos;exécution d&apos;un contrat</strong> : dans le
                  cadre de la réalisation d&apos;un devis ou d&apos;une
                  prestation
                </li>
                <li>
                  <strong>L&apos;intérêt légitime</strong> : pour améliorer nos
                  services et notre site web
                </li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                5. Durée de conservation
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Vos données personnelles sont conservées pendant une durée de :
              </p>
              <ul className="text-primary-600 mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>3 ans</strong> à compter de votre dernière interaction
                  avec nous pour les données de prospection
                </li>
                <li>
                  <strong>10 ans</strong> pour les données relatives aux clients
                  (obligations légales et garantie décennale)
                </li>
              </ul>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                6. Destinataires des données
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Vos données personnelles sont destinées uniquement au personnel
                habilité d&apos;Iron & Steel. Elles ne sont en aucun cas cédées
                ou vendues à des tiers.
              </p>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Nos sous-traitants techniques (hébergement, envoi d&apos;emails)
                peuvent avoir accès à vos données dans le cadre strict de leurs
                missions et sont soumis aux mêmes obligations de
                confidentialité.
              </p>
            </section>

            {/* Transferts */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                7. Transferts de données
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Notre site est hébergé par Vercel Inc. (États-Unis). Des
                garanties appropriées sont mises en place pour assurer la
                protection de vos données conformément au RGPD (Clauses
                Contractuelles Types).
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                8. Vos droits
              </h2>
              <p className="text-primary-600 mb-4 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="text-primary-600 list-disc space-y-2 pl-6">
                <li>
                  <strong>Droit d&apos;accès</strong> : obtenir des informations
                  sur le traitement de vos données et une copie de celles-ci
                </li>
                <li>
                  <strong>Droit de rectification</strong> : demander la
                  correction de données inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement</strong> : demander la
                  suppression de vos données dans certains cas
                </li>
                <li>
                  <strong>Droit à la limitation</strong> : demander la
                  suspension du traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : recevoir vos données
                  dans un format structuré
                </li>
                <li>
                  <strong>Droit d&apos;opposition</strong> : vous opposer au
                  traitement de vos données
                </li>
              </ul>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@ironsteel.fr"
                  className="text-accent-500 hover:text-accent-600"
                >
                  contact@ironsteel.fr
                </a>
              </p>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Vous pouvez également introduire une réclamation auprès de la
                CNIL (Commission Nationale de l&apos;Informatique et des
                Libertés) : www.cnil.fr
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                9. Cookies
              </h2>
              <p className="text-primary-600 mb-4 leading-relaxed">
                Notre site utilise des cookies strictement nécessaires au
                fonctionnement du site. Ces cookies ne nécessitent pas votre
                consentement.
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Cookies techniques :</strong> Assurent le bon
                  fonctionnement du site
                </p>
                <p className="text-primary-700">
                  <strong>Durée :</strong> Session ou maximum 13 mois
                </p>
              </div>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Nous n&apos;utilisons pas de cookies publicitaires ou de
                tracking. Si cela venait à changer, nous vous en informerons et
                solliciterons votre consentement préalable.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                10. Sécurité des données
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre la destruction accidentelle ou illicite, la
                perte, l&apos;altération, la divulgation ou l&apos;accès non
                autorisé.
              </p>
              <p className="text-primary-600 mt-4 leading-relaxed">
                Notre site utilise le protocole HTTPS pour sécuriser les
                échanges de données.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                11. Modifications de la politique
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Les modifications prendront effet
                dès leur publication sur cette page. Nous vous invitons à
                consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-primary-900 mb-4 text-2xl font-semibold">
                12. Contact
              </h2>
              <p className="text-primary-600 leading-relaxed">
                Pour toute question relative à cette politique de
                confidentialité ou pour exercer vos droits, vous pouvez nous
                contacter :
              </p>
              <div className="bg-primary-50 mt-4 rounded-lg p-6">
                <p className="text-primary-700 mb-2">
                  <strong>Par email :</strong> contact@ironsteel.fr
                </p>
                <p className="text-primary-700 mb-2">
                  <strong>Par téléphone :</strong> 06.16.32.37.09
                </p>
                <p className="text-primary-700">
                  <strong>Par courrier :</strong> Iron & Steel, 31 route de
                  Strasbourg, 67610 La Wantzenau, France
                </p>
              </div>
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
