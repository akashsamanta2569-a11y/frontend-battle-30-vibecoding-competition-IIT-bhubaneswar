import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export function Heading({ as: Component = 'h2', className, children, ...props }: HeadingProps) {
  return (
    <Component
      className={cn('font-mono text-noir', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
