# Full-Stack Portfolio Application

## Overview

This is a modern full-stack web application built for showcasing a developer's portfolio. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. The project is configured for deployment on Replit with hot-reload development capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with hot module replacement
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Anime.js for scroll animations and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Email Service**: Nodemailer for contact form functionality
- **Session Management**: PostgreSQL session store
- **API Structure**: RESTful endpoints with JSON responses
- **Build Process**: ESBuild for production bundling

### Key Design Decisions
- **Monorepo Structure**: Single repository with shared TypeScript types
- **Type Safety**: End-to-end TypeScript with shared schema validation
- **Component System**: shadcn/ui for consistent design system
- **Database Schema**: Drizzle for type-safe database operations

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user management with username/password
- **Contacts Table**: Contact form submissions with timestamps
- **Type Generation**: Automated TypeScript types from database schema

### Frontend Components
- **UI Library**: Complete shadcn/ui component set (40+ components)
- **Portfolio Data**: Static portfolio information and project data
- **Custom Hooks**: Mobile detection, toast notifications, scroll animations
- **Form Handling**: React Hook Form with Zod validation

### Backend Services
- **Contact API**: Email sending functionality for contact forms
- **User Management**: Basic CRUD operations for users
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Request Logging**: Detailed API request/response logging

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: TanStack Query manages client-side cache updates

### Contact Form Flow
1. User submits contact form
2. Frontend validates data with Zod schema
3. API endpoint processes submission
4. Nodemailer sends email notification
5. Contact data stored in PostgreSQL
6. Success/error feedback to user

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **nodemailer**: Email sending functionality
- **animejs**: Animation library
- **wouter**: Lightweight routing

### Development Tools
- **Vite**: Fast development server and bundling
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production build optimization

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **Database**: Development PostgreSQL instance
- **Port Configuration**: Express serves on dynamic port
- **Static Assets**: Vite handles client-side assets

### Production Build
1. **Frontend Build**: Vite compiles React to static files
2. **Backend Build**: ESBuild bundles Express server
3. **Asset Serving**: Express serves static files in production
4. **Database Migrations**: Drizzle manages schema changes

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_USER`: Gmail account for contact forms
- `EMAIL_PASS`: Gmail app password
- `NODE_ENV`: Environment mode (development/production)

## Changelog
- July 05, 2025: Successfully converted entire project from TypeScript to pure JavaScript
- July 05, 2025: Removed all TypeScript files and configuration
- July 05, 2025: Updated all import/export statements to ES module syntax
- July 05, 2025: Portfolio website fully functional with JavaScript-only stack
- July 05, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.