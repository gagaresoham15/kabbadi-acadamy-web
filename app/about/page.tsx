'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Shield, Target, Trophy, Users, HeartHandshake, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="relative py-14 bg-[#101C2C]/60 border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">About Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              About <span className="text-[#FF6B1A]">Our Academy</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Rooted in Indian sporting tradition, elevated with modern sports science, conditioning, and professional tactical training.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" /> Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                To promote Kabaddi, develop young talent and build a strong sports community.
              </h2>
              <p className="text-sm sm:text-base text-[#AAB2BD] leading-relaxed">
                Founded with a dream to revive and elevate our indigenous sport to global standards, Kabaddi Academy provides grassroot enthusiasts and elite athletes with international-standard synthetic mats, professional NIS-certified coaches, and modern fitness regimes.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Professional NIS-Certified Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Modern Infrastructure & International Standard Mats</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Comprehensive Player Development (Tactical, Physical & Mental)</span>
                </div>
              </div>
            </div>

            {/* Team Image from figma */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#171F2B]">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/about-mission.jpg"
                    alt="Kabaddi Academy Training Session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D14]/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / Values */}
        <section className="py-16 bg-[#0E1520] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-[#FF6B1A]">—— OUR CORE VALUES ——</p>
              <h2 className="text-3xl font-extrabold text-white mt-2">Why Athletes Choose Our Academy</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Explosive Agility</h3>
                <p className="text-xs text-[#AAB2BD] leading-relaxed">
                  Tailored plyometric regimens designed to build lightning-fast footwork, quick recovery lunges, and rapid retreat speeds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Defensive Synergy</h3>
                <p className="text-xs text-[#AAB2BD] leading-relaxed">
                  Precision chain tactics, corner-cover communication, thigh grip timing, and synchronized defensive locks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Championship Mindset</h3>
                <p className="text-xs text-[#AAB2BD] leading-relaxed">
                  Competitive psychology and pressure situation drills ensuring peak composure under high-stakes tournament tension.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171F2B] border border-white/5 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Sportsmanship</h3>
                <p className="text-xs text-[#AAB2BD] leading-relaxed">
                  Instilling lifelong values of humility, mutual respect for referees and rivals, and unwavering team unity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Ready to begin your Kabaddi journey?</h2>
          <p className="text-sm text-[#AAB2BD] max-w-xl mx-auto">
            Book a trial practice session or enroll directly into our upcoming batches.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" glow>Register for Trials</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
