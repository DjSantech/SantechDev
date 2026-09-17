import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ceoenfragancias",
    title: "CEOENFRAGANCIAS — Perfumería E-commerce",
    description:
      "Tienda en línea de perfumería construida para vender en Pereira y en toda Colombia. Además del catálogo público, incluye un panel de administración, precios diferenciados para mayoristas y un programa de dropshipping donde cada vendedor tiene su propio link y gana una comisión por venta.",
    image: "/ceoenfragancia_captura.png",
    stack: ["Next.js", "TypeScript", "MongoDB Atlas", "Mercado Pago"],
    status: "en-progreso",
    urlDemo: "https://ceoenfragancia.com",
    challenges:
      "Integrar la API de Mercado Pago para el procesamiento seguro de pagos, resolver flujos de Git y fallos de build en Vercel, y configurar el dominio personalizado y el DNS de producción (ceofragancias.com).",
    learnings:
      "Cómo estructurar un sistema de precios diferenciados por rol (público / mayorista) y un programa de dropshipping con enlaces y comisiones por vendedor sobre una base de datos no relacional.",
  },
  {
    id: "vapes-princys",
    title: "Vapes Princys E-commerce",
    description:
      "Aplicación web Full-stack construida con React, TypeScript y MongoDB para la gestión dinámica de productos e inventario. Cuenta con una API REST segura y diseño 100% responsivo.",
    image: "/vapitos_princys_captura.png",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "finalizado",
    urlDemo: "https://vapitosprincys.com",
    challenges:
      "Diseñar y consumir una API RESTful propia con operaciones CRUD completas para productos e inventario, e implementar autenticación JWT junto con control de acceso basado en roles (RBAC).",
    learnings:
      "Desplegar una infraestructura full-stack separando frontend (Vercel) y backend (Render), y asegurar los flujos de autenticación y autorización de un e-commerce real.",
  },
  {
    id: "power-mix",
    title: "POWER-MIX — Plataforma Corporativa",
    description:
      "Sitio web empresarial e institucional para una empresa de alquiler de luces y sonido. Desarrollado con Next.js, TypeScript y Tailwind CSS, optimizado rigurosamente para rendimiento y SEO.",
    image: "/powermixlucesysonido_captura.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "finalizado",
    urlDemo: "https://powermixlucesysonido.com",
    challenges:
      "Optimizar la aplicación para motores de búsqueda (SEO) y velocidad de carga, mejorando la indexación en buscadores y la retención general de usuarios.",
    learnings:
      "Técnicas de SEO técnico y optimización de rendimiento aplicadas a un sitio institucional real, en producción para un cliente.",
  },
  {
    id: "cercafe-memorama",
    title: "Cercafe Memorama",
    description:
      "Juego de memoria interactivo desarrollado para una actividad de marca, con animaciones fluidas y una experiencia pensada para usuarios finales no técnicos.",
    image: "/cercafe-memorama.png",
    stack: ["React", "JavaScript", "CSS"],
    status: "finalizado",
    urlGithub: "https://github.com/DjSantech/CercafeMemorama2",
    urlDemo: "https://cercafe-memorama2.vercel.app",
    challenges:
      "Agrega aquí los retos técnicos que resolviste en este proyecto (por ejemplo: manejo de estado del juego, lógica de emparejamiento, animaciones de volteo).",
    learnings:
      "Agrega aquí qué aprendiste construyendo este proyecto (por ejemplo: manejo de estado en React, diseño de UI para juegos).",
  },
  {
    id: "turbocars-database",
    title: "TurboCars Database",
    description:
      "Sistema web conectado a una base de datos MySQL para gestionar el inventario de una empresa de venta de vehículos, con operaciones CRUD completas.",
    image: "/turbocars-database.png",
    stack: ["Next.js", "MySQL", "TypeScript"],
    status: "finalizado",
    urlGithub: "https://github.com/DjSantech/TurboCarsDatabase",
    urlDemo: "https://turbo-cars-database.vercel.app",
    challenges:
      "Agrega aquí los retos técnicos de este proyecto (por ejemplo: modelado de la base de datos, validación de formularios, relaciones entre tablas).",
    learnings:
      "Agrega aquí qué aprendiste (por ejemplo: conexión de Next.js con una base de datos relacional, diseño de esquemas).",
  },
  {
    id: "saas-gestion-clientes",
    title: "Plataforma SaaS de Gestión de Clientes y Agendamiento",
    description:
      "Un sistema diseñado para automatizar las reservas y el control de inventario de negocios de servicios. Resolverá el problema de la pérdida de tiempo en agendamientos manuales mediante un dashboard interactivo optimizado para móviles.",
    image: "/work-1.jpeg",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "NestJS"],
    status: "placeholder",
    challenges: "Agrega aquí los retos técnicos resueltos.",
    learnings: "Agrega aquí los aprendizajes obtenidos.",
    isPlaceholder: true,
  },
];
