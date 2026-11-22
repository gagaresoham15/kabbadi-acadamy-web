'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'orange' | 'green' | 'red' | 'blue' | 'muted' | 'outline';
}

export function Badge({ className, variant = 'orange', children, ...props }: BadgeProps) {
  const variants = {
    orange: 'bg-[#FF6B1A]/15 text-[#FF6B1A] border border-[#FF6B1A]/30',
    green: 'bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30',
    red: 'bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30',
    blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
    muted: 'bg-[#252F3D] text-[#AAB2BD] border border-white/5',
    outline: 'border border-white/20 text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
