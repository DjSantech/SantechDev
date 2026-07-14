"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ end, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end]);

  return (
    <motion.div ref={ref} className="flex flex-col gap-1">
      <p className="text-3xl font-extrabold text-white md:text-4xl">
        {value}
        {suffix}
      </p>
      <p className="max-w-[10rem] text-xs uppercase tracking-wide text-zinc-500">{label}</p>
    </motion.div>
  );
}
