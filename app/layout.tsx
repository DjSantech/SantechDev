import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { LanguageBanner } from "@/components/ui/language-banner";
import { SkipLink } from "@/components/layout/skip-link";
import { siteConfig } from "@/lib/site-config";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

const title = siteConfig.seo.title.es;
const description = siteConfig.seo.description.es;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Desarrollador Full-Stack",
    "Full-Stack Developer",
    "Desarrollo con IA",
    "AI-Powered Development",
    "Claude Code",
    "MCP",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Cloudflare",
    "Sistemas POS",
    "E-commerce",
    "Pereira",
    "Colombia",
    "Portafolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: siteConfig.siteUrl,
    title,
    description,
    siteName: siteConfig.brand,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.className} bg-zinc-950 text-white antialiased`}>
        <LanguageProvider>
          <SkipLink />
          <LanguageBanner />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
