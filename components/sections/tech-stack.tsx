"use client";

import { techStack, learningNow } from "@/lib/data/tech-stack";
import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

function LevelDots({ level, ariaLabel }: { level: number; ariaLabel: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`h-1.5 w-1.5 rounded-full ${index < level ? "bg-violet-400" : "bg-white/10"}`}
        />
      ))}
    </div>
  );
}

export function TechStack() {
  const { lang } = useLanguage();
  const t = uiStrings[lang].techStack;

  return (
    <section id="tecnologias" aria-labelledby="tecnologias-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker={t.kicker} title={t.title} description={t.description} />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {techStack.map((category, categoryIndex) => (
          <Reveal
            key={category.id}
            delay={categoryIndex * 0.1}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-zinc-400">{category.title[lang]}</h3>
            <ul className="flex flex-col gap-4">
              {category.items.map(({ id, name, icon: Icon, level }) => (
                <li key={id} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3 text-sm text-zinc-200">
                    <Icon className="h-4 w-4 text-violet-400" aria-hidden="true" />
                    {name}
                  </span>
                  <LevelDots level={level} ariaLabel={t.levelAriaLabel(level)} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-violet-400/30 bg-white/[0.03] p-6">
        <span className="text-sm font-semibold text-violet-400">{t.learningNow}</span>
        {learningNow.map((item) => (
          <Badge key={item.es} variant="placeholder">
            {item[lang]}
          </Badge>
        ))}
      </Reveal>
    </section>
  );
}
