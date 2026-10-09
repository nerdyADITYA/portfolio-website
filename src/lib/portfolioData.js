// Content source of truth: "Aditya Kadia Resume.pdf".
const img = (name) => new URL(`../attached_assets/${name}`, import.meta.url).href;
const cert = (file) => new URL(`../attached_assets/certificates/${file}`, import.meta.url).href;
const range = (prefix, n, ext = 'jpg') => Array.from({ length: n }, (_, i) => img(`${prefix}${i + 1}.${ext}`));

export const portfolioData = {
  name: "Aditya Kadia",
  role: "Computer Engineering (AI & ML) undergraduate",
  tagline: "I build software that talks to real hardware and real users.",

  about: {
    description:
      "Computer Engineering (AI & ML) undergraduate with industry experience building software that talks to real hardware and real users. Recent work centres on applied AI: a fully local retrieval-augmented generation (RAG) assistant for HR and labour-law documents, alongside machine learning models for forecasting and prediction. Comfortable across the stack, from Python services and REST APIs to React front ends. Seeking a Master's programme in Computer Science / Artificial Intelligence to deepen work on LLM systems, retrieval and applied machine learning."
  },

  stats: [
    { value: "7.5m → <1.5m", label: "RAG CPU response time" },
    { value: "<50 ms", label: "Out-of-scope query answers" },
    { value: "22", label: "Crop types classified" },
    { value: "8.05/10", label: "Diploma CGPA" }
  ],

  education: [
    {
      degree: "B.E. Computer Engineering (Artificial Intelligence & Machine Learning)",
      institution: "LJ Institute of Engineering and Technology",
      place: "Ahmedabad",
      period: "Expected 2027",
      current: true
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "ITM SLS Baroda University",
      place: "Vadodara",
      period: "Aug 2021 – May 2024",
      cgpa: "8.05 / 10"
    }
  ],

  coursework: ["Data Structures", "Algorithms", "Operating Systems", "Computer Architecture", "Information Security"],

  experience: [
    {
      role: "Software Developer Intern",
      company: "Payguru Technosoft Pvt. Ltd.",
      place: "Vadodara",
      period: "Sep 2025 – Mar 2026",
      points: [
        "Built Python applications that connect directly to biometric devices to retrieve attendance records, punch logs and user data",
        "Developed an automated access-blocking service that restricts system access when an employee's work order expires",
        "Contributed to development and maintenance of the company's HRMS mobile application in Flutter",
        "Designed dynamic HR and operational reports in Jaspersoft Studio",
        "Worked on backend logic, data handling and system integrations supporting internal HRMS workflows"
      ]
    }
  ],

  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "Java", "SQL", "Dart"] },
    { category: "AI / ML", items: ["scikit-learn", "Pandas", "NumPy", "LangChain", "Ollama", "Hugging Face Sentence-Transformers", "RAG", "Prompt engineering"] },
    { category: "Backend", items: ["FastAPI", "Django", "Node.js", "Express", "REST APIs", "WebSockets (Socket.IO)", "JWT / RBAC"] },
    { category: "Frontend & Mobile", items: ["React", "Vite", "Material UI", "Tailwind CSS", "HTML", "CSS", "Three.js", "Anime.js", "Streamlit", "Flutter"] },
    { category: "Databases", items: ["MySQL", "MariaDB", "MongoDB", "SQLite", "Firebase", "ChromaDB", "Qdrant", "Prisma ORM"] },
    { category: "Tools", items: ["Git", "Docker", "Jaspersoft Studio", "pytest"] }
  ],

  // file/image live in src/attached_assets/certificates; verifyUrl is the public Coursera verification link.
  certifications: [
    { name: "Building Generative AI-Powered Applications with Python", issuer: "IBM (Coursera)", date: "Jul 2026", file: cert("genai.pdf"), image: cert("genai.jpg"), verifyUrl: "https://coursera.org/verify/NWF7U0B489TG" },
    { name: "Introduction to Software Engineering", issuer: "IBM (Coursera)", date: "Mar 2026", file: cert("software-engineering.pdf"), image: cert("software-engineering.jpg"), verifyUrl: "https://coursera.org/verify/1ZZGHMJ4O8WU" },
    { name: "Back-End Development with .NET", issuer: "Microsoft (Coursera)", date: "Mar 2026", file: cert("dotnet.pdf"), image: cert("dotnet.jpg"), verifyUrl: "https://coursera.org/verify/TYI4O7GCA3PJ" },
    { name: "Introduction to ReactJS", issuer: "Scaler Topics", date: "Jul 2025", file: cert("reactjs.pdf"), image: cert("reactjs.jpg") },
    { name: "Exploratory Data Analysis for Machine Learning", issuer: "IBM (Coursera)", date: "Jun 2025", file: cert("eda-ml.pdf"), image: cert("eda-ml.jpg"), verifyUrl: "https://coursera.org/verify/VO6SMF74BX21" },
    { name: "Introduction to HTML, CSS & JavaScript", issuer: "IBM (Coursera)", date: "Dec 2024", file: cert("html-css-js.pdf"), image: cert("html-css-js.jpg"), verifyUrl: "https://coursera.org/verify/QCIRM7A2VN4P" }
  ],

  // githubUrl / liveUrl left empty where the resume only has an unlabeled link — buttons hide automatically.
  projects: [
    {
      title: "HRMS-AI",
      subtitle: "Local RAG Chatbot for HR & Compliance",
      category: "Applied AI",
      description:
        "Answers HR, payroll, leave and labour-law questions from company documents, running entirely on local infrastructure so no employee data leaves the network.",
      highlights: [
        "Ollama with Qwen3 8B and BAAI bge-small embeddings, fully local",
        "Ingestion pipeline for PDF, DOCX, XLSX, CSV, HTML and TXT with token-aware chunking and per-chunk metadata (company, department, page, section) for filtered retrieval and source citations",
        "CPU response time cut from about 7.5 minutes to under 1.5 minutes; a relevance threshold answers out-of-scope queries in under 50 ms without calling the LLM",
        "Prompt-injection and jailbreak guardrails, JWT auth with role-based access, SSE streaming, swappable vector-store layer, Streamlit admin and React front ends, pytest suite"
      ],
      technologies: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB/Qdrant", "React"],
      githubUrl: "https://github.com/nerdyADITYA/HRMS_Chatbot.git",
      liveUrl: "",
      images: []
    },
    {
      title: "Security Personnel Post Allocation System",
      subtitle: "Real-time guard-to-post assignment",
      category: "Real-time · Hardware",
      description:
        "A real-time platform that assigns security guards to duty posts the moment they punch in on biometric terminals, replacing manual shift rostering.",
      highlights: [
        "Multithreaded Python service polling ZKTeco (TCP) and Hikvision ISAPI (REST) devices, de-duplicating punches and reporting device health",
        "Deterministic two-pass allocation engine: minimum staffing by priority and criticality first, then buffer capacity, enforcing skill-level and gender rules with a full audit trail",
        "Live control-room dashboard over WebSockets with alerts for vacant critical posts and offline devices, email alarms, single-active-session login and role-based module permissions",
        "Filterable deployment and attendance reports with CSV export, plus a simulation mode that generates live punches so the pipeline can be tested without hardware"
      ],
      technologies: ["Node.js", "Express", "Prisma", "MySQL", "React", "Python", "Socket.IO"],
      githubUrl: "https://github.com/nerdyADITYA/SPPAS.git",
      liveUrl: "https://sppas.vercel.app/login",
      images: []
    },
    {
      title: "Smart Inventory",
      subtitle: "Multi-Tenant Inventory SaaS with ML Forecasting",
      category: "SaaS · Machine Learning",
      description:
        "Multi-tenant SaaS for businesses tracking stock across shops and warehouses, with a separate database per tenant and a Python ML forecasting service.",
      highlights: [
        "Per-tenant databases, request-level tenant routing, cached connection pools and automated tenant provisioning from a Super Admin portal",
        "Stock movement ledger (stock-in, stock-out, adjustments, transfers) with audit trail; purchase orders from draft through approval to partial or full receipt",
        "FastAPI ML service: linear regression for stock-out timing, Holt-Winters for 7/14/30-day demand, Isolation Forest for dead stock, K-Means for fast/medium/slow movers, EOQ reorder quantities",
        "Bulk Excel/CSV import with row-level validation, staff invitations with RBAC, bcrypt-hashed passwords and a background email queue"
      ],
      technologies: ["React", "Node.js", "Express", "MariaDB", "FastAPI", "scikit-learn"],
      githubUrl: "https://github.com/nerdyADITYA/Smart_inventory.git",
      liveUrl: "https://smart-inventory-black.vercel.app/login",
      images: range('SM', 9)
    },
    {
      title: "AgroAnalytics",
      subtitle: "Crop Recommendation System",
      category: "Machine Learning",
      description:
        "A Django web app that recommends crops from soil and climate conditions, returning the top five crops ranked by model confidence.",
      highlights: [
        "Random Forest classifier trained on 2,200 samples across 22 crop types using seven features: nitrogen, phosphorus, potassium, temperature, humidity, pH and rainfall",
        "OpenWeatherMap API integration pulls live weather for Indian cities and estimates seasonal rainfall, so farmers only enter soil values",
        "Recommendation probabilities visualised as bar charts; user accounts with profile management"
      ],
      technologies: ["Python", "Django", "scikit-learn", "Pandas", "OpenWeatherMap API"],
      githubUrl: "https://github.com/nerdyADITYA/Agro_Analytics",
      liveUrl: "https://agro-analytics-kchp.onrender.com/",
      images: range('agroanalytics-', 6)
    },
    {
      title: "Expense Tracker",
      subtitle: "Automated Bank-Email Sync",
      category: "Full-stack · Automation",
      description:
        "Full-stack personal finance app supporting multiple bank accounts, categorised income and expenses, and Excel export, with transactions captured automatically from bank alert emails.",
      highlights: [
        "Parses bank alert emails (HDFC, ICICI, SBI) through the Gmail API on an hourly scheduled job; detected transactions go to a review queue to approve, edit or dismiss",
        "Read-only Google OAuth2 scopes and AES-256 encryption of stored tokens, alongside JWT login and bcrypt password hashing",
        "Recharts dashboards for balance, 30-day expense and 60-day income trends; frontend and serverless backend deployed on Vercel"
      ],
      technologies: ["React", "Node.js", "Express", "MySQL (TiDB)", "Sequelize"],
      githubUrl: "https://github.com/nerdyADITYA/ExpenseTracker",
      liveUrl: "https://expense-tracker-cyan-xi-63.vercel.app/",
      images: range('expensetracker-', 8)
    }
  ],

  contactInfo: [
    { label: "Email", value: "adikadia05@gmail.com", link: "mailto:adikadia05@gmail.com", icon: "fas fa-envelope" },
    { label: "Phone", value: "+91 96388 80959", link: "tel:+919638880959", icon: "fas fa-phone" },
    { label: "Location", value: "Vadodara, Gujarat, India", icon: "fas fa-map-marker-alt" }
  ],

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/nerdyADITYA", icon: "fab fa-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/aditya-kadia-253b77233", icon: "fab fa-linkedin" }
  ]
};
