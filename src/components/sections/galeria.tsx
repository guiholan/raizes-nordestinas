"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { GALLERY_PHOTO } from "@/data/content";
import { Reveal } from "@/components/shared/reveal";
import { RibbonTrail } from "@/components/shared/ribbon";
import { useLightbox } from "@/components/shared/lightbox";

export function Galeria() {
  const { open } = useLightbox();

  return (
    <section id="galeria" className="bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-amarelo">
            Galeria
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl lg:text-5xl">
            São 30 anos de tradição
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <button
            onClick={() =>
              open({ type: "image", src: GALLERY_PHOTO.src, alt: GALLERY_PHOTO.alt })
            }
            data-cursor="Ver"
            aria-label={GALLERY_PHOTO.alt}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line bg-surface sm:aspect-[21/9]"
          >
            <Image
              src={GALLERY_PHOTO.src}
              alt={GALLERY_PHOTO.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-ink backdrop-blur-sm transition-colors group-hover:border-amarelo group-hover:text-amarelo">
              <ZoomIn size={18} />
            </div>
            <RibbonTrail />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
