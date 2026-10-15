export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement?: string;
  solution?: string;
  techStack: string[];
  category: 'AI & Data' | 'Web & Mobile' | 'Systems & Automation';
  status: 'Concept' | 'Prototype' | 'In Development' | 'Completed';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  myRole?: string;
  challenges?: string;
  results?: string;
}

export interface TechService {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  category: string;
  deliverables: string[];
  iconName: string;
}

export interface DigitalCitizenService {
  id: string;
  name: string;
  category: 'e-Sevai & Certificates' | 'Driving & Licences' | 'Land & Property' | 'Vehicle & RTO' | 'Other Digital Services';
  shortExplanation: string;
  eligibilityNotes?: string;
  documentChecklist: string[];
  officialPortalUrl: string;
  officialPortalName: string;
  status: 'Available' | 'Requires Confirmation' | 'Information Only';
  estimatedGovernmentFee?: string;
  isPopular?: boolean;
}

export interface ContactEnquiry {
  id: string;
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  category: string;
  createdAt: string;
  status: 'New' | 'In Progress' | 'Completed' | 'Closed';
}

export interface DigitalServiceEnquiry {
  id: string;
  customerName: string;
  contactMethod: 'Phone' | 'WhatsApp' | 'Email';
  contactValue: string;
  serviceCategory: string;
  requestedService: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'In Progress' | 'Completed' | 'Closed';
}

export interface SiteProfile {
  name: string;
  headline: string;
  subheadline: string;
  tagline: string;
  businessName: string;
  businessTagline: string;
  aboutIntro: string;
  aboutEducation: string;
  aboutCareerGoals: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFileName: string;
  profilePhotoPath: string;
}
