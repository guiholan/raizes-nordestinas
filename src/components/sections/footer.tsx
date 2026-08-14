import Image from "next/image";
import { FOOTER, NAV_LINKS } from "@/data/content";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/shared/social-icons";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YoutubeIcon,
} as const;

export function Footer() {
  return (
    <footer id="contato" className="bg-creme text-ink-on-creme">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-peach.png"
                alt="Grupo de Tradições Folclóricas Raízes Nordestinas"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
              <span className="font-display text-base font-bold uppercase tracking-wide">
                Raízes Nordestinas
              </span>
            </div>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-ink-on-creme/75">
              Grupo de Tradições Folclóricas dedicado a preservar e apresentar
              os folguedos do Nordeste brasileiro.
            </p>
            <div className="mt-6 space-y-1 font-body text-sm text-ink-on-creme/75">
              <p>{FOOTER.telefone}</p>
              <p>{FOOTER.email}</p>
            </div>
          </div>

          {FOOTER.linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-on-creme/60">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-ink-on-creme/85 transition-colors hover:text-azul-deep"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-on-creme/60">
              Redes sociais
            </h3>
            <div className="mt-4 flex gap-3">
              {FOOTER.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    data-cursor={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-on-creme/20 text-ink-on-creme transition-colors hover:border-azul-deep hover:text-azul-deep"
                  >
                    <Icon width={16} height={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-on-creme/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-ink-on-creme/60">
            © {new Date().getFullYear()} Grupo de Tradições Folclóricas Raízes
            Nordestinas. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs text-ink-on-creme/60 hover:text-azul-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
