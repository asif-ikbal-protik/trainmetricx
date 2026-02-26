import Hero from "@/components/Hero";
import SportsWeCover from "@/components/SportsWeCover";
import AdvantageSection from "@/components/AdvantageSection";
import HowItWorks from "@/components/HowItWorks";
import CoreServices from "@/components/CoreServices";
import TechAccuracy from "@/components/TechAccuracy";
import UseCases from "@/components/UseCases";
import WhyTrainMetrics from "@/components/WhyTrainMetrics";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <LogoCarousel />

      <SectionWrapper hasPadding={false}>
        <SportsWeCover />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <AdvantageSection />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <HowItWorks />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <CoreServices />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <TechAccuracy />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <UseCases />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <WhyTrainMetrics />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper hasPadding={false}>
        <FAQ />
      </SectionWrapper>

      <CTA />
      <Footer />

    </main>
  );
}
