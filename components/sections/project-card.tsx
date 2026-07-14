"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { Reveal } from "@/components/ui/reveal";

const statusLabel: Record<Project["status"], string> = {
  finalizado: "Finalizado",
  "en-progreso": "En progreso",
  placeholder: "Próximamente",
};

const statusVariant: Record<Project["status"], "success" | "accent" | "placeholder"> = {
  finalizado: "success",
  "en-progreso": "accent",
  placeholder: "placeholder",
};

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, description, image, stack, status, urlGithub, urlDemo, challenges, learnings } = project;

  return (
    <Reveal delay={delay} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-violet-400/30">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        {project.isPlaceholder ? (
          <PlaceholderFrame label="Agrega aquí una captura del proyecto" className="h-full w-full rounded-none border-0" />
        ) : (
          <Image
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
        </div>

        <p className="text-sm text-zinc-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          aria-expanded={isExpanded}
          className="flex items-center gap-1.5 self-start text-xs font-semibold text-violet-400 transition-colors hover:text-violet-300"
        >
          Retos y aprendizajes
          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.span>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-3 border-t border-white/10 pt-3 text-xs text-zinc-500">
            <p>
              <span className="font-semibold text-zinc-400">Retos: </span>
              {challenges}
            </p>
            <p>
              <span className="font-semibold text-zinc-400">Aprendizajes: </span>
              {learnings}
            </p>
          </div>
        </motion.div>

        <div className="mt-auto flex gap-3 pt-2">
          {urlGithub ? (
            <Link
              href={urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10"
            >
              <Github className="h-3.5 w-3.5" />
              Código
            </Link>
          ) : null}
          {urlDemo ? (
            <Link
              href={urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300 transition-colors hover:bg-violet-500/20"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </Link>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
