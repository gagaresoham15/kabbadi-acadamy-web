'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_COACHES } from '@/data/mock/academyData';
import { Coach } from '@/types';
import { Award, Users, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CoachesPage() {
  const [coaches] = useAcademyData('coaches', INITIAL_COACHES);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col relative">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-14 bg-[#101C2C]/60 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">Our Coaches</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              High-Performance <span className="text-[#FF6B1A]">Coaching Staff</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Learn from the finest minds in Indian Kabaddi: Asian Games Gold medal trainers, NIS Certified coaches, and Pro Kabaddi tacticians.
            </p>
          </motion.div>
        </section>

        {/* Coaches Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coaches.map((coach, idx) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  glow
                  className="flex flex-col text-center p-6 items-center group transition-all duration-300 bg-[#171F2B] h-full"
                >
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#FF6B1A]/40 mb-4 shadow-[0_0_20px_rgba(255,107,26,0.25)] group-hover:border-[#FF6B1A] group-hover:shadow-[0_0_25px_rgba(255,107,26,0.5)] transition-all">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF8A25] mt-0.5">{coach.role}</p>
                  <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-[#101C2C] text-[#AAB2BD] text-xs font-semibold border border-white/5">
                    {coach.experience} Experience
                  </span>

                  <p className="text-xs text-[#AAB2BD] mt-3 line-clamp-2 leading-relaxed">
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
                    className="w-full mt-4 text-xs font-bold border-white/10 text-white hover:border-[#FF6B1A]"
                  >
                    View Full Profile
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coach Bio Modal */}
        {selectedCoach && (
          <Modal
            isOpen={!!selectedCoach}
            onClose={() => setSelectedCoach(null)}
            title={selectedCoach.name}
            size="md"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#FF6B1A] shrink-0">
                  <Image
                    src={selectedCoach.image}
                    alt={selectedCoach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-black text-white">{selectedCoach.name}</h3>
                  <p className="text-xs font-bold text-[#FF6B1A]">{selectedCoach.role}</p>
                  <p className="text-xs text-[#AAB2BD]">{selectedCoach.experience} Professional Coaching Experience</p>
                  <Badge variant="green" className="mt-1">
                    {selectedCoach.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Specialty & Pedigree</h4>
                <p className="text-xs text-[#FF8A25] font-semibold">{selectedCoach.specialty}</p>
                <p className="text-xs text-[#AAB2BD] leading-relaxed">
                  {selectedCoach.bio ||
                    'Dedicated coach committed to holistic player development, combining technical footwork, biomechanical analysis, and competitive mindset.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                <div className="p-3 rounded-xl bg-[#101C2C] border border-white/5">
                  <span className="text-[10px] text-[#AAB2BD] block uppercase font-bold">Assigned Batches</span>
                  <span className="text-base font-black text-white">{selectedCoach.batchesCount} Batches</span>
                </div>
                <div className="p-3 rounded-xl bg-[#101C2C] border border-white/5">
                  <span className="text-[10px] text-[#AAB2BD] block uppercase font-bold">Athletes Mentored</span>
                  <span className="text-base font-black text-white">{selectedCoach.studentsCount}+ Players</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Coach Office</h4>
                <div className="space-y-1.5 text-xs text-[#AAB2BD]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#FF6B1A]" />
                    <span>{selectedCoach.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#FF6B1A]" />
                    <span>{selectedCoach.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/register" onClick={() => setSelectedCoach(null)}>
                  <Button size="md" glow className="w-full font-bold uppercase tracking-wider text-xs">
                    Apply to Train Under {selectedCoach.name} <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
