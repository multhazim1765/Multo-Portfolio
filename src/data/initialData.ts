import { SiteProfile, Project, TechService, DigitalCitizenService } from '../types';

export const initialProfile: SiteProfile = {
  name: "Multhazim",
  headline: "Building Intelligent Solutions for Real-World Problems.",
  subheadline: "Final-Year B.Tech Artificial Intelligence & Data Science Student, Full-Stack Developer, and Technology Entrepreneur.",
  tagline: "Bridging the gap between cutting-edge Artificial Intelligence and everyday digital accessibility.",
  businessName: "VMAKITEC Services and Tech Solutions",
  businessTagline: "We Make It Easy",
  aboutIntro: "I am a dedicated final-year Artificial Intelligence and Data Science engineering student driven by engineering scalable software and impactful digital products. Through technical curiosity and entrepreneurial focus, I combine modern full-stack development, mobile applications, and machine learning pipelines to solve concrete, real-life challenges.",
  aboutEducation: "B.Tech in Artificial Intelligence & Data Science (Final Year) — Rigorous background in statistical analysis, machine learning algorithms, deep learning, NLP, relational/non-relational database design, and software engineering methodologies.",
  aboutCareerGoals: "To architect intelligent, enterprise-grade AI systems, full-stack solutions, and public digital tools that empower local communities and streamline essential services with absolute accessibility and high reliability.",
  email: "ahamedmulthazim90@gmail.com",
  phone: "+91 96002 44885",
  whatsapp: "+91 96002 44885",
  location: "Tamil Nadu, India",
  githubUrl: "https://github.com/multhazim1765",
  linkedinUrl: "https://www.linkedin.com/in/ahamed-multhazim-a-8a607b23b",
  resumeFileName: "Multhazim_AI_DS_Resume.pdf",
  profilePhotoPath: "/multhazim-profile.png"
};

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Employee Predictive Analysis",
    shortDescription: "Predictive machine learning pipeline & visual intelligence dashboard evaluating workforce attrition and performance trends.",
    fullDescription: "An end-to-end data science study analyzing organizational human resource metrics. Employs advanced classification models and exploratory data analysis to isolate attrition risk factors, salary correlations, and longevity predictions, visualized through dynamic Power BI dashboards.",
    problemStatement: "High employee turnover rates often blindside organizations due to dispersed HR records and subtle underlying predictors that standard reports miss.",
    solution: "Engineered automated data preprocessing, algorithmic feature selection, and predictive modeling using WEKA and Python algorithms, linked with interactive Power BI executive reporting.",
    techStack: ["Python", "Power BI", "WEKA", "Pandas", "Scikit-Learn"],
    category: "AI & Data",
    status: "Completed",
    image: "/projects/employee-analysis.png",
    featured: true,
    myRole: "Lead Data Analyst & ML Engineer",
    challenges: "Handling class imbalance within attrition datasets and selecting the most explainable decision boundaries.",
    results: "Achieved high classification accuracy with interpretable insights that help HR teams execute retention strategies proactively."
  },
  {
    id: "proj-2",
    title: "MultoBill — Smart Billing Application",
    shortDescription: "Offline-first POS and inventory billing mobile app built for retail shops with barcode scanning and instant thermal printing.",
    fullDescription: "A specialized Flutter and Dart application designed for shop owners and micro-retailers requiring high-speed offline sales processing, inventory management, instant receipt generation, and sales analytics without relying on constant internet access.",
    problemStatement: "Small merchants and shopkeepers struggle with complex cloud POS tools that freeze during network dropouts and slow down checkout lines.",
    solution: "Architected an offline-first architecture utilizing Hive local storage, Bloc state management, camera barcode scanning, and multi-format receipt dispatch.",
    techStack: ["Flutter", "Dart", "Bloc", "Hive", "Barcode Scanner", "PDF Generation"],
    category: "Web & Mobile",
    status: "Completed",
    image: "/projects/multobill.png",
    featured: true,
    myRole: "Mobile App Architect & Developer",
    challenges: "Guaranteeing millisecond-speed offline data persistence, atomic inventory counts, and thermal receipt print alignments.",
    results: "Enables instant invoice generation in under 3 seconds per customer with 100% offline uptime."
  },
  {
    id: "proj-3",
    title: "Offline-First Rural Telehealth & Smart Triage",
    shortDescription: "Community healthcare and emergency patient triage system with offline synchronization and SMS notification gateways.",
    fullDescription: "Designed for rural clinics and community health workers operating in bandwidth-constrained regions. Enables offline capture of vitals, algorithmic symptom triage prioritization, queue orchestration, and SMS-based alerts to district medical officers.",
    problemStatement: "Rural health posts often lack reliable broadband, stranding critical patient triage logs during emergencies and delaying life-saving referrals.",
    solution: "Built a robust Node.js and Express backend combined with local cached client stores, automatic sync resolution on reconnection, and SMS gateway fallbacks.",
    techStack: ["Node.js", "Express", "MongoDB", "Offline Sync", "SMS Gateway", "REST APIs"],
    category: "Systems & Automation",
    status: "In Development",
    image: "/projects/rural-telehealth.png",
    featured: true,
    myRole: "Backend & Systems Engineer",
    challenges: "Resolving two-way database sync conflicts across asynchronous mobile devices and enforcing HIPAA/data privacy compliance.",
    results: "Validated in pilot scenario simulations for field healthcare workers."
  },
  {
    id: "proj-4",
    title: "LearnBridge AI",
    shortDescription: "AI-assisted curriculum companion helping students catch up on missed lectures via contextual summaries and adaptive quizzes.",
    fullDescription: "An intelligent educational system engineered to assist students who have missed academic classes. Utilizes NLP models to generate structured recap capsules, personalized conceptual quizzes, and tailored reference readings based on syllabus topics.",
    problemStatement: "Absence due to medical or personal emergencies leaves students struggling to catch up with fast-paced academic terms without individual tutoring.",
    solution: "Proposed architecture leveraging large language models and semantic retrieval to ingest class transcripts and generate tailored catch-up modules.",
    techStack: ["Python", "NLP", "FastAPI", "React", "Vector Database"],
    category: "AI & Data",
    status: "Concept",
    image: "/projects/learnbridge.png",
    featured: false,
    myRole: "System Concept Designer",
    challenges: "Ensuring AI-generated summaries adhere strictly to syllabus ground truth without hallucination.",
    results: "Architecture blueprint and conceptual user journey formulated for academic prototyping."
  },
  {
    id: "proj-5",
    title: "AI Interview Coach and Analyzer",
    shortDescription: "Interactive mock interview tool analyzing answer structure, key competency metrics, and speech clarity feedback.",
    fullDescription: "An automated interview preparation tool providing real-time question generation, structured audio/text response analysis, and constructive evaluation against target job profiles.",
    problemStatement: "Graduating engineering candidates frequently face interview anxiety and lack structured, objective feedback on their communication and technical depth.",
    solution: "Developed an intuitive application that evaluates response confidence, keyword depth, and structural organization with immediate actionable advice.",
    techStack: ["React", "Python", "NLP", "Tailwind CSS", "REST APIs"],
    category: "AI & Data",
    status: "Prototype",
    image: "/projects/interview-coach.png",
    featured: false,
    myRole: "Full-Stack & NLP Developer",
    challenges: "Benchmarking NLP assessment rubrics to deliver actionable, empathetic feedback without bias.",
    results: "Interactive prototype tested with fellow engineering peers for technical placement prep."
  }
];

