import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, TechService, DigitalCitizenService, ContactEnquiry, DigitalServiceEnquiry, SiteProfile } from '../types';
import { initialProfile, initialProjects, initialTechServices, initialCitizenServices } from '../data/initialData';

interface AppContextType {
  profile: SiteProfile;
  updateProfile: (updated: SiteProfile) => void;
  projects: Project[];
  addProject: (p: Project) => void;
  updateProject: (p: Project) => void;
  deleteProject: (id: string) => void;
  techServices: TechService[];
  updateTechServices: (services: TechService[]) => void;
  citizenServices: DigitalCitizenService[];
  updateCitizenService: (service: DigitalCitizenService) => void;
  addCitizenService: (service: DigitalCitizenService) => void;
  deleteCitizenService: (id: string) => void;
  contactEnquiries: ContactEnquiry[];
  addContactEnquiry: (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateContactEnquiryStatus: (id: string, status: ContactEnquiry['status']) => void;
  digitalEnquiries: DigitalServiceEnquiry[];
  addDigitalEnquiry: (enquiry: Omit<DigitalServiceEnquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateDigitalEnquiryStatus: (id: string, status: DigitalServiceEnquiry['status']) => void;
  // Auth state
  isAdminLoggedIn: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROFILE: 'vmakitec_profile_v4',
  PROJECTS: 'vmakitec_projects_v1',
  TECH_SERVICES: 'vmakitec_tech_services_v1',
  CITIZEN_SERVICES: 'vmakitec_citizen_services_v2',
  CONTACT_ENQUIRIES: 'vmakitec_contact_enquiries_v1',
  DIGITAL_ENQUIRIES: 'vmakitec_digital_enquiries_v1',
  AUTH: 'vmakitec_auth_session'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Profile state - guaranteed to reflect full name Ahamed Multhazim
  const [profile, setProfile] = useState<SiteProfile>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROFILE) ||
      localStorage.getItem('vmakitec_profile_v3') ||
      localStorage.getItem('vmakitec_profile_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.name || parsed.name === 'Multhazim' || parsed.name === 'AHAMED MULTHAZIM') {
          parsed.name = 'Ahamed Multhazim';
        }
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(parsed));
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return initialProfile;
  });

  // Projects state
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return saved ? JSON.parse(saved) : initialProjects;
  });

  // Tech Services state
  const [techServices, setTechServices] = useState<TechService[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TECH_SERVICES);
    return saved ? JSON.parse(saved) : initialTechServices;
  });

  // Citizen Services state
  const [citizenServices, setCitizenServices] = useState<DigitalCitizenService[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CITIZEN_SERVICES);
    return saved ? JSON.parse(saved) : initialCitizenServices;
  });

  // Contact Enquiries
  const [contactEnquiries, setContactEnquiries] = useState<ContactEnquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CONTACT_ENQUIRIES);
    return saved ? JSON.parse(saved) : [];
  });

  // Digital Service Enquiries
  const [digitalEnquiries, setDigitalEnquiries] = useState<DigitalServiceEnquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DIGITAL_ENQUIRIES);
    return saved ? JSON.parse(saved) : [];
  });

  // Admin Auth session
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'authenticated';
  });

  // Persistence effects
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TECH_SERVICES, JSON.stringify(techServices));
  }, [techServices]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CITIZEN_SERVICES, JSON.stringify(citizenServices));
  }, [citizenServices]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTACT_ENQUIRIES, JSON.stringify(contactEnquiries));
  }, [contactEnquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DIGITAL_ENQUIRIES, JSON.stringify(digitalEnquiries));
  }, [digitalEnquiries]);

  // Operations
  const updateProfile = (updated: SiteProfile) => setProfile(updated);

  const addProject = (p: Project) => setProjects(prev => [p, ...prev]);

  const updateProject = (p: Project) => {
    setProjects(prev => prev.map(item => item.id === p.id ? p : item));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(item => item.id !== id));
  };

  const updateTechServices = (services: TechService[]) => setTechServices(services);

  const updateCitizenService = (service: DigitalCitizenService) => {
    setCitizenServices(prev => prev.map(s => s.id === service.id ? service : s));
  };

  const addCitizenService = (service: DigitalCitizenService) => {
    setCitizenServices(prev => [service, ...prev]);
  };

  const deleteCitizenService = (id: string) => {
    setCitizenServices(prev => prev.filter(s => s.id !== id));
  };

  const addContactEnquiry = (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEntry: ContactEnquiry = {
      ...enquiry,
      id: 'cnt-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    setContactEnquiries(prev => [newEntry, ...prev]);
  };

  const updateContactEnquiryStatus = (id: string, status: ContactEnquiry['status']) => {
    setContactEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const addDigitalEnquiry = (enquiry: Omit<DigitalServiceEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEntry: DigitalServiceEnquiry = {
      ...enquiry,
      id: 'ds-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    setDigitalEnquiries(prev => [newEntry, ...prev]);
  };

  const updateDigitalEnquiryStatus = (id: string, status: DigitalServiceEnquiry['status']) => {
    setDigitalEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const loginAdmin = (passwordInput: string): boolean => {
    // Demo admin passcode for protected client administration
    // In production, Supabase / server auth handles this securely via RLS
    if (passwordInput === 'multhazim@admin2026' || passwordInput === 'admin123') {
      sessionStorage.setItem(STORAGE_KEYS.AUTH, 'authenticated');
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    setIsAdminLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{
      profile,
      updateProfile,
      projects,
      addProject,
      updateProject,
      deleteProject,
      techServices,
      updateTechServices,
      citizenServices,
      updateCitizenService,
      addCitizenService,
      deleteCitizenService,
      contactEnquiries,
      addContactEnquiry,
      updateContactEnquiryStatus,
      digitalEnquiries,
      addDigitalEnquiry,
      updateDigitalEnquiryStatus,
      isAdminLoggedIn,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
