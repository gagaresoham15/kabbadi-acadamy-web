import {
  Player,
  Coach,
  TrainingProgram,
  Batch,
  AttendanceRecord,
  FeePayment,
  TournamentEvent,
  Achievement,
  GalleryItem,
  Enquiry,
  Notice,
  CMSData,
  FacilityItem,
} from '@/types';

export const INITIAL_CMS: CMSData = {
  academyName: 'GARUDA KABADDI ACADEMY',
  tagline: 'FORGE CHAMPIONS • BORN FOR THE MAT',
  heroHeadline: 'DOMINATE THE MAT. UNLEASH THE WARRIOR.',
  heroSubhead: "India's Premier High-Performance Kabaddi & Sports Science Center",
  heroDescription:
    'State-of-the-art training for grassroots athletes to professional league superstars. Combining traditional agility and canting with modern biomechanical video analysis, Olympic strength conditioning, and tournament-grade synthetic arenas.',
  announcementTicker:
    '🔥 SELECTION TRIALS 2025: All-India Youth & Pro Academy Scouting Camp on Sunday • 100% Scholarships for Top 10 Athletes • Limited Trial Slots Open',
  academyPhone: '+91 98220 54321',
  academyEmail: 'admissions@garudakabaddi.com',
  academyAddress: 'Garuda Sports Complex, Expressway Sports Corridor, Baner-Balewadi, Pune, Maharashtra 411045',
  statStudents: '650+',
  statCoaches: '16+',
  statTrophies: '38+',
  statPklDrafts: '22+',
};

export const INITIAL_PROGRAMS: TrainingProgram[] = [
  {
    id: 'prog-1',
    title: 'Warrior Sparks (U-12 Grassroots)',
    category: 'Beginner',
    level: 'Ages 7 to 12 Years',
    duration: '3 Months Foundational',
    ageGroup: 'Under-12 Beginners',
    fee: 3800,
    description:
      'High-energy movement literacy, agility ladders, breath canting rhythm, fundamental hand touches, and safe rolling mechanics on synthetic mats.',
    features: [
      'Agility & Motor Coordination Drills',
      'Vocal Canting & Lung Capacity',
      'Basic Footwork & Escape Moves',
      'Tumble & Rolling Safety on Mat',
    ],
    schedule: 'Mon, Wed, Fri (4:00 PM - 5:30 PM)',
    image: '/images/program-basic.jpg',
  },
  {
    id: 'prog-2',
    title: 'Iron Shield (Cadet Defense & Attack)',
    category: 'Beginner',
    level: 'Ages 12 to 16 Years',
    duration: '6 Months Intensive',
    ageGroup: 'Under-14 & Under-16',
    fee: 5500,
    description:
      'Technical tackle mastery: corner ankle locks, thigh grips, running hand touches, 2-man chain coordination, and defensive boundary containment.',
    features: [
      'Corner Ankle Hold & Thigh Locks',
      'Running Hand Touch & Side-Step',
      '2-Man Chain Block Mechanics',
      'Flexibility & Posture Conditioning',
    ],
    schedule: 'Tue, Thu, Sat (5:00 PM - 7:00 PM)',
    image: '/images/defense-chain-tackle.jpg',
  },
  {
    id: 'prog-3',
    title: 'Thunder Strike (Youth & State Squad)',
    category: 'Advanced',
    level: 'Ages 16 to 19 Years',
    duration: '6 Months Advanced',
    ageGroup: 'Under-19 & District/State',
    fee: 8000,
    description:
      'Tactical game awareness: airborne frog jumps, dubki escape trajectories, bonus line raid timing, video analysis, and pressure match simulations.',
    features: [
      'High-Flying Dubki & Frog Jump',
      'Corner Bonus Raids & Denial Tactics',
      'Match Biomechanics Video Review',
      'State Championship Preparation',
    ],
    schedule: 'Mon to Sat (5:30 PM - 7:45 PM)',
    image: '/images/hero-action-raid.jpg',
  },
  {
    id: 'prog-4',
    title: 'Pro Titans (Elite League Preparatory)',
    category: 'Competition',
    level: '19+ Senior & League Aspirants',
    duration: '1 Year Elite',
    ageGroup: '19 Years & Above',
    fee: 11500,
    description:
      'Elite high-performance camp preparing athletes for national selection trials, premier professional league franchises, and all-India invitationals.',
    features: [
      'Pro Franchise Trial Conditioning',
      'Explosive Plyometrics & Peak Power',
      'Live Match 7-Man Scrimmages',
      'Mental Fortitude & Sports Nutrition',
    ],
    schedule: 'Daily Morning & Evening (6 AM & 6 PM)',
    image: '/images/program-tournament.jpg',
  },
  {
    id: 'prog-5',
    title: 'Viper Conditioning & Athletic Agility',
    category: 'Fitness',
    level: 'All Competitive Athletes',
    duration: 'Ongoing Monthly',
    ageGroup: 'Open Age Groups',
    fee: 4200,
    description:
      'Kabaddi-specific strength conditioning: explosive leg power, grip strength, sprint acceleration, yo-yo stamina, and cryotherapy ice bath recovery.',
    features: [
      'Olympic Barbell & Plyometrics',
      'Yo-Yo Endurance & Acceleration',
      'Core Stability & Grip Conditioning',
      'Cryotherapy Ice Bath Recovery',
    ],
    schedule: 'Daily Morning (6:00 AM - 7:30 AM)',
    image: '/images/sports-science-gym.jpg',
  },
];

