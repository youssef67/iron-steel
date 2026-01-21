import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Iron & Steel - Demande de devis gratuit",
  description:
    "Contactez Iron & Steel pour votre projet de métallerie. Demande de devis gratuit sous 48h. Intervention sur toute la France et pays frontaliers.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
