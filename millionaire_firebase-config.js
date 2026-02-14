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

// আপনার প্রোভাইড করা ফায়ারবেস কনফিগারেশন
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

// ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/** * আপনার রুলস অনুযায়ী পাথ সেট করা হয়েছে:
 * "pending_orders" সেকশনে ডাটা রাইট করার পারমিশন 'true' দেওয়া আছে।
 */
const SECTIONS = {
    MILLIONAIRE_PENDING: "pending_orders/Millionaire"
};

// শুধুমাত্র এই প্রজেক্টের জন্য প্রয়োজনীয় ডাটা এক্সপোর্ট
export { 
    db, 
    ref, 
    push, 
    serverTimestamp, 
    onValue, 
    SECTIONS 
};