export const INITIAL_COACHES: Coach[] = [
  {
    id: 'coach-1',
    name: 'Coach Vikramaditya Rane',
    role: 'Head Coach',
    experience: '14+ Years',
    specialty: 'Chief Tactical Strategist & High Performance',
    phone: '+91 98220 54321',
    email: 'vikram.rane@garudakabaddi.com',
    status: 'Active',
    batchesCount: 4,
    studentsCount: 240,
    image: '/images/academy-coach-mentor.jpg',
    bio: 'Former National Kabaddi Gold Medalist and certified NIS Master Coach. Mentor to over 22 professional league players, specializing in tactical court positioning and team endgame strategies.',
  },
  {
    id: 'coach-2',
    name: 'Coach Devendra Shinde',
    role: 'Senior Coach',
    experience: '11+ Years',
    specialty: 'Corner Defense & Ankle Hold Mastery',
    phone: '+91 98220 54322',
    email: 'devendra.s@garudakabaddi.com',
    status: 'Active',
    batchesCount: 3,
    studentsCount: 160,
    image: '/images/coach-rohit-highres.jpg',
    bio: 'Renowned defensive specialist known for lightning ankle-lock timing, 2-man chain cohesion, and bonus-line denial setups.',
  },
  {
    id: 'coach-3',
    name: 'Coach Rajesh Verma',
    role: 'Senior Coach',
    experience: '9+ Years',
    specialty: 'Raiding Speed, Dubki & Toe Touch',
    phone: '+91 98220 54323',
    email: 'rajesh.v@garudakabaddi.com',
    status: 'Active',
    batchesCount: 3,
    studentsCount: 130,
    image: '/images/coach-amit.jpg',
    bio: 'Former national raid sensation specializing in evasion mechanics, running hand touches, and agile bonus line strikes.',
  },
  {
    id: 'coach-4',
    name: 'Dr. Snehal Deshmukh',
    role: 'Tactical Coach',
    experience: '8+ Years',
    specialty: 'Sports Biomechanics & Video Analysis',
    phone: '+91 98220 54324',
    email: 'snehal.d@garudakabaddi.com',
    status: 'Active',
    batchesCount: 2,
    studentsCount: 110,
    image: '/images/coach-vikash.jpg',
    bio: 'Sports science analyst utilizing telemetry, high-speed camera raid tracking, and recovery metrics to optimize athlete peak readiness.',
  },
  {
    id: 'coach-5',
    name: 'Coach Arjun Kadam',
    role: 'Fitness Coach',
    experience: '7+ Years',
    specialty: 'Strength, Conditioning & Plyometrics',
    phone: '+91 98220 54325',
    email: 'arjun.k@garudakabaddi.com',
    status: 'Active',
    batchesCount: 3,
    studentsCount: 140,
    image: '/images/coach-sagar.jpg',
    bio: 'Certified strength & conditioning coach focused on explosive lower body power, sprint acceleration, and injury prevention.',
  },
];

