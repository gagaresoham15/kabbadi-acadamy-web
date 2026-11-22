'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Trophy, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { INITIAL_PROGRAMS } from '@/data/mock/academyData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
          {/* Subtle Orange Glow in Background */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B1A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Bold Typography & CTAs */}
              <div className="lg:col-span-6 space-y-6 z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] text-xs font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B1A] animate-pulse" />
                  India&apos;s Elite Kabaddi Training
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                  PLAY <br />
                  <span className="text-[#FF6B1A]">KABADDI.</span> <br />
                  ACHIEVE <br />
                  <span className="text-[#FF6B1A]">GREATNESS.</span>
                </h1>

                <p className="text-lg sm:text-2xl font-bold tracking-wider text-[#AAB2BD]">
                  Train. Compete. Win.
                </p>

                <p className="text-xs sm:text-base text-[#AAB2BD] max-w-xl leading-relaxed mx-auto lg:mx-0">
                  Join Maharashtra&apos;s premier Kabaddi development center. Train under former national champions on Pro-grade synthetic courts with high-tech tactical analysis.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button size="lg" glow className="w-full sm:w-auto px-8 shadow-[0_0_25px_rgba(255,107,26,0.5)]">
                      Join Academy <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/programs" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-7 border-white/20 text-white hover:border-[#FF6B1A] hover:bg-[#FF6B1A]/10">
                      Explore Programs
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Dynamic Action Hero Photo */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#171F2B]">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src="/images/hero-kabaddi.jpg"
                      alt="Intense Kabaddi Match Raid Action"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080D14]/60 via-transparent to-transparent" />
                  </div>

                  {/* Highlight pill inside image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#101C2C]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#FF6B1A] font-bold">Pro Trial Selections</p>
                      <p className="text-xs sm:text-sm font-bold text-white">18+ Players Signed by PKL Franchises</p>
                    </div>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#22C55E] animate-ping shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* STATS BAR (Exact metrics from design: 500+ Students, 50+ Coaches, 15+ Championships, 5+ Years) */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-8 rounded-2xl bg-[#171F2B]/90 border border-white/5 backdrop-blur-md shadow-card">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 flex items-center justify-center text-[#FF6B1A] shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-white">500+</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-medium uppercase tracking-wider">Students Trained</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF8A25]/15 border border-[#FF8A25]/30 flex items-center justify-center text-[#FF8A25] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-white">50+</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-medium uppercase tracking-wider">Expert Coaches</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-white">15+</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-medium uppercase tracking-wider">Championships</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 p-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-white">5+</div>
                  <div className="text-[10px] sm:text-xs text-[#AAB2BD] font-medium uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BUILD YOUR KABADDI SKILLS (4 Program Cards) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="text-xs font-bold tracking-widest uppercase text-[#FF6B1A]">—— OUR PROGRAMS ——</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build Your Kabaddi Skills
            </h2>
            <p className="text-[#AAB2BD] text-sm sm:text-base">
              Professional training programs for all age groups
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_PROGRAMS.map((prog) => (
              <Card key={prog.id} glow className="flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#101C2C]">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171F2B] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#AAB2BD] mt-1 font-medium">{prog.level}</p>
                    <p className="text-xs text-[#AAB2BD]/80 mt-2 line-clamp-2">{prog.description}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">₹{prog.fee} <span className="text-[10px] text-[#AAB2BD] font-normal">/ term</span></span>
                    <Link
                      href={`/programs?id=${prog.id}`}
                      className="text-xs font-bold text-[#FF6B1A] hover:text-[#FF8A25] inline-flex items-center gap-1 group/link"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION: ABOUT KABADDI ACADEMY (Team Huddle + Description + Bullets) */}
        <section className="py-20 bg-[#0B121C] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Team Huddle Photo */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#171F2B]">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/images/team-huddle.jpg"
                      alt="Kabaddi Team Huddle Brotherhood"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#FF6B1A]">—— ABOUT KABADDI ACADEMY ——</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                    More Than Just an Academy
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#AAB2BD] leading-relaxed">
                  We are dedicated to nurturing talent, building champions, and promoting Kabaddi in our community. Through structured coaching regimens, fitness conditioning, and competitive exposure, we shape the next generation of national sports stars.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-white">Expert Coaching Staff</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-white">Modern Training Facilities & Synthetic Mats</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-white">Focus on Discipline, Character & Teamwork</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/about">
                    <Button variant="outline" size="md" className="border-white/20 text-white hover:border-[#FF6B1A] hover:bg-[#FF6B1A]/10">
                      Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CTA BANNER WITH GOLDEN TROPHY */}
        <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#171F2B] via-[#252F3D] to-[#171F2B] border border-orange-500/30 p-5 sm:p-8 md:p-12 shadow-[0_0_35px_rgba(255,107,26,0.2)]">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF6B1A]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
              {/* Trophy Image */}
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                  <Image
                    src="/images/trophy.jpg"
                    alt="Golden Championship Trophy"
                    fill
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(255,180,0,0.4)]"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-6 space-y-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Be a Part of Our Winning Team
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB2BD]">
                  Join Kabaddi Academy and take your game to the next level. Admissions open for junior and senior batches.
                </p>
              </div>

              {/* Action Button */}
              <div className="md:col-span-3 flex justify-center md:justify-end w-full">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" glow className="w-full sm:w-auto px-8 shadow-glow">
                    Register Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
