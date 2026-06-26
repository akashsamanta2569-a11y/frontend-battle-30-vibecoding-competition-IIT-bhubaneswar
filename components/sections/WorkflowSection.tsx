import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

const steps = [
  { title: 'Input Sources', description: 'Integrations' },
  { title: 'AI Processing', description: 'Model routing' },
  { title: 'Reasoning Engine', description: 'Guardrails' },
  { title: 'Automation', description: 'Actions' },
  { title: 'Analytics', description: 'Signals' }
];

export function WorkflowSection() {
  return (
    <Section id="workflow" className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.35),_rgba(241,246,244,0.8))]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Workflow</Badge>
          <Heading as="h2" className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            One elegant path from signal to execution.
          </Heading>
          <Text className="mt-5 text-lg">
            Every step is designed to feel precise, transparent, and effortless.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-[24px] border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-expedition text-sm font-semibold text-arctic">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-noir">{step.title}</h3>
              <p className="mt-2 text-sm text-noir/60">{step.description}</p>
              {index < steps.length - 1 ? <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-mint to-expedition/20 lg:block" /> : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
