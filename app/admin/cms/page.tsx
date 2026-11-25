'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_CMS } from '@/data/mock/academyData';
import { CMSData } from '@/types';
import { Save, Globe, Sparkles, Trophy, RotateCcw, ExternalLink, Flame } from 'lucide-react';
import Link from 'next/link';

export default function AdminCmsPage() {
  const { showToast } = useToast();
  const [cms, setCms, resetCms] = useAcademyData<CMSData>('cms', INITIAL_CMS);
  const [form, setForm] = useState<CMSData>(INITIAL_CMS);

  useEffect(() => {
    setForm(cms);
  }, [cms]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCms(form);
    showToast('Website CMS updated successfully! Live website refreshed instantly.', 'success');
  };

  const handleReset = () => {
    if (confirm('Reset CMS settings to default Garuda Academy values?')) {
      resetCms();
      setForm(INITIAL_CMS);
      showToast('CMS settings restored to official defaults.', 'info');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Website CMS & Content Studio
          </h1>
          <p className="text-xs sm:text-sm text-[#AAB2BD]">
            Edit landing page headlines, announcement tickers, contact numbers, and statistics in real time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="border-white/10 text-[#AAB2BD] hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Reset Defaults
          </Button>

          <Link href="/" target="_blank">
            <Button size="sm" variant="outline" className="border-white/10 text-white hover:border-[#FF6B1A]">
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> View Live Site
            </Button>
          </Link>
        </div>
      </div>

      {/* Live Announcement Ticker Preview */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-[#FF6B1A] to-[#C92A2A] text-white text-xs font-semibold flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 overflow-hidden flex-1 mr-3">
          <span className="inline-flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider shrink-0">
            <Flame className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            Live Ticker Preview
          </span>
          <p className="truncate font-medium">{form.announcementTicker}</p>
        </div>
        <span className="text-[11px] font-bold shrink-0">{form.academyPhone}</span>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Academy Branding Card */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Globe className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Academy Identity & Branding
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Academy Name (Header & Footer)"
              value={form.academyName}
              onChange={(e) => setForm({ ...form, academyName: e.target.value })}
              required
            />
            <Input
              label="Academy Tagline"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              required
            />
          </div>
        </Card>

        {/* Homepage Hero Card */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Sparkles className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Homepage Hero Section
            </h3>
          </div>

          <Input
            label="Hero Main Headline"
            value={form.heroHeadline}
            onChange={(e) => setForm({ ...form, heroHeadline: e.target.value })}
            required
          />

          <Input
            label="Hero Subhead Tagline"
            value={form.heroSubhead}
            onChange={(e) => setForm({ ...form, heroSubhead: e.target.value })}
            required
          />

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
              Hero Introduction Paragraph
            </label>
            <textarea
              rows={3}
              value={form.heroDescription}
              onChange={(e) => setForm({ ...form, heroDescription: e.target.value })}
              className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A]"
              required
            />
          </div>
        </Card>

        {/* Live Announcement & Contact */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Flame className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              News Ticker & Admissions Contact
            </h3>
          </div>

          <Input
            label="Top Bar Scrolling Announcement Ticker"
            value={form.announcementTicker}
            onChange={(e) => setForm({ ...form, announcementTicker: e.target.value })}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Admissions Hotline Phone"
              value={form.academyPhone}
              onChange={(e) => setForm({ ...form, academyPhone: e.target.value })}
              required
            />
            <Input
              label="Official Email Address"
              value={form.academyEmail}
              onChange={(e) => setForm({ ...form, academyEmail: e.target.value })}
              required
            />
          </div>

          <Input
            label="Campus Physical Address"
            value={form.academyAddress}
            onChange={(e) => setForm({ ...form, academyAddress: e.target.value })}
            required
          />
        </Card>

        {/* Public Stats Counters */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Trophy className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Public Homepage Statistics Counters
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Input
              label="Athletes Trained"
              value={form.statStudents}
              onChange={(e) => setForm({ ...form, statStudents: e.target.value })}
            />
            <Input
              label="Certified Coaches"
              value={form.statCoaches}
              onChange={(e) => setForm({ ...form, statCoaches: e.target.value })}
            />
            <Input
              label="Championship Cups"
              value={form.statTrophies}
              onChange={(e) => setForm({ ...form, statTrophies: e.target.value })}
            />
            <Input
              label="PKL Player Drafts"
              value={form.statPklDrafts}
              onChange={(e) => setForm({ ...form, statPklDrafts: e.target.value })}
            />
          </div>
        </Card>

        <div className="flex justify-end pt-2">
          <Button type="submit" size="lg" glow className="px-8 font-extrabold uppercase tracking-wider text-xs">
            <Save className="w-4 h-4 mr-2" /> Save & Publish Changes Live
          </Button>
        </div>
      </form>
    </div>
  );
}
