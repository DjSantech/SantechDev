"use client";

import { GraduationCap, MapPin, Target } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { techStack } from "@/lib/data/tech-stack";
import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";

const STUDY_START_YEAR = 2023;
const COMPLETED_PROJECTS = 10;

export function About() {
  const { lang } = useLanguage();
  const t = uiStrings[lang].about;

  const techCount = techStack.reduce((total, category) => total + category.items.length, 0);
  const yearsLearning = Math.max(1, new Date().getFullYear() - STUDY_START_YEAR);

  const quickFacts = [
    { icon: MapPin, label: siteConfig.location },
    { icon: GraduationCap, label: t.systemsEngineering },
    { icon: Target, label: siteConfig.availability[lang] },
  ];

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading kicker={t.kicker} title={t.title} />

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">{t.historyLabel}</p>
            <p className="mt-3 text-zinc-400">{t.historyText}</p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">{t.lookingForLabel}</p>
            <p className="mt-3 text-zinc-400">{t.lookingForText}</p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">{t.goalsLabel}</p>
            <p className="mt-3 text-zinc-400">{t.goalsText}</p>
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
            <StatCounter end={COMPLETED_PROJECTS} suffix="+" label={t.statsProjects} />
            <StatCounter end={techCount} suffix="+" label={t.statsTech} />
            <StatCounter end={yearsLearning} suffix="+" label={t.statsYears} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
