# Multhazim — AI & Data Science Portfolio & VMAKITEC Digital Services

A modern, production-ready web application combining a technical engineering portfolio for an AI & Data Science graduate with a digital citizen service platform for **VMAKITEC Services and Tech Solutions** (“*We Make It Easy*”).

---

## 🎨 Visual Design System Compliance
- **Predominantly White Background**: `#FFFFFF`
- **Secondary Headings & Navigation**: Deep Navy Blue (`#142B4A`)
- **Accent Elements & Links**: Electric Blue (`#2563EB`)
- **Secondary Background**: Light Grey (`#F3F6FA`)
- **Main Text**: Dark Charcoal (`#172033`)
- **Muted Text**: Slate Grey (`#64748B`)
- **Borders**: Soft Grey (`#E2E8F0`)
- **Zero Gradients & Zero Clutter**: Clean cards, restrained shadows, Lucide & SVG icons, and Plus Jakarta Sans typography.

---

## 📸 Real Uploaded Photograph
- Your genuine photograph is served from [`/public/multhazim-profile.png`](file:///c:/Users/ahame/OneDrive/multhazim/multo%20portfolio/public/multhazim-profile.png) and embedded into the interactive 3D hero portrait card and About section.
- Zero face-smoothing or artificial generative modifications applied.

---

## 🚀 Key Features

### 1. Engineering Portfolio
- **Hero Section**: Distinctive headline, subheadline, interactive 3D tilt portrait card, quick verified status badges, and direct CTAs.
- **About Section**: Detailed academic foundation (Final-Year B.Tech AI & Data Science), career aspirations, VMAKITEC founding background, and verified profiles.
- **Skills Architecture**: Four clean categories (*AI and Data*, *Web Development*, *Mobile Development*, *Tools & Technologies*) with factual context instead of fabricated percentage bars.
- **Filterable Projects Repository**:
  - *Employee Predictive Analysis* (Python, Power BI, WEKA)
  - *MultoBill — Smart Billing Application* (Flutter, Hive, Bloc)
  - *Offline-First Rural Telehealth & Smart Triage* (Node.js, Express, MongoDB)
  - *LearnBridge AI* (Concept)
  - *AI Interview Coach and Analyzer* (Prototype)
  - Interactive Project Detail Modal with problem statement, technical solution, challenges, and stack tags.
- **Technology Services**: Cards for Website Engineering, Mobile Apps, Applied AI, Power BI Dashboards, and Process Automation with integrated quotation enquiry modal.
- **Contact & Scoping**: Validated inquiry form with categorization, direct email, phone, location, and privacy consent.

### 2. Digital Citizen Services Portal
- Separate dedicated service interface for Tamil Nadu citizens.
- **Category 1**: Tamil Nadu e-Sevai & Certificates (Community, Income, Nativity, First Graduate, Legal Heir, Solvency).
- **Category 2**: Learner’s Licence & Driving Licence (LLR, DL test guidance, Renewal, Duplicate).
- **Category 3**: Land & Property Services (Patta transfer, Chitta/'A' Register viewing, Encumbrance Certificate).
- **Category 4**: Vehicle & RTO Services (RC duplicate, ownership transfer, e-Challan checks).
- **Category 5**: Other Digital Services (PAN, Voter ID, document preparation).
- **Mandatory Statutory Legal Disclaimer**: Clarifies that VMAKITEC provides independent document preparation and submission assistance, does not claim government affiliation, and never asks for Aadhaar OTPs or banking PINs.
- Working assistance request modal with contact preference (Phone, WhatsApp, Email).

### 3. Protected Admin Console
- Accessible at `#admin` or via the Navbar button.
- Passcode protected (`multhazim@admin2026` or `admin123`).
- **Overview Dashboard**: Aggregate stats on inquiries and services.
- **Contact Enquiries Management**: View incoming inquiries and change status (`New`, `In Progress`, `Completed`, `Closed`).
- **Citizen Service Requests**: Real-time review of application assistance requests.
- **Projects CMS**: Add, edit, or delete portfolio projects.
- **Citizen Services Catalog Editor**: Add, modify, or remove citizen services, checklists, and portal links.
- **Identity & Settings Editor**: Update display name, hero headline, about narrative, email, phone, and social links with instant reactivity.

---

## 🛠️ Local Development & Commands

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript compilation and production bundle build
npm run build

# Preview production build locally
npm run preview
```

Development server runs by default at `http://localhost:5173/`.

---

## 🗄️ Database & Cloud Deployment (Supabase)
The application works offline with `localStorage` and `sessionStorage` out of the box. To connect Supabase for cloud database sync:
1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Copy SQL from [`/supabase/schema.sql`](file:///c:/Users/ahame/OneDrive/multhazim/multo%20portfolio/supabase/schema.sql) and run it in the Supabase SQL Editor.
3. Configure your `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Row Level Security (RLS) is already defined in `schema.sql` to protect customer enquiries from public exposure.