export const initialTechServices: TechService[] = [
  {
    id: "serv-1",
    title: "Website Design & Development",
    shortDescription: "Modern, responsive, ultra-fast websites built with clean code and high performance standards.",
    detailedDescription: "Full custom website development tailored for businesses, founders, and startups. We implement accessible, mobile-first architectures with strict design consistency, fast load times, and search engine optimization.",
    category: "Web Development",
    deliverables: ["Responsive UI/UX", "SEO Optimization", "Mobile-first Architecture", "Domain & Hosting Setup"],
    iconName: "Globe"
  },
  {
    id: "serv-2",
    title: "Full-Stack Web Applications",
    shortDescription: "Scalable web platforms with secure authentication, database design, and REST APIs.",
    detailedDescription: "End-to-end web engineering using React, Node.js, Express, and modern databases. Complete with secure user authentication, responsive dashboards, and robust API endpoints.",
    category: "Web Development",
    deliverables: ["Custom Backend APIs", "Database Modeling", "Role-Based Access Control", "Cloud Deployment"],
    iconName: "Code2"
  },
  {
    id: "serv-3",
    title: "Mobile Application Development",
    shortDescription: "High-performance cross-platform mobile apps for Android and iOS using Flutter.",
    detailedDescription: "Native-quality mobile applications with offline-first local storage, responsive UI, barcode scanning, push notifications, and seamless cloud synchronization.",
    category: "Mobile Development",
    deliverables: ["Cross-Platform App (Android & iOS)", "Offline Database Support", "Hardware API Integrations", "App Store Packaging"],
    iconName: "Smartphone"
  },
  {
    id: "serv-4",
    title: "AI & Machine Learning Solutions",
    shortDescription: "Custom machine learning models, predictive intelligence, and algorithmic data workflows.",
    detailedDescription: "Applied AI solutions transforming historical business data into actionable forecasts. Predictive classification, regression modeling, and customer analytics pipelines.",
    category: "Artificial Intelligence",
    deliverables: ["Predictive Models", "Data Preprocessing Pipelines", "Model Evaluation Reports", "API Integration"],
    iconName: "BrainCircuit"
  },
  {
    id: "serv-5",
    title: "NLP & Intelligent Automation",
    shortDescription: "Intelligent text processing, chatbots, smart summarization, and document extraction.",
    detailedDescription: "Leverage Natural Language Processing to automate document intake, customer support interactions, and unstructured text categorization with high accuracy.",
    category: "Artificial Intelligence",
    deliverables: ["Document Text Extractors", "Conversational AI Agents", "Semantic Search Modules", "Content Analyzers"],
    iconName: "Sparkles"
  },
  {
    id: "serv-6",
    title: "Data Analytics & Power BI Dashboards",
    shortDescription: "Interactive executive BI dashboards, metric tracking, and actionable visual reports.",
    detailedDescription: "Turn raw spreadsheets and database tables into decision-making command centres. Custom DAX measures, automated data cleaning, and intuitive Power BI reports.",
    category: "Data Science",
    deliverables: ["Custom Power BI Reports", "Data Modeling & Cleaning", "KPI Tracking Dashboards", "Automated Report Refreshes"],
    iconName: "BarChart3"
  },
  {
    id: "serv-7",
    title: "Business Process Automation",
    shortDescription: "Streamline repetitive manual workflows, invoicing, and cross-platform notification pipelines.",
    detailedDescription: "Eliminate repetitive paperwork, billing bottlenecks, and data entry errors through lightweight automated software hooks and custom scripts.",
    category: "Automation",
    deliverables: ["Workflow Automation Scripts", "Digital Invoice Pipelines", "Notification Bots", "Spreadsheet Integrations"],
    iconName: "Cpu"
  },
  {
    id: "serv-8",
    title: "UI/UX & Digital Product Design",
    shortDescription: "Clean, user-centric wireframes, design systems, and clickable high-fidelity prototypes.",
    detailedDescription: "Minimalist, uncluttered user interface design focusing on clarity, accessible contrasts, intuitive information architecture, and seamless user journeys.",
    category: "Design",
    deliverables: ["Figma Wireframes", "Design Tokens & Style Guides", "Interactive User Flow", "Accessibility Compliance"],
    iconName: "Layout"
  },
  {
    id: "serv-9",
    title: "Technical Consultation",
    shortDescription: "Architecture planning, tech stack selection, and AI feasibility reviews for early projects.",
    detailedDescription: "One-on-one technical guidance to help you select the appropriate tech stack, evaluate machine learning feasibility, and structure your software roadmap efficiently.",
    category: "Consulting",
    deliverables: ["Technology Roadmap", "Architecture Review", "Cost & Hosting Estimates", "Security Guidance"],
    iconName: "HelpCircle"
  }
];

