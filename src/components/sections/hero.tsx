"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { HERO } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { useLightbox } from "@/components/shared/lightbox";

export function Hero() {
  const { open } = useLightbox();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] w-full flex-col items-start justify-center overflow-hidden bg-bg pt-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/maracatu-caixa.jpg"
          alt="Integrante do grupo tocando caixa no maracatu, sob luz azul de palco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/10 to-transparent" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-amarelo sm:text-sm">
          {HERO.eyebrow}
        </p>
        <h1 className="font-display text-[15vw] font-extrabold uppercase leading-[0.92] tracking-tight text-ink sm:text-[9vw] lg:text-[7.5vw] 3xl:text-[6.5vw]">
          {HERO.title}
        </h1>
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-dim sm:text-lg">
          {HERO.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button
              size="default"
              data-cursor="Play"
              onClick={() => open({ type: "video", ...HERO.video })}
            >
              <Play size={16} fill="currentColor" />
              {HERO.ctaPrimary}
            </Button>
          </Magnetic>
          <Magnetic>
            <Button variant="secondary" asChild>
              <a href="#sobre">{HERO.ctaSecondary}</a>
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
