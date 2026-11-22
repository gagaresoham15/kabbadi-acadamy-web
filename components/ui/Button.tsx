'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

    const variants = {
      primary: 'bg-[#FF6B1A] hover:bg-[#FF8A25] text-white shadow-md active:scale-95',
      secondary: 'bg-[#252F3D] hover:bg-[#2e3b4d] text-white border border-white/10 active:scale-95',
      outline: 'bg-transparent border border-[#FF6B1A] text-[#FF6B1A] hover:bg-[#FF6B1A] hover:text-white active:scale-95',
      ghost: 'bg-transparent hover:bg-white/5 text-[#AAB2BD] hover:text-white active:scale-95',
      danger: 'bg-[#EF4444] hover:bg-red-600 text-white shadow-md active:scale-95',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    const glowStyle = glow ? 'shadow-[0_0_20px_rgba(255,107,26,0.4)]' : '';

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], glowStyle, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
