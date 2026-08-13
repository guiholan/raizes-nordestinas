import type { Metadata } from "next";
import { Unbounded, Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-quote",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Raízes Nordestinas | Grupo de Tradições Folclóricas",
  description:
    "Grupo de Tradições Folclóricas Raízes Nordestinas — dança, resgate cultural e folguedos nordestinos em apresentações, festivais e eventos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${unbounded.variable} ${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        {children}
      </body>
    </html>
  );
}
