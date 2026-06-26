import { Children, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const buttonVariants = {
  primary: 'bg-expedition text-arctic hover:bg-[#0d3b4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic',
  secondary: 'bg-white/80 text-noir border border-mint/80 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic',
  ghost: 'bg-transparent text-expedition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic'
} as const;

const buttonSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-6 py-3.5 text-lg'
} as const;

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseClassName = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out',
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (asChild && Children.only(children)) {
    const child = Children.only(children);
    if (isValidElement<{ className?: string }>(child)) {
      return cloneElement(child, {
        className: cn(baseClassName, child.props.className),
        ...(props as React.HTMLAttributes<HTMLElement> & { className?: string })
      });
    }
  }

  return (
    <button type={type} className={baseClassName} {...props}>
      {children}
    </button>
  );
}
