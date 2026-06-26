import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="rounded-[36px] border border-white/80 bg-[linear-gradient(135deg,_rgba(17,76,90,0.95),_rgba(23,43,54,0.98))] px-8 py-14 text-arctic shadow-premium sm:px-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="text-3xl font-semibold leading-tight text-arctic sm:text-4xl lg:text-5xl">
              Build a calmer operating system for your next launch.
            </Heading>
            <Text className="mt-5 text-lg text-arctic/80">
              Launch faster, coordinate better, and give your team a premium experience from first prompt to final outcome.
            </Text>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="primary" className="bg-forsythia text-noir hover:bg-[#f0c200]" asChild>
                <Link href="#pricing">Get started</Link>
              </Button>
              <Button size="lg" variant="secondary" className="border-white/20 bg-white/10 text-arctic hover:bg-white/20" asChild>
                <Link href="#faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
