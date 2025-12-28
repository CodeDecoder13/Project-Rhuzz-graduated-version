'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hover = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl p-6 transition-all duration-300';

    const variants = {
      default: 'bg-slate-dark',
      glass: 'bg-slate-dark/70 backdrop-blur-xl border border-white/10',
      bordered: 'bg-transparent border-2 border-cool-gray/20',
    };

    const hoverStyles = hover
      ? 'hover:shadow-lg hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 hover:-translate-y-1'
      : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
