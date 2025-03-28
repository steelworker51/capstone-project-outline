if (window.location.pathname.includes("motivate.html")) {
    console.log("This is the Motivational Quotes page!");
}

// Fetch motivational quote and image from server
async function getMotivationalContent() {
    try {
        const response = await fetch("/api/motivation");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        
        // Log the response to check its structure
        console.log("API Response:", data);

        return data;
    } catch (error) {
        console.error("Error fetching content:", error);
        return { quote: "Believe in yourself! - Unknown", image: "/images/fallback.jpg" }; // Fallback data
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
        imageElement.src = data.image; // Should be a valid path like '/images/inspirational-image.jpg'
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
