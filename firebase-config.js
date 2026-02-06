/**
 * K ARCHIVE - Universal Firebase Core Engine
 * All-in-One Config for 9 Manual Update Panels
 * Author: K Archive Dev Team
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    push, 
    onValue, 
    update, 
    remove,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ফায়ারবেস কনফিগারেশন (আপনার দেওয়া ডাটা অনুযায়ী)
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

// ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/**
 * আপনার ৯টি সেকশনের ডাটাবেস পাথ লিস্ট।
 * আপনি যখন যে সেকশনের জন্য ম্যানুয়াল প্যানেল বানাবেন, এখান থেকে সেই নাম ব্যবহার করবেন।
 */
const SECTIONS = {
    MILLIONAIRE: "estate_data/Millionaire",
    NATIONS:     "estate_data/Nations",
    GAMING:      "estate_data/Gaming",
    SOCIAL:      "estate_data/Social",
    BILLIONAIRE: "estate_data/Billionaire",
    LUXURY:      "estate_data/Luxury",
    ENTERPRISE:  "estate_data/Enterprise",
    EXCLUSIVE:   "estate_data/Exclusive",
    ARCHIVE:     "estate_data/Archive"
};

// সব প্রয়োজনীয় ফাংশন এক্সপোর্ট করা হচ্ছে
export { 
    db, 
    ref, 
    set, 
    push, 
    onValue, 
    update, 
    remove,
    serverTimestamp,
    SECTIONS 
};
