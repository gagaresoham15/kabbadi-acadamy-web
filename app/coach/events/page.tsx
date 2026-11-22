'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_EVENTS } from '@/data/mock/academyData';
import { Calendar, MapPin, Trophy, Users, ShieldCheck } from 'lucide-react';

export default function CoachEventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Upcoming Tournaments & Trials
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Review competition schedules, squad registrations and coach lineup duties.
        </p>
      </div>

      <div className="space-y-4">
        {INITIAL_EVENTS.map((evt) => (
          <Card key={evt.id} glow className="p-6 bg-[#171F2B] border-white/5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="orange">{evt.category}</Badge>
                  <span className="text-xs text-[#22C55E] font-bold">Prize: {evt.prizePool}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{evt.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={evt.status === 'Upcoming' ? 'orange' : 'green'}>
                  {evt.status}
                </Badge>
              </div>
            </div>

            <p className="text-xs text-[#AAB2BD]">{evt.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#AAB2BD] pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" /> {evt.date} • {evt.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B1A]" /> {evt.location}, {evt.city}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" /> {evt.registeredTeams} Registered Teams
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
