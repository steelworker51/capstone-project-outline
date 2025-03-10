if (window.location.pathname.includes("motivate.html")) {
    console.log("This is the Motivational Quotes page!");

    const UNSPLASH_ACCESS_KEY = "VhO9hNztq1OBRy26WqRy3HJ1XkiL8AjkXBd1D7xPxSk"; 
}
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