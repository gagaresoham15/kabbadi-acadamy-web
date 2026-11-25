'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Trophy,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Zap,
  Activity,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  Dumbbell,
  HeartPulse,
  Home as HomeIcon,
  HelpCircle,
  ChevronRight,
  X,
  Star,
  Bed,
  UtensilsCrossed,
  Layers,
  GraduationCap,
  Timer,
  Video,
  FileCheck2,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useAcademyData } from '@/lib/useAcademyData';
import {
  INITIAL_CMS,
  INITIAL_PROGRAMS,
  INITIAL_COACHES,
  INITIAL_EVENTS,
  INITIAL_FACILITIES,
  INITIAL_ENQUIRIES,
  setStoredData,
  getStoredData,
} from '@/data/mock/academyData';
import { TrainingProgram, Enquiry } from '@/types';

export default function HomePage() {
  const [cms] = useAcademyData('cms', INITIAL_CMS);
  const [programs] = useAcademyData('programs', INITIAL_PROGRAMS);
  const [coaches] = useAcademyData('coaches', INITIAL_COACHES);
  const [events] = useAcademyData('events', INITIAL_EVENTS);
  const [facilities] = useAcademyData('facilities', INITIAL_FACILITIES);

  // Pathway tab selector
  const [activePathway, setActivePathway] = useState<string>('u16');

  // Trial / Admission Modal state
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedProgramForTrial, setSelectedProgramForTrial] = useState<string>('Iron Shield (Cadet Defense & Attack)');
  const [trialForm, setTrialForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    playerRole: 'Raider',
    message: '',
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // FAQ open item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialForm.name || !trialForm.phone) return;

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      name: trialForm.name,
      email: trialForm.email || 'not-provided@student.com',
      phone: trialForm.phone,
      programInterest: `${selectedProgramForTrial} (${trialForm.playerRole}, Age ${trialForm.age || 'N/A'})`,
      message: trialForm.message || 'Trial Session & Admission Booking request.',
      date: new Date().toISOString().split('T')[0],
      status: 'New',
    };

    const existing = getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
    const updated = [newEnquiry, ...existing];
    setStoredData('enquiries', updated);

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setTrialModalOpen(false);
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

  const PATHWAY_DATA = {
    u12: {
      title: 'Warrior Sparks (U-12 Grassroots)',
      tag: 'Grassroots Foundation (Ages 7–12)',
      description: 'Activity-based game introduction focusing on natural movement literacy, agility ladders, breath canting rhythm, and fundamental hand touches.',
      points: [
        'Agility & motor coordination games',
        'Vocal canting discipline & lung capacity',
        'Basic stances, hand touches & side-step escapes',
        'Safe rolling & joint protection habits on synthetic mats',
      ],
      trainingDays: 'Mon, Wed, Fri (4:00 PM - 5:30 PM)',
      surface: 'The Garuda Olympic Synthetic Court',
      badge: 'Grassroots Foundation',
    },
    u16: {
      title: 'Iron Shield (Cadet Defense & Attack)',
      tag: 'Skill Acquisition (Ages 12–16)',
      description: 'Structured tactical skill acquisition: mastering corner ankle locks, thigh grips, running hand touches, turning escapes, and two-man chain defense.',
      points: [
        'Corner ankle hold & dive tackle locks',
        'Toe touches, bonus line raids & escape rolls',
        '2-Man corner-cover chain block mechanics',
        'Systematic warm-up, cool-down & recovery routines',
      ],
      trainingDays: 'Tue, Thu, Sat (5:00 PM - 7:00 PM)',
      surface: 'Olympic Synthetic Mat & Conditioning Mitti Pit',
      badge: 'Core Cadet Competitive',
    },
    u19: {
      title: 'Thunder Strike (Youth & State Squad)',
      tag: 'Tactical Game Awareness (Ages 16–19)',
      description: 'High-tempo match situations: dubki evasion, airborne frog jump clearance, bonus denial strategies, 7-man match simulations, and video analysis.',
      points: [
        'Dubki & airborne frog jumps over low tackles',
        'Bonus line denial & 3-man super tackle situations',
        'Opponent tendency analysis via video review',
        'State-level championship preparation & fitness tests',
      ],
      trainingDays: 'Mon to Sat (5:30 PM - 7:45 PM)',
      surface: 'International Pro Synthetic Mat',
      badge: 'District & State Level',
    },
    pro: {
      title: 'Pro Titans (Elite League Preparatory)',
      tag: 'Professional League Platform (19+ Years)',
      description: 'Intense high-performance training for national league trials, federation cups, and all-India invitationals under Chief Coach Vikramaditya Rane.',
      points: [
        'Professional franchise scouting & trial readiness',
        'Explosive plyometric output & peak sprint acceleration',
        'Pressure match scrimmages & endgame tactics',
        'Targeted sports nutrition & psychological mental toughness',
      ],
      trainingDays: 'Twice Daily (6:00 AM & 6:00 PM)',
      surface: 'Tournament Arena Mat & Spartan High-Tech Gym',
      badge: 'Elite Professional',
    },
  };

  const FAQS = [
    {
      q: 'At what age can an athlete join the academy?',
      a: 'We admit athletes starting from 7 years old in our Warrior Sparks (U-12 Grassroots) batch. We also have dedicated batches for Cadet (U-16), Junior (U-19), and Elite Senior players preparing for national trials.',
    },
    {
      q: 'Do you offer residential hostel and authentic sports nutrition facilities?',
      a: 'Yes! Our campus features an on-site residential athlete village with 24/7 security, air-cooled dormitories, and an athlete dining mess that provides customized high-protein sports diets formulated by sports nutritionists, including fresh cow milk and desi khuraak.',
    },
    {
      q: 'What training surfaces are used at the academy?',
      a: 'We train on dual surfaces: international tournament-grade multi-layer synthetic mats (meeting Pro Kabaddi & Asian Games standards) and an authentic traditional red clay mitti akhada for leg drive and joint hardening.',
    },
    {
      q: 'How does the academy prepare players for professional leagues?',
      a: 'Our Chief Coach Vikramaditya Rane and technical staff have mentored over 22 drafted professional league athletes. We conduct biomechanical raid analysis, trial simulations, and direct scouting showcases.',
    },
    {
      q: 'Can prospective athletes attend a free trial training session before enrolling?',
      a: 'Absolutely! Prospective students can book a free assessment and trial session where our NIS certified coaches evaluate their agility, stamina, canting, and skill category.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col selection:bg-[#FF6B1A] selection:text-white relative">
      {/* Live Scroll Progress Line at top of viewport */}
      <ScrollProgress />

      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION: Authentic Kabaddi Academy Atmosphere */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-white/5">
          {/* Subtle Orange Glow in Background */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B1A]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Column: Bold Academy Typography & Admission CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-5 z-10 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] text-xs font-bold tracking-wider uppercase"
                >
                  <Flame className="w-3.5 h-3.5 fill-[#FF6B1A] animate-pulse" />
                  <span>Admissions & Scouting Trials Open 2025–26</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] font-black tracking-tight text-white leading-[1.12] font-display uppercase"
                >
                  <span className="block whitespace-nowrap">
                    FORGE <span className="text-[#FF6B1A]">CHAMPIONS.</span>
                  </span>
                  <span className="block whitespace-nowrap mt-1 text-white">
                    BORN FOR THE <span className="text-[#FF6B1A]">MAT.</span>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl font-bold tracking-wide text-white/90"
                >
                  Maharashtra&apos;s Premier Residential Kabaddi Training Academy
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xs sm:text-sm lg:text-base text-[#AAB2BD] max-w-xl leading-relaxed mx-auto lg:mx-0"
                >
                  Combining traditional Gurukul discipline with modern sports science: Olympic-grade synthetic mats, authentic red clay akhada, 120-bed residential athlete hostel, pure desi khuraak mess, and NIS master coaching to develop boys & girls (ages 7 to 23) into national champions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1"
                >
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      size="lg"
                      glow
                      onClick={() => {
                        setSelectedProgramForTrial('Iron Shield (Cadet Defense & Attack)');
                        setTrialModalOpen(true);
                      }}
                      className="w-full sm:w-auto px-8 shadow-[0_0_25px_rgba(255,107,26,0.5)] font-black uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                    >
                      Book Free Scouting Trial <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/programs" className="w-full sm:w-auto block">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto px-7 border-white/20 text-white hover:border-[#FF6B1A] hover:bg-[#FF6B1A]/10 font-bold uppercase tracking-wider text-xs sm:text-sm"
                      >
                        Explore Batches & Fees
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* 4 Academy Trust Pillars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#AAB2BD]"
                >
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>Hostel & Mess</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>Dual Mat + Mitti</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>Desi Khuraak</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>NIS Head Coaches</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Dynamic Action Hero Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#171F2B] hover:shadow-[0_0_35px_rgba(255,107,26,0.3)] transition-all duration-500">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src="/images/hero-action-raid.jpg"
                      alt="Garuda Kabaddi Academy Raider Airborne Attack"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080D14]/60 via-transparent to-transparent" />
                  </div>

                  {/* Highlight pill inside image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#101C2C]/95 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#FF6B1A] font-bold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-[#FF6B1A] animate-pulse" /> Pro League Selections
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                        {cms.statPklDrafts} Drafted into Premier Pro Franchises
                      </p>
                    </div>
                    <Link
                      href="/achievements"
                      className="px-3 py-1.5 rounded-lg bg-[#FF6B1A]/20 hover:bg-[#FF6B1A] text-white text-[11px] font-bold transition-all shadow-glowSm shrink-0"
                    >
                      Hall of Fame →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* STATS BAR: Dynamic Counters */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-7 rounded-2xl bg-[#171F2B]/90 border border-white/5 backdrop-blur-md shadow-card"
            >
              <motion.div whileHover={{ y: -4 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 flex items-center justify-center text-[#FF6B1A] shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-black text-white">{cms.statStudents}</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-semibold uppercase tracking-wider">Athletes Trained</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF8A25]/15 border border-[#FF8A25]/30 flex items-center justify-center text-[#FF8A25] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-black text-white">{cms.statCoaches}</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-semibold uppercase tracking-wider">Certified Coaches</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-black text-white">{cms.statTrophies}</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-semibold uppercase tracking-wider">State & National Cups</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-black text-white">{cms.statPklDrafts}</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-semibold uppercase tracking-wider">Pro League Drafts</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEW SECTION: AUTHENTIC ACADEMY LIFE & CAMPUS INFRASTRUCTURE */}
        {/* ========================================================================= */}
        <section id="campus-life" className="py-20 bg-[#0B121C] border-b border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14 space-y-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
                <HomeIcon className="w-3.5 h-3.5" /> Full Residential Sports Campus
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
                World-Class <span className="text-[#FF6B1A]">Academy Life & Infrastructure</span>
              </h2>
              <p className="text-sm sm:text-base text-[#AAB2BD]">
                Engineered for serious athletes: Olympic synthetic arenas, traditional red soil mitti akhada, disciplined residential hostel, and authentic desi khuraak mess.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Dual Arenas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card glow className="bg-[#171F2B] border-white/10 h-full flex flex-col overflow-hidden group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#101C2C]">
                    <Image
                      src="/images/program-basic.jpg"
                      alt="Olympic Synthetic Mat and Red Clay Akhada"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#FF6B1A] uppercase border border-white/10">
                      Dual Arena
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-[#FF6B1A] mb-1">
                        <Layers className="w-4 h-4" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">Mat & Soil Arenas</span>
                      </div>
                      <h3 className="text-base font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                        Olympic Mat + Mitti Akhada
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                        4 official 40mm interlocking tournament mats for rapid raid cuts, paired with a traditional red soil pit (तांबड्या मातीचा आखाडा) infused with camphor & turmeric to harden joints, toes, and grip stamina.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[11px] text-white/90 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>40mm Shock-Absorption Layer</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>Traditional Soil Akhada Pit</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2: Residential Hostel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card glow className="bg-[#171F2B] border-white/10 h-full flex flex-col overflow-hidden group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#101C2C]">
                    <Image
                      src="/images/about-mission.jpg"
                      alt="Garuda Academy Residential Athlete Dormitories"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#FF6B1A] uppercase border border-white/10">
                      120-Bed Hostel
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-[#FF6B1A] mb-1">
                        <Bed className="w-4 h-4" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">Athlete Village</span>
                      </div>
                      <h3 className="text-base font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                        Secure Residential Dorms
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                        120-bed clean, air-cooled dormitories with 24/7 warden supervision, strict 9:30 PM lights-out discipline, study halls with Wi-Fi for academic classes, and laundry services.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[11px] text-white/90 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>24/7 Warden & Security Guards</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>Academic Study & Library Hall</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3: Desi Khuraak Mess */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <Card glow className="bg-[#171F2B] border-white/10 h-full flex flex-col overflow-hidden group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#101C2C]">
                    <Image
                      src="/images/sports-science-gym.jpg"
                      alt="High-Protein Desi Khuraak Mess"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#FF6B1A] uppercase border border-white/10">
                      Nutrition Mess
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-[#FF6B1A] mb-1">
                        <UtensilsCrossed className="w-4 h-4" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">Desi Khuraak</span>
                      </div>
                      <h3 className="text-base font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                        High-Protein Athlete Diet
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                        Traditional power nutrition meets sports science: Fresh pure A2 cow milk twice daily, ground almond-pistachio paste (बदाम खुराक), sprouted grams, boiled eggs/paneer, and seasonal hydration electrolytes.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[11px] text-white/90 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>Fresh A2 Cow Milk & Badam Paste</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>Dietician-Supervised Macronutrients</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 4: Biomechanics Video & Physio Lab */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <Card glow className="bg-[#171F2B] border-white/10 h-full flex flex-col overflow-hidden group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#101C2C]">
                    <Image
                      src="/images/academy-coach-mentor.jpg"
                      alt="Biomechanics Video Analysis and Physio Lab"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#FF6B1A] uppercase border border-white/10">
                      Sports Science
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-[#FF6B1A] mb-1">
                        <Video className="w-4 h-4" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">Tactical Lab</span>
                      </div>
                      <h3 className="text-base font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                        Video Review & Ice Recovery
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                        4K high-speed video capture to scrutinize raiding stride angles, bonus line reach, canting breaths, and tackle reaction speeds, accompanied by ice contrast recovery plunge baths and dedicated physiotherapy.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[11px] text-white/90 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>4K High-Speed Match Play Review</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        <span>Ice Plunge Baths & Sports Physio</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEW SECTION: A DAY IN THE LIFE OF A GARUDA ATHLETE (दैनिक दिनचर्या) */}
        {/* ========================================================================= */}
        <section id="daily-routine" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
              <Timer className="w-3.5 h-3.5" /> Elite Athlete Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
              A Day in the Life of a <span className="text-[#FF6B1A]">Garuda Cadet</span>
            </h2>
            <p className="text-sm sm:text-base text-[#AAB2BD]">
              Discipline builds champions. See the rigorous daily regimen of a residential Kabaddi cadet from 5:15 AM wakeup to lights out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                time: '05:15 AM',
                title: 'Wakeup & Morning Khuraak',
                category: 'Dawn Routine',
                icon: HeartPulse,
                desc: 'Wholesome wakeup call, hydration, herbal ginger decoction, and soaked almond-raisin paste to prime metabolic energy.',
              },
              {
                time: '05:45 AM – 07:45 AM',
                title: 'Akhada & Endurance Drills',
                category: 'Physical Conditioning',
                icon: Activity,
                desc: '5km cross-country trail conditioning, ladder agility footwork, red clay mud wrestling, and canting breath-holding drills.',
              },
              {
                time: '08:00 AM – 09:15 AM',
                title: 'High-Protein Breakfast & Rest',
                category: 'Nutrition & Recovery',
                icon: UtensilsCrossed,
                desc: 'Fresh A2 cow milk, sprouted pulses, boiled eggs / paneer, banana porridge, followed by muscle recovery rest.',
              },
              {
                time: '09:30 AM – 01:30 PM',
                title: 'Formal Academic Schooling',
                category: 'Education & Tactical Study',
                icon: GraduationCap,
                desc: 'Classes at partner CBSE/State board schools or distance education lectures, plus 45 mins tactical video match reviews.',
              },
              {
                time: '04:30 PM – 07:00 PM',
                title: 'Evening Mat Sparring & Tactics',
                category: 'Technical Mat Session',
                icon: Zap,
                desc: 'Olympic synthetic mat training: toe touch accuracy, dubki escapes, corner ankle lock chains, and competitive 7v7 scrimmages.',
              },
              {
                time: '07:30 PM – 09:45 PM',
                title: 'Ice Bath, Dinner & Lights Out',
                category: 'Regeneration & Sleep',
                icon: Bed,
                desc: 'Contrast ice plunge therapy, sports physio mobility check, nourishing hot dinner, and strict lights out at 10:00 PM.',
              },
            ].map((slot, idx) => {
              const Icon = slot.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="p-6 bg-[#171F2B] border-white/10 hover:border-[#FF6B1A]/40 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#FF6B1A]/15 text-[#FF6B1A] font-black text-xs tracking-wider border border-[#FF6B1A]/30">
                          {slot.time}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#AAB2BD]">
                          {slot.category}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-white flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                        <span>{slot.title}</span>
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2.5 leading-relaxed">
                        {slot.desc}
                      </p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-[#AAB2BD]">
                      <span>Mon – Sat Schedule</span>
                      <span className="text-[#FF6B1A] font-bold">100% Supervised</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEW SECTION: 4-STEP ADMISSION & SCOUTING TRIAL ROADMAP (प्रवेश प्रक्रिया) */}
        {/* ========================================================================= */}
        <section id="admissions" className="py-20 bg-[#0B121C] border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14 space-y-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
                <FileCheck2 className="w-3.5 h-3.5" /> Admissions Roadmap 2025–26
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
                How to Join <span className="text-[#FF6B1A]">Garuda Kabaddi Academy</span>
              </h2>
              <p className="text-sm sm:text-base text-[#AAB2BD]">
                A clear, transparent 4-step admission and scouting process for young athletes and parents.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                {
                  step: '01',
                  title: 'Online Application',
                  desc: 'Submit your trial request online or call our admissions helpline (+91 98220 54321) to register the athlete.',
                  action: 'Step 1: Register',
                },
                {
                  step: '02',
                  title: '1-Day Scouting Trial',
                  desc: 'Visit our Pune campus for a comprehensive fitness, canting breath stamina, and on-mat footwork test by NIS coaches.',
                  action: 'Step 2: On-Mat Evaluation',
                },
                {
                  step: '03',
                  title: 'Batch & Scholarship',
                  desc: 'Selection into Day-Scholar or Full Residential Hostel batch, with up to 100% merit scholarships for state talents.',
                  action: 'Step 3: Allotment',
                },
                {
                  step: '04',
                  title: 'Induction & Kit Handover',
                  desc: 'Official Garuda match kit, specialized court shoes, hostel room allocation, and parent orientation by the Chief Coach.',
                  action: 'Step 4: Welcome to Garuda',
                },
              ].map((st, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  <Card className="p-6 bg-[#171F2B] border-white/10 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-[#FF6B1A] font-display">
                          {st.step}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#AAB2BD] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {st.action}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setSelectedProgramForTrial(st.title);
                          setTrialModalOpen(true);
                        }}
                        className="w-full text-xs font-bold text-[#FF6B1A] hover:bg-[#FF6B1A]/10 p-0 justify-start"
                      >
                        Apply for this Step <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROGRESSION PATHWAY: Interactive Grassroots to Pro Navigator */}
        {/* ========================================================================= */}
        <section id="pathway" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
              <Activity className="w-3.5 h-3.5" /> Systematic Player Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
              From Grassroots to <span className="text-[#FF6B1A]">National Glory</span>
            </h2>
            <p className="text-sm sm:text-base text-[#AAB2BD]">
              Age-specific scientific training blocks to minimize injury risk and maximize competitive match intelligence.
            </p>
          </motion.div>

          {/* Pathway Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
            {[
              { id: 'u12', label: 'U-12 Grassroots', icon: Star },
              { id: 'u16', label: 'Cadet U-16', icon: Zap },
              { id: 'u19', label: 'Youth U-19', icon: Trophy },
              { id: 'pro', label: 'Pro Titans (19+)', icon: Flame },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activePathway === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActivePathway(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B1A] text-white shadow-[0_0_20px_rgba(255,107,26,0.4)] scale-105'
                      : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-[#222E3F] border border-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Active Pathway Detail Card */}
          <AnimatePresence mode="wait">
            {(() => {
              const p = PATHWAY_DATA[activePathway as keyof typeof PATHWAY_DATA];
              return (
                <motion.div
                  key={activePathway}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-[#171F2B] border border-white/10 p-6 sm:p-10 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <Badge variant="orange">{p.badge}</Badge>
                        <span className="text-xs text-[#AAB2BD] font-semibold">{p.tag}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white">{p.title}</h3>
                      <p className="text-sm text-[#AAB2BD] leading-relaxed">{p.description}</p>

                      <div className="space-y-3 pt-2">
                        <p className="text-xs uppercase font-bold text-[#FF6B1A] tracking-wider">Curriculum Highlights</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {p.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                              <CheckCircle2 className="w-4 h-4 text-[#FF6B1A] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#AAB2BD]">
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-[#FF6B1A]">Batch Timings</span>
                          <span className="text-white font-semibold">{p.trainingDays}</span>
                        </div>
                        <div className="h-6 w-px bg-white/10 hidden sm:block" />
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-[#FF6B1A]">Training Surface</span>
                          <span className="text-white font-semibold">{p.surface}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                          <Button
                            size="md"
                            glow
                            onClick={() => {
                              setSelectedProgramForTrial(p.title);
                              setTrialModalOpen(true);
                            }}
                            className="font-bold uppercase tracking-wider text-xs"
                          >
                            Book Trial for this Category <ArrowRight className="w-4 h-4 ml-1.5" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-lg group">
                        <Image
                          src={
                            activePathway === 'u12'
                              ? '/images/program-basic.jpg'
                              : activePathway === 'u16'
                              ? '/images/defense-chain-tackle.jpg'
                              : activePathway === 'u19'
                              ? '/images/hero-action-raid.jpg'
                              : '/images/program-tournament.jpg'
                          }
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#171F2B] via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </section>

        {/* ========================================================================= */}
        {/* DYNAMIC PROGRAMS SECTION (Reads from useAcademyData - 100% Manageable) */}
        {/* ========================================================================= */}
        <section id="programs" className="py-20 bg-[#0B121C] border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
            >
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#FF6B1A]">—— TRAINING BATCHES ——</p>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 font-display uppercase">
                  Available Training Batches
                </h2>
                <p className="text-[#AAB2BD] text-sm mt-1">
                  Enrolling new talent for beginner, tactical, and tournament-preparation squads.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link href="/programs">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:border-[#FF6B1A]">
                    All Batch Details & Fees <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {programs.map((prog, idx) => (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card glow className="flex flex-col group transition-all duration-300 bg-[#171F2B] h-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#101C2C]">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold text-[#FF6B1A] border border-white/10 uppercase">
                          {prog.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171F2B] via-transparent to-transparent opacity-90" />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-[#FF6B1A] transition-colors line-clamp-1">
                          {prog.title}
                        </h3>
                        <p className="text-[11px] text-[#FF8A25] mt-0.5 font-semibold">{prog.ageGroup}</p>
                        <p className="text-[11px] text-[#AAB2BD] mt-1.5 line-clamp-2">{prog.description}</p>
                      </div>

                      <div className="pt-2 border-t border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-white">₹{prog.fee} <span className="text-[9px] text-[#AAB2BD] font-normal">/ term</span></span>
                          <span className="text-[10px] text-[#AAB2BD] font-medium">{prog.duration}</span>
                        </div>

                        <Button
                          size="sm"
                          glow
                          onClick={() => {
                            setSelectedProgramForTrial(prog.title);
                            setTrialModalOpen(true);
                          }}
                          className="w-full text-xs font-bold uppercase tracking-wider py-1.5"
                        >
                          Enroll / Trial
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COACHING STAFF: NIS Certified Faculty */}
        {/* ========================================================================= */}
        <section id="coaches" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Elite Mentorship
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
              Learn From <span className="text-[#FF6B1A]">National Champions & Tacticians</span>
            </h2>
            <p className="text-sm sm:text-base text-[#AAB2BD]">
              NIS Patiala Master coaches, Pro Kabaddi veterans, and sports science analysts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coaches.map((coach, idx) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  glow
                  className="flex flex-col text-center p-5 items-center group transition-all duration-300 bg-[#171F2B] h-full"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#FF6B1A]/40 mb-3 shadow-[0_0_15px_rgba(255,107,26,0.3)] group-hover:border-[#FF6B1A] group-hover:shadow-[0_0_20px_rgba(255,107,26,0.5)] transition-all">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-[#FF6B1A] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF6B1A] mt-0.5">{coach.role}</p>
                  <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-[#101C2C] text-[#AAB2BD] text-[10px] font-semibold border border-white/5">
                    {coach.experience} Exp
                  </span>

                  <p className="text-[11px] text-[#AAB2BD] mt-2 line-clamp-2">
                    {coach.specialty}
                  </p>

                  <div className="w-full mt-4 pt-3 border-t border-white/5 flex items-center justify-around text-xs text-[#AAB2BD]">
                    <div>
                      <span className="block font-bold text-white text-xs">{coach.batchesCount}</span>
                      <span className="text-[9px]">Batches</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <div>
                      <span className="block font-bold text-white text-xs">{coach.studentsCount}+</span>
                      <span className="text-[9px]">Athletes</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* UPCOMING MATCHES & SELECTION TRIALS BANNER */}
        {/* ========================================================================= */}
        <section id="tournaments" className="py-16 bg-[#0B121C] border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gradient-to-r from-[#171F2B] via-[#101C2C] to-[#171F2B] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B1A]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-extrabold uppercase tracking-wider border border-red-500/30">
                    <Flame className="w-3.5 h-3.5 animate-pulse" /> Next Major Tournament
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase font-display">
                    {events[0]?.title || 'All-India Garuda Gold Cup 2025'}
                  </h3>
                  <p className="text-sm text-[#AAB2BD] max-w-2xl leading-relaxed">
                    {events[0]?.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-xs text-white pt-2">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Calendar className="w-4 h-4 text-[#FF6B1A]" /> {events[0]?.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold">
                      <Clock className="w-4 h-4 text-[#FF6B1A]" /> {events[0]?.time}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold">
                      <Award className="w-4 h-4 text-amber-400" /> {events[0]?.prizePool}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      size="lg"
                      glow
                      onClick={() => {
                        setSelectedProgramForTrial(events[0]?.title || 'Selection Trials');
                        setTrialModalOpen(true);
                      }}
                      className="w-full font-black uppercase tracking-wider text-xs sm:text-sm py-4 shadow-glow"
                    >
                      Register Squad for Trials
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/events" className="w-full block">
                      <Button variant="outline" size="md" className="w-full border-white/20 text-white hover:border-[#FF6B1A]">
                        View All Tournaments
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* AUTHENTIC PARENT & ATHLETE TESTIMONIALS */}
        {/* ========================================================================= */}
        <section id="testimonials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
              <Star className="w-3.5 h-3.5 fill-[#FF6B1A]" /> Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
              Voices of <span className="text-[#FF6B1A]">Our Athletes & Parents</span>
            </h2>
            <p className="text-sm sm:text-base text-[#AAB2BD]">
              Real testimonials on the discipline, hostel life, desi khuraak, and tournament selections at Garuda Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'The sports science and video review changed my game completely. Coach Vikramaditya analyzed my raid angles on video and corrected my footwork before the state trials. Drafted into my dream professional team!',
                author: 'Rahul Deshmukh',
                role: 'Professional League Raider (Cadet Alumni)',
                initials: 'RD',
                color: 'bg-[#FF6B1A]/20 text-[#FF6B1A]',
              },
              {
                text: 'As a parent sending my 13-year-old from Satara, safety, hostel hygiene, and diet were my main concerns. Garuda Academy’s pure desi khuraak, warden supervision, and study hall give complete peace of mind.',
                author: 'Siddhesh Shinde (Parent)',
                role: 'Father of Cadet Tanmay (U-16 Residential)',
                initials: 'SS',
                color: 'bg-blue-500/20 text-blue-400',
              },
              {
                text: 'Practicing both on the Olympic synthetic mat and the traditional red soil mitti akhada gave me unmatched ankle grip and leg drive. We won the Maharashtra State Youth Championship undefeated!',
                author: 'Suraj Jadhav',
                role: 'Right Corner Defender (U-19 State Gold)',
                initials: 'SJ',
                color: 'bg-[#22C55E]/20 text-[#22C55E]',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#AAB2BD] leading-relaxed italic">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full font-black flex items-center justify-center text-sm ${item.color}`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.author}</h4>
                      <p className="text-[10px] text-[#FF6B1A]">{item.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HIGH-OCTANE ADMISSIONS CTA BANNER */}
        {/* ========================================================================= */}
        <section className="py-16 bg-gradient-to-r from-[#FF6B1A] via-[#E8590C] to-[#C94A00] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-black uppercase tracking-wider backdrop-blur-sm border border-white/20">
                <Flame className="w-3.5 h-3.5 fill-white animate-pulse" /> Admissions Open 2025–26
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase font-display">
                Ready to Join the Academy?
              </h2>
              <p className="text-white/90 text-xs sm:text-base max-w-xl font-medium">
                Book a personalized scouting assessment session. Train on Olympic synthetic mats and clay akhada under NIS master coaches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={() => {
                    setSelectedProgramForTrial('Iron Shield (Cadet Defense & Attack)');
                    setTrialModalOpen(true);
                  }}
                  className="w-full sm:w-auto bg-[#080D14] hover:bg-[#101C2C] text-white font-black uppercase tracking-wider text-xs sm:text-sm px-8 py-4 border border-white/20 shadow-2xl cursor-pointer"
                >
                  Book Free Scouting Trial <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <a
                  href={`tel:${cms.academyPhone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all border border-white/25"
                >
                  <Phone className="w-4 h-4" /> {cms.academyPhone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section id="faq" className="py-20 bg-[#0B121C] border-t border-white/5 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 space-y-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-display">
                Got Questions? We Have Answers.
              </h2>
            </motion.div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="rounded-2xl bg-[#171F2B] border border-white/5 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-[#FF6B1A] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`w-5 h-5 text-[#FF6B1A] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#AAB2BD] leading-relaxed border-t border-white/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* ADMISSION & TRIAL BOOKING MODAL WITH SPRING ANIMATION */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {trialModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#101C2C] border border-[#FF6B1A]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,107,26,0.3)]"
            >
              <button
                onClick={() => setTrialModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#171F2B] text-[#AAB2BD] hover:text-white border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 mb-6">
                <span className="text-[10px] uppercase font-black text-[#FF6B1A] tracking-wider block">
                  Direct Academy Admission Form
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                  Book Free Trial Session
                </h3>
                <p className="text-xs text-[#AAB2BD]">
                  Applying for: <span className="text-white font-bold">{selectedProgramForTrial}</span>
                </p>
              </div>

              {submittedSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received!</h4>
                  <p className="text-xs text-[#AAB2BD] max-w-xs mx-auto">
                    Your trial request has been submitted to the academy management. Our admissions coach will call you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTrialSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                      Athlete Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanmay Patil"
                      value={trialForm.name}
                      onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                      className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={trialForm.phone}
                        onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                        className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="athlete@gmail.com"
                        value={trialForm.email}
                        onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                        className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                        Athlete Age
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 15"
                        value={trialForm.age}
                        onChange={(e) => setTrialForm({ ...trialForm, age: e.target.value })}
                        className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                        Preferred Position
                      </label>
                      <select
                        value={trialForm.playerRole}
                        onChange={(e) => setTrialForm({ ...trialForm, playerRole: e.target.value })}
                        className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A]"
                      >
                        <option value="Raider">Raider (Offense)</option>
                        <option value="Corner Defender">Corner Defender (Ankle Hold)</option>
                        <option value="Cover Defender">Cover Defender (Chain/Dash)</option>
                        <option value="All Rounder">All Rounder</option>
                        <option value="Beginner / Open">Beginner / Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#AAB2BD] mb-1">
                      Any Message / Hostel Requirement
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Inquiring about outstation hostel boarding and morning trial slots."
                      value={trialForm.message}
                      onChange={(e) => setTrialForm({ ...trialForm, message: e.target.value })}
                      className="w-full bg-[#171F2B] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    glow
                    className="w-full font-black uppercase tracking-wider text-xs py-3.5 shadow-glow cursor-pointer"
                  >
                    Confirm Free Trial Request
                  </Button>

                  <p className="text-[10px] text-center text-[#AAB2BD]">
                    Direct Enquiry Helpline: <span className="text-white font-bold">{cms.academyPhone}</span>
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom-to-Top Button */}
      <ScrollToTop />

      <Footer />
    </div>
  );
}
