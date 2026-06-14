"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(pathname);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let animationFrame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let nextActive = "/";

      for (const item of navigationItems) {
        if (!item.href.startsWith("/#")) {
          continue;
        }

        const section = document.getElementById(item.href.slice(2));

        if (section && section.offsetTop <= marker) {
          nextActive = item.href;
        }
      }

      setActiveHref(nextActive);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHref === href;
    }

    if (href === "/") {
      return pathname === "/" && activeHref === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activateLink = (href: string) => {
    if (href.startsWith("/#")) {
      setActiveHref(href);
    }

    setIsOpen(false);
  };

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
              aria-current={isActive(item.href) ? (item.href.startsWith("/#") ? "location" : "page") : undefined}
              className={cn(
                "relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:text-accent hover:after:scale-x-100 focus-visible:text-accent focus-visible:after:scale-x-100",
                isActive(item.href) && "nav-link-active font-bold",
              )}
              onClick={() => activateLink(item.href)}
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
                aria-current={isActive(item.href) ? (item.href.startsWith("/#") ? "location" : "page") : undefined}
                className={cn(
                  "flex min-h-11 items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent focus-visible:bg-accent-soft focus-visible:text-accent",
                  isActive(item.href) && "bg-accent-soft font-bold text-accent",
                )}
                onClick={() => activateLink(item.href)}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                ) : null}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
