'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Users, Calendar, AlertCircle } from 'lucide-react';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function CoachSchedulePage() {
  const [activeDay, setActiveDay] = useState('Monday');

  const SCHEDULE_BY_DAY: Record<string, Array<{ time: string; title: string; mat: string; batch: string; focus: string }>> = {
    Monday: [
      { time: '6:30 AM - 8:00 AM', title: 'Foundational Footwork & Warmup', mat: 'Synthetic Mat 1', batch: 'Morning Juniors', focus: 'Toe touch drills and ankle stability' },
      { time: '5:30 PM - 7:30 PM', title: 'Defensive Chain & Corner Hold', mat: 'Synthetic Mat 2', batch: 'Rising Stars', focus: 'Right corner thigh catch coordination' },
      { time: '8:00 PM - 9:30 PM', title: 'Pro Match Scrimmages', mat: 'Main Court', batch: 'Elite Pro Warriors', focus: 'Pressure 3rd raid do-or-die scenarios' },
    ],
    Tuesday: [
      { time: '7:00 AM - 8:30 AM', title: 'Agility Ladders & Core Circuit', mat: 'Fitness Gym Hall', batch: 'Stamina Core', focus: 'Explosive jump plyometrics' },
      { time: '5:30 PM - 7:30 PM', title: 'Bonus Line Cross & Escape Speed', mat: 'Synthetic Mat 1', batch: 'Rising Stars', focus: 'Dubki under diving chain' },
    ],
    Wednesday: [
      { time: '6:30 AM - 8:00 AM', title: 'Junior Match Simulation', mat: 'Synthetic Mat 1', batch: 'Morning Juniors', focus: 'Line rules, referee signals, lobby awareness' },
      { time: '6:00 PM - 8:30 PM', title: 'Full Squad Tactical Video Analysis', mat: 'AV Briefing Room', batch: 'Pro Warriors', focus: 'Opponent raid pattern breakdowns' },
    ],
    Thursday: [
      { time: '7:00 AM - 8:30 AM', title: 'Leg Power & Sled Pushes', mat: 'Fitness Gym Hall', batch: 'Stamina Core', focus: 'Lower body hyper-explosiveness' },
      { time: '5:30 PM - 7:30 PM', title: 'Chain Formation Lock Drills', mat: 'Synthetic Mat 2', batch: 'Rising Stars', focus: 'Cover-corner synchronization' },
    ],
    Friday: [
      { time: '6:30 AM - 8:00 AM', title: 'Junior Skills & Canting Endurance', mat: 'Synthetic Mat 1', batch: 'Morning Juniors', focus: 'Continuous canting breath control' },
      { time: '5:30 PM - 8:00 PM', title: 'Inter-Batch Mock Championship', mat: 'Main Court', batch: 'Rising Stars vs Pro Warriors', focus: 'Full 40-minute regulation match' },
    ],
    Saturday: [
      { time: '7:30 AM - 10:00 AM', title: 'Special State Selection Trials', mat: 'Main Arena', batch: 'All Trial Aspirants', focus: 'Scouting evaluation & weigh-in' },
    ],
  };

  const currentSessions = SCHEDULE_BY_DAY[activeDay] || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Weekly Training Schedule
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Court timetable, batch assignments, drill themes and mat allocations.
        </p>
      </div>

      {/* Days Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {WEEKDAYS.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeDay === day
                ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-[#252F3D]'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Session Cards */}
      <div className="space-y-4">
        {currentSessions.map((session, idx) => (
          <Card key={idx} glow className="p-6 bg-[#171F2B] border-white/5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#FF6B1A]/20 text-[#FF6B1A] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{session.title}</h3>
                  <span className="text-xs text-[#FF8A25] font-semibold">{session.batch}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#AAB2BD]">
                <span className="flex items-center gap-1.5 bg-[#101C2C] px-3 py-1.5 rounded-full border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" /> {session.time}
                </span>
                <span className="flex items-center gap-1.5 bg-[#101C2C] px-3 py-1.5 rounded-full border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> {session.mat}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#AAB2BD] bg-[#101C2C] p-3 rounded-xl border border-white/5">
              <strong className="text-white">Drill Focus:</strong> {session.focus}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
