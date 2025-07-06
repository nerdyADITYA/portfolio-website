export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Health check endpoint hit');
  
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    message: "Portfolio API is running"
  });
}
