import { Lightbulb, Wrench, TestTube, Rocket } from "lucide-react";

import type { LocalizedText } from "../types";

interface ProcessStep {
  id: string;
  icon: typeof Lightbulb;
  title: LocalizedText;
  description: LocalizedText;
}

export const processSteps: ProcessStep[] = [
  {
    id: "entender",
    icon: Lightbulb,
    title: { es: "Entender el problema", en: "Understand the problem" },
    description: {
      es: "Antes de escribir código, busco entender a quién le sirve la solución y qué problema real resuelve.",
      en: "Before writing code, I make sure I understand who the solution serves and what real problem it solves.",
    },
  },
  {
    id: "construir",
    icon: Wrench,
    title: { es: "Construir con intención", en: "Build with intention" },
    description: {
      es: "Priorizo componentes simples, tipados y reutilizables por encima de soluciones rápidas y frágiles.",
      en: "I prioritize simple, typed, reusable components over quick and fragile solutions.",
    },
  },
  {
    id: "probar",
    icon: TestTube,
    title: { es: "Revisar antes de entregar", en: "Review before shipping" },
    description: {
      es: "Reviso rendimiento, accesibilidad y casos límite antes de dar algo por terminado.",
      en: "I check performance, accessibility, and edge cases before calling anything done.",
    },
  },
  {
    id: "iterar",
    icon: Rocket,
    title: { es: "Iterar con feedback", en: "Iterate with feedback" },
    description: {
      es: "Trato cada entrega como un punto de partida para mejorar, no como un producto cerrado.",
      en: "I treat every delivery as a starting point to improve, not a closed product.",
    },
  },
];
