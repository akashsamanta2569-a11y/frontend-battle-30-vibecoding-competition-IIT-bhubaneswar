'use client';

import { useMemo, useState } from 'react';
import { BillingToggle } from '@/components/pricing/BillingToggle';
import { CurrencySelector } from '@/components/pricing/CurrencySelector';
import { PricingCard } from '@/components/pricing/PricingCard';
import { pricingConfig, type BillingCycle, type CurrencyCode } from '@/components/pricing/pricingConfig';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { Text } from '@/components/ui/text';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const pricingCards = useMemo(() => pricingConfig, []);

  return (
    <Section id="pricing" className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Pricing</Badge>
          <Heading as="h2" className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Pricing that scales with ambition.
          </Heading>
          <Text className="mt-5 text-lg">
            Choose the operating layer that fits your workflow—from lean launches to enterprise-grade execution.
          </Text>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur-xl md:flex-row">
          <BillingToggle value={billingCycle} onChange={setBillingCycle} />
          <CurrencySelector value={currency} onChange={setCurrency} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingCards.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} currency={currency} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
