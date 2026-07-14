import type { EducationItem } from "../types";

export const education: EducationItem[] = [
  {
    id: "universidad-utp",
    title: "Ingeniería de Sistemas y Computación",
    institution: "Universidad Tecnológica de Pereira",
    period: "Desde febrero 2023",
    description:
      "Formación en fundamentos de programación, estructuras de datos, bases de datos y desarrollo de software, actualmente en curso.",
  },
  {
    id: "bootcamp-fullstack",
    title: "Bootcamp Fullstack II",
    institution: "Universidad Tecnológica de Pereira",
    period: "Julio 2023",
    description:
      "Formación intensiva orientada a la programación web con HTML, CSS, JavaScript y frameworks modernos como React.",
  },
  {
    id: "certificacion-placeholder",
    title: "Agrega aquí una certificación",
    institution: "Plataforma o institución",
    period: "Fecha",
    description: "Espacio reservado para certificaciones (por ejemplo: freeCodeCamp, Platzi, Coursera, AWS, Meta).",
    isPlaceholder: true,
  },
  {
    id: "idiomas-placeholder",
    title: "Agrega aquí tus idiomas",
    institution: "Nivel de dominio",
    period: "Certificación (si aplica)",
    description: "Espacio reservado para idiomas (por ejemplo: Inglés — B2, certificado EF SET o similar).",
    isPlaceholder: true,
  },
];
