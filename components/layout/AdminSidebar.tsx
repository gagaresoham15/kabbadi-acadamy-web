'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_CMS } from '@/data/mock/academyData';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Dumbbell,
  Layers,
  CalendarCheck2,
  CreditCard,
  Trophy,
  Award,
  Image as ImageIcon,
  MessageSquare,
  BarChart3,
  Globe,
  Settings,
  LogOut,
  X
} from 'lucide-react';

export const ADMIN_NAV_ITEMS = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Students', href: '/admin/students', icon: Users },
  { name: 'Coaches', href: '/admin/coaches', icon: UserCog },
  { name: 'Programs', href: '/admin/programs', icon: Dumbbell },
  { name: 'Batches', href: '/admin/batches', icon: Layers },
  { name: 'Attendance', href: '/admin/attendance', icon: CalendarCheck2 },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Events', href: '/admin/events', icon: Trophy },
  { name: 'Achievements', href: '/admin/achievements', icon: Award },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare },
  { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
  { name: 'Website CMS', href: '/admin/cms', icon: Globe },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function AdminSidebar({ mobileOpen = false, onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();
  const [cms] = useAcademyData('cms', INITIAL_CMS);

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
            <span className="font-extrabold tracking-wider text-sm text-white block uppercase truncate max-w-[150px]">
              {cms.academyName}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[#FF6B1A] font-bold block">
              MANAGEMENT PORTAL
            </span>
          </div>
        </Link>
        {onCloseMobile && (
          <button onClick={onCloseMobile} className="lg:hidden text-[#AAB2BD] hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav Menu Items */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {ADMIN_NAV_ITEMS.map((item) => {
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

      {/* Logout / Switch */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-semibold text-[#AAB2BD] hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe className="w-4 h-4 text-blue-400" />
          <span>Public Website</span>
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
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 z-30">
        {content}
      </aside>

      {/* Mobile Drawer */}
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
