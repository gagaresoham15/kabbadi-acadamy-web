'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Dumbbell, Activity, Trophy, User } from 'lucide-react';

export function PlayerBottomNav() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { name: 'Home', href: '/player', icon: Home },
    { name: 'Programs', href: '/player/programs', icon: Dumbbell },
    { name: 'Progress', href: '/player/performance', icon: Activity },
    { name: 'Events', href: '/player/tournaments', icon: Trophy },
    { name: 'Profile', href: '/player/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#101C2C]/98 backdrop-blur-xl border-t border-white/10 shadow-[0_-5px_25px_rgba(0,0,0,0.6)] lg:hidden">
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors select-none ${
                isActive ? 'text-[#FF6B1A]' : 'text-[#AAB2BD] hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#FF6B1A]' : 'text-[#AAB2BD]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6B1A] shadow-[0_0_8px_#FF6B1A]" />
                )}
              </div>
              <span className={`text-[10px] ${isActive ? 'font-bold text-[#FF6B1A]' : 'font-medium'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
