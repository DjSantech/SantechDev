import type { ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "success" | "placeholder";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-white/5 text-zinc-300 border-white/10",
  accent: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  placeholder: "bg-amber-500/10 text-amber-300 border-amber-500/20 border-dashed",
};

export function Badge({ children, variant = "default", icon, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
