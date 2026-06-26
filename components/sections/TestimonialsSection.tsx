import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

const testimonials = [
  {
    name: 'Mina Chen',
    role: 'VP Product',
    company: 'Lumen Labs',
    quote: 'Northstar AI felt like the first system that could finally make our operating cadence feel calm and intelligent.'
  },
  {
    name: 'Omar Reyes',
    role: 'Head of Ops',
    company: 'Nova Stack',
    quote: 'The workflow layer is elegant, the telemetry is excellent, and our team adopted it in days rather than months.'
  },
  {
    name: 'Sofia Alvarez',
    role: 'Founder',
    company: 'Kite AI',
    quote: 'It is rare to find software that feels both premium and genuinely useful in the day-to-day.'
  }
];

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Testimonials</Badge>
          <Heading as="h2" className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Teams trust Northstar to orchestrate the work that matters.
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex h-full flex-col justify-between p-7">
              <Text className="text-base leading-8">“{testimonial.quote}”</Text>
              <div className="mt-8">
                <div className="font-semibold text-noir">{testimonial.name}</div>
                <div className="text-sm text-noir/60">{testimonial.role} · {testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
