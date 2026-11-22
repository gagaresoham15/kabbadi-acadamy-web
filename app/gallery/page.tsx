'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { INITIAL_GALLERY } from '@/data/mock/academyData';
import { GalleryItem } from '@/types';
import { Eye, Calendar } from 'lucide-react';

const CATEGORIES = ['All', 'Matches', 'Training', 'Celebration'] as const;

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const filtered = selectedCat === 'All'
    ? INITIAL_GALLERY
    : INITIAL_GALLERY.filter((g) => g.category.toLowerCase() === selectedCat.toLowerCase());

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
              <span className="text-[#FF6B1A] font-semibold">Academy Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Action <span className="text-[#FF6B1A]">Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Glimpses of high-octane raiding, synchronized tackles, grueling conditioning camps, and gold trophy triumphs.
            </p>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCat === cat
                      ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                      : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-[#252F3D] border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <Card
                key={item.id}
                glow
                onClick={() => setPreviewItem(item)}
                className="group cursor-pointer overflow-hidden border border-white/5"
              >
                <div className="relative w-full aspect-[4/3] bg-[#101C2C] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 bg-[#FF6B1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#101C2C]/90 text-[#FF6B1A] flex items-center justify-center backdrop-blur-md shadow-glow">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B1A] bg-[#080D14]/80 px-2.5 py-1 rounded-md border border-white/10">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-2 group-hover:text-[#FF6B1A] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {previewItem && (
          <Modal
            isOpen={!!previewItem}
            onClose={() => setPreviewItem(null)}
            title={previewItem.title}
            subtitle={previewItem.category}
            maxWidth="xl"
          >
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black">
                <Image
                  src={previewItem.image}
                  alt={previewItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#AAB2BD] pt-2">
                <span>Category: <strong className="text-white">{previewItem.category}</strong></span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" /> {previewItem.date}
                </span>
              </div>
            </div>
          </Modal>
        )}
      </main>

      <Footer />
    </div>
  );
}
