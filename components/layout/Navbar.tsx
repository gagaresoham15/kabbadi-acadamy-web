'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Shield, User, Trophy, Calendar, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Academy', href: '/about' },
  { name: 'Training Programs', href: '/programs' },
  { name: 'Expert Coaches', href: '/coaches' },
  { name: 'Photo Gallery', href: '/gallery' },
  { name: 'Tournaments', href: '/events' },
  { name: 'Honors & Trophies', href: '/achievements' },
  { name: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open so background never bleeds or scrolls
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
    <header className="sticky top-0 z-40 w-full bg-[#080D14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-2 shadow-[0_0_15px_rgba(255,107,26,0.4)] group-hover:scale-105 transition-transform shrink-0">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white" />
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-base sm:text-xl text-white block font-display leading-tight">
              KABADDI <span className="text-[#FF6B1A]">ACADEMY</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-wider sm:tracking-widest text-[#AAB2BD] font-semibold block">
              TRAIN HARD. WIN TOGETHER.
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF6B1A] relative py-1 ${
                  active ? 'text-[#FF6B1A] font-semibold' : 'text-[#AAB2BD]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B1A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Portal Shortcuts & CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center bg-[#171F2B] border border-white/5 rounded-full p-1 text-xs">
            <Link
              href="/admin"
              className="px-3 py-1.5 rounded-full text-[#AAB2BD] hover:text-white hover:bg-white/5 transition-all font-medium flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#FF6B1A]" /> Admin
            </Link>
            <Link
              href="/coach"
              className="px-3 py-1.5 rounded-full text-[#AAB2BD] hover:text-white hover:bg-white/5 transition-all font-medium flex items-center gap-1.5"
            >
              <Trophy className="w-3.5 h-3.5 text-orange-400" /> Coach
            </Link>
            <Link
              href="/player"
              className="px-3 py-1.5 rounded-full text-[#AAB2BD] hover:text-white hover:bg-white/5 transition-all font-medium flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-blue-400" /> Player
            </Link>
          </div>

          <Link href="/register">
            <Button size="sm" glow className="px-5">
              Join Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <Link href="/register">
            <Button size="sm" className="text-xs px-3 py-1.5">Join</Button>
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-[#AAB2BD] hover:text-white focus:outline-none rounded-xl bg-[#171F2B] border border-white/5"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN 100% OPAQUE MOBILE MENU (Zero background bleed-through) */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#080D14] flex flex-col justify-between overflow-y-auto animate-fade-in w-screen h-screen">
          {/* Menu Top Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#101C2C] shrink-0">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-1.5 shadow-glowSm">
                <Flame className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-sm text-white block">
                  KABADDI <span className="text-[#FF6B1A]">ACADEMY</span>
                </span>
                <span className="text-[8px] uppercase tracking-wider text-[#AAB2BD] font-semibold block">
                  TRAIN HARD. WIN TOGETHER.
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

          {/* Menu Navigation Links */}
          <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
            {/* Primary Site Navigation */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#AAB2BD] block mb-3 px-1">
                Navigation
              </span>
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xs sm:text-sm py-3 px-3.5 rounded-xl font-bold transition-all flex items-center justify-between ${
                        active
                          ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                          : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white hover:bg-[#171F2B] border border-white/5'
                      }`}
                    >
                      <span className="truncate">{link.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1" />}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Portals & Dashboards Section */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#AAB2BD] block px-1">
                Portals & Dashboards
              </span>
              <div className="grid grid-cols-3 gap-2">
                <Link
                  href="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-white/5 hover:border-[#FF6B1A]/40 text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Admin</span>
                </Link>

                <Link
                  href="/coach"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-white/5 hover:border-orange-400/40 text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span>Coach</span>
                </Link>

                <Link
                  href="/player"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 bg-[#101C2C] p-3 rounded-2xl text-xs font-bold text-white border border-white/5 hover:border-blue-400/40 text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <User className="w-4 h-4" />
                  </div>
                  <span>Player</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Bottom Action Button */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#101C2C] space-y-2 shrink-0">
            <Link href="/register" onClick={() => setMobileOpen(false)} className="block">
              <Button size="lg" glow className="w-full text-xs sm:text-sm font-extrabold shadow-glow">
                Register as Player Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <p className="text-center text-[10px] text-[#AAB2BD]">
              Kabaddi Academy • Pune, Maharashtra • +91 98220 12345
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
