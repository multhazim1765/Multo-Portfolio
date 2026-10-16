import React from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, Briefcase, Target, MapPin, Mail, Phone, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const AboutSection: React.FC = () => {
  const { profile } = useApp();

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-block text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B4A] tracking-tight">
            About Me & Entrepreneurial Journey
          </h2>
          <p className="mt-3 text-base text-[#64748B] max-w-3xl">
            Passionate about the intersection of Artificial Intelligence, applied Data Science, and ground-level digital infrastructure.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 bg-[#F3F6FA] border border-[#E2E8F0] rounded-lg">
              <h3 className="text-lg font-bold text-[#142B4A] mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#2563EB]" />
                Executive Summary
              </h3>
              <p className="text-[#172033] leading-relaxed text-sm sm:text-base">
                {profile.aboutIntro}
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2E8F0] rounded-lg">
              <h3 className="text-lg font-bold text-[#142B4A] mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                Education & Academic Foundations
              </h3>
              <p className="text-[#172033] leading-relaxed text-sm sm:text-base mb-3">
                {profile.aboutEducation}
              </p>
              <div className="bg-[#F8FAFC] p-3.5 rounded border border-[#E2E8F0] text-xs text-[#64748B]">
                <strong className="text-[#142B4A]">Key Core Subjects:</strong> Machine Learning Systems, Deep Learning Foundations, Natural Language Processing, Database Management Systems, Data Structures & Algorithms, Object-Oriented Software Engineering, and Probability & Statistics.
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E2E8F0] rounded-lg">
              <h3 className="text-lg font-bold text-[#142B4A] mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#142B4A]" />
                Entrepreneurial Focus: VMAKITEC Services
              </h3>
              <p className="text-[#172033] leading-relaxed text-sm sm:text-base mb-3">
                Beyond pure software engineering, I founded <strong className="text-[#142B4A]">VMAKITEC Services and Tech Solutions</strong> with the motto <em>“We Make It Easy”</em>. VMAKITEC operates on a dual mission:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#172033] mb-4 pl-1">
                <li>
                  <strong className="text-[#142B4A]">Technology Solutions:</strong> Crafting high-speed mobile apps, custom web software, machine learning prototypes, and workflow automation for businesses.
                </li>
                <li>
                  <strong className="text-[#142B4A]">Citizen Digital Services:</strong> Delivering dedicated, transparent application guidance for Tamil Nadu e-Sevai certificates, Parivahan driving licences, and land record documentation for individuals needing reliable digital assistance.
                </li>
              </ul>
              <div className="text-xs text-[#64748B] italic">
                * Note: All citizen service assistance is provided independently and strictly adheres to government procedures without imitating official departments.
              </div>
            </div>

            <div className="p-6 bg-[#F3F6FA] border border-[#E2E8F0] rounded-lg">
              <h3 className="text-lg font-bold text-[#142B4A] mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#2563EB]" />
                Career Goals & Vision
              </h3>
              <p className="text-[#172033] leading-relaxed text-sm sm:text-base">
                {profile.aboutCareerGoals}
              </p>
            </div>
          </div>

          {/* Right Column: Verified Identity Card & Links */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-xs">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#E2E8F0]">
                <img
                  src={profile.profilePhotoPath}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#2563EB]"
                />
                <div>
                  <h4 className="font-bold text-[#142B4A] text-lg leading-tight">{profile.name}</h4>
                  <p className="text-xs text-[#64748B] font-medium mt-0.5">B.Tech AI & Data Science</p>
                </div>
              </div>

              {/* Contact meta */}
              <div className="space-y-3 text-sm text-[#172033] mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="break-all">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{profile.phone}</span>
                </div>
              </div>

              {/* Profiles & Actions */}
              <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0]">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded text-xs font-semibold text-[#142B4A] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#142B4A]" />
                    GitHub Profile
                  </span>
                  <span className="text-[#64748B]">View Code →</span>
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded text-xs font-semibold text-[#142B4A] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#2563EB]" />
                    LinkedIn Profile
                  </span>
                  <span className="text-[#64748B]">Connect →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
