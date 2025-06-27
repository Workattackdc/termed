const express = require('express');
const path = require('path');
const config = require('./config');
const os = require('os');

const app = express();
const PORT = config.server.port;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  const interfaces = os.networkInterfaces();
  let address = 'localhost';
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        address = iface.address;
        break;
      }
    }
    if (address !== 'localhost') break;
  }
  console.log(`Server running on http://${address}:${PORT}`);
});
