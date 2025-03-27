if (window.location.pathname.includes("motivate.html")) {
    console.log("This is the Motivational Quotes page!");
}

const UNSPLASH_ACCESS_KEY = "iTqM7dV4WFwkoa2dQCd8HzxV3g1jYC6Jb_1QLbEETXk"; 
// Fetch a random motivational quote
async function getRandomQuote() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.json();
        return `"${data.slip.advice}" `;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Believe in yourself! - Unknown"; // Fallback quote
    }
}

// Fetch a random motivational image from Unsplash
async function getMotivationalImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=motivation&client_id=${UNSPLASH_ACCESS_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch image");
        const data = await response.json();
        return data.urls.regular; // Returns the image URL
    } catch (error) {
        console.error("Error fetching image:", error);
        return "/public/images/fallback.jpg"; // dont forget to put a image here in case of error (completed)
    }
}

// Update the page with a new quote and image
async function updateContent() {
    const quoteElement = document.getElementById("quoteText");
    const imageElement = document.getElementById("motivationalImage");

    if (quoteElement) {
        quoteElement.textContent = "Loading quote...";
        quoteElement.textContent = await getRandomQuote();
    }

    if (imageElement) {
        imageElement.src = ""; // placeholder
        imageElement.src = await getMotivationalImage();
    }
}

// Add event listener to update content on click
const box = document.getElementById("box");
if (box) {
    box.addEventListener("click", function () {
        console.log("Box clicked! Updating quote and image.");
        updateContent();
    });
} else {
    console.log("Box element not found!");
}

updateContent(); // Load content when the page loads