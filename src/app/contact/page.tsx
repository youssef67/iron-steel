"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section, getButtonClasses } from "@/components/ui";
import { cn } from "@/lib/utils";

const motifs = [
  { id: "devis", label: "Demande de devis" },
  { id: "renseignement", label: "Demande de renseignements" },
  { id: "contact", label: "Prise de contact" },
];

const prestations = [
  { id: "garde-corps", label: "Garde-corps" },
  { id: "escaliers", label: "Escaliers" },
  { id: "portails", label: "Portails & Clôtures" },
  { id: "charpente", label: "Charpente métallique" },
  { id: "structures", label: "Structures spécifiques" },
  { id: "tuyauterie", label: "Tuyauterie & Chaudronnerie" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    motif: "",
    prestations: [] as string[],
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePrestationToggle = (prestationId: string) => {
    setFormData((prev) => ({
      ...prev,
      prestations: prev.prestations.includes(prestationId)
        ? prev.prestations.filter((p) => p !== prestationId)
        : [...prev.prestations, prestationId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi (à remplacer par l'appel API Resend)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main>
        <Section
          size="lg"
          className="from-primary-50 bg-gradient-to-b to-white"
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-accent-100 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <CheckCircle2 className="text-accent-500 h-10 w-10" />
            </div>
            <h1 className="text-primary-900 mb-4 text-3xl font-semibold">
              Message envoyé !
            </h1>
            <p className="text-primary-600 mb-8 text-lg">
              Merci pour votre message. Nous vous répondrons dans les plus brefs
              délais, généralement sous 24 à 48 heures.
            </p>
            <Link href="/" className={getButtonClasses("primary", "md")}>
              Retour à l&apos;accueil
            </Link>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <Section size="md" className="from-primary-50 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-primary-900 mb-4 text-4xl font-semibold md:text-5xl">
            Contactez<span className="text-accent-500">-nous</span>
          </h1>
          <p className="text-primary-600 mx-auto max-w-2xl text-lg">
            Un projet en tête ? Une question ? N&apos;hésitez pas à nous
            contacter. Nous vous répondons sous 24 à 48 heures.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Motif de contact */}
                <div>
                  <label className="text-primary-900 mb-3 block text-sm font-semibold">
                    Motif de votre demande *
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {motifs.map((motif) => (
                      <button
                        key={motif.id}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, motif: motif.id }))
                        }
                        className={cn(
                          "rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all",
                          formData.motif === motif.id
                            ? "border-accent-500 bg-accent-50 text-accent-700"
                            : "border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50"
                        )}
                      >
                        {motif.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prestations */}
                <div>
                  <label className="text-primary-900 mb-3 block text-sm font-semibold">
                    Prestation(s) souhaitée(s)
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {prestations.map((prestation) => (
                      <button
                        key={prestation.id}
                        type="button"
                        onClick={() => handlePrestationToggle(prestation.id)}
                        className={cn(
                          "rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all",
                          formData.prestations.includes(prestation.id)
                            ? "border-accent-500 bg-accent-50 text-accent-700"
                            : "border-primary-200 text-primary-600 hover:border-primary-300 hover:bg-primary-50"
                        )}
                      >
                        {prestation.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Informations personnelles */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nom"
                      className="text-primary-900 mb-2 block text-sm font-medium"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          nom: e.target.value,
                        }))
                      }
                      className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="text-primary-900 mb-2 block text-sm font-medium"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      required
                      value={formData.prenom}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          prenom: e.target.value,
                        }))
                      }
                      className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-primary-900 mb-2 block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="text-primary-900 mb-2 block text-sm font-medium"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          telephone: e.target.value,
                        }))
                      }
                      className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="adresse"
                    className="text-primary-900 mb-2 block text-sm font-medium"
                  >
                    Adresse / Ville du projet
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        adresse: e.target.value,
                      }))
                    }
                    className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                    placeholder="Ville ou adresse du projet"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-primary-900 mb-2 block text-sm font-medium"
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="border-primary-200 focus:border-accent-500 focus:ring-accent-500 w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none"
                    placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.motif}
                  className={cn(
                    getButtonClasses("primary", "lg"),
                    "w-full sm:w-auto",
                    (isSubmitting || !formData.motif) &&
                      "cursor-not-allowed opacity-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-primary-500 text-sm">
                  * Champs obligatoires. Vos données sont traitées conformément
                  à notre{" "}
                  <a
                    href="/confidentialite"
                    className="text-accent-500 hover:text-accent-600 underline"
                  >
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="relative mb-8 h-64 overflow-hidden rounded-xl lg:h-72">
                <Image
                  src="/images/realisations/charpente-metallique/Charpente-métallique-1.jpeg"
                  alt="Atelier Iron & Steel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-lg font-semibold">Devis gratuit</p>
                  <p className="text-sm opacity-90">
                    Sans engagement, sous 48h
                  </p>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h2 className="text-primary-900 mb-6 text-lg font-semibold">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+33616323709"
                    className="group flex items-start gap-4"
                  >
                    <div className="bg-accent-100 group-hover:bg-accent-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                      <Phone className="text-accent-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-primary-900 font-medium">Téléphone</p>
                      <p className="text-accent-600 group-hover:text-accent-700">
                        06.16.32.37.09
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@ironsteel.fr"
                    className="group flex items-start gap-4"
                  >
                    <div className="bg-accent-100 group-hover:bg-accent-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                      <Mail className="text-accent-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-primary-900 font-medium">Email</p>
                      <p className="text-accent-600 group-hover:text-accent-700">
                        contact@ironsteel.fr
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <MapPin className="text-accent-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-primary-900 font-medium">Adresse</p>
                      <p className="text-primary-600">
                        31 route de Strasbourg
                        <br />
                        67610 La Wantzenau
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="border-primary-200 mt-6 border-t pt-6">
                  <p className="text-primary-900 mb-2 font-medium">
                    Horaires d&apos;ouverture
                  </p>
                  <p className="text-primary-600 text-sm">
                    Lundi - Vendredi : 8h00 - 18h00
                    <br />
                    Samedi : Sur rendez-vous
                  </p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="border-primary-200 mt-6 rounded-xl border p-6">
                <p className="text-primary-900 mb-2 font-medium">
                  Zone d&apos;intervention
                </p>
                <p className="text-primary-600 text-sm">
                  France entière et pays frontaliers (Allemagne, Suisse,
                  Belgique, Luxembourg)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
