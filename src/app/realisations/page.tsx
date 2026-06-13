import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Section, getButtonClasses, ImageCarousel } from "@/components/ui";

export const metadata = {
  title: "Nos Réalisations | Iron & Steel - Métallerie en Alsace",
  description:
    "Découvrez nos réalisations en métallerie : garde-corps, escaliers, portails, charpentes métalliques, structures spécifiques et tuyauterie industrielle.",
};

const realisations = [
  {
    id: "garde-corps",
    title: "Garde-corps",
    subtitle: "Sécurité et esthétique",
    description:
      "Nos garde-corps allient sécurité et design pour sublimer vos espaces. Que ce soit pour un balcon, une terrasse, une mezzanine ou un escalier, nous concevons des solutions sur mesure adaptées à votre architecture.",
    features: [
      "Inox, acier, aluminium ou verre",
      "Câble, tôle, barreaudage",
      "Finition peint, thermolaqué, poli",
      "Conforme aux normes NF P01-012",
    ],
    images: [
      "/images/realisations/garde-corps/Garde-corps-1.jpeg",
      "/images/realisations/garde-corps/Garde-corps-2.jpeg",
      "/images/realisations/garde-corps/Garde-corps-3.jpeg",
      "/images/realisations/garde-corps/Garde-corps-4.jpeg",
    ],
  },
  {
    id: "escaliers",
    title: "Escaliers",
    subtitle: "L'art de l'élévation",
    description:
      "Chaque escalier que nous créons est une pièce unique, pensée pour s'intégrer parfaitement à votre intérieur tout en répondant aux contraintes techniques de votre espace. Du design contemporain au style industriel, nous donnons vie à vos envies.",
    features: [
      "Droit, tournant, hélicoïdal",
      "Limon central, double limon",
      "Marches en métal, bois ou verre",
      "Garde-corps sur mesure au choix",
    ],
    images: ["/images/realisations/escaliers/Escalier.jpeg"],
  },
  {
    id: "portails",
    title: "Portail et Porte",
    subtitle: "La première impression",
    description:
      "Le portail est la signature de votre propriété. Nous fabriquons des portails sur mesure, battants ou coulissants, qui conjuguent robustesse, sécurité et élégance. Chaque création est unique et reflète votre personnalité. Portes sur mesure anti-effraction, design personnalisé selon vos besoins.",
    features: [
      "Portails battants ou coulissants",
      "Motorisation intégrée possible",
      "Acier, inox ou aluminium",
      "Designs personnalisés sur demande",
    ],
    images: [
      "/images/realisations/portails/Porte-Portail-1.jpeg",
      "/images/realisations/portails/Porte-Portail-2.jpeg",
      "/images/realisations/portails/Porte-Portail-3.jpeg",
    ],
  },
  {
    id: "charpente-metallique",
    title: "Charpente Métallique",
    subtitle: "La force de l'acier",
    description:
      "Notre expertise en charpente métallique nous permet de réaliser des structures de toutes dimensions : hangars agricoles, bâtiments industriels, extensions ou ossatures pour maisons contemporaines. Solidité et durabilité garanties. Nous disposons d'un bureau d'étude spécialisé en charpente métallique.",
    features: [
      "Études et calculs de structure",
      "Fabrication en atelier",
      "Pose et montage sur site",
      "Traitement anticorrosion",
    ],
    images: [
      "/images/realisations/charpente-metallique/Charpente-métallique-1.jpeg",
      "/images/realisations/charpente-metallique/Charpente-métallique-2.jpeg",
      "/images/realisations/charpente-metallique/Charpente-métallique-3.jpeg",
    ],
  },
  {
    id: "structures-specifiques",
    title: "Structures Spécifiques",
    subtitle: "Sur mesure, sans limite",
    description:
      "Vous avez un projet atypique ? Nous aimons les défis. Passerelles, verrières, mobilier urbain, œuvres artistiques... Notre savoir-faire nous permet de répondre aux demandes les plus complexes avec créativité et précision.",
    features: [
      "Étude de faisabilité personnalisée",
      "Prototypage et validation",
      "Fabrication artisanale",
      "Installation professionnelle",
    ],
    images: [
      "/images/realisations/structures-specifiques/structure-specfifique-1.jpeg",
      "/images/realisations/structures-specifiques/structure-specfifique-3.jpeg",
      "/images/realisations/structures-specifiques/structure-specfifique-4.jpeg",
      "/images/realisations/structures-specifiques/structure-specfifique-5.jpeg",
      "/images/realisations/structures-specifiques/structure-specfifique-6.jpeg",
    ],
  },
  {
    id: "tuyauterie-chaudronnerie",
    title: "Tuyauterie & Chaudronnerie",
    subtitle: "L'expertise industrielle",
    description:
      "Notre département tuyauterie et chaudronnerie intervient dans les secteurs industriels les plus exigeants. Nous réalisons des installations complètes, de la conception à la mise en service, dans le respect des normes en vigueur.",
    features: [
      "Tuyauterie industrielle inox et acier",
      "Cuves et réservoirs sur mesure",
      "Maintenance et réparation",
      "Interventions sur site",
    ],
    images: [
      "/images/realisations/tuyauterie-chaudronnerie/Tuyauterie_Chaudronnerie.jpeg",
    ],
  },
];

export default function RealisationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section size="lg" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-accent-500 mb-4 text-sm font-medium tracking-widest uppercase">
            Notre savoir-faire
          </p>
          <h1 className="text-primary-900 mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl">
            Nos Réalisations
          </h1>
          <p className="text-primary-600 mx-auto max-w-2xl text-lg md:text-xl">
            Découvrez l&apos;étendue de notre expertise à travers nos différents
            domaines d&apos;intervention. Chaque projet est une nouvelle
            occasion de démontrer notre savoir-faire.
          </p>
        </div>
      </Section>

      {/* Réalisations Sections */}
      {realisations.map((realisation, index) => (
        <Section
          key={realisation.id}
          id={realisation.id}
          variant={index % 2 === 0 ? "default" : "alternate"}
        >
          <div
            className={`grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20 ${
              index % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Image Carousel */}
            <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <ImageCarousel
                images={realisation.images}
                alt={realisation.title}
              />
              {/* Decorative element */}
              <div
                className={`bg-accent-500 absolute -z-10 hidden h-full w-full rounded-2xl lg:block ${
                  index % 2 === 0 ? "-right-4 -bottom-4" : "-bottom-4 -left-4"
                }`}
              />
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-accent-500 mb-2 text-sm font-medium tracking-wider uppercase">
                {realisation.subtitle}
              </p>
              <h2 className="text-primary-900 mb-6 text-3xl font-semibold md:text-4xl">
                {realisation.title}
              </h2>
              <p className="text-primary-600 mb-8 text-lg leading-relaxed">
                {realisation.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {realisation.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-primary-700 flex items-start gap-3"
                  >
                    <CheckCircle className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={getButtonClasses("primary", "md")}
              >
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <Image
            src="/images/realisations/charpente-metallique/Charpente-métallique-1.jpeg"
            alt="Structure métallique Iron & Steel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative px-8 py-20 text-center text-white md:px-16 md:py-24">
            <h2
              className="mb-4 text-3xl font-semibold md:text-4xl"
              style={{ color: "white" }}
            >
              Un projet en tête ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Quel que soit votre projet, notre équipe est à votre disposition
              pour vous accompagner de la conception à la réalisation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={getButtonClasses("primary", "lg")}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+33616323709"
                className="hover:text-primary-900 inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white"
              >
                06.16.32.37.09
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
