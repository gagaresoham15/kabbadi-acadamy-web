'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { UserCheck, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    age: '16',
    jerseyNumber: '',
    position: 'Raider' as Player['position'],
    batch: 'Beginner' as Player['batch'],
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalNotes: '',
  });

  const [registeredPlayer, setRegisteredPlayer] = useState<Player | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      showToast('Please fill in all mandatory fields.', 'error');
      return;
    }

    const newId = `ply-${Date.now().toString().slice(-4)}`;
    const jersey = formData.jerseyNumber ? parseInt(formData.jerseyNumber) : Math.floor(Math.random() * 50) + 1;

    const newPlayer: Player = {
      id: newId,
      name: formData.name,
      jerseyNumber: jersey,
      position: formData.position,
      batch: formData.batch,
      age: parseInt(formData.age) || 16,
      phone: formData.phone,
      email: formData.email,
      joiningDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      attendanceRate: 100,
      totalRaids: 0,
      successfulRaids: 0,
      tacklePoints: 0,
      feeStatus: 'Pending',
      avatar: '/images/hero-kabaddi.jpg',
    };

    const existing = getStoredData<Player[]>('students', INITIAL_PLAYERS);
    setStoredData('students', [newPlayer, ...existing]);

    setRegisteredPlayer(newPlayer);
    showToast(`Welcome ${newPlayer.name}! Registration successful.`, 'success');
  };

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
              <span className="text-[#FF6B1A] font-semibold">Player Registration</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Join <span className="text-[#FF6B1A]">Kabaddi Academy</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Register now to start your journey towards becoming a pro Kabaddi champion. Train with elite mentors on international standard mats.
            </p>
          </div>
        </section>

        {/* Registration Form / Success */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 bg-[#171F2B] border-white/5">
            {registeredPlayer ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto shadow-glowSm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Registration Confirmed!
                  </h3>
                  <p className="text-sm text-[#AAB2BD] max-w-md mx-auto">
                    Welcome to the academy family, <strong className="text-white">{registeredPlayer.name}</strong>! Your player registration ID has been generated.
                  </p>
                </div>

                <div className="p-6 bg-[#101C2C] rounded-2xl border border-white/10 max-w-md mx-auto text-left space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#AAB2BD]">Player ID:</span>
                    <span className="font-mono font-bold text-[#FF6B1A]">{registeredPlayer.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#AAB2BD]">Jersey Number:</span>
                    <span className="font-bold text-white">#{registeredPlayer.jerseyNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#AAB2BD]">Playing Position:</span>
                    <span className="font-bold text-white">{registeredPlayer.position}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#AAB2BD]">Enrolled Batch:</span>
                    <span className="font-bold text-[#FF8A25]">{registeredPlayer.batch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#AAB2BD]">Initial Fee Status:</span>
                    <span className="font-bold text-amber-400">{registeredPlayer.feeStatus}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Link href="/player">
                    <Button size="lg" glow>
                      Open Player Portal <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setRegisteredPlayer(null);
                      setFormData({
                        name: '',
                        age: '16',
                        jerseyNumber: '',
                        position: 'Raider',
                        batch: 'Beginner',
                        phone: '',
                        email: '',
                        emergencyContact: '',
                        emergencyPhone: '',
                        medicalNotes: '',
                      });
                    }}
                  >
                    Register Another Player
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Athlete Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <UserCheck className="w-5 h-5 text-[#FF6B1A]" />
                    <h3 className="text-lg font-bold text-white">1. Athlete Profile Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Athlete Full Name *"
                      placeholder="e.g. Rohit Jadhav"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Age *"
                      type="number"
                      min={10}
                      max={40}
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Select
                      label="Playing Position *"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value as Player['position'] })}
                    >
                      <option value="Raider" className="bg-[#101C2C]">Raider</option>
                      <option value="Corner Defender" className="bg-[#101C2C]">Corner Defender (Right/Left)</option>
                      <option value="Cover Defender" className="bg-[#101C2C]">Cover Defender (Right/Left)</option>
                      <option value="All Rounder" className="bg-[#101C2C]">All Rounder</option>
                    </Select>

                    <Select
                      label="Training Level / Batch *"
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value as Player['batch'] })}
                    >
                      <option value="Beginner" className="bg-[#101C2C]">Beginner (Under 14 & 16)</option>
                      <option value="Advanced" className="bg-[#101C2C]">Advanced (For Players)</option>
                      <option value="Pro Academy" className="bg-[#101C2C]">Pro Academy (Competition)</option>
                    </Select>

                    <Input
                      label="Preferred Jersey # (1-99)"
                      type="number"
                      placeholder="e.g. 17"
                      min={1}
                      max={99}
                      value={formData.jerseyNumber}
                      onChange={(e) => setFormData({ ...formData, jerseyNumber: e.target.value })}
                    />
                  </div>
                </div>

                {/* Step 2: Contact & Emergency */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <Shield className="w-5 h-5 text-[#FF6B1A]" />
                    <h3 className="text-lg font-bold text-white">2. Contact & Emergency Details</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Player Phone Number *"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                    <Input
                      label="Email Address *"
                      type="email"
                      placeholder="player@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Parent / Guardian Name"
                      placeholder="e.g. Santosh Jadhav"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    />
                    <Input
                      label="Guardian Contact Number"
                      placeholder="+91 98765 00000"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
                      Medical History / Previous Injuries (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any knee/ankle ligament history, asthma, or dietary allergies..."
                      value={formData.medicalNotes}
                      onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                      className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
                  <p className="text-xs text-[#AAB2BD]">
                    By submitting, you agree to academy code of conduct & safety guidelines.
                  </p>
                  <Button type="submit" size="lg" glow className="w-full sm:w-auto px-10 shadow-glow">
                    Complete Registration <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
