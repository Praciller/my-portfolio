import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
