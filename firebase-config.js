import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, remove, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

// এগুলো এক্সপোর্ট করছি যাতে অন্য ফাইলে ব্যবহার করা যায়
export { db, ref, set, onValue, push, remove, update, serverTimestamp };
