import { cn } from '@/lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Text({ as: Component = 'p', className, children, ...props }: TextProps) {
  return (
    <Component className={cn('font-sans text-[1rem] leading-7 text-noir/80', className)} {...props}>
      {children}
    </Component>
  );
}
