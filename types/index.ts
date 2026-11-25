export type Role = 'admin' | 'coach' | 'player';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  avatar?: string;
  batchId?: string;
}

export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  position: 'Raider' | 'Corner Defender' | 'Cover Defender' | 'All Rounder';
  batch: 'Beginner' | 'Advanced' | 'Pro Academy';
  age: number;
  phone: string;
  email: string;
  joiningDate: string;
  status: 'Active' | 'Injured' | 'Inactive';
  attendanceRate: number;
  totalRaids?: number;
  successfulRaids?: number;
  tacklePoints?: number;
  feeStatus: 'Paid' | 'Pending' | 'Overdue';
  avatar: string;
}

export interface Coach {
  id: string;
  name: string;
  role: 'Head Coach' | 'Senior Coach' | 'Tactical Coach' | 'Fitness Coach';
  experience: string;
  specialty: string;
  phone: string;
  email: string;
  status: 'Active' | 'On Leave';
  batchesCount: number;
  studentsCount: number;
  image: string;
  bio?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Beginner' | 'Advanced' | 'Fitness' | 'Competition';
  level: string;
  duration: string;
  ageGroup: string;
  fee: number;
  description: string;
  features: string[];
  schedule: string;
  image: string;
}

export interface Batch {
  id: string;
  name: string;
  programId: string;
  programTitle: string;
  coachId: string;
  coachName: string;
  timings: string;
  days: string[];
  maxCapacity: number;
  enrolledCount: number;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
}

export interface AttendanceRecord {
  id: string;
  date: string;
  batchId: string;
  batchName: string;
  playerId: string;
  playerName: string;
  status: 'Present' | 'Absent' | 'Late';
  remarks?: string;
}

export interface FeePayment {
  id: string;
  playerId: string;
  playerName: string;
  batchName: string;
  amount: number;
  date: string;
  dueDate: string;
  method: 'UPI' | 'Card' | 'Cash' | 'Net Banking';
  status: 'Paid' | 'Pending' | 'Overdue';
  receiptNo: string;
}

export interface TournamentEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  city: string;
  entryFee: number;
  prizePool: string;
  status: 'Upcoming' | 'Live' | 'Completed';
  registeredTeams: number;
  image: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  tournament: string;
  year: string;
  position: 'Winner' | 'Runner Up' | '3rd Place' | 'Best Raider' | 'Best Defender';
  category: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Matches' | 'Training' | 'Celebration' | 'Facilities';
  image: string;
  date: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  programInterest: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Closed';
}

export interface Notice {
  id: string;
  title: string;
  message: string;
  date: string;
  targetRole: 'all' | 'player' | 'coach';
  important?: boolean;
}

export interface CMSData {
  academyName: string;
  tagline: string;
  heroHeadline: string;
  heroSubhead: string;
  heroDescription: string;
  announcementTicker: string;
  academyPhone: string;
  academyEmail: string;
  academyAddress: string;
  statStudents: string;
  statCoaches: string;
  statTrophies: string;
  statPklDrafts: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

