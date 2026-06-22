"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { TextLink } from "@/components/ui/link-arrow";

type NavMenuProps = {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NavMenu({
  onNavigate,
  className,
  linkClassName,
}: NavMenuProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavigate = () => {
    onNavigate?.();
  };

  return (
    <nav className={className}>
      {navLinks.map((link) => {
        const baseClass = cn(
          "text-sm text-muted transition-colors hover:text-primary",
          linkClassName,
        );

        if (link.type === "anchor") {
          if (isHome) {
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  scrollToSection(link.href);
                  handleNavigate();
                }}
                className={cn(baseClass, "text-left")}
              >
                {link.label}
              </button>
            );
          }

          return (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={handleNavigate}
              className={baseClass}
            >
              {link.label}
            </Link>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleNavigate}
            className={cn(
              baseClass,
              pathname === link.href ? "text-primary" : "",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { scrollToSection };
