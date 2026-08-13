import Image from "next/image";
import { DIFERENCIAIS } from "@/data/content";
import { Reveal } from "@/components/shared/reveal";
import { RibbonTrail } from "@/components/shared/ribbon";

export function Diferenciais() {
  return (
    <section id="sobre" className="bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-azul-claro">
            Por que o Raízes Nordestinas
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl lg:text-5xl">
            Tradição viva, contada com o corpo inteiro
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  <RibbonTrail />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink-dim">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
