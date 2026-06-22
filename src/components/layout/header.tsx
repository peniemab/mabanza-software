"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ExpertButton } from "@/components/ui/expert-button";
import { NavMenu, scrollToSection } from "@/components/layout/nav-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setOpen(false);

  const goToContact = () => {
    scrollToSection("contact");
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <NavMenu className="hidden items-center gap-8 md:flex" />

        <div className="hidden md:block">
          {isHome ? (
            <ExpertButton onClick={() => scrollToSection("contact")} />
          ) : (
            <ExpertButton href="/#contact" />
          )}
        </div>

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

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          <NavMenu
            onNavigate={closeMenu}
            className="flex flex-col gap-4"
            linkClassName="text-left"
          />
          {isHome ? (
            <ExpertButton onClick={goToContact} fullWidth />
          ) : (
            <ExpertButton href="/#contact" onClick={closeMenu} fullWidth />
          )}
        </div>
      </div>
    </header>
  );
}
