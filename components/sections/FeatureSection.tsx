import { FeatureProvider } from '@/components/features/FeatureContext';
import { BentoGrid } from '@/components/features/BentoGrid';
import { MobileAccordion } from '@/components/features/MobileAccordion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

export function FeatureSection() {
  return (
    <FeatureProvider>
      <Section id="features" className="relative overflow-hidden">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Feature showcase</Badge>
            <Heading as="h2" className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Premium capabilities, designed for calm execution.
            </Heading>
            <Text className="mt-5 text-lg">
              Every surface is tuned to feel intelligent and effortless, whether you are navigating on a laptop or a phone.
            </Text>
          </div>

          <div className="mt-12">
            <BentoGrid />
            <MobileAccordion />
          </div>
        </Container>
      </Section>
    </FeatureProvider>
  );
}
