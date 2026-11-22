'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { INITIAL_COACHES } from '@/data/mock/academyData';
import { Coach } from '@/types';
import { Award, Users, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CoachesPage() {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

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
              <span className="text-[#FF6B1A] font-semibold">Our Coaches</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Our <span className="text-[#FF6B1A]">Coaches</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Learn from the best in the game. Experienced mentors, former national athletes, and Pro Kabaddi tacticians.
            </p>
          </div>
        </section>

        {/* Coaches Grid (Matching Figma layout) */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_COACHES.map((coach) => (
              <Card
                key={coach.id}
                glow
                className="flex flex-col text-center p-6 items-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#FF6B1A]/40 mb-4 shadow-[0_0_20px_rgba(255,107,26,0.25)] group-hover:border-[#FF6B1A] transition-colors">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                  {coach.name}
                </h3>
                <p className="text-xs font-semibold text-[#FF8A25] mt-0.5">{coach.role}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#101C2C] text-[#AAB2BD] text-xs font-medium border border-white/5">
                  {coach.experience} Experience
                </span>

                <p className="text-xs text-[#AAB2BD] mt-3 line-clamp-2">
                  {coach.specialty}
                </p>

                <div className="w-full mt-5 pt-4 border-t border-white/5 flex items-center justify-around text-xs text-[#AAB2BD]">
                  <div>
                    <span className="block font-bold text-white">{coach.batchesCount}</span>
                    <span className="text-[10px]">Batches</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div>
                    <span className="block font-bold text-white">{coach.studentsCount}+</span>
                    <span className="text-[10px]">Athletes</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedCoach(coach)}
                  className="w-full mt-4 text-xs"
                >
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Coach Bio Modal */}
        {selectedCoach && (
          <Modal
            isOpen={!!selectedCoach}
            onClose={() => setSelectedCoach(null)}
            title={selectedCoach.name}
            subtitle={selectedCoach.role}
            maxWidth="md"
          >
            <div className="space-y-4 text-center">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[#FF6B1A]">
                <Image
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#FF6B1A]">{selectedCoach.specialty}</p>
                <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed text-left bg-[#101C2C] p-4 rounded-xl border border-white/5">
                  {selectedCoach.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left text-xs bg-[#101C2C] p-4 rounded-xl border border-white/5">
                <div>
                  <span className="text-[#AAB2BD]">Phone</span>
                  <p className="font-semibold text-white mt-0.5">{selectedCoach.phone}</p>
                </div>
                <div>
                  <span className="text-[#AAB2BD]">Email</span>
                  <p className="font-semibold text-white mt-0.5 truncate">{selectedCoach.email}</p>
                </div>
                <div>
                  <span className="text-[#AAB2BD]">Batches Mentored</span>
                  <p className="font-semibold text-white mt-0.5">{selectedCoach.batchesCount} Batches</p>
                </div>
                <div>
                  <span className="text-[#AAB2BD]">Students Trained</span>
                  <p className="font-semibold text-white mt-0.5">{selectedCoach.studentsCount}+ Players</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Button size="sm" onClick={() => setSelectedCoach(null)}>
                  Close
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </main>

      <Footer />
    </div>
  );
}
