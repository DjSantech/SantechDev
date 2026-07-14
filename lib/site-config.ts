import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import type { NavLink, SocialLink } from "./types";

export const siteConfig = {
  name: "Santiago Guevara",
  brand: "SantechDev",
  role: "Frontend Developer",
  roleKeywords: ["interfaces accesibles", "producto", "rendimiento", "experiencias premium"],
  location: "Pereira, Colombia",
  email: "santiguevara20161@gmail.com",
  pitch:
    "Estudiante de Ingeniería de Sistemas y desarrollador frontend enfocado en construir interfaces rápidas, accesibles y cuidadas al detalle con React y Next.js.",
  availability: "Disponible para prácticas y primeras oportunidades",
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
  { id: "sobre-mi", label: "Sobre mí", href: "#sobre-mi" },
  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  { id: "tecnologias", label: "Tecnologías", href: "#tecnologias" },
  { id: "experiencia", label: "Experiencia", href: "#experiencia" },
  { id: "educacion", label: "Educación", href: "#educacion" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];
