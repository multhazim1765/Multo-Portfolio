import { useApp } from '../context/AppContext';
import { Mail, ArrowUp, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onDigitalServicesClick: () => void;
  onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onDigitalServicesClick,
  onAdminClick
}) => {
  const { profile } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142B4A] text-white pt-16 pb-12 border-t border-[#142B4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#2563EB] shrink-0 bg-white">
                <img
                  src="/multhazim-logo.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Final-Year B.Tech Artificial Intelligence & Data Science Engineer. Founder of <strong className="text-white">{profile.businessName}</strong> (“{profile.businessTagline}”). Building resilient software systems and citizen-facing digital application guidance.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Base: {profile.location}</div>
              <div>Direct: {profile.email}</div>
            </div>
          </div>

          {/* Technical Portfolio Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Engineering
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Home Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  About & Background
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('skills');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Skills & Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('projects');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Tech Offerings
                </a>
              </li>
            </ul>
          </div>

          {/* VMAKITEC Citizen Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Citizen Digital Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#digital-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onDigitalServicesClick();
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Tamil Nadu e-Sevai Certificates
                </a>
              </li>
              <li>
                <a
                  href="#digital-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onDigitalServicesClick();
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Learner's & Driving Licence (Sarathi)
                </a>
              </li>
              <li>
                <a
                  href="#digital-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onDigitalServicesClick();
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Land Records & Patta Guidance
                </a>
              </li>
              <li>
                <a
                  href="#digital-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onDigitalServicesClick();
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Vehicle RC & RTO Services
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Network
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-left"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Inquiry
              </button>
              <button
                onClick={onAdminClick}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors pt-2 text-[11px]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                Admin Console
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Statutory Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.name} • {profile.businessName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Independent Technology & Documentation Service
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
