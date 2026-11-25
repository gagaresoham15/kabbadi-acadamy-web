'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  User,
  Trophy,
  Flame,
  Phone,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAcademyData } from '@/lib/useAcademyData';
import { useTheme } from '@/lib/ThemeContext';
import { INITIAL_CMS } from '@/data/mock/academyData';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Batches', href: '/programs' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Campus Life', href: '/#campus-life' },
  { name: 'Daily Schedule', href: '/#daily-routine' },
  { name: 'Tournaments', href: '/events' },
  { name: 'Honors', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cms] = useAcademyData('cms', INITIAL_CMS);
  const { theme, toggleTheme } = useTheme();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ========================================================================= */}
      {/* TOP NOTIFICATION / TICKER BAR (Sports Accent Strip) */}
      {/* ========================================================================= */}
      <div className="bg-[#05080E] text-white text-xs border-b border-white/10 py-1.5 px-3 sm:px-6 lg:px-8 z-50 relative overflow-x-clip">
        <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto flex items-center justify-between gap-3">
          {/* Ticker Text */}
          <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF6B1A] text-white text-[10px] font-black uppercase tracking-wider shrink-0 shadow-[0_0_10px_rgba(255,107,26,0.5)]">
              <Flame className="w-3 h-3 fill-white" />
              Admissions 2025–26
            </span>
            <p className="text-xs text-white/90 truncate font-medium tracking-wide">
              {cms.announcementTicker}
            </p>
          </div>

          {/* Quick Helpline & Portal Link */}
          <div className="hidden md:flex items-center gap-4 shrink-0 text-xs">
            <a
              href={`tel:${cms.academyPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#FF6B1A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B1A]" />
              <span>{cms.academyPhone}</span>
            </a>

            <div className="h-3 w-px bg-white/20" />

            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-[#FF6B1A] text-white font-bold text-[11px] transition-all border border-white/15"
            >
              <Shield className="w-3 h-3 text-[#FF6B1A]" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN NAVIGATION BAR: Zero overflow, rock-solid responsiveness */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-[#080D14]/95 backdrop-blur-md border-b border-white/10 overflow-x-clip">
        <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-4">
          {/* Brand Logo (Left) */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B1A] via-[#FF8A25] to-[#E8590C] flex items-center justify-center p-2 shadow-[0_0_15px_rgba(255,107,26,0.35)] group-hover:scale-105 transition-transform shrink-0 border border-white/15">
              <Flame className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-wider text-sm xl:text-base text-white font-display leading-tight uppercase whitespace-nowrap">
                {cms.academyName.split(' ')[0]}{' '}
                <span className="text-[#FF6B1A]">
                  {cms.academyName.split(' ').slice(1).join(' ') || 'ACADEMY'}
                </span>
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#AAB2BD] font-bold block whitespace-nowrap">
                {cms.tagline}
              </span>
            </div>
          </Link>

          {/* Nav Links (Desktop: Compact & Responsive) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5 shrink-0">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wider transition-all hover:text-[#FF6B1A] relative py-1.5 px-1 whitespace-nowrap ${
                    active ? 'text-[#FF6B1A]' : 'text-[#AAB2BD]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#FF6B1A] rounded-full shadow-[0_0_8px_#FF6B1A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + High-Contrast Join Academy CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light Mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-full bg-[#171F2B] border border-white/10 hover:border-[#FF6B1A] text-amber-400 hover:text-amber-300 transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Join Academy Primary CTA */}
            <Link href="/register" className="shrink-0">
              <Button
                size="sm"
                glow
                className="px-4 py-2 font-black uppercase tracking-wider text-xs shadow-[0_0_18px_rgba(255,107,26,0.45)] whitespace-nowrap"
              >
                Join Academy <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger & Theme Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-amber-400 rounded-xl bg-[#171F2B] border border-white/10"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
            </button>
            <Link href="/register">
              <Button size="sm" glow className="text-xs px-3 py-1.5 font-bold uppercase">
                Join
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[#AAB2BD] hover:text-white focus:outline-none rounded-xl bg-[#171F2B] border border-white/10"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET DRAWER (100% Opaque, Zero Overflow) */}
        {/* ========================================================================= */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-[#080D14] flex flex-col justify-between overflow-y-auto animate-fade-in w-screen h-screen">
            {/* Top Bar */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#101C2C] shrink-0">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-1.5 shadow-glowSm">
                  <Flame className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <span className="font-extrabold tracking-wider text-sm text-white block uppercase">
                    {cms.academyName}
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-[#AAB2BD] font-semibold block">
                    {cms.tagline}
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl bg-[#171F2B] text-[#AAB2BD] hover:text-white border border-white/10 focus:outline-none"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-5 space-y-6 overflow-y-auto">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#FF6B1A] block mb-3 px-1">
                  Academy Navigation
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs py-3 px-4 rounded-xl font-bold uppercase tracking-wider bg-[#101C2C] text-[#AAB2BD] hover:text-white hover:bg-[#171F2B] border border-white/5"
                  >
                    Home
                  </Link>
                  {NAV_LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-xs py-3 px-4 rounded-xl font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                          active
                            ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                            : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white hover:bg-[#171F2B] border border-white/5'
                        }`}
                      >
                        <span>{link.name}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Theme Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between bg-[#101C2C] border border-white/10 p-3.5 rounded-2xl">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
                  <span>Display Theme ({theme === 'dark' ? 'Dark Mode' : 'Light Mode'})</span>
                </span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-xl bg-[#171F2B] border border-white/10 text-xs font-black text-amber-400 uppercase tracking-wider cursor-pointer"
                >
                  Switch to {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
              </div>

              {/* Management Portals */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#FF6B1A] block px-1">
                  Academy Management Portals
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <Link
                    href="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-[#FF6B1A]/40 text-center"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FF6B1A]/20 text-[#FF6B1A] flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span>Admin</span>
                  </Link>

                  <Link
                    href="/coach"
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-white/5 text-center"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span>Coach</span>
                  </Link>

                  <Link
                    href="/player"
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-white/5 text-center"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <span>Player</span>
                  </Link>
                </div>
              </div>

              {/* Hotline Contact Info */}
              <div className="bg-[#101C2C] border border-white/10 p-4 rounded-2xl text-xs space-y-2">
                <p className="text-[#FF6B1A] font-bold uppercase tracking-wider text-[10px]">
                  Direct Admissions Helpline
                </p>
                <p className="text-white font-black text-sm">{cms.academyPhone}</p>
                <p className="text-[#AAB2BD] text-[11px] leading-relaxed">{cms.academyAddress}</p>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#101C2C] space-y-2 shrink-0">
              <Link href="/register" onClick={() => setMobileOpen(false)} className="block">
                <Button size="lg" glow className="w-full text-xs font-black uppercase tracking-wider shadow-glow">
                  Register Athlete for Trials Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
