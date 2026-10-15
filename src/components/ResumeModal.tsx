import React from 'react';
import { 
  X, 
  Download,
  ExternalLink,
  Mail, 
  Phone, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = '/Ahamed_Multhazim_Resume.pdf';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      {/* Outer Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Action Bar */}
        <div className="bg-[#142B4A] text-white px-4 sm:px-5 py-3 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-bold text-xs sm:text-sm tracking-wide">Ahamed Multhazim A — Resume</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Ahamed_Multhazim_Resume.pdf"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              title="Download Original PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Open Original PDF in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-10 bg-slate-50 text-[#172033] selection:bg-[#2563EB] selection:text-white">
          <div id="resume-printable-area" className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-xs border border-slate-200 space-y-7">
            
            {/* Header: Name & Contact Info */}
            <div className="border-b border-slate-200 pb-6 text-center sm:text-left sm:flex sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] tracking-tight uppercase">
                  AHAMED MULTHAZIM A
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-1">
                  B.Tech Artificial Intelligence & Data Science | Full-Stack & Mobile Developer
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600">
                  <a href="tel:+919600244885" className="flex items-center gap-1 hover:text-[#2563EB] font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                    +91 96002 44885
                  </a>
                  <a href="mailto:ahamedmulthazim90@gmail.com" className="flex items-center gap-1 hover:text-[#2563EB] font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    ahamedmulthazim90@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/ahamed-multhazim-a-8a607b23b" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#2563EB] font-medium">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#2563EB]" />
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/multhazim1765" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#2563EB] font-medium">
                    <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                    multhazim1765
                  </a>
                </div>
              </div>
            </div>

            {/* OBJECTIVE */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-2.5">
                OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Driven AI & Data Science student with hands-on experience in machine learning, mobile app development, and data analytics, actively seeking internship or entry-level opportunities to build impactful, real-world technology solutions.
              </p>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                EDUCATION
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Bachelor Of Technology (AI & Data Science)
                    </span>
                    <span className="text-xs font-semibold text-slate-500">2023 – 2027</span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Aalim Muhammed Salegh College of Engineering, Avadi IAF, Chennai
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Acted as a bridge between students and faculty, managing communication and academic coordination (Class Representative)</li>
                    <li>Organized and executed college events, handling planning, logistics, and team coordination (Event Coordinator)</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Higher Secondary Education
                    </span>
                    <span className="text-xs font-semibold text-slate-500">MAY 2023</span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Imam Shafi (Rah) Higher Secondary School | ADIRAMPATTINAM, THANJAVUR
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700">
                    <li>Completed higher secondary education with <strong>81%</strong>, building a strong academic foundation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* INTERNSHIP EXPERIENCE */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                INTERNSHIP EXPERIENCE
              </h2>

              <div className="space-y-4">
                {/* Hasna */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Web Developer Intern | HASNA TECHNOLOGY
                    </span>
                    <span className="text-xs font-semibold text-slate-500">On-Site | JUL–AUG 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Developing and maintaining responsive websites using HTML, CSS, JavaScript, React.js, Laravel, and Tailwind CSS.</li>
                    <li>Working on real-world web applications, implementing user interfaces, backend functionality, and database integration.</li>
                    <li>Collaborating with the development team to troubleshoot issues, improve website performance, and deliver client-focused solutions.</li>
                  </ul>
                </div>

                {/* SKT */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Web Design Intern | SKT Software
                    </span>
                    <span className="text-xs font-semibold text-slate-500">On-Site | MAY–JUNE 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Gained hands-on experience in web design and front-end development using HTML and CSS.</li>
                    <li>Designed and structured basic web pages focusing on UI layout and user-friendly design.</li>
                  </ul>
                </div>

                {/* Naan Mudhalvan */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Virtual Internship | AI/XR Programme — Tamil Nadu Skill Development Corporation (Naan Mudhalvan)
                    </span>
                    <span className="text-xs font-semibold text-slate-500">JAN(21)–FEB(04) 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Learned fundamentals of AI and XR technologies through structured training sessions.</li>
                    <li>Developed basic understanding of emerging technologies and real-world applications.</li>
                  </ul>
                </div>

                {/* AdroIT */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Virtual Internship | Project Management Tool — AdroIT Technologies Innovative Solutions Pvt. Ltd
                    </span>
                    <span className="text-xs font-semibold text-slate-500">DEC(29)–FEB(09) 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Worked on a project management tool, understanding workflow and task management concepts.</li>
                    <li>Gained exposure to project planning, coordination, and development process.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-[#2563EB]" />
                PROJECTS
              </h2>

              <div className="space-y-4">
                {/* Project 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      Offline Telemedicine System (Rural Healthcare)
                    </span>
                    <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Python, SMS API, Data Management
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Designed an offline-first telemedicine system enabling appointment booking via SMS for rural areas.</li>
                    <li>Implemented automated SMS-based booking and confirmation system for patients without internet access.</li>
                    <li>Developed a simple data handling system to manage patient records and appointment scheduling efficiently.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#142B4A]">
                      MultoBill – Smart Billing Application
                    </span>
                    <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Flutter, Hive, BLoC, Barcode Scanner
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-700">
                    <li>Developed a cross-platform billing app using Flutter with clean architecture and BLoC state management for efficient performance.</li>
                    <li>Enabled offline billing by integrating Hive local database, ensuring seamless usage without internet connectivity.</li>
                    <li>Implemented barcode scanning and dynamic product management for faster and accurate billing workflow.</li>
                    <li>Designed complete checkout system with cart management, real-time total calculation, and smooth user experience.</li>
                    <li>Integrated receipt generation and printer support for instant bill printing in real-world shop environments.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS & EXTRACURRICULAR */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                ACHIEVEMENTS & EXTRACURRICULAR ACTIVITIES
              </h2>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A]">National Science Fair (NSF) 2023 – 2nd Place (National Level):</strong> Secured 2nd place conducted by Jamal Mohamed College during 12th standard. Presented a science project and competed at national level among students from various institutions.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A]">Volunteer – Thisai Charitable Trust:</strong> Actively contributed to social service activities, assisting in organizing and managing charitable events and community outreach programs.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A]">Founder – Vmakitec Services and Tech Solutions (MSME Registered):</strong> Established a registered MSME enterprise focused on technology and service solutions. Gained experience in business registration, operations, and service-based project handling.
                  </div>
                </li>
              </ul>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#2563EB]" />
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">Programming Languages:</span>
                  Python, Dart, SQL, JavaScript, HTML, CSS
                </div>
                <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">Tools & Platforms:</span>
                  Git, GitHub, Power BI, WEKA, MS Excel, VS Code
                </div>
                <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">Libraries & APIs:</span>
                  Pandas, NumPy, Scikit-learn, SMS API, Barcode Scanner Integration
                </div>
                <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-[#142B4A] block mb-0.5">Core Concepts:</span>
                  Machine Learning, Data Analysis, Data Visualization, Offline-First Systems, Mobile App Development, Role-Based Access Control
                </div>
              </div>
            </section>

            {/* CERTIFICATES & ASSESSMENTS */}
            <section>
              <h2 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider border-b-2 border-[#142B4A] pb-1 mb-3">
                CERTIFICATES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div>
                  <h3 className="font-bold text-[#142B4A] mb-2">Internships / Programs</h3>
                  <ul className="space-y-1.5 text-xs">
                    <li>
                      <a
                        href="https://www.notion.so/HASNA-TECHNOLOGY-INTERSHIP-3ead94eccb6180f5b1d9c5fcbde495bf?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        HASNA TECHNOLOGY INTERNSHIP
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.notion.so/8b8f9082db178331a3c401cf29e57707?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        SKT Internship — Certificate & Offer Letter
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.notion.so/f67f9082db1782649ea8019780898735?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        AdroIT Technologies — Virtual Internship (Project Management Tool)
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.notion.so/266f9082db178204bcfc0190c7a854dd?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        Naan Mudhalvan Programme — Virtual Internship (E16 AI)
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.notion.so/100f9082db1782c2a42e813d499d6eaf?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        Campus Ambassador Certificate — Skill Intern (Startup India)
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.notion.so/26cf9082db1783afaadb01ed6c16a193?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                      >
                        Zequin: 2-Day Student Development Program (AI & ML)
                        <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-[#142B4A] mb-2">Courses</h3>
                    <ul className="space-y-1.5 text-xs">
                      <li>
                        <a
                          href="https://www.notion.so/ee7f9082db1783b0b0d58128067a4416?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          Infosys Springboard — AI: Types of Artificial Intelligence
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.notion.so/f1ff9082db1782b3bbdd0100c7e1dc41?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          HP LIFE — Data Science & Analytics (Certificate of Completion)
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.notion.so/77ef9082db1782e599cc812141a551dc?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          LinkedIn Learning — Strategic Business Analysis Essentials
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.notion.so/736f9082db1783ef8ac6817745538996?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          HP LIFE: AI for Beginners
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.notion.so/Certificate-TCS-iON-Career-Edge-Young-Professional-df4f9082db1782b3a07b81051bcabb85?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          TCS iON Career Edge: Young Professional
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#142B4A] mb-1.5">Assessments</h3>
                    <ul className="space-y-1.5 text-xs">
                      <li>
                        <a
                          href="https://www.notion.so/ce2f9082db1783348d9601ebeef6c449?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          HackerRank: SQL (Basic)
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.notion.so/9e4f9082db17821882b8813d5921b92e?pvs=21"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
                        >
                          HackerRank: Problem Solving (Basic)
                          <ExternalLink className="w-3 h-3 text-[#2563EB]/70 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer actions */}
        <div className="no-print bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Ahamed Multhazim A • Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#142B4A] hover:bg-[#2563EB] text-white font-semibold rounded text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