export const initialCitizenServices: DigitalCitizenService[] = [
  // Category 1: Tamil Nadu e-Sevai & Certificates
  {
    id: "esevai-1",
    name: "Community Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Assistance with online application filing, document verification, and status tracking for Tamil Nadu Community Certificate.",
    eligibilityNotes: "Tamil Nadu permanent residents belonging to SC, ST, MBC, BC, or other recognized communities.",
    documentChecklist: ["Applicant Aadhaar Card", "Parents' Community Certificate or School TC", "Ration Card or Smart Card", "Applicant Passport Size Photograph", "Self-Declaration Form"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/citizen/",
    officialPortalName: "Tamil Nadu e-Sevai Official Portal",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)",
    isPopular: true
  },
  {
    id: "esevai-2",
    name: "Income Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Assistance with compiling family income proofs and submitting application via the official Revenue Department e-Sevai system.",
    eligibilityNotes: "Required for scholarships, higher education concessions, and government welfare scheme benefits.",
    documentChecklist: ["Aadhaar Card", "Salary Certificate / IT Return / Village VAO Income Statement", "Smart Ration Card", "Recent Passport Photo", "Rental Agreement / Property Tax receipt"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/citizen/",
    officialPortalName: "Tamil Nadu e-Sevai Official Portal",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)",
    isPopular: true
  },
  {
    id: "esevai-3",
    name: "Nativity Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Official certification support verifying continuous residency in Tamil Nadu for admission and government appointments.",
    eligibilityNotes: "Must have verified residence in Tamil Nadu for the period specified by regulations.",
    documentChecklist: ["Aadhaar Card", "Birth Certificate or School Leaving Certificate (TC)", "Smart Ration Card", "Parent's Nativity Proof or Residence Proof"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/citizen/",
    officialPortalName: "Tamil Nadu e-Sevai Official Portal",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)"
  },
  {
    id: "esevai-4",
    name: "First Graduate Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Support for prospective college students applying for Tamil Nadu government first-generation graduate tuition concessions.",
    eligibilityNotes: "No sibling or parent in the immediate family should have obtained a graduate degree previously.",
    documentChecklist: ["Applicant 10th & 12th Marksheets", "Smart Ration Card", "No-Graduate Certificate of Parents/Siblings from Tahsildar/School TC", "Joint Self-Declaration Form"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/citizen/",
    officialPortalName: "Tamil Nadu e-Sevai Official Portal",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)",
    isPopular: true
  },
  {
    id: "esevai-5",
    name: "Legal Heir Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Guidance and online submission assistance to claim legal heirship following the demise of a family member.",
    eligibilityNotes: "Direct legal heirs (spouse, children, parents) of deceased citizen.",
    documentChecklist: ["Death Certificate of the Deceased", "Aadhaar cards of all legal heirs", "Smart Ration Card of the deceased", "Applicant Relationship Proof", "Self-declaration notarized affidavit"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/citizen/",
    officialPortalName: "Tamil Nadu e-Sevai Official Portal",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)"
  },
  {
    id: "esevai-6",
    name: "Residence Certificate / Solvency Certificate",
    category: "e-Sevai & Certificates",
    shortExplanation: "Formal residence validation and financial solvency certificate support through the official portal.",
    eligibilityNotes: "Citizens requiring proof for court matters, contractual tenders, or government guarantees.",
    documentChecklist: ["Aadhaar Card", "Property Tax / Electricity Bill", "Smart Ration Card", "Valuation reports for Solvency"],
    officialPortalUrl: "https://www.tnesevai.tn.gov.in/Pages/EsevaiServiceList.aspx",
    officialPortalName: "TN e-Sevai Service Catalog",
    status: "Available",
    estimatedGovernmentFee: "₹60 (Official Government Fee)"
  },

  // CATEGORY 2 — PARIVAHANSEWA (LLR and DL and duplicate license booking services only)
  {
    id: "rto-1",
    name: "Learner's Licence (LLR) Slot Booking & Application",
    category: "Driving & Licences",
    shortExplanation: "Assistance with parivahansewa online LLR application submission, Aadhaar OTP authentication, and computer test slot booking.",
    eligibilityNotes: "Age 16+ for non-gear two-wheelers (with guardian declaration), age 18+ for standard motor vehicles (MCWG/LMV).",
    documentChecklist: [
      "Applicant Aadhaar Card (linked to active mobile for OTP)",
      "Age & Educational Proof (10th Marksheet or Transfer Certificate)",
      "Current Address Proof",
      "Recent Passport Size Photograph",
      "Medical Form 1 / 1A (if aged 40 years or above)"
    ],
    officialPortalUrl: "https://sarathi.parivahan.gov.in/",
    officialPortalName: "parivahansewa (Sarathi Parivahan)",
    status: "Available",
    estimatedGovernmentFee: "Statutory RTO test fees as per parivahansewa portal",
    isPopular: true
  },
  {
    id: "rto-2",
    name: "Permanent Driving Licence (DL) Test Booking & Filing",
    category: "Driving & Licences",
    shortExplanation: "parivahansewa driving licence test appointment booking, application upload, and RTO test day preparation guidance.",
    eligibilityNotes: "Must hold an active Learner's Licence (LLR) for at least 30 days and within 180 days of issuance.",
    documentChecklist: [
      "Active Learner's Licence (LLR) Number",
      "Driving School Training Certificate (Form 5) if commercial/heavy",
      "Original Aadhaar Card",
      "Application Form Receipt & Slot Booking Acknowledgement"
    ],
    officialPortalUrl: "https://sarathi.parivahan.gov.in/",
    officialPortalName: "parivahansewa (Sarathi Parivahan)",
    status: "Available",
    estimatedGovernmentFee: "RTO Driving Test Fee as displayed on parivahansewa",
    isPopular: true
  },
  {
    id: "rto-3",
    name: "Duplicate Driving Licence Booking & Application",
    category: "Driving & Licences",
    shortExplanation: "parivahansewa booking and documentation assistance for lost, mutilated, damaged, or stolen Driving Licences.",
    eligibilityNotes: "Holders of valid or previously issued driving licences registered on parivahansewa/Sarathi.",
    documentChecklist: [
      "Driving Licence Number (or copy of lost licence)",
      "Police Non-Traceable Certificate / LDR (in case of lost licence)",
      "Original Aadhaar Card",
      "Passport Size Photograph",
      "Self-Declaration of loss/mutilation"
    ],
    officialPortalUrl: "https://sarathi.parivahan.gov.in/",
    officialPortalName: "parivahansewa (Sarathi Parivahan)",
    status: "Available",
    estimatedGovernmentFee: "Official duplicate licence fee via parivahansewa",
    isPopular: true
  },

  // Category 3: Land & Property Services
  {
    id: "land-1",
    name: "Patta Transfer Application Assistance",
    category: "Land & Property",
    shortExplanation: "Guidance on preparing deed documents, submitting online Patta transfer requests via Any-Time/Anywhere e-Services.",
    eligibilityNotes: "Landowners having registered sale deed, gift deed, or partition documents.",
    documentChecklist: ["Registered Sale Deed / Title Deed Copy", "Previous Patta Number / Chitta copy", "Encumbrance Certificate", "Aadhaar Card of Applicant"],
    officialPortalUrl: "https://eservices.tn.gov.in/eservicesnew/land/chitta.html",
    officialPortalName: "Tamil Nadu Land Records e-Services",
    status: "Available",
    estimatedGovernmentFee: "₹60 (e-Sevai submission fee)"
  },
  {
    id: "land-2",
    name: "View Patta, Chitta & 'A' Register Extract",
    category: "Land & Property",
    shortExplanation: "Help locating rural and urban land records, viewing official Chitta copies, and downloading verified land extracts.",
    eligibilityNotes: "Available for public verification with District, Taluk, Village, and Survey/Sub-division numbers.",
    documentChecklist: ["District, Taluk, and Village details", "Survey Number and Sub-division Number, or Patta Number"],
    officialPortalUrl: "https://eservices.tn.gov.in/eservicesnew/land/chitta.html",
    officialPortalName: "AnyTime/AnyWhere Land Records",
    status: "Available",
    estimatedGovernmentFee: "Free online view / nominal government download fee"
  },
  {
    id: "land-3",
    name: "Encumbrance Certificate (EC) Search & Application",
    category: "Land & Property",
    shortExplanation: "Assistance searching registration records on TNREGINET to verify prior transactions and obtaining signed digital ECs.",
    eligibilityNotes: "Any citizen verifying property title chain across specified survey dates.",
    documentChecklist: ["Sub-Registrar Office (SRO) Name", "Village & Survey Number with Sub-division", "Desired Search Date Range (e.g., past 15-30 years)"],
    officialPortalUrl: "https://tnreginet.gov.in/",
    officialPortalName: "TNREGINET Inspector General of Registration",
    status: "Available",
    estimatedGovernmentFee: "Official portal search fee calculated by duration"
  },

  // Category 4: Vehicle & RTO Services
  {
    id: "vahan-1",
    name: "Vehicle Registration Certificate (RC) Services",
    category: "Vehicle & RTO",
    shortExplanation: "Assistance with duplicate RC applications, hypothecation endorsement/termination, and address modifications.",
    eligibilityNotes: "Registered vehicle owners with vehicle registration and chassis numbers.",
    documentChecklist: ["Registration Certificate (RC) copy", "Form 35 and Bank NOC (for hypothecation removal)", "Valid Insurance Certificate", "Pollution Under Control (PUC) Certificate", "Aadhaar Card"],
    officialPortalUrl: "https://vahan.parivahan.gov.in/vahanservice/",
    officialPortalName: "Vahan Citizen Services Portal",
    status: "Available",
    estimatedGovernmentFee: "Vahan portal statutory fees"
  },
  {
    id: "vahan-2",
    name: "Vehicle Ownership Transfer Assistance",
    category: "Vehicle & RTO",
    shortExplanation: "Form 29 and Form 30 documentation assistance for buying or selling pre-owned motor vehicles.",
    eligibilityNotes: "Requires mutual confirmation between registered buyer and seller.",
    documentChecklist: ["Original RC", "Form 29 & Form 30 signed", "Active Insurance & PUC", "Buyer Aadhaar and Seller Aadhaar copies"],
    officialPortalUrl: "https://vahan.parivahan.gov.in/vahanservice/",
    officialPortalName: "Vahan Portal",
    status: "Available",
    estimatedGovernmentFee: "RTO statutory transfer charges"
  },
  {
    id: "vahan-3",
    name: "Traffic e-Challan Verification & Payment Guidance",
    category: "Vehicle & RTO",
    shortExplanation: "Verifying pending traffic violation notices and guiding owners through official portal fine clearances.",
    eligibilityNotes: "Available for any vehicle registered in India.",
    documentChecklist: ["Vehicle Registration Number", "Chassis Number (last 5 digits) or Challan Number"],
    officialPortalUrl: "https://echallan.parivahan.gov.in/",
    officialPortalName: "MoRTH e-Challan System",
    status: "Available",
    estimatedGovernmentFee: "Specific violation fine amounts set by traffic police"
  },

  // Category 5: Other Digital Citizen Services
  {
    id: "other-1",
    name: "PAN Card Application & Correction Guidance",
    category: "Other Digital Services",
    shortExplanation: "Assistance filing Form 49A for new PAN issuance or corrections to name, date of birth, or father's name.",
    eligibilityNotes: "Indian citizens possessing valid Aadhaar with matching biographical details.",
    documentChecklist: ["Aadhaar Card", "Recent color photograph", "Existing PAN copy (for corrections)"],
    officialPortalUrl: "https://www.onlineservices.nsdl.com/",
    officialPortalName: "Protean NSDL / UTIITSL Portal",
    status: "Available",
    estimatedGovernmentFee: "₹107 (Standard Government Pan Fee for physical card)"
  },
  {
    id: "other-2",
    name: "Voter ID Registration & Correction (Form 6 / 8)",
    category: "Other Digital Services",
    shortExplanation: "Guidance enrolling as a new voter, updating address, or linking EPIC through the Election Commission portal.",
    eligibilityNotes: "Indian citizens 18 years or older as of the qualifying cutoff dates.",
    documentChecklist: ["Aadhaar Card / Proof of Age", "Current Residence Proof", "Passport Size Photo"],
    officialPortalUrl: "https://voters.eci.gov.in/",
    officialPortalName: "Election Commission of India Voters' Portal",
    status: "Available",
    estimatedGovernmentFee: "Free government service"
  },
  {
    id: "other-3",
    name: "Document Scanning, PDF Prep & Print Support",
    category: "Other Digital Services",
    shortExplanation: "Professional document digitization, file compression, grayscale/color document scanning, and PDF packaging for official uploads.",
    eligibilityNotes: "Citizens and students preparing applications with strict file-size constraints (e.g., under 200KB).",
    documentChecklist: ["Original physical certificates or documents to scan"],
    officialPortalUrl: "#",
    officialPortalName: "VMAKITEC Digital Help Desk",
    status: "Available",
    estimatedGovernmentFee: "Independent service support"
  }
];

