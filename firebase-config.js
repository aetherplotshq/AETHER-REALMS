/**
 * K ARCHIVE - Firebase Core Engine
 * Handled Sections: Gaming (12 Games), Millionaires, Social, Nations, 1M Grid
 */

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

// Initialize Firebase Instance
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/** * Exporting all necessary modules
 * This will be used in: manual_update.html and all Game Canvas files
 */
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
