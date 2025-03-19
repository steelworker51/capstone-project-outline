const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // ✅ This ensures PORT is properly defined

// static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
