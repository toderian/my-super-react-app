import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5173;

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// IP endpoint - returns server's public IP address
app.get('/api/ip', async (req, res) => {
  const ipServices = [
    { url: 'https://api.ipify.org?format=json', parser: (data) => data.ip },
    { url: 'https://ifconfig.me/ip', parser: (text) => text.trim() },
    { url: 'https://icanhazip.com', parser: (text) => text.trim() },
  ];

  for (const service of ipServices) {
    try {
      const response = await fetch(service.url);
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        let ip;
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          ip = service.parser(data);
        } else {
          const text = await response.text();
          ip = service.parser(text);
        }
        return res.json({ ip });
      }
    } catch (err) {
      // Try next service
    }
  }

  // Fallback to local IP if all external services fail
  const networkInterfaces = os.networkInterfaces();
  for (const interfaces of Object.values(networkInterfaces)) {
    for (const iface of interfaces) {
      if (!iface.internal && iface.family === 'IPv4') {
        return res.json({ ip: iface.address });
      }
    }
  }

  res.json({ ip: 'Unknown' });
});

// Serve React static files (Vite outputs to 'dist')
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
