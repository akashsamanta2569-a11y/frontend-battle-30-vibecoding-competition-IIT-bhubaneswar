import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

const faqItems = [
  {
    title: 'How quickly can a team get started?',
    content: 'Most teams are live within a day with guided setup, templates, and event-based automation ready to use.'
  },
  {
    title: 'Can I connect existing tools?',
    content: 'Yes. Northstar AI works with your existing stack through native integrations and flexible API hooks.'
  },
  {
    title: 'Is enterprise security included?',
    content: 'Enterprise plans include SSO, role-based permissions, audit logs, and the compliance controls your team expects.'
  }
];

export function FAQSection() {
  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>FAQ</Badge>
          <Heading as="h2" className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Questions, answered clearly.
          </Heading>
          <Text className="mt-5 text-lg">Everything you need to know before you launch.</Text>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </Section>
  );
}
