import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon | IconType;

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type ProjectStatus = "finalizado" | "en-progreso" | "placeholder";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  status: ProjectStatus;
  urlGithub?: string;
  urlDemo?: string;
  challenges: string;
  learnings: string;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  place: string;
  period: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
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
  title: string;
  items: TechItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  isPlaceholder?: boolean;
}
