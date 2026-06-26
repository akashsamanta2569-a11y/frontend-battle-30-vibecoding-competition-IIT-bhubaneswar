import { annualDiscountRate, currencyMeta, type BillingCycle, type CurrencyCode, type Plan } from '@/components/pricing/pricingConfig';

export function formatPrice(value: number, currency: CurrencyCode) {
  const meta = currencyMeta[currency];
  const rounded = Math.round(value * 100) / 100;
  return `${meta.symbol}${rounded.toFixed(0)}`;
}

export function getDisplayPrice(plan: Plan, billingCycle: BillingCycle, currency: CurrencyCode) {
  const baseUsd = billingCycle === 'annual' ? plan.monthlyBaseUsd * (1 - annualDiscountRate) : plan.monthlyBaseUsd;
  const adjusted = baseUsd * currencyMeta[currency].rateToUsd;
  return Math.round(adjusted * 100) / 100;
}

export function getDiscountedPrice(plan: Plan, billingCycle: BillingCycle, currency: CurrencyCode) {
  return getDisplayPrice(plan, billingCycle, currency);
}

export function getAnnualSavings(plan: Plan, currency: CurrencyCode) {
  const monthly = getDisplayPrice(plan, 'monthly', currency);
  const annual = getDisplayPrice(plan, 'annual', currency);
  return monthly * 12 - annual * 12;
}
