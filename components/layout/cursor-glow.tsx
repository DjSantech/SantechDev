"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden motion-reduce:!hidden md:block"
    >
      <motion.div
        style={{ left: springX, top: springY }}
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]"
      />
    </div>
  );
}
