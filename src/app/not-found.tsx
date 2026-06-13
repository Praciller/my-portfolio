import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.05]">
          Page not found
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg font-light leading-[1.65] text-muted">
          This route does not exist in the current portfolio.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 min-w-32 items-center justify-center border border-foreground bg-foreground px-8 text-base text-background transition-colors duration-150 hover:bg-background hover:text-foreground"
        >
          Home
        </Link>
      </section>
    </PageShell>
  );
}
