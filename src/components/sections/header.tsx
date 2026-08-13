"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid || menuOpen
          ? "bg-bg/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          data-cursor="Início"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Grupo de Tradições Folclóricas Raízes Nordestinas"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden font-display text-sm font-bold uppercase tracking-wide text-ink sm:block">
            Raízes Nordestinas
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-ink-dim transition-colors hover:text-amarelo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Magnetic>
            <Button asChild>
              <a href="#contato">Fale com o grupo</a>
            </Button>
          </Magnetic>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-bg px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-medium text-ink-dim hover:bg-surface hover:text-amarelo"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full">
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Fale com o grupo
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
