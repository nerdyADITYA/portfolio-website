# Interactive Portfolio

## Overview
This is a full-stack interactive portfolio project showcasing Aditya Kadia's skills and projects. It is built using React on the frontend and Express for the backend, with a PostgreSQL database managed by Drizzle ORM.

## Features
- **Frontend**: Built with React, utilizes Three.js, Anime.js for visuals, and Tailwind CSS for styling.
- **Backend**: An Express server set up with Vite for development and Drizzle for the database.
- **Database**: PostgreSQL with schemas for users and contact forms managed via Drizzle ORM.

## Project Structure
- **`client`**: Contains all frontend assets and React components.
- **`server`**: Houses the Express backend with API routes.
- **`shared`**: Contains database schema definitions.
- **`attached_assets`**: Store media and PDFs.

## Installation

### Prerequisites
- Node.js (v14+)
- PostgreSQL Database

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/nerdyADITYA/InteractivePortfolio.git
   cd InteractivePortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root and add your `DATABASE_URL` for PostgreSQL.

4. **Run the application**
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend servers.

5. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Available Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run db:push`: Applies database migrations.

## Deployment
- Ensure your PostgreSQL database is provisioned and `DATABASE_URL` is set.
- Build the application using `npm run build`.
- Start the server using `npm run start` on your preferred hosting platform.
