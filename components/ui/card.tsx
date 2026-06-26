import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-[0_16px_60px_rgba(23,43,54,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,43,54,0.12)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
