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

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  stack: string[];
  status: ProjectStatus;
  urlGithub?: string;
  urlDemo?: string;
  challenges: LocalizedText;
  learnings: LocalizedText;
  isPlaceholder?: boolean;
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
  name: string;
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
