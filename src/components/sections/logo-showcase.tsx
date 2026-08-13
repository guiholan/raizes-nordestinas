import Image from "next/image";

export function LogoShowcase() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-amarelo/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        aria-hidden
      />
      <Image
        src="/images/logo-transparent.png"
        alt="Emblema do Grupo de Tradições Folclóricas Raízes Nordestinas"
        width={320}
        height={320}
        className="relative h-52 w-52 animate-spin-slow drop-shadow-[0_0_24px_rgba(240,185,46,0.15)] sm:h-72 sm:w-72"
      />
    </section>
  );
}
