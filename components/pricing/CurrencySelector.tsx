'use client';

import { Select } from '@/components/ui/select';
import { currencyMeta, type CurrencyCode } from '@/components/pricing/pricingConfig';

interface CurrencySelectorProps {
  value: CurrencyCode;
  onChange: (value: CurrencyCode) => void;
}

export function CurrencySelector({ value, onChange }: CurrencySelectorProps) {
  return (
    <div>
      <label htmlFor="currency-select" className="mb-2 block text-sm font-medium text-noir/70">
        Currency
      </label>
      <Select
        id="currency-select"
        aria-label="Select currency"
        value={value}
        onChange={(event) => onChange(event.target.value as CurrencyCode)}
        options={Object.entries(currencyMeta).map(([value, meta]) => ({ value, label: `${meta.label} (${meta.symbol})` }))}
      />
    </div>
  );
}
