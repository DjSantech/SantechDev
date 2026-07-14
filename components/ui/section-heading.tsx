import { Reveal } from "./reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ kicker, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <span className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
        {kicker}
      </span>
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-zinc-400 md:text-lg">{description}</p> : null}
    </Reveal>
  );
}
