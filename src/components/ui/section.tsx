import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:py-28", className)}
    >
      <div className="grid gap-10 border-t border-border pt-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.1]">
            {title}
          </h2>
          {intro ? <p className="mt-5 max-w-[34ch] text-sm leading-[1.6] text-muted">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
