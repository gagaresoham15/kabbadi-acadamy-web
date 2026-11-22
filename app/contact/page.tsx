'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_ENQUIRIES } from '@/data/mock/academyData';
import { Enquiry } from '@/types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programInterest: 'Basic Training',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill all required contact fields.', 'error');
      return;
    }

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      programInterest: formData.programInterest,
      message: formData.message || 'General academy training enquiry.',
      date: new Date().toISOString().split('T')[0],
      status: 'New',
    };

    const existing = getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
    setStoredData('enquiries', [newEnquiry, ...existing]);

    setSubmitted(true);
    showToast('Enquiry sent! Our coaching coordinator will call you shortly.', 'success');
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
              <span className="text-[#FF6B1A] font-semibold">Contact Academy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Get in <span className="text-[#FF6B1A]">Touch</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Have questions regarding trial matches, age eligibility, hostel facility, or batch timings? We are here to help.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-8 space-y-6 bg-[#171F2B] border-white/5">
                <h3 className="text-xl font-bold text-white">Academy Information</h3>

                <div className="space-y-5 text-sm text-[#AAB2BD]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Head Training Arena</h4>
                      <p className="text-xs mt-1">Balewadi Sports Complex, Baner Road, Pune, Maharashtra 411045</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Contact Hotline</h4>
                      <p className="text-xs mt-1">+91 98200 12345 / +91 98200 67890</p>
                      <p className="text-[11px] text-[#AAB2BD]/70">Mon to Sat (07:00 AM - 08:30 PM)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Official Email</h4>
                      <p className="text-xs mt-1">contact@kabaddiacademy.in</p>
                      <p className="text-xs">admissions@kabaddiacademy.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Academy Office Hours</h4>
                      <p className="text-xs mt-1">Morning: 06:00 AM - 10:00 AM</p>
                      <p className="text-xs">Evening: 04:30 PM - 08:30 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-8 bg-[#171F2B] border-white/5">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                    <p className="text-sm text-[#AAB2BD] max-w-md mx-auto">
                      Your inquiry regarding <strong className="text-white">{formData.programInterest}</strong> has been logged. Our admissions coordinator will contact you at <span className="text-[#FF6B1A]">{formData.phone}</span>.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', programInterest: 'Basic Training', message: '' });
                      }}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-white">Send Us an Inquiry</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name *"
                        placeholder="e.g. Ramesh Jadhav"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        label="Phone Number *"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Email Address *"
                        type="email"
                        placeholder="you@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                      <Select
                        label="Program of Interest"
                        value={formData.programInterest}
                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                      >
                        <option value="Basic Training" className="bg-[#101C2C]">Basic Training (Under 14/16)</option>
                        <option value="Advanced Training" className="bg-[#101C2C]">Advanced Training (For Players)</option>
                        <option value="Fitness Training" className="bg-[#101C2C]">Fitness & Conditioning</option>
                        <option value="Tournament Prep" className="bg-[#101C2C]">Tournament Prep / Pro Trials</option>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
                        Your Message / Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Mention age, previous playing background, or preferred training shift..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                      />
                    </div>

                    <Button type="submit" size="lg" glow className="w-full sm:w-auto px-8">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
