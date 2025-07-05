import { Link } from "wouter"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-portfolio-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-portfolio-text-light mb-4">
          Page Not Found
        </h2>
        <p className="text-portfolio-text-muted mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <a className="bg-portfolio-accent hover:bg-portfolio-accent-purple px-6 py-3 rounded-lg text-white font-medium transition-colors">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  )
}
