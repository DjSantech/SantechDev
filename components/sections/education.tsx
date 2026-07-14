import { education } from "@/lib/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="educacion" aria-labelledby="educacion-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker="Educación" title="Formación y certificaciones" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal
            key={item.id}
            delay={index * 0.08}
            className={`rounded-2xl border p-6 ${
              item.isPlaceholder
                ? "border-dashed border-violet-400/30 bg-white/[0.02]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              {item.isPlaceholder ? <Badge variant="placeholder">Placeholder</Badge> : null}
            </div>
            <p className="mt-1 text-sm font-medium text-violet-400">{item.institution}</p>
            <p className="text-xs uppercase tracking-wide text-zinc-500">{item.period}</p>
            <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
