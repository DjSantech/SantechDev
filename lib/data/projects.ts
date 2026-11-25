import { Lock, Plug } from "lucide-react";

import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "pasarela-internacional",
    title: {
      es: "Pasarela Internacional — Sistema de gestión para discoteca",
      en: "Pasarela Internacional — Nightclub Management System",
    },
    description: {
      es: "Sistema privado (PWA) solo para el personal de una discoteca, con roles de administrador, barra, meseros (cada uno con su código) y modelos. Maneja cuentas abiertas por mesa, base de caja y cuadre por mesero, comisiones por escalas y pagos al personal con recibo impreso.",
      en: "Private, staff-only system (PWA) for a nightclub, with roles for admin, bar, waiters (each with their own code), and models. It handles open tabs per table, cash float and per-waiter reconciliation, tiered commissions, and staff payouts with printed receipts.",
    },
    cover: {
      icon: Lock,
      label: { es: "Proyecto privado para cliente", en: "Private client project" },
    },
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "Mongoose", "Zod", "MongoDB Atlas"],
    status: "en-progreso",
    isPrivate: true,
    challenges: {
      es: "Cubrir toda la operación del negocio en un solo sistema: inventario con kardex, control de habitaciones por tiempo, ingresos y egresos, reportes e impresión de tiquetes térmicos de 58 y 80 mm, con permisos distintos para cada rol.",
      en: "Covering the entire business operation in a single system: inventory with a kardex, time-based room control, income and expenses, reports, and 58/80 mm thermal ticket printing, with different permissions for each role.",
    },
    learnings: {
      es: "Estructurar un monorepo TypeScript con esquemas Zod compartidos entre frontend y backend, y desplegarlo por partes: frontend en Cloudflare Pages, API en Render con MongoDB Atlas, imágenes en Cloudinary y tareas programadas con cron-job.org.",
      en: "Structuring a TypeScript monorepo with Zod schemas shared between frontend and backend, and deploying it in parts: frontend on Cloudflare Pages, API on Render with MongoDB Atlas, images on Cloudinary, and scheduled jobs with cron-job.org.",
    },
  },
  {
    id: "panesypan",
    title: {
      es: "Panes & Pan — Sistema POS, administrativo y sitio web",
      en: "Panes & Pan — POS, Back Office, and Website",
    },
    description: {
      es: "Sistema completo para una panadería en Dosquebradas que reemplazó la plataforma comercial que pagaba (TryTiendas), con migración de productos, costos y proveedores. Venta en pantalla táctil con cuentas por mesa y pagos combinados (efectivo, Nequi, Daviplata, tarjeta), cierre de caja con arqueo, inventario con producción y mermas, y dashboard en tiempo real con Socket.IO.",
      en: "Complete system for a bakery in Dosquebradas, Colombia, that replaced the commercial platform it was paying for (TryTiendas), including the migration of products, costs, and suppliers. Touch-screen sales with per-table tabs and split payments (cash, Nequi, Daviplata, card), register closing with cash count, inventory with production and waste tracking, and a real-time dashboard with Socket.IO.",
    },
    image: "/panesypan_captura.png",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express 5",
      "Zod",
      "MongoDB Atlas",
      "Socket.IO",
    ],
    status: "en-progreso",
    urlGithub: "https://github.com/DjSantech/PanesyPan",
    urlDemo: "https://panesypan.com",
    challenges: {
      es: "Separar el sitio público, el sistema interno (sistema.panesypan.com) en Cloudflare y la API REST (api.panesypan.com) en Render, y blindarlos: RBAC en el backend, argon2id, cookies httpOnly con refresh rotativo, CSRF, auditoría, rate limiting y WAF de Cloudflare con header secreto de origen. Además: PWA instalable, tiquetes térmicos, exportes CSV y facturación electrónica DIAN (Factus) lista para activar.",
      en: "Splitting the public site, the internal system (sistema.panesypan.com) on Cloudflare, and the REST API (api.panesypan.com) on Render, and locking them down: backend RBAC, argon2id, httpOnly cookies with rotating refresh tokens, CSRF protection, audit logging, rate limiting, and a Cloudflare WAF with a secret origin header. Plus an installable PWA, thermal tickets, CSV exports, and DIAN electronic invoicing (Factus) ready to switch on.",
    },
    learnings: {
      es: "Sostener la calidad de un sistema que el negocio usa a diario: pruebas con Vitest, Supertest y Playwright (E2E), accesibilidad WCAG 2.2 AA verificada con axe y CI en GitHub Actions. Lo desarrollé por fases en paralelo con git worktrees y Claude Code, en un monorepo pnpm con TypeScript estricto.",
      en: "Keeping quality high on a system the business relies on every day: tests with Vitest, Supertest, and Playwright (E2E), WCAG 2.2 AA accessibility checked with axe, and CI on GitHub Actions. I built it in parallel phases using git worktrees and Claude Code, in a strict-TypeScript pnpm monorepo.",
    },
  },
  {
    id: "ceoenfragancia",
    title: { es: "CEOENFRAGANCIA — E-commerce de fragancias", en: "CEOENFRAGANCIA — Fragrance E-commerce" },
    description: {
      es: "Tienda en línea para una perfumería con 2 locales: catálogo filtrable, precios al detal y mayoristas, esencias por gramos y un programa de dropshipping por link. Recibe pagos con la API de Mercado Pago y pedidos por WhatsApp, e incluye un sistema administrativo interno para las ventas del local, los insumos y la caja.",
      en: "Online store for a perfume shop with 2 physical locations: filterable catalog, retail and wholesale pricing, essences sold by the gram, and a link-based dropshipping program. It takes payments through the Mercado Pago API and orders via WhatsApp, and includes an internal admin system for in-store sales, supplies, and the cash register.",
    },
    image: "/ceoenfragancia_captura.png",
    stack: ["Next.js 15", "TypeScript", "Express", "MongoDB", "Mercado Pago", "Cloudinary", "Render", "Cloudflare"],
    status: "en-progreso",
    urlDemo: "https://ceoenfragancia.com",
    challenges: {
      es: "Migrar la tienda de Vercel a Cloudflare Workers con despliegue automático desde GitHub Actions, transferir el dominio de Wix a Porkbun con el DNS en Cloudflare (ceoenfragancia.com), y mitigar el tráfico de bots con reglas por región.",
      en: "Migrating the store from Vercel to Cloudflare Workers with automatic deployments from GitHub Actions, transferring the domain from Wix to Porkbun with DNS on Cloudflare (ceoenfragancia.com), and mitigating bot traffic with region-based rules.",
    },
    learnings: {
      es: "Estructurar precios diferenciados (detal / mayorista) y un programa de dropshipping con enlaces por vendedor sobre MongoDB, y conectar la tienda con el Píxel de Meta para las campañas de Meta Ads.",
      en: "Structuring tiered pricing (retail / wholesale) and a dropshipping program with per-seller links on MongoDB, and connecting the store to the Meta Pixel for Meta Ads campaigns.",
    },
  },
  {
    id: "power-mix",
    title: {
      es: "Power Mix Luces y Sonido — Sitio corporativo",
      en: "Power Mix Luces y Sonido — Corporate Website",
    },
    description: {
      es: "Sitio corporativo para una empresa de alquiler de luces y sonido, construido con Next.js 16, TypeScript y Tailwind CSS, desplegado en Cloudflare Workers (OpenNext) con despliegue automático desde GitHub y optimizado para SEO.",
      en: "Corporate website for a lighting and sound rental company, built with Next.js 16, TypeScript, and Tailwind CSS, running on Cloudflare Workers (OpenNext) with automatic deployments from GitHub and optimized for SEO.",
    },
    image: "/powermixlucesysonido_captura.png",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "OpenNext"],
    status: "finalizado",
    urlDemo: "https://powermixlucesysonido.com",
    challenges: {
      es: "Llevar un sitio Next.js 16 a Cloudflare Workers con OpenNext y optimizarlo para motores de búsqueda (SEO) y velocidad de carga, mejorando la indexación en buscadores.",
      en: "Running a Next.js 16 site on Cloudflare Workers with OpenNext and optimizing it for search engines (SEO) and load speed, improving search indexing.",
    },
    learnings: {
      es: "Combinar desarrollo y marketing para el mismo cliente: imágenes publicitarias creadas con IA (Gemini, Higgsfield) y planeación de campañas en Meta Ads.",
      en: "Combining development and marketing for the same client: ad images created with AI (Gemini, Higgsfield) and Meta Ads campaign planning.",
    },
  },
  {
    id: "vapitos-princys",
    title: { es: "Vapitos Princys — E-commerce", en: "Vapitos Princys — E-commerce" },
    description: {
      es: "Tienda full-stack con gestión de productos e inventario, API REST segura y diseño responsive, construida con React, Vite, TypeScript, Node.js/Express y MongoDB.",
      en: "Full-stack store with product and inventory management, a secure REST API, and a responsive design, built with React, Vite, TypeScript, Node.js/Express, and MongoDB.",
    },
    image: "/vapitos_princys_captura.png",
    stack: ["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "finalizado",
    urlDemo: "https://www.vapitosprincys.com",
    challenges: {
      es: "Diseñar y consumir una API REST propia con CRUD completo para productos e inventario, y asegurarla con autenticación JWT, control de acceso basado en roles (RBAC) y CORS limitado a los dominios de la tienda.",
      en: "Designing and consuming a custom REST API with full CRUD for products and inventory, and securing it with JWT authentication, role-based access control (RBAC), and CORS restricted to the store's domains.",
    },
    learnings: {
      es: "Separar la infraestructura en dos: migré el frontend de Vercel a Cloudflare Workers con despliegue desde GitHub Actions y mantuve el backend en Render.",
      en: "Splitting the infrastructure in two: I migrated the frontend from Vercel to Cloudflare Workers with deployments from GitHub Actions and kept the backend on Render.",
    },
  },
  {
    id: "resolume-mcp",
    title: { es: "Resolume MCP — Servidor MCP open source", en: "Resolume MCP — Open-Source MCP Server" },
    description: {
      es: "Servidor Model Context Protocol que conecta a Claude con Resolume Arena para controlar visuales en vivo con lenguaje natural, con un modo autopiloto para shows.",
      en: "Model Context Protocol server that connects Claude to Resolume Arena to control live visuals with natural language, including an autopilot mode for shows.",
    },
    cover: {
      icon: Plug,
      label: { es: "Código abierto en GitHub", en: "Open source on GitHub" },
    },
    stack: ["TypeScript", "Node.js", "MCP", "Zod", "WebSockets", "Render"],
    status: "finalizado",
    urlGithub: "https://github.com/DjSantech/resolume-mcp",
    challenges: {
      es: "Construir un panel web con acceso de administrador y de espectador comunicado por WebSockets seguros (wss://) y desplegarlo en Render.",
      en: "Building a web panel with admin and viewer access over secure WebSockets (wss://) and deploying it on Render.",
    },
    learnings: {
      es: "Diseñar herramientas MCP para que un modelo de IA controle software de escritorio en tiempo real, uniendo mi trabajo como VJ con el desarrollo de software.",
      en: "Designing MCP tools so an AI model can control desktop software in real time, bringing together my VJ work and software development.",
    },
  },
];
