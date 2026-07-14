import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  return (
    <section id="recomendaciones" aria-labelledby="recomendaciones-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading
        kicker="Recomendaciones"
        title="Lo que dicen de mi trabajo"
        description="Espacio reservado para recomendaciones reales de profesores, mentores o clientes."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.id}
            delay={index * 0.08}
            className="flex flex-col gap-4 rounded-2xl border border-dashed border-violet-400/30 bg-white/[0.02] p-6"
          >
            <div className="flex items-center justify-between">
              <Quote className="h-5 w-5 text-violet-400" aria-hidden="true" />
              {testimonial.isPlaceholder ? <Badge variant="placeholder">Placeholder</Badge> : null}
            </div>
            <p className="text-sm text-zinc-400">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs text-zinc-500">{testimonial.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
