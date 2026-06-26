import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-mint/70 bg-white/70 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-expedition',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
