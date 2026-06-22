"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Logo } from "@/components/ui/logo";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              isHome ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={`/#${link.href}`}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {isHome ? (
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Parler à un expert
          </button>
        ) : (
          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Parler à un expert
          </Link>
        )}

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-white/5 transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              isHome ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.href);
                    closeMenu();
                  }}
                  className="text-left text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={closeMenu}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          {isHome ? (
            <button
              type="button"
              onClick={() => {
                scrollToSection("contact");
                closeMenu();
              }}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-background"
            >
              Parler à un expert
            </button>
          ) : (
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-background"
            >
              Parler à un expert
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
