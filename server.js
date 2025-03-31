// server.js
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to prevent cross-origin issues
app.use(cors());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fetch a random motivational quote
async function getRandomQuote() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.json();
        return `"${data.slip.advice}"`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Believe in yourself! - Unknown"; // Fallback quote
    }
}

// Fetch a random motivational image from Pexels
async function getMotivationalImage() {
    try {
        const randomPage = Math.floor(Math.random() * 10) + 1; // Get a random page for variation
        const response = await fetch(`https://api.pexels.com/v1/search?query=motivation&per_page=1&page=${randomPage}`, {
            headers: {
                Authorization: process.env.PEXELS_API_KEY, // Load API key from .env
            },
        });

        if (!response.ok) throw new Error("Failed to fetch image");
        const data = await response.json();

        if (data.photos.length === 0) throw new Error("No images found");

        return data.photos[0].src.large; // Return a high-quality image URL
    } catch (error) {
        console.error("Error fetching image:", error);
        return "/images/fallback.jpg"; // Local fallback image
    }
}

// API endpoint to get a quote and an image
app.get('/api/motivation', async (req, res) => {
    try {
        const quote = await getRandomQuote();
        const image = await getMotivationalImage();
        console.log("Returning image URL:", image); // Log the image URL
        res.json({ quote, image });
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
