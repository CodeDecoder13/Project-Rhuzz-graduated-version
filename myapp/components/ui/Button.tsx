'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-navy disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-electric-cyan text-midnight-navy hover:bg-neon-teal hover:shadow-lg hover:shadow-electric-cyan/25',
      secondary: 'bg-slate-dark text-soft-white hover:bg-slate-dark/80 border border-cool-gray/20',
      outline: 'border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-midnight-navy',
      ghost: 'text-cool-gray hover:text-soft-white hover:bg-slate-dark/50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </span>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
