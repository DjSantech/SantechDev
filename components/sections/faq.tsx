"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { faq } from "@/lib/data/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-4xl px-4 py-24 md:px-6">
      <SectionHeading kicker="Preguntas frecuentes" title="Lo que un reclutador quiere saber" />

      <div className="mt-12 flex flex-col gap-3">
        {faq.map(({ id, question, answer }, index) => {
          const isOpen = openId === id;

          return (
            <Reveal key={id} delay={index * 0.05} className="rounded-2xl border border-white/10 bg-white/[0.03]">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-white"
                >
                  {question}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-4 w-4 shrink-0 text-violet-400" />
                  </motion.span>
                </button>
              </h3>
              <motion.div
                id={`faq-panel-${id}`}
                role="region"
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-zinc-400">{answer}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
