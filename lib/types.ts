import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon | IconType;

export type Locale = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}

export interface NavLink {
  id: string;
  label: LocalizedText;
  href: string;
}

export type ProjectStatus = "finalizado" | "en-progreso" | "placeholder";

export interface ProjectCover {
  icon: IconComponent;
  label: LocalizedText;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  /** Captura del proyecto. Si no hay, se muestra `cover`. */
  image?: string;
  /** Portada con ícono para proyectos sin captura (privados, librerías, etc.). */
  cover?: ProjectCover;
  stack: string[];
  status: ProjectStatus;
  urlGithub?: string;
  urlDemo?: string;
  challenges: LocalizedText;
  learnings: LocalizedText;
  isPlaceholder?: boolean;
  /** Proyecto privado para cliente: sin repo ni demo públicos. */
  isPrivate?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  place: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  title: LocalizedText;
  institution: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  isPlaceholder?: boolean;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface TechItem {
  id: string;
  name: string | LocalizedText;
  icon: IconComponent;
  level: SkillLevel;
}

export interface TechCategory {
  id: string;
  title: LocalizedText;
  items: TechItem[];
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface TestimonialItem {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  quote: LocalizedText;
  isPlaceholder?: boolean;
}
