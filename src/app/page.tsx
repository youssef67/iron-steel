import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Leaf,
  Wrench,
  Building2,
  ChefHat,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  getButtonClasses,
} from "@/components/ui";

const services = [
  {
    icon: Shield,
    title: "Garde-corps",
    description:
      "Sécurité et esthétique pour vos balcons, terrasses et escaliers.",
    href: "/prestations/garde-corps",
  },
  {
    icon: Wrench,
    title: "Escaliers",
    description:
      "Escaliers sur mesure en métal, droits, hélicoïdaux ou à limon central.",
    href: "/prestations/escaliers",
  },
  {
    icon: Building2,
    title: "Portails & Clôtures",
    description: "Portails battants ou coulissants, clôtures et grilles.",
    href: "/prestations/portails",
  },
  {
    icon: Leaf,
    title: "Pergolas",
    description:
      "Pergolas bioclimatiques et structures pour profiter de votre extérieur.",
    href: "/prestations/pergolas",
  },
  {
    icon: ChefHat,
    title: "Cuisines Inox",
    description:
      "Équipements professionnels inox pour restaurants et collectivités.",
    href: "/prestations/cuisines-inox",
  },
  {
    icon: Award,
    title: "Structures Métalliques",
    description:
      "Charpentes, passerelles et structures industrielles sur mesure.",
    href: "/prestations/structures",
  },
];

const values = [
  {
    number: "30+",
    label: "Années d'expertise",
    description: "Entreprise familiale depuis plus de trois décennies",
  },
  {
    number: "FR",
    label: "Fabrication française",
    description: "Qualité artisanale, proximité et réactivité",
  },
  {
    number: "10",
    label: "Garantie décennale",
    description: "Travail certifié et assuré pour votre tranquillité",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section size="lg" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-primary-900 mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl">
            Métallerie Artisanale
            <span className="text-accent-500"> en Alsace</span>
          </h1>
          <p className="text-primary-600 mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Plus de 30 ans de savoir-faire familial au service de vos projets.
            Garde-corps, escaliers, portails, pergolas et fabrications sur
            mesure.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={getButtonClasses("primary", "lg")}>
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/realisations"
              className={getButtonClasses("secondary", "lg")}
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.label}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <div className="bg-accent-100 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl">
                <span className="text-accent-600 text-2xl font-semibold">
                  {value.number}
                </span>
              </div>
              <h3 className="text-primary-900 mb-2 font-semibold">
                {value.label}
              </h3>
              <p className="text-primary-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="alternate">
        <SectionHeader>
          <SectionTitle>Nos Prestations</SectionTitle>
          <SectionDescription>
            Du particulier au professionnel, nous réalisons tous vos projets de
            métallerie sur mesure.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="bg-accent-100 group-hover:bg-accent-500 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <Icon className="text-accent-600 h-6 w-6 transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-primary-900 mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-primary-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="text-accent-600 group-hover:text-accent-700 mt-4 inline-flex items-center text-sm font-medium">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/prestations"
            className={getButtonClasses("secondary", "md")}
          >
            Toutes nos prestations
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="accent">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-primary-900 mb-4 text-3xl font-semibold md:text-4xl">
            Un projet en tête ?
          </h2>
          <p className="text-primary-600 mb-8 text-lg">
            Contactez-nous pour un devis gratuit et personnalisé. Nous
            intervenons sur toute la France et les pays frontaliers.
          </p>
          <Link href="/contact" className={getButtonClasses("primary", "lg")}>
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </main>
  );
}
