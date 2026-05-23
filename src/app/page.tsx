import { BrandStrip } from "@/components/BrandStrip";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { VideoWall } from "@/components/VideoWall";

export default function Home() {
  return (
    <main className="min-h-screen surface-page text-main">
      <Header />
      <Hero />
      <BrandStrip />
      <VideoWall />
      <Services />
      <SelectedWork />
      <Stats />
      <Process />
      <ContactCta />
      <Footer />
    </main>
  );
}
