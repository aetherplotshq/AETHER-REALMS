import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, remove, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://aether-realms-default-rtdb.firebaseio.com" // আপনার ডাটাবেস ইউআরএল
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, set, onValue, push, remove, update };
