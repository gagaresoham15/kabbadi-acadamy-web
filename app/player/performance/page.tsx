'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Trophy,
  Award,
  Zap,
  Activity,
  CheckCircle2,
  ArrowRight,
  Target,
  Flame,
  ShieldCheck,
  TrendingUp,
  Dumbbell
} from 'lucide-react';

export default function PlayerProgressPage() {
  return (
    <div className="space-y-6 animate-fade-in pt-1">
      {/* Title & Cohort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            My Progress & Performance
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Real-time biometric, skill metrics & tournament selection readiness
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="orange">Pro Raider Cohort</Badge>
          <Badge variant="green">State Squad Selected</Badge>
        </div>
      </div>

      {/* Main Responsive Grid: On mobile 1 col, on lg 12-col split (5 cols left, 7 cols right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: FIGMA SCREEN 3 REPLICA (lg:col-span-5) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 space-y-5">
          {/* Circular Progress Gauge Card (Figma Screen 3: "75% Training Progress") */}
          <Card className="p-6 bg-[#171F2B] border-white/5 flex flex-col items-center justify-center text-center space-y-4 shadow-card">
            <div className="w-full flex items-center justify-between text-xs text-[#AAB2BD] border-b border-white/5 pb-2">
              <span className="font-bold text-white uppercase tracking-wider text-[11px]">Readiness Gauge</span>
              <span className="text-[#22C55E] font-bold">On Schedule</span>
            </div>

            <div className="relative w-44 h-44 flex items-center justify-center my-2">
              {/* Circular SVG Gauge */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#101C2C"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Active Orange Arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#FF6B1A"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8" // 75% filled (251.2 * 0.25 = 62.8)
                  strokeLinecap="round"
                  fill="transparent"
                  className="filter drop-shadow-[0_0_10px_#FF6B1A]"
                />
              </svg>

              {/* Centered Percentage */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-white leading-none">75%</span>
                <span className="text-[10px] uppercase font-extrabold text-[#AAB2BD] tracking-wider mt-1">
                  Training Progress
                </span>
              </div>
            </div>

            <p className="text-xs text-[#AAB2BD] max-w-xs leading-relaxed">
              You are on track for state championship squad selection! Keep up the regularity across mat & conditioning drills.
            </p>
          </Card>

          {/* 3 Metrics: 24 Sessions, 12 Wins, 3 Trophies (Exact Figma Screen 3) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <div className="p-3.5 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1 shadow-card">
              <span className="text-2xl font-black text-white block">24</span>
              <span className="text-[10px] text-[#AAB2BD] uppercase font-bold tracking-wider">Sessions</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1 shadow-card">
              <span className="text-2xl font-black text-[#22C55E] block">12</span>
              <span className="text-[10px] text-[#AAB2BD] uppercase font-bold tracking-wider">Wins</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1 shadow-card">
              <span className="text-2xl font-black text-amber-400 block">3</span>
              <span className="text-[10px] text-[#AAB2BD] uppercase font-bold tracking-wider">Trophies</span>
            </div>
          </div>

          {/* Recent Achievements Card (Figma Screen 3: "Best Raider (2025)") */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recent Achievements
            </h4>

            <Card className="p-4 bg-[#171F2B] border-white/5 flex items-center justify-between gap-3 group hover:border-amber-500/40 transition-colors shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 shadow-glowSm">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                    Best Raider (2025)
                  </h5>
                  <p className="text-[11px] text-[#AAB2BD]">West Zone Youth Trophy • 38 Raid Points</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Button */}
          <Link href="/player/attendance" className="block pt-1">
            <Button size="lg" glow className="w-full shadow-glow">
              View Attendance & Logs →
            </Button>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: DETAILED ATHLETE PERFORMANCE METRICS (lg:col-span-7) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 space-y-5">
          {/* Tactical Raider Skill Breakdown */}
          <Card className="p-5 bg-[#171F2B] border-white/5 space-y-4 shadow-card">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-[#FF6B1A]" />
                <span>Raid & Tactical Mastery Breakdown</span>
              </h4>
              <span className="text-xs text-[#FF6B1A] font-bold">142 Total Points</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#AAB2BD]">Touch Point Conversion</span>
                  <span className="font-bold text-white">68% (54 Points)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#101C2C] overflow-hidden">
                  <div className="h-full rounded-full bg-[#FF6B1A]" style={{ width: '68%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#AAB2BD]">Bonus Line Crossings</span>
                  <span className="font-bold text-white">82% (42 Points)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#101C2C] overflow-hidden">
                  <div className="h-full rounded-full bg-[#22C55E]" style={{ width: '82%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#AAB2BD]">Dubki Escape Success</span>
                  <span className="font-bold text-white">74% (28 Points)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#101C2C] overflow-hidden">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: '74%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#AAB2BD]">Super Raids (3+ Defenders)</span>
                  <span className="font-bold text-amber-400">6 Times</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#101C2C] overflow-hidden">
                  <div className="h-full rounded-full bg-amber-400" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </Card>

          {/* Biometrics & Physical Conditioning */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-4 bg-[#171F2B] border-white/5 space-y-2 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#FF8A25]" /> Aerobic Lung Stamina
                </span>
                <Badge variant="green">Elite</Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">48s</span>
                <span className="text-[11px] text-[#AAB2BD]">Continuous Canting</span>
              </div>
              <p className="text-[11px] text-[#AAB2BD]">
                Tested during 30s raid simulator on Mat 1.
              </p>
            </Card>

            <Card className="p-4 bg-[#171F2B] border-white/5 space-y-2 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-blue-400" /> Agility Sprint
                </span>
                <Badge variant="orange">Top 5%</Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">1.38s</span>
                <span className="text-[11px] text-[#AAB2BD]">10m Mat Sprint</span>
              </div>
              <p className="text-[11px] text-[#AAB2BD]">
                Essential for evasion from corner tackles.
              </p>
            </Card>
          </div>

          {/* Coach's Evaluation Notes */}
          <Card className="p-5 bg-gradient-to-br from-[#101C2C] to-[#171F2B] border-white/5 space-y-3 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Lead Coach Evaluation
                </h4>
              </div>
              <span className="text-[10px] text-[#AAB2BD]">Updated Nov 20, 2024</span>
            </div>
            <p className="text-xs text-white/90 leading-relaxed italic bg-[#080D14]/60 p-3 rounded-xl border border-white/5">
              &ldquo;Rahul has shown tremendous footwork improvement on the right corner. His hand touches are sharper, and his recovery during high-pressure do-or-die raids is tournament ready.&rdquo;
            </p>
            <div className="flex items-center justify-between text-xs text-[#AAB2BD] pt-1">
              <span>Rohit Sharma — Head Coach</span>
              <span className="font-bold text-[#FF6B1A]">Grade: A+</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
