import { GitBranch, Palette, Plug, ScanSearch, Sparkles, Terminal } from "lucide-react";

import type { IconComponent, LocalizedText } from "../types";

interface AiWorkflowItem {
  id: string;
  icon: IconComponent;
  title: LocalizedText;
  description: LocalizedText;
}

export const aiWorkflow: AiWorkflowItem[] = [
  {
    id: "claude-code",
    icon: Terminal,
    title: { es: "Claude Code", en: "Claude Code" },
    description: {
      es: "En la CLI y en VS Code: proyectos completos desarrollados, refactorizados, depurados y desplegados con IA.",
      en: "In the CLI and VS Code: complete projects developed, refactored, debugged, and deployed with AI.",
    },
  },
  {
    id: "agentes-paralelo",
    icon: GitBranch,
    title: { es: "Agentes en paralelo", en: "Parallel agents" },
    description: {
      es: "Varias sesiones de Claude Code trabajando en distintas fases a la vez, aisladas con git worktrees.",
      en: "Several Claude Code sessions working on different phases at once, isolated with git worktrees.",
    },
  },
  {
    id: "mcp",
    icon: Plug,
    title: { es: "MCP", en: "MCP" },
    description: {
      es: "Servidores MCP propios y diferentes IA conectadas con GitHub, Notion, Gmail, Google Drive, Cloudflare, el navegador y software de escritorio.",
      en: "My own MCP servers, and different AIs connected to GitHub, Notion, Gmail, Google Drive, Cloudflare, the browser, and desktop software.",
    },
  },
  {
    id: "skills",
    icon: Sparkles,
    title: { es: "Skills", en: "Skills" },
    description: {
      es: "Claude Skills propias para volver repetibles los despliegues, los documentos y el contenido.",
      en: "Custom Claude Skills that make deployments, documents, and content repeatable.",
    },
  },
  {
    id: "ia-generativa",
    icon: Palette,
    title: { es: "IA generativa", en: "Generative AI" },
    description: {
      es: "Higgsfield y Gemini para imagen y video; Suno, Udio y AIVA para música.",
      en: "Higgsfield and Gemini for images and video; Suno, Udio, and AIVA for music.",
    },
  },
  {
    id: "evaluacion-ia",
    icon: ScanSearch,
    title: { es: "Evaluación de IA", en: "AI evaluation" },
    description: {
      es: "Human feedback, detección de alucinaciones y análisis conversacional de modelos.",
      en: "Human feedback, hallucination detection, and conversational analysis of models.",
    },
  },
];
