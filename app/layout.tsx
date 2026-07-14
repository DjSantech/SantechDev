import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { siteConfig } from "@/lib/site-config";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

const title = `${siteConfig.name} — ${siteConfig.role}`;
const description = siteConfig.pitch;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portafolio", "Desarrollador web"],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
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
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-violet-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
