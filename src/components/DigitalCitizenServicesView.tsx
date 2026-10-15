import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DigitalCitizenService } from '../types';
import { 
  FileCheck, 
  Search, 
  ExternalLink, 
  HelpCircle, 
  ShieldAlert, 
  FileText, 
  Info, 
  X, 
  Send, 
  Check, 
  AlertTriangle,
  Compass,
  ArrowRight
} from 'lucide-react';

interface DigitalCitizenServicesViewProps {
  onBackToPortfolio?: () => void;
}

export const DigitalCitizenServicesView: React.FC<DigitalCitizenServicesViewProps> = ({ onBackToPortfolio }) => {
  const { citizenServices, addDigitalEnquiry } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeServiceModal, setActiveServiceModal] = useState<DigitalCitizenService | null>(null);

  // Assistance Form Modal state
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [serviceForRequest, setServiceForRequest] = useState<DigitalCitizenService | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [contactMethod, setContactMethod] = useState<'Phone' | 'WhatsApp' | 'Email'>('Phone');
  const [contactValue, setContactValue] = useState('');
  const [requestMessage, setRequestMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    'All',
    'e-Sevai & Certificates',
    'Driving & Licences',
    'Land & Property',
    'Vehicle & RTO',
    'Other Digital Services'
  ];

  const categoryLabels: Record<string, string> = {
    'All': 'All Services',
    'e-Sevai & Certificates': 'e-Sevai & Certificates',
    'Driving & Licences': 'parivahansewa (LLR & DL Booking Only)',
    'Land & Property': 'Land & Property',
    'Vehicle & RTO': 'Vehicle & RTO',
    'Other Digital Services': 'Other Digital Services'
  };

  const filteredServices = citizenServices.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.officialPortalName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenRequest = (service: DigitalCitizenService) => {
    setServiceForRequest(service);
    setRequestModalOpen(true);
    setSubmitSuccess(false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !contactValue.trim() || !consentChecked || !serviceForRequest) return;

    setIsSubmitting(true);

    // 1. Save directly into Admin Console state & localStorage
    addDigitalEnquiry({
      customerName: customerName.trim(),
      contactMethod,
      contactValue: contactValue.trim(),
      serviceCategory: serviceForRequest.category,
      requestedService: serviceForRequest.name,
      message: requestMessage.trim()
    });

    // 2. Deliver directly to your email inbox: ahamedmulthazim90@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/ahamedmulthazim90@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Citizen Service Request: ${serviceForRequest.name} from ${customerName.trim()}`,
          _template: 'table',
          'Service Requested': serviceForRequest.name,
          'Service Category': serviceForRequest.category,
          'Customer Name': customerName.trim(),
          'Preferred Contact Method': contactMethod,
          'Phone Number or Email': contactValue.trim(),
          'Customer Notes / Queries': requestMessage.trim() || 'None provided'
        })
      });
    } catch (err) {
      console.warn('Email dispatch warning (will fallback to direct admin record):', err);
    }

    // 3. Format and open WhatsApp notification
    const textLines = [
      `*New Citizen Service Request - VMAKITEC*`,
      `---------------------------------------`,
      `*Requested Service:* ${serviceForRequest.name}`,
      `*Category:* ${serviceForRequest.category}`,
      `*Customer Name:* ${customerName.trim()}`,
      `*Contact Method:* ${contactMethod}`,
      `*Contact Value:* ${contactValue.trim()}`,
      `*Notes / Details:* ${requestMessage.trim() || 'None provided'}`
    ];
    const encodedText = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `https://wa.me/919600244885?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setRequestModalOpen(false);
      setCustomerName('');
      setContactValue('');
      setRequestMessage('');
      setConsentChecked(false);
      setSubmitSuccess(false);
    }, 2200);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Banner / Header */}
      <section className="bg-[#142B4A] text-white py-14 border-b border-[#142B4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-white text-xs font-semibold mb-3 border border-white/20">
                <FileCheck className="w-4 h-4 text-[#2563EB]" />
                VMAKITEC Digital Services Portal
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Digital Citizen Service Application Assistance
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
                Independent documentation guidance, form preparation, and online submission assistance for Tamil Nadu e-Sevai, Learner's & Driving Licences, and Land Records.
              </p>
            </div>

            {onBackToPortfolio && (
              <button
                onClick={onBackToPortfolio}
                className="shrink-0 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded border border-white/20 transition-colors"
              >
                ← Back to Engineering Portfolio
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Mandatory Legal & Trust Disclaimer Banner */}
      <section className="bg-[#FFFBEB] border-b border-[#FDE68A] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong>Legal Notice & Statutory Clarification:</strong> VMAKITEC provides independent application assistance and digital support. We are not a government department or an official government portal. Government applications, eligibility, statutory fees, processing times, and approvals are determined solely by the relevant authorities. We never ask for Aadhaar OTPs, net banking credentials, or passwords.
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Category Filter Navigation */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#142B4A] text-white'
                    : 'bg-[#F3F6FA] text-[#172033] hover:bg-[#E2E8F0]'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service, e.g. Patta, LLR, Community..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white text-[#172033]"
            />
          </div>

        </div>

        {/* Services List */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
            <HelpCircle className="w-10 h-10 text-[#64748B] mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold text-[#142B4A]">No digital service matches your criteria.</p>
            <p className="text-xs text-[#64748B] mt-1">Please try another search keyword or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#E2E8F0] rounded-lg p-5 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-all"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">
                      {service.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {service.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#142B4A] mb-2 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4">
                    {service.shortExplanation}
                  </p>

                  {/* Document preview checklist */}
                  <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded mb-4">
                    <span className="text-[11px] font-bold text-[#142B4A] block mb-1.5 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                      Primary Documents Required:
                    </span>
                    <ul className="space-y-1 text-[11px] text-[#64748B]">
                      {service.documentChecklist.slice(0, 3).map((doc, idx) => (
                        <li key={idx} className="truncate">• {doc}</li>
                      ))}
                      {service.documentChecklist.length > 3 && (
                        <li className="text-[#2563EB] font-medium">+ {service.documentChecklist.length - 3} more checklist items</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card actions */}
                <div className="pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveServiceModal(service)}
                      className="text-xs font-semibold text-[#142B4A] hover:text-[#2563EB] flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-[#2563EB]" />
                      View Checklist
                    </button>

                    <button
                      onClick={() => handleOpenRequest(service)}
                      className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1 transition-colors"
                    >
                      Request Assistance
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Service Checklist Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-xl w-full p-6 shadow-xl relative animate-in fade-in">
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded text-[#64748B] hover:text-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#2563EB] uppercase">
              {activeServiceModal.category}
            </span>
            <h3 className="text-xl font-bold text-[#142B4A] mt-1 mb-2">
              {activeServiceModal.name}
            </h3>

            <p className="text-xs text-[#172033] leading-relaxed mb-4">
              {activeServiceModal.shortExplanation}
            </p>

            {activeServiceModal.eligibilityNotes && (
              <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded mb-4">
                <span className="text-xs font-bold text-[#142B4A] block mb-0.5">Eligibility Criteria:</span>
                <p className="text-xs text-[#64748B]">{activeServiceModal.eligibilityNotes}</p>
              </div>
            )}

            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider mb-2">
                Mandatory Document Checklist
              </h4>
              <ul className="space-y-1.5 text-xs text-[#172033]">
                {activeServiceModal.documentChecklist.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#64748B] hover:text-[#142B4A]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = activeServiceModal;
                  setActiveServiceModal(null);
                  handleOpenRequest(s);
                }}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2 text-xs font-semibold rounded"
              >
                Request Assistance for this Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assistance Request Modal */}
      {requestModalOpen && serviceForRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-lg w-full p-6 shadow-xl relative animate-in fade-in">
            <button
              onClick={() => setRequestModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded text-[#64748B] hover:text-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#142B4A] mb-1">
              Request Application Assistance
            </h3>
            <p className="text-xs text-[#64748B] mb-4">
              Service: <strong className="text-[#2563EB]">{serviceForRequest.name}</strong>
            </p>

            {submitSuccess ? (
              <div className="p-6 text-center bg-emerald-50 border border-emerald-200 rounded-lg">
                <Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">Request Recorded!</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  We have received your details. A VMAKITEC representative will contact you via your preferred method to guide you through document preparation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Preferred Contact *
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white text-[#172033]"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder="Enter mobile or email"
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">
                    Optional Notes or Specific Question
                  </label>
                  <textarea
                    rows={2}
                    value={requestMessage}
                    onChange={(e) => setRequestMessage(e.target.value)}
                    placeholder="Any specific questions about documents or urgency..."
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                  />
                </div>

                {/* Consent & Security warning */}
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-0.5 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB]"
                    />
                    <span className="text-[11px] text-[#64748B] leading-tight">
                      I understand that VMAKITEC provides independent document preparation and submission assistance, is not an official government agency, and does not request passwords or Aadhaar OTPs. *
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setRequestModalOpen(false)}
                    className="px-3 py-2 text-xs font-semibold text-[#64748B] hover:text-[#142B4A]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-70 text-white px-5 py-2 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
