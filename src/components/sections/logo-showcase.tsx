import Image from "next/image";

export function LogoShowcase() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-bg px-5 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-amarelo/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden
      />
      <Image
        src="/images/logo-transparent.png"
        alt="Emblema do Grupo de Tradições Folclóricas Raízes Nordestinas"
        width={224}
        height={224}
        className="relative h-40 w-40 animate-spin-slow drop-shadow-[0_0_24px_rgba(240,185,46,0.15)] sm:h-56 sm:w-56"
      />
    </section>
  );
}
