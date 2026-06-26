import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
}

export function Section({ className, children, id, as: Component = 'section', ...props }: SectionProps) {
  return (
    <Component id={id} className={cn('py-20 sm:py-24 lg:py-32', className)} {...props}>
      {children}
    </Component>
  );
}
