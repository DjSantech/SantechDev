import {
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { TechCategory } from "../types";

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { id: "react", name: "React", icon: SiReact, level: 4 },
      { id: "nextjs", name: "Next.js", icon: SiNextdotjs, level: 4 },
      { id: "typescript", name: "TypeScript", icon: SiTypescript, level: 3 },
      { id: "javascript", name: "JavaScript", icon: SiJavascript, level: 4 },
      { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, level: 4 },
      { id: "html5", name: "HTML5", icon: SiHtml5, level: 5 },
      { id: "css3", name: "CSS3", icon: SiCss3, level: 4 },
    ],
  },
  {
    id: "backend",
    title: "Backend y bases de datos",
    items: [
      { id: "nodejs", name: "Node.js", icon: SiNodedotjs, level: 3 },
      { id: "mysql", name: "MySQL", icon: SiMysql, level: 3 },
    ],
  },
  {
    id: "herramientas",
    title: "Herramientas",
    items: [
      { id: "git", name: "Git", icon: SiGit, level: 4 },
      { id: "figma", name: "Figma", icon: SiFigma, level: 3 },
    ],
  },
];

export const learningNow: string[] = ["PostgreSQL", "NestJS"];
