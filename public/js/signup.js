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