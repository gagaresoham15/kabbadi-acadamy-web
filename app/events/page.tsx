'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { INITIAL_EVENTS } from '@/data/mock/academyData';
import { TournamentEvent } from '@/types';
import { Calendar, MapPin, Trophy, Users, Clock, CheckCircle2 } from 'lucide-react';

export default function EventsPage() {
  const { showToast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<TournamentEvent | null>(null);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainName || !phone) {
      showToast('Please fill in all tournament registration fields', 'error');
      return;
    }
    setIsSuccess(true);
    showToast(`Registered successfully for ${selectedEvent?.title}!`, 'success');
  };

  const closeRegModal = () => {
    setRegModalOpen(false);
    setIsSuccess(false);
    setTeamName('');
    setCaptainName('');
    setPhone('');
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
              <span className="text-[#FF6B1A] font-semibold">Events & Tournaments</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Upcoming <span className="text-[#FF6B1A]">Events</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Elevate your game in competitive arena tournaments and talent scouting trials. Register your squad now.
            </p>
          </div>
        </section>

        {/* Events List (Styled exactly like bottom center of Figma design) */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {INITIAL_EVENTS.map((evt) => {
              const d = new Date(evt.date);
              const day = d.getDate() || '25';
              const month = d.toLocaleString('en-US', { month: 'short' }) || 'Oct';

              return (
                <Card
                  key={evt.id}
                  glow
                  className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6 group hover:border-[#FF6B1A]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
                    {/* Big Date Badge (like Figma: '25 Oct') */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 flex flex-col items-center justify-center shrink-0 text-center shadow-glowSm">
                      <span className="text-xl sm:text-2xl font-black text-white leading-none">{day}</span>
                      <span className="text-[10px] sm:text-xs uppercase font-extrabold text-[#FF6B1A] tracking-wider mt-1">{month}</span>
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="orange">{evt.category}</Badge>
                        <span className="text-xs text-[#22C55E] font-semibold flex items-center gap-1">
                          <Trophy className="w-3.5 h-3.5" /> {evt.prizePool}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF6B1A] transition-colors truncate sm:whitespace-normal">
                        {evt.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#AAB2BD] pt-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B1A] shrink-0" /> {evt.location}, {evt.city}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B1A] shrink-0" /> {evt.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <Button
                      size="md"
                      glow
                      onClick={() => {
                        setSelectedEvent(evt);
                        setRegModalOpen(true);
                      }}
                      className="w-full md:w-auto px-6"
                    >
                      Register Now →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Tournament Registration Modal */}
        {selectedEvent && (
          <Modal
            isOpen={regModalOpen}
            onClose={closeRegModal}
            title={selectedEvent.title}
            subtitle={`Venue: ${selectedEvent.city} • Prize: ${selectedEvent.prizePool}`}
            maxWidth="md"
          >
            {isSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Registration Confirmed!</h4>
                <p className="text-xs text-[#AAB2BD] max-w-sm mx-auto">
                  Team <span className="text-[#FF6B1A] font-bold">{teamName}</span> is registered for {selectedEvent.title}. Your registration slip has been generated.
                </p>
                <div className="p-4 bg-[#101C2C] rounded-xl border border-white/5 text-xs text-left space-y-1.5">
                  <p><span className="text-[#AAB2BD]">Registration ID:</span> <span className="font-mono text-white">KBD-EVT-2025-912</span></p>
                  <p><span className="text-[#AAB2BD]">Captain:</span> <span className="text-white">{captainName}</span></p>
                  <p><span className="text-[#AAB2BD]">Entry Fee:</span> <span className="text-[#22C55E] font-bold">₹{selectedEvent.entryFee} (Pay at venue desk)</span></p>
                </div>
                <Button size="sm" onClick={closeRegModal} className="mt-4">
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <Input
                  label="Team / Academy Name"
                  placeholder="e.g. Pune Punishers"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
                <Input
                  label="Captain / Manager Name"
                  placeholder="e.g. Ramesh Kumar"
                  value={captainName}
                  onChange={(e) => setCaptainName(e.target.value)}
                  required
                />
                <Input
                  label="Contact Phone Number"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <div className="p-3 bg-[#101C2C] rounded-xl border border-white/5 text-xs text-[#AAB2BD] space-y-1">
                  <p className="text-white font-semibold">Tournament Rules & Eligibility:</p>
                  <p>• All players must carry valid Aadhar card and wear non-marking sports court shoes.</p>
                  <p>• Weight category adherence is strictly monitored during morning weigh-ins.</p>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <Button type="button" variant="ghost" size="sm" onClick={closeRegModal}>
                    Cancel
                  </Button>
                  <Button type="submit" size="md" glow>
                    Confirm Registration
                  </Button>
                </div>
              </form>
            )}
          </Modal>
        )}
      </main>

      <Footer />
    </div>
  );
}
