// quotes.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Motivational Quotes Page Loaded!");

    // Fetch motivational quote and image from server
    async function getMotivationalContent() {
        try {
            const response = await fetch(`http://localhost:3000/api/motivation?nocache=${new Date().getTime()}`); // Prevent API caching
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();

            console.log("API Response:", data); // Log to check the response
            return data;
        } catch (error) {
            console.error("Error fetching content:", error);
            return {
                quote: "Believe in yourself! - Unknown",
                image: "/images/fallback.jpg" // Local fallback image
            };
        }
    }

    // Update the page with a new quote and image
    async function updateContent() {
        const quoteElement = document.getElementById("quoteText");
        const imageElement = document.getElementById("motivationalImage");

        if (quoteElement && imageElement) {
            quoteElement.textContent = "Loading quote...";
            const data = await getMotivationalContent();
            quoteElement.textContent = data.quote;

            // Force image reload by appending a timestamp
            imageElement.src = `${data.image}?t=${new Date().getTime()}`;
            imageElement.alt = "Motivational Image";
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

    // Load content when the page loads
    updateContent();
});
