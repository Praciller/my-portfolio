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
    <header className="sticky top-0 z-40 border-b border-border bg-background/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="text-sm font-bold leading-none">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-150 hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors duration-150 hover:border-foreground lg:hidden"
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
        <nav id="mobile-navigation" className="border-t border-border bg-background px-6 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border-soft py-3 text-sm text-muted hover:text-foreground"
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
