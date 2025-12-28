'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, title, subtitle, align = 'center', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12',
          align === 'center' ? 'text-center' : 'text-left',
          className
        )}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-cool-gray text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div
          className={cn(
            'h-1 w-20 bg-gradient-to-r from-electric-cyan to-neon-teal rounded-full mt-4',
            align === 'center' ? 'mx-auto' : ''
          )}
        />
      </div>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
