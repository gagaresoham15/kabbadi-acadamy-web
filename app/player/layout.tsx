'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlayerBottomNav } from '@/components/layout/PlayerBottomNav';
import {
  Home,
  Dumbbell,
  Calendar,
  CheckCircle2,
  Activity,
  CreditCard,
  Trophy,
  Award,
  User,
  Bell,
  Settings,
  Shield,
  Globe,
  Flame,
  Menu,
  X,
  ChevronRight,
  Layers
} from 'lucide-react';

const PLAYER_NAV_ITEMS = [
  { name: 'Dashboard', href: '/player', icon: Home },
  { name: 'Training Programs', href: '/player/programs', icon: Dumbbell },
  { name: 'Training Schedule', href: '/player/schedule', icon: Calendar },
  { name: 'My Progress', href: '/player/performance', icon: Activity },
  { name: 'Attendance History', href: '/player/attendance', icon: CheckCircle2 },
  { name: 'Fee & Payments', href: '/player/fees', icon: CreditCard },
  { name: 'Tournaments & Trials', href: '/player/tournaments', icon: Trophy },
  { name: 'Honors & Trophies', href: '/player/achievements', icon: Award },
  { name: 'Athlete Profile', href: '/player/profile', icon: User },
  { name: 'Notifications', href: '/player/notifications', icon: Bell, badge: '2' },
  { name: 'Settings', href: '/player/settings', icon: Settings },
];

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#080D14] text-white flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. DESKTOP SIDEBAR (Visible on lg: and wider screens) */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#101C2C] border-r border-white/5 flex-col justify-between z-30 overflow-y-auto scrollbar-none">
        <div>
          {/* Brand Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center text-white shadow-glowSm group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-black text-sm tracking-wider uppercase text-white block">
                  KABADDI
                </span>
                <span className="text-[10px] font-bold text-[#FF6B1A] tracking-widest block -mt-1">
                  ACADEMY
                </span>
              </div>
            </Link>
            <span className="px-2 py-0.5 rounded-full bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 text-[10px] font-bold text-[#FF6B1A]">
              Player
            </span>
          </div>

          {/* Athlete Profile Summary Card */}
          <div className="p-4 mx-3 my-4 rounded-2xl bg-[#171F2B] border border-white/5 flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] p-0.5 shadow-glowSm">
                <div className="w-full h-full rounded-full bg-[#101C2C] flex items-center justify-center font-black text-white text-xs">
                  #17
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-[#171F2B]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-extrabold text-white truncate">Rahul Deshmukh</h4>
              <p className="text-[11px] text-[#FF8A25] font-semibold truncate">Pro Raider • Mat 1</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[10px] text-[#AAB2BD]">State Squad</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#AAB2BD]/60 block mb-2">
              Menu
            </span>
            {PLAYER_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#FF6B1A] text-white shadow-glowSm font-bold'
                      : 'text-[#AAB2BD] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#AAB2BD]'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-black/30 text-white' : 'bg-[#FF6B1A] text-white'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Switcher & Exit */}
        <div className="p-4 border-t border-white/5 space-y-2">
          <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-[#AAB2BD]/60 block">
            Switch Portals
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <Link
              href="/admin"
              className="p-2 rounded-lg bg-[#171F2B] hover:bg-[#FF6B1A]/20 hover:text-[#FF6B1A] text-[#AAB2BD] transition-colors border border-white/5 flex flex-col items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
            <Link
              href="/coach"
              className="p-2 rounded-lg bg-[#171F2B] hover:bg-orange-500/20 hover:text-orange-400 text-[#AAB2BD] transition-colors border border-white/5 flex flex-col items-center gap-1"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Coach</span>
            </Link>
            <Link
              href="/"
              className="p-2 rounded-lg bg-[#171F2B] hover:bg-white/10 hover:text-white text-[#AAB2BD] transition-colors border border-white/5 flex flex-col items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Public</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE TOP BAR (< lg) - Strictly compact & zero horizontal overflow */}
      {/* ========================================================================= */}
      <header className="lg:hidden sticky top-0 z-30 bg-[#101C2C]/98 backdrop-blur-md border-b border-white/5 px-3 py-2.5 flex items-center justify-between w-full max-w-full">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[#171F2B] text-white border border-white/5 shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/player" className="flex items-center gap-1.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center text-white shrink-0">
              <Flame className="w-3.5 h-3.5 fill-white" />
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white truncate">
              Player Portal
            </span>
          </Link>
        </div>

        {/* Right: Quick Portals Dropdown + Notifications */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Portal Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#171F2B] border border-white/5 text-[10px] font-bold text-[#FF6B1A] hover:bg-white/10"
            >
              <Layers className="w-3 h-3" />
              <span>Portals</span>
            </button>

            {portalDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-1.5 w-36 bg-[#171F2B] border border-white/10 rounded-xl shadow-2xl py-1 z-50 animate-fade-in"
                onClick={() => setPortalDropdownOpen(false)}
              >
                <Link
                  href="/admin"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#AAB2BD] hover:text-white hover:bg-white/5"
                >
                  <Shield className="w-3.5 h-3.5 text-[#FF6B1A]" /> Admin Panel
                </Link>
                <Link
                  href="/coach"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#AAB2BD] hover:text-white hover:bg-white/5"
                >
                  <Trophy className="w-3.5 h-3.5 text-orange-400" /> Coach Panel
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#AAB2BD] hover:text-white hover:bg-white/5 border-t border-white/5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#22C55E]" /> Public Site
                </Link>
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <Link
            href="/player/notifications"
            className="relative p-1.5 rounded-lg bg-[#171F2B] text-[#AAB2BD] border border-white/5 hover:text-white"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" />
          </Link>
        </div>
      </header>

      {/* MOBILE SLIDE-OUT MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-[#080D14]/98"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-xs h-full bg-[#101C2C] border-r border-white/10 p-4 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B1A] flex items-center justify-center text-white">
                    <Flame className="w-4 h-4 fill-white" />
                  </div>
                  <span className="font-bold text-sm text-white">Player Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-[#AAB2BD]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Drawer Profile Snippet */}
              <div className="p-3 rounded-xl bg-[#171F2B] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF6B1A] flex items-center justify-center font-bold text-xs text-white">
                  #17
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">Rahul Deshmukh</h4>
                  <p className="text-[10px] text-[#FF8A25]">Pro Raider • Mat 1</p>
                </div>
              </div>

              {/* Menu Links */}
              <nav className="space-y-1">
                {PLAYER_NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                        isActive
                          ? 'bg-[#FF6B1A] text-white font-bold'
                          : 'text-[#AAB2BD] hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#FF6B1A] text-white font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Portal links in drawer */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#AAB2BD] block">
                Quick Portals
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#171F2B] text-[#FF6B1A] text-center font-bold border border-white/5"
                >
                  Admin Panel
                </Link>
                <Link
                  href="/coach"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#171F2B] text-orange-400 text-center font-bold border border-white/5"
                >
                  Coach Panel
                </Link>
              </div>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#AAB2BD] hover:bg-white/5 mt-1"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Public Academy Site</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. DESKTOP MAIN CONTAINER (lg:pl-64) */}
      {/* ========================================================================= */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
        {/* DESKTOP TOP HEADER */}
        <header className="hidden lg:flex items-center justify-between px-8 py-3.5 bg-[#080D14]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
          <div>
            <h1 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>Athlete Control Center</span>
              <span className="text-xs font-normal text-[#AAB2BD]">/</span>
              <span className="text-xs text-[#FF6B1A] font-semibold capitalize">
                {pathname.replace('/player', '').replace('/', '') || 'Overview'}
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Portal Switcher Pills */}
            <div className="flex items-center gap-2 bg-[#101C2C] p-1 rounded-xl border border-white/5 text-xs">
              <Link
                href="/admin"
                className="px-3 py-1 rounded-lg text-[#AAB2BD] hover:text-[#FF6B1A] hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5" /> Admin
              </Link>
              <Link
                href="/coach"
                className="px-3 py-1 rounded-lg text-[#AAB2BD] hover:text-orange-400 hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5" /> Coach
              </Link>
              <Link
                href="/"
                className="px-3 py-1 rounded-lg text-[#AAB2BD] hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5" /> Public Website
              </Link>
            </div>

            {/* Notification Bell */}
            <Link
              href="/player/notifications"
              className="relative p-2 rounded-xl bg-[#171F2B] text-[#AAB2BD] hover:text-white border border-white/5 transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B1A] shadow-[0_0_6px_#FF6B1A]" />
            </Link>

            {/* Athlete Chip */}
            <Link
              href="/player/profile"
              className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl bg-[#171F2B] border border-white/5 hover:border-[#FF6B1A]/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center text-[10px] font-black text-white">
                #17
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block leading-tight">
                  Rahul Deshmukh
                </span>
                <span className="text-[10px] text-[#22C55E] block leading-none">
                  Active Trainee
                </span>
              </div>
            </Link>
          </div>
        </header>

        {/* MAIN PAGE BODY (Fully responsive: 100% width on mobile, max-w-7xl on desktop) */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 lg:pb-12 overflow-x-hidden">
          {children}
        </main>

        {/* BOTTOM NAV FOR MOBILE DEVICES (< lg) */}
        <PlayerBottomNav />
      </div>
    </div>
  );
}
