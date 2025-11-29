import HeroAbout from '@/components/sections/HeroAbout';
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import IntegratedORHighlights from "@/components/sections/IntegratedORHighlights";
import PartnersSection from "@/components/sections/PartnersSection";
import AboutCTASection from "@/components/sections/AboutCTASection";

export default function AboutPage() {
  return (
    <main className='bg-slate-950 text-slate-50'>
      <HeroAbout />
      <AboutIntroSection />
      <IntegratedORHighlights />
      <PartnersSection />
      <AboutCTASection />
    </main>
  );
}
