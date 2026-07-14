import { GraduationCap, MapPin, Target } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/data/projects";
import { techStack } from "@/lib/data/tech-stack";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";

const STUDY_START_YEAR = 2023;

const quickFacts = [
  { icon: MapPin, label: siteConfig.location },
  { icon: GraduationCap, label: "Ingeniería de Sistemas — Universidad Tecnológica de Pereira" },
  { icon: Target, label: siteConfig.availability },
];

export function About() {
  const completedProjects = projects.filter((project) => !project.isPlaceholder).length;
  const techCount = techStack.reduce((total, category) => total + category.items.length, 0);
  const yearsLearning = Math.max(1, new Date().getFullYear() - STUDY_START_YEAR);

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker="Sobre mí" title="Quién soy y qué busco" />

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <Reveal className="rounded-2xl border border-dashed border-violet-400/30 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Mi historia</p>
            <p className="mt-3 text-zinc-400">
              Agrega aquí tu historia: cómo empezaste a programar, qué te motivó y qué te apasiona de construir
              software.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-dashed border-violet-400/30 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Qué busco</p>
            <p className="mt-3 text-zinc-400">
              Agrega aquí el tipo de rol, equipo o empresa que buscas, y qué tipo de proyectos te gustaría construir.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl border border-dashed border-violet-400/30 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Mis objetivos</p>
            <p className="mt-3 text-zinc-400">
              Agrega aquí tus objetivos profesionales a corto y mediano plazo.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            {quickFacts.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-zinc-300">
                <Icon className="h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                {label}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <StatCounter end={completedProjects} suffix="" label="Proyectos completados" />
            <StatCounter end={techCount} suffix="+" label="Tecnologías" />
            <StatCounter end={yearsLearning} suffix="+" label="Años programando" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
