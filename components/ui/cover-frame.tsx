import type { IconComponent } from "@/lib/types";

interface CoverFrameProps {
  icon: IconComponent;
  label: string;
  className?: string;
}

/** Portada con ícono para proyectos que no tienen captura (privados, librerías, servidores). */
export function CoverFrame({ icon: Icon, label, className = "" }: CoverFrameProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(139,92,246,0.22),transparent)] p-8 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-6 w-6 text-violet-300" aria-hidden="true" strokeWidth={1.5} />
      </span>
      <p className="text-sm font-medium text-zinc-400">{label}</p>
    </div>
  );
}