export const INITIAL_FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'The Garuda Arena (Olympic Synthetic Courts)',
    category: 'Playing Courts',
    description:
      'International tournament-grade anti-skid synthetic kabaddi courts with official lobby dimensions and floodlit arena lighting.',
    features: [
      'Multi-layer shock absorbent matting',
      'High-lux arena floodlights for night matches',
      'Official Pro league court measurements',
      'Dedicated traditional clay mitti pit for conditioning',
    ],
    image: '/images/hero-action-raid.jpg',
  },
  {
    id: 'fac-2',
    title: 'Spartan High-Performance Gymnasium',
    category: 'Strength & Conditioning',
    description:
      'High-tech athletic training lab equipped for explosive plyometrics, Olympic weightlifting, sled pushes, and grip power.',
    features: [
      'Olympic barbells, bumper plates & racks',
      'Sprint turf lane & resistance sleds',
      'Agility ladders & reaction strobe lights',
      'Heart-rate telemetry & velocity monitoring',
    ],
    image: '/images/sports-science-gym.jpg',
  },
  {
    id: 'fac-3',
    title: 'Cryo-Recovery & Sports Physio Clinic',
    category: 'Injury Prevention & Rehab',
    description:
      'Full-time sports physiotherapists, cryogenic ice plunge tanks, and contrast hydrotherapy to accelerate muscle repair.',
    features: [
      'Cryotherapy & cold water immersion plunge tubs',
      'Pneumatic compression recovery boots',
      'Kinesiology taping & ultrasound therapy',
      'Concussion & joint stabilization protocols',
    ],
    image: '/images/defense-chain-tackle.jpg',
  },
  {
    id: 'fac-4',
    title: 'Tactical Video Room & Biometrics Station',
    category: 'Match Strategy',
    description:
      'Ultra-HD video review theatre with slow-motion multi-angle raid review and computer-assisted defensive chain analysis.',
    features: [
      'Multi-angle camera raid breakdown',
      'Opponent bonus line tendency mapping',
      'Individual player decision-making feedback',
      'Endgame scenario simulation drills',
    ],
    image: '/images/about-mission.jpg',
  },
  {
    id: 'fac-5',
    title: 'Athletes Residential Village & Nutrition Mess',
    category: 'Boarding & Nutrition',
    description:
      'Safe, disciplined boarding with clean dormitories, study lounges, and custom high-protein sports nutrition diets.',
    features: [
      '4-meal performance sports diet plan',
      '24/7 CCTV surveillance & warden supervision',
      'Quiet study room & high-speed Wi-Fi',
      'Weight-category maintenance nutrition guidance',
    ],
    image: '/images/team-huddle.jpg',
  },
];

