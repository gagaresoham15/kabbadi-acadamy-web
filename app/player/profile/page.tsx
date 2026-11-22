'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { Save, User, Shield, Phone, Mail, Award, CheckCircle2, Flame, HeartPulse } from 'lucide-react';

export default function PlayerProfilePage() {
  const { showToast } = useToast();

  const [profile, setProfile] = useState({
    name: 'Rahul Deshmukh',
    jerseyNumber: '17',
    position: 'Right Corner & Raider',
    batch: 'Pro Academy (Competition)',
    coach: 'Rohit Sharma (Head Coach)',
    age: '19',
    phone: '+91 98111 01010',
    email: 'rahul.d@gmail.com',
    emergencyContact: 'Santosh Deshmukh (+91 98111 00000)',
    bloodGroup: 'O+ Positive',
    weight: '72 kg',
    height: '5 ft 10 in',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Athlete profile updated successfully!', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Athlete Bio & Profile
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Official state federation registration data and athlete credentials
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="green">Verified Pro Athlete</Badge>
          <Badge variant="orange">State Squad #17</Badge>
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 12 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Athlete Card & Summary (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-6 bg-[#171F2B] border-white/5 space-y-5 text-center shadow-card">
            <div className="relative w-24 h-24 rounded-full mx-auto bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-[#101C2C] flex items-center justify-center font-black text-3xl text-[#FF6B1A]">
                #{profile.jerseyNumber}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">{profile.name}</h3>
              <p className="text-xs text-[#FF8A25] font-extrabold mt-0.5">{profile.position}</p>
              <span className="inline-block mt-1 text-xs text-[#AAB2BD]">
                {profile.batch}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/5 text-xs text-left">
              <div className="bg-[#101C2C] p-3 rounded-xl border border-white/5">
                <span className="text-[#AAB2BD] text-[10px] uppercase font-bold block">Lead Mentor</span>
                <span className="font-extrabold text-white text-xs">{profile.coach}</span>
              </div>
              <div className="bg-[#101C2C] p-3 rounded-xl border border-white/5">
                <span className="text-[#AAB2BD] text-[10px] uppercase font-bold block">Blood Group</span>
                <span className="font-extrabold text-[#EF4444] text-xs">{profile.bloodGroup}</span>
              </div>
              <div className="bg-[#101C2C] p-3 rounded-xl border border-white/5">
                <span className="text-[#AAB2BD] text-[10px] uppercase font-bold block">Weight Class</span>
                <span className="font-extrabold text-[#22C55E] text-xs">{profile.weight} (Under 75kg)</span>
              </div>
              <div className="bg-[#101C2C] p-3 rounded-xl border border-white/5">
                <span className="text-[#AAB2BD] text-[10px] uppercase font-bold block">Height</span>
                <span className="font-extrabold text-white text-xs">{profile.height}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Editable Details Form (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          <Card className="p-6 bg-[#171F2B] border-white/5 space-y-5 shadow-card">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Edit Athlete Information
            </h4>

            <form onSubmit={handleSave} className="space-y-4">
              <Input
                label="Full Name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Jersey Number"
                  value={profile.jerseyNumber}
                  onChange={(e) => setProfile({ ...profile, jerseyNumber: e.target.value })}
                />
                <Input
                  label="Age"
                  value={profile.age}
                  onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Contact Phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
                <Input
                  label="Email Address"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <Input
                label="Emergency Contact & Relationship"
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
              />

              <div className="pt-2">
                <Button type="submit" size="md" glow className="w-full shadow-glowSm">
                  <Save className="w-4 h-4 mr-2" /> Save Athlete Profile
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
