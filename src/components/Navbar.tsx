import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowUpRight, ShieldCheck, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  activeSection,
  setActiveSection
}) => {
  const { profile, isAdminLoggedIn, logoutAdmin } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', type: 'section' },
    { id: 'about', label: 'About', type: 'section' },
    { id: 'skills', label: 'Skills', type: 'section' },
    { id: 'projects', label: 'Projects', type: 'section' },
    { id: 'services', label: 'Tech Services', type: 'section' },
    { id: 'digital-services', label: 'Digital Citizen Services', type: 'view' },
    { id: 'contact', label: 'Contact', type: 'section' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: { id: string; label: string; type: string }) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetHash = `#${item.id}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }

    if (item.type === 'view') {
      setCurrentView(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'main') {
        setCurrentView('main');
        setTimeout(() => {
          const el = document.getElementById(item.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(item.id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '#home');
                setCurrentView('main');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              }}
              className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded p-1"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2563EB] shadow-xs shrink-0 bg-[#142B4A]">
                <img
                  src="/multhazim-logo.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#142B4A] text-lg tracking-tight leading-none group-hover:text-[#2563EB] transition-colors">
                  {profile.name}
                </span>
                <span className="text-xs text-[#64748B] font-medium tracking-wide mt-0.5">
                  VMAKITEC Solutions
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = (item.type === 'view' && currentView === item.id) ||
                (currentView === 'main' && item.type === 'section' && activeSection === item.id);

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-[#2563EB] bg-[#F3F6FA]'
                      : 'text-[#172033] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAdminLoggedIn ? (
              <div className="flex items-center gap-2">
                <a
                  href="#admin"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', '#admin');
                    setCurrentView('admin');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded border flex items-center gap-1.5 transition-colors ${
                    currentView === 'admin'
                      ? 'bg-[#142B4A] text-white border-[#142B4A]'
                      : 'border-[#142B4A] text-[#142B4A] hover:bg-[#F3F6FA]'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  Admin Console
                </a>
                <button
                  onClick={logoutAdmin}
                  className="px-2.5 py-2 text-xs text-[#64748B] hover:text-red-600 transition-colors"
                  title="Logout Admin"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a
                href="#admin"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '#admin');
                  setCurrentView('admin');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#64748B] hover:text-[#142B4A] px-2.5 py-2 flex items-center gap-1"
                title="Protected Admin Access"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#64748B]" />
                Admin
              </a>
            )}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '#contact');
                if (currentView !== 'main') {
                  setCurrentView('main');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
                setActiveSection('contact');
              }}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2 text-sm font-semibold rounded shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#142B4A] hover:bg-[#F3F6FA] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item)}
              className="block w-full text-left px-3 py-2.5 text-base font-semibold text-[#172033] hover:text-[#2563EB] hover:bg-[#F3F6FA] rounded"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <a
              href="#admin"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.history.pushState(null, '', '#admin');
                setCurrentView('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-[#64748B] hover:text-[#142B4A] flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              {isAdminLoggedIn ? 'Go to Admin Console' : 'Admin Login'}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.history.pushState(null, '', '#contact');
                if (currentView !== 'main') {
                  setCurrentView('main');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
                setActiveSection('contact');
              }}
              className="w-full text-center bg-[#2563EB] text-white py-2.5 rounded font-semibold text-sm block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
