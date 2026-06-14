"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
      aria-label="Toggle color mode"
      onClick={() => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      }}
    >
      <Sun aria-hidden="true" className="hidden h-4 w-4 dark:block" strokeWidth={1.75} />
      <Moon aria-hidden="true" className="h-4 w-4 dark:hidden" strokeWidth={1.75} />
    </button>
  );
}
