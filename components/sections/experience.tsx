import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading
        kicker="Experiencia"
        title="Trayectoria práctica"
        description="Proyectos freelance, colaboraciones y trabajo aplicado mientras avanzo en mi formación."
      />

      <ol className="mt-12 flex flex-col gap-6 border-l border-white/10 pl-6 md:pl-8">
        {experience.map((item, index) => (
          <Reveal
            as="li"
            key={item.id}
            delay={index * 0.08}
            className={`relative rounded-2xl border p-6 ${
              item.isPlaceholder
                ? "border-dashed border-violet-400/30 bg-white/[0.02]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <span className="absolute -left-[1.65rem] top-7 h-2.5 w-2.5 rounded-full bg-violet-400 md:-left-[2.15rem]" />
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-bold text-white">{item.role}</h3>
              {item.isPlaceholder ? <Badge variant="placeholder">Placeholder</Badge> : null}
            </div>
            <p className="mt-1 text-sm font-medium text-violet-400">
              {item.place} · {item.period}
            </p>
            <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
