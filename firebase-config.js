// Firebase SDK modules ইম্পোর্ট করা
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

// আপনার Firebase প্রজেক্টের কনফিগারেশন (Firebase Console থেকে সংগ্রহ করুন)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // এখানে আপনার API Key বসান
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase ইনিশিয়ালাইজ করা
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// অন্যান্য ফাইলে ব্যবহারের জন্য এক্সপোর্ট করা
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
