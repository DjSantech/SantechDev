import { Lightbulb, Wrench, TestTube, Rocket } from "lucide-react";

export const processSteps = [
  {
    id: "entender",
    icon: Lightbulb,
    title: "Entender el problema",
    description: "Antes de escribir código, busco entender a quién le sirve la solución y qué problema real resuelve.",
  },
  {
    id: "construir",
    icon: Wrench,
    title: "Construir con intención",
    description: "Priorizo componentes simples, tipados y reutilizables por encima de soluciones rápidas y frágiles.",
  },
  {
    id: "probar",
    icon: TestTube,
    title: "Revisar antes de entregar",
    description: "Reviso rendimiento, accesibilidad y casos límite antes de dar algo por terminado.",
  },
  {
    id: "iterar",
    icon: Rocket,
    title: "Iterar con feedback",
    description: "Trato cada entrega como un punto de partida para mejorar, no como un producto cerrado.",
  },
];