export const INITIAL_PLAYERS: Player[] = [
  {
    id: 'ply-1',
    name: 'Rahul Deshmukh',
    jerseyNumber: 17,
    position: 'Raider',
    batch: 'Pro Academy',
    age: 19,
    phone: '+91 98111 01010',
    email: 'rahul.d@gmail.com',
    joiningDate: '2023-04-12',
    status: 'Active',
    attendanceRate: 94,
    totalRaids: 240,
    successfulRaids: 188,
    tacklePoints: 24,
    feeStatus: 'Paid',
    avatar: '/images/hero-kabaddi.jpg',
  },
  {
    id: 'ply-2',
    name: 'Pawan Gaikwad',
    jerseyNumber: 7,
    position: 'Raider',
    batch: 'Pro Academy',
    age: 21,
    phone: '+91 98111 02020',
    email: 'pawan.g@gmail.com',
    joiningDate: '2023-02-15',
    status: 'Active',
    attendanceRate: 96,
    totalRaids: 310,
    successfulRaids: 245,
    tacklePoints: 18,
    feeStatus: 'Paid',
    avatar: '/images/program-advanced.jpg',
  },
  {
    id: 'ply-3',
    name: 'Suraj Jadhav',
    jerseyNumber: 4,
    position: 'Corner Defender',
    batch: 'Advanced',
    age: 18,
    phone: '+91 98111 03030',
    email: 'suraj.j@gmail.com',
    joiningDate: '2023-06-01',
    status: 'Active',
    attendanceRate: 90,
    totalRaids: 35,
    successfulRaids: 18,
    tacklePoints: 82,
    feeStatus: 'Paid',
    avatar: '/images/program-basic.jpg',
  },
  {
    id: 'ply-4',
    name: 'Ajinkya Shinde',
    jerseyNumber: 10,
    position: 'All Rounder',
    batch: 'Pro Academy',
    age: 20,
    phone: '+91 98111 04040',
    email: 'ajinkya.s@gmail.com',
    joiningDate: '2022-11-20',
    status: 'Active',
    attendanceRate: 92,
    totalRaids: 180,
    successfulRaids: 124,
    tacklePoints: 64,
    feeStatus: 'Paid',
    avatar: '/images/team-huddle.jpg',
  },
  {
    id: 'ply-5',
    name: 'Vishal Chougule',
    jerseyNumber: 8,
    position: 'Cover Defender',
    batch: 'Advanced',
    age: 19,
    phone: '+91 98111 05050',
    email: 'vishal.c@gmail.com',
    joiningDate: '2023-08-10',
    status: 'Active',
    attendanceRate: 88,
    totalRaids: 20,
    successfulRaids: 8,
    tacklePoints: 74,
    feeStatus: 'Pending',
    avatar: '/images/program-tournament.jpg',
  },
  {
    id: 'ply-6',
    name: 'Mahesh Kadam',
    jerseyNumber: 12,
    position: 'Raider',
    batch: 'Beginner',
    age: 15,
    phone: '+91 98111 06060',
    email: 'mahesh.k@gmail.com',
    joiningDate: '2024-01-05',
    status: 'Active',
    attendanceRate: 85,
    totalRaids: 90,
    successfulRaids: 54,
    tacklePoints: 12,
    feeStatus: 'Paid',
    avatar: '/images/program-basic.jpg',
  },
  {
    id: 'ply-7',
    name: 'Nitin Mane',
    jerseyNumber: 3,
    position: 'Corner Defender',
    batch: 'Beginner',
    age: 14,
    phone: '+91 98111 07070',
    email: 'nitin.m@gmail.com',
    joiningDate: '2024-02-01',
    status: 'Active',
    attendanceRate: 78,
    totalRaids: 15,
    successfulRaids: 5,
    tacklePoints: 38,
    feeStatus: 'Overdue',
    avatar: '/images/hero-kabaddi.jpg',
  },
  {
    id: 'ply-8',
    name: 'Omkar Bhosale',
    jerseyNumber: 9,
    position: 'Raider',
    batch: 'Advanced',
    age: 17,
    phone: '+91 98111 08080',
    email: 'omkar.b@gmail.com',
    joiningDate: '2023-09-15',
    status: 'Active',
    attendanceRate: 91,
    totalRaids: 140,
    successfulRaids: 96,
    tacklePoints: 16,
    feeStatus: 'Paid',
    avatar: '/images/program-fitness.jpg',
  },
];

