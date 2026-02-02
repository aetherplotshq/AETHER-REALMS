// Firebase SDK modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    push, 
    onValue, 
    query, 
    orderByChild, 
    startAt, 
    update, 
    remove,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your verified Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmMgjlpXsk0Ip5Frrlifu6bgRJNNIIYzM",
    authDomain: "aether-realms.firebaseapp.com",
    databaseURL: "https://aether-realms-default-rtdb.firebaseio.com",
    projectId: "aether-realms",
    storageBucket: "aether-realms.firebasestorage.app",
    messagingSenderId: "745970771566",
    appId: "1:745970771566:web:1b0607362279665074a87f",
    measurementId: "G-XTRFZJTMEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exporting for use in all your HTML files
export { 
    db, 
    ref, 
    set, 
    push, 
    onValue, 
    query, 
    orderByChild, 
    startAt, 
    update, 
    remove,
    serverTimestamp 
};
