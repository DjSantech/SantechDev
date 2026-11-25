import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import type { NavLink, SocialLink } from "./types";

export const siteConfig = {
  name: "Santiago Guevara",
  brand: "SantechDev",
  role: { es: "Full-Stack Developer", en: "Full-Stack Developer" },
  roleKeywords: {
    es: ["sistemas POS", "e-commerce", "sitios corporativos", "servidores MCP"],
    en: ["POS systems", "e-commerce stores", "corporate websites", "MCP servers"],
  },
  location: "Pereira, Colombia",
  email: "santiguevara20161@gmail.com",
  pitch: {
    es: "Desarrollador Full-Stack y estudiante de 8.º semestre de Ingeniería de Sistemas (UTP). Construyo y despliego sistemas web completos para negocios reales — sistemas POS y de gestión, e-commerce con pagos en línea y sitios corporativos — y manejo su infraestructura de punta a punta (dominios, DNS, Cloudflare, Render, MongoDB Atlas). Trabajo a diario con desarrollo asistido por IA (Claude Code, agentes en paralelo, MCP, Skills propias) e IA generativa (Higgsfield, Gemini) para entregar más rápido y con mejor calidad.",
    en: "Full-Stack developer and 8th-semester Systems Engineering student (UTP, Colombia). I build and deploy complete web systems for real businesses — POS and management systems, e-commerce with online payments and corporate websites — and run their infrastructure end to end (domains, DNS, Cloudflare, Render, MongoDB Atlas). I work daily with AI-assisted development (Claude Code, parallel agents, MCP, custom Skills) and generative AI (Higgsfield, Gemini) to deliver faster and with higher quality.",
  },
  /** Textos cortos para buscadores y redes (title / meta description / Open Graph). */
  seo: {
    title: {
      es: "Santiago Guevara — Desarrollador Full-Stack · Desarrollo con IA",
      en: "Santiago Guevara — Full-Stack Developer · AI-Powered Development",
    },
    description: {
      es: "Desarrollador Full-Stack en Colombia: construyo y despliego sistemas POS, e-commerce con pagos en línea y sitios corporativos, con desarrollo asistido por IA.",
      en: "Full-Stack developer in Colombia: I build and deploy POS systems, e-commerce with online payments and corporate websites, using AI-assisted development.",
    },
  },
  languages: {
    es: "Español nativo · Inglés B2",
    en: "Spanish (native) · English (B2)",
  },
  availability: {
    es: "Disponible para freelance y roles Junior Full-Stack · remoto o híbrido",
    en: "Available for freelance and Junior Full-Stack roles · remote or hybrid",
  },
  isAvailable: true,
  /** CV según el idioma activo de la página. */
  resumeUrl: {
    es: "/cv-santiago-guevara.pdf",
    en: "/cv-santiago-guevara-en.pdf",
  },
  siteUrl: "https://santechdevportfolio.vercel.app",
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/DjSantech",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/santiago-guevara-a15330283/",
    icon: Linkedin,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/3135995612",
    icon: FaWhatsapp,
  },
];

export const navLinks: NavLink[] = [
  { id: "sobre-mi", label: { es: "Sobre mí", en: "About me" }, href: "#sobre-mi" },
  { id: "proyectos", label: { es: "Proyectos", en: "Projects" }, href: "#proyectos" },
  { id: "tecnologias", label: { es: "Tecnologías", en: "Tech Stack" }, href: "#tecnologias" },
  { id: "ia", label: { es: "IA", en: "AI" }, href: "#ia" },
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" }, href: "#experiencia" },
  { id: "educacion", label: { es: "Educación", en: "Education" }, href: "#educacion" },
  { id: "contacto", label: { es: "Contacto", en: "Contact" }, href: "#contacto" },
];
