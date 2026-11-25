'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_CMS } from '@/data/mock/academyData';
import {
  CheckCircle2,
  Shield,
  Target,
  Trophy,
  Users,
  HeartHandshake,
  Zap,
  Activity,
  Dumbbell,
  Award,
  ArrowRight,
  Flame,
} from 'lucide-react';

export default function AboutPage() {
  const [cms] = useAcademyData('cms', INITIAL_CMS);

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col relative">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header with Animated Slide-Down */}
        <section className="relative py-14 bg-[#101C2C]/60 border-b border-white/5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">About Academy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display uppercase">
              About <span className="text-[#FF6B1A]">{cms.academyName}</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Rooted in Indian sporting tradition, elevated with modern sports science, biomechanics, and professional tactical training.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" /> Our Mission & Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display uppercase">
                Revitalizing Grassroots Kabaddi Through Modern Sports Science
              </h2>
              <p className="text-sm sm:text-base text-[#AAB2BD] leading-relaxed">
                Founded with a bold vision to modernize traditional Indian Kabaddi, {cms.academyName} bridges raw grassroots talent with international-level sports science, biomechanics, high-intensity strength & conditioning, and professional tactical preparation.
              </p>
              <p className="text-sm text-[#AAB2BD] leading-relaxed">
                Our curriculum caters to young beginners in our U-12 fundamental programs, develops tactical acumen in U-16 and U-19 squads, and elevates elite athletes directly into Pro Kabaddi League (PKL) franchises and national representation squads.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'National Champions & Master NIS Technical Faculty Leadership',
                  'Dual Surfaces: International Multi-Layer Synthetic Mats & Mud Pit',
                  'Biomechanics Raid Video Analysis & Cryotherapy Recovery Hub',
                  'Full Residential Hostel & Balanced Sports Nutrition Dining',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#171F2B] group hover:shadow-[0_0_30px_rgba(255,107,26,0.25)] transition-all">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/academy-coach-mentor.jpg"
                    alt="Head Coach & Mentors at Garuda Academy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D14]/80 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-[#101C2C] border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#FF6B1A] uppercase font-bold">Leadership</span>
                    <h4 className="text-xs font-bold text-white">Coach Vikramaditya Rane & NIS Faculty</h4>
                  </div>
                  <span className="text-xs font-extrabold text-[#22C55E]">22+ Pro League Drafts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="py-16 bg-[#0E1520] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#FF6B1A]">—— OUR CORE PILLARS ——</p>
              <h2 className="text-3xl font-black text-white mt-2 uppercase font-display">
                The Science of Kabaddi Champions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Explosive Plyometrics',
                  desc: 'Engineered jump and sprint circuits building lightning-fast toe-touch extensions, dubkis, and rapid retreat speeds.',
                  color: 'bg-[#FF6B1A]/15 text-[#FF6B1A]',
                },
                {
                  icon: Shield,
                  title: 'Defensive Chain Chemistry',
                  desc: 'Precision corner and cover sync, timing locks, ankle grasp strength, and super-tackle synergy under pressure.',
                  color: 'bg-blue-500/15 text-blue-400',
                },
                {
                  icon: Activity,
                  title: 'Video Biometrics',
                  desc: 'Frame-by-frame raid breakdown, defensive spacing analysis, opponent tendency scouting, and instant visual feedback.',
                  color: 'bg-amber-500/15 text-amber-400',
                },
                {
                  icon: HeartHandshake,
                  title: 'Disciplined Culture',
                  desc: 'Instilling lifelong athletic habits: vocal canting discipline, punctuality, mutual respect, and sportsmanship.',
                  color: 'bg-green-500/15 text-green-400',
                },
              ].map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 space-y-3 transition-transform"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs text-[#AAB2BD] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-5xl mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider border border-[#FF6B1A]/20">
              <Flame className="w-3.5 h-3.5 animate-pulse" /> Start Your Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
              Ready to Begin Your High-Performance Journey?
            </h2>
            <p className="text-sm text-[#AAB2BD] max-w-xl mx-auto">
              Book a trial practice session or visit our Pune sports campus to experience the training facilities firsthand.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/register">
                  <Button size="lg" glow className="font-black uppercase tracking-wider text-xs">
                    Register for Trials
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white/20 text-white font-bold uppercase tracking-wider text-xs">
                    Directions & Contact
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
