'use client';

import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type BillingCycle, type CurrencyCode, type Plan } from '@/components/pricing/pricingConfig';
import { formatPrice, getAnnualSavings, getDiscountedPrice } from '@/components/pricing/pricingUtils';

interface PricingCardProps {
  plan: Plan;
  billingCycle: BillingCycle;
  currency: CurrencyCode;
}

const PricingCardComponent = ({ plan, billingCycle, currency }: PricingCardProps) => {
  const price = getDiscountedPrice(plan, billingCycle, currency);
  const annualSavings = getAnnualSavings(plan, currency);

  return (
    <Card className={`relative h-full p-7 ${plan.featured ? 'border-expedition/20 bg-white/85 shadow-[0_24px_70px_rgba(17,76,90,0.12)]' : ''}`}>
      {plan.featured ? (
        <div className="absolute right-5 top-5">
          <Badge>Most Popular</Badge>
        </div>
      ) : null}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-noir">{plan.name}</h3>
          <p className="mt-3 text-sm leading-7 text-noir/70">{plan.description}</p>
        </div>

        <div className="rounded-[24px] border border-mint/70 bg-arctic/70 p-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-noir">{formatPrice(price, currency)}</span>
            <span className="text-sm text-noir/60">/mo</span>
          </div>
          {billingCycle === 'annual' ? (
            <p className="mt-2 text-sm text-expedition">Save {formatPrice(annualSavings, currency)} annually</p>
          ) : (
            <p className="mt-2 text-sm text-noir/60">Billed monthly</p>
          )}
        </div>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-noir/70">
              <span className="mt-1 text-expedition">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button variant={plan.featured ? 'primary' : 'secondary'} className="w-full justify-center">
          {plan.ctaLabel}
        </Button>
      </div>
    </Card>
  );
};

export const PricingCard = memo(PricingCardComponent);
