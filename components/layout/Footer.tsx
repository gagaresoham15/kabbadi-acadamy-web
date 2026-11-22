'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#05090F] border-t border-white/5 pt-16 pb-12 text-[#AAB2BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center p-2 shadow-glowSm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <span className="font-extrabold tracking-wider text-xl text-white font-display">
                KABADDI <span className="text-[#FF6B1A]">ACADEMY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#AAB2BD]">
              Dedicated to nurturing premier kabaddi athletes through international standard synthetic mats, pro coaching staff, and modern tactical development.
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
            <h4 className="text-white font-bold text-base tracking-wide">Training Programs</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Basic Training (Under 14 & 16) <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Advanced Pro Raiding & Tackling <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Athletic Stamina & Core Fitness <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FF6B1A] transition-colors flex items-center justify-between">
                  Pro Kabaddi Trials & Tournament Prep <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Portals */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-[#FF6B1A] transition-colors">About Our Academy</Link></li>
              <li><Link href="/coaches" className="hover:text-[#FF6B1A] transition-colors">Expert Coaching Staff</Link></li>
              <li><Link href="/events" className="hover:text-[#FF6B1A] transition-colors">Tournaments & Trials</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FF6B1A] transition-colors">Photo & Video Gallery</Link></li>
              <li><Link href="/achievements" className="hover:text-[#FF6B1A] transition-colors">Trophies & Honors</Link></li>
              <li className="pt-2 flex gap-4 text-xs font-semibold">
                <Link href="/admin" className="text-[#FF6B1A] hover:underline">Admin Panel</Link>
                <Link href="/coach" className="text-orange-400 hover:underline">Coach Panel</Link>
                <Link href="/player" className="text-blue-400 hover:underline">Player Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                <span>Balewadi Sports Complex, Baner Road, Pune, Maharashtra 411045</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B1A] shrink-0" />
                <span>+91 98200 12345 / +91 98200 67890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B1A] shrink-0" />
                <span>contact@kabaddiacademy.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AAB2BD]/60 gap-4">
          <p>© {new Date().getFullYear()} KABADDI ACADEMY. All rights reserved.</p>
          <p className="tracking-wider">TAGLINE: <span className="text-white font-medium">TRAIN HARD. PLAY SMART. WIN TOGETHER.</span></p>
        </div>
      </div>
    </footer>
  );
}