export const initialSkills = [
  {
    category: "AI and Data",
    description: "Machine learning engineering, statistical modeling, exploratory data analysis, and intelligence workflows.",
    items: [
      { name: "Python", context: "Primary scripting & data science language" },
      { name: "Machine Learning", context: "Supervised & unsupervised models" },
      { name: "Artificial Intelligence", context: "Intelligent systems & automation" },
      { name: "Natural Language Processing (NLP)", context: "Text processing & transformers" },
      { name: "Data Analytics", context: "EDA, data manipulation & metrics" },
      { name: "SQL", context: "Complex relational queries & schemas" },
      { name: "Power BI", context: "Executive dashboards & DAX analytics" }
    ]
  },
  {
    category: "Web Development",
    description: "Modern, standards-compliant web engineering across frontend interfaces and backend APIs.",
    items: [
      { name: "HTML5", context: "Semantic, accessible document structure" },
      { name: "Tailwind CSS", context: "Utility-first rapid responsive UI design" },
      { name: "PHP / Laravel", context: "MVC web applications & backend APIs" },
      { name: "JavaScript (ES6+)", context: "Asynchronous programming & DOM" },
      { name: "TypeScript", context: "Type-safe robust application logic" },
      { name: "React", context: "Component architecture & modern hooks" },
      { name: "Node.js", context: "Scalable backend runtimes" },
      { name: "Express", context: "RESTful API engineering & middleware" },
      { name: "MongoDB", context: "Document data modeling & aggregations" }
    ]
  },
  {
    category: "Mobile Development",
    description: "Cross-platform mobile applications with high frame rates and resilient local storage.",
    items: [
      { name: "Flutter", context: "High-performance cross-platform UI" },
      { name: "Dart", context: "Object-oriented mobile runtime" },
      { name: "State Management (Bloc)", context: "Predictable reactive app states" },
      { name: "Local Storage (Hive/SQLite)", context: "Millisecond offline persistence" },
      { name: "API Integration", context: "Resilient HTTP & REST synchronization" }
    ]
  },
  {
    category: "Tools and Technologies",
    description: "Version control, collaborative development, cloud services, and production deployment.",
    items: [
      { name: "Git", context: "Branch management & version history" },
      { name: "GitHub", context: "Code collaboration & CI workflows" },
      { name: "Firebase", context: "Auth, cloud messaging & hosting" },
      { name: "SQLite", context: "Embedded relational database" },
      { name: "REST APIs", context: "Standard client-server architecture" },
      { name: "Vercel / Cloud Deployment", context: "Continuous deployment & production hosting" }
    ]
  }
];
