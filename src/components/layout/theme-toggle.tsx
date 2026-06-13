"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors duration-150 hover:border-foreground"
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
