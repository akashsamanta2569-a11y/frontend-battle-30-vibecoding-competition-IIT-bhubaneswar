'use client';

import { cn } from '@/lib/utils';

interface ToggleProps {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
}

export function Toggle({ options, value, onChange, ariaLabel = 'Toggle selection' }: ToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="inline-flex rounded-full border border-mint/80 bg-white/70 p-1"
    >
      {options.map((option) => {
        const isActive = option === value;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic',
              isActive ? 'bg-expedition text-arctic shadow-sm' : 'text-noir/70 hover:text-noir'
            )}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
