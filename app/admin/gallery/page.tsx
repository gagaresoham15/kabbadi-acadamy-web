'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_GALLERY } from '@/data/mock/academyData';
import { GalleryItem } from '@/types';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';

export default function AdminGalleryPage() {
  const { showToast } = useToast();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Matches' as GalleryItem['category'],
    image: '/images/hero-kabaddi.jpg',
  });

  useEffect(() => {
    setGallery(getStoredData<GalleryItem[]>('gallery', INITIAL_GALLERY));
  }, []);

  const saveGallery = (updated: GalleryItem[]) => {
    setGallery(updated);
    setStoredData('gallery', updated);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this photo from gallery?')) {
      const updated = gallery.filter((g) => g.id !== id);
      saveGallery(updated);
      showToast('Photo deleted', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      showToast('Title is required', 'error');
      return;
    }

    const newItem: GalleryItem = {
      id: `g-${Date.now().toString().slice(-4)}`,
      title: formData.title,
      category: formData.category,
      image: formData.image,
      date: new Date().toISOString().split('T')[0],
    };

    saveGallery([newItem, ...gallery]);
    showToast('Image added to gallery showcase', 'success');
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Gallery Management
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Curate action photos, team celebrations, training sessions and court facility images.
          </p>
        </div>

        <Button size="md" glow onClick={() => setModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> Upload Photo
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <Card key={item.id} className="group relative overflow-hidden bg-[#171F2B] border-white/5">
            <div className="relative w-full aspect-[4/3] bg-[#101C2C]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <div className="absolute top-2 left-2">
                <Badge variant="orange">{item.category}</Badge>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-[#EF4444] opacity-0 group-hover:opacity-100 hover:bg-[#EF4444] hover:text-white transition-all"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3">
              <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
              <span className="text-[10px] text-[#AAB2BD]">{item.date}</span>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Photo to Gallery"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Photo Caption / Title *"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. Diving Ankle Catch in Finals"
            required
          />

          <Select
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as GalleryItem['category'] })}
          >
            <option value="Matches" className="bg-[#101C2C]">Matches & Competitions</option>
            <option value="Training" className="bg-[#101C2C]">Training & Drills</option>
            <option value="Celebration" className="bg-[#101C2C]">Celebration & Trophies</option>
            <option value="Facilities" className="bg-[#101C2C]">Facilities & Mat Infrastructure</option>
          </Select>

          <Select
            label="Image Asset"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          >
            <option value="/images/hero-kabaddi.jpg" className="bg-[#101C2C]">Hero Raider Leap</option>
            <option value="/images/team-huddle.jpg" className="bg-[#101C2C]">Team Huddle Backview</option>
            <option value="/images/program-basic.jpg" className="bg-[#101C2C]">Basic Stance Practice</option>
            <option value="/images/program-advanced.jpg" className="bg-[#101C2C]">Advanced Tackle</option>
            <option value="/images/program-fitness.jpg" className="bg-[#101C2C]">Fitness Conditioning</option>
            <option value="/images/trophy.jpg" className="bg-[#101C2C]">Gold Cup Trophy</option>
          </Select>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              Add Photo
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
