"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

import { siteConfig, socialLinks } from "@/lib/site-config";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { RotatingWord } from "@/components/ui/rotating-word";
import { CursorGlow } from "@/components/layout/cursor-glow";

const mainStack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.25),transparent)]" />
      <CursorGlow />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6"
      >
        <div className="flex flex-col items-start gap-6">
          <motion.div variants={fadeInUp()}>
            <Badge variant={siteConfig.isAvailable ? "success" : "default"}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {siteConfig.availability}
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeInUp()} className="text-4xl font-extrabold leading-[1.1] text-white md:text-6xl">
            Hola, soy {siteConfig.name.split(" ")[0]}.
            <br />
            Construyo <RotatingWord words={siteConfig.roleKeywords} className="text-violet-400" />
          </motion.h1>

          <motion.p variants={fadeInUp()} className="max-w-xl text-lg text-zinc-400">
            {siteConfig.pitch}
          </motion.p>

          <motion.div variants={fadeInUp()} className="flex flex-wrap gap-2">
            {mainStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp()} className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#proyectos" icon={<ArrowRight className="h-4 w-4" />}>
              Ver proyectos
            </Button>
            <Button href="#contacto" variant="secondary" icon={<Mail className="h-4 w-4" />}>
              Contactar
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp()} className="flex items-center gap-5 pt-4">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 transition-colors hover:text-violet-400"
              >
                <Icon size={22} />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeInUp()} className="mx-auto w-full max-w-sm">
          <PlaceholderFrame label="Agrega aquí tu fotografía" className="aspect-square w-full" />
        </motion.div>
      </motion.div>

      <Link
        href="#sobre-mi"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition-colors hover:text-white md:block"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block">
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </Link>
    </section>
  );
}
