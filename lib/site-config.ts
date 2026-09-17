import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import type { NavLink, SocialLink } from "./types";

export const siteConfig = {
  name: "Santiago Guevara",
  brand: "SantechDev",
  role: { es: "Full-Stack Developer", en: "Full-Stack Developer" },
  roleKeywords: {
    es: ["interfaces accesibles", "APIs y bases de datos", "rendimiento", "experiencias premium"],
    en: ["accessible interfaces", "APIs and databases", "performance", "premium experiences"],
  },
  location: "Pereira, Colombia",
  email: "santiguevara20161@gmail.com",
  pitch: {
    es: "Estudiante de Ingeniería de Sistemas y desarrollador Full-Stack. Construyo interfaces rápidas y cuidadas al detalle con React y Next.js, programo el backend y conecto bases de datos, y aplico seguridad web para proteger cada aplicación que desarrollo.",
    en: "Systems Engineering student and Full-Stack developer. I build fast, detail-oriented interfaces with React and Next.js, program the backend and connect databases, and apply web security to protect every application I build.",
  },
  availability: {
    es: "Disponible para prácticas y primeras oportunidades",
    en: "Available for internships and first opportunities",
  },
  isAvailable: true,
  resumeUrl: "/cv-santiago-guevara.pdf",
  siteUrl: "https://santechdev.vercel.app",
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
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" }, href: "#experiencia" },
  { id: "educacion", label: { es: "Educación", en: "Education" }, href: "#educacion" },
  { id: "contacto", label: { es: "Contacto", en: "Contact" }, href: "#contacto" },
];
