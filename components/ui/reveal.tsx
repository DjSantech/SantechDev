"use client";

import { motion } from "motion/react";

import { fadeInUp, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      variants={fadeInUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
