import type { FaqItem } from "../types";

export const faq: FaqItem[] = [
  {
    id: "disponibilidad",
    question: { es: "¿Cuál es tu disponibilidad actual?", en: "What's your current availability?" },
    answer: {
      es: "Tengo disponibilidad inmediata para proyectos freelance y roles de Desarrollador Full-Stack Junior. Cuento con flexibilidad horaria compatible con mis últimos compromisos académicos en la Universidad Tecnológica de Pereira (UTP).",
      en: "I'm immediately available for freelance projects and Junior Full-Stack Developer roles. I have flexible hours compatible with my last academic commitments at Universidad Tecnológica de Pereira (UTP).",
    },
  },
  {
    id: "modalidad",
    question: {
      es: "¿Trabajas de forma remota, presencial o híbrida?",
      en: "Do you work remotely, on-site, or hybrid?",
    },
    answer: {
      es: "Trabajo de forma remota o híbrida. Hoy ya trabajo de manera remota y me organizo con disciplina de autogestión; para la parte presencial de un esquema híbrido estoy en Pereira, Risaralda.",
      en: "I work remotely or hybrid. I already work remotely today and organize myself with self-management discipline; for the on-site part of a hybrid setup, I'm based in Pereira, Risaralda.",
    },
  },
  {
    id: "stack",
    question: {
      es: "¿Con qué stack te sientes más cómodo trabajando?",
      en: "Which stack are you most comfortable working with?",
    },
    answer: {
      es: "Mi stack principal y donde aporto valor inmediato es TypeScript de punta a punta: React 19, Next.js, Vite y Tailwind CSS en el frontend; Node.js con Express 5, Zod y Mongoose sobre MongoDB Atlas en el backend (también he trabajado con MySQL); y despliegue en Cloudflare, Render y Vercel con CI en GitHub Actions. Además, trabajo a diario con desarrollo asistido por IA (Claude Code y MCP).",
      en: "My main stack, where I add value right away, is end-to-end TypeScript: React 19, Next.js, Vite, and Tailwind CSS on the frontend; Node.js with Express 5, Zod, and Mongoose on MongoDB Atlas on the backend (I've also worked with MySQL); and deployment on Cloudflare, Render, and Vercel with CI on GitHub Actions. I also work daily with AI-assisted development (Claude Code and MCP).",
    },
  },
  {
    id: "aprendizaje",
    question: {
      es: "¿Cómo sigues aprendiendo nuevas tecnologías?",
      en: "How do you keep learning new technologies?",
    },
    answer: {
      es: "Mi formación como Ingeniero de Sistemas en la UTP me enseñó a aprender a aprender de forma autónoma. Sigo construyendo proyectos personales basados en problemas reales, leo documentación oficial constantemente, sigo las mejores prácticas de la comunidad de software y realizo bootcamps especializados para mantenerme al día con el mercado.",
      en: "My Systems Engineering training at UTP taught me how to learn autonomously. I keep building personal projects based on real problems, constantly read official documentation, follow software community best practices, and take specialized bootcamps to stay current with the market.",
    },
  },
];
