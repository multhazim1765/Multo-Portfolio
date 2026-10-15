import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Globe, Code2, Smartphone, Cpu, CheckCircle } from 'lucide-react';

interface TechServicesProps {
  onEnquireNow?: (serviceTitle: string) => void;
}

export const TechServicesSection: React.FC<TechServicesProps> = () => {
  return (
    <section id="services" className="py-20 bg-[#F3F6FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Hub redirecting all tech services to official website */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3F6FA] border border-[#E2E8F0] text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
              Official Technology Portal
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B4A] tracking-tight mb-4">
              VMAKITEC Services & Tech Solutions
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed mb-6">
              All technology services, web development, mobile applications, AI solutions, data analytics, and digital product consulting are hosted and managed directly through our official company platform at <strong className="text-[#142B4A]">vmakitec.tech</strong>.
            </p>

            {/* Feature highlights of what is available on vmakitec.tech */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#172033]">
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Full-Stack & Custom Website Development</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Cross-Platform Flutter Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Applied AI, Machine Learning & Automation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Enterprise Architecture & Technical Scoping</span>
              </div>
            </div>

            {/* Direct Official Link CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://vmakitec.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-7 py-3.5 text-sm font-bold rounded shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group"
              >
                <span>Visit Official Website (vmakitec.tech)</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs text-[#64748B] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Official Company Domain
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
