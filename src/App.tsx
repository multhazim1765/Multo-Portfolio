import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechServicesSection } from './components/TechServicesSection';
import { ContactSection } from './components/ContactSection';
import { DigitalCitizenServicesView } from './components/DigitalCitizenServicesView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { Footer } from './components/Footer';

function MainApp() {
  const [currentView, setCurrentView] = useState<'main' | 'digital-services' | 'admin'>('main');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Helper to sync route/hash into state and scroll
  const applyRoute = (route: string, smoothScroll: boolean = false) => {
    const cleanRoute = route.replace(/^#\/?/, '').toLowerCase();
    
    if (cleanRoute === 'digital-services' || cleanRoute === 'citizen-services') {
      setCurrentView('digital-services');
      setActiveSection('digital-services');
      window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
      return;
    }

    if (cleanRoute === 'admin' || cleanRoute === 'admin-console') {
      setCurrentView('admin');
      setActiveSection('admin');
      window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
      return;
    }

    // Main portfolio sections
    const targetSection = ['home', 'about', 'skills', 'projects', 'services', 'contact'].includes(cleanRoute)
      ? cleanRoute
      : 'home';

    setCurrentView('main');
    setActiveSection(targetSection);

    setTimeout(() => {
      if (targetSection === 'home') {
        window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
      } else {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: smoothScroll ? 'smooth' : 'auto' });
        }
      }
    }, 50);
  };

  // Sync initial hash on page load and on browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        applyRoute(hash, true);
      } else {
        applyRoute('home', true);
      }
    };

    // Initial load check
    if (window.location.hash) {
      applyRoute(window.location.hash, false);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync active section on scroll and update URL hash dynamically
  useEffect(() => {
    if (currentView !== 'main') return;

    const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            
            // Debounce updating URL hash without jump
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              const newHash = sectionId === 'home' ? '' : `#${sectionId}`;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, '', newHash || window.location.pathname);
              }
            }, 100);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [currentView]);

  const handleNavigateToSection = (sectionId: string) => {
    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
    applyRoute(sectionId, true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172033] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          if (view === 'main') {
            window.history.pushState(null, '', '#home');
            applyRoute('home', true);
          } else {
            window.history.pushState(null, '', `#${view}`);
            applyRoute(view, true);
          }
        }}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'main' && (
          <>
            <Hero
              onExploreProjects={() => handleNavigateToSection('projects')}
              onContactClick={() => handleNavigateToSection('contact')}
              onDigitalServicesClick={() => {
                window.history.pushState(null, '', '#digital-services');
                applyRoute('digital-services', true);
              }}
            />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TechServicesSection
              onEnquireNow={() => handleNavigateToSection('contact')}
            />
            <ContactSection />
          </>
        )}

        {currentView === 'digital-services' && (
          <DigitalCitizenServicesView
            onBackToPortfolio={() => {
              window.history.pushState(null, '', '#home');
              applyRoute('home', true);
            }}
          />
        )}

        {currentView === 'admin' && (
          <AdminDashboardView
            onBackToPortfolio={() => {
              window.history.pushState(null, '', '#home');
              applyRoute('home', true);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateToSection}
        onDigitalServicesClick={() => {
          window.history.pushState(null, '', '#digital-services');
          applyRoute('digital-services', true);
        }}
        onAdminClick={() => {
          window.history.pushState(null, '', '#admin');
          applyRoute('admin', true);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
