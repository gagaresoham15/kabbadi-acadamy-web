'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, Menu, Shield, User, ChevronDown, CheckCircle2 } from 'lucide-react';
import { INITIAL_NOTICES } from '@/data/mock/academyData';

interface AdminHeaderProps {
  onOpenMobileMenu: () => void;
  title?: string;
}

export function AdminHeader({ onOpenMobileMenu, title }: AdminHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#0E1520]/95 backdrop-blur-md border-b border-white/5 px-3 sm:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-[#AAB2BD] hover:text-white rounded-lg hover:bg-white/5"
        >
          <Menu className="w-5 h-5" />
        </button>

        {title && (
          <h2 className="hidden md:block text-base font-bold text-white tracking-wide">
            {title}
          </h2>
        )}

        {/* Global Search Bar (like Figma) */}
        <div className="relative w-36 xs:w-48 sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#AAB2BD] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#171F2B] border border-white/5 rounded-full pl-8 sm:pl-9 pr-3 sm:pr-4 py-1.5 text-xs text-white placeholder-[#AAB2BD]/60 focus:outline-none focus:border-[#FF6B1A] transition-all"
          />
        </div>
      </div>

      {/* Right Tools: Notifications & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative p-2 text-[#AAB2BD] hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B1A] ring-2 ring-[#0E1520]" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 -mr-8 sm:mr-0 mt-2 w-72 sm:w-80 bg-[#171F2B] border border-white/10 rounded-2xl shadow-2xl p-4 z-50 space-y-3 animate-scale-up">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">System Alerts</span>
                <span className="text-[10px] text-[#FF6B1A] font-semibold">{INITIAL_NOTICES.length} New</span>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {INITIAL_NOTICES.map((n) => (
                  <div key={n.id} className="p-2.5 rounded-xl bg-[#101C2C] border border-white/5 text-xs space-y-1">
                    <p className="font-bold text-white text-[11px]">{n.title}</p>
                    <p className="text-[11px] text-[#AAB2BD] line-clamp-2">{n.message}</p>
                    <p className="text-[9px] text-[#FF8A25]">{n.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1 sm:p-1.5 sm:pr-3 rounded-full bg-[#171F2B] border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <span className="text-xs font-bold text-white hidden sm:block">Admin</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#AAB2BD] hidden sm:block" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-[#171F2B] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 space-y-1 text-xs animate-scale-up">
              <div className="p-2 border-b border-white/5">
                <p className="font-bold text-white">Academy Director</p>
                <p className="text-[10px] text-[#AAB2BD]">admin@kabaddiacademy.in</p>
              </div>
              <Link
                href="/admin/settings"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 p-2 rounded-lg text-[#AAB2BD] hover:text-white hover:bg-white/5"
              >
                Settings
              </Link>
              <Link
                href="/coach"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 p-2 rounded-lg text-orange-400 hover:bg-orange-500/10"
              >
                Switch to Coach Panel
              </Link>
              <Link
                href="/player"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 p-2 rounded-lg text-blue-400 hover:bg-blue-500/10"
              >
                Switch to Player Portal
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
