import type { Project } from "../types";

export const projects: Project[] = [
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
    id: "proyecto-placeholder",
    title: "Agrega aquí tu próximo proyecto",
    description:
      "Espacio reservado para tu siguiente proyecto destacado. Reemplaza este texto con una descripción clara del problema que resuelve y para quién.",
    image: "/work-1.jpeg",
    stack: ["Agrega", "tu", "stack"],
    status: "placeholder",
    challenges: "Agrega aquí los retos técnicos resueltos.",
    learnings: "Agrega aquí los aprendizajes obtenidos.",
    isPlaceholder: true,
  },
];
