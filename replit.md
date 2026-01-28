# Interactive Portfolio

## Overview
A React-based interactive portfolio website built with Vite, featuring:
- Modern React 18 with JSX
- Tailwind CSS for styling
- Framer Motion for animations
- Three.js for 3D background effects
- EmailJS for contact form functionality
- Radix UI components
- Wouter for client-side routing

## Features
- **Developer Portfolio** (`/`): Showcases technical projects, skills, education, and contact information
- **Freelance Portfolio** (`/freelance`): Business-focused portfolio with services, client testimonials, and project results
- **Toggle Navigation**: Switch between portfolios using the navbar button
- **Smooth Transitions**: Framer Motion page transitions between views
- **Responsive Design**: Full mobile support for all sections

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── freelance/       # Freelance portfolio sections
│   │   │   ├── FreelanceHero.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── FreelanceProjects.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── WhyWorkWithMe.jsx
│   │   │   └── FreelanceContact.jsx
│   │   ├── ui/              # Radix UI components
│   │   ├── Navigation.jsx   # Main nav with portfolio toggle
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── ThreeBackground.jsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   ├── portfolioData.js   # Developer portfolio data
│   │   ├── freelanceData.js   # Freelance portfolio data
│   │   ├── queryClient.js
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx         # Developer portfolio page
│   │   ├── Freelance.jsx    # Freelance portfolio page
│   │   └── not-found.jsx
│   ├── services/            # Email service
│   ├── attached_assets/     # Project images
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── shared/                  # Shared schema
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## Routes
- `/` - Developer Portfolio (skills, projects, education)
- `/freelance` - Freelance Portfolio (services, testimonials, client work)

## Running the Project
- **Development**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`
- **Preview**: `npm run preview` - Preview production build

## Configuration
- Vite is configured to run on `0.0.0.0:5000` with all hosts allowed for Replit compatibility
- EmailJS is used for contact form (requires API keys in .env)

## Deployment
Configured as a static site deployment with the `dist` directory as the public folder.

## Recent Changes
- **Jan 28, 2026**: Added Freelance Portfolio with toggle navigation, services section, client testimonials, featured projects, and contact CTA
