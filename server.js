const express = require('express');
const path = require('path');

// Initialize the app
const app = express();

// Define the static files folder
const staticFolderPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(staticFolderPath));

// Route to serve index.html (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(staticFolderPath, 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

