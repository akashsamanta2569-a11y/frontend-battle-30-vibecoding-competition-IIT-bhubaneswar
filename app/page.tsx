import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustedCompaniesSection />
      <FeatureSection />
      <PricingSection />
      <WorkflowSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
