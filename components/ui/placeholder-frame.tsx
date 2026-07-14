import { ImagePlus } from "lucide-react";

interface PlaceholderFrameProps {
  label: string;
  className?: string;
}

export function PlaceholderFrame({ label, className = "" }: PlaceholderFrameProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-transparent p-8 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <ImagePlus className="h-8 w-8 text-violet-400" aria-hidden="true" strokeWidth={1.5} />
      <p className="text-sm font-medium text-zinc-400">{label}</p>
    </div>
  );
}
