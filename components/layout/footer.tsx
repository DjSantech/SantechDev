import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <p className="text-sm text-zinc-500">
          © {year} {siteConfig.name}. Construido con Next.js y Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ id, label, href, icon: Icon }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 transition-colors hover:text-violet-400"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        <Link
          href="#inicio"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          Volver arriba
          <ArrowUp className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
