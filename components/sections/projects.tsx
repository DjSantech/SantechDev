"use client";

import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  const { lang } = useLanguage();
  const t = uiStrings[lang].projects;

  return (
    <section id="proyectos" aria-labelledby="proyectos-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker={t.kicker} title={t.title} description={t.description} />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}
