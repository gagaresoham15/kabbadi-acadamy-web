'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useAcademyData } from '@/lib/useAcademyData';
import {
  INITIAL_PROGRAMS,
  INITIAL_ENQUIRIES,
  setStoredData,
  getStoredData,
} from '@/data/mock/academyData';
import { TrainingProgram, Enquiry } from '@/types';
import { Clock, Calendar, Check, ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Beginner', 'Advanced', 'Fitness', 'Competition'] as const;

export default function ProgramsPage() {
  const [programs] = useAcademyData('programs', INITIAL_PROGRAMS);
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  // Trial booking state inside details modal
  const [trialForm, setTrialForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    playerRole: 'Raider',
    message: '',
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const filtered =
    selectedCat === 'All'
      ? programs
      : programs.filter((p) => p.category.toLowerCase() === selectedCat.toLowerCase());

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialForm.name || !trialForm.phone || !selectedProgram) return;

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      name: trialForm.name,
      email: trialForm.email || 'not-provided@student.com',
      phone: trialForm.phone,
      programInterest: `${selectedProgram.title} (${trialForm.playerRole}, Age ${trialForm.age || 'N/A'})`,
      message: trialForm.message || `Admission trial booking for ${selectedProgram.title}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New',
    };

    const existing = getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
    setStoredData('enquiries', [newEnquiry, ...existing]);

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setSelectedProgram(null);
      setTrialForm({
        name: '',
        phone: '',
        email: '',
        age: '',
        playerRole: 'Raider',
        message: '',
      });
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col relative">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="py-14 bg-[#101C2C]/60 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#FF6B1A] font-semibold">Training Programs</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                Training <span className="text-[#FF6B1A]">Programs & Pathways</span>
              </h1>
              <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
                From foundational grassroots movement for U-12 to elite high-performance trial preparation for Pro Kabaddi League aspirants.
              </p>
            </motion.div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2.5 mt-6 sm:mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCat === cat;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                        : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-[#252F3D] border border-white/5'
                    }`}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((prog, idx) => (
                <motion.div
                  key={prog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    glow
                    className="flex flex-col group transition-all duration-300 bg-[#171F2B] h-full"
                  >
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
                            <span>{prog.ageGroup}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-[#AAB2BD] block">Fee Structure</span>
                            <span className="text-lg font-black text-white">₹{prog.fee} <span className="text-xs text-[#AAB2BD] font-normal">/ term</span></span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedProgram(prog)}
                            className="text-xs font-bold border-white/10 text-white hover:border-[#FF6B1A]"
                          >
                            Details
                          </Button>
                          <Button
                            size="sm"
                            glow
                            onClick={() => setSelectedProgram(prog)}
                            className="text-xs font-bold uppercase tracking-wider"
                          >
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Program Details & Instant Enrollment Modal */}
      {selectedProgram && (
        <Modal
          isOpen={!!selectedProgram}
          onClose={() => {
            setSelectedProgram(null);
            setSubmittedSuccess(false);
          }}
          title={selectedProgram.title}
          size="lg"
        >
          <div className="space-y-6">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#101C2C]">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge variant="orange">{selectedProgram.category}</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B1A]">
                  {selectedProgram.level} • {selectedProgram.ageGroup}
                </span>
                <span className="text-xl font-black text-white">₹{selectedProgram.fee}</span>
              </div>
              <p className="text-xs text-[#AAB2BD] leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">What You Will Learn</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProgram.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#AAB2BD]">
                    <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#101C2C] border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#AAB2BD]">Batch Schedule</span>
              <p className="text-xs font-semibold text-white">{selectedProgram.schedule}</p>
            </div>

            {/* Quick Trial Form */}
            {submittedSuccess ? (
              <div className="py-4 text-center space-y-2 bg-[#22C55E]/10 rounded-2xl border border-[#22C55E]/30 p-4">
                <CheckCircle2 className="w-8 h-8 text-[#22C55E] mx-auto" />
                <p className="text-sm font-bold text-white">Enrollment Request Received!</p>
                <p className="text-xs text-[#AAB2BD]">
                  Our academy administration has received your application. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B1A]" /> Book Free Trial / Apply for this Batch
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Athlete Name *"
                    value={trialForm.name}
                    onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                    className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number *"
                    value={trialForm.phone}
                    onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                    className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                  />
                </div>

                <Button type="submit" size="md" glow className="w-full font-bold uppercase tracking-wider text-xs">
                  Submit Trial Booking Application
                </Button>
              </form>
            )}
          </div>
        </Modal>
      )}

      <ScrollToTop />
      <Footer />
    </div>
  );
}
