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
    }
  ],

  projects: [
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
      liveUrl: "",
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
      title: "ExpenseTracker",
      description: "Full-stack personal finance app offering real-time dashboards, interactive charts, and secure income-expense tracking",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/nerdyADITYA/Expense-Tracker",
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
      title: "F1 Podium Predictor",
      description: "Dual-model ML Django app predicting F1 podium finishes and final positions using 2024 race data",
      technologies: ["Python", "Django", "scikit-learn", "pandas", "numpy", "RandomForest"],
      githubUrl: "https://github.com/nerdyADITYA/F1-Podium-Predictor",
      liveUrl: "",
      images: [new URL('../attached_assets/f1-1.jpg', import.meta.url).href,
        new URL('../attached_assets/f1-2.jpg', import.meta.url).href,
        new URL('../attached_assets/f1-3.jpg', import.meta.url).href,
        new URL('../attached_assets/f1-4.jpg', import.meta.url).href,
        new URL('../attached_assets/f1-5.jpg', import.meta.url).href
      ]
    },
    {
      title: "Programming Hangman Game",
      description: "Full-stack hangman game with programming-themed words, user authentication, score tracking, and leaderboards",
      technologies: ["React", "Vite", "Tailwind CSS", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/nerdyADITYA/Programming-Hangman-Game",
      liveUrl: "",
      images: []
    },
    {
      title: "Score Hub (Python)",
      description: "CLI-based score tracking system built with Python. Features file handling, data persistence, and portable design with minimal dependencies.",
      technologies: ["Python", "CLI", "File I/O"],
      githubUrl: "https://github.com/nerdyADITYA/ScoreHubPython",
      liveUrl: "",
      images: []
    },
    {
      title: "Score Hub (JavaScript)",
      description: "Web-based score management application with responsive design, local storage for offline capability, and dynamic score display functionality.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      githubUrl: "https://github.com/nerdyADITYA/ScoreHub",
      liveUrl: "",
      images: []
    },
    {
      title: "Game Centre",
      description: "Python CLI card game suite featuring Blackjack, Old Maid, and War. Built with OOP principles, modular design, and standard Python libraries.",
      technologies: ["Python", "OOP", "Game Logic", "CLI"],
      githubUrl: "https://github.com/nerdyADITYA/GameCenter",
      liveUrl: "",
      images: []
    }
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
      value: "Ahmedabad, Gujarat",
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
