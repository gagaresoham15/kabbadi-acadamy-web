'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { Save, Globe, Sparkles } from 'lucide-react';

export default function AdminCmsPage() {
  const { showToast } = useToast();

  const [cmsContent, setCmsContent] = useState({
    heroHeadline: 'PLAY KABADDI. ACHIEVE GREATNESS.',
    heroSubhead: 'Train. Compete. Win.',
    heroDescription: 'Join Maharashtra\'s premier Kabaddi development center. Train under former national champions on Pro-grade synthetic courts with high-tech tactical analysis.',
    announcementTicker: 'Admissions Open for Winter Pro Warriors 2025 • Tryouts on 10 Nov at Nashik Stadium',
    academyPhone: '+91 98200 12345',
    academyEmail: 'contact@kabaddiacademy.in',
    academyAddress: 'Balewadi Sports Complex, Baner Road, Pune, Maharashtra 411045',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Website CMS content updated and published live!', 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Website CMS & Content Editor
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Update landing page headlines, hero banners, ticker alerts and published contact details.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Sparkles className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Homepage Hero Section</h3>
          </div>

          <Input
            label="Hero Main Headline"
            value={cmsContent.heroHeadline}
            onChange={(e) => setCmsContent({ ...cmsContent, heroHeadline: e.target.value })}
          />

          <Input
            label="Hero Tagline / Subtitle"
            value={cmsContent.heroSubhead}
            onChange={(e) => setCmsContent({ ...cmsContent, heroSubhead: e.target.value })}
          />

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
              Hero Introduction Paragraph
            </label>
            <textarea
              rows={3}
              value={cmsContent.heroDescription}
              onChange={(e) => setCmsContent({ ...cmsContent, heroDescription: e.target.value })}
              className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A]"
            />
          </div>
        </Card>

        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Globe className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Global Ticker & Contact Info</h3>
          </div>

          <Input
            label="Emergency / News Ticker Bar"
            value={cmsContent.announcementTicker}
            onChange={(e) => setCmsContent({ ...cmsContent, announcementTicker: e.target.value })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Public Contact Phone"
              value={cmsContent.academyPhone}
              onChange={(e) => setCmsContent({ ...cmsContent, academyPhone: e.target.value })}
            />
            <Input
              label="Public Email"
              value={cmsContent.academyEmail}
              onChange={(e) => setCmsContent({ ...cmsContent, academyEmail: e.target.value })}
            />
          </div>

          <Input
            label="Physical Arena Address"
            value={cmsContent.academyAddress}
            onChange={(e) => setCmsContent({ ...cmsContent, academyAddress: e.target.value })}
          />
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" glow className="px-8">
            <Save className="w-4 h-4 mr-2" /> Save & Publish Live
          </Button>
        </div>
      </form>
    </div>
  );
}
