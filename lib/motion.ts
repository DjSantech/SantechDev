import type { Variants } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;
