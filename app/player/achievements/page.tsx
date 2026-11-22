'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_ACHIEVEMENTS } from '@/data/mock/academyData';
import { Trophy, Award, Medal, Flame } from 'lucide-react';

export default function PlayerAchievementsPage() {
  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            My Honors & Trophies
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Personal awards, tournament medals & academy recognition milestones
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="orange">3 Major Titles</Badge>
          <Badge variant="green">State MVP 2024</Badge>
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_ACHIEVEMENTS.map((ach) => (
          <Card
            key={ach.id}
            glow
            className="p-5 bg-[#171F2B] border-white/5 space-y-4 flex flex-col justify-between group hover:border-amber-500/40 transition-all shadow-card"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 shadow-glowSm group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="orange">{ach.year}</Badge>
                  <span className="text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full">
                    {ach.position}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  {ach.title}
                </h4>
                <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#AAB2BD]">
              <span className="flex items-center gap-1 text-[#FF8A25] font-semibold">
                <Flame className="w-3.5 h-3.5" /> Certified Recognition
              </span>
              <span className="text-white font-mono text-[11px]">#ACH-{ach.id.toUpperCase()}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
