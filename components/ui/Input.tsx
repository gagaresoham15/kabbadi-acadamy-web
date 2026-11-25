'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">{label}</label>}
        <input
          type={type}
          ref={ref}
          className={cn(
            'w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all',
            error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-[#EF4444] font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, options, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">{label}</label>}
        <select
          ref={ref}
          className={cn(
            'w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all appearance-none cursor-pointer',
            error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]',
            className
          )}
          {...props}
        >
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#101C2C] text-white">
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        {error && <p className="text-xs text-[#EF4444] font-medium">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';
