import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

const companies = ['Northstar', 'Lumen', 'Astra', 'Kite', 'Nova', 'Pioneer'];

export function TrustedCompaniesSection() {
  return (
    <Section className="border-b border-white/70 bg-white/40 py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge>Trusted by modern teams</Badge>
          <div className="mt-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div key={company} className="rounded-full border border-mint/70 bg-white/70 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-noir/60 transition-transform duration-200 hover:-translate-y-1 hover:text-noir">
                {company}
              </div>
            ))}
          </div>
          <Text className="mt-2 text-sm">Used by ambitious product, ops, and customer success teams.</Text>
        </div>
      </Container>
    </Section>
  );
}
