"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Download, Send } from "lucide-react";

import { siteConfig, socialLinks } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name || "Sin nombre"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionHeading
        kicker="Contacto"
        title="Hablemos"
        description="¿Tienes una oportunidad, una práctica o un proyecto en mente? Escríbeme."
      />

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
            <Button href={siteConfig.resumeUrl} variant="secondary" icon={<Download className="h-4 w-4" />}>
              Descargar CV
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4 text-violet-400" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-zinc-400">
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none transition-colors focus-visible:border-violet-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-zinc-400">
                Tu correo
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none transition-colors focus-visible:border-violet-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-medium text-zinc-400">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="resize-none rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none transition-colors focus-visible:border-violet-400"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Enviar mensaje
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
