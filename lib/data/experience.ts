import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    id: "pasarela-internacional",
    role: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
    place: {
      es: "Pasarela Internacional · Proyecto privado para cliente",
      en: "Pasarela Internacional · Private client project",
    },
    period: { es: "Noviembre 2026 — Actual", en: "November 2026 — Present" },
    description: {
      es: "Desarrollo un sistema de gestión privado (PWA) para una discoteca: cuentas por mesa, cuadre de caja por mesero, comisiones por escalas, pagos al personal con recibo impreso, inventario con kardex y reportes, en un monorepo TypeScript (React, Node.js/Express, MongoDB Atlas) desplegado en Cloudflare Pages y Render.",
      en: "Building a private management system (PWA) for a nightclub: per-table tabs, per-waiter cash reconciliation, tiered commissions, staff payouts with printed receipts, kardex inventory, and reports, in a TypeScript monorepo (React, Node.js/Express, MongoDB Atlas) deployed on Cloudflare Pages and Render.",
    },
  },
  {
    id: "outlier-aether",
    role: { es: "Evaluador de modelos de IA de voz", en: "Voice AI Model Evaluator" },
    place: { es: "Outlier · Proyecto Aether (remoto)", en: "Outlier · Project Aether (remote)" },
    period: { es: "Noviembre 2026 — Actual", en: "November 2026 — Present" },
    description: {
      es: "Evalúo de forma comparativa conversaciones en tiempo real con modelos speech-to-speech en español (naturalidad, utilidad, dinámica conversacional, calidad de audio y cumplimiento de la tarea), clasifico errores como latencia, interrupciones, alucinaciones y fallos de instrucción, y redacto justificaciones técnicas en inglés para el entrenamiento de los modelos.",
      en: "I run side-by-side evaluations of real-time conversations with Spanish speech-to-speech models (naturalness, helpfulness, conversational flow, audio quality, and task completion), classify errors such as latency, interruptions, hallucinations, and instruction-following failures, and write technical justifications in English for model training.",
    },
  },
  {
    id: "panesypan",
    role: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
    place: {
      es: "Panes & Pan · Sistema POS, administrativo y sitio web",
      en: "Panes & Pan · POS, back office, and website",
    },
    period: { es: "Septiembre 2026 — Actual", en: "September 2026 — Present" },
    description: {
      es: "Construyo y mantengo el sistema que reemplazó la plataforma comercial que pagaba la panadería (TryTiendas): POS táctil con pagos combinados, cierre de caja, inventario con producción y mermas, dashboard en tiempo real y facturación electrónica DIAN lista para activar. Monorepo pnpm con React 19, Express 5 y MongoDB Atlas, desplegado en Cloudflare y Render, con pruebas E2E y CI en GitHub Actions.",
      en: "Building and maintaining the system that replaced the commercial platform the bakery was paying for (TryTiendas): touch-screen POS with split payments, register closing, inventory with production and waste tracking, a real-time dashboard, and DIAN electronic invoicing ready to switch on. pnpm monorepo with React 19, Express 5, and MongoDB Atlas, deployed on Cloudflare and Render, with E2E tests and CI on GitHub Actions.",
    },
  },
  {
    id: "ceoenfragancia",
    role: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
    place: { es: "CEOENFRAGANCIA · E-commerce de fragancias", en: "CEOENFRAGANCIA · Fragrance e-commerce" },
    period: { es: "Agosto 2026 — Actual", en: "August 2026 — Present" },
    description: {
      es: "Diseño y construyo el e-commerce de una perfumería con 2 locales con Next.js 15, TypeScript, Express y MongoDB: pagos con Mercado Pago, pedidos por WhatsApp y un sistema administrativo interno. Migré la tienda de Vercel a Cloudflare Workers con GitHub Actions, transferí el dominio de Wix a Porkbun, configuré el DNS y la mitigación de bots en Cloudflare, e integré el Píxel de Meta para las campañas de Meta Ads.",
      en: "Designing and building the e-commerce store for a perfume shop with 2 locations using Next.js 15, TypeScript, Express, and MongoDB: Mercado Pago payments, WhatsApp orders, and an internal admin system. I migrated the store from Vercel to Cloudflare Workers with GitHub Actions, transferred the domain from Wix to Porkbun, set up DNS and bot mitigation on Cloudflare, and integrated the Meta Pixel for Meta Ads campaigns.",
    },
  },
  {
    id: "capacitaciones",
    role: { es: "Desarrollador Full-Stack Independiente", en: "Independent Full-Stack Developer" },
    place: { es: "Sistema de Gestión de Capacitaciones", en: "Training Management System" },
    period: { es: "Junio 2026", en: "June 2026" },
    description: {
      es: "Desarrollé un sistema administrativo web interno para automatizar y auditar las horas de capacitación del personal, con Next.js 15, TypeScript, Tailwind CSS y MongoDB Atlas, incluyendo paneles analíticos interactivos con Recharts.",
      en: "Built an internal administrative web system to automate and audit staff training hours, using Next.js 15, TypeScript, Tailwind CSS, and MongoDB Atlas, including interactive analytics dashboards with Recharts.",
    },
  },
  {
    id: "power-mix",
    role: {
      es: "Desarrollo web, marketing y soporte técnico",
      en: "Web Development, Marketing, and Technical Support",
    },
    place: { es: "Power Mix Luces y Sonido", en: "Power Mix Luces y Sonido" },
    period: { es: "Febrero 2026 — Actual", en: "February 2026 — Present" },
    description: {
      es: "Desarrollé y mantengo el sitio corporativo con Next.js 16, TypeScript y Tailwind CSS en Cloudflare Workers (OpenNext), con despliegue automático desde GitHub y optimizado para SEO. Creo imágenes publicitarias con IA (Gemini, Higgsfield), planeo campañas en Meta Ads y trabajo como DJ (Pioneer XDJ-XZ, rekordbox) y VJ (Resolume Arena, mapeo multipantalla).",
      en: "Built and maintain the corporate website with Next.js 16, TypeScript, and Tailwind CSS on Cloudflare Workers (OpenNext), with automatic deployments from GitHub and SEO optimization. I create ad images with AI (Gemini, Higgsfield), plan Meta Ads campaigns, and work as a DJ (Pioneer XDJ-XZ, rekordbox) and VJ (Resolume Arena, multi-screen mapping).",
    },
  },
  {
    id: "vapitos-princys",
    role: { es: "Desarrollador Full-Stack Freelance", en: "Freelance Full-Stack Developer" },
    place: { es: "Vapitos Princys (E-commerce)", en: "Vapitos Princys (E-commerce)" },
    period: { es: "Septiembre 2025 — Enero 2026", en: "September 2025 — January 2026" },
    description: {
      es: "Diseñé y desarrollé un e-commerce completo con React, Vite, TypeScript y Node.js/Express, con una API REST propia asegurada con JWT, RBAC y CORS limitado a sus dominios. Migré el frontend de Vercel a Cloudflare Workers con despliegue desde GitHub Actions y mantuve el backend en Render.",
      en: "Designed and built a complete e-commerce store with React, Vite, TypeScript, and Node.js/Express, with a custom REST API secured with JWT, RBAC, and CORS restricted to its domains. I migrated the frontend from Vercel to Cloudflare Workers with deployments from GitHub Actions and kept the backend on Render.",
    },
  },
  {
    id: "freelance",
    role: { es: "Desarrollador Web Freelance", en: "Freelance Web Developer" },
    place: { es: "Proyectos independientes", en: "Independent projects" },
    period: { es: "Julio 2024 — Agosto 2025", en: "July 2024 — August 2025" },
    description: {
      es: "Diseño, desarrollo y mantenimiento de sitios web a la medida para distintos clientes, adaptando cada solución a sus necesidades específicas y mejorando su presencia en línea.",
      en: "Design, development, and maintenance of custom websites for different clients, tailoring each solution to their specific needs and improving their online presence.",
    },
  },
  {
    id: "turbocars-database",
    role: { es: "Desarrollo de base de datos e inventario", en: "Database and inventory development" },
    place: { es: "TurboCars", en: "TurboCars" },
    period: { es: "Octubre 2024", en: "October 2024" },
    description: {
      es: "Diseñé y desarrollé un sitio web conectado a una base de datos MySQL para que la empresa pudiera gestionar su inventario de vehículos de forma centralizada.",
      en: "Designed and built a website connected to a MySQL database so the company could manage its vehicle inventory centrally.",
    },
  },
  {
    id: "juegos-interactivos",
    role: { es: "Implementación de juegos interactivos", en: "Interactive games implementation" },
    place: { es: "Proyectos para empresas", en: "Projects for companies" },
    period: { es: "Febrero 2024", en: "February 2024" },
    description: {
      es: "Desarrollé juegos como memoria, ahorcado y otros mini-juegos interactivos para actividades y campañas de distintas empresas.",
      en: "Built games like memory match, hangman, and other interactive mini-games for activities and campaigns for different companies.",
    },
  },
];
