import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Heart, Award, MapPin } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  getButtonClasses,
} from "@/components/ui";

export const metadata = {
  title: "L'entreprise | Iron & Steel - Métallerie familiale en Alsace",
  description:
    "Découvrez Iron & Steel, une entreprise familiale de métallerie fondée par un père et ses quatre fils. Plus de 30 ans d'expérience au service de vos projets.",
};

const values = [
  {
    icon: Users,
    title: "Esprit familial",
    description:
      "Un père et ses quatre fils unis par la même passion du métal et le goût du travail bien fait.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description:
      "Chaque projet est traité avec le même soin, qu'il soit simple ou complexe, pour un particulier ou un professionnel.",
  },
  {
    icon: Award,
    title: "Savoir-faire",
    description:
      "Plus de 30 ans d'expérience transmis de génération en génération, garantissant expertise et qualité.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    description:
      "Basés en Alsace, nous intervenons sur tout le territoire national et dans les pays frontaliers.",
  },
];

const timeline = [
  {
    year: "1996",
    title: "Les débuts",
    description:
      "Le père fonde l'entreprise avec une vision claire : allier tradition artisanale et exigence de qualité.",
  },
  {
    year: "2019",
    title: "La relève",
    description:
      "Les premiers fils rejoignent l'aventure familiale, apportant de nouvelles idées et énergie. Sous la supervision du père, création de la société Iron Steel.",
  },
  {
    year: "2022",
    title: "L'expansion",
    description:
      "L'équipe s'agrandit avec l'arrivée des deux derniers fils. Iron Steel est en pleine expansion.",
  },
  {
    year: "Aujourd'hui",
    title: "Une équipe soudée",
    description:
      "Une équipe variant entre 6 et 10 collaborateurs, passionnés au service de vos projets, de l'Alsace à toute la France.",
  },
];

export default function AProposPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section size="lg" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-accent-500 mb-4 text-sm font-medium tracking-widest uppercase">
              Notre histoire
            </p>
            <h1 className="text-primary-900 mb-6 text-4xl font-semibold md:text-5xl">
              Une affaire de
              <span className="text-accent-500"> famille</span>
            </h1>
            <p className="text-primary-600 mb-6 text-lg leading-relaxed">
              Iron & Steel, c&apos;est avant tout l&apos;histoire d&apos;un père
              et de ses quatre fils, unis par la même passion : le travail du
              métal.
            </p>
            <p className="text-primary-500 mb-8 leading-relaxed">
              Depuis plus de 30 ans, notre famille perpétue un savoir-faire
              artisanal d&apos;excellence. Chaque soudure, chaque assemblage,
              chaque finition porte notre signature : celle d&apos;artisans qui
              aiment leur métier et s&apos;engagent pleinement dans chaque
              projet.
            </p>
            <Link href="/contact" className={getButtonClasses("primary", "lg")}>
              Parlons de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero/metalwork-family.jpg"
                alt="Artisan soudeur au travail - Iron & Steel"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-lg">
              <p className="text-accent-500 text-4xl font-semibold">30+</p>
              <p className="text-primary-600 text-sm">
                années d&apos;expérience
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="alternate">
        <SectionHeader>
          <SectionTitle>Nos valeurs</SectionTitle>
          <SectionDescription>
            Ce qui nous anime au quotidien et fait notre différence.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="bg-accent-100 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon className="text-accent-500 h-7 w-7" />
                </div>
                <h3 className="text-primary-900 mb-3 text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="text-primary-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <SectionHeader>
          <SectionTitle>Notre parcours</SectionTitle>
          <SectionDescription>
            De l&apos;atelier du père à l&apos;entreprise familiale
            d&apos;aujourd&apos;hui.
          </SectionDescription>
        </SectionHeader>

        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Ligne verticale */}
              {index !== timeline.length - 1 && (
                <div className="bg-primary-200 absolute top-16 left-[39px] h-full w-px" />
              )}
              {/* Année */}
              <div className="bg-accent-500 flex h-20 w-20 shrink-0 items-center justify-center rounded-xl text-white">
                <span className="text-sm font-semibold">{item.year}</span>
              </div>
              {/* Contenu */}
              <div className="pt-2">
                <h3 className="text-primary-900 mb-2 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-primary-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Section */}
      <Section variant="accent">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-primary-800 mb-6 text-2xl font-medium italic md:text-3xl">
            &ldquo;Travailler en famille, c&apos;est partager bien plus
            qu&apos;un métier. C&apos;est transmettre des valeurs, une exigence,
            et la fierté du travail accompli ensemble.&rdquo;
          </blockquote>
          <p className="text-primary-600">
            — La famille Kus, fondateurs d&apos;Iron & Steel
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
          {/* Background Image */}
          <Image
            src="/images/realisations/charpente-metallique/Charpente-métallique-1.jpeg"
            alt="Structure métallique Iron & Steel"
            fill
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Content */}
          <div className="relative px-8 py-20 text-center text-white md:px-16 md:py-24">
            <h2
              className="mb-4 text-3xl font-semibold md:text-4xl"
              style={{ color: "white" }}
            >
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Contactez-nous pour un devis gratuit. Notre équipe familiale est à
              votre écoute pour donner vie à vos idées.
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
