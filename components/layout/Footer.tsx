'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUpRight, Flame, Shield, Trophy, User } from 'lucide-react';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_CMS } from '@/data/mock/academyData';

export function Footer() {
  const [cms] = useAcademyData('cms', INITIAL_CMS);

  return (
    <footer className="bg-[#05090F] border-t border-white/5 pt-16 pb-12 text-[#AAB2BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-2 shadow-glowSm">
                <Flame className="w-6 h-6 fill-white text-white" />
              </div>
              <span className="font-black tracking-wider text-xl text-white font-display uppercase">
                {cms.academyName.split(' ')[0]} <span className="text-[#FF6B1A]">{cms.academyName.split(' ').slice(1).join(' ') || 'ACADEMY'}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#AAB2BD]">
              {cms.heroDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#171F2B] border border-white/5 flex items-center justify-center text-white hover:bg-[#FF6B1A] hover:border-[#FF6B1A] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#171F2B] border border-white/5 flex items-center justify-center text-white hover:bg-[#FF6B1A] hover:border-[#FF6B1A] transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#171F2B] border border-white/5 flex items-center justify-center text-white hover:bg-[#FF6B1A] hover:border-[#FF6B1A] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Training Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs">Training Pathways</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Fundamental U-12 Programme <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Sub-Junior U-16 Programme <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Future Hero U-19 Development <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Pro Group (19+ / Elite PKL) <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  High-Performance S&C Camp <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Portals */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-[#FF6B1A] transition-colors">About Our Academy</Link></li>
              <li><Link href="/coaches" className="hover:text-[#FF6B1A] transition-colors">Expert NIS Coaching Staff</Link></li>
              <li><Link href="/events" className="hover:text-[#FF6B1A] transition-colors">Tournaments & Selection Trials</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FF6B1A] transition-colors">Action Photo & Video Gallery</Link></li>
              <li><Link href="/achievements" className="hover:text-[#FF6B1A] transition-colors">Hall of Achievements & Trophies</Link></li>
              <li className="pt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <Link href="/admin" className="px-2.5 py-1 rounded-md bg-[#FF6B1A]/20 text-[#FF6B1A] border border-[#FF6B1A]/30 flex items-center gap-1 hover:bg-[#FF6B1A] hover:text-white transition-all">
                  <Shield className="w-3 h-3" /> Admin CMS
                </Link>
                <Link href="/coach" className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 hover:bg-amber-500 hover:text-black transition-all">
                  <Trophy className="w-3 h-3" /> Coach
                </Link>
                <Link href="/player" className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1 hover:bg-blue-500 hover:text-white transition-all">
                  <User className="w-3 h-3" /> Player
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs">Campus & Admissions</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{cms.academyAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <a href={`tel:${cms.academyPhone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                  {cms.academyPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                <a href={`mailto:${cms.academyEmail}`} className="hover:text-white font-semibold">
                  {cms.academyEmail}
                </a>
              </div>
              <div className="p-3 rounded-xl bg-[#171F2B] border border-white/5 mt-3">
                <span className="text-[10px] uppercase font-bold text-[#FF6B1A] block">Training Hours</span>
                <span className="text-xs text-white block mt-0.5 font-medium">Morning: 06:00 AM – 09:00 AM</span>
                <span className="text-xs text-white block font-medium">Evening: 04:30 PM – 08:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p>© {new Date().getFullYear()} {cms.academyName}. All rights reserved. High-Performance Kabaddi & Sports Science.</p>
          <div className="flex items-center gap-4 text-[#AAB2BD]">
            <Link href="/admin" className="hover:text-white">Admin Management</Link>
            <span>•</span>
            <Link href="/register" className="hover:text-white">Admission Application</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">Directions & Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
