import Hero from "@/components/Hero";
import SportsWeCover from "@/components/SportsWeCover";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <LogoCarousel />
      <SportsWeCover />
      <HowItWorks />
      <CoreServices />
      <TechAccuracy />
      <UseCases />
      <WhyTrainMetrics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

    </main>
  );
}
