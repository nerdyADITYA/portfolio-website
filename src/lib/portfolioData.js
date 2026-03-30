console.log('portfolioData.js loaded!');

export const portfolioData = {
  about: {
    description: "I’m a Computer Engineering student at LJ Institute of Engineering and Technology and a Python-focused backend developer. I enjoy building scalable, reliable systems and working on the backend where performance and structure really matter. Alongside this, I have hands-on full-stack experience, which helps me understand the complete picture, from clean APIs to usable interfaces. I like turning ideas into practical, well-built solutions where functionality and design work together.",
    contactInfo: [
      {
        icon: "fas fa-map-marker-alt",
        text: "Ahmedabad,Vadodara, Gujarat"
      },
      {
        icon: "fas fa-envelope",
        text: "adikadia05@gmail.com",
        link: "mailto:adikadia05@gmail.com"
      },
      {
        icon: "fab fa-github",
        text: "github.com/nerdyADITYA",
        link: "https://github.com/nerdyADITYA"
      },
      {
        icon: "fab fa-linkedin",
        text: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/aditya-kadia-253b77233"
      }
    ]
  },

  education: [
    {
      degree: "Computer Engineering in Artificial Intelligence and Machine Learning (AI/ML)",
      institution: "LJ Institute of Engineering and Technology",
      period: "Expected Graduation: 2027",
      current: true
    },
    {
      degree: "Diploma in Computer Science",
      institution: "ITM SLS Baroda University",
      period: "Aug 2021 – May 2024",
      cgpa: "8.05/10"
    }
  ],

  skills: [
    {
      category: "Backend",
      items: [
        { name: "Java", icon: "fab fa-java" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-server" },
        { name: "Firebase", icon: "fas fa-fire" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Tailwind CSS", icon: "fas fa-wind" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Android", icon: "fab fa-android" },
        { name: "Databases", icon: "fas fa-database" },
        { name: "CLI Tools", icon: "fas fa-terminal" },
        { name: "Jaspersoft Studio", icon: "fas fa-chart-bar" }
      ]
    }
  ],

  certifications: [
    {
      name: "Introduction to HTML CSS and JavaScript",
      issuer: "IBM",
      icon: "fab fa-html5"
    },
    {
      name: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      icon: "fas fa-chart-line"
    },
    {
      name: "React JS",
      issuer: "Scaler",
      icon: "fa-brands fa-react"
    },
    {
      name: "Backend Development with .NET",
      issuer: "IBM",
      icon: "fa-brands fa-microsoft"
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "IBM",
      icon: "fa-solid fa-laptop-code"
    }
  ],

  projects: [
    {
      title: "ExpenseTracker",
      description: "Full-stack personal finance app offering real-time dashboards, interactive charts, and secure income-expense tracking",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/nerdyADITYA/ExpenseTracker",
      liveUrl: "https://expense-tracker-cyan-xi-63.vercel.app/",
      images: [new URL('../attached_assets/expensetracker-1.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-2.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-3.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-4.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-5.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-6.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-7.jpg', import.meta.url).href,
      new URL('../attached_assets/expensetracker-8.jpg', import.meta.url).href
      ]
    },
    {
      title: "Smart Inventory Intelligence Platform",
      description: "Enterprise-grade inventory system with multi-location tracking, real-time stock management, and a Python ML microservice for demand forecasting, stock-out prediction, and intelligent reorder optimization.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "MariaDB",
        "FastAPI",
        "Python",
        "Scikit-learn",
        "Statsmodels",
        "Pandas",
        "NumPy",
        "JWT"
      ],
      githubUrl: "https://github.com/nerdyADITYA/Smart_inventory.git",
      liveUrl: "https://smart-inventory-black.vercel.app/login",
      images: [
        new URL('../attached_assets/SM1.jpg', import.meta.url).href,
        new URL('../attached_assets/SM2.jpg', import.meta.url).href,
        new URL('../attached_assets/SM3.jpg', import.meta.url).href,
        new URL('../attached_assets/SM4.jpg', import.meta.url).href,
        new URL('../attached_assets/SM5.jpg', import.meta.url).href,
        new URL('../attached_assets/SM6.jpg', import.meta.url).href,
        new URL('../attached_assets/SM7.jpg', import.meta.url).href,
        new URL('../attached_assets/SM8.jpg', import.meta.url).href,
        new URL('../attached_assets/SM9.jpg', import.meta.url).href,
      ]
    },
    {
      title: "Appointly",
      description: "Full-stack appointment booking platform with real-time slot management, OTP-based authentication, admin dashboards, and automated email notifications for seamless scheduling.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Passport.js",
        "React Query",
        "Zod",
        "Nodemailer"
      ],
      githubUrl: "https://github.com/nerdyADITYA/Appointly",
      liveUrl: "https://appointly-nine.vercel.app/",
      images: [
        new URL('../attached_assets/appointly.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly1.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly2.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly3.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly4.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly5.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly6.jpg', import.meta.url).href,
        new URL('../attached_assets/appointly7.jpg', import.meta.url).href,
      ]
    },
    {
      title: "Smart Grocer",
      description: "Android grocery management app with Firebase integration, smart categorization, and low-stock reminders. Built with Android framework and XML layouts.",
      technologies: ["Android", "Firebase", "XML", "Java"],
      githubUrl: "https://github.com/nerdyADITYA/SmartGrocer",
      liveUrl: "",
      images: [
        new URL('../attached_assets/smartgrocer-1.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-2.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-3.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-4.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-5.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-6.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-7.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-8.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-9.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-10.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-11.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-12.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-13.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-14.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-15.jpg', import.meta.url).href,
        new URL('../attached_assets/smartgrocer-16.jpg', import.meta.url).href
      ]
    },
    {
      title: "AgroAnalytics",
      description: "ML-powered crop prediction system using agricultural and environmental data",
      technologies: ["Python", "Django", "Machine Learning", "Pandas"],
      githubUrl: "https://github.com/nerdyADITYA/Agro_Analytics",
      liveUrl: "https://agro-analytics-kchp.onrender.com/",
      images: [
        new URL('../attached_assets/agroanalytics-1.jpg', import.meta.url).href,
        new URL('../attached_assets/agroanalytics-2.jpg', import.meta.url).href,
        new URL('../attached_assets/agroanalytics-3.jpg', import.meta.url).href,
        new URL('../attached_assets/agroanalytics-4.jpg', import.meta.url).href,
        new URL('../attached_assets/agroanalytics-5.jpg', import.meta.url).href,
        new URL('../attached_assets/agroanalytics-6.jpg', import.meta.url).href
      ]
    },

    {
      title: "F1 Podium Predictor",
      description: "Dual-model ML Django app predicting F1 podium finishes and final positions using 2024 race data",
      technologies: ["Python", "Django", "scikit-learn", "pandas", "numpy", "RandomForest"],
      githubUrl: "https://github.com/nerdyADITYA/F1PodiumPredictor",
      liveUrl: "https://f1-podium-predictor-aary.onrender.com/",
      images: [new URL('../attached_assets/f1-1.jpg', import.meta.url).href,
      new URL('../attached_assets/f1-2.jpg', import.meta.url).href,
      new URL('../attached_assets/f1-3.jpg', import.meta.url).href,
      new URL('../attached_assets/f1-4.jpg', import.meta.url).href,
      new URL('../attached_assets/f1-5.jpg', import.meta.url).href
      ]
    },
  ],

  contactInfo: [
    {
      label: "Email",
      value: "adikadia05@gmail.com",
      link: "mailto:adikadia05@gmail.com",
      icon: "fas fa-envelope"
    },
    {
      label: "Location",
      value: "Ahmedabad,Vadodara, Gujarat",
      icon: "fas fa-map-marker-alt"
    }
  ],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/nerdyADITYA",
      icon: "fab fa-github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-kadia-253b77233",
      icon: "fab fa-linkedin"
    }
  ]
};
