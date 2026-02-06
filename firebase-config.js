/**
 * K ARCHIVE - Universal Firebase Core Engine
 * All-in-One Config for 9 Manual Update Panels
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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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

// একদম নিচের এই অংশটুকু খেয়াল করুন, এখানে সব ঠিক থাকতে হবে
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
