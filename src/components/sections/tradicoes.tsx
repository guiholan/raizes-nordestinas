"use client";

import { useLayoutEffect, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { TRADICOES_TABS } from "@/data/content";
import { Reveal } from "@/components/shared/reveal";
import { RibbonDivider } from "@/components/shared/ribbon";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { cn } from "@/lib/utils";

export function Tradicoes() {
  const [active, setActive] = useState(TRADICOES_TABS[0].key);
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const activeBtn = list.querySelector<HTMLElement>(
      `[data-tab="${active}"]`
    );
    if (activeBtn) {
      setIndicator({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth });
    }
  }, [active]);

  return (
    <section id="tradicoes" className="bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <RibbonDivider className="mb-16" tone="amarelo" />

      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-amarelo">
            Nosso repertório
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl lg:text-5xl">
            Tradições que carregamos no palco
          </h2>
        </Reveal>

        <Tabs.Root value={active} onValueChange={setActive} className="mt-12">
          <div className="relative">
            <Tabs.List
              ref={listRef}
              className="relative flex w-full gap-2 overflow-x-auto border-b border-line pb-px"
            >
              {TRADICOES_TABS.map((tab) => (
                <Tabs.Trigger
                  key={tab.key}
                  value={tab.key}
                  data-tab={tab.key}
                  className={cn(
                    "shrink-0 whitespace-nowrap px-5 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink-dim transition-colors data-[state=active]:text-ink"
                  )}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <div
              className="absolute bottom-0 h-[2px] bg-amarelo transition-all duration-400 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>

          {TRADICOES_TABS.map((tab) => (
            <Tabs.Content
              key={tab.key}
              value={tab.key}
              className="mt-6 outline-none data-[state=inactive]:hidden"
            >
              <CoverflowCarousel
                label={`Fotos de ${tab.label}`}
                slides={tab.items.map((item) => ({
                  src: item.image,
                  alt: item.nome,
                  title: item.nome,
                  subtitle: item.descricao,
                }))}
                showCaption
                showNavigation={tab.items.length > 1}
                showPagination={tab.items.length > 1}
                cardWidth="clamp(160px, 26vw, 320px)"
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
