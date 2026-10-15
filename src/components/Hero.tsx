import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, FileText, Mail, ShieldCheck, Sparkles, Code2, Database } from 'lucide-react';
import { ResumeModal } from './ResumeModal';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onDigitalServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContactClick,
  onDigitalServicesClick
}) => {
  const { profile } = useApp();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Restrained, subtle 3D tilt calculation
    setTilt({
      x: -(y / rect.height) * 10,
      y: (x / rect.width) * 10
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F3F6FA] border border-[#E2E8F0] w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-[#142B4A] tracking-wide">
                Final-Year B.Tech AI & Data Science • Technology Entrepreneur
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight leading-[1.15] mb-5">
              {profile.headline}
            </h1>

            {/* Subheadline and support text */}
            <p className="text-lg text-[#172033] font-medium leading-relaxed mb-3">
              {profile.subheadline}
            </p>
            <p className="text-base text-[#64748B] leading-relaxed mb-8 max-w-2xl">
              Founder of <strong className="text-[#142B4A] font-semibold">{profile.businessName}</strong> (“{profile.businessTagline}”). Building high-speed mobile apps, predictive machine learning pipelines, and verified citizen service application assistance for Tamil Nadu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onExploreProjects}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3.5 text-sm font-semibold rounded shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="border border-[#142B4A] text-[#142B4A] hover:bg-[#F3F6FA] px-6 py-3.5 text-sm font-semibold rounded transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                Contact Me
              </button>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="px-4 py-3.5 text-sm font-semibold text-[#64748B] hover:text-[#142B4A] flex items-center gap-1.5 transition-colors cursor-pointer"
                title="View Resume"
              >
                <FileText className="w-4 h-4 text-[#64748B]" />
                View Resume
              </button>
            </div>

            {/* Resume Viewer Modal */}
            <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

            {/* Quick Metrics & Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]">
              <div className="border-l-2 border-[#2563EB] pl-3">
                <span className="block text-xl font-bold text-[#142B4A]">AI & DS</span>
                <span className="text-xs text-[#64748B]">B.Tech Final Year</span>
              </div>
              <div className="border-l-2 border-[#142B4A] pl-3">
                <span className="block text-xl font-bold text-[#142B4A]">VMAKITEC</span>
                <span className="text-xs text-[#64748B]">Tech & e-Sevai Support</span>
              </div>
              <div className="border-l-2 border-emerald-600 pl-3">
                <span className="block text-xl font-bold text-[#142B4A]">Offline-First</span>
                <span className="text-xs text-[#64748B]">Flutter & Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Hero Portrait with subtle 3D Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="hero-photo-wrapper relative w-full max-w-sm sm:max-w-md"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="hero-photo-inner bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 sm:p-4 transition-transform duration-200"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                }}
              >
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <img
                    src={profile.profilePhotoPath}
                    alt={`${profile.name} - AI & Data Science Engineer`}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  
                  {/* Subtle verified overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] rounded p-2.5 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-[#142B4A] flex items-center gap-1.5">
                        {profile.name}
                        <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                      </div>
                      <div className="text-[11px] text-[#64748B] font-medium">
                        AI Engineer & Founder
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer description */}
                <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                    Artificial Intelligence
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#142B4A]" />
                    Full-Stack
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#2563EB]" />
                    Data Analytics
                  </span>
                </div>
              </div>

              {/* Citizen Service Assist Quick Callout */}
              <div className="mt-4 bg-[#F3F6FA] border border-[#E2E8F0] rounded-lg p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#142B4A]">
                    Need e-Sevai, LLR or Land Record Help?
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Assistance through VMAKITEC Services
                  </div>
                </div>
                <button
                  onClick={onDigitalServicesClick}
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1d4ed8] underline"
                >
                  View Portal →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
