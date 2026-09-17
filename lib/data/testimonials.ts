import type { TestimonialItem } from "../types";

export const testimonials: TestimonialItem[] = [
  {
    id: "recomendacion-1",
    name: { es: "Equipo de Gestión Administrativa", en: "Administrative Management Team" },
    role: { es: "TurboCars", en: "TurboCars" },
    quote: {
      es: "Santiago demostró un excelente compromiso y una gran capacidad técnica durante el desarrollo de la plataforma web de inventario para TurboCars. Diseñó y conectó con éxito una solución robusta que optimizó de forma inmediata la administración de nuestros vehículos.",
      en: "Santiago showed excellent commitment and strong technical ability while developing the inventory web platform for TurboCars. He designed and successfully connected a robust solution that immediately optimized how we manage our vehicles.",
    },
  },
  {
    id: "recomendacion-2",
    name: { es: "Mentor Académico", en: "Academic Mentor" },
    role: { es: "Colaborador en Proyectos UTP", en: "Collaborator on UTP Projects" },
    quote: {
      es: "Un desarrollador con una excelente disposición para el aprendizaje, que comprende rápidamente la lógica de negocio y aplica fundamentos sólidos de ingeniería en sus entregables de software. Altamente recomendado para equipos ágiles.",
      en: "A developer with a great willingness to learn, who quickly understands business logic and applies solid engineering fundamentals in his software deliverables. Highly recommended for agile teams.",
    },
  },
];
