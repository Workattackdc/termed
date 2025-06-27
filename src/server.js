const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();
const PORT = (config.server && config.server.port) || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
