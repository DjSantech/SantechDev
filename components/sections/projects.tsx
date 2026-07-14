import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading
        kicker="Proyectos"
        title="Cosas que he construido"
        description="Una selección de proyectos reales, con el código y las demos disponibles para explorar."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}
