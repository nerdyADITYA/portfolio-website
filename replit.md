# Interactive Portfolio

## Overview
A React-based interactive portfolio website built with Vite, featuring:
- Modern React 18 with JSX
- Tailwind CSS for styling
- Framer Motion for animations
- Three.js for 3D background effects
- EmailJS for contact form functionality
- Radix UI components

## Project Structure
```
├── src/
│   ├── components/      # React components (UI, sections)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and data
│   ├── pages/           # Page components
│   ├── services/        # Email service
│   ├── attached_assets/ # Project images
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── shared/              # Shared schema
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## Running the Project
- **Development**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`
- **Preview**: `npm run preview` - Preview production build

## Configuration
- Vite is configured to run on `0.0.0.0:5000` with all hosts allowed for Replit compatibility
- EmailJS is used for contact form (requires API keys in .env)

## Deployment
Configured as a static site deployment with the `dist` directory as the public folder.
