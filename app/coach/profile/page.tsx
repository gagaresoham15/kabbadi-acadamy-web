'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { Save, Award, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function CoachProfilePage() {
  const { showToast } = useToast();

  const [profile, setProfile] = useState({
    name: 'Rohit Sharma',
    role: 'Head Coach',
    experience: '10+ Years',
    specialty: 'Raiding Tactics & Match Strategy',
    phone: '+91 98201 12345',
    email: 'rohit.sharma@kabaddiacademy.in',
    bio: 'Former National Kabaddi Gold Medalist and certified NIS coach with over a decade of elite player coaching experience.',
    certifications: 'NIS Certified Kabaddi Coach (Level 3), National Gold Medalist 2018',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile information updated successfully!', 'success');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Coach Profile
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Manage your coaching credentials, contact details and professional biography.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#FF6B1A] shrink-0">
              <Image src="/images/coach-rohit.jpg" alt="Coach Rohit" fill className="object-cover" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="text-xs font-semibold text-[#FF8A25]">{profile.role}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#101C2C] text-xs text-[#AAB2BD] border border-white/5 mt-1">
                {profile.experience} Professional Experience
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <Input
              label="Full Name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <Input
              label="Designation"
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <Input
              label="Official Email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <Input
            label="Tactical Specialty"
            value={profile.specialty}
            onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
          />

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
              Coach Biography
            </label>
            <textarea
              rows={3}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A]"
            />
          </div>

          <Input
            label="Certifications & Honors"
            value={profile.certifications}
            onChange={(e) => setProfile({ ...profile, certifications: e.target.value })}
          />
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" glow className="px-8">
            <Save className="w-4 h-4 mr-2" /> Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
