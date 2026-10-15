# Supabase Database Migration & Schema Setup
-- Run this in your Supabase SQL Editor to enable persistent cloud storage with Row Level Security (RLS)

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  headline TEXT NOT NULL,
  subheadline TEXT,
  business_name TEXT NOT NULL,
  business_tagline TEXT,
  about_intro TEXT,
  about_education TEXT,
  about_career_goals TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  location TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  resume_file_name TEXT,
  profile_photo_path TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  problem_statement TEXT,
  solution TEXT,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL CHECK (category IN ('AI & Data', 'Web & Mobile', 'Systems & Automation')),
  status TEXT NOT NULL CHECK (status IN ('Concept', 'Prototype', 'In Development', 'Completed')),
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  my_role TEXT,
  challenges TEXT,
  results TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Digital Citizen Services Catalog
CREATE TABLE IF NOT EXISTS public.digital_citizen_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('e-Sevai & Certificates', 'Driving & Licences', 'Land & Property', 'Vehicle & RTO', 'Other Digital Services')),
  short_explanation TEXT NOT NULL,
  eligibility_notes TEXT,
  document_checklist TEXT[] NOT NULL DEFAULT '{}',
  official_portal_url TEXT NOT NULL,
  official_portal_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Available' CHECK (status IN ('Available', 'Requires Confirmation', 'Information Only')),
  estimated_government_fee TEXT,
  is_popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Contact Enquiries
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email_or_phone TEXT NOT NULL,
  subject TEXT,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Progress', 'Completed', 'Closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Digital Citizen Service Assistance Requests
CREATE TABLE IF NOT EXISTS public.digital_service_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  contact_method TEXT NOT NULL CHECK (contact_method IN ('Phone', 'WhatsApp', 'Email')),
  contact_value TEXT NOT NULL,
  service_category TEXT NOT NULL,
  requested_service TEXT NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Progress', 'Completed', 'Closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_citizen_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_service_enquiries ENABLE ROW LEVEL SECURITY;

-- Public Read Access for Showcases
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Citizen services are viewable by everyone" ON public.digital_citizen_services FOR SELECT USING (true);

-- Public Submit Access for Enquiries
CREATE POLICY "Anyone can submit contact enquiries" ON public.contact_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit digital service requests" ON public.digital_service_enquiries FOR INSERT WITH CHECK (true);

-- Admin Full Access (Authenticated administrators only)
CREATE POLICY "Admins have full access to enquiries" ON public.contact_enquiries FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins have full access to digital service requests" ON public.digital_service_enquiries FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can modify projects" ON public.projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can modify citizen services" ON public.digital_citizen_services FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can update profile" ON public.profiles FOR ALL TO authenticated USING (true);
