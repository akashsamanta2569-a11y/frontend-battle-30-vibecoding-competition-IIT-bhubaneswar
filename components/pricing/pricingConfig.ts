export type BillingCycle = 'monthly' | 'annual';
export type CurrencyCode = 'USD' | 'EUR' | 'INR';

export type Plan = {
  id: string;
  name: string;
  description: string;
  monthlyBaseUsd: number;
  featured?: boolean;
  ctaLabel: string;
  features: string[];
};

export const annualDiscountRate = 0.2;

export const currencyMeta: Record<CurrencyCode, { symbol: string; label: string; rateToUsd: number }> = {
  USD: { symbol: '$', label: 'USD', rateToUsd: 1 },
  EUR: { symbol: '€', label: 'EUR', rateToUsd: 1.08 },
  INR: { symbol: '₹', label: 'INR', rateToUsd: 0.012 }
};

export const pricingConfig: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For lean teams shipping confidently.',
    monthlyBaseUsd: 29,
    ctaLabel: 'Start free',
    features: ['3 AI agents', 'Unlimited tasks', 'Email support']
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For product teams moving fast.',
    monthlyBaseUsd: 79,
    featured: true,
    ctaLabel: 'Choose Pro',
    features: ['Unlimited agents', 'Advanced analytics', 'Priority support']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations with strict controls.',
    monthlyBaseUsd: 149,
    ctaLabel: 'Book a demo',
    features: ['SSO and audit logs', 'Custom policies', 'Dedicated success lead']
  }
];