export const INITIAL_BATCHES: Batch[] = [
  {
    id: 'batch-1',
    name: 'Warrior Sparks (U-12 Grassroots)',
    programId: 'prog-1',
    programTitle: 'Warrior Sparks (U-12 Grassroots)',
    coachId: 'coach-2',
    coachName: 'Coach Devendra Shinde',
    timings: '6:30 AM - 8:00 AM',
    days: ['Mon', 'Wed', 'Fri'],
    maxCapacity: 35,
    enrolledCount: 30,
    status: 'Ongoing',
  },
  {
    id: 'batch-2',
    name: 'Iron Shield (U-16 Cadets)',
    programId: 'prog-2',
    programTitle: 'Iron Shield (Cadet Defense & Attack)',
    coachId: 'coach-3',
    coachName: 'Coach Rajesh Verma',
    timings: '5:00 PM - 7:00 PM',
    days: ['Tue', 'Thu', 'Sat'],
    maxCapacity: 30,
    enrolledCount: 28,
    status: 'Ongoing',
  },
  {
    id: 'batch-3',
    name: 'Thunder Strike (U-19 Squad)',
    programId: 'prog-3',
    programTitle: 'Thunder Strike (Youth & State Squad)',
    coachId: 'coach-4',
    coachName: 'Dr. Snehal Deshmukh',
    timings: '5:30 PM - 7:45 PM',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    maxCapacity: 28,
    enrolledCount: 26,
    status: 'Ongoing',
  },
  {
    id: 'batch-4',
    name: 'Pro Titans (League Preparatory)',
    programId: 'prog-4',
    programTitle: 'Pro Titans (Elite League Preparatory)',
    coachId: 'coach-1',
    coachName: 'Coach Vikramaditya Rane',
    timings: '6:00 PM - 8:30 PM',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    maxCapacity: 25,
    enrolledCount: 22,
    status: 'Ongoing',
  },
  {
    id: 'batch-5',
    name: 'Viper Speed & Conditioning Lab',
    programId: 'prog-5',
    programTitle: 'Viper Conditioning & Athletic Agility',
    coachId: 'coach-5',
    coachName: 'Coach Arjun Kadam',
    timings: '6:00 AM - 7:30 AM',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    maxCapacity: 40,
    enrolledCount: 36,
    status: 'Ongoing',
  },
];

