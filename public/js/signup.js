import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoyM1qDk923QhaiZtLF0h_kvvrfkce8lM",
    authDomain: "fitness-signup-e740d.firebaseapp.com",
    projectId: "fitness-signup-e740d",
    storageBucket: "fitness-signup-e740d.appspot.com",
    messagingSenderId: "51645560042",
    appId: "1:51645560042:web:2d74d68c1f3f31cc431393"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "users"); // Firebase reference

// ✅ Function to save user data
function saveToLocalStorage(event) {
    event.preventDefault(); // Prevent form submission from reloading page

    // ✅ Access input fields
    const fullname = document.querySelector('input[name="fullname"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim(); // Not stored for security

    if (!fullname || !address || !email) {
        alert("Please fill in all fields.");
        return;
    }

    // ✅ Save to Local Storage
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('address', address);
    localStorage.setItem('email', email);

    // ✅ Save to Firebase Database
    push(referenceInDB, {
        fullname: fullname,
        address: address,
        email: email
    }).then(() => {
        alert('Signup details saved to Firebase and Local Storage!');
    }).catch(error => {
        console.error("Error saving data:", error);
        alert('Error saving data!');
    });
}

// ✅ Attach event listener to the form when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", saveToLocalStorage);
    } else {
        console.error("Signup form not found!");
    }
});
