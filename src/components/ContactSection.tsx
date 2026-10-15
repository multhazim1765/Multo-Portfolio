import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const { profile, addContactEnquiry } = useApp();

  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('AI / Software Project');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !emailOrPhone.trim() || !message.trim()) {
      setFormError('Please fill in all mandatory fields.');
      return;
    }

    if (!privacyConsent) {
      setFormError('Please acknowledge the privacy consent checkbox.');
      return;
    }

    setIsSubmitting(true);

    // 1. Save directly into Admin Console state & localStorage
    addContactEnquiry({
      name,
      emailOrPhone,
      subject: subject || 'General Portfolio Query',
      category,
      message
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
          _subject: `New Portfolio Enquiry from ${name.trim()} - ${category}`,
          _template: 'table',
          'Full Name': name.trim(),
          'Email or Phone': emailOrPhone.trim(),
          'Enquiry Category': category,
          'Subject': subject.trim() || 'General Portfolio Query',
          'Message': message.trim()
        })
      });
    } catch (err) {
      console.warn('Email dispatch warning (will fallback to direct admin record):', err);
    }

    // 3. Optional WhatsApp notification
    const textLines = [
      `*New Portfolio Enquiry - VMAKITEC*`,
      `--------------------------------`,
      `*Full Name:* ${name.trim()}`,
      `*Email or Phone:* ${emailOrPhone.trim()}`,
      `*Category:* ${category}`,
      `*Subject:* ${subject.trim() || 'General Portfolio Query'}`,
      `*Message:* ${message.trim()}`
    ];
    const encodedText = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `https://wa.me/919600244885?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setFormSuccess(true);
    setName('');
    setEmailOrPhone('');
    setSubject('');
    setMessage('');
    setPrivacyConsent(false);

    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-block text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B4A] tracking-tight">
            Contact & Consultation
          </h2>
          <p className="mt-3 text-base text-[#64748B] max-w-2xl">
            Whether you want to discuss a full-stack AI development project, mobile POS application, or citizen documentation queries, drop a message below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#F3F6FA] border border-[#E2E8F0] rounded-lg">
              <h3 className="text-base font-bold text-[#142B4A] mb-4">
                Direct Communication
              </h3>
              
              <div className="space-y-4 text-sm text-[#172033]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-[#E2E8F0] shrink-0 text-[#2563EB]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block font-medium">Direct Email</span>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-[#142B4A] hover:text-[#2563EB] transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-[#E2E8F0] shrink-0 text-[#2563EB]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block font-medium">Phone Support</span>
                    <a href={`tel:${profile.phone}`} className="font-semibold text-[#142B4A] hover:text-[#2563EB] transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-[#E2E8F0] shrink-0 text-[#2563EB]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block font-medium">Primary Base</span>
                    <span className="font-semibold text-[#142B4A]">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Social profiles row */}
                <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] rounded text-xs font-semibold text-[#142B4A] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#142B4A]" />
                    GitHub
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] rounded text-xs font-semibold text-[#142B4A] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#2563EB]" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Response timeframe note */}
            <div className="p-5 bg-white border border-[#E2E8F0] rounded-lg">
              <h4 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider mb-2">
                Operational Commitments
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                All enquiries are recorded into the admin dashboard immediately. Typically responded to within 12-24 business hours.
              </p>
              <div className="text-[11px] text-[#2563EB] font-medium bg-[#F8FAFC] p-2.5 rounded border border-[#E2E8F0]">
                • Independent application assistance • Technical scoping consultations
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 sm:p-8 shadow-xs">
              
              <h3 className="text-lg font-bold text-[#142B4A] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#64748B] mb-6">
                Please provide your details and enquiry specifics.
              </p>

              {formSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md flex items-center gap-3 text-emerald-900 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong>Message Sent Successfully!</strong> We have received your submission and will get in touch shortly.
                  </div>
                </div>
              )}

              {formError && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-800 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="name@example.com or +91..."
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Enquiry Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white text-[#172033]"
                    >
                      <option value="AI / Software Project">AI / Software Engineering</option>
                      <option value="Mobile App Development">Mobile App (Flutter)</option>
                      <option value="Data Analytics & BI">Data Analytics / Power BI</option>
                      <option value="e-Sevai Assistance">Tamil Nadu e-Sevai Service</option>
                      <option value="Driving Licence / RTO">Driving Licence / RTO Guidance</option>
                      <option value="Land / Property Records">Land Records (Patta/Chitta)</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#142B4A] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Brief topic..."
                      className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142B4A] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project or service requirement..."
                    className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                  />
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="mt-0.5 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB]"
                    />
                    <span className="text-[11px] text-[#64748B] leading-tight">
                      I agree that my contact information may be used solely to respond to this inquiry. No marketing spam or sharing with third parties.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-2.5 text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
