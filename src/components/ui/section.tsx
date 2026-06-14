import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft";
};

export function Section({
  id,
  title,
  intro,
  children,
  className,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full scroll-mt-20",
        tone === "soft" && "border-y border-border-soft bg-surface",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-28">
        <div>
          <h2 className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-[34ch] text-sm leading-[1.65] text-muted">{intro}</p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
