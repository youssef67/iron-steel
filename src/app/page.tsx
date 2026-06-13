import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Handshake,
  Factory,
  ShieldCheck,
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
    title: "Garde-corps",
    description:
      "Sécurité et esthétique pour vos balcons, terrasses et escaliers.",
    href: "/realisations#garde-corps",
    image: "/images/realisations/garde-corps/Garde-corps-1.jpeg",
  },
  {
    title: "Escaliers",
    description:
      "Escalier à limon central, double limon, suspendu, intérieur et extérieur.",
    href: "/realisations#escaliers",
    image: "/images/realisations/escaliers/Escalier.jpeg",
  },
  {
    title: "Portail et Porte",
    description: "Simple, double battant, coulissant et autoportant.",
    href: "/realisations#portails",
    image: "/images/realisations/portails/Porte-Portail-1.jpeg",
  },
  {
    title: "Charpente Métallique",
    description:
      "Charpentes, ossatures et structures métalliques pour tous vos projets.",
    href: "/realisations#charpente-metallique",
    image:
      "/images/realisations/charpente-metallique/Charpente-métallique-1.jpeg",
  },
  {
    title: "Structures Spécifiques",
    description:
      "Fabrications sur mesure et projets complexes selon vos besoins.",
    href: "/realisations#structures-specifiques",
    image:
      "/images/realisations/structures-specifiques/structure-specfifique-1.jpeg",
  },
  {
    title: "Tuyauterie & Chaudronnerie",
    description:
      "Installations industrielles, tuyauterie et travaux de chaudronnerie.",
    href: "/realisations#tuyauterie-chaudronnerie",
    image:
      "/images/realisations/tuyauterie-chaudronnerie/Tuyauterie_Chaudronnerie.jpeg",
  },
];

const values = [
  {
    icon: Clock,
    label: "30+ ans d'expérience",
    description:
      "Un savoir-faire familial éprouvé depuis plus de trois décennies",
  },
  {
    icon: Handshake,
    label: "Accompagnement complet",
    description:
      "De l'avant-projet à la réalisation, nous vous guidons à chaque étape",
  },
  {
    icon: Factory,
    label: "Fabriqué en Alsace",
    description: "Des ouvrages créés sur mesure dans nos ateliers",
  },
  {
    icon: ShieldCheck,
    label: "Normes françaises",
    description: "Respect des règles de l'art et des normes en vigueur",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background image - soudure / structure métallique */}
        <Image
          src="/images/hero/metalwork-family.jpg"
          alt="Soudure sur structure métallique"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay sombre pour la lisibilité */}
        <div className="from-primary-900/90 to-primary-900/70 absolute inset-0 bg-gradient-to-b" />
        <div className="container-custom relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Structure Métallique
              <span className="text-accent-400"> & Tuyauterie Industrielle</span>
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 md:text-xl">
              Iron & Steel est une entreprise familiale spécialisée dans les
              travaux de structure métallique et de tuyauterie industrielle.
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-white/75">
              Nous répondons à tous types de demandes en construction et
              structure métallique, du plus simple au plus complexe, de la
              construction ancienne aux projets les plus sophistiqués.
            </p>
            <p className="mx-auto mb-8 max-w-3xl text-white/75">
              Secteurs privé et public, nos équipes interviennent sur tout le
              territoire national et frontalier.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={getButtonClasses("primary", "lg")}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/realisations"
                className="hover:text-primary-900 inline-flex h-13 items-center justify-center rounded-lg border-2 border-white px-8 text-lg font-medium text-white transition-colors hover:bg-white"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimal Bold Typography */}
      <Section size="lg">
        <div className="mx-auto max-w-6xl">
          <p className="text-accent-500 mb-12 text-center text-sm font-medium tracking-widest uppercase">
            Iron & Steel c&apos;est
          </p>
          <div className="divide-primary-200 grid grid-cols-1 gap-0 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.label}
                  className="group hover:bg-primary-50 px-8 py-8 text-center transition-colors sm:py-12"
                >
                  <Icon className="text-accent-500 mx-auto mb-5 h-10 w-10 stroke-[1.5]" />
                  <h3 className="text-primary-900 mb-3 text-lg font-semibold">
                    {value.label}
                  </h3>
                  <p className="text-primary-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
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
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Image avec effet hover */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              {/* Contenu texte */}
              <div className="p-6">
                <h3 className="text-primary-900 mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-primary-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="text-accent-500 group-hover:text-accent-600 mt-4 inline-flex items-center text-sm font-medium">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className={getButtonClasses("secondary", "md")}
          >
            Toutes nos réalisations
          </Link>
        </div>
      </Section>

      {/* Zone d'intervention Section */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div>
              <p className="text-accent-500 mb-4 text-sm font-medium tracking-widest uppercase">
                Zone d&apos;intervention
              </p>
              <h2 className="text-primary-900 mb-6 text-3xl font-semibold md:text-4xl">
                Nous intervenons
                <span className="text-accent-500"> partout</span>
              </h2>
              <p className="text-primary-600 text-lg leading-relaxed">
                Basés en Alsace, nous nous déplaçons sur l&apos;ensemble du
                territoire français ainsi que dans les pays frontaliers. Notre
                équipe mobile est disponible pour étudier et réaliser votre
                projet, où que vous soyez.
              </p>
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                {
                  country: "France",
                  flag: "🇫🇷",
                  description: "Tout le territoire",
                },
                {
                  country: "Allemagne",
                  flag: "🇩🇪",
                  description: "Régions frontalières",
                },
                {
                  country: "Suisse",
                  flag: "🇨🇭",
                  description: "Régions frontalières",
                },
                {
                  country: "Belgique",
                  flag: "🇧🇪",
                  description: "Tout le pays",
                },
                {
                  country: "Luxembourg",
                  flag: "🇱🇺",
                  description: "Tout le pays",
                },
                {
                  country: "Et plus...",
                  flag: "🌍",
                  description: "Sur demande",
                },
              ].map((item) => (
                <div
                  key={item.country}
                  className="bg-primary-50 hover:bg-accent-50 group rounded-xl p-5 text-center transition-colors"
                >
                  <span className="mb-2 block text-3xl">{item.flag}</span>
                  <h3 className="text-primary-900 font-semibold">
                    {item.country}
                  </h3>
                  <p className="text-primary-500 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

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
              Contactez-nous pour un devis gratuit et personnalisé. Nous
              intervenons sur toute la France et les pays frontaliers.
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
