"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { TRADICOES_TABS } from "@/data/content";
import { Reveal } from "@/components/shared/reveal";
import { RibbonDivider, RibbonTrail } from "@/components/shared/ribbon";
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
              className="mt-10 grid grid-cols-1 gap-6 outline-none data-[state=inactive]:hidden sm:grid-cols-2 lg:grid-cols-3"
            >
              {tab.items.map((item) => (
                <div
                  key={item.nome}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.nome}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                    <RibbonTrail />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                      {item.nome}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-dim">
                      {item.descricao}
                    </p>
                    {item.confirmar && (
                      <span className="mt-3 inline-block w-fit rounded-full border border-amarelo/40 bg-amarelo/10 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-amarelo">
                        Nome a confirmar
                      </span>
                    )}
                    <button
                      className="mt-4 w-fit font-body text-sm font-semibold text-azul-claro underline-offset-4 hover:underline"
                      data-cursor="Ver"
                    >
                      Saiba mais
                    </button>
                  </div>
                </div>
              ))}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
