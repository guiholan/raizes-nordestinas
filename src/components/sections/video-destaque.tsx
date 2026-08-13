"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { VIDEO_DESTAQUE } from "@/data/content";
import { Magnetic } from "@/components/shared/magnetic";
import { useLightbox } from "@/components/shared/lightbox";

export function VideoDestaque() {
  const { open } = useLightbox();

  return (
    <section className="bg-bg px-5 sm:px-8">
      <div className="mx-auto max-w-[1440px] py-10 sm:py-16">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <Image
            src={VIDEO_DESTAQUE.image}
            alt={VIDEO_DESTAQUE.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
            <Magnetic strength={0.5}>
              <button
                onClick={() =>
                  open({
                    type: "video",
                    src: VIDEO_DESTAQUE.video.src,
                    alt: VIDEO_DESTAQUE.video.alt,
                  })
                }
                data-cursor="Play"
                aria-label="Assistir vídeo do grupo"
                className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 text-ink backdrop-blur-sm transition-colors hover:border-amarelo hover:text-amarelo sm:h-24 sm:w-24"
              >
                <Play size={30} fill="currentColor" className="ml-1" />
              </button>
            </Magnetic>
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">
                {VIDEO_DESTAQUE.title}
              </h2>
              <p className="mx-auto mt-2 max-w-md font-body text-sm text-ink-dim sm:text-base">
                {VIDEO_DESTAQUE.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
