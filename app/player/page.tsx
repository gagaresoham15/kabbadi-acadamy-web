'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Bell,
  Dumbbell,
  Trophy,
  Activity,
  User,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  MapPin,
  Flame,
  ChevronRight
} from 'lucide-react';

export default function PlayerDashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in w-full max-w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION */}
      {/* ========================================================================= */}

      {/* Mobile Top Greeting (Visible on < md) */}
      <div className="flex md:hidden items-center justify-between pt-0.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] p-0.5 shadow-glowSm shrink-0">
            <div className="w-full h-full rounded-full bg-[#101C2C] flex items-center justify-center font-bold text-white text-xs">
              #17
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
              Hello, Player! 👋
            </h2>
            <p className="text-[11px] text-[#AAB2BD] truncate">Let&apos;s train today!</p>
          </div>
        </div>

        <Link
          href="/player/notifications"
          className="relative p-2 rounded-full bg-[#171F2B] text-[#AAB2BD] hover:text-white border border-white/5 shrink-0"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B1A]" />
        </Link>
      </div>

      {/* Hero Banner Grid: On mobile 1 col, on md/lg split 2-columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Desktop Welcome Athlete Card (Visible md+) */}
        <div className="hidden md:flex md:col-span-6 lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#171F2B] via-[#101C2C] to-[#0D1520] border border-white/5 shadow-card flex-col justify-between relative overflow-hidden">
          <div className="space-y-3 z-10 relative">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 text-xs font-bold text-[#FF6B1A] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-[#FF6B1A]" /> Pro Raider Cohort
              </span>
              <span className="text-xs text-[#22C55E] font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Mat Ready
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                Welcome back, Rahul! 👋
              </h2>
              <p className="text-xs text-[#AAB2BD] mt-1">
                Evening practice starts at 5:30 PM on Synthetic Mat 1.
              </p>
            </div>

            {/* Quick Athlete Stats Pills */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-[#101C2C]/80 border border-white/5 text-center">
                <span className="text-xs text-[#AAB2BD] block">Attendance</span>
                <span className="text-sm font-extrabold text-[#22C55E]">94%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#101C2C]/80 border border-white/5 text-center">
                <span className="text-xs text-[#AAB2BD] block">Win Rate</span>
                <span className="text-sm font-extrabold text-[#FF6B1A]">78%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#101C2C]/80 border border-white/5 text-center">
                <span className="text-xs text-[#AAB2BD] block">Next Match</span>
                <span className="text-sm font-extrabold text-amber-400">3 Days</span>
              </div>
            </div>
          </div>

          <div className="pt-4 z-10 relative flex items-center justify-between border-t border-white/5 text-xs text-[#AAB2BD]">
            <span>Coach: Rohit Sharma (Head Coach)</span>
            <Link href="/player/profile" className="text-[#FF6B1A] hover:underline font-semibold flex items-center gap-1">
              View Profile <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Featured Promo Banner (Exact Figma match: "Be a Champion With Kabaddi Academy") */}
        <div className="col-span-1 md:col-span-6 lg:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF6B1A] via-[#FF7A20] to-[#FF8A25] p-4 sm:p-6 shadow-glowSm text-white flex flex-col justify-between min-h-[150px] sm:min-h-[190px]">
          <div className="max-w-[62%] sm:max-w-[60%] space-y-1.5 sm:space-y-2 z-10 relative min-w-0">
            <span className="inline-block px-2 py-0.5 rounded-full bg-black/25 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
              STATE CHAMPIONSHIP 2025
            </span>
            <h3 className="text-sm sm:text-2xl font-black leading-tight tracking-tight">
              Be a Champion <br className="hidden sm:block" /> With Kabaddi Academy
            </h3>
            <p className="text-[10px] sm:text-xs opacity-95 line-clamp-2">
              Winter state championship trials open. Register your weight category & squad.
            </p>
            <div className="pt-1 sm:pt-2">
              <Link href="/player/tournaments" className="inline-block">
                <span className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold shadow-lg hover:scale-105 transition-all">
                  Join Now <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* High-Definition Athlete Visual on Right */}
          <div className="absolute right-0 bottom-0 top-0 w-32 sm:w-56 overflow-hidden pointer-events-none">
            <Image
              src="/images/mob-player-banner.jpg"
              alt="Kabaddi Player Raider"
              fill
              className="object-cover object-left opacity-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. QUICK ACTION GRID (Exact 4 Figma Buttons: Programs, Events, Progress, Profile) */}
      {/* ========================================================================= */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Quick Navigation
          </h3>
          <span className="text-[10px] sm:text-[11px] text-[#AAB2BD]">Shortcuts</span>
        </div>

        {/* 4 columns in 1 single row on mobile (Exact Figma Match) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          <Link
            href="/player/programs"
            className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#171F2B] border border-white/5 hover:border-[#FF6B1A]/50 hover:bg-[#1C2635] transition-all group shadow-card text-center"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center shrink-0 mb-1 group-hover:scale-110 group-hover:bg-[#FF6B1A] group-hover:text-white transition-all shadow-glowSm">
              <Dumbbell className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-white block truncate w-full">
              Programs
            </span>
          </Link>

          <Link
            href="/player/tournaments"
            className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#171F2B] border border-white/5 hover:border-amber-500/50 hover:bg-[#1C2635] transition-all group shadow-card text-center"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mb-1 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-glowSm">
              <Trophy className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-white block truncate w-full">
              Events
            </span>
          </Link>

          <Link
            href="/player/performance"
            className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#171F2B] border border-white/5 hover:border-blue-500/50 hover:bg-[#1C2635] transition-all group shadow-card text-center"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mb-1 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-glowSm">
              <Activity className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-white block truncate w-full">
              Progress
            </span>
          </Link>

          <Link
            href="/player/profile"
            className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#171F2B] border border-white/5 hover:border-[#22C55E]/50 hover:bg-[#1C2635] transition-all group shadow-card text-center"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center shrink-0 mb-1 group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-black transition-all shadow-glowSm">
              <User className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-white block truncate w-full">
              Profile
            </span>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN RESPONSIVE CONTENT (Figma Screen 2 exact components) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* LEFT COLUMN: EVENTS, TODAY'S TRAINING, TIMETABLE (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
          {/* Upcoming Event Card (Exact Figma match: "Upcoming Event • 25 Oct Inter Academy Championship") */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate">
                  Upcoming Event
                </h4>
                <span className="px-1.5 py-0.2 rounded-full bg-[#FF6B1A]/20 text-[9px] font-bold text-[#FF6B1A] shrink-0">
                  Confirmed
                </span>
              </div>
              <Link href="/player/tournaments" className="text-[11px] sm:text-xs text-[#FF6B1A] font-semibold hover:underline shrink-0">
                See All →
              </Link>
            </div>

            <Card className="p-3.5 sm:p-5 bg-[#171F2B] border-white/5 hover:border-[#FF6B1A]/30 transition-all group shadow-card">
              <div className="space-y-3">
                {/* Top Row: Date Badge + Title/Venue */}
                <div className="flex items-start gap-3 min-w-0">
                  {/* Date Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 flex flex-col items-center justify-center text-center shrink-0 group-hover:bg-[#FF6B1A] transition-colors">
                    <span className="text-base sm:text-lg font-black text-white group-hover:text-black leading-none transition-colors">
                      25
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase font-black text-[#FF6B1A] group-hover:text-black mt-0.5 transition-colors">
                      Oct
                    </span>
                  </div>

                  {/* Title & Venue */}
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Badge variant="orange" className="text-[9px] px-1.5 py-0">State Level</Badge>
                      <span className="text-[10px] text-[#22C55E] font-bold">Squad Ready</span>
                    </div>
                    <h5 className="text-xs sm:text-base font-extrabold text-white group-hover:text-[#FF6B1A] transition-colors truncate">
                      Inter Academy Kabaddi Championship
                    </h5>
                    <p className="text-[10px] sm:text-xs text-[#AAB2BD] flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-[#FF6B1A] shrink-0" />
                      <span className="truncate">Balewadi Complex, Pune</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Prize & Action Button */}
                <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-white/5">
                  <span className="text-[10px] sm:text-xs text-amber-400 font-bold truncate">
                    Trophy Pool ₹1,50,000
                  </span>
                  <Link href="/player/tournaments" className="shrink-0">
                    <Button size="sm" className="text-[10px] sm:text-xs px-3 py-1 shadow-glowSm">
                      View Details →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Today's Practice Session */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 truncate">
                <Clock className="w-3.5 h-3.5 text-[#FF8A25] shrink-0" />
                <span className="truncate">Today&apos;s Training Session</span>
              </h4>
              <Badge variant="green" className="shrink-0 text-[10px]">Mat 1</Badge>
            </div>

            <Card className="p-3.5 sm:p-5 bg-gradient-to-br from-[#101C2C] to-[#171F2B] border-white/5 space-y-3 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[#FF8A25] tracking-wider block">
                    Advanced Batch
                  </span>
                  <h4 className="text-xs sm:text-base font-extrabold text-white truncate">
                    Evening Rising Stars (Advanced)
                  </h4>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-[#AAB2BD]">
                  <span>5:30 PM - 7:30 PM</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#AAB2BD] pt-2 border-t border-white/5">
                <span>Coach: <strong className="text-white">Rohit Sharma</strong></span>
                <span className="text-[#FF6B1A] font-semibold">Mat Focus: Dubki & Tackle Form</span>
              </div>
            </Card>
          </div>

          {/* Weekly Training Overview (Desktop enhancement) */}
          <div className="hidden sm:block space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Weekly Training Timetable
              </h4>
              <Link href="/player/schedule" className="text-xs text-[#FF6B1A] font-semibold hover:underline">
                Full Timetable →
              </Link>
            </div>

            <div className="grid grid-cols-6 gap-2 text-center text-xs">
              {[
                { day: 'Mon', morning: 'Fitness', evening: 'Raids', active: true },
                { day: 'Tue', morning: 'Rest', evening: 'Scrimmage', active: false },
                { day: 'Wed', morning: 'Gym Agility', evening: 'Mat Drills', active: false },
                { day: 'Thu', morning: 'Footwork', evening: 'Tackle Form', active: false },
                { day: 'Fri', morning: 'Speed Work', evening: 'Match Prep', active: false },
                { day: 'Sat', morning: 'Mock Match', evening: 'Recovery', active: false },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border transition-all ${
                    item.active
                      ? 'bg-[#FF6B1A]/20 border-[#FF6B1A] text-white shadow-glowSm'
                      : 'bg-[#171F2B] border-white/5 text-[#AAB2BD]'
                  }`}
                >
                  <span className="font-extrabold block text-sm">{item.day}</span>
                  <span className="text-[10px] block opacity-80 mt-1">{item.morning}</span>
                  <span className="text-[10px] font-bold text-[#FF6B1A] block">{item.evening}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROGRESS GAUGE, ACHIEVEMENTS, NOTICES (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
          {/* Circular Progress Gauge Widget (Figma Screen 3 match) */}
          <Card className="p-4 sm:p-5 bg-[#171F2B] border-white/5 space-y-3 sm:space-y-4 shadow-card text-center">
            <div className="flex items-center justify-between text-left">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white">My Progress</h4>
                <p className="text-[10px] sm:text-[11px] text-[#AAB2BD]">State selection readiness</p>
              </div>
              <Badge variant="orange" className="text-[10px]">75%</Badge>
            </div>

            {/* Circular SVG Gauge */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto flex items-center justify-center my-1 sm:my-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#101C2C"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#FF6B1A"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                  fill="transparent"
                  className="filter drop-shadow-[0_0_8px_#FF6B1A]"
                />
              </svg>

              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-white leading-none">75%</span>
                <span className="text-[8px] sm:text-[9px] uppercase font-bold text-[#AAB2BD] tracking-wider mt-0.5">
                  Training
                </span>
              </div>
            </div>

            {/* 3 Figma Screen 3 Metrics: 24 Sessions, 12 Wins, 3 Trophies */}
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#101C2C] border border-white/5">
                <span className="text-sm sm:text-base font-black text-white block">24</span>
                <span className="text-[8px] sm:text-[9px] text-[#AAB2BD] uppercase font-bold">Sessions</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#101C2C] border border-white/5">
                <span className="text-sm sm:text-base font-black text-[#22C55E] block">12</span>
                <span className="text-[8px] sm:text-[9px] text-[#AAB2BD] uppercase font-bold">Wins</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#101C2C] border border-white/5">
                <span className="text-sm sm:text-base font-black text-amber-400 block">3</span>
                <span className="text-[8px] sm:text-[9px] text-[#AAB2BD] uppercase font-bold">Trophies</span>
              </div>
            </div>

            <Link href="/player/performance" className="block pt-1">
              <Button size="sm" variant="outline" className="w-full text-xs">
                View Full Report →
              </Button>
            </Link>
          </Card>

          {/* Recent Achievement (Exact Figma Screen 3: "Best Raider (2025)") */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recent Honors
            </h4>

            <Card className="p-3.5 sm:p-4 bg-[#171F2B] border-white/5 flex items-center justify-between gap-3 group hover:border-amber-500/40 transition-colors shadow-card">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 shadow-glowSm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-white group-hover:text-[#FF6B1A] transition-colors truncate">
                    Best Raider (2025)
                  </h5>
                  <p className="text-[10px] text-[#AAB2BD] truncate">West Zone Youth Trophy • 38 Raid Points</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
