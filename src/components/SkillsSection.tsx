import React from 'react';
import { initialSkills } from '../data/initialData';
import { Brain, Code, Smartphone, Wrench, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'AI and Data':
        return {
          icon: <Brain className="w-5 h-5 text-[#2563EB]" />,
          tag: 'Core Intelligence',
          tagBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
          accent: 'border-t-4 border-t-[#2563EB]'
        };
      case 'Web Development':
        return {
          icon: <Code className="w-5 h-5 text-[#142B4A]" />,
          tag: 'Full-Stack',
          tagBg: 'bg-slate-100 text-[#142B4A] border-slate-300',
          accent: 'border-t-4 border-t-[#142B4A]'
        };
      case 'Mobile Development':
        return {
          icon: <Smartphone className="w-5 h-5 text-[#2563EB]" />,
          tag: 'Cross-Platform',
          tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          accent: 'border-t-4 border-t-indigo-600'
        };
      default:
        return {
          icon: <Wrench className="w-5 h-5 text-[#142B4A]" />,
          tag: 'DevOps & Tooling',
          tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          accent: 'border-t-4 border-t-emerald-600'
        };
    }
  };

  // Duplicate items array so the continuous infinite scroll flows seamlessly without gaps
  const repeatedCards = [...initialSkills, ...initialSkills, ...initialSkills, ...initialSkills];

  return (
    <section id="skills" className="py-14 sm:py-20 bg-[#F3F6FA] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Continuous Skill Stream
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B4A] tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
            Explore dynamic engineering competencies moving seamlessly across AI & Data, Web, Mobile, and DevOps tooling. Hover over any card to pause and inspect.
          </p>
        </div>

      </div>

      {/* Edge-to-Edge Animated Swipe Track with Gradient Fade Mask */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right subtle edge fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#F3F6FA] to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#F3F6FA] to-transparent"></div>

        {/* Continuous moving cards container */}
        <div className="animate-infinite-swipe pause-hover flex gap-6 px-4">
          {repeatedCards.map((cat, idx) => {
            const theme = getCategoryTheme(cat.category);

            return (
              <div
                key={idx}
                className={`w-[360px] sm:w-[440px] shrink-0 bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#2563EB] group ${theme.accent}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs group-hover:scale-105 transition-transform">
                        {theme.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#142B4A] tracking-tight">
                        {cat.category}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${theme.tagBg}`}>
                      {theme.tag}
                    </span>
                  </div>

                  {/* Category Brief */}
                  <p className="text-xs text-[#64748B] mb-3 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Skills Grid - 2 Column Compact Layout to maintain Square Ratio */}
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between hover:bg-white hover:border-[#2563EB]/40 hover:shadow-2xs transition-all group/item"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-[#142B4A] group-hover/item:text-[#2563EB] transition-colors truncate">
                            {skill.name}
                          </span>
                          <CheckCircle2 className="w-3 h-3 text-[#2563EB] shrink-0" />
                        </div>
                        <span className="text-[10px] text-[#64748B] leading-tight truncate mt-0.5" title={skill.context}>
                          {skill.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                  <span className="font-semibold text-[#142B4A] flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                    {cat.items.length} Core Skills
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
