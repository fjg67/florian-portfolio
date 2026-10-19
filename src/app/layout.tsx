import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const basePath = process.env.GITHUB_PAGES === "true" ? "/florian-portfolio" : "";
const publicSiteUrl = siteUrl ? new URL(`${basePath}/`, siteUrl).toString() : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Florian Jove Garcia | Développeur Mobile, Web & Infrastructure",
  description:
    "Portfolio de Florian Jove Garcia, développeur d'applications mobile et web avec une expertise en développement logiciel et infrastructures informatiques.",
  openGraph: {
    title: "Florian Jove Garcia | Mobile · Web · Infrastructure",
    description: "Développeur d'applications Mobile & Web. Une vision de l’application au système qui la propulse.",
    type: "website",
    locale: "fr_FR",
    images: publicSiteUrl ? [{ url: new URL(`${basePath}/api/og.png`, siteUrl), width: 1200, height: 630, alt: "Florian Jove Garcia — Développeur Mobile, Web & Infrastructure" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Jove Garcia | Mobile · Web · Infrastructure",
    description: "Développeur d'applications Mobile & Web. Une vision de l’application au système qui la propulse.",
    images: publicSiteUrl ? [new URL(`${basePath}/api/og.png`, siteUrl)] : undefined,
  },
  alternates: publicSiteUrl ? { canonical: publicSiteUrl } : undefined,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
