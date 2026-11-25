'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useToast } from '@/components/ui/Toast';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_CMS, getStoredData, setStoredData, INITIAL_ENQUIRIES } from '@/data/mock/academyData';
import { Enquiry } from '@/types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useToast();
  const [cms] = useAcademyData('cms', INITIAL_CMS);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programInterest: 'Iron Shield (Cadet Defense & Attack)',
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
    showToast('Enquiry received! Our admissions head will call you shortly.', 'success');
  };

  const whatsappUrl = `https://wa.me/${cms.academyPhone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
    cms.academyName
  )},%20I%20am%20interested%20in%20Kabaddi%20training%20admissions.`;

  return (
    <div className="min-h-screen bg-[#080D14] flex flex-col relative">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-14 bg-[#101C2C]/60 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-2 text-xs text-[#AAB2BD] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1A] font-semibold">Contact Academy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Contact & <span className="text-[#FF6B1A]">Campus Location</span>
            </h1>
            <p className="text-sm sm:text-base text-[#AAB2BD] mt-2 max-w-2xl">
              Have questions regarding trial matches, age eligibility, hostel facility, or batch timings? We are here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              <Card className="p-8 space-y-6 bg-[#171F2B] border-white/5">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                  Official Campus Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#AAB2BD] uppercase tracking-wider">Campus Address</h4>
                      <p className="text-sm text-white font-medium mt-1 leading-relaxed">
                        {cms.academyAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#AAB2BD] uppercase tracking-wider">Admissions Helpline</h4>
                      <p className="text-sm text-white font-semibold mt-1">
                        <a href={`tel:${cms.academyPhone.replace(/\s+/g, '')}`} className="hover:text-[#FF6B1A]">
                          {cms.academyPhone}
                        </a>
                      </p>
                      <p className="text-xs text-[#AAB2BD] mt-0.5">Available Mon-Sat: 07:00 AM – 08:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#AAB2BD] uppercase tracking-wider">Official Email</h4>
                      <p className="text-sm text-white font-medium mt-1">
                        <a href={`mailto:${cms.academyEmail}`} className="hover:text-[#FF6B1A]">
                          {cms.academyEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#AAB2BD] uppercase tracking-wider">Training Slots</h4>
                      <p className="text-xs text-white font-medium mt-1">Morning Batch: 06:00 AM – 09:00 AM</p>
                      <p className="text-xs text-white font-medium">Evening Batch: 04:30 PM – 08:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E] hover:text-white transition-all font-bold text-xs"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp Directly
                  </motion.a>
                </div>
              </Card>
            </motion.div>

            {/* Contact / Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <Card className="p-8 bg-[#171F2B] border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">Send an Enquiry or Visit Request</h3>
                <p className="text-xs text-[#AAB2BD] mb-6">
                  Fill in your details below. Our technical coach will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 bg-[#101C2C] rounded-2xl border border-[#22C55E]/30">
                    <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 text-[#22C55E] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Inquiry Successfully Submitted</h4>
                    <p className="text-xs text-[#AAB2BD] max-w-md mx-auto">
                      Thank you for reaching out to {cms.academyName}. Your enquiry has been routed directly to our admissions team.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          programInterest: 'Iron Shield (Cadet Defense & Attack)',
                          message: '',
                        });
                      }}
                      className="border-white/10 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Full Name *"
                      placeholder="e.g. Tanmay Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Email Address *"
                        type="email"
                        placeholder="athlete@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />

                      <Input
                        label="Phone / WhatsApp Number *"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <Select
                      label="Program of Interest"
                      value={formData.programInterest}
                      onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                      options={[
                        { label: 'Warrior Sparks (U-12 Grassroots)', value: 'Warrior Sparks (U-12 Grassroots)' },
                        { label: 'Iron Shield (Cadet Defense & Attack)', value: 'Iron Shield (Cadet Defense & Attack)' },
                        { label: 'Thunder Strike (Youth & State Squad)', value: 'Thunder Strike (Youth & State Squad)' },
                        { label: 'Pro Titans (Elite League Preparatory)', value: 'Pro Titans (Elite League Preparatory)' },
                        { label: 'Viper Conditioning (Agility & Sprint Camp)', value: 'Viper Conditioning (Agility & Sprint Camp)' },
                      ]}
                    />

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
                        Your Question or Comments
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about the athlete's current experience level, age, or hostel boarding requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/40 focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>

                    <Button type="submit" size="lg" glow className="w-full font-bold uppercase tracking-wider text-xs">
                      <Send className="w-4 h-4 mr-2" /> Submit Enquiry
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
