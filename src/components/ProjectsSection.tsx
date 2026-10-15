import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Project } from '../types';
import { Search, ExternalLink, Eye, X, Tag, Layers, Sparkles, FolderGit2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const { projects } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const categories = ['All', 'AI & Data', 'Web & Mobile', 'Systems & Automation'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Clamp active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory, searchQuery]);

  // Timed auto swipe with suitable delay (4.5s) showcasing center project
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, filteredProjects.length, activeIndex]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Touch gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Completed</span>;
      case 'In Development':
        return <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">In Development</span>;
      case 'Prototype':
        return <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">Prototype</span>;
      case 'Concept':
        return <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-300">Concept</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#F8FAFC] text-[#172033] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Technical Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#142B4A] mb-3">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Interactive center-focused showcase. Click any card to bring it to center, or view its detailed architecture and codebase.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#142B4A] text-white shadow-xs'
                    : 'bg-white text-[#172033] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white text-[#172033] placeholder-[#94A3B8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#172033]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Center Zoom-In / Side Zoom-Out Coverflow Showcase */}
      {filteredProjects.length === 0 ? (
        <div className="max-w-md mx-auto p-12 text-center bg-white border border-[#E2E8F0] rounded-2xl shadow-xs">
          <Layers className="w-10 h-10 text-[#64748B] mx-auto mb-3 opacity-60" />
          <p className="text-sm font-semibold text-[#142B4A]">No projects match your filter.</p>
          <p className="text-xs text-[#64748B] mt-1">Try resetting the category filter or search query.</p>
        </div>
      ) : (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 select-none"
        >
          {/* Card Carousel Stage */}
          <div className="relative h-[480px] sm:h-[460px] flex items-center justify-center overflow-hidden">
            {filteredProjects.map((project, idx) => {
              // Calculate relative offset from active center card
              const total = filteredProjects.length;
              let offset = (idx - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              const isCenter = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Compute transforms: Center card is fully zoomed in (scale 1.0), side cards are zoomed out (scale 0.85/0.75) and shifted
              let translateX = '0%';
              let scale = 1.0;
              let zIndex = 30;
              let opacity = 1.0;

              if (offset === 0) {
                translateX = '0%';
                scale = 1.0;
                zIndex = 30;
                opacity = 1.0;
              } else if (offset === -1) {
                translateX = '-75%';
                scale = 0.84;
                zIndex = 20;
                opacity = 0.65;
              } else if (offset === 1) {
                translateX = '75%';
                scale = 0.84;
                zIndex = 20;
                opacity = 0.65;
              } else if (offset === -2) {
                translateX = '-135%';
                scale = 0.72;
                zIndex = 10;
                opacity = 0.3;
              } else if (offset === 2) {
                translateX = '135%';
                scale = 0.72;
                zIndex = 10;
                opacity = 0.3;
              }

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isCenter) {
                      setActiveProjectModal(project);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                  className={`absolute w-[300px] sm:w-[380px] h-[430px] sm:h-[410px] bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-700 ease-out flex flex-col justify-between cursor-pointer ${
                    isCenter
                      ? 'border-[#2563EB] shadow-xl ring-2 ring-[#2563EB]/15'
                      : 'border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]'
                  }`}
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider flex items-center gap-1.5">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        {project.category}
                      </span>
                      {getStatusBadge(project.status)}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#142B4A] tracking-tight leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-4 mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-[#F3F6FA] text-[#142B4A] px-2.5 py-1 rounded-md border border-[#E2E8F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProjectModal(project);
                      }}
                      className="text-xs font-semibold text-[#142B4A] hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                      View Details
                    </button>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-[#64748B] hover:text-[#142B4A] hover:bg-[#F3F6FA] transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-[11px] text-slate-400">Private</span>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-[#2563EB] hover:bg-[#F3F6FA] transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Arrows & Slide Indicators */}
          <div className="flex items-center justify-between max-w-sm mx-auto mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#142B4A] flex items-center justify-center shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {filteredProjects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Jump to project ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === dotIdx
                      ? 'w-6 h-2 bg-[#2563EB]'
                      : 'w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#142B4A] flex items-center justify-center shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl relative animate-in fade-in duration-150">
            
            {/* Close button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded text-[#64748B] hover:text-[#142B4A] hover:bg-[#F3F6FA]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#2563EB] uppercase">
                {activeProjectModal.category}
              </span>
              <span>•</span>
              {getStatusBadge(activeProjectModal.status)}
            </div>

            <h3 className="text-2xl font-bold text-[#142B4A] mb-3">
              {activeProjectModal.title}
            </h3>

            {/* Full description */}
            <p className="text-sm text-[#172033] leading-relaxed mb-5">
              {activeProjectModal.fullDescription}
            </p>

            {/* Problem & Solution block */}
            {(activeProjectModal.problemStatement || activeProjectModal.solution) && (
              <div className="space-y-3 mb-5">
                {activeProjectModal.problemStatement && (
                  <div className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded">
                    <h4 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider mb-1">
                      Problem Statement
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {activeProjectModal.problemStatement}
                    </p>
                  </div>
                )}
                {activeProjectModal.solution && (
                  <div className="p-3.5 bg-[#F3F6FA] border border-[#E2E8F0] rounded">
                    <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1">
                      Implemented Technical Solution
                    </h4>
                    <p className="text-xs text-[#172033] leading-relaxed">
                      {activeProjectModal.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Role, Challenges, Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-xs">
              {activeProjectModal.myRole && (
                <div className="p-3 bg-white border border-[#E2E8F0] rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">My Role:</span>
                  <span className="text-[#64748B]">{activeProjectModal.myRole}</span>
                </div>
              )}
              {activeProjectModal.challenges && (
                <div className="p-3 bg-white border border-[#E2E8F0] rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">Key Challenge Solved:</span>
                  <span className="text-[#64748B]">{activeProjectModal.challenges}</span>
                </div>
              )}
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#2563EB]" />
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#F3F6FA] text-[#142B4A] px-2.5 py-1 rounded border border-[#E2E8F0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal actions */}
            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs text-[#64748B]">
                {activeProjectModal.status === 'Completed' ? 'Verified working build' : 'Development milestone'}
              </span>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="bg-[#142B4A] hover:bg-[#1a3860] text-white px-4 py-2 text-xs font-semibold rounded"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
