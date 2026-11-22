'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, XCircle, Clock, Calendar, ShieldCheck, Flame } from 'lucide-react';

const RECENT_DATES = [
  { date: 'Nov 21, 2024', status: 'Present', session: 'Evening Rising Stars Drill', time: '5:30 PM - 7:30 PM', mat: 'Mat 1' },
  { date: 'Nov 19, 2024', status: 'Present', session: 'Tactical Scrimmage Match', time: '6:00 PM - 8:00 PM', mat: 'Main Court' },
  { date: 'Nov 18, 2024', status: 'Late', session: 'Morning Conditioning & Sprints', time: '6:45 AM - 8:00 AM', mat: 'Sprint Track' },
  { date: 'Nov 16, 2024', status: 'Present', session: 'Weekend Mock Tournament', time: '8:00 AM - 11:00 AM', mat: 'Main Arena' },
  { date: 'Nov 14, 2024', status: 'Absent', session: 'Corner Tackle Form Drill', time: '5:30 PM - 7:30 PM', mat: 'Mat 2' },
  { date: 'Nov 12, 2024', status: 'Present', session: 'Ankle Hold Mastery & Defense', time: '6:30 AM - 8:00 AM', mat: 'Mat 1' },
  { date: 'Nov 10, 2024', status: 'Present', session: 'Inter-Batch Scrimmage', time: '5:30 PM - 7:30 PM', mat: 'Main Court' },
  { date: 'Nov 08, 2024', status: 'Present', session: 'Speed Agility & Flexibility', time: '6:30 AM - 8:00 AM', mat: 'Gym' },
];

export default function PlayerAttendancePage() {
  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Attendance History & Regularity
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Official attendance audit required for State and National tournament eligibility
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="green">Tournament Eligible (&gt;85%)</Badge>
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 12 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Attendance Stats Cards (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4 text-center shadow-card">
            <span className="text-xs text-[#AAB2BD] font-bold uppercase tracking-wider block">
              Monthly Regularity
            </span>
            <div className="py-2">
              <span className="text-5xl font-black text-[#22C55E] block leading-none">94%</span>
              <span className="text-xs text-[#AAB2BD] mt-2 block font-medium">
                24 of 26 Sessions Attended
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-xs">
              <div className="p-2 rounded-xl bg-[#101C2C]">
                <span className="font-extrabold text-[#22C55E] block text-sm">24</span>
                <span className="text-[10px] text-[#AAB2BD]">Present</span>
              </div>
              <div className="p-2 rounded-xl bg-[#101C2C]">
                <span className="font-extrabold text-amber-400 block text-sm">1</span>
                <span className="text-[10px] text-[#AAB2BD]">Late</span>
              </div>
              <div className="p-2 rounded-xl bg-[#101C2C]">
                <span className="font-extrabold text-[#EF4444] block text-sm">1</span>
                <span className="text-[10px] text-[#AAB2BD]">Absent</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-[#101C2C] border-white/5 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Selection Board Criteria</span>
            </div>
            <p className="text-[#AAB2BD] text-[11px] leading-relaxed">
              State tournament registration requires a minimum of 85% attendance during the 60-day training cycle. Current status is fully compliant.
            </p>
          </Card>
        </div>

        {/* Right Column: Detailed Session Logs (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recent Session Records
            </h4>
            <span className="text-xs text-[#AAB2BD]">Last 30 Days</span>
          </div>

          <div className="space-y-2.5">
            {RECENT_DATES.map((item, idx) => (
              <Card
                key={idx}
                className="p-4 bg-[#171F2B] border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/10 transition-colors shadow-card"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#101C2C] shrink-0">
                    {item.status === 'Present' && <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />}
                    {item.status === 'Absent' && <XCircle className="w-5 h-5 text-[#EF4444]" />}
                    {item.status === 'Late' && <Clock className="w-5 h-5 text-amber-400" />}
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-white block">{item.session}</span>
                    <span className="text-xs text-[#AAB2BD]">
                      {item.date} • {item.time} • <span className="text-[#FF6B1A] font-semibold">{item.mat}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-0 border-white/5">
                  <Badge
                    variant={item.status === 'Present' ? 'green' : item.status === 'Late' ? 'orange' : 'red'}
                  >
                    {item.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
