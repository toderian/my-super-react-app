import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// IP endpoint - returns server's IP address
app.get('/ip', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = 'Unknown';

  for (const interfaceName of Object.keys(networkInterfaces)) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (!iface.internal && iface.family === 'IPv4') {
        ipAddress = iface.address;
        break;
      }
    }
    if (ipAddress !== 'Unknown') break;
  }

  res.json({ ip: ipAddress });
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
