'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_PROGRAMS } from '@/data/mock/academyData';
import { Clock, Calendar, Check, ArrowRight, Dumbbell } from 'lucide-react';

export default function PlayerProgramsPage() {
  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Training Programs & Camps
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Explore curriculum, batch upgrades & specialized conditioning camps
          </p>
        </div>
        <Badge variant="orange">Enrolled in Pro Competition</Badge>
      </div>

      {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_PROGRAMS.map((prog) => (
          <Card
            key={prog.id}
            glow
            className="p-4 bg-[#171F2B] border-white/5 space-y-3 flex flex-col justify-between group hover:border-[#FF6B1A]/40 transition-all shadow-card"
          >
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#101C2C]">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5">
                  <Badge variant="orange">{prog.category}</Badge>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-white group-hover:text-[#FF6B1A] transition-colors">
                    {prog.title}
                  </h3>
                  <span className="text-sm font-black text-[#FF6B1A]">₹{prog.fee}</span>
                </div>
                <p className="text-xs text-[#FF8A25] font-semibold mt-0.5">{prog.level}</p>
                <p className="text-xs text-[#AAB2BD] mt-2 line-clamp-2 leading-relaxed">
                  {prog.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#AAB2BD]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" /> {prog.duration}
                </span>
                <span className="font-semibold text-white">Batches Open</span>
              </div>
              <Button size="sm" className="w-full text-xs py-2 shadow-glowSm">
                Program Syllabus & Drills →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
