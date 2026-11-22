'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_PROGRAMS } from '@/data/mock/academyData';
import { TrainingProgram } from '@/types';
import { Clock, Calendar, Check, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Beginner', 'Advanced', 'Fitness', 'Competition'] as const;

export default function ProgramsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  const filtered = selectedCat === 'All'
    ? INITIAL_PROGRAMS
    : INITIAL_PROGRAMS.filter((p) => p.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="py-14 bg-[#101C2C]/60 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">Training Programs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Training <span className="text-[#FF6B1A]">Programs</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Choose the right program for your growth. From basic rules to high-level Pro Kabaddi tournament preparations.
            </p>

            {/* Filter Pills (Smooth scroll on mobile, wrap on desktop) */}
            <div className="flex items-center gap-2.5 mt-6 sm:mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                        : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-[#252F3D] border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((prog) => (
              <Card key={prog.id} glow className="flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#101C2C]">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="orange">{prog.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171F2B] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#FF8A25] font-semibold mt-0.5">{prog.level}</p>
                    <p className="text-xs text-[#AAB2BD] mt-2 line-clamp-3 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs text-[#AAB2BD]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>{prog.schedule}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-base font-extrabold text-white">₹{prog.fee}</span>
                      <span className="text-[10px] text-[#AAB2BD]"> / term</span>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => setSelectedProgram(prog)}
                      className="text-xs px-4"
                    >
                      View More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Details Modal */}
        {selectedProgram && (
          <Modal
            isOpen={!!selectedProgram}
            onClose={() => setSelectedProgram(null)}
            title={selectedProgram.title}
            subtitle={selectedProgram.level}
            maxWidth="lg"
          >
            <div className="space-y-5">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AAB2BD]">Description</h4>
                <p className="text-sm text-white mt-1 leading-relaxed">{selectedProgram.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AAB2BD] mb-2">Key Training Modules</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white bg-[#101C2C] p-2.5 rounded-lg border border-white/5">
                      <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#101C2C] border border-white/5 text-xs">
                <div>
                  <span className="text-[#AAB2BD] block">Duration</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{selectedProgram.duration}</span>
                </div>
                <div>
                  <span className="text-[#AAB2BD] block">Eligibility Age</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{selectedProgram.ageGroup}</span>
                </div>
                <div>
                  <span className="text-[#AAB2BD] block">Schedule Timings</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{selectedProgram.schedule}</span>
                </div>
                <div>
                  <span className="text-[#AAB2BD] block">Fee Structure</span>
                  <span className="text-sm font-extrabold text-[#FF6B1A] mt-0.5 block">₹{selectedProgram.fee} / term</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button variant="ghost" size="md" onClick={() => setSelectedProgram(null)}>
                  Close
                </Button>
                <Link href={`/register?program=${selectedProgram.id}`}>
                  <Button size="md" glow>
                    Enroll in This Program <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </main>

      <Footer />
    </div>
  );
}
