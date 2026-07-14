import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-violet-500 text-white hover:bg-violet-400 shadow-lg shadow-violet-500/25 hover:shadow-violet-400/30",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost: "text-zinc-300 hover:text-white",
};

export function Button({ href, children, variant = "primary", icon, external, className = "" }: ButtonProps) {
  const isAnchor = href.startsWith("#") || href.startsWith("mailto:");

  const content = (
    <span
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon ? <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span> : null}
    </span>
  );

  if (isAnchor) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="inline-block">
      {content}
    </Link>
  );
}