export const INITIAL_EVENTS: TournamentEvent[] = [
  {
    id: 'evt-1',
    title: 'All-India Garuda Gold Cup 2025',
    category: 'National Level Tournament',
    date: '2025-12-20',
    time: '08:30 AM onwards',
    location: 'Garuda Olympic Arena Mat 1 & 2',
    city: 'Pune-Mumbai Sports Corridor, Maharashtra',
    entryFee: 3500,
    prizePool: '₹5,00,000 + Golden Trophy',
    status: 'Upcoming',
    registeredTeams: 32,
    image: '/images/hero-action-raid.jpg',
    description:
      'Premier invitational club championship featuring 32 top-tier academy squads across India, scouted by professional league observers.',
  },
  {
    id: 'evt-2',
    title: 'National Rising Stars Scouting Trials',
    category: 'Scouting & Scholarship Trials',
    date: '2026-01-18',
    time: '08:00 AM to 06:00 PM',
    location: 'Shiv Chhatrapati Sports Complex',
    city: 'Balewadi, Pune, Maharashtra',
    entryFee: 500,
    prizePool: '100% Full Residential Scholarships',
    status: 'Upcoming',
    registeredTeams: 160,
    image: '/images/defense-chain-tackle.jpg',
    description:
      'Annual open talent identification camp for agile raiders and defenders. Top 10 athletes earn full year training & boarding sponsorships.',
  },
  {
    id: 'evt-3',
    title: 'Western Maharashtra Champions Trophy',
    category: 'State Championship',
    date: '2026-02-22',
    time: '10:00 AM',
    location: 'Andheri Indoor Stadium',
    city: 'Mumbai, Maharashtra',
    entryFee: 4000,
    prizePool: '₹3,00,000 Cash Prize + Medals',
    status: 'Upcoming',
    registeredTeams: 20,
    image: '/images/event-action.jpg',
    description:
      'High-voltage inter-district battle with fast-paced league rules, electronic scorekeeping, and live streaming broadcast.',
  },
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: '22+ Athletes Drafted into Premier Professional Leagues',
    tournament: 'National & Pro League Drafts',
    year: '2021-2025',
    position: 'Winner',
    category: 'Elite Professional Drafting',
    description:
      'Academy graduates signed by premier championship franchises, showcasing explosive raiding, dubki evasions, and solid corner blocks.',
    image: '/images/hero-kabaddi.jpg',
  },
  {
    id: 'ach-2',
    title: 'State Youth Champions – Gold Medalists 2024',
    tournament: 'Maharashtra State Youth Championship',
    year: '2024',
    position: 'Winner',
    category: 'Under-19 Gold Medal',
    description:
      'Unbeaten 9-match championship sweep, executing flawless corner defense and clocking the highest super-tackle count.',
    image: '/images/trophy.jpg',
  },
  {
    id: 'ach-3',
    title: 'Best Raider Award – All-India Federation Trophy',
    tournament: 'National Federation Cup',
    year: '2024',
    position: 'Best Raider',
    category: 'Individual National Honor',
    description:
      'Awarded to Rahul Deshmukh for scoring 46 raid points across the quarter-finals, semi-finals, and tournament final.',
    image: '/images/hero-action-raid.jpg',
  },
  {
    id: 'ach-4',
    title: 'Best Defensive Unit Award 2024',
    tournament: 'West Zone Inter-Academy Trophy',
    year: '2024',
    position: 'Winner',
    category: 'Defensive Excellence Award',
    description:
      'Conceded fewer than 18 points per match through synchronized 2-man chain coordination and tactical bonus-line denial.',
    image: '/images/defense-chain-tackle.jpg',
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Airborne Toe Touch & Dubki Clearance',
    category: 'Matches',
    image: '/images/hero-action-raid.jpg',
    date: '2024-10-15',
  },
  {
    id: 'g-2',
    title: 'Synchronized Corner-Cover Chain Lock',
    category: 'Matches',
    image: '/images/defense-chain-tackle.jpg',
    date: '2024-10-14',
  },
  {
    id: 'g-3',
    title: 'Spartan Strength & Conditioning Gym',
    category: 'Facilities',
    image: '/images/sports-science-gym.jpg',
    date: '2024-09-28',
  },
  {
    id: 'g-4',
    title: 'Tactical Consultation with Chief Coach',
    category: 'Training',
    image: '/images/academy-coach-mentor.jpg',
    date: '2024-09-25',
  },
  {
    id: 'g-5',
    title: 'Olympic Synthetic Court Conditioning Drills',
    category: 'Training',
    image: '/images/program-basic.jpg',
    date: '2024-08-20',
  },
  {
    id: 'g-6',
    title: 'Championship Huddle & Strategic Briefing',
    category: 'Training',
    image: '/images/team-huddle.jpg',
    date: '2024-08-15',
  },
  {
    id: 'g-7',
    title: 'State Championship Gold Cup Triumph',
    category: 'Celebration',
    image: '/images/trophy.jpg',
    date: '2024-07-10',
  },
  {
    id: 'g-8',
    title: 'Plyometrics, Sled Push & Core Conditioning',
    category: 'Facilities',
    image: '/images/program-fitness.jpg',
    date: '2024-06-25',
  },
];

