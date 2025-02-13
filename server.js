const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API Route example
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all for any other route (used for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

