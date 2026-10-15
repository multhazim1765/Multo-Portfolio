import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Lock, 
  LogOut, 
  Layers, 
  Inbox, 
  FileCheck2, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  Search, 
  RefreshCw,
  FolderKanban,
  FileSpreadsheet
} from 'lucide-react';
import { Project, DigitalCitizenService } from '../types';

export const AdminDashboardView: React.FC<{ onBackToPortfolio: () => void }> = ({ onBackToPortfolio }) => {
  const {
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    profile,
    updateProfile,
    projects,
    addProject,
    updateProject,
    deleteProject,
    citizenServices,
    updateCitizenService,
    addCitizenService,
    deleteCitizenService,
    contactEnquiries,
    updateContactEnquiryStatus,
    digitalEnquiries,
    updateDigitalEnquiryStatus
  } = useApp();

  // Login form state
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard active tab
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'digitalEnquiries' | 'projects' | 'services' | 'profile'>('overview');

  // Profile edit state
  const [profileForm, setProfileForm] = useState(profile);
  const [profileSavedNotice, setProfileSavedNotice] = useState(false);

  // Project modal state
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    techStack: [],
    category: 'AI & Data',
    status: 'In Development',
    image: '/projects/default.png',
    featured: false
  });
  const [techStackInput, setTechStackInput] = useState('');

  // Citizen Service modal state
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<DigitalCitizenService | null>(null);
  const [serviceForm, setServiceForm] = useState<Partial<DigitalCitizenService>>({
    name: '',
    category: 'e-Sevai & Certificates',
    shortExplanation: '',
    eligibilityNotes: '',
    documentChecklist: [],
    officialPortalUrl: 'https://www.tnesevai.tn.gov.in/citizen/',
    officialPortalName: 'TN e-Sevai',
    status: 'Available'
  });
  const [docChecklistInput, setDocChecklistInput] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = loginAdmin(passcode);
    if (!success) {
      setLoginError('Invalid Administrator Passcode. Please try again.');
    } else {
      setPasscode('');
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    setProfileSavedNotice(true);
    setTimeout(() => setProfileSavedNotice(false), 2500);
  };

  // Project operations
  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjectForm({
      title: '',
      shortDescription: '',
      fullDescription: '',
      techStack: [],
      category: 'AI & Data',
      status: 'In Development',
      image: '/projects/default.png',
      featured: false
    });
    setTechStackInput('');
    setProjectModalOpen(true);
  };

  const openEditProjectModal = (p: Project) => {
    setEditingProject(p);
    setProjectForm(p);
    setTechStackInput(p.techStack.join(', '));
    setProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const stack = techStackInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingProject) {
      updateProject({
        ...editingProject,
        ...(projectForm as Project),
        techStack: stack
      });
    } else {
      const newProj: Project = {
        id: 'proj-' + Date.now(),
        title: projectForm.title || 'Untitled Project',
        shortDescription: projectForm.shortDescription || '',
        fullDescription: projectForm.fullDescription || '',
        techStack: stack,
        category: projectForm.category as any,
        status: projectForm.status as any,
        image: projectForm.image || '/projects/default.png',
        featured: !!projectForm.featured
      };
      addProject(newProj);
    }
    setProjectModalOpen(false);
  };

  // Citizen Service operations
  const openNewServiceModal = () => {
    setEditingService(null);
    setServiceForm({
      name: '',
      category: 'e-Sevai & Certificates',
      shortExplanation: '',
      eligibilityNotes: '',
      documentChecklist: [],
      officialPortalUrl: 'https://www.tnesevai.tn.gov.in/citizen/',
      officialPortalName: 'TN e-Sevai',
      status: 'Available'
    });
    setDocChecklistInput('');
    setServiceModalOpen(true);
  };

  const openEditServiceModal = (s: DigitalCitizenService) => {
    setEditingService(s);
    setServiceForm(s);
    setDocChecklistInput(s.documentChecklist.join(', '));
    setServiceModalOpen(true);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    const docs = docChecklistInput
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean);

    if (editingService) {
      updateCitizenService({
        ...editingService,
        ...(serviceForm as DigitalCitizenService),
        documentChecklist: docs
      });
    } else {
      const newService: DigitalCitizenService = {
        id: 'serv-' + Date.now(),
        name: serviceForm.name || 'Untitled Service',
        category: serviceForm.category as any,
        shortExplanation: serviceForm.shortExplanation || '',
        eligibilityNotes: serviceForm.eligibilityNotes,
        documentChecklist: docs,
        officialPortalUrl: serviceForm.officialPortalUrl || 'https://www.tnesevai.tn.gov.in/citizen/',
        officialPortalName: serviceForm.officialPortalName || 'Official Portal',
        status: serviceForm.status as any
      };
      addCitizenService(newService);
    }
    setServiceModalOpen(false);
  };

  // If not logged in, show secure login screen
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F3F6FA] flex flex-col justify-center items-center px-4 py-12">
        <div className="max-w-md w-full bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-[#142B4A] text-white rounded-lg flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl font-bold text-[#142B4A]">Admin Console Login</h2>
            <p className="text-xs text-[#64748B] mt-1">
              Secure area to manage portfolio projects, digital citizen services, and incoming customer enquiries.
            </p>
          </div>

          {loginError && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded text-xs text-red-800">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#142B4A] mb-1">
                Administrator Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin password..."
                className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#142B4A] hover:bg-[#2563EB] text-white py-2.5 text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Authenticate
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-center">
            <button
              onClick={onBackToPortfolio}
              className="text-xs text-[#64748B] hover:text-[#142B4A] underline"
            >
              ← Return to Public Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard main layout
  return (
    <div className="min-h-screen bg-[#F3F6FA]">
      
      {/* Admin Navbar */}
      <div className="bg-[#142B4A] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-[#142B4A]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#2563EB] shrink-0 bg-white">
            <img
              src="/multhazim-logo.jpg"
              alt="Admin Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-bold text-sm block">VMAKITEC Admin Console</span>
            <span className="text-[11px] text-slate-300">Logged in as Administrator</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBackToPortfolio}
            className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded hover:bg-white/10 transition-colors"
          >
            Public Site View
          </button>
          <button
            onClick={logoutAdmin}
            className="text-xs bg-red-600/80 hover:bg-red-600 text-white px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Admin Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#E2E8F0] pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'overview' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Overview
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'contacts' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            Contact Enquiries ({contactEnquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('digitalEnquiries')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'digitalEnquiries' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            Digital Service Requests ({digitalEnquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'projects' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            Projects CMS ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'services' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Citizen Services Catalog ({citizenServices.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'profile' ? 'bg-[#142B4A] text-white' : 'bg-white text-[#172033] border border-[#E2E8F0]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            Site & Identity Settings
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-5">
                <span className="text-xs font-bold text-[#64748B] block mb-1">Total Enquiries</span>
                <span className="text-2xl font-extrabold text-[#142B4A]">{contactEnquiries.length + digitalEnquiries.length}</span>
                <span className="text-[11px] text-[#2563EB] block mt-1">Recorded in local DB</span>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-5">
                <span className="text-xs font-bold text-[#64748B] block mb-1">Active Projects</span>
                <span className="text-2xl font-extrabold text-[#142B4A]">{projects.length}</span>
                <span className="text-[11px] text-emerald-600 block mt-1">Ready in showcase</span>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-5">
                <span className="text-xs font-bold text-[#64748B] block mb-1">Citizen Services</span>
                <span className="text-2xl font-extrabold text-[#142B4A]">{citizenServices.length}</span>
                <span className="text-[11px] text-[#64748B] block mt-1">Tamil Nadu e-Sevai & RTO</span>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-5">
                <span className="text-xs font-bold text-[#64748B] block mb-1">Security Status</span>
                <span className="text-2xl font-extrabold text-emerald-600">Active</span>
                <span className="text-[11px] text-[#64748B] block mt-1">Zero Secrets Exposed</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
              <h3 className="text-base font-bold text-[#142B4A] mb-3">Administrative Controls</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openNewProjectModal}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2 text-xs font-semibold rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add New Project
                </button>
                <button
                  onClick={openNewServiceModal}
                  className="bg-[#142B4A] hover:bg-[#1f3f6b] text-white px-4 py-2 text-xs font-semibold rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Citizen Service
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="border border-[#142B4A] text-[#142B4A] hover:bg-[#F3F6FA] px-4 py-2 text-xs font-semibold rounded"
                >
                  Edit Profile & Contact Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT ENQUIRIES */}
        {activeTab === 'contacts' && (
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <h3 className="text-base font-bold text-[#142B4A] mb-4">
              General Contact & Tech Enquiries ({contactEnquiries.length})
            </h3>

            {contactEnquiries.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#64748B] bg-[#F8FAFC] rounded border border-[#E2E8F0]">
                No contact enquiries received yet. Try submitting the contact form on the public site to test!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F3F6FA] border-b border-[#E2E8F0] text-[#142B4A] uppercase font-bold text-[11px]">
                    <tr>
                      <th className="p-3">Date</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Contact</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Subject / Message</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-[#172033]">
                    {contactEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#F8FAFC]">
                        <td className="p-3 whitespace-nowrap text-[#64748B]">
                          {new Date(enq.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-3 font-semibold">{enq.name}</td>
                        <td className="p-3 text-[#2563EB]">{enq.emailOrPhone}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-[#F3F6FA] border border-[#E2E8F0] text-[11px]">
                            {enq.category}
                          </span>
                        </td>
                        <td className="p-3 max-w-xs">
                          <div className="font-medium text-[#142B4A]">{enq.subject}</div>
                          <div className="text-[#64748B] truncate">{enq.message}</div>
                        </td>
                        <td className="p-3">
                          <select
                            value={enq.status}
                            onChange={(e) => updateContactEnquiryStatus(enq.id, e.target.value as any)}
                            className="text-xs border border-[#E2E8F0] rounded px-2 py-1 bg-white font-medium text-[#142B4A]"
                          >
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: DIGITAL SERVICE REQUESTS */}
        {activeTab === 'digitalEnquiries' && (
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <h3 className="text-base font-bold text-[#142B4A] mb-4">
              Citizen Digital Service Requests ({digitalEnquiries.length})
            </h3>

            {digitalEnquiries.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#64748B] bg-[#F8FAFC] rounded border border-[#E2E8F0]">
                No digital citizen service requests submitted yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F3F6FA] border-b border-[#E2E8F0] text-[#142B4A] uppercase font-bold text-[11px]">
                    <tr>
                      <th className="p-3">Date</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Contact (Method)</th>
                      <th className="p-3">Requested Service</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Notes</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-[#172033]">
                    {digitalEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#F8FAFC]">
                        <td className="p-3 whitespace-nowrap text-[#64748B]">
                          {new Date(enq.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-3 font-semibold">{enq.customerName}</td>
                        <td className="p-3">
                          <span className="font-semibold text-[#142B4A]">{enq.contactValue}</span>
                          <span className="text-[11px] text-[#64748B] block">via {enq.contactMethod}</span>
                        </td>
                        <td className="p-3 font-medium text-[#2563EB]">{enq.requestedService}</td>
                        <td className="p-3">{enq.serviceCategory}</td>
                        <td className="p-3 max-w-xs text-[#64748B] truncate">{enq.message || '—'}</td>
                        <td className="p-3">
                          <select
                            value={enq.status}
                            onChange={(e) => updateDigitalEnquiryStatus(enq.id, e.target.value as any)}
                            className="text-xs border border-[#E2E8F0] rounded px-2 py-1 bg-white font-medium text-[#142B4A]"
                          >
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: PROJECTS CMS */}
        {activeTab === 'projects' && (
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-[#142B4A]">Projects Repository ({projects.length})</h3>
                <p className="text-xs text-[#64748B]">Create, edit, or remove showcase projects.</p>
              </div>
              <button
                onClick={openNewProjectModal}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-3.5 py-2 text-xs font-semibold rounded flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Project
              </button>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-[#142B4A]">{proj.title}</span>
                      <span className="text-[11px] font-semibold text-[#2563EB] bg-[#F3F6FA] px-2 py-0.5 rounded border border-[#E2E8F0]">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] line-clamp-1">{proj.shortDescription}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.techStack.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-white text-[#142B4A] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEditProjectModal(proj)}
                      className="p-2 text-xs font-semibold border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#142B4A] rounded flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#2563EB]" />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete project: "${proj.title}"?`)) {
                          deleteProject(proj.id);
                        }
                      }}
                      className="p-2 text-xs font-semibold border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 rounded flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CITIZEN SERVICES CATALOG */}
        {activeTab === 'services' && (
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-[#142B4A]">Citizen Services Catalog ({citizenServices.length})</h3>
                <p className="text-xs text-[#64748B]">Manage government application assistance offerings, official links, and document checklists.</p>
              </div>
              <button
                onClick={openNewServiceModal}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-3.5 py-2 text-xs font-semibold rounded flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Service
              </button>
            </div>

            <div className="space-y-3">
              {citizenServices.map((service) => (
                <div
                  key={service.id}
                  className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-[#142B4A]">{service.name}</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {service.status}
                      </span>
                    </div>
                    <span className="text-xs text-[#2563EB] block font-medium mb-1">{service.category}</span>
                    <p className="text-xs text-[#64748B] line-clamp-1">{service.shortExplanation}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEditServiceModal(service)}
                      className="p-2 text-xs font-semibold border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#142B4A] rounded flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#2563EB]" />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove service: "${service.name}"?`)) {
                          deleteCitizenService(service.id);
                        }
                      }}
                      className="p-2 text-xs font-semibold border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 rounded flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: PROFILE & IDENTITY SETTINGS */}
        {activeTab === 'profile' && (
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 max-w-3xl">
            <h3 className="text-base font-bold text-[#142B4A] mb-1">
              Personal Identity & Business Information
            </h3>
            <p className="text-xs text-[#64748B] mb-6">
              Update your name, headlines, contact details, and business settings. Changes persist immediately in the application.
            </p>

            {profileSavedNotice && (
              <div className="p-3 mb-6 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                Settings updated successfully!
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">Display Name</label>
                  <input
                    type="text"
                    required
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">Business Name</label>
                  <input
                    type="text"
                    required
                    value={profileForm.businessName}
                    onChange={(e) => setProfileForm({ ...profileForm, businessName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142B4A] mb-1">Hero Main Headline</label>
                <input
                  type="text"
                  required
                  value={profileForm.headline}
                  onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142B4A] mb-1">Hero Supporting Subheadline</label>
                <textarea
                  rows={2}
                  value={profileForm.subheadline}
                  onChange={(e) => setProfileForm({ ...profileForm, subheadline: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">Email Address</label>
                  <input
                    type="text"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={profileForm.githubUrl}
                    onChange={(e) => setProfileForm({ ...profileForm, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={profileForm.linkedinUrl}
                    onChange={(e) => setProfileForm({ ...profileForm, linkedinUrl: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142B4A] mb-1">About Intro Text</label>
                <textarea
                  rows={3}
                  value={profileForm.aboutIntro}
                  onChange={(e) => setProfileForm({ ...profileForm, aboutIntro: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded text-[#172033]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2.5 text-xs font-semibold rounded"
              >
                Save Settings
              </button>
            </form>
          </div>
        )}

      </div>

      {/* Project Modal */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl relative animate-in fade-in">
            <button
              onClick={() => setProjectModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded text-[#64748B] hover:text-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#142B4A] mb-4">
              {editingProject ? 'Edit Project' : 'Create New Project'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Category</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded bg-white"
                  >
                    <option value="AI & Data">AI & Data</option>
                    <option value="Web & Mobile">Web & Mobile</option>
                    <option value="Systems & Automation">Systems & Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Status</label>
                  <select
                    value={projectForm.status}
                    onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value as any })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded bg-white"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Development">In Development</option>
                    <option value="Prototype">Prototype</option>
                    <option value="Concept">Concept</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Short Summary (Card view)</label>
                <textarea
                  rows={2}
                  required
                  value={projectForm.shortDescription}
                  onChange={(e) => setProjectForm({ ...projectForm, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Full Description (Modal view)</label>
                <textarea
                  rows={3}
                  required
                  value={projectForm.fullDescription}
                  onChange={(e) => setProjectForm({ ...projectForm, fullDescription: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Tech Stack (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Python, Power BI, WEKA, Pandas"
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(false)}
                  className="px-3.5 py-2 font-semibold text-[#64748B] hover:text-[#142B4A]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2 font-semibold rounded"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Citizen Service Modal */}
      {serviceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl relative animate-in fade-in">
            <button
              onClick={() => setServiceModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded text-[#64748B] hover:text-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#142B4A] mb-4">
              {editingService ? 'Edit Citizen Service' : 'Add New Citizen Service'}
            </h3>

            <form onSubmit={handleSaveService} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Service Name *</label>
                <input
                  type="text"
                  required
                  value={serviceForm.name}
                  onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Category</label>
                  <select
                    value={serviceForm.category}
                    onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded bg-white"
                  >
                    <option value="e-Sevai & Certificates">e-Sevai & Certificates</option>
                    <option value="Driving & Licences">Driving & Licences</option>
                    <option value="Land & Property">Land & Property</option>
                    <option value="Vehicle & RTO">Vehicle & RTO</option>
                    <option value="Other Digital Services">Other Digital Services</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Availability Status</label>
                  <select
                    value={serviceForm.status}
                    onChange={(e) => setServiceForm({ ...serviceForm, status: e.target.value as any })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded bg-white"
                  >
                    <option value="Available">Available</option>
                    <option value="Requires Confirmation">Requires Confirmation</option>
                    <option value="Information Only">Information Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Short Explanation</label>
                <textarea
                  rows={2}
                  required
                  value={serviceForm.shortExplanation}
                  onChange={(e) => setServiceForm({ ...serviceForm, shortExplanation: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div>
                <label className="block font-bold text-[#142B4A] mb-1">Document Checklist (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Aadhaar Card, Smart Ration Card, Passport Photo"
                  value={docChecklistInput}
                  onChange={(e) => setDocChecklistInput(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Official Portal URL</label>
                  <input
                    type="text"
                    value={serviceForm.officialPortalUrl}
                    onChange={(e) => setServiceForm({ ...serviceForm, officialPortalUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#142B4A] mb-1">Official Portal Name</label>
                  <input
                    type="text"
                    value={serviceForm.officialPortalName}
                    onChange={(e) => setServiceForm({ ...serviceForm, officialPortalName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setServiceModalOpen(false)}
                  className="px-3.5 py-2 font-semibold text-[#64748B] hover:text-[#142B4A]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2 font-semibold rounded"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
