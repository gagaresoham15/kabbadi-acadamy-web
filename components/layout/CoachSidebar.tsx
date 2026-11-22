'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Layers,
  Users,
  Calendar,
  CalendarCheck2,
  Activity,
  Trophy,
  User,
  Settings,
  LogOut,
  X,
  Globe,
  Shield
} from 'lucide-react';

export const COACH_NAV_ITEMS = [
  { name: 'Dashboard', href: '/coach', icon: LayoutDashboard },
  { name: 'My Batches', href: '/coach/batches', icon: Layers },
  { name: 'My Players', href: '/coach/players', icon: Users },
  { name: 'Training Schedule', href: '/coach/schedule', icon: Calendar },
  { name: 'Mark Attendance', href: '/coach/attendance', icon: CalendarCheck2 },
  { name: 'Player Performance', href: '/coach/performance', icon: Activity },
  { name: 'Tournaments', href: '/coach/events', icon: Trophy },
  { name: 'My Profile', href: '/coach/profile', icon: User },
  { name: 'Settings', href: '/coach/settings', icon: Settings },
];

interface CoachSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function CoachSidebar({ mobileOpen = false, onCloseMobile }: CoachSidebarProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const content = (
    <div className="flex flex-col h-full bg-[#101C2C] border-r border-white/5 w-64 select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-1.5 shadow-glowSm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-base text-white block">
              KABADDI <span className="text-[#FF6B1A]">ACADEMY</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#FF8A25] font-semibold block">
              COACH PORTAL
            </span>
          </div>
        </Link>
        {onCloseMobile && (
          <button onClick={onCloseMobile} className="lg:hidden text-[#AAB2BD] hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {COACH_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[#FF6B1A] text-white shadow-glowSm font-bold'
                  : 'text-[#AAB2BD] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#AAB2BD]'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Switch Portal */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-semibold text-[#AAB2BD] hover:text-white hover:bg-white/5 transition-all"
        >
          <Shield className="w-4 h-4 text-[#FF6B1A]" />
          <span>Switch to Admin</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-semibold text-[#EF4444] hover:bg-[#EF4444]/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 z-30">
        {content}
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-[#080D14]/98" onClick={onCloseMobile} />
          <div className="relative z-10 animate-slide-right">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
