'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/Toast';
import { INITIAL_EVENTS } from '@/data/mock/academyData';
import { Trophy, Calendar, MapPin, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export default function PlayerTournamentsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Tournaments & Selection Trials
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Register your squad, check fixtures and arena schedules
          </p>
        </div>
        <Badge variant="green">Open for Submissions</Badge>
      </div>

      {/* Responsive Grid: 1 col on phone, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_EVENTS.map((evt) => (
          <Card
            key={evt.id}
            glow
            className="p-5 bg-[#171F2B] border-white/5 space-y-4 flex flex-col justify-between group hover:border-[#FF6B1A]/40 transition-all shadow-card"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="orange">{evt.category}</Badge>
                <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-0.5 rounded-full">
                  {evt.prizePool}
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#FF6B1A] transition-colors">
                  {evt.title}
                </h3>
                <p className="text-xs text-[#AAB2BD] line-clamp-2 mt-1 leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#AAB2BD] pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" />
                  <span className="font-semibold text-white">{evt.date} • {evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B1A]" />
                  <span>{evt.location}, {evt.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>Weight Category: Under 75kg</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                size="sm"
                glow
                onClick={() =>
                  showToast(`Squad registered for ${evt.title}! Confirmation sent to coach.`, 'success')
                }
                className="w-full text-xs shadow-glowSm"
              >
                Register Squad →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
