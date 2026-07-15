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
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Mi historia</p>
            <p className="mt-3 text-zinc-400">
              Mi camino en la tecnología comenzó por la curiosidad de entender cómo funcionan los productos
              digitales que usamos a diario. Al ingresar a Ingeniería de Sistemas en la UTP, descubrí que programar
              no es solo escribir código, sino la capacidad de materializar ideas y solucionar problemas reales
              mediante software bien estructurado. Me apasiona el desarrollo web porque me permite conectar la
              lógica abstracta del backend con experiencias de usuario intuitivas, rápidas y visualmente atractivas
              en el frontend.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Qué busco</p>
            <p className="mt-3 text-zinc-400">
              Busco incorporarme a un equipo de tecnología dinámico y colaborativo en roles de Desarrollador
              Frontend o Fullstack (Junior). Me entusiasma la oportunidad de realizar mis prácticas profesionales o
              asumir mi primer empleo formal en empresas orientadas al desarrollo de productos digitales, SaaS o
              e-commerce, donde pueda aportar valor con mis bases técnicas y seguir madurando mis habilidades en
              desarrollo de software de alta calidad.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Mis objetivos</p>
            <p className="mt-3 text-zinc-400">
              A corto plazo, mi meta es consolidar mi primera experiencia profesional en la industria de
              desarrollo, aportando activamente en la entrega de funcionalidades con React/Next.js y TypeScript. A
              mediano plazo, aspiro a graduarme como Ingeniero de Sistemas en la UTP, liderar iniciativas técnicas
              de arquitectura frontend y dominar herramientas de escalabilidad web y optimización de rendimiento en
              producción.
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
