'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_ACHIEVEMENTS } from '@/data/mock/academyData';
import { Trophy, Award, Medal, Star, Calendar } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-14 bg-[#101C2C]/60 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">Honors & Achievements</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Hall of <span className="text-[#FF6B1A]">Achievements</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              15+ State & National Championships, Best Raider titles, and Pro Kabaddi drafting milestones.
            </p>
          </div>
        </section>

        {/* Trophy Highlights Bar */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1">
              <Trophy className="w-8 h-8 text-[#FF6B1A] mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">15+</div>
              <div className="text-xs text-[#AAB2BD] uppercase tracking-wider">Tournament Cups</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1">
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">42+</div>
              <div className="text-xs text-[#AAB2BD] uppercase tracking-wider">State Medals</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1">
              <Medal className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">18+</div>
              <div className="text-xs text-[#AAB2BD] uppercase tracking-wider">Pro League Drafts</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 text-center space-y-1">
              <Star className="w-8 h-8 text-[#22C55E] mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-[#AAB2BD] uppercase tracking-wider">Passionate Dedication</div>
            </div>
          </div>

          {/* Achievements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_ACHIEVEMENTS.map((ach) => (
              <Card key={ach.id} glow className="flex flex-col group overflow-hidden">
                <div className="relative w-full aspect-[16/10] bg-[#101C2C] overflow-hidden">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={ach.position === 'Winner' ? 'orange' : 'green'}>
                      {ach.position}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171F2B] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#AAB2BD]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" />
                      <span>{ach.year}</span>
                      <span>•</span>
                      <span className="text-[#FF8A25] font-semibold">{ach.tournament}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                      {ach.title}
                    </h3>

                    <p className="text-xs text-[#AAB2BD] leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                      Category: <span className="text-[#FF6B1A]">{ach.category}</span>
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
