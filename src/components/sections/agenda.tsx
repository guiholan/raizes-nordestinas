import { CalendarDays, MapPin, Clock } from "lucide-react";
import { AGENDA } from "@/data/content";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

export function Agenda() {
  return (
    <section id="agenda" className="bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-azul-claro">
                Agenda
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl lg:text-5xl">
                Próximas apresentações
              </h2>
            </div>
            <Magnetic>
              <Button variant="secondary" asChild>
                <a href="#contato">Convide o grupo</a>
              </Button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-body">
            <thead>
              <tr className="border-b border-line-strong text-left">
                <th className="pb-4 pr-4 text-xs font-bold uppercase tracking-wide text-ink-dim">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} /> Data
                  </span>
                </th>
                <th className="pb-4 pr-4 text-xs font-bold uppercase tracking-wide text-ink-dim">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} /> Local
                  </span>
                </th>
                <th className="pb-4 text-xs font-bold uppercase tracking-wide text-ink-dim">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} /> Horário
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {AGENDA.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-line transition-colors hover:bg-surface"
                >
                  <td className="py-5 pr-4 font-display text-sm font-bold uppercase text-ink sm:text-base">
                    {row.data}
                  </td>
                  <td className="py-5 pr-4 font-body text-sm text-ink-dim sm:text-base">
                    {row.local}
                  </td>
                  <td className="py-5 font-body text-sm text-ink-dim sm:text-base">
                    {row.horario}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
