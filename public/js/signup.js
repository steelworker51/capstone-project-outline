import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoyM1qDk923QhaiZtLF0h_kvvrfkce8lM",
    authDomain: "fitness-signup-e740d.firebaseapp.com",
    projectId: "fitness-signup-e740d",
    storageBucket: "fitness-signup-e740d.appspot.com",
    messagingSenderId: "51645560042",
    appId: "1:51645560042:web:2d74d68c1f3f31cc431393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "users"); // Firebase reference

// Save to Local Storage and Firebase
function saveToLocalStorage(event) {
    event.preventDefault(); // Prevent default form submission

    // Access input fields
    const fullname = document.querySelector('input[name="fullname"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim(); // Not stored

    if (!fullname || !address || !email) {
        alert("Please fill in all fields.");
        return;
    }

    // Save to Local Storage
    if (typeof localStorage !== "undefined") {
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('address', address);
        localStorage.setItem('email', email);
    } else {
        console.warn("LocalStorage is not available");
    }

     // Save to Firebase Database
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