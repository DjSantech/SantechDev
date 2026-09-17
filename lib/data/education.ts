import type { EducationItem } from "../types";

export const education: EducationItem[] = [
  {
    id: "universidad-utp",
    title: { es: "Ingeniería de Sistemas y Computación", en: "Systems and Computer Engineering" },
    institution: { es: "Universidad Tecnológica de Pereira", en: "Universidad Tecnológica de Pereira" },
    period: { es: "Desde febrero 2023", en: "Since February 2023" },
    description: {
      es: "Formación en fundamentos de programación, estructuras de datos, bases de datos y desarrollo de software, actualmente en curso.",
      en: "Training in programming fundamentals, data structures, databases, and software development, currently in progress.",
    },
  },
  {
    id: "bootcamp-fullstack",
    title: { es: "Bootcamp Fullstack II", en: "Fullstack Bootcamp II" },
    institution: { es: "Universidad Tecnológica de Pereira", en: "Universidad Tecnológica de Pereira" },
    period: { es: "Julio 2023", en: "July 2023" },
    description: {
      es: "Formación intensiva orientada a la programación web con HTML, CSS, JavaScript y frameworks modernos como React.",
      en: "Intensive training focused on web programming with HTML, CSS, JavaScript, and modern frameworks like React.",
    },
  },
  {
    id: "certificacion-bases-datos",
    title: {
      es: "Formación Profesional en Bases de Datos Relacionales (MySQL)",
      en: "Professional Training in Relational Databases (MySQL)",
    },
    institution: {
      es: "Universidad Tecnológica de Pereira (UTP)",
      en: "Universidad Tecnológica de Pereira (UTP)",
    },
    period: { es: "Diciembre 2024", en: "December 2024" },
    description: {
      es: "Estudios y aplicación práctica enfocada en diseño de esquemas, normalización de datos, consultas complejas e integración de bases de datos con aplicaciones web.",
      en: "Studies and hands-on practice focused on schema design, data normalization, complex queries, and integrating databases with web applications.",
    },
  },
  {
    id: "idioma-ingles",
    title: { es: "Inglés", en: "English" },
    institution: { es: "Nivel Intermedio (B1 - B2)", en: "Intermediate Level (B1 - B2)" },
    period: { es: "Lectura y documentación técnica", en: "Reading and technical documentation" },
    description: {
      es: "Capacidad para comprender documentación oficial de software, consumir recursos técnicos globales en inglés y escribir código auto-documentado con buenas prácticas internacionales.",
      en: "Able to understand official software documentation, consume global technical resources in English, and write self-documenting code following international best practices.",
    },
  },
];