export const INITIAL_PAYMENTS: FeePayment[] = [
  {
    id: 'pay-1',
    playerId: 'ply-1',
    playerName: 'Rahul Deshmukh',
    batchName: 'Pro Titans',
    amount: 11500,
    date: '2024-11-02',
    dueDate: '2024-11-05',
    method: 'UPI',
    status: 'Paid',
    receiptNo: 'GAR-2024-0901',
  },
  {
    id: 'pay-2',
    playerId: 'ply-2',
    playerName: 'Pawan Gaikwad',
    batchName: 'Pro Titans',
    amount: 11500,
    date: '2024-11-03',
    dueDate: '2024-11-05',
    method: 'Net Banking',
    status: 'Paid',
    receiptNo: 'GAR-2024-0902',
  },
  {
    id: 'pay-3',
    playerId: 'ply-3',
    playerName: 'Suraj Jadhav',
    batchName: 'Thunder Strike',
    amount: 8000,
    date: '2024-11-01',
    dueDate: '2024-11-05',
    method: 'UPI',
    status: 'Paid',
    receiptNo: 'GAR-2024-0903',
  },
  {
    id: 'pay-4',
    playerId: 'ply-4',
    playerName: 'Ajinkya Shinde',
    batchName: 'Pro Titans',
    amount: 11500,
    date: '2024-11-04',
    dueDate: '2024-11-05',
    method: 'Card',
    status: 'Paid',
    receiptNo: 'GAR-2024-0904',
  },
  {
    id: 'pay-5',
    playerId: 'ply-5',
    playerName: 'Vishal Chougule',
    batchName: 'Thunder Strike',
    amount: 8000,
    date: '2024-11-10',
    dueDate: '2024-11-05',
    method: 'UPI',
    status: 'Pending',
    receiptNo: 'GAR-2024-0905',
  },
  {
    id: 'pay-6',
    playerId: 'ply-7',
    playerName: 'Nitin Mane',
    batchName: 'Warrior Sparks',
    amount: 3800,
    date: '2024-10-25',
    dueDate: '2024-10-30',
    method: 'Cash',
    status: 'Overdue',
    receiptNo: 'GAR-2024-0870',
  },
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Tanmay Patil',
    email: 'tanmay@gmail.com',
    phone: '+91 99887 11223',
    programInterest: 'Thunder Strike (Youth & State Squad)',
    message:
      'Inquiring about residential boarding facility, trial slots, and morning tactical sessions for district-level right raider.',
    date: '2024-11-20',
    status: 'New',
  },
  {
    id: 'enq-2',
    name: 'Siddhesh Shinde',
    email: 'sid@rediffmail.com',
    phone: '+91 99887 33445',
    programInterest: 'Warrior Sparks (U-12 Grassroots)',
    message:
      'Want to enroll my 10-year-old son in grassroots foundation batch under Coach Devendra.',
    date: '2024-11-19',
    status: 'Contacted',
  },
  {
    id: 'enq-3',
    name: 'Kiran More',
    email: 'kiran.m@yahoo.com',
    phone: '+91 99887 55667',
    programInterest: 'Pro Titans (Elite League Preparatory)',
    message:
      'Professional league trial preparation, video biomechanics breakdown, and strength conditioning camp details.',
    date: '2024-11-18',
    status: 'Enrolled',
  },
];

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'State Championship Squad Selection on Sunday',
    message:
      'All Pro Titans and Thunder Strike batch players must report at 6:45 AM on Olympic Mat 1 in full academy kit.',
    date: '2024-11-21',
    targetRole: 'all',
    important: true,
  },
  {
    id: 'not-2',
    title: 'Mat 2 Surface Resurfacing Notice',
    message:
      'Court 2 synthetic surface will be closed for recoating on Friday afternoon.',
    date: '2024-11-19',
    targetRole: 'coach',
    important: false,
  },
  {
    id: 'not-3',
    title: 'Monthly Yo-Yo & Sprint Acceleration Testing',
    message:
      'Physical performance assessment scheduled for Saturday 6:30 AM with Coach Arjun Kadam.',
    date: '2024-11-18',
    targetRole: 'player',
    important: true,
  },
];

// LocalStorage helpers for reactive frontend-only CRUD
export function getStoredData<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(`kabaddi_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage:`, e);
    return fallback;
  }
}

export function setStoredData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`kabaddi_${key}`, JSON.stringify(data));
    window.dispatchEvent(
      new CustomEvent('kabaddi_data_update', { detail: { key, data } })
    );
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

export function resetAllDataToDefault(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem('kabaddi_cms');
    localStorage.removeItem('kabaddi_programs');
    localStorage.removeItem('kabaddi_coaches');
    localStorage.removeItem('kabaddi_facilities');
    localStorage.removeItem('kabaddi_players');
    localStorage.removeItem('kabaddi_batches');
    localStorage.removeItem('kabaddi_events');
    localStorage.removeItem('kabaddi_achievements');
    localStorage.removeItem('kabaddi_gallery');
    localStorage.removeItem('kabaddi_payments');
    localStorage.removeItem('kabaddi_enquiries');
    localStorage.removeItem('kabaddi_notices');

    window.dispatchEvent(
      new CustomEvent('kabaddi_data_update', { detail: { key: 'all' } })
    );
  } catch (e) {
    console.error('Error resetting data:', e);
  }
}
