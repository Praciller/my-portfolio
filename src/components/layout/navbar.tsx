"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-extrabold leading-none tracking-[-0.02em]">
          {profile.name}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
