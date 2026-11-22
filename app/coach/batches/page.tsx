'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_BATCHES } from '@/data/mock/academyData';
import { Users, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CoachBatchesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          My Assigned Training Batches
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Overview of cohorts currently assigned to Head Coach Rohit Sharma.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INITIAL_BATCHES.map((batch) => (
          <Card key={batch.id} glow className="p-6 bg-[#171F2B] border-white/5 space-y-5">
            <div className="flex items-center justify-between">
              <Badge variant="orange">{batch.programTitle}</Badge>
              <Badge variant={batch.status === 'Ongoing' ? 'green' : 'muted'}>{batch.status}</Badge>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{batch.name}</h3>
              <p className="text-xs text-[#AAB2BD] mt-1">Lead Mentor: Rohit Sharma</p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#101C2C] rounded-xl border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-[#AAB2BD]">
                <Clock className="w-4 h-4 text-[#FF6B1A]" />
                <span>{batch.timings}</span>
              </div>
              <div className="flex items-center gap-2 text-[#AAB2BD]">
                <Users className="w-4 h-4 text-[#FF6B1A]" />
                <span>{batch.enrolledCount} / {batch.maxCapacity} Enrolled</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/5">
              <Link href="/coach/attendance" className="text-xs text-[#FF6B1A] font-bold hover:underline">
                Mark Attendance →
              </Link>
              <Link href="/coach/players">
                <Button size="sm" variant="outline">
                  View Squad Roster
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
