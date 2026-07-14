import { processSteps } from "@/lib/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="proceso-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker="Filosofía de trabajo" title="Cómo trabajo" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {processSteps.map(({ id, icon: Icon, title, description }, index) => (
          <Reveal key={id} delay={index * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10">
              <Icon className="h-5 w-5 text-violet-400" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
