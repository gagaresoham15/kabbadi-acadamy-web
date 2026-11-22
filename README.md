# 🏆 KABADDI ACADEMY MANAGEMENT SYSTEM
> **TRAIN HARD. PLAY SMART. WIN TOGETHER.**

A modern, high-performance, and fully responsive **Kabaddi Academy Management System** frontend built with **React.js, Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React Icons, and Framer Motion**.

Designed strictly to match professional sports academy UI/UX design specifications, featuring full responsiveness across **Mobile, Tablet, Laptop, and Widescreen Desktop displays**.

---

## 🎨 Color Palette & Design System

- **Primary Orange:** `#FF6B1A`
- **Secondary Orange:** `#FF8A25`
- **Deep Navy:** `#101C2C`
- **Dark Background:** `#080D14`
- **Card Background:** `#171F2B`
- **Secondary Card:** `#252F3D`
- **Success Green:** `#22C55E`
- **Error Red:** `#EF4444`
- **Text Grey:** `#AAB2BD`
- **Text White:** `#FFFFFF`

---

## 🚀 Key Modules & 48 Interactive Static Screens

### 1. 🌐 Public Academy Website (9 Screens)
- **Home (`/`):** Hero section with PKL athlete action visuals, training programs preview, expert coach profiles, tournament highlights, and achievement counters.
- **About Academy (`/about`):** Mission, vision, sports facilities, synthetic mats, and legacy.
- **Training Programs (`/programs`):** Basic, Advanced, Fitness & Conditioning, and Competition Pre-trials.
- **Expert Coaches (`/coaches`):** PKL coaches, NIS certified mentors, and specialized trainers.
- **Photo Gallery (`/gallery`):** High-definition match action, trophy celebrations, and practice sessions with category filtering.
- **Tournaments & Events (`/events`):** Upcoming championships, venue details, and registration forms.
- **Honors & Achievements (`/achievements`):** National medals, state trophies, and player milestones.
- **Contact Us (`/contact`):** Interactive contact form, phone helpline, email, and Google map locator.
- **Player Registration (`/register`):** Multi-step athlete onboarding with validation and terms acceptance.

### 2. 🛡️ Admin Control Center (14 Screens)
- **Dashboard (`/admin`):** KPI metric cards (Total Students 1,250, Active Players 980, Events 12, Revenue ₹2,50,000), interactive revenue/growth charts, batch distributions, and recent audit activity feed.
- **Students Management (`/admin/students`):** Search, filter, add/edit/delete player records, attendance & fee status.
- **Coaches Management (`/admin/coaches`):** NIS coach records, assignments, and contact details.
- **Training Programs (`/admin/programs`):** Curriculum management, batch fee adjustments, and duration controls.
- **Batch Management (`/admin/batches`):** Morning & Evening batches, synthetic mat allocations, and coach assignments.
- **Attendance Management (`/admin/attendance`):** Daily mat roll-call, present/absent/late tracking, and monthly percentage audits.
- **Fees & Payments (`/admin/payments`):** Receipt generation, dues tracking, and payment confirmation.
- **Tournaments & Events (`/admin/events`):** Event creator, venue manager, and squad registrations.
- **Achievements & Trophies (`/admin/achievements`):** Award archive and honors management.
- **Gallery Management (`/admin/gallery`):** Upload, categorize, and showcase media items.
- **Enquiries (`/admin/enquiries`):** Admission queries, prospective student leads, and callback logs.
- **Reports & Analytics (`/admin/reports`):** In-depth visual charts for attendance, revenue, and batch growth.
- **Website CMS (`/admin/cms`):** Manage announcement tickers, banner text, and academy highlights.
- **Settings (`/admin/settings`):** Portal configurations, branding, and security parameters.

### 3. 🏅 Coach Panel (9 Screens)
- **Dashboard (`/coach`):** Coach overview, active assigned batches, today's practice schedule, and quick attendance call.
- **My Batches (`/coach/batches`):** Detailed rosters for Morning Conditioning and Evening Rising Stars.
- **My Players (`/coach/players`):** Athlete biometric records, weight classes, positions (Raider/Cover/Corner), and performance ratings.
- **Training Schedule (`/coach/schedule`):** Weekly drill timetable across Mat 1, Mat 2, and High-Performance Gym.
- **Mark Attendance (`/coach/attendance`):** Quick 1-click batch attendance with real-time summary counters.
- **Player Performance (`/coach/performance`):** Touch conversion rates, bonus crosses, dubki evasion rates, and coach review notes.
- **Tournaments (`/coach/events`):** Tournament squad selections and starting 7 lineup sheets.
- **Profile (`/coach/profile`):** Coach bio, NIS certification records, and career accomplishments.
- **Settings (`/coach/settings`):** Session notification alerts and batch preferences.

### 4. 🏃‍♂️ Athlete / Player Portal (13 Screens - Mobile & Desktop Responsive)
- **Player Dashboard (`/player`):** 
  - *Mobile:* Native app-like experience matching reference design with quick navigation icons, "Be a Champion" promo banner, and today's training cards.
  - *Desktop:* Wide multi-column layout with athlete metrics, weekly timetable, circular 75% training gauge, and recent awards.
- **My Progress & Performance (`/player/performance`):** Circular SVG progress gauge, 24 Sessions / 12 Wins / 3 Trophies metrics, tactical raid/tackle skill bars, and coach review report.
- **Training Programs (`/player/programs`):** Enrolled curriculum and batch upgrade options.
- **Training Schedule (`/player/schedule`):** Day-by-day practice sessions and mat assignments.
- **Attendance History (`/player/attendance`):** 30-day session logs and tournament eligibility audit (>85%).
- **Fee Details (`/player/fees`):** Current active subscription, term fees, and downloadable tax receipts.
- **Tournaments & Trials (`/player/tournaments`):** State trials registration, entry forms, and prize pool fixtures.
- **Honors & Trophies (`/player/achievements`):** Personal medals, MVP trophies, and certificate archives.
- **Athlete Profile (`/player/profile`):** Biometrics, jersey number, weight class, blood group, and emergency contacts.
- **Notifications & Alerts (`/player/notifications`):** Priority announcements, mat shoes inspection alerts, and trial dates.
- **Settings (`/player/settings`):** Push notifications, hydration alerts, and security passcode.
- **Login & Register (`/player/login`, `/player/register`):** Client-side demo authentication flows.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14.2.15 (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Data Visualization:** Recharts
- **State Management & Persistence:** React hooks (`useState`, `useEffect`) + `localStorage`
- **Images:** High-Definition Sports Photography

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.17 or higher
- npm or pnpm

### Installation

1. Clone repository:
   ```bash
   git clone https://github.com/gagaresoham15/kabbadi-acadamy-web.git
   cd kabbadi-acadamy-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Or create optimized production build:
   ```bash
   npm run build
   npm run start
   ```

5. Open your browser:
   - **Public Website:** `http://localhost:3000/`
   - **Admin Dashboard:** `http://localhost:3000/admin`
   - **Coach Panel:** `http://localhost:3000/coach`
   - **Player Portal:** `http://localhost:3000/player`

---

## 📄 License
This project is proprietary and built for Kabaddi Academy sports development.
All rights reserved.
