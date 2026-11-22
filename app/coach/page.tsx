'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Users,
  Layers,
  CalendarCheck2,
  Trophy,
  ArrowRight,
  Clock,
  CheckCircle2,
  Zap,
  Target
} from 'lucide-react';
import { INITIAL_PLAYERS, INITIAL_BATCHES } from '@/data/mock/academyData';

export default function CoachDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Coach Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#AAB2BD]">
            Welcome Coach <strong className="text-white">Rohit Sharma</strong> • Mat 1 Session begins in 45 minutes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/coach/attendance">
            <Button size="md" glow>
              <CalendarCheck2 className="w-4 h-4 mr-2" /> Mark Today&apos;s Roll Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">My Batches</span>
            <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">4</div>
          <p className="text-xs text-[#22C55E]">Juniors & Pro Warriors</p>
        </Card>

        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Assigned Athletes</span>
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">140</div>
          <p className="text-xs text-[#AAB2BD]">Under direct mentorship</p>
        </Card>

        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Avg Regularity</span>
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">94.2%</div>
          <p className="text-xs text-[#22C55E]">↑ 2.1% this week</p>
        </Card>

        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Tournament Ready</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">24</div>
          <p className="text-xs text-amber-400">Selected for Pune Championship</p>
        </Card>
      </div>

      {/* Today's Court Schedule & Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Today's Practice Schedule */}
        <Card className="lg:col-span-7 p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-wide">Today&apos;s Training Sessions</h3>
            <span className="text-xs text-[#FF6B1A] font-semibold">Mat Arena 1</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#101C2C] border border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="orange">Morning Shift</Badge>
                  <span className="text-xs font-bold text-white">Morning Juniors (Beginner)</span>
                </div>
                <p className="text-xs text-[#AAB2BD]">Footwork, hand touches & canting basics</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-[#22C55E] block">Completed</span>
                <span className="text-[11px] text-[#AAB2BD]">6:30 AM - 8:00 AM</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#101C2C] border border-[#FF6B1A]/30 flex items-center justify-between shadow-glowSm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="green">Upcoming Next</Badge>
                  <span className="text-xs font-bold text-white">Evening Rising Stars (Advanced)</span>
                </div>
                <p className="text-xs text-[#AAB2BD]">Chain tackle drills & corner coordination</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-[#FF6B1A] block">5:30 PM - 7:30 PM</span>
                <span className="text-[11px] text-[#AAB2BD]">28 Athletes</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#101C2C] border border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="muted">Late Evening</Badge>
                  <span className="text-xs font-bold text-white">Elite Pro Warriors (Competition)</span>
                </div>
                <p className="text-xs text-[#AAB2BD]">Pressure raid simulations & match analysis</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white block">8:00 PM - 9:30 PM</span>
                <span className="text-[11px] text-[#AAB2BD]">22 Athletes</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Right: Key Raider Watchlist */}
        <Card className="lg:col-span-5 p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-wide">Star Raiders Watchlist</h3>
            <Link href="/coach/players" className="text-xs text-[#FF6B1A] hover:underline font-semibold">
              Roster
            </Link>
          </div>

          <div className="divide-y divide-white/5">
            {INITIAL_PLAYERS.slice(0, 4).map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#101C2C] border border-[#FF6B1A]/40 flex items-center justify-center font-bold text-xs text-[#FF6B1A]">
                    #{p.jerseyNumber}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{p.name}</span>
                    <span className="text-[10px] text-[#AAB2BD]">{p.position} • {p.batch}</span>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="font-bold text-[#22C55E] block">{p.successfulRaids} Raid Pts</span>
                  <span className="text-[10px] text-[#AAB2BD]">{p.attendanceRate}% Attendance</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
