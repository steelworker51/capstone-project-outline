
require('dotenv').config(); // Load environment variables from the .env file

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Access the Unsplash API key from the environment variables
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// Serve static files (e.g., HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Proxy route to fetch a random motivational image
app.get('/api/motivational-image', async (req, res) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?query=motivation&client_id=${UNSPLASH_ACCESS_KEY}`);
        const imageUrl = response.data[0].urls.regular; // Return the regular size image URL
        res.json({ imageUrl });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
