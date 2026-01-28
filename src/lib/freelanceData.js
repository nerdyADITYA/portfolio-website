export const freelanceData = {
  hero: {
    headline: "Turning Ideas Into Digital Reality",
    subheadline: "Freelance Full-Stack Developer & Technical Consultant",
    description: "I help startups and businesses build scalable web applications, mobile apps, and automation solutions. Let's bring your vision to life with clean code and modern technologies."
  },

  services: [
    {
      title: "Web Application Development",
      description: "Custom web applications built with React, Node.js, and modern frameworks. From landing pages to complex SaaS platforms.",
      icon: "fas fa-globe",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Architecture"]
    },
    {
      title: "Mobile App Development",
      description: "Native Android applications and cross-platform solutions using React Native. Designed for performance and user experience.",
      icon: "fas fa-mobile-alt",
      features: ["Android Development", "Cross-Platform", "App Store Ready", "Push Notifications"]
    },
    {
      title: "Backend & API Development",
      description: "Robust backend systems and RESTful APIs. Database design, authentication, and third-party integrations.",
      icon: "fas fa-server",
      features: ["REST APIs", "Database Design", "Authentication", "Cloud Deployment"]
    },
    {
      title: "Technical Consulting",
      description: "Code reviews, architecture planning, and technical guidance for your development team or startup.",
      icon: "fas fa-lightbulb",
      features: ["Code Review", "Architecture Design", "Tech Stack Selection", "Performance Audit"]
    },
    {
      title: "Automation & Scripts",
      description: "Python-based automation scripts, data processing pipelines, and workflow optimization tools.",
      icon: "fas fa-robot",
      features: ["Task Automation", "Data Processing", "Web Scraping", "Report Generation"]
    },
    {
      title: "UI/UX Implementation",
      description: "Pixel-perfect implementation of designs using Tailwind CSS, Framer Motion, and modern CSS techniques.",
      icon: "fas fa-paint-brush",
      features: ["Design Systems", "Animations", "Accessibility", "Responsive Layouts"]
    }
  ],

  projects: [
    {
      title: "School Website",
      client: "Angel English School",
      description: "A professionally designed school website delivering a clean user experience, fast performance, and seamless communication through integrated contact systems.",
      technologies: ["React", "Node.js", "Email JS"],
      result: "Increased client satisfaction by 100%",
      liveUrl: "https://angel-english-school.vercel.app/",
      images: [
        new URL("../attached_assets/school.jpg", import.meta.url).href,
        new URL("../attached_assets/school2.jpg", import.meta.url).href,
        new URL("../attached_assets/school3.jpg", import.meta.url).href,
        new URL("../attached_assets/school4.jpg", import.meta.url).href,
        new URL("../attached_assets/school5.jpg", import.meta.url).href,
        new URL("../attached_assets/school6.jpg", import.meta.url).href,
        new URL("../attached_assets/school7.jpg", import.meta.url).href,
        new URL("../attached_assets/school8.jpg", import.meta.url).href,
        new URL("../attached_assets/school9.jpg", import.meta.url).href,
        new URL("../attached_assets/school10.jpg", import.meta.url).href,
        new URL("../attached_assets/school11.jpg", import.meta.url).href,
      ]
    },
    {
      title: "E-Commerce Website",
      client: "Nexen Technomac LLP",
      description: "Built a modern, responsive business website to showcase services, products, and enable smooth customer interaction.",
      technologies: ["React", "Node.js", "Email JS"],
      result: "Improved digital presence and customer engagement",
      liveUrl: "",
      images: []
    }
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      role: "Founder, TechStart India",
      text: "Aditya delivered our MVP in record time. His technical skills and communication made the entire process smooth. Highly recommend for any startup looking for quality development work.",
      avatar: null
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      text: "Working with Aditya was a great experience. He understood our complex requirements and built a solution that exceeded expectations. Clean code and excellent documentation.",
      avatar: null
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, HealthTech Co",
      text: "Aditya transformed our outdated system into a modern, scalable platform. His attention to detail and proactive communication made him a valuable partner throughout the project.",
      avatar: null
    },
    {
      name: "Raj Patel",
      role: "Owner, Patel Enterprises",
      text: "The inventory system Aditya built for us has saved countless hours and eliminated costly errors. He took time to understand our business before proposing solutions.",
      avatar: null
    }
  ],

  whyWorkWithMe: [
    {
      title: "Fast Turnaround",
      description: "I understand deadlines. Most projects are delivered ahead of schedule without compromising quality.",
      icon: "fas fa-bolt"
    },
    {
      title: "Clear Communication",
      description: "Regular updates, responsive messaging, and transparent progress tracking throughout the project.",
      icon: "fas fa-comments"
    },
    {
      title: "Full Ownership",
      description: "You get complete source code, documentation, and deployment support. No hidden fees or lock-ins.",
      icon: "fas fa-key"
    },
    {
      title: "Post-Launch Support",
      description: "I don't disappear after delivery. Bug fixes and minor adjustments included for 30 days after launch.",
      icon: "fas fa-headset"
    },
    {
      title: "Modern Tech Stack",
      description: "Using industry-standard tools and frameworks ensures your project is maintainable and scalable.",
      icon: "fas fa-code"
    },
    {
      title: "Budget Friendly",
      description: "Competitive rates with flexible payment options. Quality work doesn't have to break the bank.",
      icon: "fas fa-wallet"
    }
  ],

  contactCTA: {
    headline: "Ready to Start Your Project?",
    description: "Let's discuss your idea and see how I can help bring it to life. Free consultation for new clients.",
    email: "adikadia05@gmail.com",
    availability: "Currently accepting new projects for Q1 2026"
  },

  stats: [
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ]
};
