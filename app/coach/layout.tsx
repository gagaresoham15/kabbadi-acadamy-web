'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CoachSidebar } from '@/components/layout/CoachSidebar';
import { Menu, Bell, User, ChevronDown } from 'lucide-react';

export default function CoachLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080D14] flex">
      <CoachSidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Coach Header */}
        <header className="sticky top-0 z-20 h-16 bg-[#0E1520]/95 backdrop-blur-md border-b border-white/5 px-3 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-[#AAB2BD] hover:text-white rounded-lg hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-white uppercase tracking-wider truncate max-w-[200px] sm:max-w-none">
              Coach: <span className="text-[#FF6B1A]">Rohit Sharma</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/coach/profile"
              className="flex items-center gap-2 p-1 sm:p-1.5 sm:pr-3 rounded-full bg-[#171F2B] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#FF6B1A] flex items-center justify-center text-white text-xs font-bold">
                RS
              </div>
              <span className="text-xs font-bold text-white hidden sm:block">Rohit Sharma</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 p-3.5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
