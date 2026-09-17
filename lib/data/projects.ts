import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ceoenfragancias",
    title: { es: "CEOENFRAGANCIAS — Perfumería E-commerce", en: "CEOENFRAGANCIAS — Perfume E-commerce" },
    description: {
      es: "Tienda en línea de perfumería construida para vender en Pereira y en toda Colombia. Además del catálogo público, incluye un panel de administración, precios diferenciados para mayoristas y un programa de dropshipping donde cada vendedor tiene su propio link y gana una comisión por venta.",
      en: "Online perfume store built to sell in Pereira and across Colombia. On top of the public catalog, it includes an admin panel, tiered pricing for wholesalers, and a dropshipping program where each seller gets their own link and earns a commission per sale.",
    },
    image: "/ceoenfragancia_captura.png",
    stack: ["Next.js", "TypeScript", "MongoDB Atlas", "Mercado Pago"],
    status: "en-progreso",
    urlDemo: "https://ceoenfragancia.com",
    challenges: {
      es: "Integrar la API de Mercado Pago para el procesamiento seguro de pagos, resolver flujos de Git y fallos de build en Vercel, y configurar el dominio personalizado y el DNS de producción (ceofragancias.com).",
      en: "Integrating the Mercado Pago API for secure payment processing, resolving Git workflow and Vercel build issues, and configuring the custom domain and production DNS (ceofragancias.com).",
    },
    learnings: {
      es: "Cómo estructurar un sistema de precios diferenciados por rol (público / mayorista) y un programa de dropshipping con enlaces y comisiones por vendedor sobre una base de datos no relacional.",
      en: "How to structure a role-based tiered pricing system (public / wholesale) and a dropshipping program with per-seller links and commissions on top of a non-relational database.",
    },
  },
  {
    id: "vapes-princys",
    title: { es: "Vapes Princys E-commerce", en: "Vapes Princys E-commerce" },
    description: {
      es: "Aplicación web Full-stack construida con React, TypeScript y MongoDB para la gestión dinámica de productos e inventario. Cuenta con una API REST segura y diseño 100% responsivo.",
      en: "Full-stack web application built with React, TypeScript, and MongoDB for dynamic product and inventory management. Features a secure REST API and a fully responsive design.",
    },
    image: "/vapitos_princys_captura.png",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "finalizado",
    urlDemo: "https://vapitosprincys.com",
    challenges: {
      es: "Diseñar y consumir una API RESTful propia con operaciones CRUD completas para productos e inventario, e implementar autenticación JWT junto con control de acceso basado en roles (RBAC).",
      en: "Designing and consuming a custom RESTful API with full CRUD operations for products and inventory, and implementing JWT authentication together with role-based access control (RBAC).",
    },
    learnings: {
      es: "Desplegar una infraestructura full-stack separando frontend (Vercel) y backend (Render), y asegurar los flujos de autenticación y autorización de un e-commerce real.",
      en: "Deploying a full-stack infrastructure with a split frontend (Vercel) and backend (Render), and securing the authentication and authorization flows of a real e-commerce store.",
    },
  },
  {
    id: "power-mix",
    title: { es: "POWER-MIX — Plataforma Corporativa", en: "POWER-MIX — Corporate Platform" },
    description: {
      es: "Sitio web empresarial e institucional para una empresa de alquiler de luces y sonido. Desarrollado con Next.js, TypeScript y Tailwind CSS, optimizado rigurosamente para rendimiento y SEO.",
      en: "Business and institutional website for a lighting and sound rental company. Built with Next.js, TypeScript, and Tailwind CSS, rigorously optimized for performance and SEO.",
    },
    image: "/powermixlucesysonido_captura.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "finalizado",
    urlDemo: "https://powermixlucesysonido.com",
    challenges: {
      es: "Optimizar la aplicación para motores de búsqueda (SEO) y velocidad de carga, mejorando la indexación en buscadores y la retención general de usuarios.",
      en: "Optimizing the application for search engines (SEO) and load speed, improving search indexing and overall user retention.",
    },
    learnings: {
      es: "Técnicas de SEO técnico y optimización de rendimiento aplicadas a un sitio institucional real, en producción para un cliente.",
      en: "Technical SEO and performance optimization techniques applied to a real institutional site, in production for a client.",
    },
  },
  {
    id: "cercafe-memorama",
    title: { es: "Cercafe Memorama", en: "Cercafe Memorama" },
    description: {
      es: "Juego de memoria interactivo desarrollado para una actividad de marca, con animaciones fluidas y una experiencia pensada para usuarios finales no técnicos.",
      en: "Interactive memory game built for a brand activity, with smooth animations and an experience designed for non-technical end users.",
    },
    image: "/cercafe-memorama.png",
    stack: ["React", "JavaScript", "CSS"],
    status: "finalizado",
    urlGithub: "https://github.com/DjSantech/CercafeMemorama2",
    urlDemo: "https://cercafe-memorama2.vercel.app",
    challenges: {
      es: "Agrega aquí los retos técnicos que resolviste en este proyecto (por ejemplo: manejo de estado del juego, lógica de emparejamiento, animaciones de volteo).",
      en: "Add the technical challenges you solved in this project here (e.g., game state management, matching logic, flip animations).",
    },
    learnings: {
      es: "Agrega aquí qué aprendiste construyendo este proyecto (por ejemplo: manejo de estado en React, diseño de UI para juegos).",
      en: "Add what you learned building this project here (e.g., state management in React, UI design for games).",
    },
  },
  {
    id: "turbocars-database",
    title: { es: "TurboCars Database", en: "TurboCars Database" },
    description: {
      es: "Sistema web conectado a una base de datos MySQL para gestionar el inventario de una empresa de venta de vehículos, con operaciones CRUD completas.",
      en: "Web system connected to a MySQL database to manage the inventory of a vehicle sales company, with full CRUD operations.",
    },
    image: "/turbocars-database.png",
    stack: ["Next.js", "MySQL", "TypeScript"],
    status: "finalizado",
    urlGithub: "https://github.com/DjSantech/TurboCarsDatabase",
    urlDemo: "https://turbo-cars-database.vercel.app",
    challenges: {
      es: "Agrega aquí los retos técnicos de este proyecto (por ejemplo: modelado de la base de datos, validación de formularios, relaciones entre tablas).",
      en: "Add the technical challenges of this project here (e.g., database modeling, form validation, table relationships).",
    },
    learnings: {
      es: "Agrega aquí qué aprendiste (por ejemplo: conexión de Next.js con una base de datos relacional, diseño de esquemas).",
      en: "Add what you learned here (e.g., connecting Next.js to a relational database, schema design).",
    },
  },
  {
    id: "saas-gestion-clientes",
    title: {
      es: "Plataforma SaaS de Gestión de Clientes y Agendamiento",
      en: "SaaS Platform for Client Management and Scheduling",
    },
    description: {
      es: "Un sistema diseñado para automatizar las reservas y el control de inventario de negocios de servicios. Resolverá el problema de la pérdida de tiempo en agendamientos manuales mediante un dashboard interactivo optimizado para móviles.",
      en: "A system designed to automate bookings and inventory control for service businesses. It will solve the time loss from manual scheduling through an interactive, mobile-optimized dashboard.",
    },
    image: "/work-1.jpeg",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "NestJS"],
    status: "placeholder",
    challenges: {
      es: "Agrega aquí los retos técnicos resueltos.",
      en: "Add the technical challenges solved here.",
    },
    learnings: {
      es: "Agrega aquí los aprendizajes obtenidos.",
      en: "Add the learnings obtained here.",
    },
    isPlaceholder: true,
  },
];
