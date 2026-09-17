"use client";

import { education } from "@/lib/data/education";
import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function Education() {
  const { lang } = useLanguage();
  const t = uiStrings[lang].education;

  return (
    <section id="educacion" aria-labelledby="educacion-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker={t.kicker} title={t.title} />

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
              <h3 className="text-base font-bold text-white">{item.title[lang]}</h3>
              {item.isPlaceholder ? <Badge variant="placeholder">{t.placeholderBadge}</Badge> : null}
            </div>
            <p className="mt-1 text-sm font-medium text-violet-400">{item.institution[lang]}</p>
            <p className="text-xs uppercase tracking-wide text-zinc-500">{item.period[lang]}</p>
            <p className="mt-3 text-sm text-zinc-400">{item.description[lang]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
