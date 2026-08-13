"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LightboxContent =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string }
  | null;

const LightboxContext = createContext<{
  open: (content: LightboxContent) => void;
} | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<LightboxContent>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (content?.type === "video") {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [content]);

  return (
    <LightboxContext.Provider value={{ open: setContent }}>
      {children}
      <Dialog.Root
        open={!!content}
        onOpenChange={(o) => !o && setContent(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[91] w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 outline-none">
            <Dialog.Title className="sr-only">
              {content ? content.alt : "Visualização"}
            </Dialog.Title>
            {content?.type === "image" && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line-strong bg-surface">
                <Image
                  src={content.src}
                  alt={content.alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </div>
            )}
            {content?.type === "video" && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line-strong bg-black">
                <video
                  ref={videoRef}
                  src={content.src}
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <track kind="captions" />
                </video>
              </div>
            )}
            <Dialog.Close
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink hover:border-amarelo hover:text-amarelo"
              aria-label="Fechar"
              data-cursor="Fechar"
            >
              <X size={18} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LightboxContext.Provider>
  );
}
