import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iron Steel | Métallerie Artisanale en Alsace",
  description:
    "Entreprise familiale de métallerie générale en Alsace. Plus de 30 ans d'expertise : garde-corps, escaliers, portails, pergolas, cuisines inox, structures métalliques. Devis gratuit.",
  keywords: [
    "métallerie",
    "alsace",
    "garde-corps",
    "escalier métallique",
    "portail",
    "pergola",
    "cuisine inox",
    "fabrication française",
  ],
  authors: [{ name: "Iron Steel" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Iron Steel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
