async function registerRoutes(app) {
  console.log('Registering routes...');
  
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    console.log('Health check endpoint hit');
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  console.log('Routes registered: GET /api/health');
  console.log('Note: Contact form now uses EmailJS (frontend-only) - no server-side email needed!');
}

export { registerRoutes };
