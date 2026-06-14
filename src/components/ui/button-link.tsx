import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean;
  icon?: IconComponent;
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border font-sans font-semibold transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-30";

const variantClasses = {
  primary:
    "border-accent bg-accent text-accent-contrast hover:bg-transparent hover:text-accent",
  secondary:
    "border-border bg-background text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border-transparent bg-transparent text-foreground hover:border-accent hover:bg-accent-soft hover:text-accent",
  inverse:
    "border-background bg-background text-surface-inverse hover:border-accent hover:bg-accent hover:text-accent-contrast",
  "inverse-outline":
    "border-background/30 bg-transparent text-background hover:border-background hover:bg-background hover:text-surface-inverse",
};

const sizeClasses = {
  sm: "min-h-10 min-w-16 px-4 py-2 text-xs",
  md: "min-h-11 min-w-24 px-5 py-2.5 text-sm",
  lg: "min-h-12 min-w-32 px-6 py-3 text-sm sm:text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  download,
  icon: Icon,
  className,
}: ButtonLinkProps) {
  const classNames = cn(baseClass, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} /> : null}
      <span>{children}</span>
    </>
  );

  if (external || href.startsWith("#") || href.startsWith("mailto:") || download) {
    return (
      <a
        className={classNames}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {content}
    </Link>
  );
}
