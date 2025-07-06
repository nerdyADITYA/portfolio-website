# Interactive Portfolio - Vercel Deployment

## New Structure

This portfolio has been restructured for optimal Vercel deployment:

```
InteractivePortfolio/
├── api/                    # Serverless functions
│   └── health.js          # Health check endpoint
├── public/                # Static assets
│   └── cv/               # CV and documents
├── src/                   # React source code
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities and data
│   ├── pages/           # Page components
│   └── services/        # API services
├── shared/               # Shared schemas
├── attached_assets/      # Project assets
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── tailwind.config.js   # Tailwind CSS config
```

## Key Changes Made

1. **Frontend moved to root**: All React components are now in `src/` at the root level
2. **API as serverless functions**: Backend endpoints are now in `api/` folder as Vercel functions
3. **Static assets**: Public files moved to `public/` folder
4. **Simplified configuration**: Removed Replit-specific plugins and configurations
5. **Vercel-optimized**: Added `vercel.json` for optimal deployment settings

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Automatic (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Option 2: Manual
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Environment Variables

Make sure to set these in your Vercel dashboard:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## API Endpoints

- `GET /api/health` - Health check endpoint

## Notes

- The portfolio now uses EmailJS for contact form (frontend-only)
- All static assets are served from the `public/` folder
- Serverless functions replace the Express server
- Build output goes to `dist/` folder
