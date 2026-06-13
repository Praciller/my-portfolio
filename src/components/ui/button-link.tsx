import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean;
  icon?: IconComponent;
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center border font-sans transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-30";

const variantClasses = {
  primary:
    "border-foreground bg-foreground text-background hover:bg-background hover:text-foreground",
  secondary:
    "border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
  ghost:
    "border-transparent bg-transparent text-foreground hover:border-border hover:bg-surface-strong",
};

const sizeClasses = {
  sm: "h-8 min-w-16 px-4 text-xs",
  md: "h-10 min-w-24 px-6 text-sm",
  lg: "h-12 min-w-32 px-8 text-base",
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
      <span className={Icon ? "ml-2" : undefined}>{children}</span>
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
