import Image from "next/image";

export function LogoShowcase() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-bg px-5 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute h-56 w-56 rounded-full bg-amarelo/10 blur-3xl sm:h-72 sm:w-72"
        aria-hidden
      />
      <Image
        src="/images/logo-transparent.png"
        alt="Emblema do Grupo de Tradições Folclóricas Raízes Nordestinas"
        width={112}
        height={112}
        className="relative h-24 w-24 animate-spin-slow drop-shadow-[0_0_24px_rgba(240,185,46,0.15)] sm:h-28 sm:w-28"
      />
      <p className="relative mt-6 max-w-md text-center font-quote text-lg italic text-ink-dim sm:text-xl">
        Um símbolo do litoral e do sol nordestino, girando como a roda viva da tradição.
      </p>
    </section>
  );
}
