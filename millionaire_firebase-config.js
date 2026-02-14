/**
 * K ARCHIVE - Millionaire Canvas Core Engine
 * Project: Aether Realms
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    push, 
    serverTimestamp,
    onValue 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ফায়ারবেস কনফিগারেশন
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

// অ্যাপ এবং ডাটাবেস ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/** * SECTIONS পাথ সেটিংস:
 * আপনার রুলস অনুযায়ী ডাটা 'pending_orders/Millionaire' পাথে জমা হবে।
 */
const SECTIONS = {
    MILLIONAIRE_PENDING: "pending_orders/Millionaire"
};

// মেইন ফাইলে ব্যবহারের জন্য প্রয়োজনীয় ফাংশন ও ভেরিয়েবল এক্সপোর্ট
export { 
    db, 
    ref, 
    push, 
    serverTimestamp, 
    onValue, 
    SECTIONS 
};
