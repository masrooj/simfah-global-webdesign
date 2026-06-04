import { AmbientBackground } from "@/components/AmbientBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SiteScripts } from "@/components/SiteScripts";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <Features />
        <Pricing />
        <Industries />
        <Contact />
        <Footer />
      </main>
      <WhatsAppFloat />
      <SiteScripts />
    </>
  );
}
