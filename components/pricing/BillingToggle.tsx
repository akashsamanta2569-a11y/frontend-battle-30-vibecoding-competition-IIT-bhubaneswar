'use client';

import { Toggle } from '@/components/ui/toggle';
import { type BillingCycle } from '@/components/pricing/pricingConfig';

interface BillingToggleProps {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
}

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-noir/70">Billing</label>
      <Toggle options={['Monthly', 'Annual']} value={value === 'annual' ? 'Annual' : 'Monthly'} onChange={(option) => onChange(option === 'Annual' ? 'annual' : 'monthly')} ariaLabel="Select billing cycle" />
    </div>
  );
}
