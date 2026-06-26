'use client';

import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
}

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          'appearance-none rounded-full border border-mint/80 bg-white/80 px-4 py-2.5 pr-10 text-sm font-medium text-noir outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-expedition" aria-hidden="true">
        ▾
      </span>
    </div>
  );
}
