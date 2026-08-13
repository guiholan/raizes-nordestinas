import { LightboxProvider } from "@/components/shared/lightbox";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoShowcase } from "@/components/sections/logo-showcase";
import { Diferenciais } from "@/components/sections/diferenciais";
import { VideoDestaque } from "@/components/sections/video-destaque";
import { Tradicoes } from "@/components/sections/tradicoes";
import { Agenda } from "@/components/sections/agenda";
import { Galeria } from "@/components/sections/galeria";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <LightboxProvider>
      <CustomCursor />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoShowcase />
        <Diferenciais />
        <VideoDestaque />
        <Tradicoes />
        <Agenda />
        <Galeria />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
